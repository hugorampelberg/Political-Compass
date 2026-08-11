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
  modem: {
    3: {
      response: 1,
      justification: "Accord modéré : le MoDem défend une fiscalité plus progressive et considère que les contribuables les plus fortunés doivent davantage contribuer. Il souhaite toutefois protéger le capital investi dans l’économie productive et ne défend pas une hausse générale ou très lourde de la fiscalité des hauts revenus et patrimoines ; +1 reflète cette orientation redistributive modérée.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2441"
    },
    13: {
      response: -1,
      justification: "Désaccord modéré : François Bayrou défend le modèle français de solidarité collective en matière de santé, de retraites et de protection sociale et refuse de basculer vers une logique où chacun finance essentiellement sa propre protection. Le MoDem accepte néanmoins des dispositifs complémentaires et n’exclut pas une capitalisation collective en complément de la répartition ; le désaccord reste donc limité à -1.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-la-france-besoin-dun-budget-nous-devons-ladopter-au-plus-vite-objectif"
    },
    18: {
      response: 2,
      justification: "Accord net : le MoDem défend depuis longtemps la décentralisation, la subsidiarité et une capacité accrue des collectivités à adapter les politiques publiques aux réalités locales. Il accepte donc une différenciation territoriale substantielle, sans pour autant remettre en cause l’unité de la République ni vouloir régionaliser l’ensemble des règles nationales ; +2 est adapté.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2427"
    },
    25: {
      response: 1,
      justification: "Accord modéré : François Bayrou estime que les flux migratoires doivent rester proportionnés aux capacités d’accueil et insiste sur la langue, les repères communs et l’intégration. Il refuse toutefois une logique de fermeture culturelle ou une hostilité de principe à l’immigration ; la cohésion culturelle peut donc entrer dans l’arbitrage sans devenir un motif dominant de restriction, d’où +1.",
      source: "https://www.mouvementdemocrate.fr/actualites/ur-2025-revivez-le-discours-de-cloture-de-francois-bayrou-video-7950-video"
    },
    28: {
      response: 1,
      justification: "Accord modéré : le MoDem accorde une place importante à la prévention, à la réinsertion et au traitement des causes de la délinquance, mais François Bayrou défend aussi des jugements rapides et des peines courtes réellement exécutées. La prévention n’est donc pas privilégiée au détriment de toute fermeté pénale ; +1 est plus précis que +2.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
    },
    32: {
      response: 1,
      justification: "Accord modéré : le MoDem fait de la lutte contre le dérèglement climatique une priorité et défend une réduction importante des émissions, mais présente également la transition écologique comme un moteur d’innovation, d’emplois et de nouvelles activités. Il n’accepte donc pas explicitement une baisse de la croissance comme contrepartie nécessaire ; +1 traduit mieux cet arbitrage que +2.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2436"
    },
    37: {
      response: 1,
      justification: "Accord modéré : le MoDem soutient la solidarité climatique internationale et reconnaît une responsabilité particulière des économies développées, mais ne défend pas clairement que les pays riches doivent supporter à eux seuls une part prépondérante du coût mondial de la transition. L’effort doit rester collectif et largement coordonné au niveau européen et international ; +1 est donc plus prudent que +2.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2436"
    },
    43: {
      response: -2,
      justification: "Désaccord net : le MoDem ne propose pas de supprimer toute taxation spécifique du patrimoine. Marc Fesneau défend au contraire le remplacement de l’IFI par un impôt sur la fortune improductive à l’assiette plus large, tout en épargnant davantage le capital productif. Cette orientation est clairement opposée à une suppression pure et simple de l’IFI sans fiscalité patrimoniale de remplacement, d’où -2.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2441"
    },
    66: {
      response: 1,
      justification: "Accord modéré : le groupe Les Démocrates a très majoritairement soutenu en juillet 2026 la présomption de légitime défense pour les forces de l’ordre, ce qui traduit une volonté de leur accorder davantage de protection juridique. Mais cette présomption reste soumise aux conditions de nécessité et de proportionnalité et ne vaut pas autorisation générale de tirer sur un conducteur en fuite sans danger immédiat ; +1 est plus adapté que +2.",
      source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/7987"
    },
    69: {
      response: 0,
      justification: "Position intermédiaire : François Bayrou et le MoDem défendent une place importante du nucléaire dans le mix énergétique, mais refusent explicitement d’opposer nucléaire et énergies renouvelables et veulent développer les deux pour sortir des énergies fossiles. L’arbitrage de la question — privilégier le nucléaire même en réduisant les investissements renouvelables — n’est donc pas retenu, d’où 0.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-centre-cest-la-garantie-du-pluralisme-en-refusant-la-bipolarisation"
    },
    71: {
      response: 0,
      justification: "Position intermédiaire : le MoDem défend une action climatique ambitieuse, mais privilégie une réponse européenne et internationale coordonnée et ne s’est pas engagé à accepter un coût macroéconomique aussi élevé que 3 % du PIB lorsque les autres pays ne fournissent aucun effort comparable. La combinaison d’ambition climatique et de recherche de réciprocité justifie 0.",
      source: "https://www.mouvementdemocrate.fr/programme/propositions-2436"
    },
    73: {
      response: 2,
      justification: "Accord net : François Bayrou a explicitement assumé, à Matignon, des décisions budgétaires impopulaires qu’il présentait comme nécessaires pour éviter une crise de la dette et restaurer les finances publiques. Le MoDem accepte donc qu’un gouvernement prenne une décision économiquement jugée nécessaire sans disposer d’une approbation immédiate de l’opinion, ce qui justifie +2.",
      source: "https://www.mouvementdemocrate.fr/actualites/moment-budgetaire-de-verite-de-francois-bayrou-que-retenir-image-7842-image"
    },
    78: {
      response: 3,
      justification: "Accord très fort : François Bayrou relie explicitement la régularité et la durée du séjour au travail, à la maîtrise du français et à l’acceptation des principes communs de la société française. Il présente ces efforts comme des obligations ouvrant la voie à la régularité du séjour puis à l’intégration ; la proposition correspond donc directement à la doctrine exprimée, d’où +3.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
    },
    81: {
      response: 0,
      justification: "Position intermédiaire : le MoDem partage l’objectif de mieux répartir les médecins sur le territoire, mais les responsables et parlementaires centristes ont défendu des méthodes différentes. François Bayrou a privilégié des consultations périodiques dans les zones sous-dotées plutôt qu’une interdiction ou une autorisation administrative de l’installation, tandis que certains élus du centre ont soutenu des mécanismes plus contraignants. L’absence de doctrine homogène sur le conventionnement sélectif justifie 0.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-pense-que-la-question-du-budget-est-assez-grave-pour-quelle-sadresse"
    },
    84: {
      response: -2,
      justification: "Désaccord net : François Bayrou s’est explicitement déclaré opposé au recrutement des enseignants par les chefs d’établissement et ne veut pas transformer ces derniers en patrons de leurs établissements. Il a également défendu l’équilibre existant de l’évaluation plutôt qu’un renforcement marqué du pouvoir hiérarchique local ; cette opposition directe justifie -2.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-invite-de-bfm-politique-ce-dimanche-12h-video-5223-video"
    },
    93: {
      response: 1,
      justification: "Accord modéré : le MoDem fait de la souveraineté numérique européenne une priorité et veut réduire la dépendance technologique à l’égard des acteurs extra-européens. Cette préférence soutient l’usage de solutions européennes dans les administrations, mais le parti n’affirme pas qu’il faut accepter sans limite des modèles sensiblement moins performants ou plus coûteux ; +1 est donc plus adapté que +2.",
      source: "https://modemffe.mouvementdemocrate.fr/numerique/philippe-latombe-sur-le-plan-technologique-nous-sommes-extraordinairement-dependants"
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