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

const lfiParty = DATA.entities.find(entity => entity.id === 'lfi');
if (lfiParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(LFI_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) lfiParty.responses[index] = override.response;
    if (override.justification) lfiParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(lfiParty.sources)) lfiParty.sources[index] = override.source;
  });

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
