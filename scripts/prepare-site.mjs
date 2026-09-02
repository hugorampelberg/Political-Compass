#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// La génération SEO charge la même pile de données que l'application, y compris
// l'ajout final de Q88 dans data/q69-question-restore.js. Elle régénère donc les
// treize pages statiques de profils avec les 88 questions documentées.
await import('./generate-seo-pages.mjs');

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkHtml(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'public') continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkHtml(absolute));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(absolute);
  }
  return files;
}

// Quelques pages éditoriales (dont l'accueil et /partis-politiques/) contiennent
// le nombre de questions en texte statique. On les synchronise avec le nouveau
// total sans toucher aux nombres sans rapport avec le questionnaire.
const countReplacements = [
  ['40 ou 87', '40 ou 88'],
  ['87 questions', '88 questions'],
  ['87 affirmations', '88 affirmations'],
  ['87 réponses', '88 réponses'],
  ['87 positions', '88 positions'],
  ['87 justifications', '88 justifications'],
  ['Question 1 sur 87', 'Question 1 sur 88']
];

let patchedFiles = 0;
for (const file of walkHtml(projectRoot)) {
  const original = fs.readFileSync(file, 'utf8');
  let updated = original;
  for (const [before, after] of countReplacements) {
    updated = updated.replaceAll(before, after);
  }
  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8');
    patchedFiles += 1;
  }
}

const profileRoot = path.join(projectRoot, 'partis-politiques', 'profils');
const profileDirectories = fs.readdirSync(profileRoot, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

const expectedQuestion = "Il faudrait diminuer les prélèvements sur les revenus du travail et, en contrepartie, augmenter ceux qui pèsent sur les revenus du capital et le patrimoine.";

if (profileDirectories.length !== 13) {
  throw new Error(`13 profils de partis attendus, ${profileDirectories.length} trouvés.`);
}

for (const slug of profileDirectories) {
  const profilePath = path.join(profileRoot, slug, 'index.html');
  const html = fs.readFileSync(profilePath, 'utf8');
  const rowCount = (html.match(/class="evidence-question-meta"/g) || []).length;
  if (rowCount !== 88) {
    throw new Error(`${slug}: 88 questions statiques attendues, ${rowCount} trouvées.`);
  }
  if (!html.includes('Q88 · Économie / fiscalité') || !html.includes(expectedQuestion)) {
    throw new Error(`${slug}: la Q88 fiscale est absente du profil statique.`);
  }
}

const home = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
if (!home.includes('88 questions') || home.includes('40 ou 87')) {
  throw new Error("Le nombre de questions affiché sur la page d'accueil n'est pas synchronisé à 88.");
}

// Le projet Vercel attend un dossier de sortie "public". On y copie le site
// statique préparé, tout en laissant /api à la racine pour que Vercel continue
// à construire les fonctions serveur séparément.
const outputRoot = path.join(projectRoot, 'public');
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

const excludedRootNames = new Set([
  '.git',
  '.github',
  '.vercel',
  'node_modules',
  'public',
  'api',
  'package.json',
  'package-lock.json',
  'vercel.json'
]);

for (const entry of fs.readdirSync(projectRoot, { withFileTypes: true })) {
  if (excludedRootNames.has(entry.name) || entry.name.endsWith('.md')) continue;
  const source = path.join(projectRoot, entry.name);
  const destination = path.join(outputRoot, entry.name);
  fs.cpSync(source, destination, { recursive: true });
}

const publicHome = path.join(outputRoot, 'index.html');
if (!fs.existsSync(publicHome)) {
  throw new Error('Le build statique public/index.html est absent.');
}

console.log(`Préparation du site OK : 88 questions, 13 profils régénérés, ${patchedFiles} pages éditoriales synchronisées, sortie public/ créée.`);
