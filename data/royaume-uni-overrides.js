const ROYAUME_UNI_RESPONSE_OVERRIDES = {
  15: {
    response: -3,
    justification: "Désaccord très fort : au Royaume-Uni, le gouvernement ne peut ni lever de nouveaux impôts ni engager les dépenses publiques sans l'accord du Parlement. Les dépenses doivent être autorisées par la Chambre des communes puis recevoir une base légale via les textes de finances et d'appropriation. Il n'existe donc pas de mécanisme permettant au gouvernement d'imposer un nouveau budget en contournant le vote parlementaire ; -3 est adapté.",
    source: "https://www.parliament.uk/about/how/role/check-and-approve-government-spending-and-taxation/"
  },
  27: {
    response: -1,
    justification: "Désaccord modéré : la réforme pénale de 2026 maintient des peines longues pour les auteurs dangereux et renforce certaines sanctions, mais elle cherche parallèlement à éviter la saturation carcérale. Le Sentencing Act 2026 crée notamment une présomption de suspension pour certaines peines de douze mois ou moins et permet, pour les peines déterminées ordinaires, une libération à partir d'un tiers de la peine selon le comportement. Le gouvernement ne défend donc pas un durcissement général des peines de prison quitte à augmenter fortement la population carcérale ; -1 est plus précis que +1.",
    source: "https://www.legislation.gov.uk/ukpga/2026/2/notes/division/2/index.htm"
  },
  46: {
    response: 3,
    justification: "Accord très fort : l'Universal Credit prévoit une sanction de niveau élevé lorsqu'une personne soumise à l'obligation de rechercher ou d'accepter un emploi refuse sans motif valable une offre qui lui est faite. Cette sanction dure normalement 91 jours lors d'un premier manquement de ce niveau et peut atteindre 182 jours en cas de récidive récente. La perte potentielle d'une part importante des allocations après refus d'un emploi adapté correspond donc directement à la proposition ; +3 est plus adapté que +2.",
    source: "https://www.gov.uk/guidance/universal-credit-sanctions"
  },
  49: {
    response: 2,
    justification: "Accord net : le système britannique combine déjà une State Pension publique avec des retraites professionnelles capitalisées. Les employeurs doivent inscrire automatiquement les salariés éligibles dans un régime de retraite professionnelle et y contribuer. Toutefois, cette capitalisation reste un complément à la State Pension, le salarié peut sortir du dispositif et elle ne remplace pas la composante publique centrale ; +2 reflète donc mieux qu'un accord maximal l'importance réelle du pilier capitalisé.",
    source: "https://www.gov.uk/workplace-pensions/joining-a-workplace-pension"
  },
  59: {
    response: 1,
    justification: "Accord modéré : une personne née au Royaume-Uni qui n'était pas britannique à la naissance peut obtenir un droit à l'enregistrement comme citoyen si elle a vécu dans le pays pendant ses dix premières années, y compris lorsque ses parents n'étaient ni britanniques ni installés de manière permanente à sa naissance. Le mécanisme reconnaît donc fortement le fait d'être né et d'avoir grandi dans le pays, mais la citoyenneté n'est pas automatique à la majorité et nécessite une démarche ainsi que le respect de conditions ; +1 est plus précis que -1.",
    source: "https://www.gov.uk/apply-citizenship-born-uk/uk-until-10"
  },
  69: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement britannique relance fortement le nucléaire, avec Sizewell C, les petits réacteurs modulaires et une réforme destinée à accélérer les nouveaux projets. Mais il accélère simultanément les investissements dans l'éolien, le solaire, les réseaux et les autres énergies renouvelables. Il ne défend donc pas de réduire les investissements renouvelables afin de privilégier le nucléaire ; l'appui très fort aux deux filières justifie 0 plutôt que +1.",
    source: "https://www.gov.uk/government/news/government-to-go-further-and-faster-in-becoming-energy-secure"
  },
  71: {
    response: 0,
    justification: "Position intermédiaire : le Royaume-Uni maintient des objectifs climatiques ambitieux et des budgets carbone contraignants, mais le gouvernement présente systématiquement la transition comme devant réduire les factures, renforcer la sécurité énergétique, créer des emplois et soutenir la croissance. Il n'a pas pris position en faveur d'une réduction de 3 % du PIB si les autres pays ne consentaient aucun effort comparable. L'ambition climatique est nette, mais la contrepartie économique extrême de la question n'est pas documentée ; 0 est plus prudent que +1.",
    source: "https://www.gov.uk/government/publications/carbon-budget-and-growth-delivery-plan"
  },
  76: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement Burnham ne porte pas de réforme visant à donner au Premier ministre davantage de pouvoirs pour contourner les blocages parlementaires. Sa ligne institutionnelle récente met au contraire fortement l'accent sur la redistribution du pouvoir hors de Westminster vers les régions et les autorités locales. Cela ne signifie pas qu'il souhaite affaiblir l'exécutif national au profit du Parlement, mais il n'existe pas de base suffisante pour lui attribuer un accord avec la proposition ; 0 est plus précis que +1.",
    source: "https://www.gov.uk/government/news/no10-north-open-for-business-as-the-governments-new-situation-room-for-making-britain-better"
  },
  77: {
    response: 2,
    justification: "Accord net : Andy Burnham soutient explicitement une réforme du mode de scrutin et souhaite qu'un prochain programme travailliste s'engage à instaurer un système proportionnel. Il n'a toutefois pas choisi une forme précise de proportionnelle et ne défend pas explicitement la proportionnelle intégrale nationale décrite dans la question. Le soutien à la logique proportionnelle est donc clair sans correspondre exactement au mécanisme proposé ; +2 est plus adapté que +1.",
    source: "https://www.theguardian.com/politics/2026/may/22/andy-burnham-starts-byelection-campaign-labour-mayor-makerfield"
  }
};

const royaumeUniGovernment = DATA.entities.find(entity => entity.id === 'royaume-uni');
if (royaumeUniGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(ROYAUME_UNI_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    royaumeUniGovernment.responses[index] = override.response;
    royaumeUniGovernment.justifications[index] = override.justification;
    if (Array.isArray(royaumeUniGovernment.sources)) royaumeUniGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (royaumeUniGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  royaumeUniGovernment.axisScores = scores;
}

if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.write('<script src="/data/q47-overrides.js"></scr' + 'ipt>');
}
