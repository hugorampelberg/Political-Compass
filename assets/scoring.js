export function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function calculateAxisMasses(axes, questions, questionIndexes = questions.map((_, index) => index)) {
  return Object.fromEntries(axes.map((axis) => {
    const mass = questionIndexes.reduce((sum, index) => {
      return sum + Math.abs(questions[index].coefficients[axis.key]);
    }, 0);
    return [axis.key, mass];
  }));
}

export function calculateAxisWeights(axes, masses, priority, priorityMultiplier = 1.25) {
  return Object.fromEntries(axes.map((axis) => [
    axis.key,
    masses[axis.key] * (priority === axis.key ? priorityMultiplier : 1)
  ]));
}

export function calculateAxisScores(axes, questions, questionIndexes, answers) {
  return Object.fromEntries(axes.map((axis) => {
    const mass = questionIndexes.reduce((sum, index) => {
      return sum + Math.abs(questions[index].coefficients[axis.key]);
    }, 0);
    const numerator = questionIndexes.reduce((sum, index) => {
      return sum + (answers[index] ?? 0) * questions[index].coefficients[axis.key];
    }, 0);
    const denominator = 3 * mass;
    return [axis.key, denominator ? (10 * numerator) / denominator : 0];
  }));
}

export function politicalDistance(userAnswer, entityAnswer) {
  const rawDistance = Math.abs(userAnswer - entityAnswer) / 6;
  const answersAreOpposed = userAnswer !== 0
    && entityAnswer !== 0
    && Math.sign(userAnswer) !== Math.sign(entityAnswer);

  if (!answersAreOpposed) return rawDistance;

  const oppositionStrength = Math.min(
    Math.abs(userAnswer),
    Math.abs(entityAnswer)
  ) / 3;

  return Math.min(
    1,
    rawDistance + 0.75 * oppositionStrength * (1 - rawDistance)
  );
}

export function calculateDetailedAxisSimilarity({
  questions,
  questionIndexes,
  axisKey,
  userAnswers,
  entityResponses,
  confidence
}) {
  let weightedSquaredDistance = 0;
  let totalWeight = 0;

  for (const index of questionIndexes) {
    const coefficientWeight = Math.abs(questions[index].coefficients[axisKey]);
    const documentaryConfidence = confidence[index] || 0;
    if (coefficientWeight === 0 || documentaryConfidence === 0) continue;

    const distance = politicalDistance(
      userAnswers[index] ?? 0,
      entityResponses[index]
    );
    const weight = coefficientWeight * documentaryConfidence;
    weightedSquaredDistance += distance * distance * weight;
    totalWeight += weight;
  }

  if (totalWeight === 0) return 0;
  return clamp(
    100 * (1 - Math.sqrt(weightedSquaredDistance / totalWeight)),
    0,
    100
  );
}
