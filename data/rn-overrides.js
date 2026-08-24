const RN_RESPONSE_OVERRIDES = {
  76: {
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

// Ajustements LR validés après l'audit documentaire du 12 août 2026.
// Ce bloc s'exécute après data/index.js et correspond donc aux valeurs finales
// réellement utilisées par l'application. Les questions sont résolues par ID,
// jamais par numéro de position dans le tableau de réponses.
const LR_RESEARCH_OVERRIDES = {
  1: {
    response: 3,
    justification: "Accord très fort : LR fait de la baisse des prélèvements sur le travail et la production un axe central de son programme et l'accompagne d'un objectif de maîtrise de la dépense publique. Le compromis posé par la question — réduire les impôts tout en acceptant des économies budgétaires — correspond directement à cette ligne, ce qui justifie +3.",
    source: "https://republicains.fr/nos-propositions/"
  },
  9: {
    response: 3,
    justification: "Accord très fort : LR considère que le niveau de dépense publique et de dette impose des économies structurelles et propose notamment de réduire certains dispositifs d'assistance tout en réformant la protection sociale et l'assurance chômage. La réduction de certaines dépenses sociales fait donc explicitement partie du redressement budgétaire défendu par le parti, ce qui justifie +3.",
    source: "https://republicains.fr/nos-propositions/"
  },
  12: {
    response: 1,
    justification: "Accord modéré : LR veut développer davantage l'épargne, la responsabilité individuelle et des dispositifs de capitalisation, notamment pour la retraite. Le parti reste toutefois attaché à un socle collectif obligatoire de protection sociale et ne propose pas de permettre une sortie générale des systèmes publics de santé, de retraite ou d'assurance sociale. L'accord reste donc limité à +1.",
    source: "https://republicains.fr/actualites/2025/06/26/gerard-larcher-il-faut-depenser-moins-et-peut-etre-travailler-un-peu-plus/"
  },
  23: {
    response: 3,
    justification: "Accord très fort : la droite LR a porté au Sénat un durcissement explicite des conditions d'acquisition de la nationalité par le droit du sol, en exigeant notamment une manifestation de volonté et une assimilation à la communauté française. La volonté de rendre l'accès à la nationalité plus exigeant est directe et substantielle, ce qui justifie +3.",
    source: "https://www.senat.fr/seances/s202311/s20231108/s20231108006.html"
  },
  24: {
    response: 3,
    justification: "Accord très fort : Bruno Retailleau et LR font de l'éloignement effectif des étrangers délinquants ou dangereux une priorité et veulent lever les obstacles juridiques et pratiques aux expulsions. Pour les étrangers condamnés pour des crimes graves, la ligne est donc directement favorable à un durcissement marqué, ce qui justifie +3.",
    source: "https://republicains.fr/actualites/2026/05/02/bruno-retailleau-interview-algerie-macron/"
  },
  28: {
    response: -2,
    justification: "Désaccord net : LR ne rejette pas la prévention ni la réinsertion, mais Bruno Retailleau affirme que la réponse pénale est trop faible et que la dissuasion a été abandonnée. La doctrine actuelle donne clairement la priorité à l'effectivité et à la sévérité de la sanction plutôt qu'à une politique qui privilégierait prévention et réinsertion sur l'augmentation des sanctions. Le désaccord est net sans être absolu, d'où -2.",
    source: "https://republicains.fr/actualites/2025/07/23/bruno-retailleau-le-macronisme-sachevera-avec-emmanuel-macron/"
  },
  31: {
    response: -1,
    justification: "Désaccord modéré : LR défend la décarbonation mais refuse de faire de la décroissance ou de l'affaiblissement économique la contrepartie normale de la politique climatique. Son plan énergétique relie explicitement décarbonation, souveraineté, compétitivité et pouvoir d'achat et critique une écologie de contrainte et de décroissance. La priorité climatique n'est donc pas placée au-dessus de la croissance dans l'arbitrage posé, d'où -1.",
    source: "https://republicains.fr/actualites/2025/07/02/rebatir-un-parc-nucleaire-et-stopper-le-financement-des-renouvelables-notre-plan-pour-lenergie/"
  },
  32: {
    response: -1,
    justification: "Désaccord modéré : LR veut réduire l'usage des énergies fossiles mais refuse que la transition repose principalement sur un renchérissement important supporté par les ménages. Son projet énergétique donne la priorité à une énergie décarbonée compétitive et au pouvoir d'achat plutôt qu'à une forte hausse volontaire du prix des fossiles. Le désaccord est réel mais n'exclut pas tout signal-prix, ce qui justifie -1.",
    source: "https://republicains.fr/actualites/2025/07/02/rebatir-un-parc-nucleaire-et-stopper-le-financement-des-renouvelables-notre-plan-pour-lenergie/"
  },
  38: {
    response: 2,
    justification: "Accord net : Bruno Retailleau place la souveraineté nationale et la capacité de la France à reprendre la main sur certaines décisions européennes au cœur de son projet. LR reste favorable à l'Union européenne et souhaite aussi renforcer l'Europe dans plusieurs domaines stratégiques ; la souveraineté nationale est donc privilégiée sans aller jusqu'à un retrait de la coopération européenne, ce qui justifie +2.",
    source: "https://republicains.fr/actualites/2026/02/12/je-suis-candidat-a-lelection-presidentielle/"
  },
  42: {
    response: 1,
    justification: "Accord modéré : LR reste favorable à un allègement de la fiscalité patrimoniale, mais la position parlementaire récente ne correspond plus à une suppression pure et simple de l'IFI. En janvier 2026, Philippe Juvin et le groupe Droite républicaine ont défendu le maintien de l'IFI existant face à son remplacement par une contribution patrimoniale plus large. Une orientation favorable à l'allègement subsiste, mais l'abolition totale n'est pas la ligne démontrée ; +1 est donc plus précis que +3.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/2247/AN/2835"
  },
  45: {
    response: 3,
    justification: "Accord très fort : LR propose de réformer l'assurance chômage pour accélérer le retour à l'emploi et fait de la reprise d'activité et de la responsabilité des bénéficiaires un principe central de sa politique sociale. Des refus répétés d'emplois raisonnablement adaptés sont donc incompatibles avec la conditionnalité défendue par le parti, ce qui justifie +3.",
    source: "https://republicains.fr/nos-propositions/"
  },
  48: {
    response: 2,
    justification: "Accord net : des responsables LR, notamment Gérard Larcher, présentent explicitement la capitalisation comme une voie à développer pour compléter le financement des retraites. Le parti ne propose toutefois pas d'abandonner la répartition et conserve un socle collectif important. Une évolution vers un système combinant répartition et davantage de capitalisation correspond donc à +2 plutôt qu'à +3.",
    source: "https://republicains.fr/actualites/2025/06/26/gerard-larcher-il-faut-depenser-moins-et-peut-etre-travailler-un-peu-plus/"
  },
  55: {
    response: 3,
    justification: "Accord très fort : Bruno Retailleau propose explicitement de conditionner l'accès des étrangers aux aides sociales à cinq années de résidence légale et de travail. La proposition instaure précisément une forte limitation des prestations durant les premières années suivant l'arrivée, ce qui correspond directement à la question et justifie +3.",
    source: "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/"
  },
  56: {
    response: 3,
    justification: "Accord très fort : Bruno Retailleau a explicitement défendu une immigration régulière choisie, moins importante et davantage centrée sur une immigration économique qualifiée. Cette sélection implique directement de privilégier les profils qualifiés plutôt que l'immigration peu qualifiée, ce qui correspond presque exactement à la question et justifie +3.",
    source: "https://www.senat.fr/seances/s202311/s20231106/s20231106008.html"
  },
  57: {
    response: -2,
    justification: "Désaccord net : des sénateurs LR ont voulu supprimer l'automaticité complète du droit du sol en exigeant une manifestation de volonté et une assimilation à la communauté française pour l'acquisition de la nationalité à la majorité. LR ne défend donc pas l'acquisition automatique indépendamment de tout attachement ou effort d'assimilation. La ligne ne supprime toutefois pas tout droit du sol, ce qui conduit à -2 plutôt qu'à -3.",
    source: "https://www.senat.fr/seances/s202311/s20231108/s20231108006.html"
  },
  58: {
    response: 2,
    justification: "Accord net : LR fait de l'assimilation, de la langue française, des valeurs communes et de la maîtrise des flux des critères centraux de sa politique migratoire. En revanche, aucune proposition suffisamment directe n'établit un pouvoir général de refuser à l'entrée une personne par ailleurs légalement admissible sur la seule anticipation de sa volonté future de s'intégrer culturellement. L'orientation est forte mais le mécanisme exact n'est pas démontré, d'où +2 plutôt que +3.",
    source: "https://republicains.fr/actualites/2025/06/16/bruno-retailleau-mai-68-a-fabrique-des-barbares/"
  },
  59: {
    response: -1,
    justification: "Désaccord modéré : la conception LR de l'intégration ne se limite pas au seul respect formel de la loi et accorde aussi de l'importance à la langue, à l'histoire, à la culture française et à l'adhésion aux valeurs communes. Le parti ne demande toutefois pas l'effacement général de toute pratique culturelle ou religieuse différente. La réserve envers l'énoncé est donc réelle mais modérée, ce qui justifie -1.",
    source: "https://www.senat.fr/enseance/2022-2023/434/Amdt_62.html"
  },
  63: {
    response: 0,
    justification: "Position intermédiaire : LR rejette les politiques écologiques qui font fortement peser le coût de la transition sur les ménages modestes et les travailleurs, comme l'illustre son opposition aux ZFE qualifiées d'écologie punitive. La question prévoit cependant une compensation ciblée de ces ménages, ce qui répond à une part importante de cette objection. Aucune position LR suffisamment directe ne permet de trancher l'arbitrage exact d'une taxe carbone compensée ; 0 reste donc le score le plus prudent.",
    source: "https://republicains.fr/actualites/2026/01/23/suppression-des-zfe-adoption-du-test-pme-et-sortie-des-projets-industriels-du-zan-linterview-de-remy-pointereau/"
  },
  65: {
    response: 3,
    justification: "Accord très fort : LR place explicitement le nucléaire au cœur de sa stratégie énergétique et propose parallèlement d'arrêter les subventions publiques à de nouvelles capacités éoliennes et photovoltaïques. Le parti accepte donc directement qu'une priorité d'investissement donnée au nucléaire réduise certains soutiens aux renouvelables, ce qui correspond presque exactement à la question et justifie +3.",
    source: "https://republicains.fr/actualites/2025/07/02/rebatir-un-parc-nucleaire-et-stopper-le-financement-des-renouvelables-notre-plan-pour-lenergie/"
  },
  71: {
    response: 0,
    justification: "Position intermédiaire : LR veut restaurer l'autorité et la capacité de décision de l'exécutif, mais des responsables du parti critiquent parallèlement le présidentialisme quinquennal et le césarisme institutionnel. La ligne actuelle ne consiste donc pas clairement à donner davantage de pouvoirs au président pour surmonter les blocages du Parlement. Ces orientations contradictoires justifient une position neutre à 0.",
    source: "https://republicains.fr/actualites/2025/07/01/proportionnelle-gardons-nous-daffaiblir-ce-qui-reste-de-la-ve-republique/"
  },
  72: {
    response: -3,
    justification: "Désaccord très fort : le Bureau politique des Républicains s'est opposé à l'unanimité à l'introduction de la proportionnelle pour les élections législatives, en mettant précisément en avant le risque de coalitions instables et la difficulté à dégager des majorités capables de gouverner. L'opposition correspond directement à l'arbitrage de la question, ce qui justifie -3.",
    source: "https://republicains.fr/actualites/2025/05/28/le-bureau-politique-des-republicains-soppose-a-lunanimite-a-la-proportionnelle/"
  },
  76: {
    response: -1,
    justification: "Désaccord modéré : LR partage l'objectif de mieux répartir les médecins sur le territoire, mais la droite sénatoriale récente a rejeté le conventionnement sélectif comme mécanisme général de contrainte à l'installation et lui préfère des incitations ou des obligations d'exercice territorial. Des élus LR ont soutenu par le passé des mécanismes plus contraignants, ce qui empêche de retenir un désaccord plus fort. Le dispositif précis de la question reste néanmoins plutôt rejeté, d'où -1.",
    source: "https://www.senat.fr/compte-rendu-commissions/20260608/soc.html"
  },
  81: {
    response: 1,
    justification: "Accord modéré : le groupe Droite républicaine a unanimement soutenu parmi ses votants la loi renforçant les pouvoirs des communes pour réguler les meublés touristiques, avec des quotas et d'autres outils locaux de restriction. Le texte ne crée cependant pas une interdiction générale identique à celle décrite dans la question. Le soutien au pouvoir municipal de restriction est réel mais plus limité que l'énoncé, ce qui justifie +1.",
    source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/289"
  },
  84: {
    response: -3,
    justification: "Désaccord très fort : lors du vote définitif du 15 juillet 2026 sur la proposition de loi relative au droit à l'aide à mourir, 41 députés du groupe Droite républicaine ont voté contre, contre seulement 5 pour et 2 abstentions. La question reprend le principe central du texte adopté ; l'opposition très majoritaire du groupe justifie donc -3.",
    source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/8280"
  },
  86: {
    response: 3,
    justification: "Accord très fort : LR veut explicitement rendre à la politique familiale son universalité. Bruno Retailleau critique la modulation des allocations familiales selon le revenu et propose un revenu familial lié au nombre d'enfants dans le cadre d'une refonte des aides. Le principe d'un soutien familial qui ne diminue pas avec les revenus correspond directement à la question, ce qui justifie +3.",
    source: "https://republicains.fr/actualites/2026/04/30/sortir-de-lhiver-demographique/"
  },
  87: {
    response: 3,
    justification: "Accord très fort : des députés Droite républicaine ont directement soutenu une interdiction d'accès aux réseaux sociaux pour les mineurs de moins de quinze ans et le groupe a très largement voté le texte définitif de juillet 2026. Le mécanisme correspond directement à la question et ne dépend pas de l'accord des parents, ce qui justifie +3.",
    source: "https://questions.assemblee-nationale.fr/dyn/17/scrutins/8431"
  },
  88: {
    response: 1,
    justification: "Accord modéré : LR défend explicitement l'indépendance numérique française et européenne et veut réduire la dépendance envers les grands acteurs technologiques extra-européens. Cette orientation soutient une préférence pour des solutions européennes dans les administrations, mais le parti n'affirme pas qu'il faut accepter sans limite des modèles sensiblement moins performants ou plus coûteux. La contrepartie précise de la question limite donc l'accord à +1.",
    source: "https://republicains.fr/actualites/2026/01/05/refuser-la-dependance-numerique-culturelle-defendre-lindependance-europeenne/"
  }
};

const lrParty = DATA.entities.find(entity => entity.id === 'lr');
if (lrParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(LR_RESEARCH_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) {
      lrParty.responses[index] = override.response;
    }
    if (override.justification) {
      lrParty.justifications[index] = override.justification;
    }
    if (override.source && Array.isArray(lrParty.sources)) {
      lrParty.sources[index] = override.source;
    }
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (lrParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  lrParty.axisScores = scores;
}
