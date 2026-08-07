import assert from "node:assert/strict";
import test from "node:test";

import DATA from "../assets/data.js";
import {
  calculateAxisMasses,
  calculateAxisScores,
  calculateAxisWeights,
  calculateDetailedAxisSimilarity,
  politicalDistance
} from "../assets/scoring.js";

const allIndexes = DATA.questions.map((_, index) => index);

test("les masses structurelles correspondent aux coefficients", () => {
  const masses = calculateAxisMasses(DATA.axes, DATA.questions, allIndexes);
  for (const axis of DATA.axes) {
    assert.ok(Math.abs(masses[axis.key] - DATA.axisMasses[axis.key]) < 1e-10);
  }
  assert.ok(Math.abs(masses.authority - 23.1) < 1e-10);
});

test("un axe prioritaire reçoit exactement 30 % de poids supplémentaire", () => {
  const weights = calculateAxisWeights(DATA.axes, DATA.axisMasses, "authority");
  assert.ok(Math.abs(weights.authority - DATA.axisMasses.authority * 1.3) < 1e-10);
  assert.equal(weights.economy, DATA.axisMasses.economy);
});

test("les scores d’axe restent entre -10 et +10", () => {
  const positive = calculateAxisScores(DATA.axes, DATA.questions, allIndexes, Array(80).fill(3));
  const negative = calculateAxisScores(DATA.axes, DATA.questions, allIndexes, Array(80).fill(-3));
  for (const axis of DATA.axes) {
    assert.ok(positive[axis.key] >= -10 && positive[axis.key] <= 10);
    assert.ok(negative[axis.key] >= -10 && negative[axis.key] <= 10);
    assert.ok(Math.abs(positive[axis.key] + negative[axis.key]) < 1e-10);
  }
});

test("les scores précalculés des entités sont reproductibles", () => {
  for (const entity of DATA.entities) {
    const calculated = calculateAxisScores(DATA.axes, DATA.questions, allIndexes, entity.responses);
    for (const axis of DATA.axes) {
      assert.ok(
        Math.abs(calculated[axis.key] - entity.axisScores[axis.key]) < 1e-10,
        `${entity.id}: score incohérent sur ${axis.key}`
      );
    }
  }
});

test("la distance pénalise davantage deux réponses opposées", () => {
  assert.equal(politicalDistance(3, 3), 0);
  assert.equal(politicalDistance(0, 0), 0);
  assert.equal(politicalDistance(3, 0), 0.5);
  assert.equal(politicalDistance(3, -3), 1);
  assert.ok(politicalDistance(2, -1) > politicalDistance(2, 0));
});

test("une entité aux réponses identiques obtient 100 % sur chaque axe documenté", () => {
  const answers = DATA.entities[0].responses;
  for (const axis of DATA.axes) {
    const similarity = calculateDetailedAxisSimilarity({
      questions: DATA.questions,
      questionIndexes: allIndexes,
      axisKey: axis.key,
      userAnswers: answers,
      entityResponses: answers,
      confidence: Array(80).fill(3)
    });
    assert.equal(similarity, 100);
  }
});
