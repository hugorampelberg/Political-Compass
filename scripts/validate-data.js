#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {};
vm.createContext(context);

for (const relativePath of [
  'data/questionnaire.js',
  'data/parties.js',
  'data/governments.js'
]) {
  const source = fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
  vm.runInContext(source.replace(/^const /gm, 'var '), context, {
    filename: relativePath
  });
}

const questionnaire = context.QUESTIONNAIRE_DATA;
const entities = [...context.PARTIES_DATA, ...context.GOVERNMENTS_DATA];
const axes = questionnaire.axes.map(axis => axis.key);
const questionCount = questionnaire.questions.length;
const openQuestionCount = questionnaire.openQuestions.length;
const tolerance = 1e-12;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function almostEqual(actual, expected) {
  return Math.abs(actual - expected) <= tolerance;
}

assert(
  questionnaire.meta.questionCount === questionCount,
  `meta.questionCount vaut ${questionnaire.meta.questionCount}, mais ${questionCount} questions sont présentes.`
);

const questionIds = questionnaire.questions.map(question => question.id);
const openQuestionIds = questionnaire.openQuestions.map(question => question.id);
const allQuestionIds = [...questionIds, ...openQuestionIds];

assert(
  questionnaire.meta.openQuestionCount === openQuestionCount,
  `meta.openQuestionCount vaut ${questionnaire.meta.openQuestionCount}, mais ${openQuestionCount} questions ouvertes sont présentes.`
);
assert(
  new Set(allQuestionIds).size === allQuestionIds.length,
  'Les identifiants des questions fermées et ouvertes ne sont pas uniques.'
);
assert(
  Math.max(...questionIds) < Math.min(...openQuestionIds),
  'Les questions ouvertes doivent toutes être numérotées après les questions fermées.'
);

for (const axis of axes) {
  const expectedMass = questionnaire.questions.reduce(
    (sum, question) => sum + Math.abs(question.coefficients[axis] || 0),
    0
  );
  assert(
    almostEqual(questionnaire.axisMasses[axis], expectedMass),
    `Masse incohérente pour ${axis}: ${questionnaire.axisMasses[axis]} au lieu de ${expectedMass}.`
  );
}

for (const entity of entities) {
  for (const field of ['responses', 'confidence', 'justifications', 'sources']) {
    assert(
      entity[field].length === questionCount,
      `${entity.id}.${field} contient ${entity[field].length} valeurs au lieu de ${questionCount}.`
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
    assert(
      justification.length > 0,
      `${entity.id}.justifications[${index}] ne doit pas être vide.`
    );
    assert(
      source.startsWith('https://'),
      `${entity.id}.sources[${index}] doit être une URL HTTPS.`
    );
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

    const justification = entity.justifications[index] || '';
    if (confidence === 3) {
      assert(
        !justification.includes('position centrale ou répétée'),
        `${entity.id}.confidence[${index}] ne peut pas valoir 3 avec une justification générique.`
      );
      assert(
        !justification.includes('estimation prudente ; aucune formulation parfaitement équivalente'),
        `${entity.id}.confidence[${index}] ne peut pas valoir 3 en l'absence de formulation équivalente.`
      );
    }
  });

  for (const axis of axes) {
    let numerator = 0;
    let mass = 0;
    questionnaire.questions.forEach((question, index) => {
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

  const expectedConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)
    / questionCount;
  assert(
    almostEqual(entity.averageConfidence, expectedConfidence),
    `${entity.id}.averageConfidence vaut ${entity.averageConfidence} au lieu de ${expectedConfidence}.`
  );
}

console.log(
  `Validation OK : ${questionCount} questions fermées + ${openQuestionCount} ouvertes = ${questionCount + openQuestionCount}, ${entities.length} entités et ${axes.length} axes cohérents.`
);
