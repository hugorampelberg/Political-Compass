const RN_RESPONSE_OVERRIDES = {
  81: {
    response: -2,
    justification: "Désaccord net : le RN veut agir contre les déserts médicaux et partage donc clairement l’objectif d’une meilleure répartition territoriale des soignants. Sa méthode repose toutefois sur des incitations financières fortes et sur le développement des maisons de santé, plutôt que sur une limitation du conventionnement des nouveaux médecins dans les zones déjà bien dotées. Le parti refuse donc le mécanisme contraignant précis proposé par la question, mais son intervention active en faveur des zones sous-dotées empêche de retenir un désaccord maximal ; -2 est plus adapté que -3."
  }
};

const rnParty = DATA.entities.find(entity => entity.id === 'rn');
if (rnParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(RN_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    rnParty.responses[index] = override.response;
    rnParty.justifications[index] = override.justification;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (rnParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  rnParty.axisScores = scores;
}
