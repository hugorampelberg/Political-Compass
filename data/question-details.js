const QUESTION_DETAILS = {
  5: {
    theme: "Économie",
    shortTitle: "Hausse du salaire minimum",
    question: "Le salaire minimum devrait être augmenté significativement.",
    metaDescription: "Enjeux d’une hausse significative du SMIC : pouvoir d’achat, emploi, prix, consommation, compression salariale et spécificités françaises.",
    introduction: "Augmenter fortement le SMIC relève à la fois d’un objectif de revenu et d’un choix sur la répartition du coût entre entreprises, consommateurs, finances publiques et emploi. L’effet final dépend moins du seul montant facial que du contexte français et des mesures qui accompagnent la hausse.",
    balance: [
      "Pour un salarié qui conserve le même nombre d’heures, une hausse du SMIC augmente directement le salaire brut, puis le salaire net. Mais le revenu disponible dépend aussi des prestations, des prélèvements et des prix. Pour l’économie entière, il faut également examiner les réactions des employeurs : marges, prix, productivité, embauches, heures travaillées ou salaires situés juste au-dessus du minimum.",
      "L’étude de Card et Krueger sur la restauration rapide au New Jersey n’a pas observé la baisse relative d’emploi prédite par un modèle concurrentiel simple. Elle montre qu’une hausse du minimum n’entraîne pas nécessairement une destruction d’emplois dans tous les cas ; elle ne prouve pas qu’une hausse de toute ampleur serait sans risque, ni que le résultat se transpose mécaniquement à la France."
    ],
    favour: [
      { title: "Pouvoir d’achat des bas salaires.", text: " La hausse bénéficie d’abord aux salariés payés au voisinage du minimum. En France, l’indexation du SMIC a contribué à mieux préserver le bas de la distribution pendant le choc inflationniste récent.", sources: ["oecd", "insee"] },
      { title: "Consommation, activité et PIB.", text: " Les ménages modestes consacrent généralement une part élevée d’un revenu supplémentaire à la consommation. Une hausse peut donc soutenir la demande, la production et le PIB, à condition que les pertes d’heures ou d’emplois et les hausses de prix ne neutralisent pas ce canal.", sources: ["dares"] },
      { title: "Emploi : un effet qui n’est pas automatique.", text: " L’expérience Card–Krueger a trouvé, dans le secteur et la période étudiés, que la hausse du minimum du New Jersey n’avait pas réduit l’emploi relativement à la Pennsylvanie. Les mécanismes de monopsone, de moindre rotation du personnel ou de gains d’organisation peuvent limiter le coût d’emploi.", sources: ["card"] }
    ],
    reserve: [
      { title: "Un point de départ français déjà élevé.", text: " Le salaire minimum français représentait environ 62 % du salaire médian en 2025, l’un des ratios les plus élevés de l’OCDE. Une étude américaine portant sur un minimum initial plus bas et un seul secteur ne suffit donc pas à prévoir l’effet d’une hausse française importante.", sources: ["oecd"] },
      { title: "Emploi, heures ou automatisation.", text: " Si la productivité du poste ne suit pas et si le coût n’est pas absorbé ailleurs, certaines entreprises peuvent moins recruter, réduire des heures, automatiser ou fermer. Le risque est plus sensible pour les emplois peu productifs, les nouveaux entrants et les entreprises à faibles marges ; son ampleur empirique dépend de la hausse.", sources: ["dares"] },
      { title: "Hausse des prix dans les secteurs exposés.", text: " Une hausse du SMIC renchérit directement la masse salariale des entreprises qui emploient beaucoup de salariés au minimum. Elles peuvent absorber ce coût par leurs marges ou leur productivité, mais aussi en relever leurs prix. Une étude sur les restaurants français trouve une répercussion positive et significative, étalée sur plus d’un an. Cet effet sectoriel ne prouve toutefois ni une transmission intégrale, ni une inflation générale et durable.", sources: ["prices"] },
      { title: "Salaires voisins et pouvoir d’achat de la classe moyenne.", text: " Le SMIC est automatiquement indexé, contrairement à la plupart des salaires situés juste au-dessus, qui dépendent de négociations parfois plus lentes. Si les prix accélèrent davantage que ces rémunérations, leurs titulaires peuvent perdre du pouvoir d’achat réel ; si le SMIC les rattrape, la hiérarchie salariale se tasse. Des effets d’entraînement existent vers les salaires supérieurs, mais ils ne sont ni immédiats ni nécessairement suffisants pour éviter ce risque.", sources: ["oecd", "insee", "bdf"] }
    ],
    factors: [
      { title: "Ampleur et calendrier", text: "Une hausse graduelle et annoncée laisse davantage de temps d’adaptation qu’un saut immédiat." },
      { title: "Allègements de cotisations", text: "Ils réduisent le coût employeur, mais déplacent une partie du financement vers le budget public." },
      { title: "Structure des secteurs", text: "Marges, concurrence, productivité et part des salariés au SMIC déterminent la répercussion." },
      { title: "Prestations et salaires voisins", text: "Le gain net dépend des prestations sous condition de ressources et de la revalorisation des grilles." }
    ],
    decisionPrompt: "La question revient à arbitrer entre un gain salarial immédiat au bas de l’échelle et le risque que son coût soit réparti entre marges, prix, emploi, heures et salaires voisins. Le gain nominal des salariés au SMIC ne garantit donc pas un gain réel identique, tandis que les salariés juste au-dessus peuvent être moins bien protégés. Votre réponse peut dépendre du montant, du rythme et des mesures d’accompagnement.",
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
    metaDescription: "Comparer fourniture privée et publique : coûts, qualité, innovation, concurrence, monopoles naturels, service universel et contrats incomplets.",
    introduction: "Le mot « efficace » peut désigner un coût plus faible, une meilleure qualité, davantage d’innovation, une couverture universelle ou une plus grande résilience. Le classement public–privé change selon le critère retenu et selon la possibilité réelle d’organiser la concurrence.",
    balance: [
      "La propriété et le mode de fourniture sont distincts : un service peut être financé publiquement mais produit par des entreprises sous contrat, ou exploité par une entreprise publique en concurrence. La comparaison pertinente porte donc aussi sur le contrat, le régulateur, la structure du marché et l’objectif de service public.",
      "La théorie des contrats incomplets souligne un arbitrage central : un opérateur privé a souvent des incitations plus fortes à réduire les coûts et à innover, mais il peut aussi réduire une qualité difficile à écrire, mesurer ou contrôler dans un contrat."
    ],
    favour: [
      { title: "Incitations aux économies et à l’innovation.", text: " Des propriétaires privés supportent davantage les conséquences financières de leurs décisions. Avec une concurrence effective, ils ont intérêt à réduire les coûts, améliorer l’offre et répondre rapidement aux préférences des usagers.", sources: ["shleifer", "pmr"] },
      { title: "Comparaison et choix.", text: " Plusieurs fournisseurs permettent de comparer prix et qualité et de remplacer un opérateur défaillant. L’entrée de nouveaux acteurs peut tester des solutions que l’administration n’aurait pas conçues.", sources: ["pmr"] },
      { title: "Séparation du financeur et du producteur.", text: " L’État peut fixer des objectifs, subventionner l’accès et mettre des prestataires en concurrence sans produire lui-même chaque service. Cette architecture peut combiner solidarité du financement et discipline contractuelle.", sources: ["hart"] }
    ],
    reserve: [
      { title: "Qualité difficilement contractable.", text: " Dans la santé, la dépendance, la prison ou l’éducation, une part importante de la qualité est difficile à observer. Une réduction de coût privée peut alors dégrader la sécurité, la continuité ou la dignité sans être immédiatement détectée.", sources: ["hart"] },
      { title: "Marchés qui ne sont pas vraiment concurrentiels.", text: " Réseaux, infrastructures et coûts fixes peuvent créer un monopole naturel. L’asymétrie d’information, les externalités ou l’impossibilité de changer facilement de fournisseur limitent aussi la discipline du marché.", sources: ["pmr"] },
      { title: "Équité, couverture et résilience.", text: " Un fournisseur rémunéré à l’acte ou au client peut éviter les publics coûteux, les territoires isolés ou les capacités rarement utilisées mais nécessaires en crise. Le secteur public peut poursuivre ces missions, au prix possible de lourdeurs, de contraintes budgétaires ou d’interférences politiques.", sources: ["shleifer"] }
    ],
    factors: [
      { title: "Concurrence réelle", text: "Nombre de fournisseurs, facilité d’entrée, comparabilité et possibilité de changer d’opérateur." },
      { title: "Qualité mesurable", text: "Plus la qualité essentielle est observable et contractualisable, plus la délégation est contrôlable." },
      { title: "Obligations de service", text: "Tarifs sociaux, continuité, couverture territoriale et stocks de sécurité doivent être financés explicitement." },
      { title: "Capacité publique", text: "Une délégation ne fonctionne pas sans acheteur compétent, données, sanctions et régulateur indépendant." }
    ],
    decisionPrompt: "Demandez-vous quelle définition de l’efficacité vous privilégiez, si le secteur visé peut accueillir une concurrence crédible et si la qualité essentielle peut être contrôlée. La réponse peut légitimement différer entre télécommunications, distribution d’eau, hôpital ou justice.",
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
    metaDescription: "Enjeux de la concurrence et de la réglementation : prix, innovation, qualité, pouvoir de marché, externalités et information des consommateurs.",
    introduction: "La concurrence et la réglementation ne sont pas toujours des substituts. Une concurrence loyale suppose déjà des règles sur l’entrée, les ententes, l’information et parfois l’interopérabilité. L’enjeu est de savoir quand le choix des consommateurs suffit et quand une règle supplémentaire corrige une défaillance du marché.",
    balance: [
      "La concurrence décentralise l’expérimentation : les producteurs testent des prix et des solutions, et les clients peuvent récompenser les meilleures. La réglementation fixe au contraire des limites communes avant ou après la mise sur le marché.",
      "L’OCDE relève qu’une réglementation inutilement restrictive peut freiner l’entrée, l’investissement et la productivité. Elle souligne également que le lien entre intensité concurrentielle et innovation n’est pas univoque : trop peu de concurrence protège les rentes, mais une concurrence mal conçue peut aussi réduire certains investissements de long terme."
    ],
    favour: [
      { title: "Pression sur les prix et la qualité.", text: " Lorsque les clients peuvent comparer et changer facilement, chaque producteur risque de perdre des ventes s’il facture trop cher ou sert mal.", sources: ["toolkit"] },
      { title: "Innovation non prescrite.", text: " Le marché laisse plusieurs technologies être testées en parallèle. Une règle trop détaillée peut figer la solution d’hier ou protéger les acteurs déjà installés.", sources: ["innovation", "pmr"] },
      { title: "Moins de charge et de capture réglementaire.", text: " Des procédures complexes ont un coût fixe particulièrement lourd pour les petits entrants. Elles peuvent aussi être influencées par les acteurs qu’elles encadrent.", sources: ["pmr"] }
    ],
    reserve: [
      { title: "Pouvoir de marché.", text: " Avec un monopole, des effets de réseau ou de fortes barrières à l’entrée, la concurrence annoncée peut être fictive. Le droit de la concurrence, l’accès aux infrastructures ou une régulation tarifaire peuvent alors être nécessaires.", sources: ["toolkit"] },
      { title: "Coûts imposés à des tiers.", text: " Pollution, risques sanitaires ou instabilité financière ne sont pas toujours intégrés dans le prix. Une norme, une responsabilité juridique ou une taxe peut aligner l’intérêt privé et l’intérêt collectif.", sources: ["toolkit"] },
      { title: "Qualité invisible et sécurité.", text: " Si l’acheteur ne peut évaluer la sûreté, la durabilité ou la compétence avant l’achat, le moins-disant peut évincer le mieux-disant. Des certifications et standards communs rendent alors la concurrence plus utile.", sources: ["innovation"] }
    ],
    factors: [
      { title: "Contestabilité", text: "Entrée possible, absence d’entente et accès aux infrastructures essentielles." },
      { title: "Capacité de choix", text: "Information compréhensible, coûts de changement faibles et plusieurs offres réellement disponibles." },
      { title: "Nature du dommage", text: "Une erreur réversible ne se traite pas comme un risque sanitaire ou systémique irréversible." },
      { title: "Type de règle", text: "Une obligation de résultat technologiquement neutre est souvent moins rigide qu’une méthode imposée." }
    ],
    decisionPrompt: "Votre réponse peut dépendre de votre confiance relative dans le choix des consommateurs, le contrôle public et la possibilité de maintenir une vraie concurrence. Il est cohérent d’être favorable à la concurrence tout en jugeant indispensables des règles de base.",
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
    metaDescription: "Arbitrage entre liberté d’affectation du revenu et systèmes publics obligatoires : mutualisation des risques, solidarité, choix et incitations.",
    introduction: "Cette question oppose l’autonomie d’allocation du revenu à la mutualisation obligatoire de risques tels que maladie, chômage, dépendance ou vieillesse. Une cotisation obligatoire n’est pas seulement une dépense : elle finance aussi des droits, une assurance et parfois une redistribution entre personnes exposées à des risques différents.",
    balance: [
      "Le choix individuel permet d’adapter épargne, assurance et consommation aux préférences de chacun. Mais certains risques sont rares, très coûteux et difficiles à prévoir. Si l’adhésion est volontaire, les personnes qui anticipent un risque élevé ont davantage intérêt à s’assurer, ce qui peut renchérir ou déstabiliser le dispositif.",
      "L’OMS distingue collecte, mise en commun des fonds et achat de soins. Des pools larges et préfinancés répartissent le coût entre bien-portants et malades ainsi qu’entre périodes de vie ; ils réduisent en contrepartie la liberté de sortir du système ou de choisir l’usage immédiat de la contribution."
    ],
    favour: [
      { title: "Préférences et responsabilités individuelles.", text: " Les ménages n’ont pas les mêmes besoins, patrimoine ni tolérance au risque. Une marge de choix plus large peut mieux correspondre à leurs priorités et rendre le coût des garanties plus visible." },
      { title: "Concurrence entre solutions.", text: " Des prestataires ou supports multiples peuvent améliorer service, rendement et innovation, à condition que les contrats soient comparables et que le client puisse changer facilement." },
      { title: "Moins de prélèvements et de règles uniformes.", text: " Une obligation trop large peut financer des garanties peu valorisées par certains ou décourager l’activité déclarée. Des dispositifs ciblés peuvent préserver un socle tout en laissant davantage de revenu disponible." }
    ],
    reserve: [
      { title: "Sélection et fragmentation des risques.", text: " Les systèmes volontaires tendent à constituer des groupes plus petits et moins redistributifs. Dans certaines assurances, les personnes jeunes ou à faible risque peuvent sortir, laissant un pool plus coûteux.", sources: ["pooling", "vhi"] },
      { title: "Pourquoi la « myopie » peut conduire à sous-épargner.", text: " Ici, la myopie désigne le fait de donner beaucoup plus de poids à une dépense immédiate qu’à un besoin situé plusieurs décennies plus tard. Une personne peut vouloir préparer sa retraite, mais remettre chaque mois le premier versement au lendemain ; l’inertie transforme alors un report provisoire en années sans épargne. Dans une grande entreprise américaine, le simple passage à l’adhésion automatique a fortement relevé la participation au plan retraite sans modifier ses paramètres économiques, ce qui montre le rôle des défauts et de la procrastination. Une faible épargne peut néanmoins aussi être rationnelle lorsque le revenu est contraint, les dettes coûteuses ou les droits publics attendus élevés.", sources: ["inertia"] },
      { title: "Couverture universelle.", text: " L’expérience internationale recensée par l’OMS indique que la couverture santé universelle repose largement sur des financements obligatoires ; les contributions volontaires seules laissent souvent les plus pauvres à l’écart.", sources: ["who2005", "cbhi"] }
    ],
    factors: [
      { title: "Risque concerné", text: "Épargne courante, retraite, chômage et maladie n’ont ni la même prévisibilité ni les mêmes externalités." },
      { title: "Socle garanti", text: "Une liberté au-dessus d’une couverture minimale diffère d’une sortie totale sans filet collectif." },
      { title: "Information et défauts", text: "Comparateurs, options par défaut et conseil indépendant peuvent améliorer le choix sans tout rendre obligatoire." },
      { title: "Solidarité financée", text: "Il faut préciser qui couvre les personnes pauvres, malades ou aux carrières incomplètes." }
    ],
    decisionPrompt: "Réfléchissez au niveau de couverture qui doit être garanti à tous et à la part au-delà de laquelle chacun devrait pouvoir choisir. Votre réponse peut différer selon qu’il s’agit d’un risque catastrophique ou d’une dépense prévisible.",
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
    metaDescription: "Enjeux de la différenciation régionale : adaptation locale, expérimentation, égalité territoriale, externalités et complexité juridique.",
    introduction: "La différenciation territoriale permet d’adapter une règle aux besoins locaux, mais elle peut aussi créer des droits différents selon le lieu de résidence. L’enjeu ne se réduit donc pas à centraliser ou décentraliser : il porte sur les compétences concernées, les garanties nationales et la coordination entre territoires.",
    balance: [
      "Une région connaît mieux certaines contraintes locales — transports, emploi, logement, littoral, montagne ou mix énergétique. Elle peut expérimenter et être tenue plus directement responsable des résultats. À l’inverse, les décisions locales peuvent affecter les voisins et les capacités administratives varient fortement.",
      "L’OCDE insiste sur la nécessité d’un partage clair des responsabilités, de mécanismes de péréquation et de capacités locales suffisantes. Sans eux, la décentralisation peut accroître la fragmentation et les écarts territoriaux."
    ],
    favour: [
      { title: "Règles mieux adaptées.", text: " Les préférences et contraintes ne sont pas identiques dans une métropole dense, une zone rurale ou un territoire industriel. Une politique locale peut mieux cibler le problème et son calendrier.", sources: ["oecd"] },
      { title: "Expérimentation et apprentissage.", text: " Plusieurs régions peuvent tester des solutions différentes ; une évaluation permet ensuite d’étendre ce qui fonctionne plutôt que d’imposer d’emblée une réforme nationale." },
      { title: "Responsabilité plus lisible.", text: " Si la région dispose à la fois de la compétence et des ressources correspondantes, les électeurs peuvent plus facilement relier une décision à ses résultats.", sources: ["handbook"] },
      { title: "Préserver une identité régionale.", text: " Des compétences sur la langue, la culture, l’éducation patrimoniale ou l’aménagement peuvent mieux transmettre une histoire et des pratiques locales menacées d’uniformisation. La Constitution reconnaît d’ailleurs les langues régionales comme appartenant au patrimoine de la France, et le Conseil de l’Europe présente leur protection comme une contribution à la diversité culturelle.", sources: ["heritage", "charter"] }
    ],
    reserve: [
      { title: "Égalité des droits et des chances.", text: " Des normes sociales, scolaires ou environnementales très différentes peuvent faire dépendre la protection d’une personne de son lieu de résidence. Les régions riches disposent aussi de moyens plus importants." },
      { title: "Externalités et concurrence réglementaire.", text: " Pollution, transports, logement ou fiscalité dépassent les frontières régionales. Une région peut transférer un coût à ses voisines ou abaisser une norme pour attirer une activité.", sources: ["transport"] },
      { title: "Complexité et coûts de conformité.", text: " Des entreprises ou citoyens actifs dans plusieurs régions doivent suivre des règles multiples. Les doublons administratifs peuvent annuler une partie du gain d’adaptation." },
      { title: "Affaiblir la référence nationale commune.", text: " Si des droits, institutions ou symboles divergent fortement, l’appartenance régionale peut prendre davantage de place au détriment d’une identité politique nationale partagée. Ce risque n’est pas automatique : identités régionale et nationale peuvent se renforcer ou coexister. Il explique néanmoins pourquoi le droit constitutionnel français met en regard patrimoine régional, indivisibilité de la République, égalité devant la loi et unicité du peuple français.", sources: ["heritage", "constitutional"] }
    ],
    factors: [
      { title: "Planchers nationaux", text: "Des droits minimaux communs peuvent coexister avec une adaptation au-dessus de ce socle." },
      { title: "Péréquation", text: "Les transferts financiers limitent l’écart de capacité entre territoires riches et pauvres." },
      { title: "Échelle du problème", text: "La compétence devrait correspondre au périmètre des effets, avec coopération si ceux-ci débordent." },
      { title: "Évaluation", text: "Objectifs, durée expérimentale et critères de généralisation doivent être définis avant le test." }
    ],
    decisionPrompt: "Pour répondre, demandez-vous quelles règles peuvent varier sans rompre un socle national d’égalité, et quelles politiques produisent des effets au-delà d’une région. Une position nuancée peut soutenir l’expérimentation locale tout en conservant des normes nationales.",
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
    metaDescription: "Comparer prévention, réinsertion et durcissement des sanctions : dissuasion, récidive, neutralisation, victimes et efficacité des programmes.",
    introduction: "La question porte sur l’euro supplémentaire de politique pénale, pas sur la suppression de toute sanction. Prévenir agit avant l’infraction, réinsérer vise la récidive, tandis que la sanction poursuit aussi la dissuasion, la neutralisation, la rétribution et la reconnaissance du tort subi.",
    balance: [
      "La recherche distingue la certitude d’être sanctionné, la rapidité de la réponse et sa sévérité. Le National Institute of Justice américain résume que la certitude a généralement un effet dissuasif plus important que l’alourdissement de peines déjà sévères.",
      "Les programmes de prévention et de réinsertion sont hétérogènes : certains réduisent la délinquance ou la récidive, d’autres sont inefficaces. La bonne comparaison oppose donc des interventions précises, ciblées et évaluées, plutôt que des catégories abstraites."
    ],
    favour: [
      { title: "Agir avant les victimes.", text: " Prévention situationnelle, soutien précoce, traitement des addictions ou présence policière ciblée peuvent réduire les occasions et facteurs de passage à l’acte avant qu’un dommage ne survienne.", sources: ["whatworks"] },
      { title: "Réduire la récidive.", text: " Formation, soins, logement et suivi peuvent améliorer la sortie de détention lorsque le programme correspond au risque et aux besoins. Une peine plus longue sans accompagnement ne prépare pas nécessairement le retour dans la société." },
      { title: "Mieux utiliser la dissuasion.", text: " Accroître la probabilité d’une réponse crédible et rapide peut être plus efficace que relever encore la peine maximale.", sources: ["nij"] }
    ],
    reserve: [
      { title: "Neutralisation immédiate.", text: " L’incarcération empêche certaines infractions pendant la détention. Pour des auteurs dangereux, une mesure de sûreté peut protéger à court terme même si son effet de réinsertion est faible.", sources: ["nij"] },
      { title: "Fonctions morales et institutionnelles de la peine.", text: " La sanction exprime la gravité de l’acte, reconnaît les victimes et peut maintenir la confiance dans la règle commune. Une réponse perçue comme trop faible peut réduire la légitimité du système." },
      { title: "Programmes inégaux et résultats différés.", text: " Une intervention mal ciblée peut coûter cher sans réduire la délinquance. Les bénéfices de l’éducation ou de la prévention précoce sont parfois longs à apparaître, alors que le risque immédiat doit être géré.", sources: ["whatworks"] }
    ],
    factors: [
      { title: "Type d’infraction", text: "Violence grave, délinquance opportuniste et récidive liée à une addiction n’appellent pas le même dosage." },
      { title: "Certitude et rapidité", text: "Une peine théoriquement lourde mais rarement appliquée diffère d’une réponse certaine et proportionnée." },
      { title: "Qualité du programme", text: "Ciblage selon le risque, personnel formé, continuité et mesure de la récidive sont déterminants." },
      { title: "Horizon", text: "Protection immédiate, récidive à deux ans et prévention sur une génération sont des objectifs distincts." }
    ],
    decisionPrompt: "Votre réponse dépend du poids que vous accordez à la protection immédiate, à la proportionnalité de la peine et à la réduction durable des infractions. On peut privilégier prévention et réinsertion tout en conservant des sanctions certaines pour les actes graves.",
    sources: [
      { id: "nij", title: "Five Things About Deterrence", publisher: "National Institute of Justice — U.S. Department of Justice", year: "2016", url: "https://nij.ojp.gov/topics/articles/five-things-about-deterrence" },
      { id: "whatworks", title: "Preventing Crime: What Works, What Doesn't, What's Promising", publisher: "U.S. Department of Justice", year: "1997", url: "https://www.ojp.gov/pdffiles/171676.pdf" }
    ]
  },

  32: {
    theme: "Économie",
    shortTitle: "TVA sociale et cotisations",
    question: "Une partie des cotisations sociales sur les salaires devrait être remplacée par une hausse de la TVA afin d’augmenter les salaires nets et de réduire le coût du travail, même si cela augmente le prix des biens et services consommés",
    metaDescription: "Enjeux de la TVA sociale : coût du travail, salaire net, compétitivité, emploi, prix et redistribution entre salariés, retraités et consommateurs.",
    introduction: "Ce transfert, parfois appelé dévaluation fiscale, baisse un prélèvement sur le travail et augmente un prélèvement sur la consommation. Son effet diffère selon que la baisse porte sur les cotisations employeur ou salarié, selon la réaction des salaires et marges, et selon la compensation des ménages.",
    balance: [
      "Une baisse des cotisations employeur vise d’abord le coût du travail ; une baisse des cotisations salarié vise plus directement le salaire net. À moyen terme, la négociation salariale et la concurrence peuvent redistribuer ces gains entre employés, employeurs et prix.",
      "La TVA s’applique aux importations et non aux exportations, tandis que les cotisations pèsent sur la production nationale. Le transfert peut donc améliorer temporairement la compétitivité-prix, mais la hausse des prix intérieurs et l’ajustement des salaires finissent par en réduire une partie.",
      "Les ménages ne réagissent pas tous de la même façon : certains consomment le supplément de revenu net, d’autres épargnent, et ceux qui ne bénéficient pas de la baisse de cotisations peuvent réduire leur consommation. Dans la simulation française de la Commission européenne, la consommation privée baisse d’abord, surtout chez les ménages contraints en liquidités, avant de se redresser."
    ],
    favour: [
      { title: "Réduire le coût du travail.", text: " Si la baisse vise les cotisations employeur et n’est pas absorbée par les salaires ou les marges, elle peut soutenir les embauches, surtout pour les emplois sensibles au coût.", sources: ["france"] },
      { title: "Élargir l’assiette du financement.", text: " La consommation financée par retraites, revenus du capital ou importations contribue davantage, ce qui réduit la concentration du financement social sur les salaires." },
      { title: "Compétitivité et relais de la demande étrangère.", text: " Sans dévaluation monétaire nationale, le transfert peut réduire le prix relatif des exportations. Une hausse des achats étrangers de biens et services français peut alors compenser une partie du recul de la consommation nationale. La simulation de la Commission pour la France trouve davantage d’exportations et une amélioration temporaire du solde commercial, mais cet effet est modéré, dépend de la demande étrangère et n’assure pas une compensation intégrale.", sources: ["devaluation", "france"] },
      { title: "Épargne et financement, sous conditions.", text: " Si une partie du revenu supplémentaire est épargnée, elle peut financer entreprises, logement ou administrations publiques. Lorsqu’elle augmente effectivement la demande d’obligations d’État, elle peut faciliter leur placement et, toutes choses égales par ailleurs, réduire le rendement exigé. Mais l’épargne ne devient pas automatiquement de la dette française : elle se répartit entre dépôts, assurance-vie, fonds, actions, immobilier et titres français ou étrangers.", sources: ["savings"] }
    ],
    reserve: [
      { title: "Baisse immédiate du pouvoir d’achat.", text: " Une hausse de TVA augmente le prix TTC si elle est répercutée. Les retraités, chômeurs et ménages dont le revenu ne bénéficie pas de la baisse de cotisations sont particulièrement exposés.", sources: ["equity"] },
      { title: "Effet distributif ambigu.", text: " La TVA représente souvent une part plus forte du revenu des ménages modestes. Des transferts ciblés peuvent corriger cet effet, mais leur financement réduit une partie du gain budgétaire et macroéconomique.", sources: ["equity", "labour"] },
      { title: "Incidence incertaine.", text: " Rien ne garantit simultanément une hausse nette des salaires et une baisse complète du coût employeur. Le partage dépend du marché du travail, de la négociation salariale, de la concurrence et du comportement des marges.", sources: ["france"] },
      { title: "Moins de consommation peut freiner l’activité.", text: " Si beaucoup de ménages épargnent le gain de salaire net, ou si la hausse de TVA réduit le revenu réel des autres, la demande adressée aux entreprises françaises peut ralentir à court terme. Dire que « tout le monde épargnera » serait toutefois excessif : les comportements diffèrent fortement selon le revenu et les contraintes de liquidité, et une partie de l’épargne peut soutenir l’investissement plutôt que rester inactive.", sources: ["france", "savings"] }
    ],
    factors: [
      { title: "Cotisation baissée", text: "Employeur et salarié n’ont pas le même effet immédiat, même si l’incidence peut évoluer ensuite." },
      { title: "Taux de TVA", text: "Assiette, taux réduit ou normal et biens exonérés déterminent qui supporte la hausse." },
      { title: "Compensation", text: "Indexation ou aide forfaitaire protège les revenus modestes, mais doit éviter d’annuler tout signal." },
      { title: "Boucle prix–salaires", text: "La durée du gain de compétitivité dépend de la répercussion dans les prix et les rémunérations." },
      { title: "Usage du revenu net", text: "La part consommée, épargnée ou investie détermine l’effet sur la demande et le financement." }
    ],
    decisionPrompt: "Pour vous positionner, précisez si votre priorité est l’emploi et la compétitivité, le salaire net ou la protection du pouvoir d’achat des non-salariés. Le jugement dépend fortement de la cotisation supprimée et du mécanisme de compensation.",
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
    metaDescription: "Enjeux d’un transfert de compétences à l’Union européenne : échelle, puissance collective, subsidiarité, souveraineté et responsabilité démocratique.",
    introduction: "Une compétence européenne peut produire une action commune plus puissante, mais elle réduit la possibilité pour la France de décider seule. Le mot « compétences » recouvre des domaines très différents : défense, énergie, fiscalité, dette, industrie ou politique étrangère n’impliquent pas les mêmes bénéfices ni les mêmes contrôles.",
    balance: [
      "Les traités reposent sur l’attribution des compétences par les États et, hors compétences exclusives, sur la subsidiarité : l’Union ne devrait agir que lorsque l’objectif est mieux atteint à l’échelle européenne. Le débat consiste donc à appliquer ce test domaine par domaine.",
      "Une décision commune peut mutualiser des coûts fixes, éviter des politiques nationales contradictoires et peser face à de grandes puissances. Elle peut aussi éloigner la décision des électeurs, imposer un compromis mal adapté et rendre une erreur plus difficile à corriger localement."
    ],
    favour: [
      { title: "Échelle et pouvoir de négociation.", text: " Un marché et un budget communs peuvent renforcer la position dans les négociations commerciales, les normes technologiques, l’énergie ou les achats de défense." },
      { title: "Problèmes transfrontaliers.", text: " Climat, réseaux électriques, migrations, chaînes de valeur et sécurité dépassent les frontières. Une compétence commune limite les passagers clandestins et les doublons." },
      { title: "Approfondir le marché unique.", text: " Des règles et infrastructures communes réduisent la fragmentation. Le rapport Letta présente cette intégration comme un levier de croissance, d’innovation et de résilience.", sources: ["letta"] }
    ],
    reserve: [
      { title: "Hétérogénéité des préférences.", text: " Les États n’ont pas les mêmes structures économiques, mix énergétiques, menaces ou choix sociaux. Une règle uniforme peut créer des gagnants et perdants durables." },
      { title: "Responsabilité démocratique plus diffuse.", text: " Entre Commission, Conseil, Parlement et administrations nationales, il peut être difficile d’identifier qui décide et qui peut être sanctionné électoralement." },
      { title: "Perte d’option nationale.", text: " Une compétence transférée limite le veto et l’expérimentation française. Si la politique commune est inadaptée, la correction exige une coalition de pays et peut être lente.", sources: ["treaty"] }
    ],
    factors: [
      { title: "Compétence précise", text: "Un transfert en achats de défense ne vaut pas transfert de la décision d’engagement militaire." },
      { title: "Règle de vote", text: "Unanimité, majorité qualifiée et codécision distribuent très différemment le pouvoir." },
      { title: "Contrôles", text: "Rôle des parlements, Cour de justice, transparence et capacité d’évaluation conditionnent la légitimité." },
      { title: "Solidarité", text: "Mutualiser une politique suppose souvent de préciser les transferts financiers et le partage des risques." }
    ],
    decisionPrompt: "La formulation invite à un jugement global, mais une réponse éclairée peut être conditionnelle : quelles compétences, avec quelle règle de vote et quel contrôle démocratique ? L’arbitrage oppose surtout capacité d’action collective et autonomie nationale.",
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
    metaDescription: "Bénéfices et coûts de l’euro pour la France : risque de change, intégration, politique monétaire commune et ajustement aux chocs asymétriques.",
    introduction: "Évaluer l’euro suppose un scénario de comparaison : que seraient devenus le franc, ses taux d’intérêt, son taux de change et les politiques françaises ? Ce contrefactuel n’est pas observable. La question invite donc à peser des bénéfices d’intégration contre une perte d’autonomie monétaire et de change.",
    balance: [
      "La monnaie unique élimine le risque de change entre membres et réduit certains coûts de transaction. Elle associe la France à une banque centrale commune et à un vaste marché financier. En contrepartie, la France ne fixe plus seule son taux directeur et ne peut dévaluer sa monnaie par rapport à ses partenaires de la zone.",
      "Un choc commun peut être traité par la BCE. Un choc propre à la France est plus difficile : l’ajustement passe davantage par les salaires, les prix, l’emploi, le budget, la mobilité ou des transferts européens."
    ],
    favour: [
      { title: "Fin du risque de change interne.", text: " Entre pays de la zone, entreprises et investisseurs n’ont plus à couvrir les fluctuations des anciennes monnaies. La recherche de la BCE identifie cet effet comme le canal immédiat de l’intégration financière.", sources: ["integration"] },
      { title: "Prix comparables et échanges facilités.", text: " Une unité de compte commune simplifie contrats, voyages et chaînes de valeur. Elle réduit certaines frictions, sans supprimer les différences de réglementation ou de productivité." },
      { title: "Taille et crédibilité collective.", text: " Une grande monnaie peut offrir des marchés plus profonds, une capacité d’intervention commune et un rôle international plus important que celui d’une monnaie nationale de taille moyenne.", sources: ["bdf"] }
    ],
    reserve: [
      { title: "Une politique monétaire moyenne.", text: " Le taux de la BCE répond à l’inflation et à l’activité de la zone entière. Il peut être trop restrictif ou trop accommodant pour la conjoncture française." },
      { title: "Pas de dévaluation nationale.", text: " En cas de perte de compétitivité propre à la France, le taux de change avec l’Allemagne, l’Espagne ou l’Italie ne peut plus absorber le choc. L’ajustement interne peut être plus lent et socialement coûteux.", sources: ["asymmetry"] },
      { title: "Interdépendance et discipline institutionnelle.", text: " Les crises bancaires ou de dette peuvent se transmettre entre membres. Les règles communes limitent certaines marges budgétaires nationales, tandis que la solidarité reste négociée politiquement." }
    ],
    factors: [
      { title: "Nature du choc", text: "Un choc énergétique commun et une crise propre à une industrie française appellent des réponses différentes." },
      { title: "Convergence", text: "Productivité, inflation, finances publiques et cycles proches rendent la politique commune plus adaptée." },
      { title: "Outils compensateurs", text: "Budget national, fonds européens, union bancaire et mobilité peuvent absorber une partie des chocs." },
      { title: "Contrefactuel", text: "Un franc indépendant donnerait un levier de change, mais aussi un risque de volatilité et de prime de risque." }
    ],
    decisionPrompt: "Votre réponse dépend du poids accordé à la stabilité et à l’intégration, par rapport à la capacité nationale d’ajuster taux et change. Aucun bilan sérieux ne peut attribuer à l’euro chaque évolution française sans comparer un scénario alternatif crédible.",
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
    metaDescription: "Enjeux de la suppression de l’IFI : rendement, progressivité, investissement immobilier, actifs illiquides et évaluation de la réforme de l’ISF.",
    introduction: "L’IFI porte sur le patrimoine immobilier net taxable au-delà de 1,3 million d’euros, avec exonérations et déduction de certaines dettes. Le supprimer laisserait subsister la taxe foncière, la fiscalité des loyers et des plus-values, les droits de mutation et de succession : la question vise donc une surtaxe patrimoniale spécifique, pas toute fiscalité immobilière.",
    balance: [
      "Le débat oppose neutralité de l’investissement et contribution accrue des patrimoines élevés. L’immobilier est un actif parfois illiquide mais aussi une base difficile à déplacer à l’étranger. Sa valeur peut refléter l’effort du propriétaire, la rareté du foncier et les infrastructures collectives.",
      "La transformation de l’ISF en IFI en 2018 a eu lieu avec d’autres réformes, notamment le prélèvement forfaitaire unique. France Stratégie avertit qu’il est difficile d’isoler proprement leurs effets macroéconomiques et comportementaux."
    ],
    favour: [
      { title: "Réduire une distorsion entre actifs.", text: " Taxer spécifiquement l’immobilier peut orienter l’épargne vers des actifs financiers indépendamment de leur rendement économique ou du besoin de logement." },
      { title: "Protéger les patrimoines peu liquides.", text: " Un propriétaire peut dépasser le seuil du fait de la hausse locale des prix sans disposer d’un revenu courant élevé. Il doit alors financer l’impôt autrement que par le rendement du bien." },
      { title: "Simplifier valorisation et détention.", text: " Estimer chaque année des biens non cotés, répartir dettes et actifs de sociétés immobilières et appliquer les exonérations crée des coûts et des litiges.", sources: ["rules"] }
    ],
    reserve: [
      { title: "Progressivité et recettes.", text: " L’IFI concentre l’effort sur des ménages au patrimoine immobilier net élevé. Sa suppression réduit les recettes ou oblige à financer ailleurs la baisse, avec une incidence distributive différente." },
      { title: "Base peu mobile.", text: " Contrairement à certains actifs financiers, le foncier français ne peut être transféré à l’étranger. Il constitue donc une assiette plus difficile à éroder et peut capter une partie des rentes de localisation." },
      { title: "Effets économiques non démontrés automatiquement.", text: " Les évaluations des réformes de 2018 ne permettent pas de conclure qu’une baisse de fiscalité patrimoniale se transforme intégralement en investissement productif, emploi ou croissance.", sources: ["evaluation"] }
    ],
    factors: [
      { title: "Résidence ou investissement", text: "L’usage, le rendement et la capacité de paiement diffèrent fortement." },
      { title: "Dettes et plafonnement", text: "Le patrimoine net, les règles de déduction et le plafond par rapport au revenu modifient la charge." },
      { title: "Fiscalité de remplacement", text: "Supprimer l’IFI sans préciser la recette remplacée ne donne pas l’effet budgétaire complet." },
      { title: "Offre de logement", text: "L’effet dépend de la construction, du foncier, des loyers et de la transmission aux prix." }
    ],
    decisionPrompt: "Pour répondre, distinguez l’objectif de rendement, la progressivité et l’effet sur l’allocation de l’épargne. Vous pouvez aussi vous demander si une réforme de l’assiette ou des règles de liquidité répondrait mieux au problème qu’une suppression totale.",
    sources: [
      { id: "rules", title: "Impôt sur la fortune immobilière : personnes et biens concernés", publisher: "Service-Public.fr", year: "mise à jour continue", url: "https://www.service-public.fr/particuliers/vosdroits/F563" },
      { id: "evaluation", title: "Comité d’évaluation des réformes de la fiscalité du capital — rapport final", publisher: "France Stratégie", year: "2023", url: "https://www.strategie.gouv.fr/publications/comite-devaluation-reformes-de-fiscalite-capital-rapport-final" }
    ]
  },

  47: {
    theme: "Retraites",
    shortTitle: "Répartition et capitalisation",
    question: "Les retraites devraient être progressivement réformées vers un système combinant répartition et capitalisation, même si cela implique une période de transition coûteuse.",
    metaDescription: "Enjeux d’un système de retraite mixte : diversification, risque démographique et financier, frais, inégalités et double coût de transition.",
    introduction: "En répartition, les cotisations des actifs financent les pensions versées au même moment ; en capitalisation, chacun accumule directement ou collectivement des actifs qui financeront plus tard une partie de sa retraite. Un système mixte peut réduire la dépendance immédiate aux cotisations des futurs travailleurs, mais le passage crée un problème : les actifs doivent continuer à payer les retraités tout en constituant leur propre épargne.",
    balance: [
      "La répartition est directement exposée au rapport entre cotisants et retraités : si les pensions sont versées plus longtemps et que les actifs sont proportionnellement moins nombreux, l’équilibre exige davantage d’emploi ou de productivité, des cotisations plus élevées, un départ plus tardif, des pensions moindres ou d’autres recettes. La capitalisation dépend plutôt des rendements, des frais, de l’inflation et du moment de liquidation. Les deux reposent finalement sur la production future, mais distribuent différemment les risques et les droits.",
      "Le coût de transition n’est pas une simple dépense d’installation : une partie des cotisations cesse d’être disponible pour les pensions existantes et doit être remplacée par impôts, dette, baisse de prestations ou cotisations supplémentaires."
    ],
    favour: [
      { title: "Alléger la dépendance directe au nombre de cotisants.", text: " Dans une part capitalisée, une fraction de la pension est financée par l’épargne accumulée pendant la carrière et ses rendements, plutôt que seulement par les cotisations des travailleurs présents au moment du départ. Des actifs diversifiés, notamment à l’étranger, peuvent donc amortir la pression créée par davantage de retraités servis plus longtemps et proportionnellement moins d’actifs en France. Cela réduit une dépendance ; cela ne supprime ni le vieillissement ni le risque financier.", sources: ["demography", "longevity", "mixed"] },
      { title: "Accumuler une épargne de long terme.", text: " Des fonds bien gouvernés peuvent financer des investissements de long terme et donner aux assurés des droits explicites sur des actifs." },
      { title: "Partager les sources de pension.", text: " Un socle solidaire par répartition et un complément capitalisé peuvent combiner redistribution et épargne, si les frais et risques sont encadrés." }
    ],
    reserve: [
      { title: "Double financement pendant la transition.", text: " Les engagements envers les retraités de l’ancien système demeurent alors qu’une partie des contributions est placée. L’OCDE décrit ce coût budgétaire comme un obstacle majeur.", sources: ["transition"] },
      { title: "Risque financier et frais.", text: " Rendements négatifs, inflation, mauvais calendrier de départ, défaut de diversification ou frais élevés peuvent réduire fortement la pension. La valeur des actifs ne garantit pas à elle seule un revenu adéquat.", sources: ["costs"] },
      { title: "Inégalités de capacité d’épargne.", text: " Bas salaires, chômage, temps partiel et interruptions pour aidance conduisent à accumuler moins. Sans mécanisme de solidarité, la capitalisation reproduit ou amplifie les écarts de carrière." },
      { title: "La capitalisation ne fait pas disparaître la contrainte démographique.", text: " Si chacun vit plus longtemps, l’épargne doit elle aussi financer davantage d’années : il faut cotiser plus, partir plus tard, obtenir de meilleurs rendements ou accepter une rente annuelle moindre. Au moment où les retraités vendent leurs actifs pour consommer, leurs revenus restent en outre une créance sur la production future, nationale ou étrangère. L’OCDE souligne que le vieillissement pèse sur les dispositifs financés comme sur la répartition, même si les canaux diffèrent.", sources: ["longevity"] }
    ],
    factors: [
      { title: "Part capitalisée", text: "Un complément limité n’a ni le même coût ni le même risque qu’un basculement principal." },
      { title: "Financement transitoire", text: "Impôt, dette, cotisation ou baisse de pension distribuent le coût entre générations." },
      { title: "Gouvernance", text: "Diversification, frais plafonnés, actifs séparés et contrôle fiduciaire protègent les épargnants." },
      { title: "Solidarité", text: "Crédits pour chômage, maladie, enfants et minimum de pension corrigent les carrières incomplètes." }
    ],
    decisionPrompt: "Votre réponse doit intégrer à la fois le régime de croisière et la génération qui paie la transition. Le choix central est de savoir si la diversification attendue justifie ce coût, et quelles garanties collectives encadrent le risque financier.",
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
    metaDescription: "Enjeux du conditionnement des prestations à l’emploi et aux cotisations : assurance, réciprocité, incitations, couverture et carrières interrompues.",
    introduction: "Toutes les prestations n’ont pas la même logique. L’assurance chômage ou la retraite contributive remplace un revenu après cotisation ; les minima sociaux, prestations familiales ou aides liées au handicap relèvent davantage de la solidarité et du besoin. Un conditionnement uniforme déplacerait cette frontière.",
    balance: [
      "Lier davantage le droit à la contribution renforce la logique d’assurance et de réciprocité. Mais le marché du travail n’est pas toujours choisi : crise, handicap, aidance, études, discrimination ou emplois informels peuvent interrompre la carrière. Une condition stricte peut alors exclure précisément les personnes les plus exposées.",
      "Les normes de l’OIT reconnaissent à la fois des régimes contributifs, dont les droits peuvent dépendre de l’historique de cotisation, et des protections non contributives destinées à garantir un socle."
    ],
    favour: [
      { title: "Réciprocité et légitimité.", text: " Un lien clair entre contribution et droit peut renforcer l’acceptation du financement collectif et reconnaître les carrières longues." },
      { title: "Incitations à l’activité déclarée.", text: " Si le travail ouvre des droits futurs, il peut accroître l’intérêt d’entrer ou rester dans l’emploi formel, sous réserve que des emplois soient disponibles." },
      { title: "Ciblage budgétaire.", text: " Concentrer les prestations les plus généreuses sur les cotisants peut limiter le coût ou permettre un meilleur taux de remplacement pour ceux qui ont assuré le risque." }
    ],
    reserve: [
      { title: "Exclusion des carrières fragiles.", text: " Jeunes, travailleurs précaires, aidants, personnes malades ou victimes d’un chômage local cotisent moins sans que cela reflète un refus de participer." },
      { title: "Filet de sécurité insuffisant.", text: " Les mécanismes non contributifs servent à couvrir ceux qui ne peuvent pas atteindre les conditions d’assurance. L’OIT les présente comme essentiels pour combler les lacunes de couverture.", sources: ["extension", "floors"] },
      { title: "Effets de seuil et complexité.", text: " Historique à reconstituer, sanctions, périodes assimilées et contrôles augmentent les coûts administratifs. Une perte brutale de droit peut aussi rendre la reprise d’un petit emploi peu attractive." }
    ],
    factors: [
      { title: "Prestation concernée", text: "Remplacement d’un salaire, soutien aux enfants, handicap et minimum vital répondent à des objectifs différents." },
      { title: "Périodes assimilées", text: "Maladie, maternité, aidance, formation et chômage peuvent compter comme participation." },
      { title: "Force du lien", text: "Un montant progressif selon les cotisations diffère d’une condition d’accès tout ou rien." },
      { title: "Emploi disponible", text: "Conditionner n’a pas la même portée en plein emploi et lors d’un choc économique régional." }
    ],
    decisionPrompt: "Distinguez le socle de solidarité qui devrait rester accessible et la part assurantielle qui peut dépendre de la contribution. Votre réponse peut être favorable à un lien renforcé sans accepter l’exclusion totale de ceux dont la carrière est incomplète.",
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
    metaDescription: "Enjeux des conditions attachées aux aides publiques : dividendes, rémunérations, remboursement, aléa moral et financement des entreprises.",
    introduction: "L’objectif est d’éviter qu’un soutien destiné à préserver l’activité finance indirectement les actionnaires ou dirigeants. Mais « aide » peut désigner une subvention, un prêt, une garantie ou une prise de participation : le remboursement, le risque du contribuable et les conditions pertinentes ne sont pas identiques.",
    balance: [
      "Une interdiction temporaire de dividendes conserve des liquidités dans l’entreprise et signale que les bénéficiaires privés partagent l’effort public. Elle peut aussi rendre le capital plus coûteux et retarder le retour aux financements privés.",
      "L’Union européenne a déjà appliqué des restrictions de dividendes, rachats d’actions et bonus à certaines recapitalisations, notamment pour Air France. Ce précédent montre que la mesure est praticable, non qu’elle convient à tout dispositif d’aide.",
      "Le cas Carrefour illustre le débat sans permettre de conclure à un détournement comptable. Lors d’une audition au Sénat, le rapporteur a estimé qu’entre 2013 et 2018 le groupe avait cumulé 2,033 milliards d’euros de CICE et d’allègements de cotisations, 3,656 milliards de bénéfices nets et 2,865 milliards de dividendes ; il a précisé que certains montants de CICE étaient estimés. En 2024, Carrefour a publié 2,213 milliards d’euros de résultat opérationnel courant et 705 millions de rachats d’actions. Ces flux coexistent, mais l’argent étant fongible, on ne peut pas attribuer directement un euro d’allègement à un euro de dividende."
    ],
    favour: [
      { title: "Protéger l’objet de l’aide.", text: " Les ressources et la trésorerie restent disponibles pour l’emploi, l’investissement, les fournisseurs et le remboursement plutôt que d’être distribuées." },
      { title: "Limiter l’aléa moral.", text: " Actionnaires et dirigeants ne doivent pas conserver tout le gain privé après transfert d’une partie du risque au contribuable. La condition peut décourager les demandes opportunistes." },
      { title: "Légitimité et précédent européen.", text: " La Commission a assorti l’aide à Air France d’interdictions de dividendes et de plafonds sur les rémunérations variables jusqu’à certains seuils de remboursement.", sources: ["airfrance"] },
      { title: "Entreprises bénéficiaires pourtant rentables.", text: " Le cas documenté de Carrefour montre qu’aides au sens large, bénéfices et distributions aux actionnaires peuvent exister sur une même période. Pour les défenseurs d’une condition, une entreprise rentable qui reçoit un soutien public devrait d’abord démontrer l’effet sur l’emploi ou l’investissement avant de distribuer. Les chiffres ne prouvent toutefois pas, à eux seuls, que l’aide a servi à payer les actionnaires.", sources: ["senate", "carrefour"] }
    ],
    reserve: [
      { title: "Coût du capital et investissement.", text: " Une interdiction très longue ou imprévisible peut décourager les investisseurs futurs. Certaines entreprises ont besoin d’accès rapide aux marchés pour financer leur reprise." },
      { title: "Aides de nature différente.", text: " Une garantie facturée, une recapitalisation, une subvention ciblée et un allègement général de cotisations ne justifient pas automatiquement la même contrainte. Le CICE et les exonérations cités pour Carrefour sont des dispositifs fiscaux et sociaux au sens large, pas des prêts affectés et remboursables : la formule « jusqu’au remboursement » ne peut donc pas leur être appliquée telle quelle.", sources: ["senate", "definition"] },
      { title: "Contournement et effets de périmètre.", text: " Dividendes intragroupe, dette, rachats, honoraires ou filiales peuvent déplacer la distribution. Une règle simple exige donc un périmètre consolidé et un contrôle, sinon elle pénalise les acteurs transparents." }
    ],
    factors: [
      { title: "Instrument", text: "Prêt, garantie, subvention et capital exposent différemment le contribuable." },
      { title: "Seuil et durée", text: "La condition peut décroître avec le remboursement plutôt que disparaître à une date arbitraire." },
      { title: "Périmètre", text: "Groupe consolidé, filiales, rachats d’actions et transactions liées doivent être définis." },
      { title: "Gouvernance", text: "Clawback, représentation publique ou objectifs vérifiables peuvent compléter une interdiction brute." },
      { title: "Rentabilité et distributions", text: "Il faut distinguer résultat net, trésorerie, dividendes et rachats, puis vérifier la même période et le même périmètre." }
    ],
    decisionPrompt: "Votre réponse dépend du niveau de risque pris par le contribuable et du type d’aide. Une condition proportionnée et temporaire protège les fonds publics ; une règle uniforme peut, elle, ralentir inutilement le financement de la reprise.",
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
    metaDescription: "Enjeux d’une taxe carbone compensée : baisse des émissions, signal-prix, pouvoir d’achat, ménages ruraux, ciblage et recyclage des recettes.",
    introduction: "Une taxe carbone renchérit les biens selon leurs émissions pour inciter ménages et entreprises à réduire, substituer ou investir. Une aide ciblée vise à dissocier le signal écologique du niveau de vie : rendre du revenu sans rendre le carbone artificiellement bon marché.",
    balance: [
      "Le prix carbone peut réduire les émissions au moindre coût en laissant chacun choisir son adaptation. Mais à court terme, un ménage dépendant d’une voiture ou d’un logement mal isolé ne peut pas toujours changer d’équipement. La charge dépend donc autant du revenu que du territoire, du chauffage, de la composition familiale et de l’accès aux alternatives.",
      "Le recyclage des recettes est décisif. Une somme forfaitaire ou ciblée peut rendre la réforme progressive tout en conservant l’intérêt de consommer moins de carbone. Une baisse du prix du carburant, elle, protège le budget mais affaiblit directement le signal."
    ],
    favour: [
      { title: "Signal large et technologiquement neutre.", text: " Chaque tonne évitée a une valeur ; entreprises et ménages choisissent les réductions les moins coûteuses plutôt qu’une liste administrative unique." },
      { title: "Recettes pour corriger l’impact.", text: " Le produit peut financer un versement aux ménages modestes, les transports ou la rénovation. Les modèles de l’OCDE montrent que le mode de recyclage modifie fortement l’effet distributif.", sources: ["recycling"] },
      { title: "Prévisibilité de l’investissement.", text: " Une trajectoire annoncée rend les équipements sobres plus rentables et évite des alternances de taxe puis de subvention qui brouillent le calcul." }
    ],
    reserve: [
      { title: "Charge régressive et territoriale.", text: " Les dépenses directes de carburant et chauffage peuvent peser proportionnellement davantage sur les bas revenus. L’OCDE constate aussi une forte hétérogénéité entre ménages de même revenu.", sources: ["burden"] },
      { title: "Compensation imparfaite.", text: " Les données de revenu arrivent avec retard et captent mal distance domicile-travail, logement ou handicap. Certains perdants peuvent ne pas recevoir assez, tandis que des aides mal calibrées coûtent cher." },
      { title: "Compétitivité et prix.", text: " Les entreprises exposées peuvent répercuter la taxe, perdre des parts de marché ou déplacer la production si les importations ne supportent pas un coût comparable. Des ajustements ciblés peuvent être nécessaires." }
    ],
    factors: [
      { title: "Alternatives disponibles", text: "Transport collectif, rénovation, réseau électrique et offre de véhicules conditionnent la capacité de réaction." },
      { title: "Forme de l’aide", text: "Versement forfaitaire, ciblage par revenu et aide à l’investissement n’agissent pas au même moment." },
      { title: "Trajectoire du prix", text: "Progressivité, visibilité et clause de réexamen réduisent les chocs et préservent l’incitation." },
      { title: "Mesure complète", text: "Il faut suivre émissions, revenu disponible, inflation, fuites de carbone et non-recours." }
    ],
    decisionPrompt: "La question demande si une politique efficace sur les émissions doit être conservée malgré des perdants, dès lors qu’ils sont compensés. Votre jugement dépend de la qualité réelle de cette compensation et de l’existence d’alternatives, pas seulement du principe de la taxe.",
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
    metaDescription: "Enjeux de la proportionnelle intégrale : fidélité des sièges, pluralisme, coalitions, stabilité, responsabilité et paramètres du scrutin.",
    introduction: "La proportionnelle cherche à rapprocher la part des sièges de la part des voix. « Intégrale » suppose peu ou pas de composante majoritaire, mais le résultat dépend encore des circonscriptions, du seuil d’accès aux sièges, de la méthode de calcul et du type de listes.",
    balance: [
      "Le scrutin majoritaire facilite souvent une majorité identifiable mais transforme fortement les voix en sièges. La proportionnelle représente plus fidèlement les courants et rend les coalitions plus probables. Une coalition n’est pas forcément instable : constitution, discipline partisane et mécanismes de censure jouent aussi un rôle.",
      "Vie-publique résume l’arbitrage classique entre fidélité représentative et risque d’instabilité. Un rapport de l’Assemblée nationale souligne toutefois qu’il n’existe pas de relation mécanique entre proportionnelle et instabilité gouvernementale."
    ],
    favour: [
      { title: "Voix mieux converties en sièges.", text: " Moins de votes sont sans représentation et un parti nationalement significatif n’est pas écarté parce que ses voix sont dispersées.", sources: ["scrutins"] },
      { title: "Pluralisme politique.", text: " Les sensibilités minoritaires et les nouveaux partis accèdent plus facilement au Parlement, ce qui peut améliorer la correspondance entre électorat et assemblée." },
      { title: "Compromis explicite.", text: " Les coalitions obligent à négocier un programme commun et peuvent éviter qu’une majorité de sièges obtenue avec une minorité de voix gouverne seule." }
    ],
    reserve: [
      { title: "Fragmentation.", text: " Un faible seuil peut multiplier les partis et donner à une petite formation charnière un pouvoir supérieur à son poids électoral." },
      { title: "Responsabilité moins lisible.", text: " Le programme finalement appliqué est négocié après le vote. L’électeur peut avoir du mal à attribuer réussite ou échec à un parti précis." },
      { title: "Formation et durée des gouvernements.", text: " Des négociations longues, retraits de coalition ou motions de censure peuvent interrompre l’action. Mais ce risque dépend des règles institutionnelles et non de la proportionnelle seule.", sources: ["report"] }
    ],
    factors: [
      { title: "Seuil électoral", text: "Un seuil réduit la fragmentation mais exclut davantage de voix de la représentation." },
      { title: "Taille des circonscriptions", text: "Plus elles attribuent de sièges, plus le résultat est proportionnel." },
      { title: "Listes", text: "Listes ouvertes donnent plus de choix sur les candidats ; listes fermées renforcent les appareils." },
      { title: "Stabilisateurs", text: "Défiance constructive, calendrier, règles d’investiture et culture de coalition influencent la stabilité." }
    ],
    decisionPrompt: "L’arbitrage porte sur la valeur relative d’une représentation fidèle et d’une majorité directement lisible. Vous pouvez accepter les coalitions sans accepter toute proportionnelle : seuil, listes et règles de gouvernement sont une part essentielle du choix.",
    sources: [
      { id: "scrutins", title: "Quels sont les différents modes de scrutin ?", publisher: "Vie-publique.fr", year: "2026", url: "https://www.vie-publique.fr/fiches/23948-quels-sont-les-differents-modes-de-scrutin" },
      { id: "report", title: "Refaire la démocratie — rapport du groupe de travail sur l’avenir des institutions", publisher: "Assemblée nationale", year: "2015", url: "https://www.vie-publique.fr/files/rapport/pdf/154000692.pdf" }
    ]
  },

  76: {
    theme: "Santé / assurance maladie",
    shortTitle: "Remboursement intégral des soins essentiels",
    question: "L'Assurance maladie devrait rembourser intégralement les soins essentiels, quitte à réduire fortement le rôle des complémentaires santé.",
    metaDescription: "Enjeux d’un remboursement public intégral des soins essentiels : accès, simplicité, frais de gestion, dépenses publiques et rôle des complémentaires.",
    introduction: "La France combine Assurance maladie obligatoire et complémentaires, qui remboursent souvent les mêmes soins à des niveaux successifs. Le HCAAM a étudié plusieurs scénarios, dont une extension forte de la couverture publique. Le choix dépend aussi de la définition des « soins essentiels » et du devenir des garanties supplémentaires.",
    balance: [
      "Un payeur public principal peut simplifier les droits et mutualiser davantage. Il transforme cependant des primes privées — souvent payées avec participation de l’employeur — en prélèvements ou dépenses publiques, et concentre les décisions de panier et de tarif.",
      "Le HCAAM souligne la singularité française : la complémentaire est considérée comme indispensable à l’accès financier alors qu’elle rembourse largement les mêmes soins que la Sécurité sociale. Il ne conclut pas qu’un scénario unique s’impose.",
      "Dans toute assurance, certains cotisent pour des soins qu’ils n’utiliseront jamais : c’est précisément ce qui permet de payer ceux dont le risque se réalise. La question est donc de savoir à quelle échelle et pour quel panier cette solidarité doit être obligatoire, et non de faire coïncider pour chacun cotisations et remboursements."
    ],
    favour: [
      { title: "Accès selon le besoin.", text: " Un remboursement intégral du panier essentiel réduit le risque qu’une prime, un contrat insuffisant ou un reste à charge retarde les soins." },
      { title: "Simplicité et mutualisation.", text: " Une règle publique commune évite une partie des doubles décomptes, comparaisons de contrats et inégalités de couverture. Le risque est réparti sur une base plus large et plus diverse ; l’OMS considère ces pools plus aptes à redistribuer les coûts que des groupes fragmentés.", sources: ["pooling"] },
      { title: "Réduire certains frais de gestion.", text: " La Cour des comptes relève des frais élevés dans les complémentaires, dont une part importante liée à l’acquisition des contrats. Une réduction de leur rôle peut économiser une partie de ces coûts, sans les supprimer tous.", sources: ["court"] }
    ],
    reserve: [
      { title: "Hausse visible de la dépense publique.", text: " Les remboursements transférés doivent être financés par impôt ou cotisation. La réforme ne rend pas les soins gratuits à produire et peut déplacer, plutôt que supprimer, le coût." },
      { title: "Définir le panier et maîtriser la dépense.", text: " Une couverture intégrale exige des décisions sur les actes, produits, tarifs et innovations inclus. Une enveloppe publique contrainte peut conduire à des limites ou délais." },
      { title: "Des garanties collectives parfois mieux ciblées.", text: " Une entreprise ou une branche peut négocier un contrat et des options qui correspondent mieux aux besoins moyens de sa population salariée ; la participation de l’employeur et des frais de gestion plus faibles rendent aussi ces contrats attractifs. Cette population n’est toutefois pas un profil individuel : tous les salariés partagent encore des garanties qu’ils n’utiliseront pas, et un pool plus petit ou plus homogène redistribue moins largement les risques. La DREES observe l’avantage administratif du collectif, tandis que l’OMS recommande plutôt des pools larges et diversifiés pour la protection solidaire.", sources: ["collective", "employer", "pooling"] },
      { title: "Transition et choix complémentaires.", text: " Mutuelles et assureurs emploient des salariés, organisent prévention et réseaux et couvrent des options. Une réforme brutale crée des coûts de transition ; un marché supplémentaire peut subsister pour les soins hors panier." }
    ],
    factors: [
      { title: "Panier essentiel", text: "Dentaire, optique, dépassements, médicaments et prévention doivent être définis explicitement." },
      { title: "Tarifs opposables", text: "Rembourser 100 % d’un tarif public n’élimine pas un dépassement si le prix facturé reste supérieur." },
      { title: "Financement", text: "Impôt progressif, cotisation proportionnelle ou prime forfaitaire n’ont pas la même redistribution." },
      { title: "Transition", text: "Contrats collectifs, participation employeur, personnels et réserves des organismes doivent être traités." },
      { title: "Niveau de mutualisation", text: "Un grand pool protège mieux contre les gros risques ; un contrat de branche peut mieux ajuster certaines garanties moyennes." }
    ],
    decisionPrompt: "Votre réponse dépend du panier que vous jugez universel et de la façon dont vous souhaitez répartir son coût. Le débat ne porte pas seulement sur public contre privé, mais sur simplicité, solidarité, maîtrise des tarifs et espace laissé aux garanties optionnelles.",
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
    metaDescription: "Enjeux de l’autonomie scolaire pour recruter et évaluer les enseignants : cohérence d’équipe, responsabilité, équité, favoritisme et mesure de la qualité.",
    introduction: "La proposition ne transfère pas nécessairement tout le recrutement au chef d’établissement : elle lui donne une part de choix et davantage de poids dans l’évaluation. Elle oppose adaptation locale et responsabilité managériale à l’égalité statutaire, la mobilité nationale et la protection contre l’arbitraire.",
    balance: [
      "Un chef d’établissement connaît les projets, matières en tension et besoins de son équipe. Mais il dispose d’une information imparfaite sur la qualité future d’un enseignant et peut être soumis à des pressions locales. L’effet dépend donc des critères, contre-pouvoirs et moyens d’accompagnement.",
      "Les résultats internationaux montrent surtout que l’autonomie fonctionne avec des capacités locales et une responsabilité bien conçue. Les corrélations entre autonomie de recrutement et résultats ne prouvent pas, à elles seules, un effet causal transposable à la France."
    ],
    favour: [
      { title: "Meilleure adéquation au projet.", text: " L’établissement peut rechercher une compétence rare, une expérience pédagogique ou une volonté de travailler dans un collectif précis." },
      { title: "Réactivité.", text: " Un recrutement local peut pourvoir plus vite un poste difficile et limiter les affectations qui ne correspondent ni au besoin ni au souhait de l’enseignant." },
      { title: "Responsabilité et accompagnement.", text: " Si le chef répond des résultats, un rôle dans la constitution et le développement de l’équipe rend ses leviers plus cohérents. L’OCDE observe une association positive dans certains systèmes combinant autonomie et responsabilité.", sources: ["autonomy"] }
    ],
    reserve: [
      { title: "Favoritisme et dépendance hiérarchique.", text: " Des critères locaux opaques peuvent favoriser réseaux, conformité ou discrimination. Une évaluation qui influence fortement la carrière peut décourager la contradiction professionnelle." },
      { title: "Inégalités entre établissements.", text: " Les écoles favorisées sont souvent plus attractives et disposent de davantage de capacité de gestion. L’autonomie peut accentuer la concentration des enseignants expérimentés si les établissements difficiles ne reçoivent pas de moyens supplémentaires.", sources: ["equity"] },
      { title: "Qualité difficile à mesurer.", text: " Résultats d’élèves, inspection ponctuelle et satisfaction captent imparfaitement le travail. Des indicateurs à forts enjeux peuvent encourager sélection, bachotage ou évitement des classes difficiles.", sources: ["accountability"] }
    ],
    factors: [
      { title: "Part des postes", text: "Une faculté limitée et ciblée diffère d’un marché local complet." },
      { title: "Composition du jury", text: "Chef, enseignants, inspection et regard externe peuvent réduire l’arbitraire." },
      { title: "Voies de recours", text: "Critères publiés, traçabilité et appel indépendant protègent candidats et évalués." },
      { title: "Compensation territoriale", text: "Primes, formation et moyens renforcés évitent que l’autonomie ne profite qu’aux établissements attractifs." }
    ],
    decisionPrompt: "Pour répondre, pesez le gain d’adaptation locale contre le risque d’arbitraire et de polarisation entre établissements. Une autonomie limitée, contrôlée et dotée de moyens n’a pas les mêmes conséquences qu’un transfert sans garanties.",
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
    metaDescription: "Enjeux du conditionnement des fonds publics aux objectifs de mixité sociale dans le privé sous contrat : efficacité, liberté, mesure et effets territoriaux.",
    introduction: "Les établissements privés sous contrat sont financés majoritairement par des fonds publics : l’État rémunère les enseignants et les collectivités financent une partie du fonctionnement. Ces recettes viennent de l’ensemble des contribuables, y compris de ménages modestes, même si leur contribution moyenne est réduite par la progressivité et les prestations. La proposition utilise ce financement comme levier d’accès et de mixité, sans nécessairement imposer la même composition à tous les établissements.",
    balance: [
      "La DEPP constate que les écarts de composition sociale entre public et privé se sont creusés, tout en montrant de fortes différences selon les territoires. Un objectif national uniforme pourrait donc être inatteignable ou mal ciblé dans certaines zones.",
      "Conditionner signifie choisir un indicateur, un point de départ, une cible, un délai et une conséquence. Selon ces paramètres, la mesure peut encourager l’ouverture ou provoquer sélection stratégique, baisse de ressources et report d’élèves vers le public.",
      "En droit, un établissement sous contrat doit accueillir les enfants sans distinction d’origine, d’opinion ou de croyance. L’enjeu soulevé ici est l’accès effectif : frais, localisation, transport, information et pratiques d’admission peuvent produire une composition sociale très différente malgré cette obligation formelle."
    ],
    favour: [
      { title: "Qui finance et qui peut effectivement accéder ?", text: " Les impôts ne sont pas la facture d’un service individuel : un contribuable finance de nombreux services qu’il n’utilise pas. Mais lorsque des familles modestes participent au financement d’établissements auxquels les frais, la distance ou les admissions donnent moins souvent accès, les défenseurs de la conditionnalité y voient une raison d’exiger une ouverture mesurable. La Cour des comptes relevait en 2021 11,8 % d’élèves boursiers dans le privé sous contrat contre 29,1 % dans le public, et indiquait que les frais peuvent évincer une partie des familles modestes.", sources: ["court", "rules"] },
      { title: "Incitation à ouvrir le recrutement.", text: " Modulation des financements, transparence des admissions, tarification sociale ou places réservées peuvent rendre l’accueil d’élèves modestes financièrement et institutionnellement plus attractif." },
      { title: "Réduire une séparation croissante.", text: " La DEPP observe un écart croissant de composition sociale entre secteurs. La Cour des comptes estime que les mesures de mixité restent insuffisantes.", sources: ["depp", "court"] }
    ],
    reserve: [
      { title: "Liberté de choix et caractère propre.", text: " Une contrainte d’admission peut limiter le choix des familles et l’autonomie des établissements, garanties qu’il faut concilier avec les obligations du contrat." },
      { title: "Contexte local.", text: " Un établissement ne peut accueillir une population inexistante à proximité sans transport, internat ou aide aux frais annexes. Une cible brute peut pénaliser un territoire plutôt qu’un comportement." },
      { title: "Effets pervers de la sanction.", text: " Retirer des fonds peut réduire les moyens d’accueillir les élèves visés, augmenter les contributions familiales ou fermer des classes et reporter la charge sur le public. Les établissements peuvent aussi jouer sur les indicateurs." },
      { title: "Contribuer sans utiliser n’est pas propre au privé.", text: " Le financement collectif n’ouvre pas à chacun un droit personnel d’usage : des contribuables sans enfant financent aussi l’école publique, comme d’autres services. Les établissements sous contrat participent à l’offre scolaire et leur financement public peut maintenir les frais plus bas qu’ils ne le seraient autrement. L’argument d’équité repose donc moins sur la non-utilisation individuelle que sur l’existence d’obstacles sociaux évitables et sur les obligations attachées au contrat.", sources: ["rules", "court"] }
    ],
    factors: [
      { title: "Indicateur", text: "Indice de position sociale, boursiers, revenus ou valeur ajoutée territoriale ne mesurent pas exactement la même chose." },
      { title: "Référence locale", text: "Comparer au bassin de recrutement est plus réaliste qu’exiger partout une composition nationale identique." },
      { title: "Levier", text: "Bonus, accompagnement et publication peuvent précéder une sanction financière graduelle." },
      { title: "Admissions et frais", text: "Règles transparentes, tarification et transport doivent évoluer ensemble pour rendre la cible atteignable." }
    ],
    decisionPrompt: "Votre réponse dépend de la légitimité que vous accordez aux contreparties sociales des fonds publics et de votre confiance dans leur mesure. Un dispositif fondé sur les progrès locaux, avec soutien et sanctions graduelles, diffère fortement d’un quota uniforme immédiat.",
    sources: [
      { id: "depp", title: "Évolution de la mixité sociale des collèges", publisher: "DEPP — ministère de l’Éducation nationale", year: "2024", url: "https://www.education.gouv.fr/depp/evolution-de-la-mixite-sociale-des-colleges-452478" },
      { id: "court", title: "L’enseignement privé sous contrat", publisher: "Cour des comptes", year: "2023", url: "https://www.ccomptes.fr/fr/publications/lenseignement-prive-sous-contrat" },
      { id: "rules", title: "Les établissements d’enseignement scolaire privés", publisher: "Ministère de l’Éducation nationale", year: "mise à jour continue", url: "https://www.education.gouv.fr/les-etablissements-d-enseignement-scolaire-prives-2942", note: "obligations d’accueil et financement des établissements sous contrat" },
      { id: "funding", title: "Contrôles administratifs et financiers des établissements d’enseignement privés sous contrat", publisher: "Ministère de l’Éducation nationale", year: "2025", url: "https://www.education.gouv.fr/bo/2025/Hebdo23/MENF2511949N" }
    ]
  }
};
