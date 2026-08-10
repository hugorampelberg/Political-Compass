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
const govById = new Map(governments.map(g => [g.id, g]));

function setResponse(id, qid, expected, next, justification) {
  const g = govById.get(id);
  if (!g) throw new Error(`Government not found: ${id}`);
  const i = qIndex.get(qid);
  if (i === undefined) throw new Error(`Question not found: Q${qid}`);
  const current = g.responses[i];
  if (current !== expected && current !== next) {
    throw new Error(`${id} Q${qid}: expected ${expected} (or already ${next}), found ${current}`);
  }
  g.responses[i] = next;
  g.justifications[i] = justification;
}

// Q15 — new budget without parliamentary vote: harmonised institutional comparison.
setResponse('allemagne', 15, -2, -2, 'Désaccord net : le budget fédéral doit être adopté par le Bundestag ; il n’existe pas de mécanisme permettant au gouvernement de mettre en vigueur un nouveau budget en écartant le vote parlementaire.');
setResponse('espagne', 15, -1, -2, 'Désaccord net : en cas de blocage, le budget précédent est prorogé automatiquement ; un nouveau budget doit être approuvé par les Cortes et ne peut pas être imposé unilatéralement par le gouvernement.');
setResponse('suisse', 15, 0, -2, 'Désaccord net : l’Assemblée fédérale décide du budget de la Confédération ; le Conseil fédéral ne peut pas mettre en vigueur seul un nouveau budget faute de majorité parlementaire.');
setResponse('finlande', 15, -2, -2, 'Désaccord net : le budget de l’État relève de l’approbation du Parlement ; l’exécutif ne dispose pas d’un équivalent permettant d’imposer seul un nouveau budget en cas d’absence de majorité.');
setResponse('royaume-uni', 15, -2, -2, 'Désaccord net : les dépenses et recettes publiques nécessitent l’autorisation du Parlement ; le gouvernement ne peut pas substituer un nouveau budget unilatéral à l’approbation parlementaire.');
setResponse('danemark', 15, -1, -2, 'Désaccord net : la loi de finances doit être adoptée par le Folketing ; le gouvernement ne peut pas mettre en vigueur seul un nouveau budget pour contourner une absence de majorité.');
setResponse('pays-bas', 15, -1, -2, 'Désaccord net : les budgets ministériels sont approuvés par les États généraux ; l’exécutif ne dispose pas d’un mécanisme lui permettant d’imposer seul un nouveau budget en cas de blocage.');
setResponse('pologne', 15, -2, -2, 'Désaccord net : le budget prend la forme d’une loi adoptée par le Sejm ; le gouvernement ne peut pas faire entrer en vigueur seul un nouveau budget sans approbation parlementaire.');

// Q81 — restricting access to public reimbursement/conventioning in over-supplied areas.
setResponse('suisse', 81, 2, 3, 'Accord fort : les cantons peuvent fixer, par région et spécialité, un nombre maximal de médecins admis à facturer à l’assurance obligatoire ; le mécanisme est directement comparable à une limitation du conventionnement dans les zones surdotées.');
setResponse('danemark', 81, 2, 3, 'Accord fort : la planification de la médecine générale répartit les capacités et autorisations d’exercice financées par le système public selon les besoins territoriaux afin de mieux distribuer les médecins.');
setResponse('espagne', 81, 2, 1, 'Accord modéré : l’Espagne planifie les effectifs et soutient les postes difficiles à pourvoir, mais il n’existe pas de mécanisme national directement équivalent à une limitation du conventionnement dans les zones déjà bien dotées.');
setResponse('royaume-uni', 81, 2, 1, 'Accord modéré : le NHS contrôle les contrats et la répartition des ressources médicales, mais le mécanisme n’est pas directement équivalent à une interdiction de nouveau conventionnement dans les zones surdotées.');

// Q48 — employment protection/flexicurity analogy.
setResponse('danemark', 48, 0, 1, 'Accord modéré : le modèle danois de flexicurité repose sur une protection de l’emploi permanent plus flexible qu’en France, tout en conservant des préavis et des garanties contre les licenciements injustifiés.');

// Q85 — public funding of private schools and social-mix conditions.
setResponse('allemagne', 85, 0, 1, 'Accord modéré : les écoles privées reconnues ne doivent pas favoriser une séparation des élèves selon la fortune des parents ; le principe va dans le sens de la mixité, sans constituer un objectif chiffré directement conditionnant le financement public.');
setResponse('pays-bas', 85, 1, 0, 'Position neutre : les écoles privées peuvent recevoir un financement public sous des conditions générales de qualité et de fonctionnement, mais aucun objectif national directement comparable de mixité sociale conditionnant ce financement n’est établi.');

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

for (const government of governments) recomputeAxisScores(government);

fs.writeFileSync(
  governmentsPath,
  `// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(governments, null, 2)};\n`
);

console.log('Country-specific question updates applied and government axis scores recomputed.');
