// Justifications documentaires de la question 19 restaurée : volume annuel d'immigration.
// Ce fichier est chargé en dernier afin que la formulation, le score et la source restent
// cohérents après l'application des autres correctifs documentaires.
const QUESTION_19_IMMIGRATION_VOLUME_OVERRIDES = {
  lfi: {
    response: -3,
    confidence: 3,
    justification: "Désaccord très fort : LFI propose de faciliter l’accès aux visas, d’ouvrir des voies légales et sécurisées, de régulariser plusieurs catégories de personnes durablement présentes et de renforcer l’accueil des réfugiés. Le mouvement ne fixe aucun objectif général de baisse du nombre annuel d’immigrants ; son programme va au contraire dans le sens d’entrées légales et d’un accueil plus ouverts. La proposition est donc directement opposée à cette orientation, d’où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  pcf: {
    response: -3,
    confidence: 3,
    justification: "Désaccord très fort : le PCF défend la liberté de circulation, l’ouverture de voies légales et sécurisées et une politique d’accueil, et refuse de faire de la réduction du nombre d’entrées la réponse aux difficultés sociales. Cette position contredit directement un objectif général de baisse du nombre d’immigrants accueillis chaque année, ce qui justifie -3.",
    source: "https://www.pcf.fr/mediapart_la_gauche_et_l_immigration_les_r_ponses_et_propositions_du_pcf"
  },
  "les-ecologistes": {
    response: -3,
    confidence: 3,
    justification: "Désaccord très fort : le programme 2026 des Écologistes prévoit des voies légales et sécurisées, la régularisation de travailleurs, d’étudiants et de parents d’enfants scolarisés, ainsi qu’un accueil renforcé des personnes exilées. Il ne poursuit pas une réduction générale des entrées annuelles ; l’orientation proposée est presque exactement inverse, d’où -3.",
    source: "https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf"
  },
  ps: {
    response: -2,
    confidence: 2,
    justification: "Désaccord net : le PS rejette la « logique du chiffre », veut renforcer les voies légales d’entrée, régulariser par le travail et organiser l’accueil et l’intégration. Il conserve néanmoins des frontières, des règles d’admission, une planification parlementaire et l’exécution des décisions d’éloignement. Son projet s’oppose donc nettement à une baisse générale du nombre d’immigrants, sans correspondre à une ouverture sans contrôle ; -2 est adapté.",
    source: "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  renaissance: {
    response: 1,
    confidence: 2,
    justification: "Accord modéré : Renaissance veut passer d’une immigration en partie « subie » à une immigration davantage pilotée par les besoins économiques, avec des quotas, une sélection par points et un contrôle renforcé des étudiants et du regroupement familial. Ces mesures peuvent réduire plusieurs flux, mais le parti souhaite parallèlement maintenir et organiser une immigration économique utile, sans annoncer de baisse uniforme de toutes les entrées. L’accord avec l’énoncé reste donc limité à +1.",
    source: "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
  },
  modem: {
    response: 0,
    confidence: 2,
    justification: "Position intermédiaire : François Bayrou demande que les flux soient maîtrisés et que les frontières soient effectives, mais il refuse l’« obsession anti-immigration », souligne la contribution des personnes immigrées et place l’intégration au même niveau que le contrôle. Cette ligne ne permet pas d’établir un objectif général de hausse ou de baisse du nombre annuel d’immigrants ; 0 traduit cette position d’équilibre.",
    source: "https://www.mouvementdemocrate.fr/actualites/ur-2025-revivez-le-discours-de-cloture-de-francois-bayrou-video-7950-video"
  },
  horizons: {
    response: 2,
    confidence: 2,
    justification: "Accord net : Horizons veut restreindre l’immigration familiale, limiter certaines demandes d’asile et reprendre le contrôle des flux, tout en instaurant des quotas pour conserver une immigration économique choisie. Le parti vise donc clairement la diminution de plusieurs catégories d’entrées, mais pas la suppression de toute immigration utile. Cette nuance conduit à +2 plutôt qu’à un accord maximal.",
    source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "france-humaniste": {
    response: -1,
    confidence: 3,
    justification: "Désaccord modéré : La France Humaniste présente l’immigration comme un levier de stabilisation démographique, de croissance et de financement des retraites, et ne fixe donc pas de baisse générale des entrées comme objectif. Elle veut toutefois piloter les flux, conditionner l’accueil à la coopération sur les retours et lutter contre la clandestinité. Cette combinaison justifie une réserve modérée de -1.",
    source: "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html"
  },
  lr: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : Bruno Retailleau affirme explicitement vouloir « stopper l’immigration illégale et réduire l’immigration légale » et détaille des restrictions visant l’asile, les étudiants, le regroupement familial et l’immigration de travail. La réduction du nombre d’immigrants accueillis constitue donc un objectif général et central de LR, directement conforme à l’énoncé ; +3 est justifié.",
    source: "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/"
  },
  "nouvelle-energie": {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : Nouvelle Énergie propose explicitement de diviser par huit la délivrance de titres de séjour, de fixer des quotas de main-d’œuvre qualifiée et de durcir le regroupement familial. Cette cible quantitative vise une réduction massive des admissions annuelles et correspond directement à la proposition, ce qui justifie +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
  },
  udr: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : l’UDR veut abolir le regroupement familial, sortir de ce qu’il qualifie d’« immigration de masse » et imposer des quotas migratoires. Ces mesures ont explicitement pour objet de réduire fortement le nombre d’entrées annuelles, au-delà d’un simple changement de procédure ; +3 correspond donc à sa ligne.",
    source: "https://www.udr.fr/priorites"
  },
  rn: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : le RN décrit l’« immigration de masse » comme une menace, veut maîtriser les frontières et annonce un référendum constitutionnel permettant de durcir l’ensemble de la politique migratoire. La réduction très importante des entrées légales comme irrégulières est un objectif structurant et répété du parti ; l’accord avec l’énoncé est maximal, d’où +3.",
    source: "https://rassemblementnational.fr/discours/discours-de-jordan-bardella-a-menton"
  },
  reconquete: {
    response: 3,
    confidence: 2,
    justification: "Accord très fort : le programme de Reconquête fait de l’arrêt de l’immigration de masse une priorité et prévoit de supprimer ou de restreindre fortement plusieurs voies d’entrée, notamment le regroupement familial, l’asile et l’immigration étudiante. L’objectif dépasse la seule maîtrise administrative et vise bien une baisse radicale du nombre annuel d’immigrants ; +3 est adapté.",
    source: "https://programme.ericzemmour.fr/immigration"
  },
  allemagne: {
    response: 2,
    confidence: 3,
    justification: "Accord net : le gouvernement Merz revendique une baisse de l’immigration non contrôlée, a renforcé les contrôles et les retours et suspendu le regroupement familial de certains bénéficiaires de la protection subsidiaire. Il continue toutefois à organiser l’immigration légale et qualifiée nécessaire à l’économie. La volonté de réduire plusieurs flux est claire sans constituer une fermeture générale, ce qui justifie +2.",
    source: "https://www.bundesregierung.de/breg-en/news/the-beginning-is-complete-2377326"
  },
  espagne: {
    response: -2,
    confidence: 2,
    justification: "Désaccord net : le gouvernement espagnol a lancé en 2026 une régularisation extraordinaire, sous conditions de résidence et d’absence d’antécédents, et présente la migration légale et ordonnée comme une réponse utile aux besoins économiques et démographiques. Il maintient des contrôles aux frontières et des critères d’admission, mais ne poursuit pas une baisse générale du nombre d’immigrants accueillis ; -2 est donc plus précis qu’un désaccord absolu.",
    source: "https://www.lamoncloa.gob.es/consejodeministros/resumenes/paginas/2026/270126-rueda-de-prensa-ministros.aspx"
  },
  suisse: {
    response: 0,
    confidence: 2,
    justification: "Position intermédiaire : le Conseil fédéral veut réduire nettement les demandes d’asile et dispose d’outils ciblés de régulation, mais il a rejeté en 2026 un plafonnement global de la population et des entrées, en invoquant les besoins de main-d’œuvre, la prospérité et la libre circulation avec l’Union européenne. Les orientations restrictives et ouvertes se compensent sur la question générale du volume annuel ; 0 est donc adapté.",
    source: "https://www.ejpd.admin.ch/fr/le-conseil-federal-rejette-linitiative-populaire-pas-de-suisse-a-10-millions-"
  },
  finlande: {
    response: 2,
    confidence: 3,
    justification: "Accord net : le gouvernement Orpo a réduit le quota annuel de réfugiés, durci l’asile, le regroupement familial et plusieurs conditions de séjour afin de limiter les flux humanitaires et familiaux. Il cherche néanmoins à attirer une immigration de travail qualifiée répondant aux besoins du pays. Cette stratégie vise une baisse sélective, et non l’arrêt de toute immigration, ce qui conduit à +2.",
    source: "https://valtioneuvosto.fi/en/governments/government-programme"
  },
  "royaume-uni": {
    response: 2,
    confidence: 3,
    justification: "Accord net : le livre blanc britannique affirme explicitement que l’immigration nette doit baisser et prévoit de relever les seuils de qualification, de fermer la voie des visas sociaux à de nouvelles candidatures étrangères et de réduire certaines possibilités après les études. Le gouvernement conserve cependant des voies ciblées pour les talents, les secteurs nécessaires et la protection humanitaire ; +2 est donc plus précis que +3.",
    source: "https://www.gov.uk/government/publications/restoring-control-over-the-immigration-system-white-paper/restoring-control-over-the-immigration-system-accessible"
  },
  danemark: {
    response: 2,
    confidence: 3,
    justification: "Accord net : l’accord de gouvernement danois maintient une politique migratoire restrictive afin de garder la maîtrise du nombre d’arrivées, notamment en matière d’asile et de regroupement familial. Il respecte toutefois les conventions internationales et conserve des admissions liées au travail, aux études et à la protection. La réduction est donc nette mais sélective, ce qui justifie +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  },
  "pays-bas": {
    response: 1,
    confidence: 3,
    justification: "Accord modéré : la coalition néerlandaise veut reprendre le contrôle de l’asile et de l’immigration de travail en fonction de la capacité d’accueil du pays et de ses besoins. Elle ne fixe toutefois pas un objectif uniforme de baisse de toutes les entrées et maintient l’immigration professionnelle utile ainsi que les obligations de protection. Cette maîtrise sélective conduit à +1.",
    source: "https://www.government.nl/government/coalition-agreement"
  },
  pologne: {
    response: 3,
    confidence: 3,
    justification: "Accord très fort : le gouvernement Tusk affirme vouloir reprendre un contrôle intégral des entrées, réduire au minimum la migration irrégulière et a mis en avant une baisse de 31 % du nombre de visas délivrés au premier semestre 2024. Même s’il maintient une immigration légale de travail pour les personnes sélectionnées et intégrées, la réduction forte des flux constitue un objectif explicite ; +3 est adapté.",
    source: "https://www.gov.pl/web/primeminister/taking-back-control-ensuring-security"
  }
};

const question19Index = DATA.questions.findIndex(question => question.id === 19);

if (question19Index >= 0) {
  DATA.entities.forEach(entity => {
    const override = QUESTION_19_IMMIGRATION_VOLUME_OVERRIDES[entity.id];
    if (!override) return;

    entity.responses[question19Index] = override.response;
    entity.confidence[question19Index] = override.confidence;
    entity.justifications[question19Index] = override.justification;
    entity.sources[question19Index] = override.source;

    entity.axisScores = Object.fromEntries(DATA.axes.map(axis => {
      const mass = DATA.questions.reduce(
        (sum, question) => sum + Math.abs(question.coefficients[axis.key] || 0),
        0
      );
      const numerator = DATA.questions.reduce(
        (sum, question, index) => sum + entity.responses[index] * (question.coefficients[axis.key] || 0),
        0
      );
      return [axis.key, mass ? 10 * numerator / (3 * mass) : 0];
    }));
    entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)
      / entity.confidence.length;
  });
}
