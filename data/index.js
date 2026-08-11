// Assemble les fichiers de données sans modifier le format attendu par l'application.

// Ajustements documentaires validés après audit. Ils sont appliqués ici afin de
// conserver parties.js intact tout en faisant de ces valeurs celles effectivement
// utilisées par l'application.
const PARTY_RESPONSE_OVERRIDES = {
  renaissance: {
    43: {
      response: 0,
      justification: "Position intermédiaire : la famille politique de Renaissance a remplacé l’ancien ISF par l’IFI afin de moins taxer le capital productif, mais ne porte pas aujourd’hui de ligne claire en faveur de la suppression totale de l’IFI. Elle s’oppose également à un retour à une taxation patrimoniale beaucoup plus large. La position actuelle se situe donc entre maintien ciblé et allègement de la fiscalité du patrimoine, ce qui justifie 0."
    },
    47: {
      response: 1,
      justification: "Accord modéré : des élus du bloc central ont soutenu une aide publique au fret destinée à réduire le surcoût des produits essentiels outre-mer, ce qui va dans le sens de la proposition. Renaissance privilégie toutefois aussi des mesures structurelles de concurrence et de transparence, sans faire d’une subvention nationale durable des prix une doctrine générale ; +1 est donc plus adapté que +2."
    },
    72: {
      response: 1,
      justification: "Accord modéré : Renaissance valorise l’expertise, les évaluations indépendantes et les autorités de régulation pour éclairer les décisions économiques complexes. Le parti reste cependant attaché à une démocratie représentative dans laquelle la décision finale appartient aux responsables élus ; il s’agit donc d’un recours accru à l’expertise plutôt que d’un transfert net du pouvoir politique aux experts, d’où +1."
    }
  }
};

const questionIndexById = new Map(QUESTIONNAIRE_DATA.questions.map((question, index) => [question.id, index]));

function recomputePartyAxisScores(responses) {
  const scores = {};
  QUESTIONNAIRE_DATA.axes.forEach(axis => {
    const denominator = 3 * QUESTIONNAIRE_DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = QUESTIONNAIRE_DATA.questions.reduce(
      (sum, question, index) => sum + (responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  return scores;
}

Object.entries(PARTY_RESPONSE_OVERRIDES).forEach(([partyId, overrides]) => {
  const party = PARTIES_DATA.find(entity => entity.id === partyId);
  if (!party) return;

  Object.entries(overrides).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    party.responses[index] = override.response;
    if (override.justification) party.justifications[index] = override.justification;
  });

  party.axisScores = recomputePartyAxisScores(party.responses);
});

const DATA = {
  ...QUESTIONNAIRE_DATA,
  entities: [...PARTIES_DATA, ...GOVERNMENTS_DATA],
};
