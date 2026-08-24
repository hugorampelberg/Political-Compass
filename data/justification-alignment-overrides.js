// Réalignement final des justifications et de quelques scores après les audits documentaires.
// Cette couche est chargée en dernier afin de garantir la cohérence entre score et texte affiché.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions) || !Array.isArray(DATA.entities)) return;

  const JUSTIFICATION_ALIGNMENT_OVERRIDES = {
    ps: {
      26: "Désaccord net : le projet socialiste 2026 refuse de faire de l'allongement et de la multiplication des peines de prison le principal levier de sécurité. Il veut développer les peines alternatives, la prévention et la réinsertion, et ne prévoit de nouvelles capacités carcérales que pour mettre fin à la surpopulation et aux conditions indignes. Accepter une forte hausse de la population carcérale au nom de peines plus dures va donc nettement contre sa ligne, ce qui est cohérent avec le score -2.",
      27: "Accord très fort : le projet socialiste fait de la prévention une priorité nationale, affirme que la sécurité durable repose d'abord sur la cohésion sociale et veut agir sur les causes de la délinquance puis sur la réinsertion après sanction. Cette hiérarchie correspond directement à l'idée que prévention et réinsertion sont préférables à un durcissement général des sanctions, ce qui justifie +3.",
      28: "Désaccord net : le PS veut renforcer les moyens de la police et la proximité, mais il associe cette politique à davantage de garanties, de contrôle démocratique et de protection des libertés publiques. Il ne défend pas une extension générale des pouvoirs policiers en acceptant comme contrepartie un recul des libertés individuelles ; -2 traduit donc correctement ce désaccord net.",
      44: "Désaccord modéré : le PS veut encadrer strictement les sanctions de France Travail, interdire les radiations pour refus d'emplois précaires ou inadaptés et garantir un recours avant sanction. Il maintient néanmoins explicitement un barème national de sanctions et ne supprime donc pas toute conséquence en cas de manquements répétés. Face au cas plus restrictif décrit par la question — plusieurs refus d'emplois raisonnablement adaptés — le désaccord existe mais reste modéré ; -1 est adapté.",
      47: "Désaccord très fort : le PS réaffirme le rôle central du système de retraite par répartition et rejette une évolution structurelle qui ferait de la capitalisation un second pilier obligatoire ou majeur. Des dispositifs d'épargne retraite facultatifs peuvent subsister, mais ils ne correspondent pas au basculement structurel proposé par la question ; -3 reste donc cohérent.",
      68: "Accord modéré : le PS veut développer le référendum, le RIC, le préférendum et d'autres formes de démocratie directe. Il prévoit cependant des conventions citoyennes et un débat public préparatoire précisément pour éclairer les sujets complexes avant le vote. Il est donc favorable à davantage de consultations populaires, mais pas à l'idée de les multiplier sans traiter le déficit de compréhension technique ; +1 est adapté.",
      72: "Désaccord modéré : le PS veut développer l'apprentissage du français, la formation civique et l'intégration, mais il prévoit parallèlement de sécuriser et d'automatiser le renouvellement de certains titres de séjour de longue durée. Il encourage donc ces efforts sans en faire une condition générale du maintien durable du droit au séjour ; la proposition va un peu plus loin que sa doctrine, d'où -1.",
      81: "Accord net : le PS soutient la poursuite d'une aide militaire, financière et politique importante à l'Ukraine, veut utiliser les avoirs russes gelés pour l'aide et la reconstruction et cherche à placer l'Ukraine en position de force. Son objectif reste toutefois une paix juste et durable obtenue par une issue politique, plutôt qu'un engagement formulé comme automatiquement maintenu jusqu'à la récupération de chaque territoire quel que soit le temps nécessaire ; +2 est donc plus précis que +3."
    },
    "les-ecologistes": {
      9: "Désaccord très fort : Les Écologistes refusent de rétablir les finances publiques en faisant des politiques sociales et des services publics la variable d'ajustement. Leur projet assume au contraire davantage de recettes progressives et d'investissement public pour financer la solidarité et la transition. L'arbitrage de la question — réduire certaines politiques sociales pour équilibrer le budget — est donc directement opposé à leur doctrine, ce qui justifie -3.",
      32: "Désaccord net : Les Écologistes refusent de financer une baisse des cotisations sociales par une hausse générale de la TVA, qu'ils jugent régressive pour les ménages modestes. Leur projet privilégie un financement plus progressif de la protection sociale, notamment par la fiscalité sur les revenus et le capital. Une TVA environnementale ciblée peut exister, mais elle ne correspond pas à la logique de TVA sociale proposée ici ; -2 est donc adapté.",
      70: "Désaccord très fort : Les Écologistes veulent sortir de l'hyperprésidentialisme, renforcer le Parlement et les contre-pouvoirs et faire évoluer les institutions vers un fonctionnement davantage parlementaire. La proposition de donner au président plus de moyens pour appliquer son programme malgré les blocages parlementaires va exactement dans la direction inverse ; l'opposition est donc maximale, d'où -3.",
      87: "Accord modéré : Les Écologistes font de la souveraineté numérique une priorité et veulent favoriser des solutions françaises ou européennes, notamment dans les administrations et pour les infrastructures critiques. Ils ne disent toutefois pas qu'il faut retenir systématiquement un modèle européen lorsqu'il est sensiblement moins performant ou plus coûteux. La préférence européenne est réelle, mais la concession contenue dans la question limite l'accord à +1."
    }
  };

  const RESPONSE_ALIGNMENT_OVERRIDES = {
    rn: {
      84: {
        response: -1,
        justification: "Désaccord modéré : des députés RN dénoncent les dérives de certains groupes privés lucratifs d'EHPAD et demandent davantage de transparence, de contrôles et d'encadrement. Le parti ne propose toutefois pas de faire disparaître progressivement les groupes privés lucratifs du secteur ni de convertir leurs établissements en structures publiques ou non lucratives. Sa ligne consiste donc plutôt à maintenir ce modèle sous un contrôle renforcé ; elle va à l'encontre de la proposition, mais de façon modérée compte tenu de ses critiques envers certaines pratiques du secteur, d'où -1."
      }
    }
  };

  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(JUSTIFICATION_ALIGNMENT_OVERRIDES).forEach(([entityId, overrides]) => {
    const entity = DATA.entities.find(item => item.id === entityId);
    if (!entity || !Array.isArray(entity.justifications)) return;

    Object.entries(overrides).forEach(([questionId, justification]) => {
      const index = questionIndexById.get(Number(questionId));
      if (index === undefined) return;
      entity.justifications[index] = justification;
    });
  });

  Object.entries(RESPONSE_ALIGNMENT_OVERRIDES).forEach(([entityId, overrides]) => {
    const entity = DATA.entities.find(item => item.id === entityId);
    if (!entity || !Array.isArray(entity.responses)) return;

    Object.entries(overrides).forEach(([questionId, override]) => {
      const index = questionIndexById.get(Number(questionId));
      if (index === undefined) return;
      if (Object.prototype.hasOwnProperty.call(override, 'response')) entity.responses[index] = override.response;
      if (override.justification && Array.isArray(entity.justifications)) entity.justifications[index] = override.justification;
    });

    const scores = {};
    DATA.axes.forEach(axis => {
      const denominator = 3 * DATA.questions.reduce(
        (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
        0
      );
      const numerator = DATA.questions.reduce(
        (sum, question, index) => sum + (entity.responses[index] ?? 0) * question.coefficients[axis.key],
        0
      );
      scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
    });
    entity.axisScores = scores;
  });
})();