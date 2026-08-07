# Audit du questionnaire et des codages politiques

Date de l'audit : 7 août 2026

Périmètre actuel : 87 questions fermées, 6 axes, 13 partis français et 8 gouvernements étrangers.

## Conclusion générale

Le questionnaire mesure correctement les grands clivages idéologiques qu'il a choisis : économie, libertés/autorité, Europe, écologie, immigration/intégration et institutions. Il est particulièrement fourni sur l'économie, l'autorité, l'immigration et l'écologie.

La refonte thématique du 7 août 2026 a corrigé les principaux angles morts : santé et hôpital, éducation, logement, défense, fin de vie, dépendance, famille et intelligence artificielle sont désormais représentés par treize questions. Six questions redondantes de sécurité ou d'économie ont été retirées. Le détail figure dans [le journal de la refonte thématique](CHANGEMENTS_QUESTIONS_2026-08-07.md). UDR, La France Humaniste, les Pays-Bas et la Pologne ont ensuite été ajoutés ; leurs sources et scores figurent dans [le journal d'ajout des profils](AJOUT_PROFILS_2026-08-07.md).

Les classements globaux des partis sont politiquement plausibles. Ils restituent bien les grandes familles : gauche économique, centre pro-européen, droite libérale et restrictive sur l'immigration, droite nationale, etc. Ils ne doivent toutefois pas être présentés comme une mesure exacte de 87 positions officielles. Chaque réponse possède une source, mais des documents génériques restent réutilisés lorsque aucune prise de position parfaitement équivalente n'existe. Une partie des notes détaillées demeure donc une inférence à partir de la ligne générale plutôt qu'une position explicitement publiée ; le niveau de confiance sert à le signaler.

L'audit initial n'avait modifié aucune note. Une seconde passe autorisée le 7 août 2026 a corrigé la question 66, les analogues internationaux de l'IFI, la masse de l'axe autorité et tous les scores dérivés. Une troisième passe a ensuite contrôlé les 1 827 couples note/confiance. La branche contient finalement dix-huit modifications de note : neuf étayées par une source officielle ou une déclaration directe et neuf recalibrages de La France Humaniste demandés puis réexaminés avec le propriétaire du questionnaire. La passe exhaustive a réévalué 429 indices de confiance ; une consolidation ultérieure du programme 2026 et du bilan public de Dominique de Villepin a permis d'en relever 42 pour La France Humaniste. Le détail figure dans [le journal de recalibrage](CHANGEMENTS_CODAGES_2026-08-07.md) et dans [l'audit complet des codages](AUDIT_COMPLET_CODAGES_2026-08-07.md).

## Méthode

L'audit combine quatre vérifications :

1. inventaire exhaustif des thèmes et coefficients des 87 questions ;
2. contrôle des signes, des questions sans effet et des formulations multidimensionnelles ;
3. analyse systématique des 1 827 codages existants, de leur niveau de confiance et de la diversité des sources ;
4. vérification ciblée des documents officiels et des gouvernements en fonction au 7 août 2026.

Une note est classée « forte mais fragile » ci-dessous lorsque sa valeur absolue est au moins égale à 2 sur 3, alors que son niveau de confiance interne vaut 1 sur 3.

## Équilibre des axes

| Axe | Questions où l'axe intervient | Questions principalement rattachées à l'axe | Masse réelle | Masse enregistrée dans `axisMasses` |
|---|---:|---:|---:|---:|
| Économie | 37 | 32 | 22,0 | 22,0 |
| Libertés / autorité | 39 | 16 | 22,4 | 22,4 |
| Europe | 8 | 8 | 7,2 | 7,2 |
| Écologie | 11 | 11 | 8,1 | 8,1 |
| Immigration / intégration | 15 | 14 | 10,9 | 10,9 |
| Démocratie / institutions | 8 | 7 | 6,3 | 6,3 |

La suppression de quatre questions principalement autoritaires réduit la masse de cet axe malgré l'ajout de nouvelles questions de santé, d'éducation, de défense, de fin de vie et de numérique. L'Europe gagne 2,6 points de masse grâce aux questions sur l'Ukraine, la dissuasion et la souveraineté numérique. Les 21 `axisScores` ont été calculés ou recalculés.

Les axes restent normalisés séparément sur une échelle de -10 à +10. Une masse élevée apporte davantage d'observations à l'axe et rend sa mesure moins sensible à une réponse isolée ; elle ne multiplie pas directement son poids dans la comparaison finale.

## Sujets bien couverts et sujets restant à approfondir

### Couverture solide

- intervention publique, marché, fiscalité, entreprises, travail et retraites ;
- immigration, assimilation, nationalité et multiculturalisme ;
- police, justice, surveillance et liberté d'expression ;
- transition écologique, nucléaire, normes, croissance et pesticides ;
- intégration européenne et souveraineté ;
- représentation, référendums et équilibre exécutif/Parlement.
- accès aux soins, organisation hospitalière et financement de la santé ;
- autonomie scolaire, enseignement privé et mixité sociale ;
- locations touristiques et pouvoir municipal en matière de logement ;
- soutien à l'Ukraine et dimension européenne de la dissuasion ;
- fin de vie, EHPAD, prestations familiales et régulation numérique.

### Angles restant peu couverts

| Domaine | Pourquoi l'ajouter | Exemple de clivage mesurable |
|---|---|---|
| Laïcité et religions | Clivage français distinct de l'immigration | Extension des restrictions sur les signes religieux dans l'espace public |
| Territoires et outre-mer | La décentralisation n'est évoquée qu'indirectement | Transfert de pouvoirs fiscaux et réglementaires aux collectivités |
| Agriculture et alimentation | Une seule question agricole, centrée sur les pesticides | Protection des revenus agricoles contre concurrence et prix bas |
| Handicap | La dépendance des personnes âgées est désormais abordée, mais pas l'autonomie des personnes handicapées | Priorité à l'accessibilité universelle contre compensation individuelle ciblée |
| Commerce et industrie | Le protectionnisme n'est abordé que par l'écologie | Préférence nationale/européenne dans les marchés publics contre libre-échange |
| Culture et médias | Financement, concentration et indépendance ne sont pas couverts | Renforcement d'un audiovisuel public financé collectivement |

Ces thèmes peuvent faire l'objet d'une prochaine passe, mais ils sont moins urgents que les angles morts corrigés par les questions 81 à 93.

## Questions et coefficients à revoir

| Priorité | Question | Constat | Recommandation |
|---|---:|---|---|
| Résolue | 66 | La question avait été remplacée sans synchroniser les masses, les scores, les justificatifs et les sources. | Ligne refaite le 7 août 2026 ; masse, 17 scores, justifications et sources recalculés. |
| Critique | 23 | « Rendre la nationalité plus exigeante » produit bien un déplacement restrictif sur l'immigration (-1), mais aussi un déplacement libertaire sur l'autorité (-0,2). Ce second signe paraît inversé. | Passer le coefficient d'autorité à +0,2 ou le supprimer. |
| Haute | 16 | La question mélange redistribution, quotas et restrictions de choix. Ces politiques ne mobilisent pas nécessairement le même axe ni la même réponse. | Scinder égalité économique et politiques de quotas en deux questions. |
| Haute | 17 | La correction des discriminations structurelles n'agit que sur l'économie (-0,3), alors qu'elle mesure surtout un clivage social et institutionnel. | Revoir l'axe principal ; ne pas l'assimiler automatiquement à la gauche économique. |
| Moyenne | 34 | Le nucléaire, clivage majeur, ne pèse que -0,2 sur l'écologie. | Conserver ce faible poids si l'objectif est d'éviter un « test nucléaire » ; sinon le porter à -0,4/-0,5. |
| Moyenne | 35 | La question oppose taxe carbone et interdictions : elle mesure à la fois l'instrument écologique et le rapport à la contrainte. | Le double codage est défendable, mais la formulation devrait préciser une mesure comparable. |
| Moyenne | 37 | La responsabilité climatique des pays riches mélange écologie, redistribution internationale et politique extérieure. | Conserver les deux axes en documentant ce choix ou scinder le sujet. |
| Moyenne | 50 | L'indexation de la retraite sur l'espérance de vie ne pèse que +0,3 malgré un clivage économique important. | Vérifier la cohérence avec le poids des autres questions de retraite. |
| Moyenne | 58 | Privilégier l'immigration qualifiée mesure un mode de sélection, pas nécessairement le volume ni l'ouverture migratoire. | Réduire encore le poids ou créer un sous-thème « sélection économique ». |
| Haute | 79 | La formulation demande une explication causale de la délinquance, pas une préférence politique. Elle risque de mesurer une croyance factuelle et la désirabilité sociale. | Reformuler en mesure publique : prévention socio-économique contre priorité à l'assimilation et au contrôle. |

## Audit des partis français

| Parti | Sources officielles distinctes pour 87 notes | Notes de confiance faible | Notes fortes mais fragiles | Diagnostic |
|---|---:|---:|---:|---|
| LFI | 12 | 24 | 19 | Axes globaux cohérents ; les nouveaux scrutins améliorent la traçabilité. |
| PCF | 11 | 19 | 15 | Cohérence globale forte ; plusieurs sujets secondaires restent extrapolés. |
| Les Écologistes | 7 | 25 | 17 | Programme très détaillé, mais codages non écologiques parfois inférés. |
| PS | 11 | 26 | 13 | Orientation plausible ; les nouveaux votes et documents thématiques renforcent la base. |
| Renaissance | 8 | 26 | 18 | Les scrutins améliorent plusieurs notes, mais des thèmes restent documentés par une ligne générale. |
| MoDem | 9 | 30 | 11 | Beaucoup de valeurs intermédiaires et d'estimations prudentes. |
| Horizons | 7 | 23 | 17 | Manifeste utile mais encore trop synthétique pour certains détails. |
| LR | 7 | 29 | 18 | Grandes orientations crédibles ; précision question par question parfois insuffisamment sourcée. |
| Nouvelle Énergie | 3 | 26 | 12 | Programme structuré ; manque de sources sur les sujets hors programme. |
| La France Humaniste | 15 | 12 | 7 | Programme actuel complété par les prises de position et le bilan public de Dominique de Villepin ; les archives anciennes restent plafonnées à une confiance moyenne. |
| RN | 10 | 26 | 11 | Programmes et scrutins solides pour les grands clivages ; détails sociaux parfois inférés. |
| UDR | 10 | 60 | 48 | Ligne économique, migratoire et régalienne nette ; les autres thèmes sont plus souvent extrapolés et désormais signalés en faible confiance. |
| Reconquête | 3 | 28 | 21 | Orientation globale nette ; peu de positions parlementaires directement comparables. |

### Verdict sur les notes des partis

Les positions agrégées sont crédibles comme repères idéologiques relatifs. Leur ordre sur les axes ne présente pas d'inversion manifeste : LFI/PCF/Écologistes sont fortement à gauche économiquement, Renaissance/MoDem sont très pro-européens, LR/Nouvelle Énergie sont à droite économiquement et restrictifs sur l'immigration, RN/Reconquête sont souverainistes et très restrictifs.

La précision au point près n'est cependant pas justifiée partout. Les codages les plus fragiles sont les valeurs ±2 ou ±3 associées à une confiance de 1. Les cinq questions nouvellement expliquées illustrent le problème : plusieurs organisations obtiennent une note forte sur les questions 13 ou 16 alors que la source invoquée décrit seulement leur philosophie générale. Ces notes devraient soit recevoir une source ciblée, soit être ramenées vers 0/±1, soit être affichées comme « estimation ».

Le niveau de confiance 3 a été contrôlé lors de la passe exhaustive. Les 368 justifications qui se limitaient à « position centrale ou répétée » sans citer une mesure directement équivalente sont passées à 2. Les 25 lignes dont la justification reconnaissait l'absence de formulation équivalente sont passées à 1. Les notes elles-mêmes ont été conservées, conformément à la règle de prudence demandée.

La nouvelle question 66 révélait un défaut plus net : plusieurs niveaux de confiance avaient été passés à 3 alors que leur justification disait toujours « estimation prudente ; aucune formulation parfaitement équivalente ». Ce défaut est corrigé : les 13 partis disposent désormais d'une justification et d'une source portant sur l'usage des armes ou sur le scrutin parlementaire le plus proche.

Le cas de LFI était une erreur substantielle identifiable : la valeur +2 contredisait sa demande officielle d'abrogation de la loi de 2017. La note vaut désormais -3. Les -3 du PCF et des Écologistes ont été conservés et reliés aux bonnes preuves.

## Audit des gouvernements étrangers

| Gouvernement | Sources officielles distinctes | Notes de confiance faible | Notes fortes mais fragiles | Diagnostic |
|---|---:|---:|---:|---|
| Allemagne — Merz | 10 | 8 | 2 | Gouvernement et coalition correctement identifiés ; contrat de coalition pertinent. |
| Espagne — Sánchez | 10 | 14 | 6 | Sources officielles riches et encore actuelles ; quelques thèmes demandent des textes sectoriels. |
| Suisse — Conseil fédéral | 15 | 22 | 3 | Sources fiables, mais un score unique masque la composition multipartite et la collégialité. |
| Finlande — Orpo | 3 | 22 | 10 | Gouvernement et programme correctement identifiés ; trop d'extrapolations sur les sujets non traités. |
| Royaume-Uni — Burnham | 10 | 21 | 2 | Gouvernement actuel correctement nommé, mais plusieurs sources et notes proviennent encore du gouvernement Starmer. |
| Danemark — Frederiksen III | 8 | 20 | 2 | Coalition et programme de juin 2026 correctement identifiés ; le document de 77 pages est une bonne base, mais une seconde source sectorielle ne couvre pas tous les écarts. |
| Pays-Bas — Jetten | 3 | 38 | 15 | L'accord de coalition 2026–2030 couvre directement de nombreux sujets ; les questions absentes du texte restent en faible confiance. |
| Pologne — Tusk | 6 | 57 | 17 | Sources gouvernementales solides sur économie, défense, Europe et migration ; coalition divisée et nombreux silences sur les sujets sociétaux. |

### Points temporels vérifiés

- Friedrich Merz est chancelier depuis le 6 mai 2025 et le contrat CDU/CSU-SPD est bien la base du gouvernement allemand actuel.
- Pedro Sánchez est toujours président du gouvernement espagnol ; les engagements et annonces officielles de 2025-2026 restent utilisables.
- Le gouvernement finlandais Orpo réunit bien KOK, les Finlandais, le Parti populaire suédois et les Chrétiens-démocrates.
- Andy Burnham est devenu Premier ministre britannique le 20 juillet 2026. Le « Plan for Change » utilisé dans les données date pourtant du 5 décembre 2024 et le King's Speech cité date du 12 mai 2026, sous Keir Starmer. Burnham a annoncé qu'un nouveau plan décennal serait présenté plus tard en 2026 : le profil britannique doit donc être considéré comme provisoire.
- Le programme danois de juin 2026 est signé par Mette Frederiksen, Pia Olsen Dyhr, Lars Løkke Rasmussen et Martin Lidegaard, ce qui confirme la coalition S-SF-M-RV.
- Le gouvernement néerlandais Jetten, formé par D66, VVD et CDA, est entré en fonction le 23 février 2026 ; l'accord de coalition 2026–2030 sert de source centrale au profil.
- Le profil polonais décrit le gouvernement Tusk et sa coalition KO–PSL–Polska 2050–Nouvelle Gauche ; les désaccords internes sont rapprochés de zéro et assortis d'une confiance faible.

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
2. ~~Recalculer la masse de l'autorité et les scores d'axe des 17 entités initiales.~~ Fait le 7 août 2026 ; les quatre profils ajoutés ensuite ont été calculés avec la même formule et un contrôle automatisé prévient désormais la désynchronisation.
3. Refaire le Royaume-Uni à partir des discours et du futur plan Burnham, sans attribuer automatiquement à Burnham toutes les positions Starmer.
4. ~~Réévaluer les confiances maximales fondées sur une formule générique ou une absence de proposition équivalente.~~ Fait le 7 août 2026 sur les 1 827 codages : 429 indices ont été réévalués lors de la passe exhaustive, puis 42 confiances de La France Humaniste ont été relevées après consolidation documentaire.
5. Ajouter progressivement des sources thématiques à Renaissance, Horizons, LR, Reconquête et UDR afin de consolider les notes fortes désormais signalées en faible confiance. La France Humaniste a fait l'objet d'une consolidation dédiée ; douze estimations prudentes subsistent.
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
- [UDR — ligne générale officielle](https://www.udr.fr/)
- [La France Humaniste — Le moment français](https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html)
- [Pays-Bas — accord de coalition Jetten 2026–2030](https://www.government.nl/site/binaries/site-content/collections/documents/2026/02/23/2026-2030-coalition-agreement-lets-get-to-work---building-a-better-netherlands/2026-2030-coalition-agreement-let%E2%80%99s-get-to-work-building-a-better-netherlands.pdf)
- [Pologne — exposé du gouvernement Tusk](https://www.gov.pl/web/primeminister/expose)
