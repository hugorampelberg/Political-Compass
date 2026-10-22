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
  const unknown = activeQuestions().filter(({i}) => !hasDocumentedPosition(pp,i));
  assert(unknown.length > 0, 'Le scénario doit couvrir des positions inconnues.');
  unknown.forEach(({i}) => { state.answers[i] = 3; });
  const after = entityResult(pp, userAxisScores(), axisWeights());
  assert.equal(after.global, before.global, 'Une réponse inconnue ne doit pas être comparée à zéro.');
  assert.deepEqual(after.detailed, before.detailed, 'Les similitudes par axe doivent exclure les inconnues.');
  const altered = {...pp, responses: pp.responses.map((value,i) => hasDocumentedPosition(pp,i) ? value : -3)};
  if (mode === QUIZ_MODES.QUICK) assert.deepEqual(entityAxisScores(altered), entityAxisScores(pp));
  const drivers = driversFor(pp);
  [...drivers.agree, ...drivers.disagree].forEach(({i}) => assert(hasDocumentedPosition(pp,i)));
  const coverage = activeQuestions().filter(({i}) => hasDocumentedPosition(pp,i)).length;
  assert(positionCoverage(pp).startsWith(coverage + '/' + activeQuestionCount()));
  DATA.axes.forEach(axis => assert(activeQuestions().some(({q,i}) => hasDocumentedPosition(pp,i) && Math.abs(q.coefficients[axis.key]) > 0), 'Chaque axe doit rester documenté.'));

  // Un vrai zéro doit, lui, continuer à compter : Q14 est un arbitrage documenté.
  const q14 = DATA.questions.findIndex(question => question.id === 14);
  assert(hasDocumentedPosition(pp,q14) && pp.responses[q14] === 0);
  state.answers[q14] = 3;
  assert(entityResult(pp,userAxisScores(),axisWeights()).global < before.global);
  const html = renderAllNotesSection(pp);
  assert(html.includes('Non documentée · exclue du calcul'));
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
console.log('Comparaison OK : 22 profils, modes rapide et complet, positions inconnues exclues et vrais zéros conservés.');
