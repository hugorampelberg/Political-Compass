#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';

const files = {
  questionnaire: 'data/questionnaire.js',
  parties: 'data/parties.js',
  governments: 'data/governments.js'
};

function loadConst(path, variableName) {
  const context = {};
  vm.createContext(context);
  const source = fs.readFileSync(path, 'utf8');
  vm.runInContext(source.replace(/^const /gm, 'var '), context, { filename: path });
  return context[variableName];
}

const questionnaire = loadConst(files.questionnaire, 'QUESTIONNAIRE_DATA');
const parties = loadConst(files.parties, 'PARTIES_DATA');
const governments = loadConst(files.governments, 'GOVERNMENTS_DATA');

const axes = questionnaire.axes.map(axis => axis.key);
const questionById = new Map(questionnaire.questions.map(q => [q.id, q]));

const requestedChanges = [
  [34, 'authority', -0.5, -0.2],
  [47, 'authority', 0.2, 0],
  [61, 'authority', -0.7, -0.5],
  [69, 'ecology', -0.8, -0.7],
  [80, 'authority', 0.6, 0.5],
  [81, 'economy', -0.7, -0.5],
  [86, 'democracy', 0.2, 0]
];

for (const [id, axis, expected, next] of requestedChanges) {
  const q = questionById.get(id);
  if (!q) throw new Error(`Question Q${id} introuvable`);
  const current = q.coefficients[axis];
  if (current !== expected) {
    throw new Error(`Q${id} ${axis}: valeur attendue ${expected}, valeur actuelle ${current}`);
  }
  q.coefficients[axis] = next;
}

const computedMasses = Object.fromEntries(axes.map(axis => [
  axis,
  questionnaire.questions.reduce((sum, q) => sum + Math.abs(q.coefficients[axis] || 0), 0)
]));
questionnaire.axisMasses = computedMasses;

function recomputeAxisScores(entity) {
  entity.axisScores = Object.fromEntries(axes.map(axis => {
    let numerator = 0;
    let mass = 0;
    questionnaire.questions.forEach((q, index) => {
      const coefficient = q.coefficients[axis] || 0;
      numerator += entity.responses[index] * coefficient;
      mass += Math.abs(coefficient);
    });
    return [axis, mass ? 10 * numerator / (3 * mass) : 0];
  }));
}

for (const entity of parties) recomputeAxisScores(entity);
for (const entity of governments) recomputeAxisScores(entity);

function write(path, comment, variableName, value) {
  fs.writeFileSync(path, `${comment}\nconst ${variableName} = ${JSON.stringify(value, null, 2)};\n`);
}

write(files.questionnaire, '// Questions, axes et métadonnées du questionnaire.', 'QUESTIONNAIRE_DATA', questionnaire);
write(files.parties, '// Données de comparaison avec les partis politiques français.', 'PARTIES_DATA', parties);
write(files.governments, '// Données de comparaison avec les gouvernements étrangers.', 'GOVERNMENTS_DATA', governments);

console.log('New axis masses:', JSON.stringify(computedMasses));
console.log(`Recomputed ${parties.length} parties and ${governments.length} governments.`);

// Triggered after workflow creation.
