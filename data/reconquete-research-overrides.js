// Ajustements Reconquête validés après audit documentaire du 12 août 2026.
// Les questions sont résolues par leur ID réel afin d'éviter tout décalage lié
// aux identifiants manquants dans le questionnaire.
const RECONQUETE_RESEARCH_OVERRIDES_20260812 = {
  1: { confidence: 3, source: "https://www.budget2026.fr/" },
  2: { confidence: 3, source: "https://www.ericzemmour.fr/discours-lille" },
  3: { confidence: 3, source: "https://www.budget2026.fr/" },
  4: { confidence: 1, source: "https://www.budget2026.fr/" },
  5: {
    response: 1,
    confidence: 2,
    justification: "Accord modéré : Éric Zemmour veut explicitement augmenter le revenu des salariés modestes et des travailleurs au SMIC, notamment par une baisse de CSG et de charges qui augmente le salaire net, ainsi que par la participation. Il ne propose toutefois pas une forte hausse du SMIC légal lui-même et privilégie d'autres instruments pour atteindre l'objectif de revalorisation des bas salaires. Le sens social de la proposition justifie +1, mais pas davantage.",
    source: "https://www.ericzemmour.fr/discours-lille"
  },
  6: { confidence: 2, source: "https://www.ericzemmour.fr/discours-saulieu" },
  7: {
    response: 1,
    confidence: 3,
    justification: "Accord modéré : Éric Zemmour veut transformer l'Agence des participations de l'État en véritable fonds souverain doté de moyens nouveaux afin de consolider les grands groupes de défense et de protéger les entreprises stratégiques. Reconquête accepte donc clairement une intervention capitalistique publique lorsqu'un intérêt stratégique national l'exige. Le parti ne fait toutefois pas de la nationalisation temporaire ou durable l'outil normal de cette politique, ce qui limite l'accord à +1.",
    source: "https://www.ericzemmour.fr/presentation-du-programme-defense"
  },
  8: { confidence: 2, source: "https://www.ericzemmour.fr/industrie" },
  9: { confidence: 3, source: "https://www.budget2026.fr/" },
  10: { confidence: 2, source: "https://programme.ericzemmour.fr/social" },
  12: {
    response: -1,
    confidence: 2,
    justification: "Désaccord modéré : Reconquête veut réduire fortement l'intervention économique courante, la bureaucratie et les prélèvements, et préfère laisser davantage d'espace à l'initiative privée. Mais Éric Zemmour assume parallèlement un État très interventionniste dans les secteurs stratégiques, avec commande publique, politique industrielle et fonds souverain. Le parti s'oppose donc à une extension générale de l'intervention étatique lorsque le marché produit un résultat jugé indésirable, sans être pour autant dans une logique de laissez-faire absolu ; -1 est plus fidèle que -2.",
    source: "https://www.ericzemmour.fr/presentation-du-programme-defense"
  },
  13: { confidence: 2, source: "https://fr.linkedin.com/posts/sarah-knafo-7a0129b5_jentends-dire-que-les-fran%C3%A7ais-seraient-activity-7398384984731910144-2Dps" },
  14: { confidence: 2, source: "https://www.ericzemmour.fr/discours-femmes-avec-zemmour" },
  15: { confidence: 1, source: "https://programme.ericzemmour.fr/democratie" },
  16: { confidence: 1, source: "https://www.ericzemmour.fr/priorites" },
  17: { confidence: 3, source: "https://www.ericzemmour.fr/instruction" },
  18: { confidence: 1, source: "https://programme.ericzemmour.fr/reforme-etat" },
  27: { confidence: 3, source: "https://programme.ericzemmour.fr/justice" },
  32: { confidence: 3, source: "https://www.budget2026.fr/" },
  33: { confidence: 3, source: "https://www.ericzemmour.fr/discours-saulieu" },
  34: { confidence: 1, source: "https://programme.ericzemmour.fr/pouvoir-achat" },
  35: { confidence: 2, source: "https://www.budget2026.fr/" },
  36: { confidence: 3, source: "https://www.ericzemmour.fr/discours-saulieu" },
  37: { confidence: 1, source: "https://programme.ericzemmour.fr/environnement" },
  38: { confidence: 3, source: "https://www.ericzemmour.fr/independance" },
  39: { confidence: 3, source: "https://www.ericzemmour.fr/independance" },
  40: { confidence: 2, source: "https://programme.ericzemmour.fr/europe" },
  41: { confidence: 3, source: "https://www.ericzemmour.fr/independance" },
  42: { confidence: 3, source: "https://www.ericzemmour.fr/independance" },
  43: {
    response: 1,
    confidence: 3,
    justification: "Accord modéré : Éric Zemmour a proposé d'alléger fortement l'IFI en retirant la résidence principale de son assiette, ce qui réduit nettement la taxation spécifique du patrimoine immobilier. Il n'a toutefois pas proposé de supprimer intégralement l'IFI et de ramener tout le patrimoine immobilier à la seule fiscalité ordinaire. La direction va donc vers l'énoncé, mais seulement partiellement ; +1 est plus précis que +2.",
    source: "https://programme.ericzemmour.fr/impots"
  },
  44: {
    confidence: 3,
    justification: "Désaccord très fort : la ligne récente portée par Sarah Knafo va jusqu'à proposer la suppression totale des droits de succession. Reconquête défend donc une réduction maximale de la fiscalité sur les transmissions familiales, directement opposée à l'idée de taxer davantage les héritages élevés ; -3 est solidement documenté.",
    source: "https://www.budget2026.fr/"
  },
  45: { confidence: 1, source: "https://programme.ericzemmour.fr/impots" },
  47: { confidence: 1, source: "https://programme.ericzemmour.fr/outre-mer" },
  48: { confidence: 1, source: "https://programme.ericzemmour.fr/travail" },
  49: {
    confidence: 3,
    justification: "Accord net : Sarah Knafo défend désormais explicitement le passage vers davantage de capitalisation pour les retraites et critique la dépendance exclusive au système par répartition. Cette orientation renforce nettement l'idée d'un système comportant un pilier capitalisé. Le score +2 reste toutefois adapté car la position récente paraît aller au-delà d'un simple système mixte équilibré et ne correspond pas exactement à l'architecture posée par la question.",
    source: "https://fr.linkedin.com/posts/sarah-knafo-7a0129b5_jentends-dire-que-les-fran%C3%A7ais-seraient-activity-7398384984731910144-2Dps"
  },
  50: {
    response: 0,
    confidence: 2,
    justification: "Position intermédiaire : Éric Zemmour a défendu en 2022 un relèvement de l'âge de départ pour répondre au déséquilibre démographique. Mais Sarah Knafo défend désormais une transition vers la capitalisation précisément afin de sortir du débat où l'on repousse continuellement l'âge de départ. Reconquête n'a donc pas de ligne récente suffisamment cohérente en faveur d'une indexation automatique de l'âge légal sur l'espérance de vie ; 0 est plus fidèle que +1.",
    source: "https://fr.linkedin.com/posts/sarah-knafo-7a0129b5_jentends-dire-que-les-fran%C3%A7ais-seraient-activity-7398384984731910144-2Dps"
  },
  51: { confidence: 2, source: "https://programme.ericzemmour.fr/social" },
  53: { confidence: 1, source: "https://www.budget2026.fr/" },
  54: {
    response: 2,
    confidence: 3,
    justification: "Accord net : Éric Zemmour propose de transformer l'Agence des participations de l'État en fonds souverain doté de moyens nouveaux, capable de consolider les grands groupes de défense et de protéger les entreprises stratégiques. Il s'agit directement d'utiliser la position d'actionnaire public pour poursuivre des objectifs industriels et de souveraineté de long terme. La proposition reste concentrée sur les secteurs stratégiques plutôt que sur toutes les grandes entreprises françaises, ce qui justifie +2 plutôt que +3.",
    source: "https://www.ericzemmour.fr/presentation-du-programme-defense"
  },
  55: { confidence: 3, source: "https://www.budget2026.fr/" },
  58: { confidence: 1, source: "https://programme.ericzemmour.fr/immigration" },
  63: { confidence: 3, source: "https://programme.ericzemmour.fr/securite" },
  64: { confidence: 3, source: "https://programme.ericzemmour.fr/liberte-expression" },
  67: {
    response: -2,
    confidence: 3,
    justification: "Désaccord net : Reconquête combat explicitement les taxes et malus écologiques qui renchérissent l'énergie, les carburants ou l'automobile et présente cette fiscalité comme une écologie punitive. Une compensation ciblée des ménages modestes réduit l'objection de pouvoir d'achat, mais ne répond pas au rejet plus général du principe consistant à maintenir une taxe carbone élevée comme instrument central de transition. Le désaccord reste donc net, d'où -2.",
    source: "https://www.ericzemmour.fr/discours-saulieu"
  },
  68: { confidence: 3, source: "https://programme.ericzemmour.fr/automobilistes" },
  69: { confidence: 3, source: "https://programme.ericzemmour.fr/nucleaire" },
  71: { confidence: 2, source: "https://www.budget2026.fr/" },
  72: { confidence: 3, source: "https://www.budget2026.fr/" },
  73: { confidence: 1, source: "https://programme.ericzemmour.fr/democratie" },
  74: {
    response: 2,
    confidence: 2,
    justification: "Accord net : Reconquête défend un recours beaucoup plus fréquent au référendum afin de rendre directement la parole au peuple sur des choix politiques majeurs. En revanche, aucune proposition suffisamment directe ne montre que le parti veut soumettre sans réserve au vote populaire des sujets très techniques que les citoyens comprendraient mal. L'accord porte donc sur l'extension du référendum, mais pas sur toute la concession contenue dans l'énoncé ; +2 est plus précis que +3.",
    source: "https://programme.ericzemmour.fr/democratie"
  },
  75: {
    response: -1,
    confidence: 1,
    justification: "Désaccord modéré, avec preuve indirecte : la démocratie référendaire défendue par Reconquête repose sur l'égalité politique des citoyens et ne prévoit aucune pondération du suffrage selon le diplôme, l'expertise ou la connaissance institutionnelle. Aucune prise de position spécifique sur une forme de vote pondéré n'a toutefois été identifiée. La direction négative est cohérente, mais l'absence de proposition directe impose de limiter le désaccord à -1 et la confiance à 1.",
    source: "https://programme.ericzemmour.fr/democratie"
  },
  76: { confidence: 1, source: "https://programme.ericzemmour.fr/democratie" },
  77: {
    response: 0,
    confidence: 1,
    justification: "Position intermédiaire : Reconquête défend davantage de démocratie directe et de référendums, mais aucune proposition suffisamment précise et actuelle n'a été retrouvée en faveur d'une proportionnelle intégrale ou quasi intégrale aux élections législatives. La démocratie référendaire ne permet pas de déduire le mode de scrutin parlementaire souhaité ni l'acceptation de coalitions plus fréquentes. Faute de position directe, 0 est le score le plus prudent.",
    source: "https://programme.ericzemmour.fr/democratie"
  },
  79: { confidence: 3, source: "https://programme.ericzemmour.fr/immigration" },
  81: {
    confidence: 2,
    source: "https://programme.ericzemmour.fr/sante"
  },
  82: { confidence: 1, source: "https://programme.ericzemmour.fr/sante" },
  83: {
    response: -2,
    confidence: 3,
    justification: "Désaccord net : Éric Zemmour a explicitement défendu le retour de services sanitaires de proximité dans les territoires ruraux et cite les urgences, les maternités, la chimiothérapie et d'autres soins essentiels qui devraient rester accessibles près des habitants. Il critique les fermetures qui obligent à parcourir de longues distances. Reconquête s'oppose donc nettement à une politique générale de concentration des petites structures, sans exclure tout regroupement médicalement indispensable ; -2 est adapté.",
    source: "https://www.ericzemmour.fr/discours-chateaudun"
  },
  84: {
    response: 0,
    confidence: 1,
    justification: "Position intermédiaire : le projet éducatif de Reconquête veut rendre les concours nationaux de recrutement des professeurs plus exigeants et développer l'avancement au mérite. En revanche, aucune proposition directement comparable n'a été retrouvée pour permettre aux chefs d'établissement de recruter eux-mêmes une partie des enseignants ou de disposer d'un rôle accru dans leur évaluation. Le +2 actuel n'était donc pas documenté ; 0 est plus prudent.",
    source: "https://www.ericzemmour.fr/discours-saint-quentin"
  },
  85: {
    confidence: 3,
    justification: "Désaccord net : Reconquête s'est explicitement opposé aux projets imposant des objectifs de mixité sociale ou des quotas aux établissements privés sous contrat, en défendant la liberté de ces établissements et leur mission propre. La question conditionne directement le financement public à des objectifs mesurables de mixité ; cette logique est nettement contraire à la position documentée du parti, ce qui confirme -2.",
    source: "https://www.parti-reconquete.fr/pap-ndiaye-mixite-prive"
  },
  86: { confidence: 1, source: "https://programme.ericzemmour.fr/logement" },
  87: { confidence: 2, source: "https://www.ericzemmour.fr/discours-chambery" },
  88: { confidence: 3, source: "https://www.ericzemmour.fr/presentation-du-programme-defense" },
  89: { confidence: 3, source: "https://www.cnews.fr/france/2025-05-18/aide-mourir-cest-une-espece-de-retablissement-de-la-peine-de-mort-qui-ne-dit-pas" },
  90: {
    response: -1,
    confidence: 3,
    justification: "Désaccord modéré : après le scandale des EHPAD, Éric Zemmour a demandé un contrôle beaucoup plus strict des établissements, confié au préfet avec des pouvoirs de sanction immédiate en cas de maltraitance. Il ne propose toutefois pas d'interdire les EHPAD privés lucratifs ni de transformer obligatoirement leurs gestionnaires en structures publiques ou non lucratives. Sa réponse est donc le contrôle renforcé plutôt que l'interdiction du modèle, ce qui justifie -1.",
    source: "https://www.ericzemmour.fr/discours-saulieu"
  },
  91: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : Éric Zemmour a explicitement promis de rendre les allocations familiales universelles, comme avant leur modulation selon les revenus, et de doubler parallèlement le plafond du quotient familial. Cette position correspond directement à l'énoncé qui refuse une diminution des allocations pour les ménages aux revenus élevés ; +3 est justifié.",
    source: "https://www.ericzemmour.fr/discours-lille"
  },
  92: { confidence: 3, source: "https://fr.linkedin.com/posts/sarah-knafo-7a0129b5_interdiction-des-r%C3%A9seaux-sociaux-non-activity-7421824217454731264-dvlv" },
  93: {
    confidence: 3,
    source: "https://www.europarl.europa.eu/doceo/document/A-10-2025-0107_FR.html"
  }
};

const reconqueteResearchParty = DATA.entities.find(entity => entity.id === 'reconquete');
if (reconqueteResearchParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(RECONQUETE_RESEARCH_OVERRIDES_20260812).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;

    if (Object.prototype.hasOwnProperty.call(override, 'response')) {
      reconqueteResearchParty.responses[index] = override.response;
    }
    if (Object.prototype.hasOwnProperty.call(override, 'confidence') && Array.isArray(reconqueteResearchParty.confidence)) {
      reconqueteResearchParty.confidence[index] = override.confidence;
    }
    if (override.justification) reconqueteResearchParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(reconqueteResearchParty.sources)) {
      reconqueteResearchParty.sources[index] = override.source;
    }
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (reconqueteResearchParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  reconqueteResearchParty.axisScores = scores;

  if (Array.isArray(reconqueteResearchParty.confidence) && reconqueteResearchParty.confidence.length) {
    reconqueteResearchParty.averageConfidence = reconqueteResearchParty.confidence.reduce(
      (sum, value) => sum + (Number(value) || 0),
      0
    ) / reconqueteResearchParty.confidence.length;
  }
}
