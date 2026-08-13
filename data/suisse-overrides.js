const SUISSE_RESPONSE_OVERRIDES = {
  4: {
    response: -3,
    justification: "Désaccord très fort : la Suisse s'est déjà prononcée directement sur un mécanisme de plafonnement relatif des rémunérations avec l'initiative 1:12, qui aurait interdit qu'un salaire dépasse douze fois le plus bas salaire d'une même entreprise. Le Conseil fédéral a recommandé de rejeter cette initiative sans contre-projet et a refusé le principe d'un ratio salarial légal général. L'instrument précis proposé par la question est donc directement contraire à sa position ; -3 est plus adapté que -2.",
    source: "https://www.bk.admin.ch/fr/votation-federale-du-24-novembre-2013"
  },
  14: {
    response: -3,
    justification: "Désaccord très fort : le Conseil fédéral prépare le budget, mais l'Assemblée fédérale dispose de la souveraineté budgétaire et doit approuver les crédits et les dépenses de la Confédération. Le gouvernement ne peut pas mettre en vigueur seul un nouveau budget afin de contourner l'absence de majorité parlementaire. La proposition est donc directement contraire au fonctionnement institutionnel suisse ; -3 est adapté.",
    source: "https://www.parlament.ch/fr/%C3%BCber-das-parlament/portrait-du-parlement/attributions-assemblee-federale/finances/budget-assorti-un-plan-int%C3%A9gr%C3%A9-t%C3%A2ches-finances"
  },
  19: {
    response: 0,
    justification: "Position intermédiaire : le Conseil fédéral veut maîtriser les effets de l'immigration et conserver des instruments de régulation, mais il s'est opposé à une limitation globale et rigide de la population et des entrées. En 2026, il a notamment rejeté l'initiative « Pas de Suisse à 10 millions » en soulignant les besoins du marché du travail, la prospérité et les relations avec l'Union européenne. Il ne défend donc pas clairement un objectif général de réduction du nombre d'immigrés ; 0 est plus précis que +1.",
    source: "https://www.ejpd.admin.ch/fr/le-conseil-federal-rejette-linitiative-populaire-pas-de-suisse-a-10-millions-"
  },
  22: {
    response: 3,
    justification: "Accord très fort : la naturalisation ordinaire suisse exige en principe dix années de résidence, un permis C, une intégration réussie, des connaissances linguistiques, le respect de l'ordre public et des valeurs constitutionnelles ainsi qu'une participation à la vie économique ou à une formation. Les cantons et communes peuvent en outre fixer certaines exigences complémentaires. L'accès à la nationalité est donc déjà particulièrement exigeant et correspond directement à la proposition ; +3 est adapté.",
    source: "https://www.sem.admin.ch/sem/fr/home/integration-einbuergerung/schweizer-werden/ordentlich.html"
  },
  24: {
    response: 0,
    justification: "Position intermédiaire : la Suisse impose des exigences fortes d'intégration, de langue et de respect des règles communes, mais le Conseil fédéral ne défend pas actuellement une réduction générale d'une immigration pourtant économiquement utile au seul nom de la cohésion culturelle. En 2026, il a au contraire rejeté un plafonnement rigide de l'immigration en invoquant les besoins de main-d'œuvre et la prospérité. Les préoccupations d'intégration existent, mais elles ne suffisent pas à valider l'arbitrage précis de la question ; 0 est plus juste que +2.",
    source: "https://www.ejpd.admin.ch/fr/le-conseil-federal-rejette-linitiative-populaire-pas-de-suisse-a-10-millions-"
  },
  30: {
    response: 0,
    justification: "Position intermédiaire : la Suisse poursuit l'objectif de zéro émission nette d'ici 2050 et mène une politique climatique substantielle, mais elle cherche à concilier cette trajectoire avec l'innovation, la compétitivité, la sécurité énergétique et la prospérité. Le Conseil fédéral ne formule pas une priorité climatique qui devrait être maintenue par principe même en cas de baisse de la croissance à court terme. L'ambition écologique est réelle, mais la contrepartie économique de la question n'est pas clairement assumée ; 0 est plus précis que +1.",
    source: "https://www.bafu.admin.ch/fr/objectif-zero-net-2050"
  },
  38: {
    response: -3,
    justification: "Désaccord très fort : la Suisse conserve le franc suisse et une politique monétaire nationale indépendante conduite par la Banque nationale suisse, qui fixe ses propres taux directeurs et peut intervenir sur le marché des changes. Son modèle repose donc précisément sur la conservation des instruments monétaires que l'adoption de l'euro ferait perdre. Face à une question qui présente l'euro comme globalement bénéfique malgré cette perte d'autonomie, le choix institutionnel suisse correspond à un désaccord maximal ; -3 est plus cohérent que 0.",
    source: "https://www.snb.ch/fr/publications/communication/press-releases-restricted/pre_20260618"
  },
  43: {
    response: -3,
    justification: "Désaccord très fort : lorsqu'une personne quitte définitivement la Suisse, son assujettissement fiscal illimité prend fin ; seules certaines attaches suisses, notamment immobilières, peuvent continuer à produire un assujettissement limité. La Suisse ne défend donc pas le principe de continuer à taxer le patrimoine mondial d'une très grande fortune après son expatriation. Le mécanisme proposé est directement opposé au fonctionnement fiscal suisse ; -3 est plus adapté que -1.",
    source: "https://www.dfae.admin.ch/fr/prendre-sa-retraite-a-l-etranger-suisses-de-l-etranger"
  },
  44: {
    response: 3,
    justification: "Accord très fort : en Suisse, une personne au chômage doit accepter tout emploi réputé convenable. Le refus d'un travail convenable proposé peut entraîner une suspension du droit aux indemnités de 1 à 60 jours selon la gravité de la faute, et des suspensions répétées conduisent à un allongement de la sanction. Le dispositif permet donc explicitement de faire perdre une part significative des allocations après le refus d'emplois raisonnablement adaptés ; +3 correspond directement à la proposition.",
    source: "https://www.arbeit.swiss/fr/faq-sur-lindemnite-de-chomage"
  },
  51: {
    response: 2,
    justification: "Accord net : la Confédération détient des participations majeures dans plusieurs entreprises stratégiques, notamment la Poste, les CFF, Swisscom et Skyguide, et le Conseil fédéral leur assigne des objectifs stratégiques pluriannuels. L'État utilise donc réellement son pouvoir d'actionnaire pour orienter des entreprises vers des objectifs de long terme. Cette pratique reste concentrée sur un ensemble ciblé d'entreprises publiques ou à participation fédérale plutôt que sur les grandes entreprises privées en général ; +2 est plus précis que +1.",
    source: "https://www.uvek.admin.ch/fr/objectifs-assignes-aux-entreprises-federales-et-realisation"
  },
  52: {
    response: 1,
    justification: "Accord modéré : la Suisse mène une politique explicite de réduction des charges réglementaires et de simplification administrative, notamment à travers la loi sur l'allègement des coûts de la réglementation pour les entreprises. Mais le Conseil fédéral présente cette démarche comme une recherche de règles plus efficaces et proportionnées, pas comme l'acceptation générale d'un affaiblissement substantiel des protections sociales ou environnementales. La contrepartie contenue dans la question limite donc l'accord à +1 plutôt que +2.",
    source: "https://www.efd.admin.ch/fr/newnsb/R_xyH9xISt0FSxb5D2r6p"
  },
  59: {
    response: 3,
    justification: "Accord très fort : les mesures policières de lutte contre le terrorisme permettent à fedpol d'intervenir à titre préventif lorsqu'il existe des indices concrets et actuels d'une menace terroriste, avant même qu'une infraction puisse être suffisamment établie pour engager des poursuites pénales. Ces mesures restent soumises à la nécessité, à la proportionnalité et au contrôle juridique, mais le principe précis d'une surveillance préventive ciblée est explicitement accepté ; +3 est plus adapté que +1.",
    source: "https://www.fedpol.admin.ch/fr/mesures-policieres-de-lutte-contre-le-terrorisme-mpt"
  },
  69: {
    response: -3,
    justification: "Désaccord très fort : la démocratie suisse repose sur l'égalité politique des citoyens et sur un suffrage où chaque électeur dispose du même poids, sans pondération selon le diplôme, l'expertise ou le niveau de connaissance institutionnelle. Donner davantage de poids politique aux citoyens jugés plus compétents créerait précisément une inégalité de suffrage contraire à ce principe ; -3 est plus adapté que -2.",
    source: "https://www.bk.admin.ch/fr/election-du-conseil-national"
  },
  70: {
    response: -3,
    justification: "Désaccord très fort : le président de la Confédération n'est pas un chef de l'exécutif doté d'un mandat personnel supérieur aux autres conseillers fédéraux ; il est un primus inter pares au sein d'un gouvernement collégial. Les lois et le budget restent en outre soumis au Parlement et aux mécanismes démocratiques suisses. Renforcer le président afin qu'il puisse imposer son programme face aux blocages parlementaires serait donc directement contraire à l'architecture institutionnelle suisse ; -3 est adapté.",
    source: "https://www.admin.ch/fr/presidence-confederation-fonction"
  },
  76: {
    response: -2,
    justification: "Désaccord net : l'assurance obligatoire suisse couvre déjà un panier légal de soins essentiels et les assurances complémentaires restent facultatives pour des prestations supplémentaires, si bien que le rôle des complémentaires est moins central que ne le suggérait l'ancienne justification. En revanche, le système suisse maintient une franchise, une quote-part et d'autres participations directes des assurés et ne vise pas un remboursement intégral des soins essentiels par l'assurance obligatoire. Le désaccord avec la proposition reste donc net, mais pas maximal ; -2 est plus précis que -3.",
    source: "https://www.bag.admin.ch/fr/assurance-maladie-lessentiel-en-bref"
  }
};

const suisseGovernment = DATA.entities.find(entity => entity.id === 'suisse');
if (suisseGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(SUISSE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    suisseGovernment.responses[index] = override.response;
    suisseGovernment.justifications[index] = override.justification;
    if (Array.isArray(suisseGovernment.sources)) suisseGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (suisseGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  suisseGovernment.axisScores = scores;
}
