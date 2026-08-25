const LFI_RESPONSE_OVERRIDES = {
  2: {
    justification: "Désaccord modéré : LFI rejette l'idée que les inégalités deviennent globalement acceptables dès lors qu'elles seraient attribuées au mérite, au travail ou à la prise de risque. Le mouvement veut fortement réduire les écarts de rémunération et a notamment proposé un plafond de 1 à 20 au sein d'une même entreprise. Il n'exige toutefois pas une égalité parfaite des revenus et admet donc certains écarts de rémunération ; -1 reste plus précis qu'un désaccord maximal.",
    source: "https://www.assemblee-nationale.fr/dyn/opendata/PIONANR5L17B0412.html"
  },
  17: {
    response: -2,
    justification: "Désaccord net : LFI ne défend pas une différenciation généralisée permettant à chaque région de fixer librement ses propres règles économiques, sociales ou environnementales et reste attachée à un cadre national garantissant l'égalité. Elle accepte toutefois d'importantes différenciations territoriales, notamment un statut d'autonomie renforcée pour la Corse et des évolutions institutionnelles spécifiques pour certains territoires insulaires et ultramarins. Le désaccord avec la proposition est donc net, mais pas maximal ; -2 est plus adapté que -3.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  20: {
    justification: "Accord très fort : LFI défend explicitement l'idée que l'immigration contribue positivement à la société française et conteste les discours qui la présentent comme un coût économique global. Le mouvement souligne notamment la contribution des personnes immigrées au travail, aux cotisations et aux finances publiques. La proposition selon laquelle l'immigration économique est globalement bénéfique correspond donc directement à sa ligne ; +3 est adapté.",
    source: "https://lafranceinsoumise.fr/2023/12/15/stop-a-la-loi-immigration/"
  },
  26: {
    response: -3,
    justification: "Désaccord très fort : la question propose de durcir les peines de prison même si cela augmente fortement la population carcérale. LFI veut au contraire mettre fin à la surpopulation par un mécanisme contraignant de régulation carcérale et renforcer les moyens de réinsertion. Le mouvement ne rejette pas la prison pour les infractions graves, mais il refuse précisément une stratégie générale fondée sur davantage d'incarcération ; la contrepartie posée par la question est donc presque exactement l'inverse de sa ligne, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s7/"
  },
  31: {
    response: -3,
    justification: "Désaccord très fort : LFI veut sortir des énergies fossiles, mais refuse que cette transition passe par une forte hausse de leur prix supportée par les ménages. Le groupe demande au contraire le blocage des prix de l'énergie, le retour à des tarifs réglementés au coût de production et un financement de la bifurcation écologique par le budget public et les entreprises polluantes. Le mécanisme de renchérissement substantiel proposé par la question est donc directement opposé à sa ligne, d'où -3.",
    source: "https://lafranceinsoumise.fr/2025/12/02/communique-du-groupe-lfi-cee-la-bifurcation-ecologique-doit-etre-payee-par-les-multinationales-pas-par-les-consommateurs/"
  },
  32: {
    response: -3,
    justification: "Désaccord très fort : LFI dénonce explicitement la « TVA sociale » comme une TVA antisociale et critique déjà le fait que la TVA compense des baisses de cotisations accordées aux entreprises. La question décrit précisément un transfert d'une partie du financement des cotisations vers la TVA, avec un risque de hausse des prix pour les consommateurs. Cette logique est directement contraire à la position défendue par LFI, ce qui justifie -3.",
    source: "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2024-2025/deuxieme-seance-du-mardi-10-juin-2025"
  },
  36: {
    response: -2,
    justification: "Désaccord net : LFI souhaite des coopérations européennes fortes et davantage d'harmonisation sociale et écologique, mais sa stratégie actuelle ne consiste pas à transférer globalement davantage de compétences à l'Union européenne. Elle veut au contraire récupérer pour les États leur souveraineté budgétaire, conserver des leviers nationaux et désobéir aux règles européennes qui empêchent l'application de son programme. Le désaccord avec un transfert supplémentaire général de compétences est donc net, sans être maximal puisque LFI reste favorable à de nombreuses politiques communes européennes ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre17/"
  },
  42: {
    justification: "Accord net : LFI veut augmenter les droits de succession sur les plus hauts patrimoines et instaurer un héritage maximal de 12 millions d'euros, soit environ cent fois le patrimoine net médian. Le principe d'une taxation accrue au-delà d'un seuil correspond donc clairement à la proposition. Toutefois, le seuil défendu est extrêmement élevé et concentre l'effort supplémentaire sur une fraction très restreinte des transmissions ; cette intensité ciblée justifie de conserver +2 plutôt que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  44: {
    response: -3,
    justification: "Désaccord très fort : LFI propose explicitement de supprimer l'obligation d'accepter une « offre raisonnable d'emploi », de mettre fin aux radiations punitives et de revenir sur les réformes durcissant les conditions de l'assurance-chômage. La question prévoit au contraire une perte significative d'indemnisation après plusieurs refus d'offres raisonnables. Le mécanisme visé est directement celui que LFI veut supprimer, ce qui justifie -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s5/"
  },
  46: {
    response: -3,
    justification: "Désaccord très fort : LFI considère la précarisation de l'emploi et la multiplication des contrats courts comme le problème à corriger, et non la protection excessive des salariés en CDI. Son programme veut limiter fortement les contrats précaires, abroger les réformes de flexibilisation du travail et renforcer la stabilité de l'emploi. La prémisse de la question selon laquelle le CDI protège trop les salariés déjà en poste est donc presque exactement opposée à sa doctrine, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s3/"
  },
  55: {
    response: -3,
    justification: "Désaccord très fort : LFI rejette explicitement la logique d'« immigration choisie », qu'elle juge absurde et réductrice lorsqu'elle sélectionne les migrants selon leur utilité économique. Sa politique migratoire privilégie les droits, l'accueil, les visas et la régularisation de catégories larges de personnes plutôt qu'une priorité donnée aux plus qualifiés au prix d'une diminution de l'immigration peu qualifiée. L'arbitrage précis de la question est donc directement contraire à sa doctrine, d'où -3.",
    source: "https://melenchon2027.fr/livrets-2022/migrations/"
  },
  56: {
    justification: "Accord très fort : LFI propose de garantir le droit du sol intégral aux enfants nés en France et de faciliter l'accès à la nationalité française. Pour une personne née en France de parents étrangers et ayant grandi dans le pays, LFI ne souhaite donc pas subordonner l'accès à la nationalité à la démonstration d'un attachement culturel particulier. La proposition correspond directement à cette logique ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  59: {
    response: -2,
    justification: "Désaccord net : LFI critique l'extension des dispositifs antiterroristes qui permettent de restreindre les libertés ou de placer des personnes sous surveillance administrative sans contrôle judiciaire suffisant. Son programme veut revenir sur les dispositions relevant de l'« état d'urgence permanent » et renforcer le rôle du juge judiciaire. LFI ne rejette toutefois pas toute action préventive : elle veut aussi renforcer le renseignement humain, l'infiltration et le suivi de personnes présentant un risque. Le désaccord avec une surveillance préventive sans preuves suffisantes est donc net mais pas absolu ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s2/"
  },
  60: {
    justification: "Accord net : LFI défend une conception large de la liberté d'expression et rappelle notamment que le blasphème, la critique des religions et les propos choquants restent licites tant qu'ils ne franchissent pas les limites prévues par la loi. Le mouvement accepte toutefois des restrictions concernant notamment l'injure, la diffamation, les discriminations ou l'incitation à la haine. La protection des propos profondément offensants mais licites est donc clairement défendue sans être absolue ; +2 est adapté.",
    source: "https://lafranceinsoumise.fr/2020/01/25/face-a-toutes-les-haines-la-laicite/"
  },
  62: {
    response: -2,
    justification: "Désaccord net : LFI refuse que la transition écologique soit financée par une hausse durable des factures d'énergie supportée par les ménages et privilégie le financement budgétaire, la régulation des prix et la contribution des entreprises polluantes. La compensation ciblée prévue par la question atténue néanmoins le désaccord puisqu'elle protège une partie des ménages modestes. LFI reste opposée au principe de maintenir d'abord un renchérissement du carbone payé par les consommateurs, mais la compensation empêche de retenir -3 ; -2 est plus précis.",
    source: "https://lafranceinsoumise.fr/2025/12/02/communique-du-groupe-lfi-cee-la-bifurcation-ecologique-doit-etre-payee-par-les-multinationales-pas-par-les-consommateurs/"
  },
  63: {
    response: 2,
    justification: "Accord net : LFI veut accélérer l'électrification des transports, développer la production française de véhicules électriques légers et réduire fortement l'usage des énergies fossiles. Mais elle insiste aussi sur l'accessibilité économique de la transition et demande un moratoire sur les ZFE actuelles lorsqu'elles pénalisent les ménages qui n'ont pas d'alternative abordable. Elle est donc clairement favorable à la sortie progressive du thermique, sans assumer de façon aussi absolue une hausse du prix moyen des véhicules laissée à la charge des acheteurs ; +2 est plus adapté que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre13/s2/"
  },
  69: {
    response: -3,
    justification: "Désaccord très fort : le projet institutionnel de LFI repose sur l'égalité politique des citoyens et sur l'élargissement de la participation populaire, avec notamment le RIC, le vote à 16 ans et les parrainages citoyens. Accorder davantage de poids politique aux électeurs jugés plus compétents ou mieux informés créerait précisément une inégalité de suffrage contraire à cette conception de la souveraineté populaire. L'opposition au principe de la question est donc maximale, d'où -3.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  72: {
    response: -2,
    justification: "Désaccord net : LFI souhaite développer l'apprentissage du français et les dispositifs d'alphabétisation, mais sa politique migratoire veut parallèlement faciliter l'accès aux titres de séjour et faire de la carte de séjour de dix ans le titre de référence. Les efforts linguistiques et d'intégration sont donc encouragés comme un moyen d'émancipation et d'accès aux droits, plutôt que posés comme une condition générale au maintien durable du séjour. La proposition va nettement plus loin que la doctrine de LFI, sans être son exact opposé puisque le mouvement valorise bien l'apprentissage de la langue ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  74: {
    response: 2,
    justification: "Accord net : LFI s'oppose fermement à la réautorisation de pesticides interdits pour des raisons sanitaires ou environnementales et accepte donc des contraintes fortes sur les produits utilisables par les agriculteurs français. Mais le groupe a également fait adopter une disposition visant à interdire l'importation de denrées produites avec des substances interdites en France, précisément afin que les agriculteurs français ne supportent pas seuls un désavantage concurrentiel. L'interdiction nationale est clairement soutenue, mais la contrepartie de concurrence étrangère durablement plus favorable ne l'est pas ; +2 est donc plus précis que +3.",
    source: "https://lafranceinsoumise.fr/2026/06/03/loi-durgence-agricole-les-textes-agricoles-passent-le-vivant-trepasse-sans-perspective-pour-les-agriculteurs/"
  },
  75: {
    justification: "Accord très fort : LFI veut réguler l'installation des médecins afin de lutter contre les déserts médicaux et accepte de limiter le conventionnement dans les zones déjà suffisamment dotées pour orienter davantage les nouvelles installations vers les territoires sous-dotés. Le mécanisme proposé dans la question correspond directement à cet instrument de régulation ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  79: {
    justification: "Accord très fort : LFI veut conditionner davantage le financement public des établissements privés sous contrat à leur contribution à la mixité sociale et scolaire. Son programme prévoit notamment des mécanismes de malus ou de pénalités financières pour les établissements participant durablement à la ségrégation socio-scolaire ou évinçant les élèves en difficulté. La proposition correspond donc presque exactement à la politique défendue ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre5/s3/"
  },
  81: {
    response: -1,
    justification: "Désaccord modéré : LFI condamne l'invasion russe, affirme son soutien à l'Ukraine et considère qu'elle doit pouvoir négocier en position de force. Le mouvement refuse toutefois de faire de la poursuite indéfinie et du renforcement de l'aide militaire la seule perspective tant que l'occupation se poursuit, et privilégie une initiative diplomatique visant une paix négociée avec l'Ukraine. La proposition va donc plus loin que sa ligne sans lui être totalement opposée ; -1 est plus précis que -2.",
    source: "https://lafranceinsoumise.fr/2025/03/12/pour-une-paix-juste-et-durable-en-ukraine/"
  },
  84: {
    justification: "Accord très fort : LFI propose explicitement de sortir les EHPAD de la logique lucrative, de collectiviser les établissements privés à but lucratif et de confier leur gestion à des structures publiques, associatives ou coopératives non lucratives. Cette orientation correspond presque exactement à la proposition de faire progressivement disparaître les EHPAD commerciaux ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s4/"
  },
  86: {
    justification: "Désaccord très fort : LFI s'oppose explicitement à une interdiction générale des réseaux sociaux pour les moins de 15 ans et a défendu au Parlement des amendements contestant ce principe, qu'elle juge inefficace et excessivement attentatoire aux libertés. Elle privilégie plutôt la régulation des plateformes, la protection des mineurs et l'éducation numérique. La proposition d'une interdiction légale même avec l'accord des parents est donc directement contraire à sa position ; -3 est adapté.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/2341/AN/13"
  },
  87: {
    justification: "Accord modéré : LFI défend fortement la souveraineté numérique des administrations et souhaite que les données et infrastructures publiques sensibles reposent sur des solutions maîtrisées en France, notamment via un cloud public et des serveurs soumis au droit français. Cette préférence pour une maîtrise technologique publique rapproche LFI de la proposition. En revanche, sa doctrine est davantage française qu'européenne et elle n'assume pas explicitement de choisir une IA moins performante ou sensiblement plus coûteuse uniquement en raison de son origine européenne ; +1 reste donc adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre18/s5/"
  }
};

const LFI_DOCUMENTATION_OVERRIDES = {
  1: {
    justification: "Désaccord très fort : LFI ne propose pas de baisse générale des impôts sur le travail et le capital financée par des réductions de dépenses publiques. Son programme prévoit au contraire une fiscalité plus progressive sur les revenus et le patrimoine, l'alignement de la fiscalité du capital sur celle du travail et de nouveaux prélèvements sur les très grandes fortunes, tout en maintenant un niveau élevé d'investissement public. La logique économique est donc directement opposée à l'arbitrage proposé.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  3: {
    justification: "Accord très fort : LFI propose de renforcer l'ISF, de rendre l'impôt sur le revenu plus progressif, de taxer davantage les revenus du capital et d'instaurer un impôt minimal de 2 % sur le patrimoine des milliardaires. Ces mesures visent explicitement à faire davantage contribuer les hauts revenus et les très gros patrimoines afin de réduire les inégalités ; +3 correspond directement à l'intensité du programme.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  5: {
    justification: "Accord très fort : LFI propose de porter immédiatement le SMIC à 1 600 euros net par mois et d'indexer les salaires sur l'inflation. La hausse du salaire minimum est donc à la fois importante et accompagnée d'un mécanisme destiné à empêcher l'érosion ultérieure des rémunérations par la hausse des prix ; +3 est pleinement justifié.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s4/"
  },
  6: {
    justification: "Désaccord très fort : LFI affirme que certains biens et services essentiels doivent échapper à la logique marchande lorsque l'intérêt général l'exige. Son programme place notamment l'eau, la santé et l'énergie sous une forte maîtrise publique ou collective et prévoit des services publics étendus. Cette conception est incompatible avec l'idée d'une supériorité générale des entreprises privées dans les secteurs essentiels.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  7: {
    justification: "Accord très fort : LFI prévoit de revenir sur certaines privatisations, de constituer des pôles publics dans des secteurs stratégiques et de permettre la réquisition ou la prise de contrôle d'entreprises d'intérêt général. La nationalisation temporaire ou durable d'une activité stratégique fait donc explicitement partie des instruments envisagés ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s2/"
  },
  8: {
    justification: "Désaccord très fort : LFI ne considère pas la concurrence comme le mécanisme général à privilégier face à la réglementation. Son programme prévoit au contraire des contrôles de capitaux, des interdictions de certains produits financiers, des encadrements de prix et de nombreux instruments de planification et de contrôle public. La philosophie de la question est donc largement inverse de celle du programme.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s1/"
  },
  9: {
    justification: "Désaccord très fort : LFI rejette explicitement l'austérité et refuse que le retour à l'équilibre budgétaire passe par des réductions de politiques sociales. Son programme privilégie la fiscalité progressive, l'investissement public et une remise en cause des règles qui subordonnent la politique économique à la réduction rapide de la dette. Accepter des coupes sociales pour équilibrer les comptes est donc directement contraire à cette ligne.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s4/"
  },
  10: {
    justification: "Accord très fort : LFI veut étendre la protection sociale, automatiser le versement de nombreux droits et garantir un revenu minimal jusqu'au seuil de pauvreté. Le programme prévoit également la gratuité de premières quantités de certains biens essentiels. Un niveau élevé de protection sociale financé collectivement, y compris par une fiscalité importante et progressive, correspond donc très fortement à sa doctrine.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s4/"
  },
  11: {
    justification: "Accord très fort : LFI revendique une intervention publique forte lorsque la logique marchande entre en conflit avec l'accès aux biens essentiels, l'égalité ou l'intérêt général. Collectivisations, services publics, encadrements de prix, réquisitions et limitations du droit de propriété figurent parmi les instruments proposés. La formulation de la question correspond donc directement à cette orientation.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  12: {
    justification: "Désaccord très fort : LFI privilégie des droits sociaux universels, mutualisés et largement obligatoires plutôt qu'une individualisation permettant à chacun d'utiliser librement une part accrue de l'argent aujourd'hui consacré à la retraite, à la santé ou à la protection sociale. Son programme cherche à élargir les garanties publiques et à automatiser les prestations. La logique de libre choix individuel proposée est donc fortement opposée à son modèle social.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s4/"
  },
  13: {
    justification: "Accord très fort : le programme de LFI présente la liberté de choisir sa vie comme un principe fondamental et veut renforcer l'autonomie corporelle ainsi que les droits liés à l'orientation sexuelle, à l'identité de genre et aux choix familiaux. Les normes traditionnelles ne sont pas posées comme une limite générale aux modes de vie. La proposition correspond donc très directement à cette orientation.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s1/"
  },
  14: {
    justification: "Désaccord très fort : LFI veut abolir les procédures permettant d'imposer un texte sans vote, notamment l'article 49.3, et renforcer la responsabilité du gouvernement devant le Parlement. Permettre au gouvernement de faire adopter le budget sans vote de l'Assemblée lorsqu'aucune majorité stable ne se dégage va directement à l'encontre de ce projet institutionnel.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre1/s2/"
  },
  15: {
    justification: "Accord net mais limité : LFI accepte que la réduction des inégalités justifie certaines contraintes, notamment en matière de redistribution, de propriété, de parité ou de lutte contre les discriminations. En parallèle, le mouvement cherche à étendre de nombreuses libertés civiles et personnelles. L'acceptation de restrictions existe donc réellement, mais elle ne constitue pas un principe général applicable à toutes les libertés ; +2 reste plus précis que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s1/"
  },
  16: {
    justification: "Accord très fort : LFI prévoit des politiques actives de lutte contre les discriminations, avec testing, contrôles, sanctions, anonymisation de certaines procédures et dispositifs destinés à corriger des inégalités persistantes liées notamment à l'origine. Le programme ne se limite donc pas à l'égalité juridique formelle et assume explicitement une action correctrice des pouvoirs publics.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  18: {
    justification: "Désaccord net : LFI valorise certains héritages républicains, sociaux et culturels, mais son programme décrit la culture française comme le résultat d'une histoire et de transformations permanentes plutôt que comme un ensemble de traditions devant être préservées contre l'évolution sociale. L'élargissement des libertés et l'idée de créolisation occupent une place importante dans cette conception. Le désaccord est donc net sans être absolu ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/introduction/"
  },
  19: {
    justification: "Désaccord très fort : la politique migratoire de LFI prévoit de faciliter l'obtention de visas, de garantir le droit d'asile et de régulariser plusieurs catégories de personnes durablement présentes en France. Aucun objectif général de réduction quantitative du nombre annuel d'immigrés n'est proposé ; la logique défendue est au contraire celle de voies légales et de droits renforcés. La proposition est donc directement opposée à cette orientation.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  22: {
    justification: "Désaccord très fort : LFI veut garantir un droit du sol intégral et faciliter l'accès à la nationalité française. Cette orientation vise explicitement à rendre l'accès à la citoyenneté plus ouvert et s'oppose donc directement à un durcissement général des conditions d'acquisition de la nationalité ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  23: {
    justification: "Désaccord net : les députés LFI se sont opposés à l'assouplissement des conditions permettant d'expulser des étrangers protégés par leur ancienneté de séjour ou leurs attaches familiales, y compris dans le cadre de mesures visant des personnes condamnées. Cette position montre un refus clair d'un durcissement général des expulsions. Elle ne signifie toutefois pas une opposition à toute expulsion individuelle légalement justifiée pour des faits graves ; -2 est donc plus précis que -3.",
    source: "https://www.assemblee-nationale.fr/dyn/17/amendements/0265/CION_LOIS/CL2"
  },
  24: {
    justification: "Désaccord très fort : LFI fonde sa politique migratoire sur les droits, l'égalité et une conception ouverte et créolisée de la société française plutôt que sur la recherche d'une homogénéité culturelle. Le programme ne propose pas de limiter une immigration par ailleurs bénéfique afin de préserver une identité culturelle uniforme. La justification avancée dans la question est donc directement contraire à sa doctrine.",
    source: "https://melenchon2027.fr/programme2025/livre/introduction/"
  },
  25: {
    justification: "Accord très fort : LFI affirme le devoir d'accueil envers les personnes réfugiées, veut garantir pleinement le droit d'asile et renforcer les structures d'accueil. Cette orientation est présentée comme une obligation politique et humanitaire, et non comme une politique subordonnée à son absence de coût budgétaire. L'acceptation d'un coût économique ne remet donc pas en cause l'accord ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  27: {
    justification: "Accord très fort : LFI veut lutter contre la récidive en renforçant la réinsertion, développer les alternatives à l'incarcération et réduire la surpopulation carcérale. Sa politique de sûreté accorde également une place centrale à la prévention et à la police de proximité. Cette stratégie privilégie explicitement prévention et réinsertion plutôt qu'un alourdissement général des sanctions ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s7/"
  },
  28: {
    justification: "Désaccord très fort : LFI veut abroger plusieurs lois sécuritaires, renforcer le contrôle des forces de l'ordre et limiter certains équipements ou techniques jugés dangereux pour les libertés. Le programme définit la police comme un service devant assurer la sûreté dans le respect des libertés individuelles et collectives. Accroître ses pouvoirs au prix de contrôles supplémentaires sur les libertés correspond donc à une logique largement inverse.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre4/s3/"
  },
  29: {
    justification: "Accord net : LFI défend l'application aux produits importés de normes sanitaires et environnementales comparables à celles imposées aux producteurs français. En juin 2026, le mouvement a notamment revendiqué l'adoption d'une disposition interdisant l'importation de denrées produites avec des substances interdites en France. En revanche, cette position vise aussi à protéger les agriculteurs français et ne formule pas explicitement l'acceptation de la disparition des produits alimentaires les moins chers ; +2 reste donc plus précis que +3.",
    source: "https://lafranceinsoumise.fr/2026/06/03/loi-durgence-agricole-les-textes-agricoles-passent-le-vivant-trepasse-sans-perspective-pour-les-agriculteurs/"
  },
  30: {
    justification: "Accord très fort : LFI place la planification écologique et la règle verte au cœur de son programme et affirme que l'activité économique doit respecter les limites écologiques. Le mouvement refuse par ailleurs de réduire l'évaluation du progrès au seul PIB. La croissance de court terme n'est donc pas posée comme une contrainte supérieure aux objectifs climatiques ; +3 est cohérent avec cette hiérarchie assumée.",
    source: "https://programme.lafranceinsoumise.fr/plans/regle-verte/"
  },
  33: {
    justification: "Désaccord très fort : LFI privilégie la réglementation, la planification, les normes et des interdictions ciblées plutôt qu'une politique écologique reposant principalement sur les mécanismes de marché et la seule tarification du carbone. Son programme prévoit de renforcer les contrôles publics et les protections environnementales. La préférence explicite de la question pour le marché est donc fortement contraire à cette approche.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  34: {
    justification: "Accord très fort : LFI propose d'interdire ou de faire cesser des activités, substances et produits jugés particulièrement dangereux pour l'environnement ou la santé, y compris lorsqu'ils conservent une demande économique. L'interdiction fait donc explicitement partie de ses instruments de politique écologique ; +3 correspond à l'intensité de cette position.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  35: {
    response: 2,
    justification: "Accord net : LFI défend une responsabilité financière importante des pays riches envers les pays vulnérables, notamment par une aide publique au développement portée à 0,7 % du revenu national brut, le codéveloppement climatique et la restructuration de dettes qui empêchent d'investir dans la transition. En revanche, le programme ne va pas jusqu'à attribuer explicitement aux pays riches une part prépondérante de l'ensemble du coût mondial de la transition. L'accord est donc fort mais pas maximal ; +2 est plus rigoureux que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s9/"
  },
  37: {
    justification: "Accord net : LFI veut préserver ou récupérer d'importantes marges nationales de décision, notamment en matière budgétaire et économique, et affirme qu'un programme démocratiquement choisi en France doit pouvoir être appliqué malgré certaines règles européennes contraires. Le mouvement reste néanmoins favorable à des coopérations et harmonisations européennes dans plusieurs domaines. La souveraineté nationale est donc fortement privilégiée sans constituer un principe absolu ; +2 est adapté.",
    source: "https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-1-sortir-de-lausterite-et-partager-les-richesses/"
  },
  38: {
    justification: "Position intermédiaire : LFI ne propose pas de sortir de l'euro, mais conteste fortement son architecture actuelle et veut transformer le mandat de la BCE ainsi que les règles monétaires et budgétaires européennes. Le mouvement ne présente donc ni l'euro actuel comme globalement satisfaisant, ni sa disparition comme un objectif politique. Une note neutre traduit mieux cette position qu'un accord ou un désaccord marqué.",
    source: "https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-1-sortir-de-lausterite-et-partager-les-richesses/"
  },
  39: {
    justification: "Position intermédiaire : LFI souhaite davantage de règles communes européennes en matière sociale, fiscale et écologique, mais refuse ou veut désappliquer certaines règles communes de concurrence, de discipline budgétaire et de libre circulation des capitaux. La question porte sur une augmentation générale du pouvoir réglementaire de l'Union, alors que la ligne de LFI dépend fortement du domaine concerné. Une note de 0 reflète donc correctement cette combinaison.",
    source: "https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-1-sortir-de-lausterite-et-partager-les-richesses/"
  },
  40: {
    justification: "Accord très fort : la stratégie européenne de LFI prévoit explicitement de ne pas appliquer certaines règles européennes lorsqu'elles empêchent la mise en œuvre de son programme, notamment dans les domaines budgétaire, économique ou de la concurrence. Le principe d'une désobéissance ciblée à des règles européennes en conflit avec les choix économiques français est donc directement assumé ; +3 est adapté.",
    source: "https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-1-sortir-de-lausterite-et-partager-les-richesses/"
  },
  41: {
    justification: "Désaccord très fort : LFI veut rétablir et renforcer l'ISF et rendre la fiscalité du patrimoine plus progressive. La suppression de l'IFI accompagnée de l'abandon de toute fiscalité spécifique sur les grands patrimoines immobiliers est donc directement opposée à son programme ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  43: {
    justification: "Accord net : LFI veut rétablir l'exit tax et instaurer un impôt universel afin de limiter l'évitement fiscal par le départ à l'étranger. Le programme vise donc clairement à maintenir une capacité d'imposition au-delà de la seule résidence fiscale française. Toutefois, l'impôt universel est formulé principalement sur les revenus et ne correspond pas exactement à une taxation permanente de l'ensemble du patrimoine mondial après expatriation ; +2 est plus précis que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s5/"
  },
  47: {
    justification: "Désaccord très fort : LFI veut maintenir et renforcer un système de retraite par répartition financé principalement par les cotisations, avec notamment une mise à contribution accrue des revenus financiers. Le programme ne propose pas de transférer progressivement une part du système vers la capitalisation. La réforme décrite dans la question est donc directement opposée à son modèle ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/"
  },
  48: {
    justification: "Désaccord très fort : LFI propose un âge légal de départ à la retraite fixé politiquement à 60 ans et rejette le recul de l'âge de départ. Cette logique est directement opposée à une indexation automatique de l'âge légal sur l'espérance de vie, qui ferait évoluer la retraite selon un mécanisme démographique plutôt que selon un choix politique ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s8/"
  },
  49: {
    justification: "Désaccord très fort : LFI veut attacher davantage les droits sociaux à la personne et les maintenir pendant certaines périodes sans emploi, notamment de formation ou de reconversion, au moyen d'une sécurité sociale professionnelle. Cette logique cherche à sécuriser les parcours au-delà de la participation immédiate au marché du travail. Une forte conditionnalité des prestations à la durée de cotisation ou d'emploi est donc largement contraire à cette orientation.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre8/s6/"
  },
  50: {
    justification: "Accord très fort : LFI veut conditionner les aides publiques aux grandes entreprises à des objectifs sociaux, écologiques et fiscaux contraignants et exiger leur remboursement en cas de non-respect. Le mouvement défend également des restrictions sur les dividendes et les rémunérations lorsque l'entreprise bénéficie d'un soutien public. La contrainte décrite par la question correspond donc très directement à sa ligne ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre9/s2/"
  },
  51: {
    justification: "Accord très fort : LFI veut constituer ou renforcer des pôles publics dans des secteurs stratégiques, revenir sur certaines privatisations et utiliser la propriété ou le contrôle public pour orienter la production, l'investissement et l'emploi. Cette conception va au moins aussi loin que l'utilisation active du pouvoir d'actionnaire de l'État envisagée dans la question ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre2/s2/"
  },
  52: {
    justification: "Désaccord très fort : LFI veut restaurer ou renforcer des normes environnementales, les moyens de contrôle et les sanctions applicables aux entreprises. Des simplifications administratives ponctuelles peuvent être soutenues, mais pas lorsqu'elles ont pour contrepartie explicite un affaiblissement des protections sociales ou environnementales. L'arbitrage proposé est donc directement contraire à la ligne générale du mouvement.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre14/s1/"
  },
  53: {
    justification: "Accord très fort : le programme migratoire de LFI prévoit explicitement de régulariser les travailleurs sans papiers ainsi que plusieurs autres catégories de personnes durablement installées. Un étranger en situation irrégulière travaillant de façon stable depuis plusieurs années et n'ayant commis aucun délit correspond directement au cœur de cette politique de régularisation ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre16/s7/"
  },
  54: {
    justification: "Désaccord très fort : LFI s'est opposée aux dispositions instaurant une forme de préférence nationale ou retardant l'accès des étrangers en situation régulière à certaines prestations sociales. Le mouvement défend l'égalité des droits sociaux plutôt qu'une période générale de carence de plusieurs années après l'arrivée en France. La proposition est donc directement contraire à cette position.",
    source: "https://lafranceinsoumise.fr/2024/01/25/immigration-le-conseil-censure-les-mesures-lepenistes-mais-conserve-la-reforme-darmanin-qui-porte-une-grave-atteinte-aux-droits-des-etrangers/"
  },
  57: {
    justification: "Désaccord très fort : LFI défend l'égalité des droits indépendamment de l'origine et une politique facilitant l'accès au séjour et à la nationalité. Son programme ne prévoit pas de refuser l'entrée à une personne légalement admissible sur la base d'une appréciation préalable et subjective de sa volonté supposée de s'intégrer culturellement. Le mécanisme proposé est donc fortement contraire à sa conception de l'immigration.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  58: {
    justification: "Accord très fort : LFI défend l'égalité des droits, la liberté de conscience et la pluralité des pratiques culturelles ou religieuses tant qu'elles respectent la loi commune et les droits fondamentaux. La différence culturelle n'est donc pas considérée en elle-même comme un problème politique. La formulation de la question correspond directement à cette conception ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre10/s2/"
  },
  64: {
    justification: "Désaccord très fort : LFI planifie explicitement une sortie progressive du nucléaire et un système énergétique reposant à terme sur 100 % d'énergies renouvelables, avec abandon des nouveaux EPR et reconversion de la filière. Donner la priorité au nucléaire au prix d'une réduction des investissements dans les renouvelables est donc exactement l'inverse de sa stratégie énergétique ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre13/s3/"
  },
  65: {
    justification: "Accord net : LFI place la réduction des émissions, la règle verte et la planification écologique au-dessus de la recherche de croissance du PIB à court terme, et souhaite compléter le PIB par d'autres indicateurs de progrès. En revanche, aucune proposition actuelle n'établit explicitement que le mouvement accepterait précisément une perte de 3 % du PIB pour réduire les émissions de 20 % si les autres pays ne faisaient aucun effort comparable. L'orientation permet un accord fort mais pas une certitude maximale ; +2 est adapté.",
    source: "https://programme.lafranceinsoumise.fr/plans/regle-verte/"
  },
  66: {
    justification: "Désaccord net : LFI veut soumettre davantage les grandes orientations économiques, monétaires et financières au contrôle démocratique, notamment par une maîtrise publique du crédit et une remise en cause du pouvoir de certaines institutions indépendantes. Le mouvement valorise néanmoins l'expertise technique et ne propose pas de supprimer toute indépendance institutionnelle. Le transfert général de pouvoir des élus vers des experts est donc rejeté nettement mais pas absolument ; -2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre6/s2/"
  },
  67: {
    justification: "Position intermédiaire : LFI accepte qu'un gouvernement élu exerce ses responsabilités et prenne des décisions sans organiser en permanence une consultation populaire. En parallèle, son projet institutionnel veut accroître fortement l'intervention directe des citoyens entre les élections, notamment par le référendum d'initiative citoyenne et la révocation d'élus. Le programme ne tranche pas directement l'arbitrage précis entre nécessité économique alléguée et impopularité immédiate ; 0 est donc la note la plus prudente.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  68: {
    justification: "Accord net : LFI veut instaurer un référendum d'initiative citoyenne permettant de proposer ou d'abroger une loi, de modifier la Constitution ou de révoquer des élus, et prévoit aussi davantage de recours direct au vote populaire. Le programme ne dit toutefois pas que tout sujet complexe devrait systématiquement être soumis à référendum sans dispositif d'information ou de délibération. L'accord avec un recours beaucoup plus fréquent au référendum est donc fort mais pas absolu ; +2 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/faire-la-revolution-citoyenne/s4/"
  },
  71: {
    justification: "Accord très fort : LFI propose explicitement l'élection de l'Assemblée nationale à la proportionnelle dans le cadre d'une VIe République plus parlementaire. Le système assumé rendrait mécaniquement plus fréquentes les coalitions lorsque aucune force n'obtient seule la majorité, même si l'instabilité n'est pas recherchée pour elle-même. Le principe central de la question correspond donc directement au projet institutionnel ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre1/s2/"
  },
  73: {
    justification: "Accord très fort : des responsables et députés LFI rejettent explicitement les explications qui attribuent la délinquance à l'origine culturelle et mettent davantage en avant la précarité, les inégalités, les conditions sociales, la prévention et les services publics. La causalité sociale et économique proposée dans la question correspond donc très fortement à leur lecture politique ; +3 est adapté.",
    source: "https://www.assemblee-nationale.fr/dyn/opendata/CRCANR5L17S2026PO59051N010.html"
  },
  76: {
    justification: "Accord très fort : LFI propose une « Sécu à 100 % » dans laquelle les soins prescrits seraient remboursés intégralement par l'Assurance maladie et où les complémentaires seraient intégrées au système public. Cette mesure correspond presque exactement à la proposition de rembourser intégralement les soins essentiels tout en réduisant fortement le rôle des mutuelles ; +3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  77: {
    justification: "Désaccord très fort : LFI propose au contraire de rouvrir des services d'urgence et des maternités et de garantir l'accès territorial à des structures publiques de soins. La fermeture ou le regroupement de petits services afin de concentrer l'offre dans de grands établissements va donc directement à l'encontre de sa stratégie hospitalière ; -3 est adapté.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre15/s2/"
  },
  78: {
    justification: "Désaccord très fort : LFI veut restaurer un cadre national du service public d'éducation, recruter les enseignants principalement par concours nationaux et mettre fin aux dispositifs de contrôle permanent. Le programme privilégie une gouvernance plus collective des établissements plutôt qu'un renforcement du pouvoir managérial individuel du chef d'établissement sur le recrutement et l'évaluation des professeurs. La proposition est donc fortement contraire à sa ligne.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre5/s3/"
  },
  80: {
    justification: "Accord net : LFI veut limiter fortement les locations touristiques de courte durée, notamment en réduisant le nombre de jours autorisés et en supprimant leurs avantages fiscaux. Cette politique va clairement dans le sens d'un pouvoir municipal accru pour protéger le logement permanent. Elle reste toutefois moins radicale qu'une interdiction générale de toute location touristique régulière d'une résidence non principale ; +2 est donc plus précis que +3.",
    source: "https://melenchon2027.fr/programme2025/livre/chapitre7/s5/"
  },
  82: {
    justification: "Désaccord très fort : LFI rejette explicitement l'idée d'étendre la dissuasion nucléaire française à la protection des autres pays européens et conteste la notion de « parapluie nucléaire français » au bénéfice des partenaires. Cette position est directement opposée à la proposition selon laquelle la France devrait offrir sa garantie nucléaire aux autres Européens tout en conservant la décision finale d'emploi ; -3 est adapté.",
    source: "https://lafranceinsoumise.fr/2025/10/02/non-monsieur-macron-il-ny-a-pas-de-parapluie-nucleaire-francais/"
  },
  83: {
    justification: "Accord très fort : lors du vote définitif du 15 juillet 2026 sur la proposition de loi créant un droit strictement encadré à l'aide à mourir, une très large majorité des députés LFI-NFP a voté en faveur du texte : 61 pour, 2 contre et 3 abstentions parmi les suffrages et positions recensés du groupe. Cette orientation collective très nette justifie +3 pour un dispositif médical et légal strictement contrôlé.",
    source: "https://www.assemblee-nationale.fr/dyn/17/scrutins/8280"
  },
  85: {
    response: 3,
    justification: "Accord très fort : en juin 2025, des députés LFI ont déposé un amendement demandant explicitement la fin de la modulation des allocations familiales selon le revenu du ménage et le retour à leur caractère universel. La position documentée correspond presque mot pour mot à la proposition de verser les allocations selon le nombre d'enfants sans en diminuer le montant lorsque les revenus augmentent. La correspondance est directe ; +3 est plus adapté que +2.",
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
