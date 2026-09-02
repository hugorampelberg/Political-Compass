#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const productionDataFiles = [
  'data/questionnaire.js',
  'data/parties.js',
  'data/governments.js',
  'data/index.js',
  'data/pcf-overrides.js',
  'data/rn-overrides.js',
  'data/lfi-overrides.js',
  'data/pays-bas-overrides.js',
  'data/danemark-overrides.js',
  'data/suisse-overrides.js',
  'data/finlande-overrides.js',
  'data/allemagne-overrides.js',
  'data/government-final-overrides.js',
  'data/q69-overrides.js',
  'data/q69-question-restore.js',
  'data/q48-overrides.js',
  'data/q19-immigration-volume-overrides.js'
];

const context = { console };
vm.createContext(context);
for (const relativePath of productionDataFiles) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
  vm.runInContext(source, context, { filename: relativePath });
}
vm.runInContext('globalThis.__DATA__ = DATA;', context);

const data = context.__DATA__;
const axes = data.axes.map(axis => axis.key);
const questionCount = data.questions.length;
const openQuestionCount = data.openQuestions.length;
const tolerance = 1e-12;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function almostEqual(actual, expected) {
  return Math.abs(actual - expected) <= tolerance;
}

assert(questionCount === 88, `88 questions fermées attendues, ${questionCount} présentes.`);
assert(openQuestionCount === 5, `5 questions ouvertes attendues, ${openQuestionCount} présentes.`);
assert(
  data.meta?.questionCount === questionCount,
  `meta.questionCount vaut ${data.meta?.questionCount}, mais ${questionCount} questions sont présentes.`
);

const questionIds = data.questions.map(question => question.id);
const openQuestionIds = data.openQuestions.map(question => question.id);
const allQuestionIds = [...questionIds, ...openQuestionIds];
assert(new Set(allQuestionIds).size === allQuestionIds.length, 'Les identifiants des questions ne sont pas uniques.');
assert(
  allQuestionIds.every((id, index) => id === index + 1),
  `Les identifiants doivent être continus de 1 à ${allQuestionIds.length}.`
);
assert(Math.max(...questionIds) < Math.min(...openQuestionIds), 'Les questions ouvertes doivent suivre les questions fermées.');

const q88 = data.questions.find(question => question.id === 88);
assert(q88, 'Q88 est absente.');
assert(q88.theme === 'Économie / fiscalité', 'Le thème de Q88 est incorrect.');
assert(almostEqual(q88.coefficients.economy, -0.8), 'Le coefficient économie de Q88 doit valoir -0,8.');
assert(
  q88.text === "Il faudrait diminuer les prélèvements sur les revenus du travail et, en contrepartie, augmenter ceux qui pèsent sur les revenus du capital et le patrimoine.",
  'La formulation de Q88 a été modifiée.'
);

for (const axis of axes) {
  const expectedMass = data.questions.reduce(
    (sum, question) => sum + Math.abs(question.coefficients[axis] || 0),
    0
  );
  assert(
    almostEqual(data.axisMasses[axis], expectedMass),
    `Masse incohérente pour ${axis}: ${data.axisMasses[axis]} au lieu de ${expectedMass}.`
  );
}
assert(almostEqual(data.axisMasses.economy, 25.1), `La masse économie devrait valoir 25,1 et vaut ${data.axisMasses.economy}.`);

assert(data.entities.length === 21, `21 entités attendues, ${data.entities.length} présentes.`);

for (const entity of data.entities) {
  for (const field of ['responses', 'confidence', 'justifications', 'sources']) {
    assert(
      Array.isArray(entity[field]) && entity[field].length === questionCount,
      `${entity.id}.${field} contient ${entity[field]?.length} valeurs au lieu de ${questionCount}.`
    );
  }

  entity.responses.forEach((response, index) => {
    assert(
      Number.isInteger(response) && response >= -3 && response <= 3,
      `${entity.id}.responses[${index}] doit être un entier compris entre -3 et 3.`
    );

    const justification = (entity.justifications[index] || '').trim();
    const source = (entity.sources[index] || '').trim();
    const prefix = justification.split(':')[0].toLocaleLowerCase('fr');
    assert(justification.length > 0, `${entity.id}.justifications[${index}] ne doit pas être vide.`);
    assert(source.startsWith('https://'), `${entity.id}.sources[${index}] doit être une URL HTTPS.`);
    assert(
      !(response < 0 && prefix.includes('accord') && !prefix.includes('désaccord')),
      `${entity.id}.justifications[${index}] annonce un accord pour une note négative.`
    );
    assert(
      !(response > 0 && (prefix.includes('désaccord') || prefix.includes('réserve'))),
      `${entity.id}.justifications[${index}] annonce une réserve ou un désaccord pour une note positive.`
    );
  });

  entity.confidence.forEach((confidence, index) => {
    assert(
      Number.isInteger(confidence) && confidence >= 1 && confidence <= 3,
      `${entity.id}.confidence[${index}] doit être un entier compris entre 1 et 3.`
    );
  });

  for (const axis of axes) {
    let numerator = 0;
    let mass = 0;
    data.questions.forEach((question, index) => {
      const coefficient = question.coefficients[axis] || 0;
      numerator += entity.responses[index] * coefficient;
      mass += Math.abs(coefficient);
    });
    const expectedScore = mass ? 10 * numerator / (3 * mass) : 0;
    assert(
      almostEqual(entity.axisScores[axis], expectedScore),
      `${entity.id}.axisScores.${axis} vaut ${entity.axisScores[axis]} au lieu de ${expectedScore}.`
    );
  }

  const expectedConfidence = entity.confidence.reduce((sum, value) => sum + value, 0) / questionCount;
  assert(
    almostEqual(entity.averageConfidence, expectedConfidence),
    `${entity.id}.averageConfidence vaut ${entity.averageConfidence} au lieu de ${expectedConfidence}.`
  );
}

console.log(
  `Validation OK : ${questionCount} questions fermées + ${openQuestionCount} ouvertes = ${questionCount + openQuestionCount}, ${data.entities.length} entités et ${axes.length} axes cohérents.`
);
