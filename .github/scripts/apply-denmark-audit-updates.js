#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';

function loadConst(path, variableName) {
  const context = {};
  vm.createContext(context);
  const source = fs.readFileSync(path, 'utf8');
  vm.runInContext(source.replace(/^const /gm, 'var '), context, { filename: path });
  return context[variableName];
}

const questionnairePath = 'data/questionnaire.js';
const governmentsPath = 'data/governments.js';
const questionnaire = loadConst(questionnairePath, 'QUESTIONNAIRE_DATA');
const governments = loadConst(governmentsPath, 'GOVERNMENTS_DATA');
const axes = questionnaire.axes.map(a => a.key);
const qIndex = new Map(questionnaire.questions.map((q, i) => [q.id, i]));
const denmark = governments.find(g => g.id === 'danemark');
if (!denmark) throw new Error('Danemark introuvable');

const changes = [
  [44, -1, 1, 'Accord modéré : le gouvernement relève l’abattement successoral mais augmente aussi la taxation des héritages les plus élevés ; cela va dans le sens d’une taxation accrue au-delà d’un seuil, avec une intensité limitée par le ciblage de la mesure.'],
  [50, 0, 1, 'Accord modéré : le Danemark conserve un mécanisme liant l’évolution de l’âge de la retraite à l’espérance de vie, mais les relèvements restent validés politiquement et ne relèvent pas d’une automaticité pure.'],
  [92, 1, 3, 'Accord fort : le gouvernement met en œuvre une limite de 15 ans pour l’accès aux réseaux sociaux et veut supprimer la dérogation parentale permettant actuellement un accès plus précoce.'],
  [55, 1, 0, 'Position équilibrée : le gouvernement veut réduire fortement les charges réglementaires des entreprises, mais précise que cette simplification ne doit pas affaiblir les protections fondamentales sociales, environnementales ou des consommateurs.'],
  [27, 1, 2, 'Accord net : le gouvernement prévoit des peines plus lourdes pour les crimes violents et renforce les capacités carcérales, tout en maintenant des politiques de prévention et de réinsertion.'],
  [5, -1, -2, 'Désaccord net : le Danemark ne fixe pas de salaire minimum légal national et défend la détermination des salaires par les partenaires sociaux plutôt que par une hausse décidée par la loi.'],
  [26, -1, -2, 'Désaccord net : le gouvernement maintient une ligne restrictive sur l’asile, cherche à réduire les arrivées et soutient des dispositifs de traitement ou de retour hors d’Europe, tout en respectant les obligations internationales.'],
  [33, 2, 1, 'Accord modéré : le gouvernement accepte une tarification du carbone et une transition climatique ambitieuse, mais cherche aussi à préserver le pouvoir d’achat et la compétitivité ; il ne défend pas sans réserve une forte hausse du prix des énergies fossiles.'],
  [35, 1, 0, 'Position équilibrée : la politique climatique danoise combine taxe carbone, mécanismes de marché, subventions, normes et interdictions ; aucune préférence générale pour le marché plutôt que pour la réglementation ne se dégage.'],
  [75, -1, -2, 'Désaccord net : le système politique danois repose sur l’égalité du suffrage et ne prévoit pas de donner davantage de poids politique aux citoyens selon leur niveau de connaissance.'],
  [76, -1, -2, 'Désaccord net : le gouvernement dépend en permanence du Folketing et ne peut pas gouverner durablement contre une majorité parlementaire ; le modèle danois ne va pas dans le sens d’un exécutif renforcé afin de contourner le Parlement.'],
  [83, 3, 2, 'Accord net : le Danemark accepte la concentration de certains soins hospitaliers et services spécialisés, mais la réforme actuelle cherche aussi à rapprocher une partie des soins des habitants ; le soutien au regroupement n’est donc pas absolu.'],
  [90, -1, -3, 'Désaccord fort : la politique danoise de la dépendance maintient et organise la coexistence de prestataires publics et privés, avec libre choix et égalité de traitement ; elle est à l’opposé d’une interdiction des gestionnaires privés lucratifs.']
];

for (const [qid, expected, next, justification] of changes) {
  const i = qIndex.get(qid);
  if (i === undefined) throw new Error(`Q${qid} introuvable`);
  const current = denmark.responses[i];
  if (current !== expected && current !== next) {
    throw new Error(`Danemark Q${qid}: attendu ${expected} (ou déjà ${next}), trouvé ${current}`);
  }
  denmark.responses[i] = next;
  denmark.justifications[i] = justification;
}

denmark.axisScores = Object.fromEntries(axes.map(axis => {
  let numerator = 0;
  let mass = 0;
  questionnaire.questions.forEach((q, index) => {
    const coefficient = q.coefficients[axis] || 0;
    numerator += denmark.responses[index] * coefficient;
    mass += Math.abs(coefficient);
  });
  return [axis, mass ? 10 * numerator / (3 * mass) : 0];
}));

fs.writeFileSync(
  governmentsPath,
  `// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(governments, null, 2)};\n`
);

console.log('13 Danish responses updated and Denmark axis scores recomputed.');
