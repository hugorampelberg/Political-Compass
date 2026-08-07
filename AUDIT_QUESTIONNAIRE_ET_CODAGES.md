# Audit du questionnaire et des codages politiques

Date de l'audit : 7 août 2026

Périmètre : 80 questions fermées, 6 axes, 11 partis français et 6 gouvernements étrangers.

## Conclusion générale

Le questionnaire mesure correctement les grands clivages idéologiques qu'il a choisis : économie, libertés/autorité, Europe, écologie, immigration/intégration et institutions. Il est particulièrement fourni sur l'économie, l'autorité, l'immigration et l'écologie.

En revanche, il ne balaie pas encore assez largement l'ensemble des politiques publiques actuelles. La santé, l'éducation, le logement, la défense, la politique étrangère, la décentralisation et le numérique sont trop peu ou pas mesurés. Ce ne sont pas des sujets secondaires dans les programmes officiels : le programme du Nouveau Front populaire consacre par exemple des ensembles complets à la santé, à l'éducation, au logement et à la diplomatie ; le programme de coalition danois de juin 2026 comporte des chapitres distincts sur l'école, le logement, la santé, l'intelligence artificielle et la sécurité européenne.

Les classements globaux des partis sont politiquement plausibles. Ils restituent bien les grandes familles : gauche économique, centre pro-européen, droite libérale et restrictive sur l'immigration, droite nationale, etc. Ils ne doivent toutefois pas être présentés comme une mesure exacte de 80 positions officielles. Chaque réponse possède une source, mais deux à quatre documents génériques sont souvent réutilisés pour les 80 questions d'une même organisation. Une partie importante des notes détaillées est donc une inférence à partir de la ligne générale plutôt qu'une position explicitement publiée.

L'audit initial n'avait modifié aucune note. Une seconde passe autorisée le 7 août 2026 a corrigé la question 66, les analogues internationaux de l'IFI, la masse de l'axe autorité et tous les scores dérivés. Le détail avant/après figure dans [le journal de recalibrage](CHANGEMENTS_CODAGES_2026-08-07.md). Les autres recommandations ci-dessous restent des propositions éditoriales.

## Méthode

L'audit combine quatre vérifications :

1. inventaire exhaustif des thèmes et coefficients des 80 questions ;
2. contrôle des signes, des questions sans effet et des formulations multidimensionnelles ;
3. analyse systématique des 1 360 codages existants, de leur niveau de confiance et de la diversité des sources ;
4. vérification ciblée des documents officiels et des gouvernements en fonction au 7 août 2026.

Une note est classée « forte mais fragile » ci-dessous lorsque sa valeur absolue est au moins égale à 2 sur 3, alors que son niveau de confiance interne vaut 1 sur 3.

## Équilibre des axes

| Axe | Questions où l'axe intervient | Questions principalement rattachées à l'axe | Masse réelle | Masse enregistrée dans `axisMasses` |
|---|---:|---:|---:|---:|
| Économie | 30 | 27 | 17,4 | 17,4 |
| Libertés / autorité | 38 | 17 | 23,1 | 23,1 |
| Europe | 5 | 5 | 4,6 | 4,6 |
| Écologie | 12 | 12 | 8,8 | 8,8 |
| Immigration / intégration | 15 | 13 | 10,9 | 10,9 |
| Démocratie / institutions | 6 | 6 | 5,5 | 5,5 |

L'ajout du coefficient d'autorité de +1 à la question 66 est désormais répercuté dans `axisMasses` : la masse réelle et la masse enregistrée valent toutes deux 23,1. Les 17 `axisScores` ont également été recalculés.

Même après correction de cette incohérence, l'équilibre restera insuffisant si le résultat final est censé donner « la même importance » aux six axes. Le code conserve leurs masses structurelles : l'autorité pèse beaucoup plus que l'Europe ou la démocratie. Le libellé de l'interface signifie seulement qu'aucun bonus supplémentaire de 30 % n'est appliqué ; il ne signifie pas que les axes ont un poids final identique.

## Sujets bien couverts et sujets manquants

### Couverture solide

- intervention publique, marché, fiscalité, entreprises, travail et retraites ;
- immigration, assimilation, nationalité et multiculturalisme ;
- police, justice, surveillance et liberté d'expression ;
- transition écologique, nucléaire, normes, croissance et pesticides ;
- intégration européenne et souveraineté ;
- représentation, référendums et équilibre exécutif/Parlement.

### Angles morts prioritaires

| Domaine | Pourquoi l'ajouter | Exemple de clivage mesurable |
|---|---|---|
| Santé et hôpital | Sujet central de dépense, d'accès territorial et de service public | Planification publique et obligation d'installation contre liberté d'installation des médecins |
| Éducation | Clivages sur les moyens, l'autonomie, la sélection et le privé | Cadre national uniforme contre autonomie des établissements |
| Logement | Sujet central dans les programmes français et étrangers | Encadrement des loyers et logement social contre libéralisation de l'offre |
| Défense | Les dépenses militaires, la dissuasion et l'industrie de défense sont absentes | Hausse durable du budget de défense, même au prix d'autres dépenses |
| Politique étrangère | L'axe Europe ne couvre pas l'OTAN, l'aide militaire ou le multilatéralisme | Autonomie stratégique française contre intégration accrue dans les alliances |
| Laïcité et religions | Clivage français distinct de l'immigration | Extension des restrictions sur les signes religieux dans l'espace public |
| Territoires et outre-mer | La décentralisation n'est évoquée qu'indirectement | Transfert de pouvoirs fiscaux et réglementaires aux collectivités |
| Numérique et IA | Régulation des plateformes, données et automatisation publique absentes | Encadrement strict de l'IA, même s'il ralentit l'innovation |
| Agriculture et alimentation | Une seule question agricole, centrée sur les pesticides | Protection des revenus agricoles contre concurrence et prix bas |
| Dépendance, handicap et famille | Les choix de solidarité hors retraite sont peu mesurés | Assurance publique obligatoire de la dépendance contre couverture individuelle |
| Commerce et industrie | Le protectionnisme n'est abordé que par l'écologie | Préférence nationale/européenne dans les marchés publics contre libre-échange |
| Culture et médias | Financement, concentration et indépendance ne sont pas couverts | Renforcement d'un audiovisuel public financé collectivement |

Ajouter dix à douze questions, réparties entre ces domaines, donnerait une représentation plus fidèle des programmes actuels sans transformer le test en inventaire interminable.

## Questions et coefficients à revoir

| Priorité | Question | Constat | Recommandation |
|---|---:|---|---|
| Résolue | 66 | La question avait été remplacée sans synchroniser les masses, les scores, les justificatifs et les sources. | Ligne refaite le 7 août 2026 ; masse, 17 scores, justifications et sources recalculés. |
| Critique | 23 | « Rendre la nationalité plus exigeante » produit bien un déplacement restrictif sur l'immigration (-1), mais aussi un déplacement libertaire sur l'autorité (-0,2). Ce second signe paraît inversé. | Passer le coefficient d'autorité à +0,2 ou le supprimer. |
| Haute | 11 | L'endettement pour un investissement public rentable est codé à droite économique (+0,2). Cette proposition traverse le clivage gauche/droite et peut même signaler une acceptation de l'investissement public. | Neutraliser le coefficient ou reformuler autour d'une règle budgétaire explicite. |
| Haute | 16 | La question mélange redistribution, quotas et restrictions de choix. Ces politiques ne mobilisent pas nécessairement le même axe ni la même réponse. | Scinder égalité économique et politiques de quotas en deux questions. |
| Haute | 17 | La correction des discriminations structurelles n'agit que sur l'économie (-0,3), alors qu'elle mesure surtout un clivage social et institutionnel. | Revoir l'axe principal ; ne pas l'assimiler automatiquement à la gauche économique. |
| Moyenne | 34 | Le nucléaire, clivage majeur, ne pèse que -0,2 sur l'écologie. | Conserver ce faible poids si l'objectif est d'éviter un « test nucléaire » ; sinon le porter à -0,4/-0,5. |
| Moyenne | 35 | La question oppose taxe carbone et interdictions : elle mesure à la fois l'instrument écologique et le rapport à la contrainte. | Le double codage est défendable, mais la formulation devrait préciser une mesure comparable. |
| Moyenne | 37 | La responsabilité climatique des pays riches mélange écologie, redistribution internationale et politique extérieure. | Conserver les deux axes en documentant ce choix ou scinder le sujet. |
| Moyenne | 50 | L'indexation de la retraite sur l'espérance de vie ne pèse que +0,3 malgré un clivage économique important. | Vérifier la cohérence avec le poids des autres questions de retraite. |
| Moyenne | 58 | Privilégier l'immigration qualifiée mesure un mode de sélection, pas nécessairement le volume ni l'ouverture migratoire. | Réduire encore le poids ou créer un sous-thème « sélection économique ». |
| Haute | 79 | La formulation demande une explication causale de la délinquance, pas une préférence politique. Elle risque de mesurer une croyance factuelle et la désirabilité sociale. | Reformuler en mesure publique : prévention socio-économique contre priorité à l'assimilation et au contrôle. |

## Audit des partis français

| Parti | Sources officielles distinctes pour 80 notes | Notes de confiance faible | Notes fortes mais fragiles | Diagnostic |
|---|---:|---:|---:|---|
| LFI | 4 | 20 | 16 | Axes globaux cohérents ; beaucoup de détails sont déduits malgré un programme fourni. |
| PCF | 4 | 16 | 12 | Cohérence globale forte ; plusieurs sujets secondaires restent extrapolés. |
| Les Écologistes | 3 | 25 | 18 | Programme très détaillé, mais codages non écologiques parfois inférés. |
| PS | 4 | 28 | 16 | Orientation plausible ; base documentaire trop générale pour 80 notes précises. |
| Renaissance | 2 | 27 | 20 | Fragilité élevée : la page d'accueil et un débat parlementaire ne suffisent pas à documenter 80 positions. |
| MoDem | 4 | 27 | 12 | Beaucoup de valeurs intermédiaires et seulement 15 notes de confiance élevée. |
| Horizons | 2 | 22 | 18 | Manifeste utile mais trop synthétique pour les notes détaillées. |
| LR | 2 | 27 | 18 | Grandes orientations crédibles ; précision question par question insuffisamment sourcée. |
| Nouvelle Énergie | 2 | 19 | 12 | Programme structuré et codage global cohérent ; manque de sources sur les sujets hors programme. |
| RN | 4 | 20 | 10 | Programmes nationaux et européens solides pour les grands clivages ; détails sociétaux parfois inférés. |
| Reconquête | 2 | 19 | 14 | Orientation globale nette ; page d'accueil trop générale pour soutenir seule la plupart des notes. |

### Verdict sur les notes des partis

Les positions agrégées sont crédibles comme repères idéologiques relatifs. Leur ordre sur les axes ne présente pas d'inversion manifeste : LFI/PCF/Écologistes sont fortement à gauche économiquement, Renaissance/MoDem sont très pro-européens, LR/Nouvelle Énergie sont à droite économiquement et restrictifs sur l'immigration, RN/Reconquête sont souverainistes et très restrictifs.

La précision au point près n'est cependant pas justifiée partout. Les codages les plus fragiles sont les valeurs ±2 ou ±3 associées à une confiance de 1. Les cinq questions nouvellement expliquées illustrent le problème : plusieurs organisations obtiennent une note forte sur les questions 13 ou 16 alors que la source invoquée décrit seulement leur philosophie générale. Ces notes devraient soit recevoir une source ciblée, soit être ramenées vers 0/±1, soit être affichées comme « estimation ».

Le niveau de confiance 3 mérite lui-même un contrôle : plusieurs justifications se limitent à « position centrale ou répétée » sans citer la mesure ni le passage qui la prouve. Par exemple, la page d'accueil de Renaissance est utilisée pour attribuer une confiance élevée sur l'intervention de l'État, l'Europe ou l'IFI. Une URL officielle générique ne devrait pas suffire à obtenir le niveau maximal.

La nouvelle question 66 révélait un défaut plus net : plusieurs niveaux de confiance avaient été passés à 3 alors que leur justification disait toujours « estimation prudente ; aucune formulation parfaitement équivalente ». Ce défaut est corrigé : les 11 partis disposent désormais d'une justification et d'une source portant sur l'usage des armes ou sur le scrutin parlementaire le plus proche.

Le cas de LFI était une erreur substantielle identifiable : la valeur +2 contredisait sa demande officielle d'abrogation de la loi de 2017. La note vaut désormais -3. Les -3 du PCF et des Écologistes ont été conservés et reliés aux bonnes preuves.

## Audit des gouvernements étrangers

| Gouvernement | Sources officielles distinctes | Notes de confiance faible | Notes fortes mais fragiles | Diagnostic |
|---|---:|---:|---:|---|
| Allemagne — Merz | 3 | 8 | 3 | Gouvernement et coalition correctement identifiés ; contrat de coalition pertinent. |
| Espagne — Sánchez | 3 | 15 | 6 | Sources officielles riches et encore actuelles ; quelques thèmes demandent des textes sectoriels. |
| Suisse — Conseil fédéral | 4 | 18 | 3 | Sources fiables, mais un score unique masque la composition multipartite et la collégialité. |
| Finlande — Orpo | 3 | 22 | 10 | Gouvernement et programme correctement identifiés ; trop d'extrapolations sur les sujets non traités. |
| Royaume-Uni — Burnham | 4 | 22 | 3 | Gouvernement actuel correctement nommé, mais plusieurs sources et notes proviennent encore du gouvernement Starmer. |
| Danemark — Frederiksen III | 2 | 20 | 4 | Coalition et programme de juin 2026 correctement identifiés ; le document de 77 pages est une bonne base, mais une seconde source sectorielle ne couvre pas tous les écarts. |

### Points temporels vérifiés

- Friedrich Merz est chancelier depuis le 6 mai 2025 et le contrat CDU/CSU-SPD est bien la base du gouvernement allemand actuel.
- Pedro Sánchez est toujours président du gouvernement espagnol ; les engagements et annonces officielles de 2025-2026 restent utilisables.
- Le gouvernement finlandais Orpo réunit bien KOK, les Finlandais, le Parti populaire suédois et les Chrétiens-démocrates.
- Andy Burnham est devenu Premier ministre britannique le 20 juillet 2026. Le « Plan for Change » utilisé dans les données date pourtant du 5 décembre 2024 et le King's Speech cité date du 12 mai 2026, sous Keir Starmer. Burnham a annoncé qu'un nouveau plan décennal serait présenté plus tard en 2026 : le profil britannique doit donc être considéré comme provisoire.
- Le programme danois de juin 2026 est signé par Mette Frederiksen, Pia Olsen Dyhr, Lars Løkke Rasmussen et Martin Lidegaard, ce qui confirme la coalition S-SF-M-RV.

### Limite de comparabilité internationale

Plusieurs questions ne peuvent pas être transposées littéralement aux gouvernements étrangers :

- la question 43 porte sur l'IFI, un impôt français précis ;
- les questions 38 à 42 supposent la situation de la France dans l'Union européenne et dans la zone euro ;
- les questions 23, 56 et 59 supposent le droit français de la nationalité ;
- plusieurs questions fiscales, sociales ou institutionnelles dépendent de systèmes nationaux très différents.

Les notes étrangères correspondantes ne décrivent donc pas toujours une position publique réelle. Le problème était manifeste pour la question 43 : le Danemark recevait +2 à partir d'un passage général sur l'impôt sur les sociétés et la Suisse +3 à partir d'un document général sur son économie sociale de marché. Les six codages reposent désormais sur des analogues immobiliers ou patrimoniaux explicites ; quatre votes ont changé.

La question 66 posait le même problème de preuve : les six gouvernements étrangers recevaient +2 avec des justifications génériques. Ils sont désormais codés à partir des règles nationales d'usage des armes. La Suisse reste à 0, car les polices cantonales ne permettent pas d'attribuer une doctrine uniforme au Conseil fédéral.

Deux solutions sont possibles : créer une version internationale reformulée (« faut-il taxer spécifiquement les patrimoines immobiliers élevés ? »), ou marquer ces questions « non applicables » et les exclure du calcul de la distance pour le gouvernement concerné. Tant que ce choix n'est pas fait, les profils de pays doivent être présentés comme des analogies politiques, pas comme des réponses littérales au questionnaire français.

## Corrections de données à traiter en premier

1. ~~Refaire intégralement la ligne 66 et corriger LFI.~~ Fait le 7 août 2026.
2. ~~Recalculer la masse de l'autorité et les scores d'axe des 17 entités.~~ Fait le 7 août 2026 ; un contrôle automatisé prévient désormais la désynchronisation.
3. Refaire le Royaume-Uni à partir des discours et du futur plan Burnham, sans attribuer automatiquement à Burnham toutes les positions Starmer.
4. Ajouter des sources thématiques à Renaissance, Horizons, LR et Reconquête avant de conserver leurs valeurs fortes de faible confiance.
5. Réexaminer toutes les notes fortes mais fragiles, en commençant par les questions 11, 13, 16, 31, 52, 64, 65, 75 et 76, qui reviennent souvent.
6. Pour la Suisse, préciser que le résultat décrit un compromis institutionnel et non le programme homogène d'une majorité.
7. Neutraliser ou reformuler les autres questions franco-spécifiques dans la comparaison internationale, en priorité les questions 38 à 42.
8. Conserver une date de validité par entité et une date par source afin de rendre visibles les changements de direction, de coalition ou de programme.

## Règle de preuve recommandée

Chaque note devrait être accompagnée de quatre champs auditables :

- **statut** : explicite, déduite ou inconnue ;
- **preuve** : proposition ou passage précis, pas seulement la page d'accueil ;
- **date** : date du document et date de dernière vérification ;
- **confiance** : élevée uniquement lorsqu'une source vise directement la question.

Une absence de position officielle devrait produire 0 avec le statut « inconnue », plutôt qu'une note forte déduite de l'étiquette idéologique. Cette règle réduira les faux écarts et rendra les mises à jour beaucoup plus faciles.

## Principales sources officielles contrôlées

- [Nouveau Front populaire — contrat de législature 2024](https://lafranceinsoumise.fr/wp-content/uploads/2024/06/Programme-nouveaufrontpopulaire.pdf)
- [Les Écologistes — programme officiel](https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf)
- [PCF — feuille de route](https://www.pcf.fr/feuille_de_route_confnat_pcf)
- [PS — déclaration politique de la 17e législature](https://parti-socialiste.fr/vie-parlementaire/notre-declaration-politique-17eme-legislature/)
- [LFI — demande d'abrogation de la loi de 2017 sur l'usage des armes](https://lafranceinsoumise.fr/2023/11/06/abrogation-de-la-loi-cazeneuve-de-2017/)
- [PCF — position sur les tirs après refus d'obtempérer](https://www.pcf.fr/pour_la_verite_et_la_justice_pour_nahel)
- [Les Écologistes — position sur les tirs après refus d'obtempérer](https://idf.lesecologistes.fr/posts/2Y0LtydTphI82UwIdYe8rt/communique-de-presse-nanterre-un-refus-d-obtemperer-ne-justifie-jamais-d-etre-abattu-a-bout-portant)
- [Allemagne — contrat de coalition 2025](https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2025-2340970)
- [Espagne — engagements gouvernementaux](https://www.lamoncloa.gob.es/Documents/2025/appendix-II-map-of-commitments-december.pdf)
- [Finlande — programme du gouvernement Orpo](https://valtioneuvosto.fi/en/governments/government-programme)
- [Royaume-Uni — Plan for Change de 2024](https://www.gov.uk/government/publications/plan-for-change)
- [Royaume-Uni — premier discours d'Andy Burnham, 20 juillet 2026](https://www.gov.uk/government/speeches/andy-burnhams-first-speech-as-prime-minister-20-july-2026)
- [Danemark — programme de coalition, juin 2026](https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf)
