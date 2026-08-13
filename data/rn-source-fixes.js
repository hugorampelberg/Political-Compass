// Corrections finales de sources RN après contrôle croisé des appartenances partisanes.
const RN_SOURCE_FIXES_20260812 = {
  16: {
    confidence: 1,
    justification: "Désaccord modéré : des députés RN ont explicitement rejeté des mécanismes qu'ils assimilent à de la « discrimination positive » et défendent plutôt l'égalité devant la loi et une approche universaliste. Le parti soutient parallèlement la lutte contre les discriminations illégales. Cela suggère une réserve envers des politiques correctrices ciblées par groupe, sans établir une opposition générale à toute action contre les effets de discriminations historiques ou structurelles ; -1 reste donc adapté avec une confiance basse.",
    source: "https://www.assemblee-nationale.fr/dyn/docs/CRCANR5L16S2024PO59051N027.raw"
  },
  79: {
    confidence: 1,
    justification: "Désaccord net, avec confiance documentaire limitée : le RN défend fortement la liberté de l'enseignement et le maintien d'un financement public paritaire des établissements privés sous contrat. En mars 2026, Roger Chudeau a encore demandé de garantir cette parité de financement et annoncé une initiative du groupe RN en ce sens. Aucune source RN retrouvée ne traite toutefois directement d'une condition de financement fondée sur des objectifs chiffrés de mixité sociale ; le score -2 est conservé, mais la confiance doit rester basse.",
    source: "https://questions.assemblee-nationale.fr/q17/17-646QOSD.htm"
  }
};

const rnSourceFixParty = DATA.entities.find(entity => entity.id === 'rn');
if (rnSourceFixParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(RN_SOURCE_FIXES_20260812).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'confidence') && Array.isArray(rnSourceFixParty.confidence)) {
      rnSourceFixParty.confidence[index] = override.confidence;
    }
    if (override.justification) rnSourceFixParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(rnSourceFixParty.sources)) rnSourceFixParty.sources[index] = override.source;
  });

  if (Array.isArray(rnSourceFixParty.confidence) && rnSourceFixParty.confidence.length) {
    rnSourceFixParty.averageConfidence = rnSourceFixParty.confidence.reduce(
      (sum, value) => sum + (Number(value) || 0),
      0
    ) / rnSourceFixParty.confidence.length;
  }
}
