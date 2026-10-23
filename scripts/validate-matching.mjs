#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { productionDataFiles } from './data-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = vm.createContext({ console, window: {}, localStorage: { getItem: () => null } });
for (const file of productionDataFiles) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
const app = fs.readFileSync(path.join(root, 'scripts/app.js'), 'utf8');
assert(app.includes('// Events'), 'Initialisation UI introuvable.');
vm.runInContext(app.slice(0, app.indexOf('// Events')), context, { filename: 'scripts/app.js' });
context.assert = assert;

vm.runInContext(`
const pp = DATA.entities.find(entity => entity.id === 'place-publique');
const ps = DATA.entities.find(entity => entity.id === 'ps');
const fallbackIds = [22,43,44,47,56,59,62,65,75,78,85];
assert.deepEqual(Array.from(DATA.questions.filter((q,i) => pp.positionStatus[i] === 'assumed'),q=>q.id), fallbackIds);
fallbackIds.forEach(id => {
  const i = DATA.questions.findIndex(q => q.id === id);
  assert.equal(pp.responses[i], ps.responses[i], 'La note reprise doit être celle du PS final.');
  assert.equal(pp.sources[i], ps.sources[i]);
  assert.equal(pp.confidence[i], 1);
  assert(pp.justifications[i].includes(ps.justifications[i]));
});
assert(!pp.positionStatus.includes('undocumented'), 'Les 88 réponses de Place publique doivent compter.');
for (const mode of Object.values(QUIZ_MODES)) {
  state = initialState(mode);
  state.priority = EQUAL_PRIORITY;
  for (const entity of DATA.entities) {
    state.answers = [...entity.responses];
    const result = entityResult(entity, userAxisScores(), axisWeights());
    assert(Math.abs(result.global - 100) < 1e-10, entity.id + ' : un profil identique doit atteindre 100 %.');
  }
  state.answers = [...pp.responses];
  const before = entityResult(pp, userAxisScores(), axisWeights());
  const assumed = activeQuestions().filter(({i}) => pp.positionStatus[i] === 'assumed');
  assert(assumed.length > 0);
  assumed.forEach(({i}) => { state.answers[i] = pp.responses[i] === 0 ? 3 : -pp.responses[i]; });
  assert(entityResult(pp,userAxisScores(),axisWeights()).global < before.global, 'Les réponses reprises du PS doivent participer à la proximité.');
  assert(positionCoverage(pp).includes(assumed.length + ' réponses reprises du PS par défaut'));

  // Vérifie séparément le mécanisme générique des positions réellement inconnues.
  const partial = {...pp, positionStatus: pp.positionStatus.map(status => status === 'assumed' ? 'undocumented' : status)};
  partial.axisScores = axisScoresFromAnswers(partial.responses,partial);
  state.answers = [...pp.responses];
  const partialBefore = entityResult(partial,userAxisScores(),axisWeights());
  const unknown = activeQuestions().filter(({i}) => !hasDocumentedPosition(partial,i));
  assert(unknown.length > 0, 'Le scénario doit couvrir des positions inconnues.');
  unknown.forEach(({i}) => { state.answers[i] = 3; });
  const after = entityResult(partial, userAxisScores(), axisWeights());
  assert.equal(after.global, partialBefore.global, 'Une réponse inconnue ne doit pas être comparée à zéro.');
  assert.deepEqual(after.detailed, partialBefore.detailed, 'Les similitudes par axe doivent exclure les inconnues.');
  const altered = {...partial, responses: partial.responses.map((value,i) => hasDocumentedPosition(partial,i) ? value : -3)};
  if (mode === QUIZ_MODES.QUICK) assert.deepEqual(entityAxisScores(altered), entityAxisScores(partial));
  const drivers = driversFor(partial);
  [...drivers.agree, ...drivers.disagree].forEach(({i}) => assert(hasDocumentedPosition(partial,i)));
  DATA.axes.forEach(axis => assert(activeQuestions().some(({q,i}) => hasDocumentedPosition(pp,i) && Math.abs(q.coefficients[axis.key]) > 0), 'Chaque axe doit rester documenté.'));

  // Un vrai zéro doit, lui, continuer à compter : Q14 est un arbitrage documenté.
  const q14 = DATA.questions.findIndex(question => question.id === 14);
  assert(hasDocumentedPosition(pp,q14) && pp.responses[q14] === 0);
  state.answers = [...pp.responses];
  state.answers[q14] = 3;
  assert(entityResult(pp,userAxisScores(),axisWeights()).global < before.global);
  const html = renderAllNotesSection(pp);
  assert(!html.includes('Non documentée · exclue du calcul'));
  assert(html.includes('reprise du PS par défaut'));
  assert(html.includes('Source du PS'));
  assert(renderAllNotesSection(partial).includes('Non documentée · exclue du calcul'));
  assert(html.includes('Confiance documentaire :'));
  assert.equal((html.match(/class="all-notes-question-meta"/g) || []).length, 88);

  for (const value of [-3, 0, 3]) {
    state.answers = DATA.questions.map(() => value);
    const results = calculateResults();
    assert.equal(results.parties.length, 14);
    assert.equal(results.governments.length, 8);
    assert(results.parties.some(entity => entity.id === 'place-publique'));
    results.entities.forEach(entity => assert(Number.isFinite(entity.global) && entity.global >= 0 && entity.global <= 100));
  }
}
`, context);
console.log('Comparaison OK : 22 profils, modes rapide et complet, 11 notes du PS intégrées et vrais zéros conservés.');
