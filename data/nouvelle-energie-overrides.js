// Ajustements Nouvelle Énergie validés après audit documentaire du 12 août 2026.
// Les questions sont résolues par leur ID réel afin d'éviter tout décalage lié
// aux identifiants manquants dans le questionnaire. Q76 est volontairement exclue.
const NOUVELLE_ENERGIE_RESPONSE_OVERRIDES = {
  2: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie valorise explicitement le mérite, le travail, l'effort, l'entrepreneuriat et la prise de risque comme moteurs légitimes de réussite. Le parti accepte donc que ces différences puissent produire des écarts de revenus, tout en maintenant un principe de solidarité envers les accidents de la vie ; +2 est plus précis qu'un accord maximal.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
  },
  3: {
    response: -3,
    justification: "Désaccord très fort : David Lisnard propose de réduire fortement la fiscalité sur le travail, le capital et la transmission et rejette l'idée de taxer davantage la réussite au nom de la justice fiscale. Une hausse générale des impôts sur les hauts revenus et grands patrimoines afin de réduire les inégalités est donc directement opposée à cette ligne, d'où -3.",
    source: "https://www.unenouvelleenergie.fr/changer-de-logiciel-fiscal/"
  },
  4: {
    response: -2,
    justification: "Désaccord net mais principalement doctrinal : aucune proposition de Nouvelle Énergie ne traite directement d'un ratio légal entre rémunération des dirigeants et bas salaires. La doctrine du parti repose toutefois sur la liberté contractuelle, la déréglementation et la responsabilité des entreprises plutôt que sur la fixation politique des rémunérations. Cette opposition probable au mécanisme justifie -2, avec une preuve moins directe que sur d'autres questions économiques.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/"
  },
  5: {
    response: -2,
    justification: "Désaccord net : David Lisnard propose d'augmenter le salaire net principalement en réduisant les cotisations patronales et salariales et en laissant davantage du coût du travail au salarié. Cette stratégie privilégie la baisse des prélèvements et la négociation plutôt qu'une forte hausse légale du salaire minimum ; -2 reflète cette opposition sans nier toute possibilité d'évolution du SMIC.",
    source: "https://www.unenouvelleenergie.fr/david-lisnard-dans-la-grande-interview-il-faut-augmenter-le-salaire-net-et-cotiser-moins-pour-gagner-plus/"
  },
  6: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie propose explicitement que tout service public pouvant être délégué au secteur privé sans dégrader son intégrité ou sa qualité le soit, dans une logique de subsidiarité et de choix pour l'usager. Le parti ne veut toutefois pas privatiser les missions régaliennes ni nier tout rôle de l'État dans les secteurs essentiels ; +2 est donc plus adapté que +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  7: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie privilégie l'entreprise privée, la concurrence, la contractualisation et l'investissement privé pour les activités économiques, y compris stratégiques. Son projet ne présente pas la nationalisation comme un instrument normal de souveraineté industrielle et cherche au contraire à réduire le périmètre économique de l'État ; -2 est donc adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  10: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie juge le niveau français de redistribution et de prélèvements insoutenable et veut transformer profondément l'État-providence afin de réduire les dépenses et cotisations. Le parti conserve un socle de solidarité collective pour les accidents de la vie et certaines missions essentielles, ce qui empêche un désaccord maximal ; -2 est plus précis que -1.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
  },
  11: {
    response: -2,
    justification: "Désaccord net : le projet de Nouvelle Énergie veut réduire l'intervention économique directe de l'État, limiter la réglementation et privilégier la concurrence, les incitations et la responsabilité individuelle. Il accepte des interventions ciblées lorsque des missions essentielles ou des défaillances précises l'exigent, mais refuse que l'État intervienne beaucoup plus fortement de manière générale ; -2 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/"
  },
  13: {
    response: 0,
    justification: "Position intermédiaire : Nouvelle Énergie défend fortement la liberté individuelle dans la vie privée et refuse l'ingérence excessive de l'État, mais insiste parallèlement sur la transmission culturelle, la famille, la dignité et certaines normes communes. Aucune priorité générale nette entre diversification des modes de vie et préservation des normes traditionnelles ne ressort du programme ; 0 reste le score le plus prudent.",
    source: "https://www.unenouvelleenergie.fr/le-liberalisme-nest-pas-une-posture/"
  },
  15: {
    response: -3,
    justification: "Désaccord très fort : Nouvelle Énergie place la liberté et la responsabilité individuelles au cœur de sa doctrine et critique l'égalitarisme lorsqu'il conduit à davantage de contraintes publiques. Le parti préfère l'égalité des chances et la solidarité ciblée à des restrictions de libertés destinées à réduire les écarts économiques ; l'arbitrage de la question est directement contraire à cette ligne, d'où -3.",
    source: "https://www.unenouvelleenergie.fr/decouvrir-notre-parti/notre-credo/"
  },
  18: {
    response: 3,
    justification: "Accord très fort : Nouvelle Énergie fait de la transmission de la culture, de l'histoire, de l'identité nationale et de valeurs communes un pilier explicite de son projet. Le programme éducatif oppose notamment la transmission et le mérite aux doctrines de déconstruction ; la volonté de préserver certaines traditions et références culturelles est donc centrale, ce qui justifie +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/education/"
  },
  24: {
    response: 3,
    justification: "Accord très fort : Nouvelle Énergie lie explicitement la maîtrise de l'immigration à la cohésion nationale, à l'assimilation, aux tests d'intégration et à la capacité du pays à maîtriser son peuplement. Le parti accepte donc que la cohésion culturelle constitue en elle-même un motif de limitation des flux, y compris lorsqu'une immigration peut avoir une utilité économique ; +3 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
  },
  25: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie maintient le droit d'asile mais veut traiter les demandes depuis les consulats à l'étranger et réduire très fortement les flux migratoires. Le parti ne défend donc pas une augmentation générale du nombre de réfugiés accueillis en France même au prix d'un coût économique supplémentaire ; le maintien d'une protection des personnes réellement persécutées empêche toutefois -3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
  },
  26: {
    response: 2,
    justification: "Accord net : le programme sécurité veut restaurer l'effectivité et la rapidité des sanctions, augmenter les capacités pénitentiaires et rétablir une réponse pénale ferme face aux violences et à la récidive. La logique est clairement favorable à davantage d'incarcération lorsque les faits le justifient, sans faire de la croissance de la population carcérale un objectif en soi ; +2 est donc plus précis que +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/securite/"
  },
  28: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie veut renforcer les moyens opérationnels de la police, la vidéoprotection, l'exploitation de données et les capacités d'enquête afin d'agir plus tôt et plus efficacement. Le parti affirme néanmoins refuser l'autoritarisme bureaucratique et maintenir des garanties de liberté, ce qui limite l'accord à +2 plutôt qu'à +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/securite/"
  },
  30: {
    response: -1,
    justification: "Désaccord modéré : Nouvelle Énergie veut décarboner fortement l'économie mais rejette explicitement une écologie de décroissance et cherche à concilier transition, innovation, compétitivité et prospérité. Lorsque climat et croissance sont directement opposés comme dans la question, le parti ne donne donc pas la priorité absolue au climat ; -1 reste le meilleur équilibre.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  31: {
    response: 1,
    justification: "Accord modéré : Nouvelle Énergie défend explicitement un prix du carbone et le principe pollueur-payeur afin d'intégrer le coût environnemental dans les prix. Le parti exige toutefois une fiscalité totale constante, une redistribution des recettes et la protection de la compétitivité ; il n'assume donc pas une forte hausse nette et durable du coût des énergies fossiles pour les ménages. +1 est plus précis que l'ancien -2.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  33: {
    response: 3,
    justification: "Accord très fort : Nouvelle Énergie défend une économie écologique de marché fondée sur le prix du carbone, le principe pollueur-payeur, l'innovation et la technologie, tout en rejetant l'écologie punitive reposant principalement sur les interdictions et contraintes générales. L'arbitrage de la question correspond directement à cette doctrine, ce qui justifie +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  34: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie critique l'écologie fondée sur les interdictions générales, le principe de précaution et les contraintes imposées aux consommateurs, et privilégie les signaux-prix, l'innovation et la responsabilité. Des interdictions ciblées peuvent rester admises lorsqu'un risque précis est démontré, ce qui empêche un désaccord maximal ; -2 est donc adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  35: {
    response: -1,
    justification: "Désaccord modéré : Nouvelle Énergie reconnaît une responsabilité environnementale internationale mais organise surtout son approche autour du principe pollueur-payeur, de la réciprocité et de l'effort des grands émetteurs. Le programme ne défend pas que les pays riches doivent supporter à eux seuls ou de manière prépondérante le coût mondial de la transition ; -1 est plus précis que 0.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  37: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie présente l'Europe comme un outil utile mais veut rétablir la capacité nationale de décision lorsque des règles supranationales empêchent un État d'exercer sa souveraineté. Le parti refuse à la fois le fédéralisme et l'isolement national ; il privilégie donc nettement la souveraineté sans rejeter la coopération européenne, d'où +2.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  38: {
    response: 1,
    justification: "Accord modéré : Nouvelle Énergie considère l'Europe institutionnelle et son architecture économique comme une conquête utile et raisonne dans le cadre d'une coopération européenne approfondie. Aucune position récente suffisamment directe n'évalue cependant le bilan global de l'euro ni n'assume explicitement la perte des instruments monétaires nationaux ; +1 est donc plus prudent que +2.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  39: {
    response: -1,
    justification: "Désaccord modéré : Nouvelle Énergie accepte des règles communes européennes lorsque l'échelle de l'Union apporte une réelle valeur ajoutée, mais dénonce l'inflation réglementaire et veut réattribuer ou limiter des compétences selon le principe de subsidiarité. Le parti ne souhaite donc pas une augmentation générale des règles communes ; -1 reste adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  40: {
    response: 2,
    justification: "Accord net : le programme prévoit explicitement qu'en cas de blocage empêchant un État d'exercer sa souveraineté à cause de règles supranationales, les citoyens puissent arbitrer par référendum et que la hiérarchie des normes soit partiellement revue. Cette position accepte donc qu'une priorité nationale puisse l'emporter sur certaines règles européennes, sans prôner une désobéissance générale ; +2 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  42: {
    response: -3,
    justification: "Désaccord très fort : David Lisnard propose explicitement de supprimer les droits de succession en ligne directe, de libéraliser fortement les donations et de renforcer la liberté de transmission du patrimoine. Une hausse de la fiscalité successorale au-dessus d'un seuil est donc directement opposée à sa réforme fiscale, ce qui justifie -3.",
    source: "https://www.unenouvelleenergie.fr/changer-de-logiciel-fiscal/"
  },
  43: {
    response: -2,
    justification: "Désaccord net : David Lisnard rejette les taxes supplémentaires sur les très grandes fortunes, notamment la taxe Zucman, et souligne le risque de départ des entrepreneurs et capitaux. Aucune proposition ne traite directement d'une taxation française du patrimoine mondial après expatriation, ce qui empêche -3, mais l'orientation est nettement contraire au mécanisme de la question ; -2 est plus précis que -1.",
    source: "https://www.unenouvelleenergie.fr/david-lisnard-en-corse-je-ne-cherche-pas-a-plaire-je-cherche-a-convaincre/"
  },
  44: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie veut refonder l'État-providence autour de la responsabilité et renforcer les obligations liées à l'activité et au retour à l'emploi. Cette doctrine est compatible avec une réduction ou suspension d'allocations après des refus répétés d'offres raisonnables, même si le programme actuel ne détaille pas un barème exactement identique à celui de la question ; +2 est donc plus prudent que +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
  },
  45: {
    response: 0,
    justification: "Position intermédiaire : Nouvelle Énergie défend la solidarité territoriale et reconnaît les difficultés particulières des outre-mer, mais son programme privilégie parallèlement la réduction de la dépense, la concurrence et les solutions structurelles plutôt que des subventions nationales permanentes de prix. Aucune proposition suffisamment précise ne tranche l'arbitrage exact de cette question ; 0 est donc plus rigoureux que l'ancien -1.",
    source: "https://www.unenouvelleenergie.fr/reunion-de-la-delegation-des-departements-doutre-mer-de-lamf/"
  },
  49: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie veut réformer les prestations sociales autour de la responsabilité, de l'activité et de la contribution, tout en conservant une solidarité collective pour les accidents de la vie. Le principe de conditionner fortement certains droits à une participation durable au travail ou aux cotisations est donc cohérent avec son projet, sans devenir une condition universelle pour toute protection ; +2 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
  },
  52: {
    response: 3,
    justification: "Accord très fort : Nouvelle Énergie propose explicitement de diviser par deux les contraintes administratives imposées aux entreprises et aux citoyens, de dégonfler le stock de normes et de remplacer la logique de contrôle par une logique de responsabilité. Cette déréglementation est un axe central du projet et accepte la suppression de règles existantes lorsque leur protection est jugée disproportionnée ; +3 reste justifié.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  55: {
    response: 3,
    justification: "Accord très fort : le programme immigration prévoit explicitement des quotas de main-d'œuvre qualifiée dans le cadre d'une forte réduction globale des titres de séjour. Il s'agit donc précisément de privilégier l'immigration économique qualifiée, même si cela réduit les flux moins qualifiés ; +3 est directement documenté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
  },
  59: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie veut développer la vidéoprotection, l'intelligence artificielle de prévention, l'exploitation des fichiers et les moyens de renseignement afin d'identifier et neutraliser plus tôt les menaces graves. Le programme ne formule toutefois pas exactement le régime individuel de surveillance préventive décrit par la question ; +2 est donc plus rigoureux que +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/securite/"
  },
  60: {
    response: 3,
    justification: "Accord très fort : David Lisnard défend explicitement le pluralisme, refuse qu'une autorité publique définisse une vérité officielle et affirme que la restriction de la liberté d'expression doit être strictement justifiée. Il assume aussi le droit d'être profondément choqué par des propos ou caricatures tant qu'ils restent licites. Cette position correspond directement à la question et justifie +3.",
    source: "https://www.unenouvelleenergie.fr/la-liberte-cest-le-pluralisme/"
  },
  62: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie défend un prix du carbone et une fiscalité environnementale fondés sur le principe pollueur-payeur, à condition que la taxation totale reste constante et que les recettes soient redistribuées aux perdants de la réforme. Cette logique correspond directement à un signal-prix carbone accompagné d'une compensation ciblée ; les conditions de neutralité fiscale et de compétitivité limitent l'accord à +2.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  65: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie veut une décarbonation importante mais rejette explicitement la décroissance et conditionne la fiscalité écologique à la compétitivité ainsi qu'à la réciprocité internationale. Une baisse de 3 % du PIB sans effort comparable des autres pays cumule précisément les deux concessions refusées par le parti ; -2 est donc bien documenté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/"
  },
  66: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie veut confier l'évaluation des politiques publiques à des experts indépendants, mais uniquement pour éclairer la décision. Son projet combat explicitement la technocratie, renforce les institutions à légitimité démocratique et maintient la responsabilité des choix chez les élus. Donner davantage de pouvoir décisionnel aux experts qu'aux élus va donc nettement à l'encontre de cette architecture, d'où -2.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  67: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie assume des réformes structurelles présentées comme économiquement indispensables même lorsqu'elles sont politiquement difficiles. Le programme qualifie notamment le passage à 65 ans d'impératif national urgent et affirme qu'aucune démagogie ne doit empêcher cette décision. Cette conception justifie +2 sans signifier que l'opinion publique doit être ignorée en permanence.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
  },
  68: {
    response: 2,
    justification: "Accord net : Nouvelle Énergie veut élargir fortement le recours au référendum, y compris pour arbitrer des questions de souveraineté et des transformations institutionnelles importantes. Le parti ne soutient toutefois pas explicitement que tout sujet très technique devrait être soumis au vote populaire même lorsque les citoyens le maîtrisent mal ; +2 est plus précis que +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  69: {
    response: -1,
    justification: "Désaccord modéré mais preuve indirecte : Nouvelle Énergie défend le suffrage universel et veut augmenter le recours au référendum, sans proposer de pondérer le poids politique des citoyens selon leur niveau de connaissance institutionnelle ou économique. L'idée d'un vote différencié paraît donc contraire à sa conception démocratique, mais aucune prise de position directe sur ce mécanisme n'a été identifiée ; -1 reste prudent.",
    source: "https://www.unenouvelleenergie.fr/a-saint-raphael-david-lisnard-lance-sa-campagne-pour-faire-gagner-la-france-qui-fait/"
  },
  70: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie veut restaurer les pouvoirs de contrôle du Parlement, démocratiser les institutions et recentrer le président sur des fonctions stratégiques, en opposition à l'hyperprésidentialisme et à la concentration des décisions. Donner davantage de pouvoirs au président afin de contourner les blocages parlementaires va donc dans le sens inverse de cette réforme ; -2 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/etre-maitre-de-notre-destin/"
  },
  72: {
    response: 3,
    justification: "Accord très fort : Nouvelle Énergie conditionne explicitement l'installation durable et plusieurs droits à des exigences de langue, d'intégration, d'assimilation et de participation à la société française. Les tests d'intégration et la maîtrise du peuplement occupent une place centrale dans son programme migratoire ; la proposition correspond directement à cette doctrine, ce qui justifie +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
  },
  73: {
    response: -2,
    justification: "Désaccord net : Nouvelle Énergie rejette les explications qui réduisent principalement la délinquance aux seules conditions sociales et insiste sur la responsabilité individuelle, l'autorité, l'assimilation, le communautarisme et certains facteurs culturels. Le parti ne nie pas toute influence des inégalités économiques, ce qui empêche -3, mais sa hiérarchie explicative est nettement opposée à la proposition ; -2 est adapté.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/securite/"
  },
  77: {
    response: 0,
    justification: "Position intermédiaire : le programme santé veut organiser l'offre de soins au niveau des bassins de vie, rapprocher la gouvernance des élus et des soignants et garantir la proximité des soins. Il ne se prononce toutefois pas directement pour ou contre la fermeture ou la fusion de petites maternités et de petits services d'urgence lorsque la sécurité médicale l'exige. Faute d'arbitrage explicite sur ce mécanisme précis, 0 reste le score le plus rigoureux.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/sante/"
  },
  78: {
    response: 3,
    justification: "Accord très fort : le programme éducatif veut donner aux chefs d'établissement la liberté de recruter leurs équipes pédagogiques, de gérer leur organisation et d'évaluer les enseignants. La proposition de la question est donc directement reprise par le projet de Nouvelle Énergie, ce qui justifie +3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/education/"
  },
  79: {
    response: -3,
    justification: "Désaccord très fort : Nouvelle Énergie défend le libre choix de l'école et un financement public suivant la famille vers le public ou le privé, sans conditionner ce financement à des objectifs quantifiés de mixité sociale. Son projet rejette au contraire l'égalitarisme administratif et privilégie la liberté de choix et l'évaluation des résultats ; la condition proposée est directement opposée à cette doctrine, d'où -3.",
    source: "https://www.unenouvelleenergie.fr/notre-programme/education/"
  },
  80: {
    response: 1,
    justification: "Accord modéré : Nouvelle Énergie défend une forte autonomie réglementaire des communes et David Lisnard assume à Cannes une régulation locale des meublés touristiques afin de préserver la qualité de vie et le logement. Le parti protège parallèlement fortement la propriété et ne propose pas une interdiction générale nationale des résidences secondaires en location touristique. Le pouvoir municipal décrit par la question est donc compatible avec sa doctrine, mais seulement de manière modérée ; +1 est adapté.",
    source: "https://www.unenouvelleenergie.fr/le-territoire-doit-redevenir-un-espace-de-liberte/"
  },
  83: {
    response: -3,
    justification: "Désaccord très fort : David Lisnard s'est explicitement déclaré défavorable à la création d'un droit à l'aide active à mourir, y compris dans un cadre strict, et préfère conserver la loi Claeys-Leonetti tout en développant massivement les soins palliatifs. L'opposition porte sur le principe même de l'euthanasie ou du suicide assisté ; -3 est donc justifié.",
    source: "https://www.unenouvelleenergie.fr/david-lisnard-je-peux-trouver-dieu-dans-une-foret-une-montagne-ou-dans-la-beaute-dun-opera-de-mozart/"
  },
  85: {
    response: 2,
    justification: "Accord net : David Lisnard défend explicitement le rétablissement de l'universalité des allocations familiales et une politique familiale indépendante du niveau de revenu. Son projet comporte toutefois des choix particuliers de structure et de ciblage, notamment sur le nombre d'enfants, qui ne correspondent pas parfaitement à une allocation strictement identique et croissante pour chaque enfant ; +2 est donc plus précis que +3.",
    source: "https://www.unenouvelleenergie.fr/fete-nationale-retrouvez-le-discours-de-david-lisnard-pour-le-14-juillet/"
  },
  87: {
    response: 1,
    justification: "Accord modéré : Nouvelle Énergie fait de la souveraineté technologique française et européenne en matière d'intelligence artificielle, de calcul, de données et d'infrastructures un objectif stratégique et veut utiliser la commande publique comme levier. Le parti insiste simultanément sur la performance, la compétitivité et le rattrapage technologique ; rien ne montre qu'il accepterait systématiquement une solution européenne sensiblement moins performante ou plus coûteuse. La contrepartie de la question limite donc l'accord à +1.",
    source: "https://www.unenouvelleenergie.fr/le-grand-entretien-avec-david-lisnard-quelle-strategie-pour-la-france-dans-le-nouveau-desordre-mondial/"
  }
};

const nouvelleEnergieParty = DATA.entities.find(entity => entity.id === 'nouvelle-energie');
if (nouvelleEnergieParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(NOUVELLE_ENERGIE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) {
      nouvelleEnergieParty.responses[index] = override.response;
    }
    if (override.justification) {
      nouvelleEnergieParty.justifications[index] = override.justification;
    }
    if (override.source && Array.isArray(nouvelleEnergieParty.sources)) {
      nouvelleEnergieParty.sources[index] = override.source;
    }
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (nouvelleEnergieParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  nouvelleEnergieParty.axisScores = scores;
}
