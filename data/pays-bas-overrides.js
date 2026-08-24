const PAYS_BAS_RESPONSE_OVERRIDES = {
  13: {
    response: 3,
    justification: "Accord très fort : le gouvernement Jetten s'engage explicitement à poursuivre le Rainbow Agreement, à garantir l'acceptation, la sécurité et l'égalité des chances des personnes LGBTQI+ et à renforcer l'égalité entre les femmes et les hommes. Cette ligne correspond directement à l'acceptation d'une grande diversité de modes de vie dès lors que les droits d'autrui sont respectés ; +3 est donc justifié.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-at-work"
  },
  14: {
    response: -3,
    justification: "Désaccord très fort : le cabinet Jetten est un gouvernement minoritaire qui affirme devoir construire des majorités avec les deux chambres du Parlement. Le budget et les principales lois doivent être approuvés par les États généraux et la coalition revendique au contraire un renforcement des contre-pouvoirs parlementaires. Faire adopter un budget sans vote pour contourner un blocage est donc directement contraire au fonctionnement institutionnel qu'elle défend ; -3 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/working-together-is-our-joint-mission"
  },
  16: {
    response: 3,
    justification: "Accord très fort : le gouvernement prévoit une agence nationale de lutte contre les discriminations, des policiers spécialisés, des mesures contre le profilage ethnique ainsi que des politiques spécifiques contre le racisme et l'antisémitisme. Il reconnaît également les effets persistants de l'esclavage et du passé colonial. Il ne se limite donc pas à l'égalité juridique formelle et veut corriger activement des discriminations structurelles ; +3 est justifié.",
    source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
  },
  23: {
    response: 3,
    justification: "Accord très fort : la coalition veut rendre la naturalisation plus exigeante en relevant notamment le niveau de néerlandais requis à B1, en portant à six ans la durée de séjour nécessaire et en maintenant en principe l'obligation de renoncer à l'autre nationalité. Ces mesures correspondent directement à un durcissement substantiel de l'accès à la nationalité ; +3 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-in-the-world"
  },
  26: {
    response: -2,
    justification: "Désaccord net : le gouvernement maintient le droit d'asile, la réinstallation et l'objectif d'un accueil humain, mais il veut explicitement réduire l'afflux de demandeurs d'asile, traiter davantage de demandes hors de l'Union européenne et durcir plusieurs procédures. Il ne défend donc pas une augmentation générale de l'accueil des réfugiés même au prix d'un coût économique supplémentaire. Le maintien d'obligations humanitaires empêche toutefois un désaccord maximal ; -2 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-in-the-world"
  },
  28: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement conserve une politique importante de prévention de la délinquance et de lutte contre la récidive, mais il veut simultanément accélérer les sanctions, augmenter certaines peines et développer les capacités carcérales. Il ne privilégie donc pas clairement la prévention et la réinsertion plutôt que l'augmentation des sanctions ; les deux approches sont combinées, ce qui justifie 0.",
    source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
  },
  31: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement Jetten maintient des objectifs climatiques ambitieux, mais affirme explicitement vouloir faire aller de pair politique climatique, compétitivité et croissance durable, tout en visant environ 1,5 % de croissance structurelle. Il ne présente donc pas une baisse de la croissance à court terme comme une contrepartie qu'il faudrait accepter par principe. L'ambition climatique et le refus d'opposer climat et prospérité se compensent ici ; 0 est plus précis que +1.",
    source: "https://www.government.nl/government/coalition-agreement/big-choices-facing-the-netherlands"
  },
  32: {
    response: -2,
    justification: "Désaccord net : les Pays-Bas poursuivent la décarbonation, mais le gouvernement Jetten met fortement l'accent sur une énergie abordable, veut réduire les coûts de l'électricité et supprime certains surcoûts carbone nationaux, notamment la taxe carbone nationale sur l'industrie. Il ne défend donc pas une forte hausse du prix des énergies fossiles comme levier principal de transition. L'existence d'une tarification carbone européenne et d'autres instruments de prix empêche toutefois de retenir -3 ; -2 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/big-choices-facing-the-netherlands"
  },
  36: {
    response: 1,
    justification: "Accord modéré : le gouvernement néerlandais assume une responsabilité internationale importante en matière de climat et de développement et veut accroître à nouveau l'aide internationale. Il soutient donc que les pays riches contribuent davantage, mais ne défend pas clairement qu'ils doivent supporter une part prépondérante du coût mondial de la transition. L'effort reste conçu comme international et partagé ; +1 est plus précis que +2.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-in-the-world"
  },
  53: {
    response: 1,
    justification: "Accord modéré : le gouvernement veut réduire fortement la charge administrative des entreprises, notamment en supprimant ou simplifiant au moins 500 règles. Cette volonté de simplification est nette, mais la coalition maintient parallèlement des objectifs sociaux, sanitaires et environnementaux élevés et ne dit pas qu'il faut accepter de manière générale un affaiblissement de ces protections. La contrepartie contenue dans la question limite donc l'accord à +1.",
    source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
  },
  55: {
    response: 1,
    justification: "Accord modéré : la coalition veut renforcer les obligations d'intégration, de langue, de travail et de participation des nouveaux arrivants et prévoit que le refus de participer ou de travailler puisse avoir des conséquences sur certaines prestations. Elle ne met toutefois pas en place une exclusion générale de tous les immigrés légalement installés des prestations sociales pendant plusieurs années. La logique de conditionnalité accrue va donc partiellement dans le sens de la question, mais de façon ciblée ; +1 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-in-the-world"
  },
  60: {
    response: 3,
    justification: "Accord très fort : le gouvernement veut rendre permanentes plusieurs mesures administratives de lutte contre le terrorisme et prévoit des instruments temporaires de surveillance de sécurité nationale pouvant inclure une surveillance électronique avant qu'une infraction puisse nécessairement être poursuivie. Cette logique correspond directement à l'acceptation de mesures préventives ciblées face à un risque terroriste malgré l'absence d'éléments suffisants pour engager immédiatement des poursuites ; +3 est justifié.",
    source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
  },
  63: {
    response: 1,
    justification: "Accord modéré : les Pays-Bas utilisent des instruments de tarification du carbone et le gouvernement maintient des aides ciblées pour protéger les ménages vulnérables face aux coûts énergétiques. Cela va dans le sens d'un signal-prix accompagné de compensation. Mais la coalition insiste fortement sur l'abordabilité de l'énergie et supprime aussi certains surcoûts carbone nationaux ; elle n'assume donc pas clairement une baisse importante du pouvoir d'achat comme contrepartie durable. +1 est plus précis que +2.",
    source: "https://www.government.nl/government/coalition-agreement/big-choices-facing-the-netherlands"
  },
  70: {
    response: -3,
    justification: "Désaccord très fort : le système démocratique néerlandais et le programme de la coalition reposent sur l'égalité politique des citoyens et le renforcement de la représentation parlementaire et des contre-pouvoirs. Accorder davantage de poids politique aux électeurs en fonction de leurs connaissances institutionnelles ou économiques créerait une inégalité de suffrage contraire à ce principe. Le désaccord avec la proposition est donc maximal ; -3 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/a-secure-netherlands-and-a-strong-society"
  },
  71: {
    response: -3,
    justification: "Désaccord très fort : transposée au pouvoir exécutif néerlandais, la proposition va à l'encontre de la ligne du cabinet Jetten. Le gouvernement minoritaire doit construire des majorités parlementaires et la coalition veut renforcer le Parlement et les contre-pouvoirs plutôt que donner à l'exécutif la capacité de passer outre les blocages. L'opposition au principe d'un exécutif renforcé au détriment du Parlement est donc très forte ; -3 est adapté.",
    source: "https://www.government.nl/government/coalition-agreement/working-together-is-our-joint-mission"
  },
  76: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement veut améliorer la répartition territoriale de l'offre de soins, former davantage de professionnels de premier recours et aider notamment les médecins généralistes à s'installer là où les besoins sont importants. En revanche, le programme ne soutient pas clairement le mécanisme précis consistant à limiter le conventionnement de nouveaux médecins dans les zones déjà bien dotées. L'objectif de rééquilibrage est partagé mais pas l'outil proposé par la question ; 0 est donc plus prudent que +1.",
    source: "https://www.government.nl/government/coalition-agreement/the-netherlands-at-work"
  },
  88: {
    response: 1,
    justification: "Accord modéré : le gouvernement veut renforcer la souveraineté numérique européenne, réduire la dépendance envers les fournisseurs non européens et développer les infrastructures et capacités européennes d'intelligence artificielle. Cette préférence européenne est nette. En revanche, sa stratégie insiste aussi sur l'innovation, la performance et la compétitivité et ne dit pas qu'une administration doit systématiquement accepter une solution sensiblement moins performante ou plus coûteuse. La contrepartie de la question limite donc l'accord à +1.",
    source: "https://www.government.nl/latest/news/2026/07/03/international-strategy-for-safe-and-responsible-ai-transition"
  }
};

const paysBasGovernment = DATA.entities.find(entity => entity.id === 'pays-bas');
if (paysBasGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(PAYS_BAS_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    paysBasGovernment.responses[index] = override.response;
    paysBasGovernment.justifications[index] = override.justification;
    if (Array.isArray(paysBasGovernment.sources)) paysBasGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (paysBasGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  paysBasGovernment.axisScores = scores;
}
