// Calibration finale de Q50 après reformulation de la question.
// Cette couche est chargée après les autres overrides afin que les scores,
// justifications et sources répondent bien au relèvement de l'âge légal,
// et non à l'ancienne indexation automatique sur l'espérance de vie.
// Toutes les entités sont résolues par leur ID stable.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions) || !Array.isArray(DATA.entities)) return;

  const questionIndex = DATA.questions.findIndex(item => item.id === 50);
  if (questionIndex < 0) return;

  DATA.questions[questionIndex].text = "L'âge légal de départ à la retraite devrait être augmenté afin d'assurer plus facilement le financement du système de retraite.";

  const Q50_OVERRIDES = {
    lfi: {
      response: -3,
      justification: "Désaccord très fort : LFI combat le relèvement de l'âge légal à 64 ans et défend le retour vers une retraite à 60 ans, en proposant de financer le système par davantage de cotisations sur les revenus du travail et du capital et par l'emploi. Utiliser une hausse de l'âge légal comme levier d'équilibre va donc directement à l'encontre de sa ligne ; -3 est adapté.",
      source: "https://lafranceinsoumise.fr/2025/10/31/la-france-insoumise-toujours-contre-la-retraite-a-64-ans/"
    },
    pcf: {
      response: -3,
      justification: "Désaccord très fort : le PCF propose explicitement d'abroger la retraite à 64 ans et de financer le retour à 60 ans. Il privilégie donc d'autres recettes et une politique de l'emploi plutôt qu'un recul de l'âge légal pour équilibrer le système ; -3 correspond directement à sa position.",
      source: "https://www.pcf.fr/pacte_2025_travail"
    },
    "les-ecologistes": {
      response: -3,
      justification: "Désaccord très fort : Les Écologistes s'opposent au recul de l'âge légal issu de la réforme à 64 ans et défendent un âge de départ plus bas, avec prise en compte renforcée des carrières et de la pénibilité. Le relèvement de l'âge légal comme instrument de financement est donc directement contraire à leur orientation ; -3 est adapté.",
      source: "https://lesecologistes.fr/pages/3FUIw0kVkP3JCPpiNU9PEA/ii-pour-la-justice-sociale-et-une-economie-au-service-du-climat"
    },
    ps: {
      response: -3,
      justification: "Désaccord très fort : le projet socialiste veut revenir sur le relèvement à 64 ans et ramener l'âge légal à 62 ans, tout en recherchant l'équilibre par d'autres leviers de financement, d'emploi et de contribution. Relever l'âge légal pour faciliter le financement est donc directement opposé à son projet actuel ; -3 est adapté.",
      source: "https://projet-socialiste.fr/projet/vivre-libres/"
    },
    renaissance: {
      response: 0,
      justification: "Position intermédiaire : Renaissance a porté le relèvement à 64 ans en 2023, mais sa proposition actuelle veut refonder le système autour d'un compte individuel où chacun choisit son moment de départ, avec surcote, capitalisation et règle d'or d'équilibre. Le parti ne fait donc plus d'une nouvelle hausse de l'âge légal le levier central de financement, sans pour autant la rejeter par principe ; 0 est le score le plus fidèle à la ligne actuelle.",
      source: "https://parti-renaissance.fr/petitions/refonder-notre-systeme-de-retraite"
    },
    modem: {
      response: 3,
      justification: "Accord très fort : François Bayrou lie explicitement la sauvegarde financière du système par répartition au fait de travailler plus longtemps et affirme que le rééquilibrage ne peut, dans les conditions actuelles, être obtenu que par un déplacement progressif de l'âge de départ. Le mécanisme correspond directement à la question ; +3 est adapté.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-ce-sont-nos-actifs-et-nos-enfants-qui-paieront-laddition-de-notre"
    },
    horizons: {
      response: 2,
      justification: "Accord net : Horizons veut garantir l'équilibre des retraites en augmentant la quantité de travail sur l'ensemble de la vie active et en développant parallèlement un pilier de capitalisation. Édouard Philippe assume donc clairement l'idée de travailler plus longtemps pour préserver le système, mais son projet actuel ne repose pas exclusivement sur une nouvelle hausse uniforme de l'âge légal ; +2 est plus précis que +3.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    lr: {
      response: 3,
      justification: "Accord très fort : la ligne présidentielle actuelle de Bruno Retailleau assume qu'il faut travailler davantage pour tenir compte du vieillissement et défend un nouvel allongement de la vie active, jusqu'à 65 ans. Le relèvement de l'âge de départ est donc explicitement présenté comme un levier nécessaire de soutenabilité du système ; +3 est adapté.",
      source: "https://lcp.fr/actualites/presidentielle-2027-qui-propose-quoi-sur-les-retraites-437864"
    },
    rn: {
      response: -2,
      justification: "Désaccord net : la ligne du RN reste opposée à une hausse générale supplémentaire de l'âge légal, Marine Le Pen conservant une logique de départ entre 60 et 62 ans selon les carrières. Jordan Bardella a parallèlement proposé de sortir du principe d'un âge légal fixe et d'ouvrir davantage la capitalisation. Malgré ces divergences internes, aucune de ces lignes ne fait d'un nouveau relèvement général de l'âge légal le levier privilégié de financement ; -2 est adapté.",
      source: "https://www.tf1info.fr/politique/retraites-un-changement-de-position-du-rn-n-est-pas-a-l-ordre-du-jour-assure-sur-tf1-laurent-jacobelli-2442505.html"
    },
    reconquete: {
      response: -2,
      justification: "Désaccord net : la ligne économique récente portée par Sarah Knafo défend le passage à la capitalisation précisément pour sortir d'un système par répartition qui conduit à repousser régulièrement l'âge de départ. Reconquête privilégie donc aujourd'hui une modification structurelle du financement plutôt qu'un relèvement de l'âge légal comme variable d'équilibre. Éric Zemmour avait toutefois défendu un relèvement en 2022, ce qui empêche de retenir -3 ; -2 est adapté.",
      source: "https://fr.linkedin.com/posts/sarah-knafo-7a0129b5_jentends-dire-que-les-fran%C3%A7ais-seraient-activity-7398384984731910144-2Dps"
    },
    "nouvelle-energie": {
      response: 1,
      justification: "Accord modéré : Nouvelle Énergie a présenté le passage de l'âge légal à 65 ans comme une mesure transitoire nécessaire à l'équilibre avant une réforme d'ensemble. Mais sa solution structurelle repose surtout sur une combinaison de répartition et de capitalisation destinée précisément à éviter de devoir repousser continuellement l'âge avec le vieillissement. Le levier de l'âge est donc accepté, mais comme préalable plutôt que comme solution durable ; +1 est adapté.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
    },
    udr: {
      response: 0,
      justification: "Position intermédiaire : l'UDR veut sécuriser les retraites par un modèle hybride combinant un socle par répartition et une capitalisation obligatoire, mais son programme actuel ne fixe pas de nouveau relèvement de l'âge légal comme levier de financement. Cette préférence pour une autre architecture ne suffit pas non plus à établir une opposition de principe à toute hausse de l'âge ; 0 est le score le plus rigoureux.",
      source: "https://www.udr.fr/grandforumlibertes"
    },
    "france-humaniste": {
      response: -2,
      justification: "Désaccord net : Dominique de Villepin veut revenir sur la réforme à 64 ans et remplacer la logique d'un âge légal uniforme par une approche fondée davantage sur le nombre d'annuités, les points et la pénibilité. La France Humaniste reconnaît la nécessité d'assurer l'équilibre financier des retraites, mais ne veut pas utiliser une hausse générale de l'âge légal comme principal levier ; -2 est adapté.",
      source: "https://lafrancehumaniste.fr/articles/protection-sociale.html"
    },
    allemagne: {
      response: 3,
      justification: "Accord très fort : le gouvernement Merz veut mettre en œuvre les recommandations de sa commission sur les retraites pour stabiliser durablement le système face au vieillissement, avec notamment un lien entre l'âge normal de départ et l'évolution démographique. Le gouvernement assume ainsi le fait de travailler plus longtemps comme levier de soutenabilité ; +3 est adapté.",
      source: "https://www.bundesregierung.de/breg-de/service/fragen-und-anworten/reformen-rente-arbeitsmarkt-steuern-2445598"
    },
    espagne: {
      response: 2,
      justification: "Accord net : l'Espagne applique encore le calendrier légal qui relève progressivement l'âge ordinaire de la retraite jusqu'à 67 ans en 2027 pour les personnes n'ayant pas une durée de cotisation suffisamment longue, tout en maintenant un départ à 65 ans pour les carrières longues. Le relèvement de l'âge constitue donc un outil réel de soutenabilité, mais modulé par la carrière ; +2 est adapté.",
      source: "https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963/28393/28396/28472/6156?changeLanguage=fr"
    },
    suisse: {
      response: -2,
      justification: "Désaccord net : la réforme AVS 2030 vise explicitement à stabiliser à long terme la situation financière de l'AVS, mais le Conseil fédéral précise qu'un relèvement de l'âge de référence n'est pas envisagé. Il privilégie d'autres mesures de financement et des incitations à rester en emploi ; -2 correspond directement à la nouvelle question.",
      source: "https://www.bsv.admin.ch/fr/avs-2030-fr"
    },
    finlande: {
      response: 3,
      justification: "Accord très fort : le système finlandais relève déjà progressivement l'âge de la retraite et, pour les générations nées à partir de 1965, l'adapte à l'évolution de l'espérance de vie afin d'assurer la soutenabilité sociale et financière. La Finlande applique donc un mécanisme plus exigeant encore que la nouvelle question ; +3 reste pleinement justifié.",
      source: "https://www.etk.fi/en/finnish-pension-system/pensions/determining-the-life-expectancy-coefficient-and-retirement-age/determining-the-retirement-age-for-the-old-age-pension/"
    },
    "royaume-uni": {
      response: 2,
      justification: "Accord net : l'âge de la State Pension passe actuellement de 66 à 67 ans entre 2026 et 2028 et le gouvernement poursuit une revue de cet âge qui examine notamment l'espérance de vie et la soutenabilité de long terme. Le relèvement de l'âge est donc un levier accepté, même si aucune nouvelle hausse au-delà du calendrier existant n'est encore arrêtée ; +2 est adapté.",
      source: "https://www.gov.uk/government/news/gad-and-the-state-pension-age-review"
    },
    danemark: {
      response: 3,
      justification: "Accord très fort : le Danemark a adopté le relèvement de l'âge de la pension publique à 70 ans en 2040, explicitement afin de préserver le financement du modèle social et en application du lien entre retraite et allongement de la vie. Même si le gouvernement veut réexaminer l'automaticité des hausses futures, la hausse votée correspond directement à la question ; +3 est adapté.",
      source: "https://bm.dk/nyheder/pressemeddelelser/2025/05/forhoejelse-af-folkepensionsalderen-i-2040-sikrer-velfaerden"
    },
    "pays-bas": {
      response: 2,
      justification: "Accord net : l'âge de l'AOW néerlandaise reste lié à l'espérance de vie et doit passer de 67 ans à 67 ans et 3 mois à partir de 2028. Toutefois, le gouvernement Jetten a renoncé en mai 2026 à son projet d'un lien un-pour-un plus strict avec l'espérance de vie afin d'ouvrir une négociation sociale. Le relèvement de l'âge reste donc accepté, mais la ligne actuelle est plus modérée qu'un accord maximal ; +2 est adapté.",
      source: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/26/kabinet-wil-open-gesprek-met-vakbonden-en-werkgevers-over-gezamenlijk-pact"
    },
    pologne: {
      response: -2,
      justification: "Désaccord net : la Pologne maintient en 2026 l'âge général de la retraite à 60 ans pour les femmes et 65 ans pour les hommes et le gouvernement Tusk n'a pas engagé de relèvement général de ces seuils pour équilibrer le système. La ligne actuelle privilégie donc le maintien des âges existants plutôt qu'une hausse comme levier de financement ; -2 reste adapté.",
      source: "https://lang.zus.pl/benefits/old-age-pensions/old-age-pensions-operating-under-the-new-rules"
    }
  };

  const recalculate = entity => {
    const scores = {};
    DATA.axes.forEach(axis => {
      const denominator = 3 * DATA.questions.reduce(
        (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
        0
      );
      const numerator = DATA.questions.reduce(
        (sum, question, index) => sum + (entity.responses[index] ?? 0) * question.coefficients[axis.key],
        0
      );
      scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
    });
    entity.axisScores = scores;
  };

  Object.entries(Q50_OVERRIDES).forEach(([entityId, override]) => {
    const entity = DATA.entities.find(item => item.id === entityId);
    if (!entity) return;

    if (Array.isArray(entity.responses)) entity.responses[questionIndex] = override.response;
    if (Array.isArray(entity.justifications)) entity.justifications[questionIndex] = override.justification;
    if (Array.isArray(entity.sources)) entity.sources[questionIndex] = override.source;

    recalculate(entity);
  });
})();
