// Audit documentaire d'Horizons d'août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const HORIZONS_OVERRIDES = {
  "1": {
    "justification": "Accord très fort : Édouard Philippe veut réduire fortement les impôts de production et le coût du travail tout en finançant le redressement par une baisse durable des dépenses et des aides jugées inefficaces. Le lien entre baisse des prélèvements et maîtrise de la dépense est central dans son programme ; +3 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "2": {
    "justification": "Accord net : Horizons valorise explicitement le travail, l'effort, l'initiative et la prise de risque comme moteurs de réussite. Le parti maintient toutefois une exigence de cohésion sociale et d'égalité des chances, ce qui justifie +2 plutôt qu'un accord maximal.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "3": {
    "justification": "Désaccord net : Horizons refuse une hausse générale de la fiscalité sur les hauts revenus et patrimoines et fait de la stabilité fiscale et de l'attractivité une priorité. Même si sa ligne 2027 est très hostile aux nouveaux impôts, il ne propose pas la suppression de toute progressivité ni de toute contribution ciblée des plus aisés ; -2 est donc conservé.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "5": {
    "justification": "Désaccord net : Horizons veut augmenter les revenus du travail surtout par la productivité, la baisse des prélèvements et le partage de la valeur plutôt que par une forte hausse légale du SMIC. Le parti ne rejette pas les revalorisations salariales, ce qui maintient le score à -2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "6": {
    "justification": "Accord net : Horizons accorde une place centrale à l'entreprise privée, à la concurrence et à l'initiative pour produire plus efficacement, y compris dans plusieurs services aujourd'hui mixtes. Il conserve toutefois un rôle public important dans la santé, l'éducation, la sécurité et les secteurs stratégiques ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "7": {
    "justification": "Désaccord modéré : Horizons privilégie l'investissement, la régulation et les participations ciblées plutôt que la nationalisation comme instrument normal de politique industrielle. Une prise de contrôle exceptionnelle d'un actif stratégique n'est cependant pas exclue, ce qui justifie -1.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "8": {
    "justification": "Accord net : Horizons veut libérer l'activité, simplifier les règles et utiliser davantage la concurrence et l'innovation pour améliorer l'offre. Le parti conserve néanmoins des normes protectrices et une politique industrielle active ; +2 reste préférable à +3.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "9": {
    "justification": "Accord très fort : le programme d'Édouard Philippe fait du retour à l'équilibre budgétaire une priorité et prévoit des économies structurelles, y compris dans des secteurs sociaux et administratifs. L'acceptation de réduire certaines dépenses pour redresser les comptes est explicite ; +3 reste justifié.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "10": {
    "justification": "Position intermédiaire : Horizons veut conserver un haut niveau de services publics et de protection sociale tout en refusant d'augmenter durablement la pression fiscale et en cherchant des économies. La formulation « même si cela implique une fiscalité importante » ne correspond donc ni à un accord ni à un désaccord net ; 0 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "11": {
    "justification": "Position intermédiaire : Horizons accepte une intervention forte de l'État lorsqu'un enjeu stratégique, industriel ou social l'exige, mais refuse d'en faire la réponse générale aux résultats de marché jugés indésirables. Son approche combine marché, investissement public et régulation ciblée ; 0 reste le meilleur compromis.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "12": {
    "response": 1,
    "justification": "Accord modéré : Édouard Philippe propose un pilier de capitalisation représentant à terme environ 10 à 15 % des pensions, ce qui introduit davantage de choix et d'épargne dans la retraite. Le socle resterait toutefois largement collectif et obligatoire, et le parti ne généralise pas cette logique à toute la protection sociale ; +1 est plus précis que +2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "13": {
    "justification": "Accord modéré : Horizons défend les libertés individuelles et l'égalité des droits et accepte l'évolution des modes de vie, tout en restant attaché à la transmission de repères communs. Cette ouverture est réelle sans constituer un rejet général des normes traditionnelles ; +1 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "14": {
    "justification": "Accord net : Horizons reste attaché à une Ve République capable de gouverner et accepte des mécanismes institutionnels permettant d'éviter le blocage budgétaire. Le parti ne défend pas pour autant la mise à l'écart générale du vote parlementaire ; +2 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "15": {
    "justification": "Désaccord net : Horizons privilégie l'égalité des chances, l'autonomie et la responsabilité individuelle plutôt que la restriction des libertés comme moyen de réduire les écarts. Certaines contraintes redistributives ou réglementaires sont admises, ce qui empêche un -3.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "16": {
    "justification": "Accord modéré : Horizons soutient des politiques contre les discriminations et pour l'égalité réelle, mais son approche reste principalement universaliste et fondée sur l'égalité des chances. Le parti ne fait pas des politiques correctrices entre groupes un axe central de son projet ; +1 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "18": {
    "justification": "Accord net : Horizons accorde une valeur importante à la transmission de l'histoire, de la culture, de l'autorité et des repères communs. Il accepte néanmoins l'évolution des droits et des normes sociales ; +2 traduit mieux cette hiérarchie qu'un accord maximal.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "19": {
    "justification": "Accord net : Édouard Philippe veut réduire l'immigration familiale et mieux maîtriser les flux tout en conservant une immigration économique choisie. Il ne propose donc pas une fermeture générale, mais l'objectif de réduction de plusieurs catégories d'entrées est clair ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "20": {
    "justification": "Accord net : Horizons considère qu'une immigration économique choisie peut répondre aux besoins de compétences et de main-d'œuvre. Cette utilité est conditionnée à la sélection et à l'intégration, ce qui justifie +2 plutôt qu'un accord inconditionnel.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "21": {
    "justification": "Accord net : Horizons ne défend pas de préférence nationale permanente pour les étrangers légalement installés de longue date et intégrés. Sa ligne vise surtout les conditions d'entrée, de séjour et certaines aides en cas de délinquance ; +2 reste cohérent.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "22": {
    "justification": "Accord modéré : Horizons veut renforcer les exigences de langue, d'intégration et d'adhésion aux principes républicains dans les parcours d'installation et de nationalité. Le parti ne propose pas une refonte radicale de toutes les voies d'accès à la nationalité ; +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "23": {
    "justification": "Accord très fort : Édouard Philippe veut accélérer l'expulsion des étrangers délinquants, multiplier les interdictions du territoire et lever des obstacles à l'éloignement. La fermeté demandée par la question correspond directement à cette ligne ; +3 reste justifié.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "24": {
    "justification": "Accord net : Horizons considère que la capacité d'intégration, la langue et les valeurs communes doivent entrer dans la maîtrise des flux même lorsque l'immigration peut avoir une utilité économique. La cohésion n'est pas le seul critère, ce qui maintient le score à +2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "25": {
    "justification": "Désaccord modéré : Horizons maintient le droit d'asile mais veut mieux contrôler les admissions et les procédures et ne propose pas d'augmenter globalement l'accueil des réfugiés indépendamment du coût. Le désaccord avec une hausse explicite de l'accueil est réel mais non absolu ; -1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "26": {
    "justification": "Accord modéré : Édouard Philippe veut des peines plus rapides, des peines courtes effectivement exécutées et des peines planchers pour les faits les plus graves. Il dit toutefois préférer sanctionner plus tôt plutôt que d'enfermer plus longtemps ; +1 reste plus juste qu'un score plus élevé.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "28": {
    "justification": "Accord net : Horizons veut davantage de moyens, de technologies et de capacités opérationnelles pour la police et le renseignement. Le parti maintient des garanties juridiques et ne présente pas les libertés individuelles comme secondaires en toute circonstance ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "29": {
    "response": 2,
    "justification": "Accord net : Horizons défend les mesures miroir et refuse que des produits agricoles importés puissent bénéficier de normes interdites aux producteurs français. Le parti accepte donc une restriction commerciale forte au nom de la réciprocité, mais ne dit pas explicitement qu'il faut accepter sans réserve une hausse du prix des produits les moins chers ; +2 est plus adapté que +1.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2024-2025/seance-du-jeudi-30-janvier-2025"
  },
  "30": {
    "response": -1,
    "justification": "Désaccord modéré : Horizons fait de la décarbonation une priorité mais refuse explicitement une écologie de décroissance et cherche les solutions qui réduisent les émissions tout en créant de la croissance. La priorité climatique n'est donc pas maintenue sans réserve lorsque la croissance baisse ; -1 est plus précis que 0.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "31": {
    "justification": "Accord modéré : Horizons accepte des signaux-prix carbone et une hausse progressive du coût des activités fossiles lorsqu'elle accélère la transition. Le parti veut toutefois protéger le pouvoir d'achat et privilégier des mécanismes compatibles avec la compétitivité ; +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "32": {
    "justification": "Accord modéré : Horizons veut diminuer le coût du travail et élargir les assiettes de financement de la protection sociale, mais ne fait pas aujourd'hui d'une hausse de TVA finançant directement une baisse des cotisations une proposition centrale et explicite. +1 traduit cette proximité sans attribuer au parti un mécanisme précis non assumé.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "33": {
    "justification": "Accord net : Horizons privilégie l'innovation, l'investissement, l'électrification et les signaux économiques plutôt qu'une écologie reposant principalement sur des interdictions générales. Il conserve néanmoins des normes et des restrictions ciblées ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "34": {
    "justification": "Accord modéré : Horizons accepte des interdictions ou standards contraignants lorsqu'une technologie ou un produit très polluant doit être remplacé, mais préfère chaque fois que possible l'innovation et des alternatives accessibles. Le principe est admis sans être l'outil dominant ; +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "35": {
    "justification": "Accord modéré : Horizons reconnaît une responsabilité particulière des économies développées dans le financement de la transition internationale et soutient des mécanismes européens et multilatéraux de solidarité climatique. Le programme n'affirme cependant pas que les pays riches doivent supporter seuls ou presque seuls l'effort ; +1 est conservé.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "36": {
    "justification": "Accord net : Horizons veut renforcer la capacité d'action européenne dans l'industrie, l'énergie, la défense et le commerce afin de peser davantage face aux grandes puissances. Il reste attaché à la subsidiarité et ne propose pas un transfert généralisé de toutes les compétences ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "37": {
    "justification": "Désaccord net : Horizons considère qu'une part de souveraineté française s'exerce plus efficacement en commun au niveau européen et refuse de préserver systématiquement une compétence nationale si cela réduit la puissance d'action. Le parti garde néanmoins des domaines souverains français importants ; -2 reste cohérent.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "38": {
    "justification": "Accord très fort : Horizons défend sans ambiguïté l'euro et l'intégration économique européenne et ne propose aucun retour à une monnaie nationale. La perte d'instruments monétaires nationaux est acceptée comme contrepartie de la stabilité et de la puissance collective ; +3 reste justifié.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "39": {
    "justification": "Accord net : Horizons soutient davantage de politiques communes européennes dans les domaines stratégiques, industriels, énergétiques et commerciaux. La subsidiarité demeure une limite importante, ce qui justifie +2 plutôt que +3.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "40": {
    "justification": "Désaccord net : Horizons veut défendre les intérêts français en négociant et en modifiant les règles européennes, pas en installant une stratégie générale de désobéissance unilatérale. Des conflits ponctuels peuvent conduire à demander une révision des règles, mais pas à les ignorer durablement ; -2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "41": {
    "justification": "Accord modéré : Édouard Philippe critique l'IFI et la fiscalité qui pénalise l'investissement immobilier et l'épargne, mais n'a pas formulé une proposition claire de suppression pure et simple sans fiscalité patrimoniale de remplacement. +1 reste le meilleur calibrage.",
    "source": "https://immobilier.lefigaro.fr/article/edouard-philippe-fait-son-mea-culpa-sur-l-ifi-20251209"
  },
  "42": {
    "justification": "Désaccord net : Horizons privilégie la transmission familiale, l'épargne et la stabilité fiscale plutôt qu'une hausse des droits de succession au-delà d'un seuil. Le parti ne propose pas de supprimer toute fiscalité successorale, ce qui justifie -2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "43": {
    "justification": "Désaccord modéré : Horizons met l'accent sur l'attractivité du capital, la stabilité fiscale et la lutte coordonnée contre l'évasion plutôt que sur une imposition française durable du patrimoine mondial après expatriation. L'absence de rejet explicite de tout dispositif de sortie conduit à -1 plutôt qu'à un désaccord plus fort.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "44": {
    "justification": "Accord net : Horizons veut renforcer les obligations des demandeurs d'emploi et rendre les sanctions effectives en cas de refus répétés d'offres adaptées. L'accompagnement et la proportionnalité restent présents, mais le principe d'une perte significative de droits est clairement compatible avec sa ligne ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "45": {
    "justification": "Position intermédiaire : Horizons reconnaît le problème de la vie chère outre-mer et accepte des mesures de solidarité, mais privilégie aussi la production locale, la concurrence et la baisse structurelle des coûts. Aucune position claire n'accepte de financer durablement cette solidarité par une hausse des prix supportée en métropole ; 0 reste adapté.",
    "source": "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/troisieme-seance-du-jeudi-11-decembre-2025"
  },
  "46": {
    "justification": "Accord net : Horizons veut fluidifier le marché du travail, simplifier les ruptures et réduire les rigidités susceptibles de freiner l'embauche. Le parti conserve des protections contre les licenciements abusifs ; +2 décrit une critique nette du droit du travail sans aller jusqu'à une dérégulation totale.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "47": {
    "justification": "Accord net : Édouard Philippe propose explicitement de compléter la répartition par un pilier de capitalisation représentant à terme environ 10 à 15 % des pensions. La question ajoute une transition coûteuse qui n'est pas assumée comme telle ; +2 reste donc plus précis que +3.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "48": {
    "justification": "Accord net : Horizons relie l'équilibre des retraites à la démographie et à l'allongement de la vie et accepte l'idée de travailler plus longtemps pour préserver le système. Le programme ne propose pas une formule automatique indexant chaque évolution de l'âge légal sur l'espérance de vie, mais la logique démographique est suffisamment forte pour conserver +2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "49": {
    "justification": "Accord net : Horizons veut renforcer le lien entre protection sociale, activité et contribution, notamment en matière de chômage, de retraite et d'incitations au travail. Le parti ne conditionne pas chaque prestation à une longue carrière contributive ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "50": {
    "justification": "Accord modéré : Horizons accepte que les aides publiques importantes soient conditionnées à des engagements d'investissement, d'emploi ou de transformation, mais ne propose pas une règle générale gelant dividendes et rémunérations jusqu'au remboursement intégral. +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "51": {
    "justification": "Accord modéré : Horizons défend un État stratège capable d'utiliser ses participations et sa commande publique pour soutenir la souveraineté industrielle. Le parti ne formule pas une doctrine générale imposant par l'actionnariat public des objectifs de long terme à toutes les entreprises concernées ; +1 reste prudent.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "52": {
    "justification": "Accord modéré : Horizons propose un moratoire normatif, la fin des surtranspositions et une simplification drastique pour les entreprises. Il n'assume toutefois pas de manière générale une baisse des protections sociales ou environnementales ; la concession de la question limite le score à +1.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
  },
  "53": {
    "justification": "Accord modéré : Horizons accepte des régularisations très encadrées par le travail et l'insertion dans certains cas, mais refuse une régularisation de plein droit fondée uniquement sur plusieurs années de travail. +1 traduit cette ouverture limitée.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "54": {
    "justification": "Désaccord net : Horizons veut supprimer des aides pour les étrangers délinquants et durcir l'accès au séjour, mais ne propose pas une carence générale excluant les immigrés légaux des prestations pendant plusieurs années après leur arrivée. La ligne d'intégration par le travail est stricte sans aller jusque-là ; -2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "55": {
    "justification": "Accord modéré : Horizons veut une immigration économique davantage choisie selon les compétences, les métiers et les besoins de l'économie. Les besoins peuvent aussi porter sur des emplois moins qualifiés, ce qui limite le score à +1.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "56": {
    "justification": "Accord modéré : Horizons maintient le droit du sol tout en renforçant les exigences d'intégration et de langue dans le parcours vers la nationalité. L'acquisition automatique à la majorité n'est pas remise en cause de manière assez nette pour justifier davantage qu'un +1.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "57": {
    "justification": "Accord modéré : Horizons veut sélectionner davantage l'immigration selon la langue, le travail et les valeurs républicaines. Il ne crée cependant pas un pouvoir général de refus fondé seulement sur une appréciation préalable des intentions culturelles d'un candidat légalement admissible ; +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "58": {
    "justification": "Accord modéré : Horizons accepte le pluralisme culturel et religieux tant que la loi et les principes républicains sont respectés, mais accorde une importance forte à l'assimilation linguistique et civique. +1 reflète cette ouverture conditionnée.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "59": {
    "justification": "Accord net : Horizons veut renforcer le renseignement et la surveillance préventive des personnes présentant un risque sérieux pour la sécurité, y compris avant toute poursuite pénale. Les garanties et contrôles juridictionnels sont maintenus ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "60": {
    "justification": "Accord net : Horizons reste attaché à une liberté d'expression large, y compris pour des propos choquants dès lors qu'ils ne franchissent pas les limites pénales de menace, haine ou incitation. Le parti conserve un cadre légal protecteur contre certains abus ; +2 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "62": {
    "response": 1,
    "justification": "Accord modéré : Horizons accepte l'usage d'un signal-prix carbone et veut corriger les effets sociaux de la transition, mais son programme actuel insiste surtout sur le carbone aux frontières et l'investissement. La combinaison très précise d'une taxe intérieure maintenue malgré une perte de pouvoir d'achat puis compensée n'est pas une proposition centrale ; +1 est plus rigoureux que +2.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "63": {
    "justification": "Accord modéré : Horizons soutient l'électrification du parc automobile et la sortie progressive des véhicules thermiques, tout en insistant sur le coût, l'offre industrielle européenne et l'accessibilité des véhicules propres. L'objectif est clair mais l'acceptation du renchérissement moyen reste limitée ; +1 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "64": {
    "response": 0,
    "justification": "Position intermédiaire : Édouard Philippe propose simultanément de relancer le nucléaire et de développer les renouvelables. Le parti ne soutient donc pas l'arbitrage précis de Q64 consistant à réduire certains investissements renouvelables au profit du nucléaire ; 0 est plus juste que +1.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "65": {
    "justification": "Position intermédiaire : Horizons veut réduire fortement les émissions tout en refusant une stratégie de décroissance et en recherchant des solutions compatibles avec la compétitivité. Aucun engagement n'accepte une perte de 3 % de PIB en l'absence d'effort comparable des autres pays ; 0 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  },
  "66": {
    "justification": "Position intermédiaire : Horizons valorise fortement la science, l'expertise et l'évaluation mais son manifeste défend la démocratie représentative et ne propose pas de transférer le pouvoir de décision économique aux experts. L'expertise doit éclairer la décision politique plutôt que s'y substituer ; 0 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "67": {
    "justification": "Accord net : Horizons revendique la capacité de conduire des réformes jugées nécessaires même lorsqu'elles sont impopulaires à court terme, notamment pour les finances publiques, les retraites ou la compétitivité. Le contrôle démocratique et parlementaire demeure, ce qui justifie +2 plutôt que +3.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "68": {
    "justification": "Position intermédiaire : Horizons accepte des consultations et des référendums dans certains domaines mais reste attaché à la démocratie représentative et à la décision des élus. Il ne propose pas d'accroître fortement le recours au référendum sur les sujets techniques complexes ; 0 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "69": {
    "justification": "Désaccord net : Horizons défend l'égalité du suffrage et ne propose aucune pondération du vote selon la compétence, le diplôme ou la connaissance des institutions. La valorisation de l'expertise ne se traduit pas par une hiérarchie entre électeurs ; -2 reste adapté.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "70": {
    "response": 1,
    "justification": "Accord modéré : Horizons défend la Ve République et un exécutif capable d'agir, mais son manifeste valorise surtout les pouvoirs actuels plutôt qu'un nouvel accroissement substantiel des prérogatives présidentielles contre le Parlement. +1 est plus précis que +2.",
    "source": "https://horizonsleparti.fr/le-manifeste/"
  },
  "72": {
    "justification": "Accord très fort : Édouard Philippe lie explicitement le séjour durable et l'intégration à la maîtrise du français, au travail et au respect des valeurs républicaines. La condition d'efforts concrets formulée par Q72 correspond directement à sa ligne ; +3 reste justifié.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "73": {
    "justification": "Position intermédiaire : Horizons reconnaît l'importance des facteurs sociaux, éducatifs, familiaux et territoriaux dans la délinquance tout en accordant aussi un poids réel aux enjeux d'intégration et de normes communes. Le parti ne privilégie pas assez clairement un type d'explication pour sortir de 0.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
  },
  "75": {
    "justification": "Accord modéré mais position interne partagée : certains députés Horizons ont proposé un conventionnement sélectif en zone surdotée, tandis que d'autres responsables du parti ont combattu des dispositifs trop contraignants. L'existence d'un soutien explicite au mécanisme justifie +1, sans en faire une doctrine unanime.",
    "source": "https://www.assemblee-nationale.fr/dyn/16/amendements/1336/AN/71"
  },
  "76": {
    "justification": "Désaccord net : Frédéric Valletoux traite les complémentaires santé comme un acteur structurel du financement et cherche surtout à mieux encadrer leur fonctionnement. Horizons ne propose pas une Assurance maladie prenant seule en charge tous les soins essentiels ni une forte marginalisation des complémentaires ; -2 reste adapté.",
    "source": "https://questions.assemblee-nationale.fr/q17/17-6211QE.htm"
  },
  "77": {
    "response": 1,
    "justification": "Accord modéré : Frédéric Valletoux a assumé, lorsqu'il était ministre de la santé, qu'un hôpital puisse adapter son organisation et ses moyens à son niveau réel d'activité afin de garantir une gestion soutenable. Cette logique rend compatibles des regroupements ciblés, mais Horizons ne porte pas une doctrine générale de fermeture des petites maternités ou urgences ; +1 est plus prudent que +2.",
    "source": "https://questions.assemblee-nationale.fr/q16/16-1632QG.htm"
  },
  "78": {
    "justification": "Accord très fort : le programme d'Édouard Philippe propose explicitement que les chefs d'établissement puissent choisir et évaluer les enseignants. La question correspond directement à cette proposition ; +3 reste pleinement justifié.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants"
  },
  "79": {
    "justification": "Position intermédiaire : Horizons reconnaît l'objectif de mixité sociale, mais son groupe parlementaire a voté en commission pour supprimer un dispositif qui aurait diminué de 10 à 50 % le financement des établissements privés en fonction d'un indicateur de mixité, notamment parce qu'il ne traitait pas aussi la ségrégation dans le public. Le parti ne rejette donc pas la mixité, mais ne soutient pas la condition financière précise de Q79 ; 0 reste adapté.",
    "source": "https://www.assemblee-nationale.fr/dyn/opendata/RAPPANR5L17B0609.html"
  },
  "80": {
    "response": 1,
    "justification": "Accord modéré : des députés Horizons ont soutenu le renforcement des pouvoirs communaux face aux meublés touristiques dans les zones tendues et la possibilité de protéger les résidences principales. La ligne va vers une régulation locale forte sans établir une interdiction générale de toute location régulière de résidence secondaire ; +1 est plus précis que 0.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2024-2025/deuxieme-seance-du-mercredi-26-mars-2025"
  },
  "82": {
    "justification": "Accord très fort : des responsables Horizons soutiennent l'élargissement de la dimension européenne de la dissuasion française tout en maintenant à la France seule la décision finale d'emploi. La combinaison correspond directement à la question ; +3 reste adapté.",
    "source": "https://questions.assemblee-nationale.fr/q17/17-13730QE.htm"
  },
  "84": {
    "response": -1,
    "justification": "Désaccord modéré : la famille parlementaire à l'origine d'une partie d'Horizons a explicitement refusé l'interdiction des EHPAD privés lucratifs tout en demandant une transformation de leur statut, davantage de contrôle et des obligations sociales renforcées. Cette position s'oppose à la disparition progressive du lucratif, mais de manière réformatrice plutôt que libérale ; -1 est plus précis que -2.",
    "source": "https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L15B5152.raw"
  },
  "85": {
    "justification": "Accord net : Édouard Philippe propose une aide familiale unique, lisible et universelle ainsi qu'une part fiscale supplémentaire pour les familles. Cette universalité va nettement contre une disparition de l'aide avec le revenu, mais ne garantit pas explicitement un montant strictement identique pour tous ; +2 reste adapté.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-attentive-a-ses-enfants"
  },
  "86": {
    "justification": "Accord très fort : Horizons soutient l'interdiction des réseaux sociaux aux moins de 15 ans et les initiatives parlementaires allant dans ce sens. La mesure repose directement sur l'âge et non sur la seule autorisation parentale ; +3 reste adapté.",
    "source": "https://questions.assemblee-nationale.fr/dyn/17/scrutins/8431"
  },
  "87": {
    "justification": "Accord modéré : Horizons veut une infrastructure d'intelligence artificielle européenne souveraine, soutenir des champions européens et orienter la commande publique avec un Buy European Tech Act. Le programme ne dit pas qu'il faut accepter sans limite des modèles sensiblement moins performants ou plus coûteux ; +1 reste prudent.",
    "source": "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-conquerante"
  }
};

const horizonsParty = DATA.entities.find(entity => entity.id === 'horizons');
if (horizonsParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(HORIZONS_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) horizonsParty.responses[index] = override.response;
    if (override.justification) horizonsParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(horizonsParty.sources)) horizonsParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (horizonsParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  horizonsParty.axisScores = scores;
}
