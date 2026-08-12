const LFI_RESPONSE_OVERRIDES = {
  2: {
    justification: "Désaccord modéré : LFI rejette l'idée que les inégalités deviennent globalement acceptables dès lors qu'elles seraient attribuées au mérite, au travail ou à la prise de risque. Le mouvement veut fortement réduire les écarts de rémunération et a notamment proposé un plafond de 1 à 20 au sein d'une même entreprise. Il n'exige toutefois pas une égalité parfaite des revenus et admet donc certains écarts de rémunération ; -1 reste plus précis qu'un désaccord maximal.",
    source: "https://www.assemblee-nationale.fr/dyn/opendata/PIONANR5L17B0412.html"
  },
  18: {
    response: -2,
    justification: "Désaccord net : LFI ne défend pas une différenciation généralisée permettant à chaque région de fixer librement ses propres règles économiques, sociales ou environnementales et reste attachée à un cadre national garantissant l'égalité. Elle accepte toutefois d'importantes différenciations territoriales, notamment un statut d'autonomie renforcée pour la Corse et des évolutions institutionnelles spécifiques pour certains territoires insulaires et ultramarins. Le désaccord avec la proposition est donc net, mais pas maximal ; -2 est plus adapté que -3.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  21: {
    justification: "Accord très fort : LFI défend explicitement l'idée que l'immigration contribue positivement à la société française et conteste les discours qui la présentent comme un coût économique global. Le mouvement souligne notamment la contribution des personnes immigrées au travail, aux cotisations et aux finances publiques. La proposition selon laquelle l'immigration économique est globalement bénéfique correspond donc directement à sa ligne ; +3 est adapté.",
    source: "https://lafranceinsoumise.fr/2023/12/15/stop-a-la-loi-immigration/"
  },
  27: {
    response: -3,
    justification: "Désaccord très fort : la question propose de durcir les peines de prison même si cela augmente fortement la population carcérale. LFI veut au contraire mettre fin à la surpopulation par un mécanisme contraignant de régulation carcérale et renforcer les moyens de réinsertion. Le mouvement ne rejette pas la prison pour les infractions graves, mais il refuse précisément une stratégie générale fondée sur davantage d'incarcération ; la contrepartie posée par la question est donc presque exactement l'inverse de sa ligne, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s7/"
  },
  33: {
    response: -3,
    justification: "Désaccord très fort : LFI veut sortir des énergies fossiles, mais refuse que cette transition passe par une forte hausse de leur prix supportée par les ménages. Le groupe demande au contraire le blocage des prix de l'énergie, le retour à des tarifs réglementés au coût de production et un financement de la bifurcation écologique par le budget public et les entreprises polluantes. Le mécanisme de renchérissement substantiel proposé par la question est donc directement opposé à sa ligne, d'où -3.",
    source: "https://lafranceinsoumise.fr/2025/12/02/communique-du-groupe-lfi-cee-la-bifurcation-ecologique-doit-etre-payee-par-les-multinationales-pas-par-les-consommateurs/"
  },
  34: {
    response: -3,
    justification: "Désaccord très fort : LFI dénonce explicitement la « TVA sociale » comme une TVA antisociale et critique déjà le fait que la TVA compense des baisses de cotisations accordées aux entreprises. La question décrit précisément un transfert d'une partie du financement des cotisations vers la TVA, avec un risque de hausse des prix pour les consommateurs. Cette logique est directement contraire à la position défendue par LFI, ce qui justifie -3.",
    source: "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2024-2025/deuxieme-seance-du-mardi-10-juin-2025"
  },
  38: {
    response: -2,
    justification: "Désaccord net : LFI souhaite des coopérations européennes fortes et davantage d'harmonisation sociale et écologique, mais sa stratégie actuelle ne consiste pas à transférer globalement davantage de compétences à l'Union européenne. Elle veut au contraire récupérer pour les États leur souveraineté budgétaire, conserver des leviers nationaux et désobéir aux règles européennes qui empêchent l'application de son programme. Le désaccord avec un transfert supplémentaire général de compétences est donc net, sans être maximal puisque LFI reste favorable à de nombreuses politiques communes européennes ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/"
  },
  44: {
    justification: "Accord net : LFI veut augmenter les droits de succession sur les plus hauts patrimoines et instaurer un héritage maximal de 12 millions d'euros, soit environ cent fois le patrimoine net médian. Le principe d'une taxation accrue au-delà d'un seuil correspond donc clairement à la proposition. Toutefois, le seuil défendu est extrêmement élevé et concentre l'effort supplémentaire sur une fraction très restreinte des transmissions ; cette intensité ciblée justifie de conserver +2 plutôt que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  46: {
    response: -3,
    justification: "Désaccord très fort : LFI propose explicitement de supprimer l'obligation d'accepter une « offre raisonnable d'emploi », de mettre fin aux radiations punitives et de revenir sur les réformes durcissant les conditions de l'assurance-chômage. La question prévoit au contraire une perte significative d'indemnisation après plusieurs refus d'offres raisonnables. Le mécanisme visé est directement celui que LFI veut supprimer, ce qui justifie -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s5/"
  },
  48: {
    response: -3,
    justification: "Désaccord très fort : LFI considère la précarisation de l'emploi et la multiplication des contrats courts comme le problème à corriger, et non la protection excessive des salariés en CDI. Son programme veut limiter fortement les contrats précaires, abroger les réformes de flexibilisation du travail et renforcer la stabilité de l'emploi. La prémisse de la question selon laquelle le CDI protège trop les salariés déjà en poste est donc presque exactement opposée à sa doctrine, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s3/"
  },
  58: {
    response: -3,
    justification: "Désaccord très fort : LFI rejette explicitement la logique d'« immigration choisie », qu'elle juge absurde et réductrice lorsqu'elle sélectionne les migrants selon leur utilité économique. Sa politique migratoire privilégie les droits, l'accueil, les visas et la régularisation de catégories larges de personnes plutôt qu'une priorité donnée aux plus qualifiés au prix d'une diminution de l'immigration peu qualifiée. L'arbitrage précis de la question est donc directement contraire à sa doctrine, d'où -3.",
    source: "https://melenchon2027.fr/livrets-2022/migrations/"
  },
  59: {
    justification: "Accord très fort : LFI propose de garantir le droit du sol intégral aux enfants nés en France et de faciliter l'accès à la nationalité française. Pour une personne née en France de parents étrangers et ayant grandi dans le pays, LFI ne souhaite donc pas subordonner l'accès à la nationalité à la démonstration d'un attachement culturel particulier. La proposition correspond directement à cette logique ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  63: {
    response: -2,
    justification: "Désaccord net : LFI critique l'extension des dispositifs antiterroristes qui permettent de restreindre les libertés ou de placer des personnes sous surveillance administrative sans contrôle judiciaire suffisant. Son programme veut revenir sur les dispositions relevant de l'« état d'urgence permanent » et renforcer le rôle du juge judiciaire. LFI ne rejette toutefois pas toute action préventive : elle veut aussi renforcer le renseignement humain, l'infiltration et le suivi de personnes présentant un risque. Le désaccord avec une surveillance préventive sans preuves suffisantes est donc net mais pas absolu ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s2/"
  },
  64: {
    justification: "Accord net : LFI défend une conception large de la liberté d'expression et rappelle notamment que le blasphème, la critique des religions et les propos choquants restent licites tant qu'ils ne franchissent pas les limites prévues par la loi. Le mouvement accepte toutefois des restrictions concernant notamment l'injure, la diffamation, les discriminations ou l'incitation à la haine. La protection des propos profondément offensants mais licites est donc clairement défendue sans être absolue ; +2 est adapté.",
    source: "https://lafranceinsoumise.fr/2020/01/25/face-a-toutes-les-haines-la-laicite/"
  },
  67: {
    response: -2,
    justification: "Désaccord net : LFI refuse que la transition écologique soit financée par une hausse durable des factures d'énergie supportée par les ménages et privilégie le financement budgétaire, la régulation des prix et la contribution des entreprises polluantes. La compensation ciblée prévue par la question atténue néanmoins le désaccord puisqu'elle protège une partie des ménages modestes. LFI reste opposée au principe de maintenir d'abord un renchérissement du carbone payé par les consommateurs, mais la compensation empêche de retenir -3 ; -2 est plus précis.",
    source: "https://lafranceinsoumise.fr/2025/12/02/communique-du-groupe-lfi-cee-la-bifurcation-ecologique-doit-etre-payee-par-les-multinationales-pas-par-les-consommateurs/"
  },
  68: {
    response: 2,
    justification: "Accord net : LFI veut accélérer l'électrification des transports, développer la production française de véhicules électriques légers et réduire fortement l'usage des énergies fossiles. Mais elle insiste aussi sur l'accessibilité économique de la transition et demande un moratoire sur les ZFE actuelles lorsqu'elles pénalisent les ménages qui n'ont pas d'alternative abordable. Elle est donc clairement favorable à la sortie progressive du thermique, sans assumer de façon aussi absolue une hausse du prix moyen des véhicules laissée à la charge des acheteurs ; +2 est plus adapté que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre13/s2/"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : le projet institutionnel de LFI repose sur l'égalité politique des citoyens et sur l'élargissement de la participation populaire, avec notamment le RIC, le vote à 16 ans et les parrainages citoyens. Accorder davantage de poids politique aux électeurs jugés plus compétents ou mieux informés créerait précisément une inégalité de suffrage contraire à cette conception de la souveraineté populaire. L'opposition au principe de la question est donc maximale, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  78: {
    response: -2,
    justification: "Désaccord net : LFI souhaite développer l'apprentissage du français et les dispositifs d'alphabétisation, mais sa politique migratoire veut parallèlement faciliter l'accès aux titres de séjour et faire de la carte de séjour de dix ans le titre de référence. Les efforts linguistiques et d'intégration sont donc encouragés comme un moyen d'émancipation et d'accès aux droits, plutôt que posés comme une condition générale au maintien durable du séjour. La proposition va nettement plus loin que la doctrine de LFI, sans être son exact opposé puisque le mouvement valorise bien l'apprentissage de la langue ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  80: {
    response: 2,
    justification: "Accord net : LFI s'oppose fermement à la réautorisation de pesticides interdits pour des raisons sanitaires ou environnementales et accepte donc des contraintes fortes sur les produits utilisables par les agriculteurs français. Mais le groupe a également fait adopter une disposition visant à interdire l'importation de denrées produites avec des substances interdites en France, précisément afin que les agriculteurs français ne supportent pas seuls un désavantage concurrentiel. L'interdiction nationale est clairement soutenue, mais la contrepartie de concurrence étrangère durablement plus favorable ne l'est pas ; +2 est donc plus précis que +3.",
    source: "https://lafranceinsoumise.fr/2026/06/03/loi-durgence-agricole-les-textes-agricoles-passent-le-vivant-trepasse-sans-perspective-pour-les-agriculteurs/"
  },
  81: {
    justification: "Accord très fort : LFI veut réguler l'installation des médecins afin de lutter contre les déserts médicaux et accepte de limiter le conventionnement dans les zones déjà suffisamment dotées pour orienter davantage les nouvelles installations vers les territoires sous-dotés. Le mécanisme proposé dans la question correspond directement à cet instrument de régulation ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  85: {
    justification: "Accord très fort : LFI veut conditionner davantage le financement public des établissements privés sous contrat à leur contribution à la mixité sociale et scolaire. Son programme prévoit notamment des mécanismes de malus ou de pénalités financières pour les établissements participant durablement à la ségrégation socio-scolaire ou évinçant les élèves en difficulté. La proposition correspond donc presque exactement à la politique défendue ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre5/s3/"
  },
  87: {
    response: -1,
    justification: "Désaccord modéré : LFI condamne l'invasion russe, affirme son soutien à l'Ukraine et considère qu'elle doit pouvoir négocier en position de force. Le mouvement refuse toutefois de faire de la poursuite indéfinie et du renforcement de l'aide militaire la seule perspective tant que l'occupation se poursuit, et privilégie une initiative diplomatique visant une paix négociée avec l'Ukraine. La proposition va donc plus loin que sa ligne sans lui être totalement opposée ; -1 est plus précis que -2.",
    source: "https://lafranceinsoumise.fr/2025/03/12/pour-une-paix-juste-et-durable-en-ukraine/"
  },
  90: {
    justification: "Accord très fort : LFI propose explicitement de sortir les EHPAD de la logique lucrative, de collectiviser les établissements privés à but lucratif et de confier leur gestion à des structures publiques, associatives ou coopératives non lucratives. Cette orientation correspond presque exactement à la proposition de faire progressivement disparaître les EHPAD commerciaux ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s4/"
  },
  92: {
    justification: "Désaccord très fort : LFI s'oppose explicitement à une interdiction générale des réseaux sociaux pour les moins de 15 ans et a défendu au Parlement des amendements contestant ce principe, qu'elle juge inefficace et excessivement attentatoire aux libertés. Elle privilégie plutôt la régulation des plateformes, la protection des mineurs et l'éducation numérique. La proposition d'une interdiction légale même avec l'accord des parents est donc directement contraire à sa position ; -3 est adapté.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/2341/AN/13"
  },
  93: {
    justification: "Accord modéré : LFI défend fortement la souveraineté numérique des administrations et souhaite que les données et infrastructures publiques sensibles reposent sur des solutions maîtrisées en France, notamment via un cloud public et des serveurs soumis au droit français. Cette préférence pour une maîtrise technologique publique rapproche LFI de la proposition. En revanche, sa doctrine est davantage française qu'européenne et elle n'assume pas explicitement de choisir une IA moins performante ou sensiblement plus coûteuse uniquement en raison de son origine européenne ; +1 reste donc adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre18/s5/"
  }
};

const LFI_DOCUMENTATION_OVERRIDES = {
  1: {
    justification: "Désaccord très fort : LFI ne propose pas de baisse générale des impôts sur le travail et le capital financée par des coupes dans la dépense publique. Son programme 2025 prévoit au contraire une fiscalité plus progressive sur les revenus et le patrimoine, l’alignement de la fiscalité du capital sur celle du travail et de nouveaux prélèvements sur les très grandes fortunes, tout en maintenant un niveau élevé d’investissement public.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  3: {
    justification: "Accord très fort : le programme 2025 de LFI prévoit de renforcer l’ISF, de rendre l’impôt sur le revenu plus progressif et d’instaurer une taxe minimale de 2 % sur le patrimoine des milliardaires. L’objectif affiché est explicitement de faire davantage contribuer les hauts revenus et les grandes fortunes.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  5: {
    justification: "Accord très fort : LFI propose de porter immédiatement le SMIC à 1 600 euros net par mois et d’indexer les salaires sur l’inflation. Il s’agit donc bien d’une hausse importante et directe du salaire minimum légal.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/"
  },
  6: {
    justification: "Désaccord très fort : LFI affirme que les biens et services essentiels doivent relever prioritairement de la propriété collective et du service public lorsque l’intérêt général l’exige. Son programme place notamment l’eau, la santé et l’énergie au-dessus du droit de propriété privée, ce qui est incompatible avec l’idée d’une supériorité générale du privé dans les secteurs essentiels.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  7: {
    justification: "Accord très fort : LFI prévoit de revenir sur certaines privatisations, de créer des pôles publics dans des secteurs stratégiques et de permettre la réquisition d’entreprises d’intérêt général. Le recours à la prise de contrôle publique d’une entreprise stratégique fait donc explicitement partie de ses instruments.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s2/"
  },
  8: {
    justification: "Désaccord très fort : LFI ne fait pas de la concurrence le mécanisme privilégié pour améliorer les résultats économiques. Son programme prévoit au contraire une régulation poussée de la finance, des contrôles de capitaux, des interdictions de produits financiers et de nombreux instruments publics de planification et d’encadrement.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s1/"
  },
  9: {
    justification: "Désaccord très fort : LFI rejette explicitement les politiques d’austérité et refuse que la dette publique serve à imposer des réductions de dépenses sociales. Son programme préfère mobiliser la fiscalité, l’investissement public et une remise en cause des règles de financement de la dette plutôt que réduire la protection sociale pour équilibrer les comptes.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s4/"
  },
  10: {
    justification: "Accord très fort : LFI veut étendre la protection sociale, automatiser le versement des droits, garantir un revenu minimal jusqu’au seuil de pauvreté et rendre gratuits certains volumes essentiels d’eau, d’électricité et de gaz. Ce modèle suppose un financement collectif important et une fiscalité fortement redistributive.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s4/"
  },
  12: {
    justification: "Accord très fort : LFI revendique explicitement l’intervention publique lorsque la logique marchande entre en conflit avec l’accès aux biens essentiels ou l’intérêt général. Son programme prévoit collectivisations, services publics, régulation des prix et limitations du droit de propriété dans plusieurs secteurs.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  13: {
    justification: "Désaccord très fort : LFI privilégie des droits sociaux universels, automatiques et mutualisés plutôt qu’un système dans lequel chacun disposerait davantage librement de la part aujourd’hui consacrée aux mécanismes collectifs. Son programme cherche notamment à automatiser les prestations et à élargir les garanties publiques.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s4/"
  },
  14: {
    justification: "Accord très fort : le programme 2025 de LFI présente la liberté de choisir sa vie comme un principe fondamental et veut renforcer l’autonomie corporelle ainsi que les droits liés à l’orientation sexuelle, à l’identité de genre et aux choix familiaux. La tradition n’est donc pas posée comme une limite générale aux modes de vie.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s1/"
  },
  15: {
    justification: "Désaccord très fort : LFI veut abolir les mécanismes de vote forcé, dont l’article 49.3, et renforcer la responsabilité du gouvernement devant le Parlement. Permettre au gouvernement de faire adopter un budget sans vote de l’Assemblée va directement à l’encontre de cette réforme institutionnelle.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre1/s2/"
  },
  16: {
    justification: "Accord net mais circonscrit : LFI accepte de limiter certaines libertés économiques ou patrimoniales lorsque l’égalité et l’accès aux biens essentiels l’exigent, par exemple en subordonnant la propriété privée au droit à l’eau, à la santé ou à l’énergie. En revanche, son programme cherche parallèlement à étendre les libertés civiles et personnelles ; l’acceptation de restrictions concerne donc surtout la sphère économique.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  17: {
    justification: "Accord très fort : LFI prévoit des politiques actives de lutte contre les discriminations, avec testing, contrôles, sanctions, anonymisation de certaines procédures et mesures destinées à corriger les inégalités persistantes liées notamment à l’origine. Elle ne se limite donc pas à l’égalité juridique formelle.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  19: {
    justification: "Désaccord net : LFI valorise certains héritages républicains, sociaux et culturels, mais décrit la France comme une société en transformation et défend l’élargissement des libertés individuelles. Son programme ne considère pas la préservation des traditions comme une raison suffisante pour ralentir l’évolution des normes sociales.",
    source: "https://melenchon2027.fr/programme2025/livre/introduction/"
  },
  20: {
    justification: "Désaccord très fort : le programme migratoire de LFI propose de faciliter l’obtention de visas, de garantir pleinement le droit d’asile et de régulariser plusieurs catégories de personnes présentes en France. Il ne fixe pas d’objectif général de réduction du nombre annuel d’immigrés et s’oppose à la logique de fermeture quantitative.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  23: {
    justification: "Désaccord très fort : LFI veut garantir un droit du sol intégral et faciliter l’accès à la nationalité française. Cette orientation est directement opposée à un durcissement général des conditions d’acquisition de la nationalité.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  24: {
    justification: "Désaccord net : les députés LFI s’opposent à l’extension de régimes d’éloignement ou de rétention spécifiques aux étrangers condamnés ou présentés comme menaçants lorsqu’ils affaiblissent les garanties individuelles, en dénonçant une logique de suspicion et de double traitement. LFI ne s’oppose toutefois pas à toute mesure individuelle d’éloignement légalement justifiée dans les cas les plus graves.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/1148/CION_LOIS/CL22"
  },
  25: {
    justification: "Désaccord très fort : LFI fonde sa politique migratoire sur les droits, l’égalité et l’accueil plutôt que sur la recherche d’une homogénéité culturelle. Son programme défend une conception ouverte de la citoyenneté et de la société française et ne propose pas de plafonner une immigration par ailleurs bénéfique au nom de la cohésion culturelle.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  26: {
    justification: "Accord très fort : LFI affirme explicitement le devoir d’accueil envers les personnes réfugiées, veut garantir pleinement le droit d’asile et renforcer les structures d’accueil. Cette orientation demeure assumée même lorsqu’elle implique des moyens publics supplémentaires.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  28: {
    justification: "Accord très fort : LFI veut lutter contre la récidive par la réinsertion, développer les alternatives à l’incarcération et faire de la police de proximité et de la prévention des axes centraux de sa politique de sûreté. Cette stratégie privilégie donc explicitement la prévention et la réinsertion plutôt qu’un alourdissement général des sanctions.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s7/"
  },
  29: {
    justification: "Désaccord très fort : LFI veut abroger plusieurs lois sécuritaires, renforcer le contrôle des forces de l’ordre et limiter certains équipements ou techniques jugés dangereux pour les libertés. Son programme définit au contraire la police comme un service devant protéger les libertés individuelles et collectives.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s3/"
  },
  30: {
    justification: "Accord net : LFI veut imposer aux produits importés le respect de normes sociales et environnementales comparables à celles exigées en France et recourir à des protections commerciales écologiques. En revanche, le programme ne dit pas explicitement qu’il accepterait la disparition des produits alimentaires les moins chers ou l’intégralité du surcoût envisagé par la question.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre9/s2/"
  },
  32: {
    justification: "Accord très fort : LFI place l’urgence climatique et la planification écologique au cœur de la politique économique et prévoit des investissements publics massifs pour la bifurcation. La croissance de court terme n’est pas érigée en contrainte prioritaire face aux objectifs climatiques.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre13/s1/"
  },
  35: {
    justification: "Désaccord très fort : LFI privilégie la réglementation, la planification, les normes et des interdictions ciblées plutôt qu’une politique écologique reposant principalement sur les signaux de prix. Son programme propose explicitement de renforcer le contrôle public face au libre marché et de rétablir des protections environnementales.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  36: {
    justification: "Accord très fort : LFI propose d’interdire ou de faire cesser des activités et substances jugées dangereuses pour l’environnement ou la santé, même lorsqu’elles répondent à une demande économique. L’interdiction fait donc explicitement partie de ses instruments écologiques.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  37: {
    justification: "Accord clair sur une responsabilité accrue des pays riches : LFI veut porter l’aide publique au développement à 0,7 % du revenu national brut, développer le codéveloppement climatique et restructurer les dettes qui empêchent les pays pauvres de financer leur transition. Le programme établit donc une solidarité Nord-Sud importante, sans toutefois chiffrer une prise en charge « prépondérante » de l’ensemble du coût mondial de la transition.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s9/"
  },
  39: {
    justification: "Accord net : LFI veut récupérer pour les États une large souveraineté budgétaire et conserver la possibilité d’appliquer un programme national même lorsqu’il entre en conflit avec certaines règles européennes. Le mouvement reste cependant favorable à des coopérations et harmonisations européennes dans plusieurs domaines sociaux et écologiques.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/"
  },
  40: {
    justification: "Position intermédiaire : LFI ne propose pas de sortir de l’euro, mais veut transformer profondément les règles monétaires européennes, modifier le mandat de la BCE et récupérer des marges nationales de politique économique. Sa ligne ne permet donc ni de présenter l’euro actuel comme globalement bénéfique, ni de le rejeter purement et simplement.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/"
  },
  41: {
    justification: "Position intermédiaire : LFI veut davantage de règles européennes communes en matière sociale, fiscale et écologique, mais refuse plusieurs règles communes de concurrence, de discipline budgétaire et de libre circulation des capitaux. Elle souhaite donc renforcer certaines normes européennes tout en en supprimant ou désobéissant à d’autres.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/"
  },
  42: {
    justification: "Accord très fort : le programme 2025 de LFI prévoit explicitement de cesser unilatéralement d’appliquer les règles européennes incompatibles avec son programme, notamment en matière budgétaire, de concurrence et de circulation des capitaux. Le principe de désobéissance ciblée posé par la question est donc directement assumé.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/s2/"
  },
  43: {
    justification: "Désaccord très fort : LFI veut rétablir et renforcer l’ISF et rendre la fiscalité immobilière plus progressive. La suppression de l’IFI et de toute fiscalité patrimoniale spécifique sur les grands patrimoines immobiliers est donc directement opposée à son programme.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  45: {
    justification: "Accord net : LFI veut taxer beaucoup plus fortement les très grandes fortunes, rétablir l’exit tax et instaurer des mécanismes de fiscalité universelle pour limiter l’évitement par le départ à l’étranger. En revanche, son programme ne formule pas exactement une taxation perpétuelle de l’ensemble du patrimoine mondial de toute grande fortune après expatriation, ce qui justifie une intensité inférieure au maximum.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  49: {
    justification: "Désaccord très fort : LFI veut maintenir un système de retraite par répartition financé principalement par les cotisations, qu’elle souhaite élargir notamment aux revenus financiers. Elle ne propose pas de déplacer une part du système vers la capitalisation.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/"
  },
  50: {
    justification: "Désaccord très fort : LFI propose un âge légal de départ à 60 ans avec une durée de cotisation déterminée politiquement. Cette logique est directement opposée à une indexation automatique de l’âge de départ sur l’espérance de vie.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/"
  },
  51: {
    justification: "Désaccord très fort : LFI veut attacher davantage les droits sociaux à la personne et les maintenir y compris pendant certaines périodes hors emploi, notamment de formation ou de reconversion. Son projet de sécurité sociale professionnelle s’oppose donc à une forte conditionnalité des prestations à la participation immédiate au marché du travail.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s6/"
  },
  53: {
    justification: "Accord très fort : LFI veut conditionner toutes les aides publiques aux grandes entreprises à des objectifs sociaux, écologiques et fiscaux contraignants et exiger leur remboursement en cas de non-respect. Le mouvement défend aussi des restrictions sur les dividendes des entreprises aidées ou qui licencient.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre9/s2/"
  },
  54: {
    justification: "Accord très fort : LFI veut constituer ou renforcer des pôles publics dans des secteurs stratégiques, revenir sur certaines privatisations et utiliser la propriété ou le contrôle public pour orienter la production. Cette conception va au moins aussi loin que l’usage actif du pouvoir d’actionnaire envisagé dans la question.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s2/"
  },
  55: {
    justification: "Désaccord très fort avec la contrepartie de la question : LFI veut restaurer des normes environnementales affaiblies, renforcer les moyens de contrôle et de sanction et encadrer davantage certaines activités. Elle peut soutenir des simplifications administratives ponctuelles, mais pas lorsqu’elles réduisent explicitement les protections sociales ou environnementales.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  56: {
    justification: "Accord très fort : le programme migratoire de LFI prévoit explicitement de régulariser les travailleurs sans papiers ainsi que d’autres catégories durablement installées. Un étranger en situation irrégulière qui travaille depuis plusieurs années correspond donc directement à l’une des catégories visées.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  57: {
    justification: "Désaccord très fort : LFI s’est explicitement opposée aux dispositions instaurant une forme de préférence nationale ou retardant l’accès des étrangers en situation régulière à certaines prestations sociales. Le mouvement défend l’égalité des droits sociaux plutôt qu’une période générale de carence de plusieurs années.",
    source: "https://lafranceinsoumise.fr/2024/01/25/immigration-le-conseil-censure-les-mesures-lepenistes-mais-conserve-la-reforme-darmanin-qui-porte-une-grave-atteinte-aux-droits-des-etrangers/"
  },
  60: {
    justification: "Désaccord très fort : LFI défend l’égalité des droits indépendamment de l’origine et facilite l’accès au séjour et à la nationalité. Son programme ne prévoit pas de refuser l’entrée à une personne par ailleurs admissible sur la base d’une appréciation préalable de sa capacité supposée à s’intégrer culturellement.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  61: {
    justification: "Accord très fort : LFI défend la liberté des pratiques culturelles et religieuses tant qu’elles respectent la loi commune et les droits fondamentaux, et lutte contre les discriminations liées à l’origine ou à la religion. La différence culturelle n’est donc pas considérée en elle-même comme un problème politique.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  69: {
    justification: "Désaccord très fort : LFI planifie explicitement une sortie du nucléaire et un système énergétique fondé à terme sur 100 % d’énergies renouvelables, avec abandon des nouveaux EPR et reconversion progressive de la filière. Prioriser le nucléaire au détriment des renouvelables est donc l’inverse direct de sa stratégie.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre13/s3/"
  },
  71: {
    justification: "LFI place clairement la réduction des émissions et la planification écologique au-dessus de la recherche de rendement financier et veut compléter ou remplacer le PIB par des indicateurs de progrès humain. En revanche, aucune proposition actuelle n’établit explicitement qu’elle accepterait précisément une perte de 3 % du PIB pour réduire les émissions de 20 % si les autres pays ne faisaient aucun effort comparable.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s3/"
  },
  72: {
    justification: "Désaccord net : LFI veut que les grandes orientations économiques, monétaires et financières soient soumises à un contrôle démocratique renforcé, notamment via des institutions publiques et une gestion démocratique du crédit. Elle valorise l’expertise, mais ne souhaite pas transférer la décision politique générale d’élus vers des institutions technocratiques indépendantes.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s2/"
  },
  73: {
    justification: "Position intermédiaire : LFI accepte qu’un gouvernement élu prenne et assume des décisions, mais veut parallèlement accroître fortement les moyens d’intervention populaire entre les élections, notamment avec le référendum d’initiative citoyenne et la révocation d’élus. Son programme ne tranche pas directement l’arbitrage précis entre nécessité économique alléguée et absence d’approbation populaire immédiate.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  74: {
    justification: "Accord net : LFI veut instaurer un référendum d’initiative citoyenne permettant de proposer ou d’abroger une loi, de modifier la Constitution ou de révoquer des élus, et prévoit aussi des référendums obligatoires sur certaines réformes institutionnelles. Le programme ne dit toutefois pas que tout sujet technique mal maîtrisé devrait être soumis au vote populaire.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  77: {
    justification: "Accord très fort : LFI propose explicitement l’élection de l’Assemblée nationale à la proportionnelle dans le cadre d’une VIe République parlementaire. Le principe central de la question correspond donc directement à son projet institutionnel, même si le programme ne recherche pas l’instabilité gouvernementale pour elle-même.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre1/s2/"
  },
  79: {
    justification: "Accord très fort : des responsables LFI rejettent explicitement l’idée d’un lien causal entre immigration et délinquance et présentent les explications culturalistes comme trompeuses. Plus largement, la politique de sécurité du mouvement met l’accent sur la précarité, la prévention, les services publics et les conditions sociales plutôt que sur l’origine culturelle.",
    source: "https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59051N010.html"
  },
  82: {
    justification: "Accord très fort : LFI propose une « Sécu à 100 % » dans laquelle les soins prescrits seraient remboursés intégralement par l’Assurance maladie et les complémentaires seraient intégrées au système public. La mesure correspond presque exactement à la proposition de réduire fortement le rôle des mutuelles sur les soins essentiels.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  83: {
    justification: "Désaccord très fort : LFI propose au contraire de rouvrir des services d’urgence et des maternités et de garantir l’accès à des structures publiques de soins sur le territoire. La concentration de l’offre par fermeture de petits services est donc directement opposée à sa stratégie hospitalière.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  84: {
    justification: "Désaccord très fort : LFI veut restaurer un cadre national du service public d’éducation, recruter les enseignants principalement par concours nationaux et mettre fin aux dispositifs d’évaluation et de contrôle permanents. Son programme associe davantage les équipes, parents et élèves aux décisions des établissements plutôt que de renforcer un pouvoir managérial individuel du chef d’établissement sur le recrutement et l’évaluation des professeurs.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre5/s3/"
  },
  86: {
    justification: "Accord net : LFI veut limiter fortement les locations de courte durée de type Airbnb, notamment en plafonnant leur location à 60 jours par an et en supprimant leurs avantages fiscaux. Cette politique va clairement dans le sens de la question, mais reste moins radicale qu’une interdiction municipale complète de toute location touristique régulière d’une résidence non principale.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s5/"
  },
  88: {
    justification: "Désaccord très fort : LFI rejette explicitement l’idée d’un « parapluie nucléaire français » étendu aux autres pays européens et conteste que la France doive laisser entendre qu’elle utiliserait l’arme nucléaire pour défendre un partenaire. Cette position est directement opposée à l’extension de la garantie nucléaire française proposée par la question.",
    source: "https://lafranceinsoumise.fr/2025/10/02/non-monsieur-macron-il-ny-a-pas-de-parapluie-nucleaire-francais/"
  },
  89: {
    justification: "Accord très fort : lors du vote définitif du 15 juillet 2026 sur la proposition de loi créant un droit strictement encadré à l’aide à mourir, 61 des 71 députés du groupe LFI-NFP ont voté pour, contre seulement 2 oppositions et 3 abstentions parmi les votants recensés. L’orientation du groupe est donc très nettement favorable à un dispositif médical et légal encadré.",
    source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/8280"
  },
  91: {
    justification: "Accord direct : en juin 2025, des députés LFI ont déposé un amendement demandant explicitement la fin de la modulation du montant des allocations familiales selon le revenu du ménage et le retour à une universalité où le montant dépend avant tout du nombre d’enfants. La position documentée correspond presque mot pour mot au principe posé par la question.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/1473/AN/27"
  }
};

const lfiParty = DATA.entities.find(entity => entity.id === 'lfi');
if (lfiParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  const applyLfiOverrides = overrides => {
    Object.entries(overrides).forEach(([questionId, override]) => {
      const index = questionIndexById.get(Number(questionId));
      if (index === undefined) return;
      if (Object.prototype.hasOwnProperty.call(override, 'response')) lfiParty.responses[index] = override.response;
      if (override.justification) lfiParty.justifications[index] = override.justification;
      if (override.source && Array.isArray(lfiParty.sources)) lfiParty.sources[index] = override.source;
    });
  };

  applyLfiOverrides(LFI_RESPONSE_OVERRIDES);
  applyLfiOverrides(LFI_DOCUMENTATION_OVERRIDES);

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (lfiParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  lfiParty.axisScores = scores;
}
