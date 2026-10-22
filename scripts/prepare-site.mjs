#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { productionDataFiles } from './data-files.mjs';
import { fileURLToPath } from 'node:url';

// La génération SEO charge la même pile de données que l'application, y compris
// l'ajout final de Q88 dans data/q69-question-restore.js. Elle régénère donc les
// quatorze pages statiques de profils avec les 88 questions documentées.
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

const ADSENSE_CLIENT = 'ca-pub-6201499207692945';
const ADSENSE_SCRIPT = `  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
     crossorigin="anonymous"></script>`;

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
let adsenseInjectedFiles = 0;
for (const file of walkHtml(projectRoot)) {
  const original = fs.readFileSync(file, 'utf8');
  let updated = original;
  for (const [before, after] of countReplacements) {
    updated = updated.replaceAll(before, after);
  }

  // Le tag AdSense doit être présent sur toutes les vraies pages HTML du site.
  // Les pages déjà générées avec le tag ne sont pas modifiées une seconde fois.
  if (updated.includes('<head>') && !updated.includes(ADSENSE_CLIENT)) {
    updated = updated.replace('<head>', `<head>\n${ADSENSE_SCRIPT}`);
    adsenseInjectedFiles += 1;
  }

  // La page de confidentialité disait historiquement qu'aucun code publicitaire
  // n'y était chargé. Ce n'est plus exact puisque le tag AdSense y est désormais
  // présent afin que le message de consentement Google puisse fonctionner partout.
  if (path.relative(projectRoot, file) === 'confidentialite.html') {
    updated = updated
      .replace(
        "  <!-- Aucun outil de mesure ou de publicité n'est chargé sur cette page. -->",
        "  <!-- Le tag Google AdSense est chargé afin d'assurer une configuration cohérente du consentement Google sur l'ensemble du site. -->"
      )
      .replace(
        `      Cette page de confidentialité ne charge volontairement aucun outil de\n      mesure ou de publicité. Sur les pages qui utilisent ces services, leur\n      fonctionnement dépend de la configuration appliquée et, lorsqu’il est\n      requis, des choix exprimés dans le message de consentement Google.`,
        `      Le tag Google AdSense est chargé sur cette page comme sur les autres\n      pages du site, notamment pour permettre l’affichage et la gestion du message\n      de consentement Google. La diffusion d’annonces et l’utilisation de cookies\n      ou technologies similaires dépendent ensuite de la configuration appliquée,\n      de la localisation et, lorsqu’il est requis, des choix exprimés dans ce message.`
      )
      .replace(
        '      Le code Google AdSense est présent sur certaines pages éditoriales du site.',
        '      Le code Google AdSense est présent sur les pages du site.'
      );
  }

  if (updated !== original) {
    fs.writeFileSync(file, updated, 'utf8');
    patchedFiles += 1;
  }
}

// Sécurité de build : toute page HTML utilisateur possédant un <head> doit avoir
// le tag AdSense. Le petit fichier de validation Google, qui n'est pas une page
// utilisateur et ne possède pas de <head>, est naturellement ignoré.
const pagesMissingAdsense = walkHtml(projectRoot)
  .filter(file => {
    const html = fs.readFileSync(file, 'utf8');
    return html.includes('<head>') && !html.includes(ADSENSE_CLIENT);
  })
  .map(file => path.relative(projectRoot, file));

if (pagesMissingAdsense.length > 0) {
  throw new Error(`Tag AdSense absent de : ${pagesMissingAdsense.join(', ')}`);
}

// Le calibrage retenu pour les axes est 70 % de poids commun et 30 % de masse
// structurelle. Le fichier historique utilisait encore 40 % de masse structurelle ;
// on synchronise la version réellement déployée afin de ne pas surpondérer les axes
// qui comportent naturellement davantage de questions, notamment Économie.
const appPath = path.join(projectRoot, 'scripts', 'app.js');
let appSource = fs.readFileSync(appPath, 'utf8');
const structuralWeightPattern = /const STRUCTURAL_WEIGHT_SHARE = (?:0\.3|0\.4);/;
if (!structuralWeightPattern.test(appSource)) {
  throw new Error('Constante STRUCTURAL_WEIGHT_SHARE introuvable dans scripts/app.js.');
}
appSource = appSource.replace(structuralWeightPattern, 'const STRUCTURAL_WEIGHT_SHARE = 0.3;');
fs.writeFileSync(appPath, appSource, 'utf8');

// Le navigateur charge exactement les mêmes données que les fiches et les tests.
const homePath = path.join(projectRoot, 'index.html');
let home = fs.readFileSync(homePath, 'utf8');
const dataBlockPattern = /(?:  <script src="\/data\/[^"\n]+"><\/script>\n)+/g;
const dataBlocks = [...home.matchAll(dataBlockPattern)];
if (dataBlocks.length !== 1) throw new Error("Bloc unique de données introuvable dans l'accueil.");
const dataScripts = productionDataFiles.map(file => `  <script src="/${file}"></script>\n`).join('');
if (dataBlocks[0][0] !== dataScripts) {
  home = home.replace(dataBlockPattern, () => dataScripts);
  fs.writeFileSync(homePath, home, 'utf8');
  patchedFiles += 1;
}

const profileRoot = path.join(projectRoot, 'partis-politiques', 'profils');
const profileDirectories = fs.readdirSync(profileRoot, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

const expectedQuestion = "Il faudrait diminuer les prélèvements sur les revenus du travail et, en contrepartie, augmenter ceux qui pèsent sur les revenus du capital et le patrimoine.";

if (profileDirectories.length !== 14) {
  throw new Error(`14 profils de partis attendus, ${profileDirectories.length} trouvés.`);
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

home = fs.readFileSync(homePath, 'utf8');
if (!home.includes('88 questions') || home.includes('40 ou 87')) {
  throw new Error("Le nombre de questions affiché sur la page d'accueil n'est pas synchronisé à 88.");
}
if (!home.includes('<script src="/data/q69-question-restore.js"></script>')) {
  throw new Error("Le correctif de données qui ajoute Q88 n'est pas chargé par l'accueil.");
}
if (!fs.readFileSync(appPath, 'utf8').includes('const STRUCTURAL_WEIGHT_SHARE = 0.3;')) {
  throw new Error('Le calibrage 70/30 des axes n’est pas appliqué au moteur.');
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
const publicHomeHtml = fs.readFileSync(publicHome, 'utf8');
if (!publicHomeHtml.includes('/data/q69-question-restore.js')) {
  throw new Error('La sortie public ne charge pas le correctif Q88.');
}
const publicApp = fs.readFileSync(path.join(outputRoot, 'scripts', 'app.js'), 'utf8');
if (!publicApp.includes('const STRUCTURAL_WEIGHT_SHARE = 0.3;')) {
  throw new Error('La sortie public n’utilise pas le calibrage 70/30 des axes.');
}

const publicPagesMissingAdsense = walkHtml(outputRoot)
  .filter(file => {
    const html = fs.readFileSync(file, 'utf8');
    return html.includes('<head>') && !html.includes(ADSENSE_CLIENT);
  })
  .map(file => path.relative(outputRoot, file));

if (publicPagesMissingAdsense.length > 0) {
  throw new Error(`Sortie public : tag AdSense absent de : ${publicPagesMissingAdsense.join(', ')}`);
}

console.log(`Préparation du site OK : 88 questions, 14 profils régénérés, ${patchedFiles} pages éditoriales synchronisées, ${adsenseInjectedFiles} tags AdSense ajoutés, pondération axes 70/30, sortie public/ créée.`);
