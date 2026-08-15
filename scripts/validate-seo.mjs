#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://www.frenchpoliticalcompass.com';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
}

function pathnameToFile(pathname) {
  if (pathname === '/') return 'index.html';
  if (pathname.endsWith('/')) return `${pathname.slice(1)}index.html`;
  return pathname.slice(1);
}

const sitemap = read('sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(urls.length === new Set(urls).size, 'Le sitemap contient des URL en double.');

const titles = new Map();
for (const url of urls) {
  const parsed = new URL(url);
  assert(parsed.origin === siteOrigin, `Origine inattendue dans le sitemap : ${url}`);
  const relativePath = pathnameToFile(parsed.pathname);
  const absolutePath = path.join(projectRoot, relativePath);
  assert(fs.existsSync(absolutePath), `URL du sitemap sans fichier : ${relativePath}`);

  const html = read(relativePath);
  assert(!/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html), `Page du sitemap en noindex : ${relativePath}`);
  assert(html.includes(`<link rel="canonical" href="${url}">`) || html.includes(`<link rel="canonical" href="${url}" />`), `Canonical absent ou différent : ${relativePath}`);
  assert(/<h1(?:\s|>)/i.test(html), `H1 absent : ${relativePath}`);
  assert(/<meta[^>]+name=["']description["']/i.test(html), `Meta description absente : ${relativePath}`);

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  assert(title, `Title absent : ${relativePath}`);
  assert(!titles.has(title), `Title dupliqué entre ${titles.get(title)} et ${relativePath} : ${title}`);
  titles.set(title, relativePath);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
  }
}

const questionPages = urls.filter((url) => /\/questions\/q\d+\/$/.test(url));
assert(questionPages.length === 18, `Le sitemap devrait contenir 18 fiches de questions, pas ${questionPages.length}.`);
for (const url of questionPages) {
  const html = read(pathnameToFile(new URL(url).pathname));
  assert(html.includes('Arguments en faveur'), `Arguments statiques absents : ${url}`);
  assert(html.includes('Arguments défavorables ou réserves'), `Réserves statiques absentes : ${url}`);
  assert(html.includes('Sources et lectures de référence'), `Sources statiques absentes : ${url}`);
  assert(!html.includes('Chargement des précisions'), `Contenu encore dépendant du JavaScript : ${url}`);
  assert(!html.includes('/scripts/question-detail-page.js'), `Ancien moteur dynamique encore chargé : ${url}`);
}

const profilePages = urls.filter((url) => /\/partis-politiques\/profils\/[^/]+\/$/.test(url));
assert(profilePages.length === 13, `Le sitemap devrait contenir 13 profils de partis, pas ${profilePages.length}.`);
for (const url of profilePages) {
  const html = read(pathnameToFile(new URL(url).pathname));
  const rowCount = (html.match(/class="evidence-question-meta"/g) || []).length;
  assert(rowCount === 87, `${url} devrait contenir 87 questions statiques, pas ${rowCount}.`);
  assert(!html.includes('Chargement des données documentaires'), `Profil encore dépendant du JavaScript : ${url}`);
}

const questionHub = read('questions/index.html');
assert(!questionHub.includes('noindex'), 'Le hub /questions/ est encore en noindex.');
assert((questionHub.match(/class="question-index-card"/g) || []).length === 18, 'Le hub /questions/ ne relie pas les 18 fiches.');

const partyIndex = read('partis-politiques/index.html');
assert(!partyIndex.includes('/profils/#'), 'Les anciens liens de profils avec fragments sont encore présents.');

console.log(`Validation SEO OK : ${urls.length} URL canoniques, ${questionPages.length} fiches statiques et ${profilePages.length} profils statiques.`);
