// Ajustements UDR validés après audit documentaire du 12 août 2026.
// Les questions sont résolues par leur ID réel afin d'éviter tout décalage lié
// aux identifiants manquants dans le questionnaire.
const UDR_RESEARCH_OVERRIDES = {
  8: {
    response: 2,
    confidence: 2,
    justification: "Accord net : l’UDR propose de supprimer 25 % des normes, l’encadrement des loyers et plusieurs dispositifs réglementaires qu’elle juge inefficaces afin de libérer l’activité, la croissance et l’initiative privée. Cette doctrine privilégie fortement la liberté économique et la concurrence face à la réglementation, mais ne démontre pas une supériorité générale de la concurrence dans tous les secteurs et pour tous les objectifs de prix, qualité et innovation ; +2 est plus précis que +3.",
    source: "https://www.udr.fr/livretsimplification"
  },
  17: {
    response: 0,
    confidence: 3,
    justification: "Position intermédiaire : l’UDR veut supprimer les régions, départements et métropoles au profit d’une nouvelle collectivité de « Province » et restituer certaines compétences, notamment d’urbanisme, au niveau communal. Cette réforme est décentralisatrice sur certains points mais ne correspond pas à la proposition consistant à donner aux régions actuelles un pouvoir normatif différencié en matière économique, sociale ou environnementale ; 0 est donc le score le plus précis.",
    source: "https://www.udr.fr/livretsimplification"
  },
  51: {
    response: -2,
    confidence: 3,
    justification: "Désaccord net : Éric Ciotti a déposé un amendement demandant à l’État de céder ses participations dans Orange, tandis que l’UDR veut plus largement réduire le périmètre économique de l’État. Cette orientation est directement contraire à un usage accru de l’État actionnaire pour piloter les grandes entreprises françaises. Des exceptions stratégiques restent toutefois possibles, ce qui justifie -2 plutôt que -3.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/0324A/CION_FIN/CF962"
  },
  58: {
    response: -1,
    confidence: 2,
    justification: "Désaccord modéré : Éric Ciotti défend explicitement une conception de l’assimilation qui inclut la langue, l’histoire, la culture, la société françaises et l’adhésion à des valeurs communes, et veut lui donner une portée constitutionnelle pour protéger l’identité nationale et lutter contre les communautarismes. L’intégration demandée dépasse donc le seul respect formel des lois. Cela ne signifie toutefois pas que toute pratique culturelle ou religieuse très différente mais légale soit considérée comme problématique en elle-même ; -1 est plus précis que -2.",
    source: "https://www.assemblee-nationale.fr/dyn/docs/RAPPANR5L16B1936.raw"
  },
  59: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : le 16 juin 2026, les 17 députés UDR ayant pris part au scrutin ont voté pour le texte renforçant la prévention des risques d’attentat. Celui-ci renforce notamment les mesures individuelles de contrôle administratif et de surveillance et permet des interventions préventives fondées sur une dangerosité sérieuse avant qu’une nouvelle infraction puisse être poursuivie. Le principe correspond directement à la surveillance préventive ciblée décrite par la question, ce qui justifie +3.",
    source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7405"
  },
  66: {
    response: -2,
    confidence: 2,
    justification: "Désaccord net : l’UDR veut réduire fortement le pouvoir des agences et organismes technocratiques, supprimer notamment le CESE et les CESER et rendre davantage de pouvoir aux responsables politiques, aux collectivités et au vote direct. Cette doctrine est clairement opposée à l’idée de transférer davantage de pouvoir décisionnel à des institutions d’experts indépendants des élus. Le programme ne traite toutefois pas spécifiquement de toutes les décisions économiques complexes, d’où -2 plutôt que -3.",
    source: "https://www.udr.fr/livretsimplification"
  },
  79: {
    response: -3,
    confidence: 3,
    justification: "Désaccord très fort : des députés UDR ont explicitement proposé de supprimer une proposition de loi qui modulait le financement public des établissements privés sous contrat selon leur contribution à la mixité sociale, en invoquant le caractère propre de l’enseignement privé et la liberté d’enseigner. Le mécanisme rejeté correspond presque exactement à celui de la question ; -3 est donc justifié.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/0418/CION-CEDU/AC5"
  },
  87: {
    response: 1,
    confidence: 3,
    justification: "Accord modéré : en juillet 2026, le député UDR Antoine Valentin a demandé que l’assistant conversationnel destiné aux agents publics soit hébergé sur une infrastructure souveraine et certifiée, allant jusqu’à contester qu’un outil hébergé sur une infrastructure non souveraine puisse être qualifié de souverain. Cette position soutient clairement une préférence française ou européenne pour l’hébergement de l’IA publique. En revanche, l’UDR ne dit pas qu’il faut accepter sans limite une solution sensiblement moins performante ou plus coûteuse ; +1 est donc adapté.",
    source: "https://questions.assemblee-nationale.fr/q17/17-16957QE.htm"
  }
};

const udrParty = DATA.entities.find(entity => entity.id === 'udr');
if (udrParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(UDR_RESEARCH_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    udrParty.responses[index] = override.response;
    if (Array.isArray(udrParty.confidence)) udrParty.confidence[index] = override.confidence;
    udrParty.justifications[index] = override.justification;
    if (Array.isArray(udrParty.sources)) udrParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (udrParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  udrParty.axisScores = scores;

  if (Array.isArray(udrParty.confidence) && udrParty.confidence.length) {
    udrParty.averageConfidence = udrParty.confidence.reduce(
      (sum, value) => sum + (Number(value) || 0),
      0
    ) / udrParty.confidence.length;
  }
}
