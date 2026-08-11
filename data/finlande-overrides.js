const FINLANDE_RESPONSE_OVERRIDES = {
  15: {
    response: -3,
    justification: "Désaccord très fort : le gouvernement finlandais prépare le budget, mais celui-ci doit être soumis au Parlement, qui décide des dépenses et recettes de l'État et peut modifier la proposition gouvernementale avant de l'adopter. Il n'existe pas de mécanisme permettant à l'exécutif de mettre en vigueur seul un nouveau budget pour contourner l'absence de majorité parlementaire. La proposition est donc directement contraire au fonctionnement institutionnel finlandais ; -3 est adapté.",
    source: "https://valtioneuvosto.fi/about-the-government/the-budget/sessions"
  },
  28: {
    response: -1,
    justification: "Désaccord modéré : le gouvernement Orpo maintient des mesures de prévention, de lutte en amont contre la criminalité et de réinsertion, mais sa ligne pénale actuelle met davantage l'accent sur le durcissement des sanctions, l'augmentation des capacités pénitentiaires et le renforcement des pouvoirs de sécurité. Il ne privilégie donc pas la prévention et la réinsertion plutôt que l'augmentation des sanctions ; la politique va plutôt dans le sens inverse, sans abandonner totalement la prévention. -1 est plus précis que +1.",
    source: "https://valtioneuvosto.fi/en/governments/government-programme"
  },
  32: {
    response: 0,
    justification: "Position intermédiaire : la Finlande conserve des objectifs climatiques ambitieux, mais le gouvernement Orpo insiste simultanément sur la compétitivité, la croissance, la sécurité énergétique et la maîtrise des coûts pour les ménages et les entreprises. Il ne formule pas une priorité climatique qui devrait être maintenue par principe même au prix d'une baisse de la croissance à court terme. L'ambition écologique et la contrainte économique se compensent ici ; 0 est plus précis que +1.",
    source: "https://valtioneuvosto.fi/en/governments/government-programme"
  },
  33: {
    response: -1,
    justification: "Désaccord modéré : la Finlande utilise bien la tarification carbone et d'autres signaux-prix, mais le gouvernement a parallèlement réduit à partir de 2026 la composante CO₂ de la fiscalité sur l'essence et le diesel afin d'alléger le coût des carburants. Cette politique montre qu'il ne souhaite pas provoquer une forte hausse du prix des énergies fossiles supportée par les ménages. Le désaccord reste modéré car les instruments carbone ne sont pas abandonnés ; -1 est plus précis que 0.",
    source: "https://www.vero.fi/tietoa-verohallinnosta/uutishuone/verotuksen_muutoksia/valmisteverotuksen-muutoksia-2026/"
  },
  41: {
    response: 0,
    justification: "Position intermédiaire : la Finlande est fortement engagée dans l'Union européenne et soutient des règles communes lorsque l'échelle européenne apporte une valeur ajoutée, mais le gouvernement Orpo fait aussi de la simplification et de l'allègement de la réglementation européenne une priorité. Il ne défend donc pas une augmentation générale du nombre de règles communes ; coopération européenne et volonté de déréglementation se compensent, ce qui justifie 0 plutôt que +1.",
    source: "https://valtioneuvosto.fi/finlands-eu-policy/simplifying-eu-legislation"
  },
  55: {
    response: 1,
    justification: "Accord modéré : le gouvernement Orpo veut réduire fortement les charges administratives et simplifier la réglementation pesant sur les entreprises, y compris au niveau européen. Mais il présente cette démarche comme la suppression des contraintes inutiles et l'amélioration de la proportionnalité des règles, pas comme l'acceptation générale d'un affaiblissement substantiel des protections sociales ou environnementales. La contrepartie précise de la question limite donc l'accord à +1 plutôt que +2.",
    source: "https://valtioneuvosto.fi/finlands-eu-policy/simplifying-eu-legislation"
  },
  58: {
    response: 2,
    justification: "Accord net : le gouvernement Orpo veut orienter davantage l'immigration de travail vers les compétences, les métiers utiles et les besoins identifiés de l'économie, et renforce les exigences de revenu et d'emploi. Cependant, le système reste largement fondé sur la demande des employeurs et continue d'admettre des travailleurs moins qualifiés lorsqu'ils disposent d'un emploi conforme aux règles. La priorité donnée aux profils qualifiés est nette, mais pas au point de réserver l'immigration économique presque exclusivement à ceux-ci ; +2 est plus précis que +3.",
    source: "https://valtioneuvosto.fi/en/-/1410877/report-points-based-labour-migration-system-can-be-used-for-different-purposes"
  },
  60: {
    response: 1,
    justification: "Accord modéré : la Finlande accorde une importance croissante à la langue, au travail, à l'autonomie et au respect des règles pour l'installation durable et la citoyenneté. Mais les critères les plus exigeants interviennent surtout au stade du séjour permanent ou de la naturalisation ; ils ne constituent pas une règle générale permettant de refuser à l'entrée toute personne autrement légalement admissible sur la seule anticipation d'une mauvaise intégration culturelle. +1 reconnaît la priorité donnée à l'intégration sans surestimer le pouvoir de refus préventif.",
    source: "https://valtioneuvosto.fi/en/-/1410869/stricter-conditions-for-permanent-residence-permits-as-of-8-january"
  },
  63: {
    response: 3,
    justification: "Accord très fort : le gouvernement finlandais veut permettre au renseignement policier d'intervenir plus tôt sur la base de menaces, avant qu'une infraction déterminée puisse être suffisamment établie pour engager des poursuites, et prévoit un recours accru à des moyens secrets de collecte d'informations dans les situations graves. Le principe précis d'une surveillance préventive ciblée face à un risque terroriste ou sécuritaire est donc explicitement accepté ; +3 est plus adapté que +2.",
    source: "https://valtioneuvosto.fi/en/-/1410869/police-criminal-intelligence-to-be-strengthened"
  },
  69: {
    response: 0,
    justification: "Position intermédiaire : la Finlande est très favorable au nucléaire et facilite de nouveaux investissements dans cette filière, mais elle développe simultanément fortement l'éolien, les autres renouvelables et les réseaux électriques. Le gouvernement ne défend pas clairement une réduction des investissements renouvelables afin de privilégier le nucléaire, qui est pourtant la contrepartie décisive de la question. La préférence pour le nucléaire existe sans arbitrage net contre les renouvelables ; 0 est plus précis que +1.",
    source: "https://valtioneuvosto.fi/en/-/1410877/reform-of-nuclear-energy-act-to-modernise-nuclear-plant-regulation-and-ease-new-nuclear-energy-investments"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : le système électoral finlandais repose sur l'égalité du suffrage et ne donne pas davantage de poids politique à certains citoyens selon leur diplôme, leur expertise ou leur niveau de connaissance économique et institutionnelle. Pondérer l'influence politique en fonction de la compétence supposée créerait précisément une inégalité de suffrage contraire au principe démocratique finlandais ; -3 est plus adapté que -1.",
    source: "https://stat.fi/en/statistics/documentation/evaa/2025-05-19"
  },
  76: {
    response: -3,
    justification: "Désaccord très fort : la Finlande est une démocratie parlementaire dans laquelle le gouvernement doit conserver la confiance du Parlement et lui est politiquement responsable. Le président dispose de compétences propres, notamment en politique étrangère, mais il n'est pas un chef de gouvernement chargé d'imposer un programme quinquennal face au Parlement. Lui donner davantage de pouvoirs pour contourner les blocages parlementaires serait directement contraire à l'architecture institutionnelle finlandaise ; -3 est adapté.",
    source: "https://valtioneuvosto.fi/about-the-government/how-the-government-works"
  }
};

const finlandeGovernment = DATA.entities.find(entity => entity.id === 'finlande');
if (finlandeGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(FINLANDE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    finlandeGovernment.responses[index] = override.response;
    finlandeGovernment.justifications[index] = override.justification;
    if (Array.isArray(finlandeGovernment.sources)) finlandeGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (finlandeGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  finlandeGovernment.axisScores = scores;
}
