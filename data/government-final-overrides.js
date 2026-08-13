// Dernière couche de calibration des gouvernements.
// Ce fichier est chargé après tous les overrides pays et avant app.js afin que
// les calculs, classements et comparaisons IA utilisent toujours les valeurs finales.
const GOVERNMENT_FINAL_OVERRIDES = {
  allemagne: {
    5: {
      response: 2,
      justification: "Accord net : l'Allemagne a engagé une hausse substantielle du salaire minimum, avec une progression cumulée importante sur 2026-2027. Cela correspond bien à une augmentation significative, sans justifier pour autant un accord maximal réservé à une hausse exceptionnellement forte ou à une transformation beaucoup plus radicale ; +2 est adapté."
    },
    35: {
      response: 1,
      justification: "Accord modéré : l'Allemagne reconnaît que les économies riches doivent contribuer davantage au financement climatique international, mais elle ne défend pas clairement qu'elles doivent supporter à elles seules ou de façon prépondérante le coût mondial de la transition. +1 reflète mieux cette différence d'intensité."
    },
    45: {
      justification: "Accord très limité par analogie territoriale : l'Allemagne poursuit l'objectif de conditions de vie équivalentes entre métropoles, zones rurales et régions structurellement faibles, et cite notamment l'accès local aux biens et services essentiels parmi les dimensions de la desserte de base. En revanche, l'État fédéral ne garantit pas que les produits essentiels aient presque le même prix partout et ne finance pas un mécanisme général compensant durablement le surcoût du fret ou des prix de détail. La position se rapproche donc seulement indirectement de la logique de la question.",
      source: "https://www.bmwsb.bund.de/DE/raum-und-region/regionalentwicklung/gleichwertige-lebensverhaeltnisse/gleichwertige-lebensverhaeltnisse_node.html"
    },
    65: {
      response: -2,
      justification: "Désaccord net : le gouvernement allemand maintient des objectifs climatiques élevés mais refuse une stratégie qui sacrifierait fortement la compétitivité et la croissance sans effort comparable des autres pays. Face à l'hypothèse précise d'une baisse de 3 % du PIB en agissant presque seul, -2 est plus cohérent qu'une simple réserve."
    },
    75: {
      justification: "Accord très fort : l'Allemagne applique déjà une planification territoriale de l'offre de médecins conventionnés. La Bedarfsplanung fixe, par région et spécialité, les capacités nécessaires à une couverture équilibrée ; elle sert à déterminer les possibilités d'admission de nouveaux médecins et à identifier les zones sur- ou sous-dotées. Les associations régionales de médecins conventionnés mettent ensuite cette planification en œuvre avec les caisses. Le mécanisme est donc très proche de celui proposé par la question, qui consiste à limiter de nouvelles installations conventionnées dans les zones déjà suffisamment dotées afin de rééquilibrer l'offre.",
      source: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/b/bedarfsplanung/seite"
    }
  },
  espagne: {
    31: {
      response: 1,
      justification: "Accord modéré : l'Espagne accepte la tarification carbone et des signaux-prix pour accélérer la transition, mais cherche parallèlement à protéger les ménages contre de fortes hausses durables du prix des carburants et de l'énergie. Elle va donc dans le sens de la question sans en assumer toute l'intensité ; +1 est adapté."
    },
    35: {
      response: 1,
      justification: "Accord modéré : l'Espagne soutient une contribution accrue des pays riches au financement climatique international, mais la notion de part prépondérante va plus loin que la position effectivement défendue, qui reste fondée sur un effort international partagé. +1 est donc plus précis que +2."
    },
    45: {
      justification: "Accord très fort par analogie avec les territoires insulaires et éloignés : l'État espagnol compense structurellement une partie des surcoûts de transport liés à l'éloignement. Aux Canaries, un régime national de compensation vise explicitement à réduire le coût effectif du transport maritime et aérien de marchandises entre l'archipel, la péninsule et d'autres marchés ; des dispositifs comparables existent aussi pour Ceuta et Melilla. Cette intervention publique durable sur le coût du fret correspond étroitement au mécanisme envisagé par la question, même si elle ne garantit pas juridiquement un prix de détail identique pour chaque produit essentiel.",
      source: "https://www.boe.es/buscar/doc.php?id=BOE-A-2000-3269"
    },
    48: {
      justification: "Position intermédiaire : l'Espagne relève progressivement l'âge ordinaire de la retraite selon un calendrier fixé par la loi et la durée de cotisation. En 2026, l'âge est de 65 ans pour les personnes ayant cotisé au moins 38 ans et 3 mois, et de 66 ans et 10 mois sinon ; à partir de 2027, il sera de 65 ans avec au moins 38 ans et 6 mois de cotisations et de 67 ans sinon. Il existe donc bien une hausse programmée de l'âge, mais aucune indexation automatique sur l'évolution de l'espérance de vie : le score neutre traduit cette différence essentielle.",
      source: "https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963/28393/28396/28472/6156?changeLanguage=es"
    },
    65: {
      response: 0,
      justification: "Position intermédiaire : l'Espagne poursuit une politique climatique ambitieuse et accepte des coûts de transition, mais aucune position suffisamment directe n'établit qu'elle accepterait une baisse de 3 % du PIB alors que les autres pays ne feraient aucun effort comparable. La prudence conduit à 0 plutôt qu'à un accord positif."
    },
    86: {
      justification: "Accord très fort : Pedro Sánchez a annoncé en février 2026 que le gouvernement espagnol allait interdire l'accès aux réseaux sociaux aux moins de 16 ans et obliger les plateformes à mettre en place une vérification effective de l'âge. La mesure envisagée est même légèrement plus stricte que la question, qui fixe le seuil à 15 ans, et ne prévoit pas d'exception liée au consentement parental ; +3 est donc pleinement cohérent.",
      source: "https://www.lamoncloa.gob.es/presidente/actividades/Paginas/2026/030226-sanchez-cumbre-gobiernos-dubai.aspx"
    }
  },
  suisse: {
    35: {
      response: 0,
      justification: "Position intermédiaire : la Suisse participe au financement climatique international et reconnaît une responsabilité particulière des économies développées, sans défendre clairement le principe selon lequel les pays riches devraient supporter une part prépondérante du coût mondial de la transition. 0 évite de surinterpréter cette contribution."
    },
    45: {
      justification: "Accord très limité par analogie avec les régions de montagne et périphériques : la Confédération finance des politiques destinées à maintenir l'approvisionnement et l'activité dans les zones où les conditions de production ou d'accès sont plus difficiles. Les contributions à la sécurité de l'approvisionnement soutiennent notamment la production alimentaire dans les régions de collines et de montagne. En revanche, la Suisse ne garantit pas une quasi-parité des prix de détail des produits essentiels entre ces régions et les centres urbains et ne compense pas généralement le prix payé par le consommateur. Le rapprochement avec la question reste donc indirect.",
      source: "https://www.blw.admin.ch/fr/contributions-securite-approvisionnement"
    },
    62: {
      response: 1,
      justification: "Accord modéré : la Suisse maintient une taxe CO₂ dont une partie est redistribuée à la population, mais cette redistribution est largement générale et forfaitaire plutôt que précisément ciblée sur les ménages modestes. Le mécanisme va dans le sens de la question sans en être l'équivalent exact ; +1 est adapté."
    },
    65: {
      response: -2,
      justification: "Désaccord net : la Suisse poursuit ses objectifs climatiques tout en accordant une forte importance à la prospérité, à la compétitivité et à la coordination internationale. Une perte de 3 % du PIB sans effort comparable des autres pays serait nettement contraire à cette ligne ; -2 est plus cohérent que -1."
    },
    80: {
      justification: "Accord modéré : la Suisse limite déjà fortement la croissance des résidences secondaires dans les communes très touristiques. Lorsque leur part dépasse 20 %, la construction de nouvelles résidences secondaires est en principe interdite, sauf exceptions, afin notamment de préserver le parc de logements principaux. Ce dispositif répond au même problème de pression touristique sur le logement, mais il porte surtout sur la création de nouvelles résidences secondaires et non sur l'interdiction municipale de louer régulièrement aux touristes un logement existant qui n'est pas une résidence principale ; +1 reste donc une correspondance partielle.",
      source: "https://www.are.admin.ch/fr/residencessecondaires"
    }
  },
  finlande: {
    35: {
      response: 0,
      justification: "Position intermédiaire : la Finlande contribue au financement climatique international et accepte une responsabilité accrue des pays développés, mais ne défend pas clairement qu'ils doivent supporter une part prépondérante du coût mondial de la transition. 0 reflète cette absence d'engagement sur l'intensité précise de l'énoncé."
    },
    45: {
      response: 1,
      justification: "Accord modéré par analogie avec les régions très peu peuplées : la Finlande maintient pour 2026-2028 une subvention régionale de transport destinée à réduire les surcoûts de fret provoqués par les très longues distances dans plusieurs régions périphériques. Selon la distance, l'aide couvre 7 à 15 % des coûts de transport routier ou ferroviaire des produits de PME implantées dans ces zones. Le mécanisme correspond directement à l'idée de compenser un handicap logistique territorial, mais il vise la compétitivité des entreprises et non une garantie générale du prix des produits essentiels pour les consommateurs ; +1 est donc plus précis que +2.",
      source: "https://valtioneuvosto.fi/en/-/1410877/regional-transport-subsidies-to-continue-in-2026-2028-aim-is-to-keep-all-of-finland-viable"
    },
    54: {
      response: 2,
      justification: "Accord net : la Finlande renforce sensiblement les conditions et le niveau de certaines prestations applicables aux nouveaux arrivants pendant leurs premières années, notamment via des exigences de résidence, d'activité et d'intégration. Ces restrictions sont substantielles, mais ne constituent pas une exclusion générale de la protection sociale ; +2 est plus adapté que +3."
    },
    65: {
      response: -2,
      justification: "Désaccord net : le gouvernement Orpo maintient des objectifs climatiques mais subordonne explicitement leur mise en œuvre à la compétitivité, à la croissance et à la maîtrise des coûts. Il est peu compatible avec l'acceptation d'une perte de 3 % du PIB sans effort comparable des autres pays ; -2 est adapté."
    },
    75: {
      justification: "Accord seulement indirect : le gouvernement finlandais reconnaît des écarts territoriaux persistants d'accès aux soins et demande aux wellbeing services counties d'assurer un accès plus égal aux services. En revanche, le remboursement national par Kela des consultations de médecins privés est défini selon le type de soin et non selon une carte de sur- ou sous-dotation médicale ; aucune règle nationale comparable au conventionnement sélectif français n'a été identifiée. La politique partage donc l'objectif de rééquilibrage territorial, mais pas l'instrument précis proposé par la question.",
      source: "https://valtioneuvosto.fi/en/-/1271139/ministry-of-social-affairs-and-health-report-wellbeing-services-counties-handle-core-tasks-well-but-with-a-risk-of-unequal-access-to-services-due-to-regional-segregation"
    },
    86: {
      justification: "Accord modéré : le gouvernement finlandais a lancé en 2026 un groupe de travail chargé d'étudier des restrictions à l'usage des réseaux sociaux par les mineurs et la ministre compétente a explicitement indiqué que la Finlande examinait, comme d'autres pays, des restrictions pour les moins de 15 ans. Le dispositif doit encore évaluer les contraintes juridiques, les effets et les différentes options, et aucune interdiction générale n'est à ce stade adoptée. +1 traduit donc une orientation favorable à l'examen d'une telle mesure, sans engagement définitif.",
      source: "https://valtioneuvosto.fi/-/1271139/stm-keraa-lasten-ja-nuorten-nakemyksia-ja-kokemuksia-sosiaalisen-median-kaytosta"
    }
  },
  'royaume-uni': {
    35: {
      response: 1,
      justification: "Accord modéré : le Royaume-Uni finance fortement l'action climatique internationale et reconnaît une responsabilité accrue des économies riches, mais sa stratégie repose aussi sur la mobilisation d'autres pays et des capitaux privés. Cela ne suffit pas à établir qu'il souhaite que les pays riches supportent une part prépondérante du coût mondial ; +1 est adapté."
    },
    45: {
      justification: "Accord net par analogie avec les îles et zones rurales très isolées : le Royaume-Uni applique le Rural Fuel Duty Relief dans certaines îles et localités reculées où les prix à la pompe sont structurellement plus élevés en raison des coûts de transport et de faibles volumes de vente. Le dispositif réduit de 5 pence par litre la fiscalité sur le carburant et prévoit que l'allègement soit répercuté aux consommateurs. Il s'agit d'une compensation publique directe d'un surcoût territorial sur un bien essentiel, mais limitée au carburant et à des zones précises ; +2 reste donc plus adapté qu'un accord maximal.",
      source: "https://www.gov.uk/guidance/rural-fuel-duty-relief-scheme-for-retailers"
    },
    65: {
      response: 0,
      justification: "Position intermédiaire : le Royaume-Uni conserve des objectifs climatiques ambitieux, mais présente la transition comme compatible avec la croissance, l'emploi et la baisse des factures. Aucune position suffisamment directe ne permet de lui attribuer l'acceptation d'une baisse de 3 % du PIB sans effort comparable des autres pays ; 0 reste le score le plus prudent."
    },
    66: {
      justification: "Accord modéré : le Royaume-Uni confie déjà une partie importante de l'expertise économique à des institutions indépendantes. L'Office for Budget Responsibility produit les prévisions économiques et budgétaires officielles et évalue la soutenabilité des finances publiques, tandis que d'autres institutions indépendantes comme la Banque d'Angleterre disposent de pouvoirs propres. Les décisions de fiscalité et de dépense restent toutefois prises par le gouvernement et le Parlement : le modèle britannique renforce donc l'expertise indépendante sans transférer globalement la décision économique aux experts.",
      source: "https://obr.uk/about-the-obr/what-we-do/"
    },
    67: {
      justification: "Accord modéré : le régime britannique est représentatif et le gouvernement dispose d'un mandat pour prendre des décisions entre deux élections sans les soumettre à une approbation populaire immédiate. Le gouvernement Burnham affirme en outre vouloir respecter ses règles budgétaires et présenter une stratégie économique de long terme. Sa ligne récente insiste cependant sur une politique plus collaborative et sur la recherche d'un objectif commun avec la population ; cela justifie seulement un accord modéré avec l'idée de décider malgré une forte impopularité.",
      source: "https://www.gov.uk/government/speeches/andy-burnhams-first-speech-as-prime-minister-20-july-2026"
    },
    68: {
      response: -2,
      justification: "Désaccord net : le Royaume-Uni reste principalement une démocratie représentative dans laquelle la plupart des décisions sont prises par le Parlement au nom des citoyens ; les référendums y constituent un mécanisme exceptionnel de démocratie directe. Andy Burnham a en outre indiqué dès juillet 2026 qu'il privilégiait des mesures pratiques plutôt que de nouvelles modifications constitutionnelles par référendum. Le pays n'exclut pas les référendums sur de grandes questions constitutionnelles, mais ne défend pas leur utilisation beaucoup plus fréquente, notamment sur des sujets techniques mal maîtrisés ; -2 est donc plus adapté que -1.",
      source: "https://www.parliament.uk/site-information/glossary/referendum/"
    },
    69: {
      response: -3,
      justification: "Désaccord très fort : le cadre démocratique britannique repose sur l'égalité politique des électeurs. Pour l'élection de la Chambre des communes, chaque électeur dispose du même droit de vote et aucun mécanisme n'accorde un poids électoral supérieur en fonction du diplôme ou des connaissances économiques ou institutionnelles. La proposition d'un suffrage pondéré selon le niveau de connaissance est directement contraire à ce principe ; -3 est adapté.",
      source: "https://www.parliament.uk/about/how/elections-and-voting/voting-systems/"
    },
    82: {
      justification: "Accord net : la coopération nucléaire franco-britannique affirme désormais explicitement que les forces nucléaires indépendantes des deux pays peuvent être coordonnées et qu'elles contribuent ensemble à la sécurité de l'Europe et de l'Alliance. La déclaration de Northwood précise qu'une menace extrême contre l'Europe ne susciterait pas une réponse de la seule France ou du seul Royaume-Uni, tout en maintenant l'indépendance des deux dissuasions. Cela va clairement dans le sens d'une protection nucléaire européenne, mais ne constitue pas une extension automatique et unilatérale de la seule garantie française à tous les partenaires ; +2 reste approprié.",
      source: "https://www.gov.uk/government/publications/uk-france-northwood-declaration-10-july-2025"
    }
  },
  danemark: {
    35: {
      response: 1,
      justification: "Accord modéré : le Danemark assume une forte responsabilité climatique internationale et contribue davantage que beaucoup de pays au financement de la transition, mais il ne défend pas clairement que les pays riches doivent porter une part prépondérante de l'ensemble du coût mondial. +1 respecte mieux l'intensité exacte de l'énoncé."
    },
    45: {
      justification: "Accord net par analogie avec le Groenland : le Danemark finance durablement des investissements destinés à réduire les handicaps structurels liés à l'éloignement et au faible peuplement du Groenland. L'accord conclu avec Naalakkersuisut prévoit 1,6 milliard de couronnes danoises sur 2026-2029, notamment pour des infrastructures de transport, la santé et la sécurité de l'approvisionnement énergétique. Cette logique accepte clairement une solidarité budgétaire durable envers un territoire éloigné, mais elle ne garantit pas directement que les denrées ou autres produits essentiels y soient vendus presque au même prix qu'au Danemark continental.",
      source: "https://stm.dk/presse/pressemeddelelser/2025/groenland-og-danmark-styrker-med-ny-aftale-samarbejdet-om-velfaerd-og-oekonomisk-udvikling-i-groenland/"
    },
    65: {
      response: 0,
      justification: "Position intermédiaire : le Danemark est très volontariste sur le climat, mais aucune position suffisamment directe n'établit qu'il accepterait une baisse de 3 % du PIB en l'absence totale d'effort comparable des autres pays. L'ambition climatique justifie de ne pas retenir un désaccord net, mais l'intensité de l'hypothèse empêche un score positif ; 0 est adapté."
    },
    83: {
      justification: "Position intermédiaire : le programme du gouvernement Frederiksen III prévoit à la fois de renforcer les soins palliatifs et de poursuivre le travail sur la possibilité d'une aide active à mourir au Danemark. Interrogée par le Folketing en juillet 2026, la ministre de la Santé a confirmé cette orientation mais indiqué que le gouvernement n'avait pas encore fixé le processus de travail. Le gouvernement n'a donc ni adopté un modèle d'aide à mourir ni fermé la porte à son introduction ; 0 correspond bien à cette position encore ouverte.",
      source: "https://www.ft.dk/samling/20252/almdel/suu/spm/32/svar/2217179/3160354.pdf"
    }
  },
  'pays-bas': {
    35: {
      response: 1,
      justification: "Accord modéré : le gouvernement néerlandais assume une responsabilité internationale importante en matière de climat et de développement, mais ne défend pas clairement que les économies riches doivent supporter une part prépondérante du coût mondial de la transition. +1 reste la bonne intensité."
    },
    45: {
      justification: "Accord net par analogie avec les Caraïbes néerlandaises : l'accord de coalition Jetten prévoit explicitement de développer un niveau de revenu minimum décent à Bonaire, Saint-Eustache et Saba et fait de l'accessibilité financière des services essentiels et des besoins de base une priorité. L'État accepte donc une intervention spécifique pour corriger le coût de la vie dans des territoires insulaires éloignés. Le programme ne garantit toutefois pas une égalité générale des prix avec les Pays-Bas européens pour chaque produit essentiel ; +2 est donc plus précis qu'un accord maximal.",
      source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
    },
    65: {
      response: -2,
      justification: "Désaccord net : le gouvernement néerlandais veut concilier les objectifs climatiques avec la croissance structurelle, une énergie abordable et la compétitivité européenne. Accepter une baisse de 3 % du PIB alors que les autres pays ne feraient aucun effort comparable va nettement à l'encontre de cette ligne ; -2 est adapté."
    },
    80: {
      justification: "Accord net : le droit néerlandais autorise déjà les communes à encadrer fortement la location touristique des logements lorsqu'elle nuit au marché résidentiel. Elles peuvent imposer un numéro d'enregistrement, limiter le nombre de nuits de location par an et, selon le régime local, soumettre la location touristique à autorisation. Le principe selon lequel une commune doit pouvoir empêcher qu'un logement soit durablement soustrait au marché résidentiel par la location touristique est donc clairement accepté, même si la législation nationale n'impose pas partout une interdiction totale des résidences secondaires louées aux touristes.",
      source: "https://www.rijksoverheid.nl/themas/bouwen-en-wonen/woning-verhuren/woningverhuur-toeristen"
    },
    82: {
      justification: "Accord net : Rob Jetten a réagi positivement à la volonté française de faire davantage contribuer la dissuasion nucléaire française à la protection du continent européen et des alliés européens de l'OTAN, et les Pays-Bas ont engagé un dialogue nucléaire avec la France pour préciser les formes possibles de cette coopération. L'orientation vers une dimension européenne de la dissuasion française est donc claire, mais les modalités exactes — notamment la portée de la garantie et le maintien de la décision finale exclusivement française — restent à définir ; +2 demeure adapté.",
      source: "https://www.rijksoverheid.nl/documenten/2026/03/06/letterlijke-tekst-persconferentie-na-ministerraad-6-maart-2026"
    }
  },
  pologne: {
    35: {
      response: 0,
      justification: "Position intermédiaire : la Pologne participe aux mécanismes européens et internationaux de financement climatique mais conteste régulièrement une répartition des coûts qui pèserait excessivement sur certains pays. Elle ne défend pas le principe d'une part prépondérante à la charge des économies riches ; 0 est adapté."
    },
    41: {
      justification: "Accord net par transposition au système fiscal polonais : la Pologne ne possède pas d'équivalent national de l'IFI frappant spécifiquement les patrimoines immobiliers élevés. L'impôt immobilier ordinaire est un impôt local dont les taux sont fixés par les communes dans la limite de plafonds nationaux et, pour les logements des particuliers, dépend principalement de la surface plutôt que d'un seuil de grande fortune immobilière. Le système actuel est donc déjà largement conforme à l'idée de ne pas ajouter un impôt patrimonial immobilier de type IFI, même si le gouvernement n'a pas eu à proposer formellement sa suppression puisqu'un tel impôt n'existe pas.",
      source: "https://www.gov.pl/web/gov/zaplac-podatek-od-nieruchomosci"
    },
    45: {
      justification: "Accord très limité par analogie avec les territoires ruraux et mal desservis : le gouvernement polonais finance massivement des lignes d'autobus déficitaires et prépare un standard national d'accès aux transports collectifs afin de lutter contre l'isolement des petites villes et zones rurales. Cela montre une volonté de compenser par l'argent public les handicaps territoriaux d'accès aux services essentiels. En revanche, aucun mécanisme national comparable à une garantie de prix des biens essentiels ou à une compensation générale du fret de consommation n'a été identifié ; le rapprochement avec la question reste donc indirect.",
      source: "https://www.gov.pl/web/infrastruktura/fundusz-rozwoju-przewozow-autobusowych"
    },
    65: {
      response: -2,
      justification: "Désaccord net : la Pologne refuse explicitement que la politique climatique impose des coûts élevés à la croissance, à l'industrie ou au pouvoir d'achat sans garanties de réciprocité et de compétitivité. Une perte de 3 % du PIB sans effort comparable des autres pays serait nettement contraire à cette position ; -2 est adapté."
    },
    86: {
      justification: "Accord modéré : le gouvernement Tusk examine explicitement en 2026 des règles pouvant limiter, voire interdire, l'accès des moins de 15 ans aux réseaux sociaux. Une consultation organisée à l'initiative du Premier ministre a porté directement sur cette option, et le gouvernement a indiqué qu'il déciderait ensuite de la forme d'éventuelles restrictions. Aucune interdiction nationale n'est toutefois encore adoptée ni définitivement arrêtée ; +1 reste donc un codage prudent.",
      source: "https://www.gov.pl/web/edukacja/konsultacje-cyfrowa-przyszlosc-mlodziezy-z-udzialem-premiera-i-minister-edukacji"
    }
  }
};

function recomputeGovernmentAxisScores(entity) {
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
}

function applyGovernmentFinalOverrides() {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(GOVERNMENT_FINAL_OVERRIDES).forEach(([entityId, overrides]) => {
    const entity = DATA.entities.find(candidate => candidate.id === entityId);
    if (!entity) return;

    Object.entries(overrides).forEach(([questionId, override]) => {
      const index = questionIndexById.get(Number(questionId));
      if (index === undefined) return;
      if (Number.isFinite(override.response)) entity.responses[index] = override.response;
      if (typeof override.justification === 'string') entity.justifications[index] = override.justification;
      if (typeof override.source === 'string' && Array.isArray(entity.sources)) entity.sources[index] = override.source;
    });

    recomputeGovernmentAxisScores(entity);
  });
}

// Applique immédiatement la couche finale : le fichier est injecté juste avant app.js.
applyGovernmentFinalOverrides();

function installAIEntityJustifications() {
  if (typeof buildAIAnalysisPayload !== 'function') return;
  if (buildAIAnalysisPayload.__includesEntityJustifications) return;

  const originalBuildAIAnalysisPayload = buildAIAnalysisPayload;

  const attachJustifications = (groups, entities, fieldName) => {
    if (!Array.isArray(groups) || !Array.isArray(entities)) return;
    const questionIndexByText = new Map(DATA.questions.map((question, index) => [question.text, index]));

    groups.forEach(group => {
      const entity = entities.find(candidate => candidate.name === group.name);
      if (!entity) return;

      ['agreements', 'disagreements'].forEach(listName => {
        const items = group[listName];
        if (!Array.isArray(items)) return;

        items.forEach(item => {
          const index = questionIndexByText.get(item.question);
          if (index === undefined) return;
          item[fieldName] = String(entity.justifications?.[index] || '').trim();
        });
      });
    });
  };

  const wrappedBuildAIAnalysisPayload = function() {
    const payload = originalBuildAIAnalysisPayload();

    attachJustifications(payload.top_party_drivers, results?.parties, 'party_justification');
    attachJustifications(payload.top_government_drivers, results?.governments, 'government_justification');

    payload.methodological_context = {
      ...(payload.methodological_context || {}),
      entity_justification_basis: 'Les champs party_justification et government_justification expliquent le codage documentaire de la note de l’entité. Ils servent à interpréter l’intensité de sa position et ne constituent jamais une opinion saisie par l’utilisateur.'
    };

    return payload;
  };

  wrappedBuildAIAnalysisPayload.__includesEntityJustifications = true;
  buildAIAnalysisPayload = wrappedBuildAIAnalysisPayload;
}

// app.js est chargé juste après ce fichier. On installe donc l'enrichissement IA
// une fois le parsing terminé, avant toute utilisation normale du bouton Gemini.
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installAIEntityJustifications, { once: true });
  } else {
    installAIEntityJustifications();
  }
}