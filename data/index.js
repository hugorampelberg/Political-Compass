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
  },
  horizons: {
    1: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    9: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    13: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    20: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    21: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    24: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    25: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    27: {
      response: 1,
      justification: "Accord modéré : Édouard Philippe veut rétablir des peines plus rapides et plus effectives, notamment des peines courtes dès les premières infractions et des peines planchers pour les faits les plus graves. Il précise toutefois préférer sanctionner plus tôt plutôt que d’enfermer trop tard et trop longtemps ; cela ne correspond pas à un objectif général de forte hausse de la population carcérale, d’où +1 plutôt que +2.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    28: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    29: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    32: {
      response: 0,
      justification: "Position intermédiaire : Horizons fait du dérèglement climatique une priorité stratégique et veut accélérer fortement la décarbonation, mais Édouard Philippe présente son « écologie à impact » comme devant réduire les émissions tout en créant de la croissance. Le parti refuse donc de choisir clairement la transition climatique contre la croissance de court terme ; 0 traduit mieux cet arbitrage que +2.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    35: {
      justification: "Accord net : Horizons privilégie une écologie fondée sur l’innovation, l’investissement, l’électrification, la technologie et des signaux économiques comme le prix du carbone aux frontières, plutôt qu’une politique reposant principalement sur des interdictions générales. Le parti conserve néanmoins des réglementations environnementales et protectrices, ce qui justifie +2 plutôt qu’un accord maximal.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    43: {
      response: 1,
      justification: "Accord modéré : Édouard Philippe a publiquement regretté la transformation de l’ISF en IFI et juge la fiscalité immobilière actuelle désincitative pour l’épargne et l’investissement. Il n’a toutefois pas encore formulé de proposition nette de suppression pure et simple de l’IFI ; l’orientation est favorable à son allègement ou à sa refonte, ce qui justifie +1 plutôt que +2.",
      source: "https://immobilier.lefigaro.fr/article/edouard-philippe-fait-son-mea-culpa-sur-l-ifi-20251209"
    },
    49: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    50: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    55: {
      response: 1,
      justification: "Accord modéré : Horizons propose une simplification drastique des procédures, un moratoire normatif et la fin des surtranspositions, notamment en agriculture. Cette volonté de dérégulation est très nette, mais le programme ne dit pas qu’il faut accepter de manière générale un affaiblissement des protections sociales ou environnementales ; la concession contenue dans la question limite donc le score à +1.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    57: {
      response: -2,
      justification: "Désaccord net : le programme actuel d’Horizons cible la suppression des aides sociales sur les étrangers délinquants et durcit fortement le contrôle des flux, mais ne propose pas de carence générale privant ou limitant fortement tous les immigrés légalement installés de prestations pendant leurs premières années. Pour les personnes admises au séjour, la ligne mise davantage sur l’intégration par la langue et le travail que sur une exclusion sociale générale, ce qui conduit à -2.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    58: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    60: {
      response: 1,
      justification: "Accord modéré : Horizons veut sélectionner davantage l’immigration et faire de la langue, du travail et des valeurs républicaines des critères centraux d’intégration. En revanche, le programme ne prévoit pas un pouvoir général de refuser l’entrée à une personne par ailleurs légalement admissible sur la seule anticipation d’une mauvaise intégration culturelle ; +1 est donc plus précis que +2.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    63: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    66: {
      source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7987"
    },
    68: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    69: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    71: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    },
    72: {
      response: 0,
      justification: "Position intermédiaire : Horizons valorise fortement la science, l’expertise et l’évaluation pour éclairer les politiques publiques, mais son manifeste défend parallèlement la démocratie représentative et ne propose pas de transférer le pouvoir de décision économique des élus vers des experts indépendants. L’expertise doit guider la décision politique plutôt que s’y substituer ; 0 est donc plus adapté que +2.",
      source: "https://horizonsleparti.fr/le-manifeste/"
    },
    77: {
      source: "https://www.leparisien.fr/politique/un-regime-de-linaction-edouard-philippe-se-dit-defavorable-a-la-proportionnelle-aux-elections-legislatives-22-05-2025-4MFR4W33H5DBZCL4AAGVXUGFCE.php"
    },
    78: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    81: {
      justification: "Accord modéré mais position interne partagée : des députés Horizons, dont Thierry Benoit et Luc Lamirault, ont explicitement proposé un conventionnement sélectif en zone surdotée, conditionné au départ d’un autre médecin. À l’inverse, Frédéric Valletoux, également Horizons, a ensuite défendu la suppression d’un dispositif contraignant de régulation de l’installation. La présence d’un soutien explicite au mécanisme justifie de conserver +1, sans en faire une doctrine unanime du parti.",
      source: "https://www.assemblee-nationale.fr/dyn/16/amendements/1336/AN/71"
    },
    84: {
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants"
    },
    88: {
      source: "https://questions.assemblee-nationale.fr/q17/17-13730QE.htm"
    },
    89: {
      source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/8280"
    },
    91: {
      response: 2,
      justification: "Accord net : Édouard Philippe propose désormais une aide financière familiale unique, lisible et universelle, ainsi qu’une part fiscale dès le deuxième enfant. Cette orientation va clairement vers une politique familiale qui ne disparaît pas avec la hausse du revenu ; toutefois, le caractère « universel » ne garantit pas que le montant soit strictement identique pour tous les ménages, ce qui justifie +2 plutôt que +3.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants"
    },
    92: {
      source: "https://questions.assemblee-nationale.fr/dyn/17/scrutins/8431"
    },
    93: {
      response: 1,
      justification: "Accord modéré : Horizons veut bâtir une infrastructure d’intelligence artificielle européenne souveraine, soutenir les champions européens et instaurer un Buy European Tech Act pour la commande technologique. Cette préférence européenne est nette, mais le programme ne dit pas qu’il faut accepter sans limite des modèles sensiblement moins performants ou plus coûteux ; +1 est donc plus prudent que +2.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
    }
  },
  "france-humaniste": {
    15: {
      response: 0,
      justification: "Position intermédiaire : Villepin reconnaît que la Ve République comporte des mécanismes exceptionnels permettant d’éviter un blocage budgétaire, mais ses prises de position récentes refusent que l’absence de majorité conduise normalement à un passage en force et demandent de remettre la négociation et le vote parlementaires au centre. Ces deux éléments se compensent suffisamment pour retenir 0 plutôt qu’un accord ou un désaccord net."
    },
    37: {
      response: 1,
      justification: "Accord modéré : LFH attribue aux pays développés une responsabilité particulière dans le financement climatique et veut renforcer la solidarité envers les pays du Sud, mais défend parallèlement un partage des efforts avec les grandes économies émergentes. La notion de part prépondérante supportée par les seuls pays riches va donc plus loin que sa doctrine, d’où +1."
    },
    40: {
      response: 2,
      justification: "Accord net : Dominique de Villepin a présenté l’euro comme une monnaie stable et protectrice et continue à inscrire la politique économique française dans une gouvernance renforcée de la zone euro. Il a néanmoins aussi souligné les difficultés qu’un euro trop fort peut créer pour la compétitivité française, ce qui justifie +2 plutôt que +3.",
      source: "https://www.vie-publique.fr/discours/149482-tribune-de-m-dominique-de-villepin-premier-ministre-dans-plusieurs-qu"
    },
    48: {
      response: 1,
      justification: "Accord modéré : l’expérience gouvernementale de Villepin et sa doctrine économique restent compatibles avec l’idée qu’une rigidité excessive de l’emploi peut freiner certaines embauches et transitions professionnelles. Mais il ne défend plus la logique du CPE comme modèle et a depuis reconnu cette réforme parmi ses erreurs politiques ; la position actuelle justifie donc +1 plutôt que +2."
    },
    72: {
      response: -2,
      justification: "Désaccord net : LFH valorise l’expertise et l’évaluation pour éclairer les décisions complexes, mais Villepin critique explicitement une « République des techniciens » qui déposséderait les citoyens et les élus de la décision politique. L’expertise doit conseiller et contrôler, non recevoir davantage de pouvoir que les responsables élus ; -2 est donc plus adapté que -1."
    },
    80: {
      response: -1,
      justification: "Désaccord modéré : LFH accepte des restrictions environnementales fortes en agriculture, mais refuse que les producteurs français supportent seuls des normes plus strictes tandis que des concurrents étrangers peuvent continuer à utiliser les produits interdits. Sa doctrine privilégie les clauses miroir, la traçabilité et la réciprocité des normes ; l’arbitrage précis de la question conduit donc à -1."
    },
    89: {
      response: 1,
      justification: "Accord modéré conservé avec une réserve documentaire importante : la ligne humaniste actuelle de LFH met fortement l’accent sur la dignité, l’autonomie et l’accompagnement des personnes, mais aucune position récente suffisamment explicite sur la nouvelle aide à mourir n’a été identifiée. Historiquement, République Solidaire répondait qu’une nouvelle loi sur l’euthanasie ou le suicide assisté n’était pas nécessaire, jugeait la loi Leonetti adaptée et demandait surtout de développer les soins palliatifs. Cette position ancienne conduit à limiter le score à +1 et interdit un accord plus fort.",
      source: "https://www.doctissimo.fr/html/sante/politique/articles/15454-presidentielles-projet-sante-dominique-de-villepin.htm"
    },
    91: {
      response: 1,
      justification: "Accord modéré : LFH reste attachée à une politique familiale large et à la solidarité entre générations, ce qui va dans le sens d’allocations familiales à vocation universelle. Mais Villepin propose aussi de répartir plus justement les avantages familiaux et de mieux cibler certains moyens, sans rejet explicite de toute modulation selon le revenu ; +1 est donc plus prudent que +2."
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
    if (Object.prototype.hasOwnProperty.call(override, 'response')) party.responses[index] = override.response;
    if (override.justification) party.justifications[index] = override.justification;
    if (override.source && Array.isArray(party.sources)) party.sources[index] = override.source;
  });

  party.axisScores = recomputePartyAxisScores(party.responses);
});

const DATA = {
  ...QUESTIONNAIRE_DATA,
  entities: [...PARTIES_DATA, ...GOVERNMENTS_DATA],
};
