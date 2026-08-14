const QUESTION_DETAILS = {
  5: {
    theme: "Économie",
    shortTitle: "Hausse du salaire minimum",
    question: "Le salaire minimum devrait être augmenté significativement.",
    metaDescription: "Comprendre les effets possibles d’une forte hausse du SMIC sur les revenus, les prix, les autres salaires, les entreprises et l’emploi.",
    introduction: "Une forte hausse du SMIC augmente directement le salaire des personnes concernées. Mais son effet réel dépend aussi des prix, des autres salaires et de la manière dont les entreprises absorbent ce coût.",
    balance: [
      "Un salarié au SMIC qui garde le même nombre d’heures reçoit un salaire plus élevé. Son pouvoir d’achat n’augmente toutefois pas autant si certaines aides diminuent ou si les prix progressent.",
      "L’entreprise peut payer la hausse en réduisant ses bénéfices, en gagnant en efficacité, en augmentant ses prix ou en modifiant les embauches et les heures travaillées. Des aides publiques peuvent limiter le coût pour l’employeur, mais elles sont alors financées par le budget public."
    ],
    favour: [
      { title: "Un revenu plus élevé pour les bas salaires.", text: " La mesure bénéficie d’abord aux salariés payés au SMIC. En France, les règles de revalorisation du SMIC ont mieux protégé les plus bas salaires pendant la récente hausse des prix.", sources: ["oecd", "insee"] },
      { title: "Davantage de consommation possible.", text: " Les ménages modestes dépensent souvent une grande part de tout revenu supplémentaire. Si leur gain n’est pas annulé par les prix ou une baisse des heures travaillées, leurs achats peuvent soutenir l’activité économique.", sources: ["dares"] },
      { title: "Une baisse de l’emploi n’est pas systématique.", text: " En 1992, l’État américain du New Jersey a relevé son salaire minimum. Card et Krueger ont comparé des restaurants rapides du New Jersey avec ceux de la Pennsylvanie voisine et n’ont pas constaté de baisse relative de l’emploi. Cette étude montre qu’une hausse n’entraîne pas toujours le même résultat ; elle ne permet pas de prévoir l’effet d’une forte hausse en France.", sources: ["card"] }
    ],
    reserve: [
      { title: "Des prix peuvent augmenter.", text: " Les secteurs qui emploient beaucoup de salariés au SMIC peuvent répercuter une partie du surcoût sur leurs clients. Des chercheurs ont suivi les prix de restaurants en France : après les revalorisations du SMIC, ils ont mesuré des hausses de prix progressives pendant plus d’un an. Ce résultat concerne un secteur précis et ne signifie pas que tous les prix augmenteraient dans la même proportion.", sources: ["prices"] },
      { title: "Les salaires juste au-dessus peuvent perdre du terrain.", text: " Le SMIC augmente selon des règles automatiques, alors que les autres salaires dépendent souvent de négociations plus lentes. Si les prix montent plus vite que ces salaires, une partie des classes moyennes peut perdre du pouvoir d’achat. Les salaires supérieurs peuvent aussi être relevés, mais pas forcément aussi vite ni autant.", sources: ["oecd", "insee", "bdf"] },
      { title: "Certaines entreprises ont peu de marge de manœuvre.", text: " Une entreprise fragile peut réduire ses bénéfices, mais aussi ses heures, ses recrutements ou ses effectifs. Le risque dépend de l’ampleur de la hausse, de la productivité des postes et de la capacité à augmenter les prix.", sources: ["dares"] },
      { title: "Le SMIC est déjà proche du salaire médian en France.", text: " En 2025, il représentait environ 62 % du salaire médian, soit l’un des niveaux les plus élevés parmi les pays de l’OCDE. Une hausse supplémentaire peut donc toucher davantage de salariés et rapprocher un plus grand nombre de rémunérations du minimum.", sources: ["oecd"] }
    ],
    factors: [
      { title: "Montant et rythme", text: "Une hausse progressive laisse plus de temps aux entreprises et aux négociations salariales qu’une forte hausse immédiate." },
      { title: "Secteurs concernés", text: "Les effets diffèrent selon le nombre de salariés au SMIC, les bénéfices disponibles, la concurrence et la possibilité d’augmenter les prix." },
      { title: "Aides aux entreprises", text: "Réduire les cotisations peut protéger l’emploi, mais reporte une partie du coût sur les finances publiques." },
      { title: "Aides sociales et autres salaires", text: "Le gain final dépend aussi de l’évolution des prestations et des salaires situés au-dessus du SMIC." }
    ],
    decisionPrompt: "La question est de savoir si le gain attendu pour les salariés au SMIC l’emporte sur les risques de hausse des prix, de tassement des autres salaires et de difficultés pour certaines entreprises. Votre réponse peut dépendre du montant, du rythme et des mesures d’accompagnement.",
    sources: [
      { id: "card", title: "Minimum Wages and Employment: A Case Study of the Fast Food Industry in New Jersey and Pennsylvania", publisher: "NBER — David Card et Alan B. Krueger", year: "1993", url: "https://www.nber.org/papers/w4509", note: "expérience naturelle souvent citée" },
      { id: "dares", title: "Salaire minimum interprofessionnel de croissance — rapport du groupe d’experts", publisher: "Dares / ministère du Travail", year: "2023", url: "https://dares.travail-emploi.gouv.fr/publication/salaire-minimum-interprofessionnel-de-croissance-rapport-2023" },
      { id: "oecd", title: "OECD Employment Outlook 2025 — France", publisher: "OCDE", year: "2025", url: "https://www.oecd.org/en/publications/oecd-employment-outlook-2025-country-notes_f91531f7-en/france_32a23b25-en.html" },
      { id: "insee", title: "Les salaires dans le secteur privé en 2023", publisher: "Insee", year: "2024", url: "https://www.insee.fr/fr/statistiques/8270416" },
      { id: "bdf", title: "Les salaires minima rendent-ils les salaires plus rigides ?", publisher: "Banque de France", year: "2018", url: "https://www.banque-france.fr/fr/publications-et-statistiques/publications/les-salaires-minima-rendent-ils-les-salaires-plus-rigides-resultats-partir-de-salaires-individuels" },
      { id: "prices", title: "Restaurant Prices and the Minimum Wage", publisher: "Banque de France — Denis Fougère, Erwan Gautier et Hervé Le Bihan", year: "2008", url: "https://publications.banque-france.fr/en/economic-and-financial-publications-working-papers/restaurant-prices-and-minimum-wage", note: "étude française sectorielle sur la transmission aux prix" }
    ]
  },

  6: {
    theme: "Économie",
    shortTitle: "Efficacité du privé et de l’État",
    question: "Les entreprises privées sont généralement plus efficaces que l'État pour fournir des biens et services, même dans certains secteurs essentiels.",
    metaDescription: "Comparer gestion privée et gestion publique selon les coûts, la qualité, l’innovation, la concurrence et l’accès de tous au service.",
    introduction: "Un service peut être jugé efficace parce qu’il coûte peu, fonctionne bien, innove ou reste accessible à tous. Le privé et le public n’ont pas les mêmes avantages selon le service et la concurrence réellement possible.",
    balance: [
      "Le financement et la gestion peuvent être séparés. Par exemple, l’État peut payer un service réalisé par une entreprise privée, ou une entreprise publique peut affronter des concurrents.",
      "Un opérateur privé a souvent un intérêt direct à réduire ses coûts et à attirer des clients. Mais il peut aussi économiser sur une qualité difficile à décrire ou à contrôler, comme l’attention portée à un patient ou la continuité du service."
    ],
    favour: [
      { title: "Réduire les coûts et essayer de nouvelles solutions.", text: " Quand plusieurs entreprises se disputent les clients, elles ont intérêt à mieux organiser le travail, contenir les prix et améliorer leur offre.", sources: ["shleifer", "pmr"] },
      { title: "Pouvoir comparer et changer de fournisseur.", text: " Plusieurs offres permettent aux usagers de choisir et de quitter un opérateur décevant. De nouveaux acteurs peuvent aussi tester des idées différentes.", sources: ["pmr"] },
      { title: "Financer publiquement sans tout gérer directement.", text: " L’État peut garantir l’accès, fixer des objectifs et confier la réalisation à plusieurs prestataires. Cela peut associer financement solidaire et comparaison des résultats.", sources: ["hart"] }
    ],
    reserve: [
      { title: "Une partie de la qualité reste difficile à contrôler.", text: " Dans la santé, l’éducation, les prisons ou l’aide aux personnes dépendantes, la qualité ne se résume pas à quelques chiffres. Réduire les coûts peut dégrader la sécurité, l’attention ou la continuité sans que cela soit immédiatement visible.", sources: ["hart"] },
      { title: "Il n’y a parfois qu’un seul fournisseur possible.", text: " Certains réseaux coûtent si cher à construire qu’un seul opérateur domine naturellement. La concurrence fonctionne aussi mal si le client manque d’informations ou ne peut pas changer facilement.", sources: ["pmr"] },
      { title: "Les missions peu rentables doivent rester assurées.", text: " Une entreprise peut éviter les clients coûteux, les zones isolées ou des capacités rarement utilisées mais indispensables en cas de crise. Le public peut garantir ces missions, même s’il peut lui aussi souffrir de lourdeurs ou de mauvaises décisions.", sources: ["shleifer"] }
    ],
    factors: [
      { title: "Concurrence réelle", text: "Combien de fournisseurs existent, et les usagers peuvent-ils facilement les comparer et en changer ?" },
      { title: "Qualité contrôlable", text: "Plus les attentes sont précises et vérifiables, plus il est facile de surveiller un prestataire." },
      { title: "Service pour tous", text: "Il faut financer clairement les tarifs sociaux, les zones isolées, la continuité et les réserves pour les crises." },
      { title: "Contrôle public", text: "Confier un service exige une administration capable de comparer les résultats, vérifier les règles et sanctionner les manquements." }
    ],
    decisionPrompt: "Demandez-vous ce que vous appelez « efficace », si plusieurs fournisseurs peuvent réellement se faire concurrence et si la qualité peut être vérifiée. La réponse peut différer entre les télécommunications, l’eau, l’hôpital ou la justice.",
    sources: [
      { id: "hart", title: "The Proper Scope of Government: Theory and an Application to Prisons", publisher: "NBER — Oliver Hart, Andrei Shleifer et Robert Vishny", year: "1996", url: "https://www.nber.org/papers/w5744" },
      { id: "shleifer", title: "State versus Private Ownership", publisher: "NBER — Andrei Shleifer", year: "1998", url: "https://www.nber.org/papers/w6665" },
      { id: "pmr", title: "Product Market Regulation", publisher: "OCDE", year: "mise à jour continue", url: "https://www.oecd.org/en/topics/product-market-regulation.html" }
    ]
  },

  8: {
    theme: "Économie",
    shortTitle: "Concurrence ou réglementation",
    question: "La concurrence est généralement préférable à la réglementation pour améliorer les prix, la qualité et l'innovation.",
    metaDescription: "Comprendre quand la concurrence améliore les prix, la qualité et l’innovation, et quand des règles publiques restent nécessaires.",
    introduction: "Concurrence et réglementation ne s’opposent pas toujours. Pour que plusieurs entreprises puissent rivaliser honnêtement, il faut déjà des règles contre les ententes, les informations trompeuses et certains abus.",
    balance: [
      "Avec la concurrence, plusieurs entreprises testent des prix et des solutions, puis les clients choisissent. Une réglementation impose à toutes des limites communes, par exemple sur la sécurité ou la pollution.",
      "Des règles trop lourdes peuvent protéger les grandes entreprises déjà installées et freiner de nouvelles idées. Mais sans règles suffisantes, une entreprise dominante peut imposer ses prix ou faire supporter ses dommages au reste de la société."
    ],
    favour: [
      { title: "Faire pression sur les prix et la qualité.", text: " Lorsque les clients comprennent les offres et peuvent changer facilement, une entreprise trop chère ou décevante risque de perdre des ventes.", sources: ["toolkit"] },
      { title: "Laisser plusieurs idées être testées.", text: " Des entreprises peuvent essayer des solutions différentes en même temps. Une règle trop précise risque d’imposer une méthode dépassée ou d’avantager les acteurs déjà en place.", sources: ["innovation", "pmr"] },
      { title: "Éviter des démarches inutilement lourdes.", text: " Des procédures complexes coûtent proportionnellement plus cher aux petites entreprises. Les grandes entreprises peuvent aussi chercher à influencer les règles à leur avantage.", sources: ["pmr"] }
    ],
    reserve: [
      { title: "Une entreprise peut devenir trop puissante.", text: " S’il est très difficile d’entrer sur le marché ou de quitter un grand réseau, la concurrence peut n’exister qu’en apparence. Des règles sur les prix ou l’accès aux infrastructures peuvent alors être nécessaires.", sources: ["toolkit"] },
      { title: "Le prix ne montre pas tous les dommages.", text: " Une entreprise et son client ne paient pas toujours directement pour la pollution, les risques sanitaires ou les conséquences d’une crise financière. Une taxe, une norme ou une obligation de réparer peut protéger le reste de la société.", sources: ["toolkit"] },
      { title: "Le client ne peut pas toujours juger la qualité.", text: " La sécurité, la solidité ou la compétence sont parfois impossibles à vérifier avant l’achat. Des contrôles et des normes communes peuvent empêcher les offres dangereuses de gagner uniquement parce qu’elles coûtent moins cher.", sources: ["innovation"] }
    ],
    factors: [
      { title: "Facilité d’entrer sur le marché", text: "De nouvelles entreprises peuvent-elles vraiment proposer une offre sans dépendre de leur principal concurrent ?" },
      { title: "Capacité de choisir", text: "Les informations sont-elles compréhensibles, et le client peut-il changer sans coût excessif ?" },
      { title: "Gravité du risque", text: "Une erreur facile à corriger ne se traite pas comme un danger sanitaire ou financier majeur." },
      { title: "Type de règle", text: "Demander un résultat précis laisse souvent plus de liberté que d’imposer à tous la même méthode." }
    ],
    decisionPrompt: "Votre réponse dépend de la capacité des clients à choisir, de la possibilité d’avoir plusieurs vrais concurrents et de la gravité des dommages possibles. On peut soutenir la concurrence tout en estimant certaines règles indispensables.",
    sources: [
      { id: "pmr", title: "Product Market Regulation", publisher: "OCDE", year: "mise à jour continue", url: "https://www.oecd.org/en/topics/product-market-regulation.html" },
      { id: "toolkit", title: "Competition Assessment Toolkit — Guidance, volume 2", publisher: "OCDE", year: "2015", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2015/06/competition-assessment-toolkit-guidance-version-3-0-volume-2_a3e37f2b/7708a0fd-en.pdf" },
      { id: "innovation", title: "The Relationship between Competition and Innovation", publisher: "OCDE — Comité de la concurrence", year: "2023", url: "https://one.oecd.org/document/DAF/COMP%282023%292/en/pdf" }
    ]
  },

  12: {
    theme: "État",
    shortTitle: "Choix individuel et systèmes obligatoires",
    question: "Les citoyens devraient avoir davantage de liberté pour choisir eux-mêmes comment utiliser leur argent plutôt que de passer par des systèmes publics obligatoires.",
    metaDescription: "Comparer la liberté d’utiliser son revenu avec les protections obligatoires contre la maladie, le chômage, la dépendance ou la vieillesse.",
    introduction: "Une cotisation obligatoire réduit l’argent que chacun peut utiliser immédiatement. En échange, elle finance une protection contre des risques coûteux et aide aussi des personnes dont les revenus ou la santé sont plus fragiles.",
    balance: [
      "Davantage de choix permet d’adapter son épargne et ses assurances à sa situation. Mais certains risques sont rares, très chers et impossibles à prévoir précisément.",
      "Dans une assurance volontaire, les personnes qui pensent avoir peu de risques peuvent partir. Le coût moyen augmente alors pour celles qui restent. Un système obligatoire répartit au contraire le coût entre les personnes en bonne santé et les malades, ainsi qu’entre les différentes périodes de la vie."
    ],
    favour: [
      { title: "Adapter ses choix à sa situation.", text: " Les ménages n’ont pas les mêmes besoins, les mêmes économies ni la même tolérance au risque. Une plus grande liberté peut mieux respecter leurs priorités." },
      { title: "Comparer plusieurs solutions.", text: " Plusieurs assureurs ou produits d’épargne peuvent améliorer le service et les rendements, si les offres sont compréhensibles et s’il est facile d’en changer." },
      { title: "Conserver davantage de revenu disponible.", text: " Un socle public limité aux protections jugées essentielles laisserait davantage d’argent pour consommer, épargner ou acheter des garanties choisies." }
    ],
    reserve: [
      { title: "Les personnes les plus fragiles peuvent payer davantage.", text: " Si les jeunes ou les personnes en bonne santé quittent une assurance commune, celles qui restent sont en moyenne plus coûteuses à couvrir. Le prix peut alors augmenter et écarter encore plus de monde.", sources: ["pooling", "vhi"] },
      { title: "On peut remettre l’épargne à plus tard.", text: " Beaucoup de personnes souhaitent préparer leur retraite, mais donnent naturellement la priorité aux dépenses présentes et repoussent le premier versement. Dans une grande entreprise américaine, inscrire automatiquement les salariés au plan d’épargne a fortement augmenté leur participation. Cela ne veut pas dire que toute faible épargne est une erreur : un revenu serré ou des dettes urgentes peuvent justifier d’épargner peu.", sources: ["inertia"] },
      { title: "Garantir une protection à tous.", text: " Selon l’OMS, les pays qui veulent couvrir toute la population s’appuient largement sur des financements obligatoires. Des contributions uniquement volontaires laissent plus facilement les personnes pauvres sans protection suffisante.", sources: ["who2005", "cbhi"] }
    ],
    factors: [
      { title: "Risque concerné", text: "Une dépense courante, la retraite, le chômage et une maladie grave ne se prévoient pas de la même façon." },
      { title: "Protection minimale", text: "Laisser du choix au-delà d’un socle commun est très différent d’autoriser une sortie sans aucune protection." },
      { title: "Aide au choix", text: "Des comparateurs simples, des conseils indépendants et une inscription automatique avec possibilité de refus peuvent limiter les mauvais choix." },
      { title: "Aide aux plus fragiles", text: "Il faut préciser qui finance la protection des personnes pauvres, malades ou ayant peu cotisé." }
    ],
    decisionPrompt: "Réfléchissez à la protection qui doit être garantie à tous, puis à la part pour laquelle chacun devrait pouvoir choisir. Votre réponse peut différer entre une maladie grave, la retraite et une dépense ordinaire.",
    sources: [
      { id: "pooling", title: "Pooling revenues and reducing fragmentation", publisher: "Organisation mondiale de la santé", year: "mise à jour continue", url: "https://www.who.int/activities/pooling" },
      { id: "who2005", title: "Social health insurance — sustainable health financing, universal coverage and social health insurance", publisher: "Organisation mondiale de la santé", year: "2005", url: "https://apps.who.int/gb/ebwha/pdf_files/wha58/a58_20-en.pdf" },
      { id: "vhi", title: "Voluntary health insurance: potentials and limits in moving towards UHC", publisher: "Organisation mondiale de la santé", year: "2018", url: "https://iris.who.int/server/api/core/bitstreams/9f978f26-bc73-489a-82da-df58bcbcc4ca/content" },
      { id: "cbhi", title: "Community-based health insurance", publisher: "Organisation mondiale de la santé", year: "2025", url: "https://www.who.int/news-room/fact-sheets/detail/community-based-health-insurance-CBHI" },
      { id: "inertia", title: "The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior", publisher: "NBER — Brigitte Madrian et Dennis Shea", year: "2000", url: "https://www.nber.org/papers/w7682", note: "effet de l’adhésion automatique sur l’épargne retraite" }
    ]
  },

  17: {
    theme: "Institutions / territoires",
    shortTitle: "Différenciation régionale",
    question: "Les régions devraient pouvoir adopter des règles différentes en matière économique, sociale ou environnementale plutôt que d’appliquer partout les mêmes règles nationales.",
    metaDescription: "Comprendre les avantages et les risques de règles différentes selon les régions : adaptation locale, égalité, identité et simplicité.",
    introduction: "Autoriser des règles régionales permet de tenir compte des réalités locales. Cela peut aussi donner des droits différents selon le lieu où l’on vit et rendre les règles plus difficiles à comprendre.",
    balance: [
      "Une région connaît mieux ses problèmes de transport, d’emploi, de logement, de montagne ou de littoral. Elle peut essayer une solution locale et être jugée sur ses résultats.",
      "Mais les régions n’ont pas toutes les mêmes ressources. Une politique locale peut aussi avoir des conséquences chez les voisines. Des droits nationaux minimaux et des transferts vers les territoires moins riches peuvent limiter ces écarts."
    ],
    favour: [
      { title: "Adapter les règles au territoire.", text: " Une métropole dense, une zone rurale et une région industrielle n’ont pas toujours les mêmes besoins. Une décision locale peut mieux viser le problème et choisir un calendrier adapté.", sources: ["oecd"] },
      { title: "Tester plusieurs solutions.", text: " Des régions peuvent essayer des politiques différentes. Si leurs résultats sont évalués sérieusement, les meilleures idées peuvent ensuite être reprises ailleurs." },
      { title: "Savoir plus facilement qui est responsable.", text: " Quand une région décide et dispose du budget correspondant, les électeurs peuvent mieux relier une politique locale à ses résultats.", sources: ["handbook"] },
      { title: "Préserver une identité régionale.", text: " Des pouvoirs sur la langue, la culture ou le patrimoine peuvent aider à transmettre une histoire et des pratiques locales. La Constitution reconnaît les langues régionales comme faisant partie du patrimoine de la France.", sources: ["heritage", "charter"] }
    ],
    reserve: [
      { title: "Des droits différents selon le lieu de vie.", text: " Des règles sociales, scolaires ou environnementales très différentes peuvent réduire l’égalité entre citoyens. Les régions riches peuvent aussi financer de meilleurs services." },
      { title: "Des décisions qui touchent les régions voisines.", text: " La pollution, les transports, le logement ou la fiscalité ne s’arrêtent pas aux frontières régionales. Une région peut déplacer un coût chez ses voisines ou réduire ses exigences pour attirer une activité.", sources: ["transport"] },
      { title: "Plus de règles à connaître.", text: " Une entreprise ou une personne active dans plusieurs régions devrait suivre plusieurs systèmes. Les démarches supplémentaires peuvent réduire le bénéfice de l’adaptation locale." },
      { title: "Une identité nationale moins commune.", text: " Si les droits, les institutions ou les symboles diffèrent fortement, l’identité régionale peut prendre plus de place au détriment du sentiment national. Ce résultat n’est pas inévitable : les deux identités peuvent aussi coexister et se renforcer.", sources: ["heritage", "constitutional"] }
    ],
    factors: [
      { title: "Droits nationaux minimaux", text: "Des garanties identiques pour tous peuvent coexister avec des adaptations locales au-delà de ce socle." },
      { title: "Aide aux régions moins riches", text: "Des transferts financiers peuvent réduire les écarts de moyens entre territoires." },
      { title: "Taille du problème", text: "Une région peut décider seule si les effets restent locaux ; sinon, elle doit coopérer avec ses voisines ou l’État." },
      { title: "Évaluation", text: "Il faut définir dès le départ la durée du test, les résultats attendus et les conditions pour poursuivre ou arrêter." }
    ],
    decisionPrompt: "Demandez-vous quelles règles peuvent varier sans remettre en cause l’égalité nationale, et quelles décisions dépassent les frontières d’une région. On peut soutenir des expériences locales tout en conservant des garanties communes.",
    sources: [
      { id: "oecd", title: "Making Decentralisation Work — Benefits and challenges of decentralisation", publisher: "OCDE", year: "2019", url: "https://www.oecd.org/en/publications/making-decentralisation-work_g2g9faa7-en/full-report/component-7.html" },
      { id: "handbook", title: "Making Decentralisation Work — A handbook for policy-makers", publisher: "OCDE", year: "2019", url: "https://www.oecd.org/en/publications/making-decentralisation-work_g2g9faa7-en/full-report/component-8.html" },
      { id: "transport", title: "Transport and Decentralisation", publisher: "OCDE / Forum international des transports", year: "2006", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2006/08/transport-and-decentralisation_g1gh721c/9789282113431-en.pdf" },
      { id: "heritage", title: "Constitution du 4 octobre 1958 — article 75-1", publisher: "Légifrance", year: "version en vigueur", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019241104" },
      { id: "charter", title: "About the European Charter for Regional or Minority Languages", publisher: "Conseil de l’Europe", year: "mise à jour continue", url: "https://www.coe.int/en/web/european-charter-regional-or-minority-languages/about-the-charter" },
      { id: "constitutional", title: "Décision n° 99-412 DC du 15 juin 1999", publisher: "Conseil constitutionnel / Légifrance", year: "1999", url: "https://www.legifrance.gouv.fr/cons/id/CONSTEXT000017667958/" }
    ]
  },

  27: {
    theme: "Sécurité / justice",
    shortTitle: "Prévention, réinsertion et sanctions",
    question: "Il vaut mieux investir dans la prévention et la réinsertion que dans l'augmentation des sanctions.",
    metaDescription: "Comparer l’argent consacré à la prévention, à la réinsertion et au renforcement des peines pour réduire la délinquance et protéger la société.",
    introduction: "La question ne propose pas de supprimer les sanctions. Elle demande où il est le plus utile de dépenser un budget supplémentaire : avant l’infraction, pour éviter la récidive, ou pour renforcer les peines.",
    balance: [
      "La peur d’être puni dépend de la probabilité d’être arrêté, de la rapidité de la réponse et de la peine encourue. Les travaux résumés par le ministère américain de la Justice accordent généralement plus d’importance à une sanction probable qu’à une peine déjà très lourde.",
      "Les programmes de prévention et de réinsertion n’ont pas tous les mêmes résultats. Il faut comparer des mesures précises et évaluées, pas supposer que toute prévention fonctionne ou que toute peine plus longue est efficace."
    ],
    favour: [
      { title: "Éviter qu’une victime subisse l’infraction.", text: " Un meilleur éclairage, un soutien précoce, le traitement des addictions ou une présence policière bien ciblée peuvent agir avant qu’un dommage ait lieu.", sources: ["whatworks"] },
      { title: "Réduire le risque de recommencer.", text: " Une formation, des soins, un logement et un suivi à la sortie peuvent aider une personne condamnée à ne pas récidiver. Une peine plus longue ne prépare pas, à elle seule, le retour dans la société." },
      { title: "Rendre la réponse plus certaine et plus rapide.", text: " Augmenter les chances qu’une infraction reçoive une réponse crédible peut décourager davantage que relever encore la peine maximale.", sources: ["nij"] }
    ],
    reserve: [
      { title: "Protéger immédiatement pendant la détention.", text: " Une personne incarcérée ne peut pas commettre certaines infractions à l’extérieur pendant cette période. Pour un auteur dangereux, cette protection à court terme peut rester nécessaire.", sources: ["nij"] },
      { title: "Reconnaître la gravité de l’acte.", text: " Une peine marque une limite, reconnaît le tort subi par la victime et peut maintenir la confiance dans la justice. Une réponse jugée trop faible peut donner le sentiment que l’acte n’est pas pris au sérieux." },
      { title: "Des programmes parfois inefficaces ou trop lents.", text: " Une mesure mal choisie peut coûter cher sans réduire les infractions. Les effets de l’éducation ou du soutien précoce peuvent aussi demander des années, alors que certains dangers sont immédiats.", sources: ["whatworks"] }
    ],
    factors: [
      { title: "Type d’infraction", text: "Une violence grave, un vol occasionnel et une récidive liée à une addiction ne demandent pas la même réponse." },
      { title: "Probabilité et rapidité de la réponse", text: "Une peine lourde mais rarement appliquée n’a pas le même effet qu’une réponse certaine et proportionnée." },
      { title: "Qualité du programme", text: "Le personnel, le suivi et l’adaptation aux besoins déterminent largement les résultats." },
      { title: "Délai recherché", text: "Protéger aujourd’hui, éviter une récidive dans deux ans et prévenir sur une génération sont trois objectifs différents." }
    ],
    decisionPrompt: "Votre réponse dépend de l’importance donnée à la protection immédiate, à la juste peine et à la baisse durable des infractions. On peut privilégier prévention et réinsertion tout en maintenant des sanctions certaines pour les actes graves.",
    sources: [
      { id: "nij", title: "Five Things About Deterrence", publisher: "National Institute of Justice — U.S. Department of Justice", year: "2016", url: "https://nij.ojp.gov/topics/articles/five-things-about-deterrence" },
      { id: "whatworks", title: "Preventing Crime: What Works, What Doesn't, What's Promising", publisher: "U.S. Department of Justice", year: "1997", url: "https://www.ojp.gov/pdffiles/171676.pdf" }
    ]
  },

  32: {
    theme: "Économie",
    shortTitle: "TVA sociale et cotisations",
    question: "Une partie des cotisations sociales sur les salaires devrait être remplacée par une hausse de la TVA afin d’augmenter les salaires nets et de réduire le coût du travail, même si cela augmente le prix des biens et services consommés",
    metaDescription: "Comprendre les effets d’un transfert des cotisations vers la TVA sur les salaires, l’emploi, les prix, la consommation, l’épargne et les exportations.",
    introduction: "La mesure consiste à prélever moins sur les salaires et davantage sur les achats. Son résultat change selon que la baisse profite d’abord au salarié ou à l’employeur, et selon la hausse des prix qui suit.",
    balance: [
      "Baisser les cotisations payées par l’employeur réduit d’abord le coût d’un salarié. Baisser celles payées par le salarié augmente plus directement son salaire net. Avec le temps, les négociations peuvent modifier ce partage.",
      "La TVA touche les produits importés vendus en France, alors que les exportations françaises ne la supportent pas. La mesure peut donc aider temporairement les producteurs français face aux concurrents étrangers, mais la hausse des prix et des salaires peut réduire cet avantage.",
      "Les ménages ne réagissent pas tous pareil : certains dépensent leur gain, d’autres l’épargnent, et les personnes sans baisse de cotisations peuvent moins consommer. Une simulation de la Commission européenne pour la France prévoit d’abord une baisse de la consommation, puis un redressement."
    ],
    favour: [
      { title: "Réduire le coût d’une embauche.", text: " Si les cotisations de l’employeur baissent réellement, certaines entreprises peuvent davantage recruter ou conserver des emplois, surtout lorsque le coût du travail compte beaucoup.", sources: ["france"] },
      { title: "Faire contribuer davantage la consommation.", text: " Les achats financés par les retraites, les revenus du patrimoine ou les produits importés participent davantage au financement social, qui repose alors moins sur les seuls salaires." },
      { title: "Soutenir les exportations.", text: " Les produits français vendus à l’étranger peuvent devenir temporairement plus compétitifs. Les achats venant d’autres pays peuvent donc compenser une partie de la baisse des achats en France, sans garantie de compensation totale.", sources: ["devaluation", "france"] },
      { title: "Transformer une partie du gain en épargne.", text: " L’argent épargné peut financer des entreprises, des logements ou des emprunts publics. S’il sert à acheter davantage de dette française, l’État peut plus facilement trouver des prêteurs et, dans certaines conditions, emprunter à un taux plus bas. Mais l’épargne peut aussi aller vers l’immobilier ou des placements étrangers.", sources: ["savings"] }
    ],
    reserve: [
      { title: "Les prix peuvent augmenter.", text: " Si les entreprises répercutent la TVA, le prix payé par les clients monte. Les retraités, les chômeurs et les personnes qui ne profitent pas de la baisse des cotisations sont particulièrement exposés.", sources: ["equity"] },
      { title: "Les ménages modestes peuvent être plus touchés.", text: " Ils consacrent généralement une plus grande part de leur revenu aux achats courants. Des aides ciblées peuvent les protéger, mais elles utilisent une partie des recettes attendues.", sources: ["equity", "labour"] },
      { title: "Le partage du gain reste incertain.", text: " Rien ne garantit à la fois une forte hausse du salaire net et une baisse complète du coût pour l’employeur. Le résultat dépend des négociations salariales, de la concurrence et des décisions de chaque entreprise.", sources: ["france"] },
      { title: "Une baisse de la consommation peut freiner l’activité.", text: " Si beaucoup de ménages épargnent leur gain tandis que les autres réduisent leurs achats à cause de la TVA, les entreprises françaises peuvent vendre moins à court terme. Tout le monde n’épargnera pas, et l’épargne peut financer l’investissement, mais elle ne remplace pas automatiquement la consommation perdue.", sources: ["france", "savings"] }
    ],
    factors: [
      { title: "Cotisation supprimée", text: "Une baisse côté employeur et une baisse côté salarié n’ont pas le même effet immédiat." },
      { title: "Produits concernés par la TVA", text: "Le résultat dépend du taux appliqué aux produits essentiels, aux autres biens et aux services." },
      { title: "Aides compensatoires", text: "Une aide ou une revalorisation peut protéger les ménages modestes, mais elle doit être financée." },
      { title: "Réaction des prix et des salaires", text: "L’avantage pour les exportations dure moins longtemps si les prix et les salaires montent rapidement." },
      { title: "Utilisation du revenu", text: "La part dépensée, épargnée ou investie change l’effet sur l’activité et le financement de l’économie." }
    ],
    decisionPrompt: "Demandez-vous si votre priorité est l’emploi, le salaire net ou le pouvoir d’achat des personnes qui ne profitent pas de la baisse des cotisations. Le résultat dépend beaucoup de la cotisation supprimée et des aides prévues.",
    sources: [
      { id: "devaluation", title: "Fiscal Devaluations in the Euro Area: What has been done since the crisis?", publisher: "Commission européenne", year: "2014", url: "https://taxation-customs.ec.europa.eu/document/download/6fba52e7-86e1-441a-906c-8525980df838_en" },
      { id: "equity", title: "Fiscal Devaluation: Efficiency and Equity", publisher: "Commission européenne — DG ECFIN", year: "2014", url: "https://ec.europa.eu/economy_finance/publications/economic_paper/2014/pdf/ecp542_en.pdf" },
      { id: "france", title: "The Economic Effects of a Tax Shift from Direct to Indirect Taxation in France", publisher: "Commission européenne — DG ECFIN", year: "2017", url: "https://economy-finance.ec.europa.eu/document/download/61577801-5b9e-498c-b422-2c0b304a9ae2_en?filename=dp077.pdf" },
      { id: "labour", title: "The role and impact of labour taxation policies", publisher: "Commission européenne", year: "2011", url: "https://ec.europa.eu/social/BlobServlet?docId=7404&langId=en" },
      { id: "savings", title: "Comptes financiers des agents non financiers — 2025 T4", publisher: "Banque de France", year: "2026", url: "https://www.banque-france.fr/fr/statistiques/comptes-nationaux-financiers/comptes-financiers-des-agents-non-financiers-2025-q4", note: "répartition des placements financiers des ménages" }
    ]
  },

  36: {
    theme: "Europe",
    shortTitle: "Transfert de compétences à l’Union européenne",
    question: "La France devrait transférer davantage de compétences à l'Union européenne afin de renforcer son poids économique et géopolitique.",
    metaDescription: "Comprendre ce que la France pourrait gagner ou perdre en confiant davantage de décisions à l’Union européenne.",
    introduction: "Décider à l’échelle européenne peut donner plus de poids à l’action commune, mais la France ne peut alors plus choisir seule. Les conséquences diffèrent fortement entre la défense, l’énergie, les impôts, l’industrie ou la politique étrangère.",
    balance: [
      "Les traités prévoient que l’Union agisse lorsque l’objectif est mieux atteint ensemble que par chaque pays séparément. Il faut donc examiner chaque domaine au lieu d’accepter ou de refuser tous les transferts en bloc.",
      "Une décision commune peut partager les coûts et peser davantage face aux États-Unis ou à la Chine. Elle peut aussi éloigner la décision des électeurs français et imposer un compromis peu adapté à la situation nationale."
    ],
    favour: [
      { title: "Peser davantage dans les négociations.", text: " Un grand marché et un budget commun peuvent renforcer la position européenne dans le commerce, les technologies, l’énergie ou les achats de défense." },
      { title: "Traiter des problèmes qui dépassent les frontières.", text: " Le climat, les réseaux électriques, les migrations et la sécurité concernent plusieurs pays. Une action commune évite les doublons et empêche qu’un pays profite des efforts des autres sans participer." },
      { title: "Rendre le marché européen plus simple.", text: " Des règles et des infrastructures communes peuvent réduire les obstacles entre pays. Le rapport Letta estime que cela peut soutenir la croissance, l’innovation et la résistance aux crises.", sources: ["letta"] }
    ],
    reserve: [
      { title: "Des pays aux besoins différents.", text: " Les économies, les sources d’énergie, les menaces et les choix sociaux varient. Une même règle peut avantager durablement certains pays et pénaliser d’autres." },
      { title: "Une responsabilité politique moins facile à suivre.", text: " Entre la Commission, les gouvernements nationaux et le Parlement européen, les citoyens peuvent avoir du mal à savoir qui a vraiment décidé et qui sanctionner lors d’une élection." },
      { title: "Moins de liberté pour changer seul de politique.", text: " Une fois une décision confiée à l’Union, la France ne peut plus toujours utiliser son droit de blocage ni tester seule une autre solution. Modifier une mauvaise politique exige alors l’accord d’autres pays.", sources: ["treaty"] }
    ],
    factors: [
      { title: "Décision précise", text: "Acheter du matériel militaire ensemble n’est pas la même chose que décider ensemble d’envoyer des soldats." },
      { title: "Règle de vote", text: "Exiger l’accord de tous les pays ou décider à la majorité ne donne pas le même pouvoir à la France." },
      { title: "Contrôles démocratiques", text: "Le rôle des parlements, la transparence et la possibilité de contester une décision sont essentiels." },
      { title: "Partage des coûts", text: "Une politique commune doit préciser quels pays paient, quels pays reçoivent et comment les risques sont répartis." }
    ],
    decisionPrompt: "Votre réponse peut dépendre du domaine concerné, de la règle de vote et du contrôle démocratique. Le choix oppose surtout la force de l’action commune à la liberté de décision nationale.",
    sources: [
      { id: "treaty", title: "Traité sur l’Union européenne — article 5", publisher: "EUR-Lex", year: "version consolidée 2016", url: "https://eur-lex.europa.eu/eli/treaty/teu_2016/art_5/oj/eng" },
      { id: "letta", title: "Much More Than a Market", publisher: "Conseil européen — rapport d’Enrico Letta", year: "2024", url: "https://www.consilium.europa.eu/media/ny3j24sm/much-more-than-a-market-report-by-enrico-letta.pdf" },
      { id: "nonEurope", title: "Cost of Non-Europe Report", publisher: "Service de recherche du Parlement européen", year: "2023", url: "https://www.europarl.europa.eu/RegData/etudes/STUD/2023/747436/EPRS_STU%282023%29747436_EN.pdf" }
    ]
  },

  38: {
    theme: "Europe",
    shortTitle: "Bilan de l’euro pour la France",
    question: "L'euro est globalement bénéfique pour la France malgré la perte de certains instruments de politique économique.",
    metaDescription: "Comprendre les avantages et les limites de l’euro pour la France : échanges, taux d’intérêt, stabilité et perte de la monnaie nationale.",
    introduction: "Pour juger l’euro, il faudrait savoir ce qui se serait passé si la France avait gardé le franc. Comme cette autre histoire n’existe pas, il faut comparer les avantages de la monnaie commune avec la perte de certains outils nationaux.",
    balance: [
      "L’euro supprime les changements de valeur entre les anciennes monnaies de la zone et simplifie de nombreux échanges. En contrepartie, la France ne choisit plus seule ses taux d’intérêt et ne peut plus faire baisser la valeur de sa monnaie face à ses voisins.",
      "La Banque centrale européenne peut répondre à une crise qui touche toute la zone. Si le problème concerne surtout la France, l’ajustement passe davantage par les salaires, les prix, l’emploi, le budget ou les aides européennes."
    ],
    favour: [
      { title: "Plus de risque de change à l’intérieur de la zone.", text: " Une entreprise française n’a plus à craindre qu’une ancienne monnaie italienne ou allemande change fortement de valeur entre la commande et le paiement.", sources: ["integration"] },
      { title: "Des prix et des échanges plus simples.", text: " La même monnaie facilite les contrats, les voyages et la comparaison des prix. Elle ne supprime toutefois pas les différences de règles ou de productivité entre pays." },
      { title: "Le poids d’une grande monnaie.", text: " L’euro donne accès à un marché financier plus vaste et peut peser davantage dans le monde que le franc seul.", sources: ["bdf"] }
    ],
    reserve: [
      { title: "Un même taux d’intérêt pour des pays différents.", text: " La BCE décide pour l’ensemble de la zone. Son taux peut donc être trop élevé ou trop faible pour la situation particulière de la France." },
      { title: "Impossible de faire baisser seulement la monnaie française.", text: " Si les produits français deviennent trop chers face aux produits allemands, espagnols ou italiens, la France ne peut plus réduire la valeur de sa monnaie pour les rendre moins chers. D’autres ajustements peuvent être plus lents et plus douloureux.", sources: ["asymmetry"] },
      { title: "Les crises peuvent circuler entre pays.", text: " Les difficultés bancaires ou les problèmes de dette d’un membre peuvent toucher les autres. Les règles communes limitent aussi certaines décisions budgétaires françaises, tandis que l’aide entre pays reste négociée." }
    ],
    factors: [
      { title: "Crise commune ou française", text: "Une hausse mondiale de l’énergie et une crise propre à une industrie française ne demandent pas la même réponse." },
      { title: "Économies plus ou moins proches", text: "La monnaie commune fonctionne plus facilement si les pays connaissent des évolutions semblables des prix, des salaires et de la production." },
      { title: "Autres moyens d’agir", text: "Le budget français, les fonds européens, les banques et la mobilité des travailleurs peuvent absorber une partie des crises." },
      { title: "Ce qu’aurait donné le franc", text: "Une monnaie nationale permettrait d’agir sur sa valeur, mais elle pourrait aussi varier fortement et rendre les emprunts français plus chers." }
    ],
    decisionPrompt: "Votre réponse dépend du poids que vous accordez à la stabilité et aux échanges, par rapport à la liberté de fixer les taux et la valeur de la monnaie. On ne peut pas attribuer à l’euro chaque réussite ou difficulté française.",
    sources: [
      { id: "integration", title: "What lies beneath the euro’s effect on financial integration?", publisher: "Banque centrale européenne", year: "2010", url: "https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp1216.pdf" },
      { id: "asymmetry", title: "EMU and the adjustment to asymmetric shocks", publisher: "Banque centrale européenne", year: "2009", url: "https://www.ecb.europa.eu/pub/pdf/scpwps/ecbwp1128.pdf" },
      { id: "bdf", title: "Le rôle international de l’euro", publisher: "Banque de France", year: "2020", url: "https://publications.banque-france.fr/sites/default/files/medias/documents/820155_bdf229-5_role-international-euro_vf.pdf" }
    ]
  },

  41: {
    theme: "Fiscalité / patrimoine",
    shortTitle: "Suppression de l’IFI",
    question: "Il faudrait supprimer l'IFI et ne plus taxer spécifiquement le patrimoine immobilier au-delà de la fiscalité ordinaire.",
    metaDescription: "Comprendre les arguments pour et contre la suppression de l’impôt sur la fortune immobilière : recettes, équité, logement et investissement.",
    introduction: "L’IFI taxe certains patrimoines immobiliers nets supérieurs à 1,3 million d’euros. Le supprimer ne ferait pas disparaître la taxe foncière ni les impôts sur les loyers, les ventes ou les successions.",
    balance: [
      "Le débat oppose deux objectifs : ne pas pénaliser particulièrement l’investissement immobilier et demander une contribution supplémentaire aux patrimoines élevés.",
      "La réforme de 2018, qui a remplacé l’ISF par l’IFI, a été menée avec d’autres changements fiscaux. France Stratégie explique qu’il est donc difficile de savoir quelle réforme a produit quel effet sur l’investissement ou l’économie."
    ],
    favour: [
      { title: "Ne pas favoriser un placement plutôt qu’un autre.", text: " Taxer davantage l’immobilier peut pousser les épargnants vers des placements financiers, même lorsque construire ou louer un logement serait utile." },
      { title: "Éviter un impôt difficile à payer avec le revenu courant.", text: " La valeur d’un logement peut fortement augmenter alors que le revenu de son propriétaire reste faible. Celui-ci doit malgré tout trouver l’argent pour payer l’impôt." },
      { title: "Simplifier les déclarations.", text: " Il faut estimer régulièrement la valeur de biens qui ne sont pas vendus, déduire certaines dettes et appliquer plusieurs exceptions. Cela crée des démarches et des désaccords avec l’administration.", sources: ["rules"] }
    ],
    reserve: [
      { title: "Faire davantage contribuer les patrimoines élevés.", text: " L’IFI demande un effort supplémentaire aux ménages possédant beaucoup d’immobilier. Sa suppression réduit les recettes publiques ou oblige à trouver l’argent avec un autre impôt ou une baisse de dépense." },
      { title: "Un bien immobilier ne peut pas partir à l’étranger.", text: " Un terrain ou un logement situé en France reste taxable en France, contrairement à certains placements financiers plus faciles à déplacer. Sa valeur profite aussi souvent des transports et services publics environnants." },
      { title: "Aucun gain économique automatique n’est démontré.", text: " Les évaluations disponibles ne permettent pas d’affirmer que chaque euro d’impôt supprimé devient un euro d’investissement productif, crée un emploi ou augmente la croissance.", sources: ["evaluation"] }
    ],
    factors: [
      { title: "Logement occupé ou loué", text: "Une résidence principale et un investissement locatif ne produisent pas le même revenu." },
      { title: "Dettes et limite liée au revenu", text: "Les dettes déductibles et le plafonnement de l’impôt changent fortement ce que paie réellement le propriétaire." },
      { title: "Recette de remplacement", text: "Il faut préciser quel autre impôt ou quelle économie compenserait une suppression." },
      { title: "Effet sur le logement", text: "Le résultat dépend de la construction, du prix des terrains, des loyers et de l’évolution des prix de vente." }
    ],
    decisionPrompt: "Demandez-vous si l’objectif principal est de faire contribuer les grands patrimoines, de ne pas pénaliser l’immobilier ou de simplifier l’impôt. Modifier les règles peut aussi être une solution différente de la suppression totale.",
    sources: [
      { id: "rules", title: "Impôt sur la fortune immobilière : personnes et biens concernés", publisher: "Service-Public.fr", year: "mise à jour continue", url: "https://www.service-public.fr/particuliers/vosdroits/F563" },
      { id: "evaluation", title: "Comité d’évaluation des réformes de la fiscalité du capital — rapport final", publisher: "France Stratégie", year: "2023", url: "https://www.strategie.gouv.fr/publications/comite-devaluation-reformes-de-fiscalite-capital-rapport-final" }
    ]
  },

  47: {
    theme: "Retraites",
    shortTitle: "Répartition et capitalisation",
    question: "Les retraites devraient être progressivement réformées vers un système combinant répartition et capitalisation, même si cela implique une période de transition coûteuse.",
    metaDescription: "Comprendre un système de retraite mêlant cotisations pour les retraités actuels et épargne pour sa propre retraite : démographie, marchés et transition.",
    introduction: "Aujourd’hui, les cotisations des travailleurs financent directement les pensions des retraités. Avec une part d’épargne, chacun mettrait aussi de l’argent de côté, individuellement ou dans un fonds commun, pour financer une partie de sa future retraite.",
    balance: [
      "Le système actuel devient plus difficile à équilibrer lorsque les retraités sont plus nombreux, vivent plus longtemps et sont financés par proportionnellement moins de travailleurs. Il faut alors agir sur l’emploi, les cotisations, l’âge de départ, les pensions ou d’autres recettes.",
      "Une part d’épargne peut réduire cette dépendance directe, mais elle expose davantage aux variations des marchés, à l’inflation et aux frais. Pendant la transition, les travailleurs doivent continuer à financer les retraités actuels tout en préparant leur propre épargne."
    ],
    favour: [
      { title: "Moins dépendre du nombre de travailleurs futurs.", text: " Une partie de la pension viendrait de l’épargne accumulée pendant la carrière, et pas seulement des cotisations payées à ce moment-là par les actifs. Des placements dans plusieurs pays peuvent aussi répartir le risque. Cela atténue le problème démographique sans le faire disparaître.", sources: ["demography", "longevity", "mixed"] },
      { title: "Créer une épargne de long terme.", text: " Des fonds bien contrôlés peuvent financer des entreprises, des infrastructures ou d’autres investissements sur plusieurs décennies." },
      { title: "Ne pas dépendre d’une seule source de pension.", text: " Un socle commun financé par les actifs et un complément issu de l’épargne peuvent répartir les risques, si les frais restent faibles et si une solidarité est maintenue." }
    ],
    reserve: [
      { title: "Payer deux systèmes pendant la transition.", text: " Les pensions déjà promises doivent continuer à être versées alors qu’une partie des cotisations est placée pour l’avenir. Il faut combler le manque par des impôts, de la dette, des cotisations supplémentaires ou de moindres pensions.", sources: ["transition"] },
      { title: "Les marchés et les frais peuvent réduire la pension.", text: " Une crise au mauvais moment, une forte inflation, des placements mal répartis ou des frais élevés peuvent diminuer l’épargne disponible au départ en retraite.", sources: ["costs"] },
      { title: "Tout le monde ne peut pas épargner autant.", text: " Les bas salaires, le chômage, le temps partiel ou les interruptions pour s’occuper d’un proche réduisent l’épargne. Sans correction collective, les écarts de carrière deviennent des écarts de pension." },
      { title: "Vivre plus longtemps reste un défi.", text: " Une épargne prévue pour vingt ans doit être partagée davantage si la retraite dure trente ans. Il faut alors épargner plus, travailler plus longtemps, obtenir un meilleur rendement ou accepter une pension annuelle plus faible.", sources: ["longevity"] }
    ],
    factors: [
      { title: "Taille de la part épargnée", text: "Un petit complément ne coûte pas autant et n’expose pas au même risque qu’un changement presque total de système." },
      { title: "Paiement de la transition", text: "Impôt, dette, hausse des cotisations ou baisse des pensions ne font pas porter le coût aux mêmes générations." },
      { title: "Protection de l’épargne", text: "Des placements variés, des frais plafonnés, des comptes séparés et un contrôle indépendant protègent les épargnants." },
      { title: "Solidarité", text: "Des droits pour le chômage, la maladie, les enfants et un minimum de pension corrigent les carrières incomplètes." }
    ],
    decisionPrompt: "Demandez-vous si le fait de moins dépendre du nombre de futurs travailleurs justifie le coût de la transition et le risque des placements. Les garanties pour les petites pensions sont une partie essentielle du choix.",
    sources: [
      { id: "transition", title: "Fiscal Alternatives of Moving from Unfunded to Funded Pensions", publisher: "OCDE", year: "1997", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/1997/08/fiscal-alternatives-of-moving-from-unfunded-to-funded-pensions_g17a15f2/834846721016.pdf" },
      { id: "costs", title: "Pension costs in the accumulation phase", publisher: "OCDE — Pensions Outlook", year: "2018", url: "https://www.oecd.org/en/publications/oecd-pensions-outlook-2018_pens_outlook-2018-en/full-report/component-6.html" },
      { id: "demography", title: "Rapport annuel — Évolutions et perspectives des retraites en France", publisher: "Conseil d’orientation des retraites", year: "2026", url: "https://www.cor-retraites.fr/rapports-du-cor/rapport-annuel-cor-juin-2026-evolutions-perspectives-retraites-france" },
      { id: "mixed", title: "Répartition, réserves et capitalisation : quels enjeux pour les retraites ?", publisher: "Conseil d’orientation des retraites", year: "2025", url: "https://www.cor-retraites.fr/reunions-du-cor/repartition-reserves-capitalisation-quels-enjeux-pour-retraites" },
      { id: "longevity", title: "The role of supplementary pension provision in retirement", publisher: "OCDE — Pensions Outlook", year: "2018", url: "https://www.oecd.org/en/publications/oecd-pensions-outlook-2018_pens_outlook-2018-en/full-report/component-4.html" }
    ]
  },

  49: {
    theme: "Protection sociale",
    shortTitle: "Conditionner les prestations aux cotisations",
    question: "Les prestations sociales devraient être fortement conditionnées à la durée de cotisation et de participation au marché du travail.",
    metaDescription: "Comprendre les effets d’un lien plus fort entre travail, cotisations et prestations sociales, notamment pour les carrières interrompues.",
    introduction: "Les prestations n’ont pas toutes le même but. Le chômage et la retraite remplacent en partie un revenu après des cotisations. Les minima sociaux, les aides familiales ou le handicap répondent davantage à un besoin, même si la personne a peu cotisé.",
    balance: [
      "Lier les droits aux cotisations peut sembler plus juste envers les personnes qui ont travaillé longtemps. Mais une carrière peut être interrompue par une crise, une maladie, le handicap, l’aide à un proche ou l’absence d’emploi disponible.",
      "L’Organisation internationale du Travail reconnaît les deux principes : certaines prestations peuvent dépendre des cotisations, tandis qu’une protection minimale doit rester accessible aux personnes qui n’ont pas assez cotisé."
    ],
    favour: [
      { title: "Reconnaître la contribution de chacun.", text: " Un lien clair entre les cotisations et les droits peut renforcer le sentiment de justice et mieux reconnaître les longues carrières." },
      { title: "Encourager le travail déclaré.", text: " Si chaque période travaillée ouvre des droits futurs, l’emploi déclaré devient plus intéressant, à condition que des postes soient réellement disponibles." },
      { title: "Concentrer certaines prestations sur les cotisants.", text: " Des droits plus élevés pour ceux qui ont assuré le risque peuvent limiter le coût total ou mieux remplacer leur ancien salaire." }
    ],
    reserve: [
      { title: "Pénaliser les carrières les plus fragiles.", text: " Les jeunes, les travailleurs précaires, les aidants, les personnes malades ou celles vivant dans une zone sans emploi cotisent moins sans avoir choisi cette situation." },
      { title: "Laisser certaines personnes sans minimum vital.", text: " Les aides qui ne dépendent pas des cotisations protègent ceux qui ne remplissent pas les conditions d’une assurance. L’OIT les juge nécessaires pour éviter les trous de couverture.", sources: ["extension", "floors"] },
      { title: "Créer des règles compliquées et des coupures brutales.", text: " Il faut vérifier toute la carrière, décider quelles interruptions comptent et contrôler les dossiers. Perdre soudainement une aide après quelques heures de travail peut aussi décourager la reprise d’un petit emploi." }
    ],
    factors: [
      { title: "Type de prestation", text: "Remplacer un salaire, aider un enfant, compenser un handicap et garantir un minimum vital sont des objectifs différents." },
      { title: "Interruptions reconnues", text: "La maladie, la maternité, l’aide à un proche, la formation et le chômage peuvent compter comme des périodes de participation." },
      { title: "Règle progressive ou tout ou rien", text: "Faire varier le montant selon les cotisations est différent de refuser entièrement l’accès sous un seuil." },
      { title: "Emplois disponibles", text: "La condition n’a pas le même sens quand les offres sont nombreuses et quand une région subit une crise économique." }
    ],
    decisionPrompt: "Distinguez la protection minimale qui doit rester accessible à tous et les droits supplémentaires qui peuvent dépendre des cotisations. On peut renforcer ce lien sans exclure totalement les personnes à la carrière incomplète.",
    sources: [
      { id: "standards", title: "Social Security (Minimum Standards) Convention, 1952 — questions fréquentes", publisher: "Organisation internationale du Travail", year: "2024", url: "https://www.ilo.org/frequently-asked-questions-social-security-minimum-standards-convention" },
      { id: "extension", title: "Extending social security to workers in the informal economy", publisher: "Organisation internationale du Travail", year: "2021", url: "https://www.ilo.org/media/387961/download" },
      { id: "floors", title: "Social Protection Floors", publisher: "Organisation internationale du Travail", year: "2017", url: "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/%40ed_protect/%40soc_sec/documents/publication/wcms_538984.pdf" }
    ]
  },

  50: {
    theme: "État / entreprises",
    shortTitle: "Aides publiques, dividendes et dirigeants",
    question: "Une entreprise qui reçoit plusieurs milliards d'euros d'aides publiques devrait pouvoir être contrainte de limiter ses dividendes et les rémunérations de ses dirigeants tant que l'aide n'est pas remboursée.",
    metaDescription: "Comprendre pourquoi des aides publiques pourraient limiter dividendes et rémunérations, et pourquoi les conditions doivent dépendre du type d’aide.",
    introduction: "L’objectif est d’éviter qu’une aide destinée à sauver l’activité profite surtout aux actionnaires ou aux dirigeants. Mais une subvention, un prêt, une garantie et une entrée de l’État au capital ne font pas courir le même risque au contribuable.",
    balance: [
      "Interdire temporairement les dividendes garde davantage d’argent dans l’entreprise pour les emplois, les fournisseurs ou le remboursement. Mais une interdiction trop longue peut décourager les investisseurs privés dont l’entreprise aura besoin ensuite.",
      "L’Union européenne a déjà imposé des limites aux dividendes, aux rachats d’actions et à certains bonus lors d’aides au capital, notamment pour Air France. Cela montre que ces conditions sont possibles, pas qu’elles conviennent à toutes les aides.",
      "Carrefour illustre la question : le groupe a reçu d’importants allègements publics tout en réalisant des bénéfices et en rémunérant ses actionnaires. Comme tout l’argent entre dans la même trésorerie, on ne peut toutefois pas affirmer qu’un euro précis d’aide a payé un euro précis de dividende."
    ],
    favour: [
      { title: "Garder l’aide pour son objectif.", text: " L’argent reste disponible pour les emplois, les investissements, les fournisseurs et le remboursement au lieu d’être distribué." },
      { title: "Faire partager l’effort aux actionnaires et dirigeants.", text: " Si le contribuable prend une partie du risque, les propriétaires et les dirigeants peuvent être invités à limiter temporairement ce qu’ils reçoivent. Cela décourage aussi les demandes d’aide peu justifiées." },
      { title: "Des règles déjà appliquées à Air France.", text: " La Commission européenne a interdit certains dividendes et limité des rémunérations variables jusqu’à des étapes précises de remboursement de l’aide.", sources: ["airfrance"] },
      { title: "Le cas d’une entreprise rentable comme Carrefour.", text: " Au Sénat, le rapporteur a estimé que Carrefour avait reçu environ 2 milliards d’euros de CICE et d’allègements entre 2013 et 2018, tout en réalisant des bénéfices et en versant des dividendes. En 2024, le groupe a aussi publié un bénéfice d’activité supérieur à 2 milliards d’euros et 705 millions d’euros de rachats d’actions. Ces chiffres nourrissent la demande de contreparties, sans prouver que les aides ont directement payé les actionnaires.", sources: ["senate", "carrefour"] }
    ],
    reserve: [
      { title: "Décourager de futurs investisseurs.", text: " Une interdiction trop longue ou imprévisible peut rendre l’entreprise moins attractive. Or elle peut avoir besoin d’argent privé pour financer sa reprise." },
      { title: "Toutes les aides ne se remboursent pas.", text: " Un prêt doit être rendu, mais pas un allègement général de cotisations. Le CICE et les exonérations cités pour Carrefour ne sont donc pas des prêts auxquels on peut simplement appliquer la règle « jusqu’au remboursement ».", sources: ["senate", "definition"] },
      { title: "Des moyens de contourner une règle trop simple.", text: " Un groupe peut transférer de l’argent par des rachats d’actions, des prêts entre filiales, des honoraires ou d’autres opérations. La règle doit donc couvrir l’ensemble du groupe et être contrôlée." }
    ],
    factors: [
      { title: "Type d’aide", text: "Un prêt, une garantie, une subvention et une entrée de l’État au capital n’exposent pas le contribuable de la même façon." },
      { title: "Montant et durée", text: "La contrainte peut diminuer à mesure que l’entreprise rembourse ou que le risque public baisse." },
      { title: "Ensemble du groupe", text: "Les filiales, les rachats d’actions et les transferts internes doivent être inclus pour éviter les contournements." },
      { title: "Contrôle et remboursement", text: "L’État peut fixer des objectifs vérifiables et récupérer une partie de l’aide si les engagements ne sont pas tenus." },
      { title: "Chiffres comparables", text: "Bénéfice, argent disponible, dividendes et rachats d’actions sont différents et doivent être comparés sur la même période." }
    ],
    decisionPrompt: "Votre réponse dépend du risque pris par le contribuable et du type d’aide. Une limite temporaire et adaptée peut protéger l’argent public ; une règle identique pour toutes les aides peut gêner inutilement la reprise.",
    sources: [
      { id: "airfrance", title: "State aid: Commission approves French plans to grant up to €4 billion for the recapitalisation of Air France", publisher: "Commission européenne", year: "2021", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_21_1581" },
      { id: "framework", title: "Temporary Framework — notification template for recapitalisation measures", publisher: "Commission européenne — politique de concurrence", year: "2021", url: "https://competition-policy.ec.europa.eu/system/files/2021-05/template_TF_notification_section_3.11.pdf" },
      { id: "germany", title: "Commission approves German fund to enable up to €500 billion of liquidity and capital support", publisher: "Commission européenne", year: "2020", url: "https://ec.europa.eu/commission/presscorner/detail/en/ip_20_1280" },
      { id: "senate", title: "Audition du groupe Carrefour — commission d’enquête sur les aides publiques", publisher: "Sénat", year: "2025", url: "https://www.senat.fr/compte-rendu-commissions/20250331/ce_aides_publiques.html", note: "estimations et échanges consignés dans le compte rendu" },
      { id: "carrefour", title: "Document d’enregistrement universel 2024", publisher: "Carrefour", year: "2025", url: "https://www.carrefour.com/sites/default/files/2025-04/CFR_CARREFOUR_URD_2024_FR_VIEWER_ESEF_25_04_01_1.html" },
      { id: "definition", title: "Transparence et évaluation des aides publiques aux entreprises — définition et périmètres", publisher: "Sénat", year: "2025", url: "https://www.senat.fr/rap/r24-808-1/r24-808-12.html" }
    ]
  },

  62: {
    theme: "Écologie",
    shortTitle: "Taxe carbone et compensation",
    question: "Une taxe carbone qui réduit les émissions de CO₂ devrait être maintenue même si elle diminue le pouvoir d’achat des ménages modestes, à condition de compenser ces derniers par des aides ciblées.",
    metaDescription: "Comprendre comment une taxe carbone et des aides ciblées peuvent réduire les émissions tout en protégeant le pouvoir d’achat.",
    introduction: "Une taxe carbone rend les produits les plus polluants plus chers pour encourager leur remplacement. Des aides ciblées peuvent rendre de l’argent aux ménages modestes sans supprimer l’intérêt financier de moins polluer.",
    balance: [
      "Le prix laisse chacun choisir comment réduire ses émissions. Mais un ménage qui dépend de sa voiture ou vit dans un logement mal isolé ne peut pas toujours changer rapidement d’équipement.",
      "L’utilisation des recettes est donc essentielle. Verser une aide séparée protège le revenu tout en laissant les produits polluants plus chers. Baisser à nouveau le prix du carburant protège immédiatement, mais réduit l’incitation à en consommer moins."
    ],
    favour: [
      { title: "Laisser chacun choisir sa solution.", text: " Un ménage ou une entreprise peut moins consommer, changer d’équipement ou modifier sa production, au lieu de suivre une seule méthode imposée." },
      { title: "Utiliser les recettes pour protéger les ménages.", text: " L’argent peut financer un versement aux revenus modestes, les transports collectifs ou la rénovation des logements. L’OCDE montre que le choix de cette aide change fortement qui gagne et qui perd.", sources: ["recycling"] },
      { title: "Donner de la visibilité pour investir.", text: " Une hausse annoncée à l’avance rend les véhicules, logements et machines moins polluants plus intéressants et permet de préparer le changement." }
    ],
    reserve: [
      { title: "Un poids plus lourd pour certains ménages modestes ou ruraux.", text: " Le carburant et le chauffage représentent parfois une grande part de leur budget. Deux ménages ayant le même revenu peuvent aussi être touchés très différemment selon leur logement et leurs déplacements.", sources: ["burden"] },
      { title: "Une aide qui ne trouve pas tous les perdants.", text: " Le revenu ne dit pas tout sur la distance au travail, l’état du logement ou le handicap. Certains ménages peuvent recevoir trop peu, tandis qu’une aide trop large devient coûteuse." },
      { title: "Des entreprises françaises moins compétitives.", text: " Si leurs concurrentes étrangères ne paient pas un coût comparable, certaines entreprises peuvent augmenter leurs prix, perdre des clients ou déplacer leur production. Des protections ciblées peuvent être nécessaires." }
    ],
    factors: [
      { title: "Solutions disponibles", text: "Transports collectifs, rénovation, bornes de recharge et véhicules abordables déterminent la capacité de changer." },
      { title: "Forme de l’aide", text: "Un chèque immédiat, une aide selon le revenu et une subvention pour rénover n’agissent pas au même moment." },
      { title: "Rythme de la taxe", text: "Une progression connue à l’avance et réexaminée régulièrement réduit les chocs." },
      { title: "Résultats à suivre", text: "Il faut mesurer les émissions, le pouvoir d’achat, les prix, les déplacements de production et les personnes qui ne demandent pas l’aide." }
    ],
    decisionPrompt: "La question est de savoir si la baisse des émissions justifie de maintenir la taxe lorsque les ménages modestes sont aidés. Votre réponse dépend surtout de la qualité des aides et des solutions réellement disponibles.",
    sources: [
      { id: "burden", title: "Who pays for higher carbon prices?", publisher: "OCDE", year: "2023", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2023/01/who-pays-for-higher-carbon-prices_049a9035/8f16f3d8-en.pdf" },
      { id: "recycling", title: "Reaching net zero while safeguarding people’s material living standards", publisher: "OCDE", year: "2023", url: "https://one.oecd.org/document/ECO/WKP%282023%2922/en/pdf" },
      { id: "inflation", title: "A cost-of-living squeeze? Distributional implications of rising inflation", publisher: "OCDE", year: "2022", url: "https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/12/a-cost-of-living-squeeze-distributional-implications-of-rising-inflation_150e004c/4b7539a3-en.pdf" }
    ]
  },

  71: {
    theme: "Institutions",
    shortTitle: "Proportionnelle intégrale",
    question: "La proportionnelle intégrale serait préférable au système actuel, même si elle rendait plus fréquentes les coalitions et les gouvernements instables.",
    metaDescription: "Comprendre les effets de la proportionnelle sur la représentation des électeurs, les coalitions, la stabilité et la responsabilité politique.",
    introduction: "Avec la proportionnelle, un parti qui obtient environ 20 % des voix reçoit environ 20 % des sièges. Le résultat dépend toutefois du nombre de circonscriptions, du minimum de voix exigé et de la manière de choisir les candidats.",
    balance: [
      "Le système majoritaire aide souvent un camp à obtenir une majorité claire, mais il peut lui donner beaucoup plus de sièges que sa part de voix. La proportionnelle représente mieux les différents courants et rend les alliances plus fréquentes.",
      "Une coalition n’est pas forcément instable. Sa durée dépend aussi des règles de renversement du gouvernement, des habitudes de négociation et de la solidité des partis."
    ],
    favour: [
      { title: "Des sièges plus proches des votes.", text: " Moins de voix restent sans représentant. Un parti présent dans tout le pays n’est pas écarté simplement parce qu’il n’arrive pas premier dans une circonscription.", sources: ["scrutins"] },
      { title: "Davantage de courants représentés.", text: " Les sensibilités minoritaires et les nouveaux partis entrent plus facilement au Parlement, qui ressemble davantage à l’ensemble des électeurs." },
      { title: "Obliger les partis à chercher un compromis.", text: " Pour gouverner, plusieurs partis peuvent devoir négocier un programme commun, plutôt que laisser un seul camp gouverner avec une minorité des voix." }
    ],
    reserve: [
      { title: "Beaucoup de petits partis.", text: " Si presque aucun minimum de voix n’est exigé, de nombreuses formations peuvent entrer au Parlement. Un petit parti indispensable à une majorité peut alors obtenir beaucoup d’influence." },
      { title: "Difficile de savoir qui est responsable.", text: " Le programme final est négocié après l’élection. L’électeur peut avoir du mal à attribuer une réussite ou un échec à un parti précis." },
      { title: "Des gouvernements plus longs à former ou plus fragiles.", text: " Les négociations peuvent durer, et le départ d’un partenaire peut faire tomber la majorité. Ce risque dépend aussi des autres règles politiques, pas seulement du mode de scrutin.", sources: ["report"] }
    ],
    factors: [
      { title: "Minimum de voix", text: "Exiger par exemple 5 % réduit le nombre de petits partis, mais laisse aussi certaines voix sans siège." },
      { title: "Nombre de sièges par zone", text: "Plus une circonscription élit de députés, plus le résultat peut être fidèle aux voix." },
      { title: "Choix des candidats", text: "Une liste ouverte permet de choisir des candidats ; une liste fermée laisse davantage ce choix aux partis." },
      { title: "Règles de stabilité", text: "On peut par exemple exiger qu’une majorité propose un nouveau gouvernement avant de renverser l’ancien." }
    ],
    decisionPrompt: "Le choix oppose surtout une représentation plus fidèle des voix à la possibilité d’une majorité claire dès l’élection. On peut accepter les coalitions tout en exigeant un minimum de voix et des règles qui protègent la stabilité.",
    sources: [
      { id: "scrutins", title: "Quels sont les différents modes de scrutin ?", publisher: "Vie-publique.fr", year: "2026", url: "https://www.vie-publique.fr/fiches/23948-quels-sont-les-differents-modes-de-scrutin" },
      { id: "report", title: "Refaire la démocratie — rapport du groupe de travail sur l’avenir des institutions", publisher: "Assemblée nationale", year: "2015", url: "https://www.vie-publique.fr/files/rapport/pdf/154000692.pdf" }
    ]
  },

  76: {
    theme: "Santé / assurance maladie",
    shortTitle: "Remboursement intégral des soins essentiels",
    question: "L'Assurance maladie devrait rembourser intégralement les soins essentiels, quitte à réduire fortement le rôle des complémentaires santé.",
    metaDescription: "Comprendre ce que changerait un remboursement public intégral des soins essentiels pour l’accès, les cotisations, les mutuelles et les dépenses.",
    introduction: "En France, la Sécurité sociale rembourse une première partie des soins et la mutuelle complète souvent le reste. La proposition confierait l’essentiel du remboursement à la Sécurité sociale et laisserait éventuellement les soins supplémentaires aux mutuelles.",
    balance: [
      "Un remboursement public principal peut être plus simple et partager le risque entre toute la population. Mais les cotisations de mutuelle, parfois payées en partie par l’employeur, seraient remplacées par davantage d’impôts ou de cotisations publiques.",
      "Dans toute assurance, chacun paie aussi pour des soins qu’il n’utilisera peut-être jamais. C’est ce partage qui permet de couvrir une personne lorsqu’elle tombe malade. Le choix porte donc sur les soins à partager avec toute la population et ceux qui peuvent rester facultatifs.",
      "Une mutuelle d’entreprise couvre un groupe plus précis de salariés et peut proposer des garanties adaptées à leurs besoins moyens. La Sécurité sociale réunit un groupe beaucoup plus large, ce qui répartit mieux les maladies rares ou très coûteuses."
    ],
    favour: [
      { title: "Se soigner selon son besoin.", text: " Un remboursement intégral des soins essentiels réduit le risque qu’un mauvais contrat ou une somme restant à payer pousse une personne à retarder ses soins." },
      { title: "Des règles plus simples et un partage plus large.", text: " Une couverture commune évite une partie des doubles remboursements et des comparaisons de contrats. Selon l’OMS, un grand groupe répartit mieux le coût entre personnes en bonne santé et malades.", sources: ["pooling"] },
      { title: "Réduire certains frais de gestion.", text: " La Cour des comptes relève des frais importants dans les complémentaires, notamment pour vendre et gérer les contrats. Réduire leur rôle peut économiser une partie de ces frais, sans tous les supprimer.", sources: ["court"] }
    ],
    reserve: [
      { title: "Une dépense publique plus élevée.", text: " Les nouveaux remboursements doivent être financés par des impôts ou des cotisations. Les soins ne deviennent pas gratuits à produire : le coût change surtout de payeur." },
      { title: "Décider quels soins sont essentiels.", text: " Il faut choisir les actes, les médicaments, les tarifs et les nouveautés remboursés à 100 %. Si le budget est limité, certains soins peuvent rester hors du panier ou être retardés." },
      { title: "Des mutuelles d’entreprise parfois mieux adaptées au groupe.", text: " Une entreprise ou une branche peut choisir des garanties correspondant aux besoins moyens de ses salariés, avec une participation de l’employeur. Mais ce n’est pas du sur-mesure individuel : chaque salarié paie encore pour des soins qu’il n’utilisera jamais, et un groupe plus petit partage moins largement les gros risques.", sources: ["collective", "employer", "pooling"] },
      { title: "Une transition pour les mutuelles et leurs salariés.", text: " Les complémentaires emploient du personnel, organisent des services et couvrent des options. Une réforme rapide aurait un coût, même si elles peuvent continuer à assurer les soins non essentiels." }
    ],
    factors: [
      { title: "Liste des soins essentiels", text: "Le dentaire, l’optique, les médicaments, la prévention et les dépassements doivent être traités clairement." },
      { title: "Prix réellement facturé", text: "Rembourser 100 % du tarif fixé par la Sécurité sociale ne couvre pas la différence si le professionnel facture plus." },
      { title: "Mode de financement", text: "Un impôt selon le revenu, une cotisation proportionnelle et une même prime pour tous ne répartissent pas le coût de la même façon." },
      { title: "Transition", text: "Il faut traiter les contrats d’entreprise, la part payée par l’employeur, les salariés et les réserves des mutuelles." },
      { title: "Taille du groupe assuré", text: "Toute la population partage mieux les gros risques ; une branche professionnelle peut mieux choisir certaines garanties moyennes." }
    ],
    decisionPrompt: "Votre réponse dépend des soins que vous voulez garantir à tous et de la manière de répartir leur coût. Le débat porte aussi sur la simplicité, les tarifs médicaux et la place laissée aux garanties facultatives.",
    sources: [
      { id: "hcaam", title: "Quatre scénarios polaires d’évolution de l’articulation entre Sécurité sociale et Assurance maladie complémentaire", publisher: "Haut Conseil pour l’avenir de l’assurance maladie", year: "2022", url: "https://www.securite-sociale.fr/home/hcaam/zone-main-content/rapports-et-avis-1/rapport-du-hcaam-quatre-scenario.html" },
      { id: "court", title: "Les complémentaires santé", publisher: "Cour des comptes", year: "2021", url: "https://www.ccomptes.fr/fr/publications/les-complementaires-sante" },
      { id: "future", title: "L’avenir de l’assurance maladie", publisher: "Cour des comptes", year: "2017", url: "https://www.ccomptes.fr/sites/default/files/2017-11/20171129-rapport-avenir-assurance-maladie_0.pdf" },
      { id: "pooling", title: "Pooling revenues and reducing fragmentation", publisher: "Organisation mondiale de la santé", year: "mise à jour continue", url: "https://www.who.int/activities/pooling/pooling" },
      { id: "collective", title: "Complémentaire santé : contrats collectifs et contrats individuels", publisher: "DREES", year: "2017", url: "https://drees.solidarites-sante.gouv.fr/publications/etudes-et-resultats/complementaire-sante-un-organisme-dassurances-sur-quatre-gere", note: "prestations et frais de gestion des contrats collectifs" },
      { id: "employer", title: "96 % des salariés ont accès à une assurance complémentaire santé d’entreprise en 2017", publisher: "DREES / IRDES", year: "2018", url: "https://drees.solidarites-sante.gouv.fr/publications/etudes-et-resultats/96-des-salaries-ont-acces-une-assurance-complementaire-sante" }
    ]
  },

  78: {
    theme: "Éducation / autonomie",
    shortTitle: "Recrutement et évaluation par les chefs d’établissement",
    question: "Les chefs d'établissement scolaire devraient pouvoir recruter eux-même une partie de leurs enseignants et peser davantage dans leur évaluation.",
    metaDescription: "Comprendre ce que changerait un rôle plus important du chef d’établissement dans le recrutement et l’évaluation des enseignants.",
    introduction: "La proposition ne donnerait pas forcément tout le recrutement au chef d’établissement. Elle lui permettrait de choisir une partie des enseignants et de compter davantage dans leur évaluation.",
    balance: [
      "Un chef connaît les projets, les postes difficiles à pourvoir et les besoins de son équipe. Mais il ne peut pas prévoir parfaitement la qualité future d’un enseignant et peut subir des pressions locales.",
      "Dans certains pays, les établissements qui disposent de plus de liberté et rendent clairement compte de leurs résultats obtiennent de meilleurs résultats scolaires. Cela ne prouve pas que donner ce pouvoir aux chefs produirait automatiquement le même effet en France."
    ],
    favour: [
      { title: "Trouver un profil adapté au projet.", text: " L’établissement peut rechercher une compétence rare, une expérience particulière ou une personne souhaitant réellement participer au projet de l’équipe." },
      { title: "Pourvoir plus vite un poste difficile.", text: " Un recrutement local peut limiter les postes vacants et les affectations qui ne correspondent ni au besoin de l’école ni au souhait de l’enseignant." },
      { title: "Donner au chef des moyens d’agir sur son équipe.", text: " S’il est jugé sur les résultats de l’établissement, participer au recrutement et à l’accompagnement des enseignants lui donne des moyens plus cohérents avec cette responsabilité.", sources: ["autonomy"] }
    ],
    reserve: [
      { title: "Favoritisme ou pression du supérieur.", text: " Des critères locaux peu clairs peuvent favoriser les relations personnelles, la conformité ou la discrimination. Un enseignant peut aussi hésiter à contredire un chef qui contrôle fortement sa carrière." },
      { title: "Creuser les écarts entre établissements.", text: " Les écoles favorisées attirent plus facilement les candidats. Les établissements difficiles peuvent perdre leurs enseignants expérimentés s’ils ne reçoivent pas davantage de moyens et d’avantages.", sources: ["equity"] },
      { title: "Un bon enseignant ne se résume pas à un chiffre.", text: " Les notes des élèves, une visite ponctuelle ou la satisfaction des parents ne montrent qu’une partie du travail. Trop miser sur ces chiffres peut encourager à préparer uniquement les tests ou à éviter les classes difficiles.", sources: ["accountability"] }
    ],
    factors: [
      { title: "Nombre de postes concernés", text: "Choisir quelques profils particuliers est très différent de recruter localement tous les enseignants." },
      { title: "Personnes qui décident", text: "Associer le chef, des enseignants, l’inspection et une personne extérieure peut réduire les décisions arbitraires." },
      { title: "Possibilité de contester", text: "Des critères publiés, une décision écrite et un recours indépendant protègent les candidats et les enseignants." },
      { title: "Aide aux établissements difficiles", text: "Des primes, de la formation et des moyens supplémentaires peuvent éviter que seuls les établissements attractifs profitent de la réforme." }
    ],
    decisionPrompt: "Pesez le gain d’un recrutement adapté aux besoins locaux contre le risque de favoritisme et d’écarts entre écoles. Un pouvoir limité et contrôlé n’a pas les mêmes effets qu’une liberté totale sans recours.",
    sources: [
      { id: "autonomy", title: "School Autonomy and Accountability", publisher: "OCDE", year: "2011", url: "https://www.oecd.org/en/publications/school-autonomy-and-accountability_5k9h362kcx9w-en.html" },
      { id: "equity", title: "Review education policies — School autonomy", publisher: "OCDE", year: "2025", url: "https://gpseducation.oecd.org/revieweducationpolicies/" },
      { id: "accountability", title: "Constructive Accountability, Transparency and Trust between Government and Highly Autonomous Schools", publisher: "OCDE", year: "2019", url: "https://one.oecd.org/document/EDU/WKP%282019%297/en/pdf" }
    ]
  },

  79: {
    theme: "Éducation / mixité sociale",
    shortTitle: "Financement du privé et mixité sociale",
    question: "Le financement public des établissements privés sous contrat devrait être conditionné à des objectifs mesurables de mixité sociale.",
    metaDescription: "Comprendre pourquoi le financement public des écoles privées pourrait dépendre de leur mixité sociale, et les difficultés d’une telle règle.",
    introduction: "L’État paie les enseignants des établissements privés sous contrat et les collectivités financent une partie de leur fonctionnement. Cet argent vient des impôts payés par tous, y compris les ménages modestes, même si chacun ne contribue pas autant.",
    balance: [
      "Le ministère de l’Éducation constate un écart social croissant entre les collèges publics et privés, mais la situation varie beaucoup selon les territoires. Demander le même résultat partout pourrait donc être irréaliste.",
      "Pour conditionner le financement, il faut choisir ce qui sera mesuré, le progrès attendu, le délai et la sanction. Selon ces choix, la mesure peut ouvrir davantage les établissements ou au contraire réduire leurs moyens.",
      "En droit, une école sous contrat doit accueillir les enfants sans distinction d’origine, d’opinion ou de croyance. En pratique, les frais, la distance, le transport, l’information et les admissions peuvent encore limiter l’accès."
    ],
    favour: [
      { title: "Demander une contrepartie à un financement payé par tous.", text: " Les familles modestes contribuent elles aussi aux écoles privées par leurs impôts, alors que les frais, la distance ou les admissions peuvent leur en fermer l’accès. La Cour des comptes comptait en 2021 beaucoup moins d’élèves boursiers dans le privé sous contrat que dans le public.", sources: ["court", "rules"] },
      { title: "Encourager l’accueil d’élèves modestes.", text: " Des financements supplémentaires, des admissions transparentes, des frais adaptés au revenu ou des places réservées peuvent rendre cet accueil plus facile." },
      { title: "Réduire la séparation sociale entre écoles.", text: " Le ministère observe que l’écart de composition sociale entre les deux secteurs s’est creusé. La Cour des comptes estime que les mesures actuelles ne suffisent pas.", sources: ["depp", "court"] }
    ],
    reserve: [
      { title: "Limiter le choix des familles et des établissements.", text: " Des règles d’admission plus strictes peuvent réduire la liberté des familles et l’autonomie liée au projet particulier de chaque établissement." },
      { title: "Tenir compte du quartier ou du territoire.", text: " Une école ne peut pas accueillir une population absente à proximité sans transport, internat ou aide aux frais. Une cible nationale peut punir un lieu plutôt qu’un mauvais comportement." },
      { title: "Une sanction peut aggraver le problème.", text: " Retirer des fonds peut réduire les moyens d’accueillir les élèves modestes, augmenter les frais ou fermer des classes. Une partie des élèves devrait alors être accueillie par le public." },
      { title: "Les impôts financent aussi des services que chacun n’utilise pas.", text: " Des personnes sans enfant paient également pour l’école publique. Le simple fait de ne pas utiliser une école ne suffit donc pas à contester son financement. La question est plutôt de savoir si des obstacles sociaux évitables ferment un service soutenu par tous.", sources: ["rules", "court"] }
    ],
    factors: [
      { title: "Ce qui est mesuré", text: "Le nombre de boursiers, le revenu des familles et un indice social ne donnent pas exactement la même image." },
      { title: "Comparaison locale", text: "Comparer une école avec les familles vivant autour d’elle est plus réaliste que d’exiger partout la même composition nationale." },
      { title: "Aide avant sanction", text: "Un financement supplémentaire, un accompagnement et la publication des résultats peuvent précéder une baisse progressive des fonds." },
      { title: "Admissions, frais et transport", text: "Ces trois obstacles doivent évoluer ensemble pour que l’objectif soit réellement atteignable." }
    ],
    decisionPrompt: "Votre réponse dépend des contreparties que vous jugez légitimes lorsque l’argent public finance une école privée. Un objectif adapté au territoire, avec aide puis sanction progressive, est très différent d’un quota national immédiat.",
    sources: [
      { id: "depp", title: "Évolution de la mixité sociale des collèges", publisher: "DEPP — ministère de l’Éducation nationale", year: "2024", url: "https://www.education.gouv.fr/depp/evolution-de-la-mixite-sociale-des-colleges-452478" },
      { id: "court", title: "L’enseignement privé sous contrat", publisher: "Cour des comptes", year: "2023", url: "https://www.ccomptes.fr/fr/publications/lenseignement-prive-sous-contrat" },
      { id: "rules", title: "Les établissements d’enseignement scolaire privés", publisher: "Ministère de l’Éducation nationale", year: "mise à jour continue", url: "https://www.education.gouv.fr/les-etablissements-d-enseignement-scolaire-prives-2942", note: "obligations d’accueil et financement des établissements sous contrat" },
      { id: "funding", title: "Contrôles administratifs et financiers des établissements d’enseignement privés sous contrat", publisher: "Ministère de l’Éducation nationale", year: "2025", url: "https://www.education.gouv.fr/bo/2025/Hebdo23/MENF2511949N" }
    ]
  }
};
