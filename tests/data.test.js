import assert from "node:assert/strict";
import test from "node:test";

import DATA from "../assets/data.js";

const AXIS_KEYS = ["economy", "authority", "europe", "ecology", "immigration", "democracy"];
const Q66_EXPECTED = {
  lfi: [-3, 3],
  pcf: [-3, 3],
  "les-ecologistes": [-3, 3],
  ps: [-3, 3],
  renaissance: [1, 3],
  modem: [2, 3],
  horizons: [3, 3],
  lr: [3, 3],
  "nouvelle-energie": [0, 1],
  rn: [3, 3],
  reconquete: [3, 3],
  allemagne: [-3, 2],
  espagne: [-3, 3],
  suisse: [-3, 2],
  finlande: [-3, 3],
  "royaume-uni": [-3, 3],
  danemark: [-3, 3]
};

test("le questionnaire comporte 80 questions uniques sans réponse par défaut", () => {
  assert.equal(DATA.questions.length, 80);
  assert.deepEqual(DATA.questions.map((question) => question.id), Array.from({ length: 80 }, (_, index) => index + 1));
  assert.equal(JSON.stringify(DATA).includes("defaultAnswer"), false);
  for (const question of DATA.questions) {
    assert.deepEqual(Object.keys(question.coefficients), AXIS_KEYS);
    assert.ok(Object.values(question.coefficients).every(Number.isFinite));
  }
});

test("la question 66 porte sur le refus d’obtempérer et pèse +1 sur l’autorité", () => {
  const question = DATA.questions[65];
  assert.equal(question.id, 66);
  assert.match(question.text, /refuse d’obtempérer/);
  assert.match(question.text, /danger .*n’est pas immédiat/);
  assert.equal(question.coefficients.authority, 1);
  assert.equal(Object.values(question.coefficients).filter(Boolean).length, 1);
  assert.equal(question.source, "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034107970");
});

test("chaque profil a un codage Q66 documenté et un score de confiance", () => {
  assert.equal(DATA.entities.length, Object.keys(Q66_EXPECTED).length);
  for (const entity of DATA.entities) {
    assert.equal(entity.responses.length, 80, entity.id);
    assert.equal(entity.confidence.length, 80, entity.id);
    assert.equal(entity.justifications.length, 80, entity.id);
    assert.equal(entity.sources.length, 80, entity.id);
    assert.deepEqual([entity.responses[65], entity.confidence[65]], Q66_EXPECTED[entity.id], entity.id);
    assert.ok(entity.justifications[65].length > 40, entity.id);
    assert.match(entity.sources[65], /^https:\/\//, entity.id);
    assert.ok(entity.responses.every((value) => Number.isInteger(value) && value >= -3 && value <= 3), entity.id);
    assert.ok(entity.confidence.every((value) => Number.isInteger(value) && value >= 0 && value <= 3), entity.id);
    const confidence = entity.confidence.reduce((sum, value) => sum + value, 0) / 240;
    assert.ok(Math.abs(confidence - entity.averageConfidence) < 1e-12, entity.id);
  }
});
