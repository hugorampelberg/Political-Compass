import fs from 'node:fs';

const path = 'scripts/generate-seo-pages.mjs';
let source = fs.readFileSync(path, 'utf8');

const anchor = "  'data/allemagne-overrides.js',\n  'data/q19-immigration-volume-overrides.js'";
const replacement = "  'data/allemagne-overrides.js',\n  'data/government-final-overrides.js',\n  'data/q69-overrides.js',\n  'data/q69-question-restore.js',\n  'data/q48-overrides.js',\n  'data/q19-immigration-volume-overrides.js'";

if (!source.includes("'data/government-final-overrides.js'")) {
  if (!source.includes(anchor)) {
    throw new Error('Ancre productionDataFiles introuvable');
  }
  source = source.replace(anchor, replacement);
  fs.writeFileSync(path, source, 'utf8');
}
