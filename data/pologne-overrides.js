const POLOGNE_RESPONSE_OVERRIDES = {
  9: {
    response: -2,
    justification: "Désaccord net : malgré un déficit public très élevé, le budget 2026 maintient les principaux programmes sociaux, notamment Rodzina 800+, les 13e et 14e pensions et Aktywny Rodzic. Le gouvernement recherche une consolidation des finances publiques, mais ne fait pas des grandes politiques sociales la variable d'ajustement pour revenir à l'équilibre ; -2 est donc plus adapté que 0.",
    source: "https://www.gov.pl/web/finanse/rada-ministrow-przyjela-projekt-ustawy-budzetowej-na-2026-rok-projekt-ustawy-o-szczegolnych-rozwiazaniach-sluzacych-realizacji-ustawy-budzetowej-na-rok-2026-r-oraz-strategie-zarzadzania-dlugiem-sektora-finansow-publicznych-w-latach-2026-2029"
  },
  15: {
    response: -3,
    justification: "Désaccord très fort : l'article 219 de la Constitution prévoit que le Sejm adopte le budget de l'État sous forme de loi budgétaire. Même si cette loi n'est pas entrée en vigueur au début de l'année, le gouvernement ne peut qu'exécuter provisoirement le projet qu'il a présenté au Parlement ; il ne peut pas imposer seul un nouveau budget pour contourner l'absence de majorité. La proposition est directement contraire au cadre constitutionnel ; -3 est adapté.",
    source: "https://www.senat.gov.pl/o-senacie/wybrane-akty-prawne/konstytucja/"
  },
  17: {
    response: 1,
    justification: "Accord modéré : le gouvernement Tusk soutient des mesures correctrices ciblées contre certaines inégalités structurelles, par exemple la règle « Women on Boards » imposant au moins un tiers de personnes du sexe sous-représenté dans les organes des grandes sociétés cotées. Cette logique va au-delà de la seule égalité formelle, mais reste sectorielle et ne constitue pas une politique générale de correction de toutes les discriminations historiques ou structurelles ; +1 reste donc approprié.",
    source: "https://www.gov.pl/web/sprawiedliwosc/rada-ministrow-przyjela-projekt-ustawy-o-poprawie-rownowagi-plci-w-spolkach-publicznych"
  },
  26: {
    response: -1,
    justification: "Réserve modérée : la Pologne continue d'accorder une protection importante aux personnes déplacées d'Ukraine, mais le gouvernement Tusk a parallèlement instauré puis prolongé à plusieurs reprises la suspension du droit de demander une protection internationale à la frontière biélorusse. Sa politique actuelle n'est donc pas orientée vers une augmentation générale de l'accueil des réfugiés ; -1 est plus précis que 0.",
    source: "https://www.gov.pl/web/mswia-en/the-temporary-and-territorial-suspension-of-the-right-to-asylum-at-the-polish-belarusian-border-has-been-extended-for-a-further-60-days"
  },
  27: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement maintient une politique pénale ferme pour les infractions graves, mais ses réformes récentes cherchent parallèlement à limiter l'incarcération lorsque des alternatives sont adaptées, notamment en élargissant le recours au placement sous surveillance électronique. Il ne défend donc pas une hausse générale de la sévérité des peines de prison au prix d'une forte augmentation de la population carcérale ; 0 est plus précis que +2.",
    source: "https://www.gov.pl/web/premier/projekt-ustawy-o-zmianie-ustawy--kodeks-karny-wykonawczy"
  },
  29: {
    response: 1,
    justification: "Accord modéré : la Pologne conserve des pouvoirs étendus de contrôle opérationnel, d'écoute et de surveillance pour la police et les services de sécurité afin de prévenir et détecter les infractions. Le gouvernement Tusk a toutefois renforcé en 2026 le contrôle judiciaire de ces mesures et la possibilité pour les juges d'y mettre fin lorsqu'elles ne sont plus justifiées. L'orientation sécuritaire subsiste, mais elle est nettement encadrée par la protection des libertés ; +1 est plus précis que +2.",
    source: "https://www.gov.pl/web/premier/projekt-ustawy-o-zmianie-niektorych-ustaw-w-celu-wzmocnienia-nadzoru-sadowego-nad-kontrola-operacyjna"
  },
  32: {
    response: -2,
    justification: "Désaccord net : le gouvernement Tusk soutient la décarbonation, mais refuse que les objectifs climatiques priment lorsque leur coût menace fortement la compétitivité, l'industrie ou le pouvoir d'achat. En 2026, la Pologne a demandé une réforme profonde de l'ETS, la fin du caractère obligatoire d'ETS2 avant 2030 et davantage de protections contre ses coûts. La croissance et la compétitivité limitent donc explicitement l'ambition climatique ; -2 est plus adapté que -1.",
    source: "https://www.gov.pl/web/klimat/Reforma-ets-kierunek-zmian-proponowany-przez-polske"
  },
  44: {
    response: -3,
    justification: "Désaccord très fort : en Pologne, les successions et donations reçues de la famille proche peuvent bénéficier d'une exonération totale de l'impôt sur les successions et donations, indépendamment de leur valeur, sous réserve des formalités prévues. Le système favorise donc fortement la transmission familiale plutôt qu'une taxation accrue des gros héritages ; -3 correspond directement à l'opposé de la proposition.",
    source: "https://podatki.gov.pl/poradniki-i-informatory/nabycie-spadku-lub-darowizny-w-najblizszej-rodzinie-zwolnienie-od-podatku-sd"
  },
  46: {
    response: -2,
    justification: "Désaccord net : depuis la réforme du marché du travail entrée en vigueur le 1er juin 2025, un demandeur d'emploi peut refuser une offre transmise par le service public de l'emploi si elle ne lui convient pas, sans perdre pour ce seul motif son statut ou ses allocations. Des sanctions subsistent pour le refus ou l'abandon de certaines mesures d'activation, mais plus pour le simple refus d'une offre ordinaire ; -2 est donc plus adapté que +2.",
    source: "https://poznan.praca.gov.pl/web/powiatowy-urzad-pracy-dla-powiatu-nowosadeckiego/dla-bezrobotnych-i-poszukujacych-pracy/posrednictwo-pracy/oferta-pracy"
  },
  48: {
    response: -2,
    justification: "Désaccord net : la politique actuelle va plutôt vers un renforcement de la stabilité et des droits attachés au contrat de travail. La réforme 2026 de l'Inspection du travail donne de nouveaux moyens pour lutter contre les faux contrats civils ou le faux travail indépendant et empêcher le contournement des protections salariales. Le gouvernement ne présente donc pas la protection du contrat permanent comme excessive ; -2 est plus précis que +1.",
    source: "https://www.gov.pl/web/rodzina/wzmacniamy-panstwowa-inspekcje-pracy--reforma-wejdzie-w-zycie"
  },
  64: {
    response: -2,
    justification: "Désaccord net : la liberté d'expression polonaise demeure assortie de restrictions pénales importantes sur certains propos purement offensants. L'article 196 du Code pénal sanctionne l'offense publique aux sentiments religieux lorsqu'elle prend la forme d'un outrage public à un objet de culte ou à un lieu destiné aux cérémonies religieuses, même sans appel à la violence. Le droit polonais ne sanctionne pas tout propos choquant, ce qui justifie -2 plutôt qu'un désaccord maximal.",
    source: "https://api.sejm.gov.pl/eli/acts/DU/2024/17/text.html"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : l'article 96 de la Constitution polonaise dispose que les élections au Sejm sont universelles et égales. Accorder davantage de poids politique à certains citoyens selon leur niveau de connaissance des institutions ou de l'économie créerait précisément une inégalité de suffrage contraire à ce principe constitutionnel ; -3 est plus adapté que -2.",
    source: "https://www.senat.gov.pl/o-senacie/wybrane-akty-prawne/konstytucja/"
  },
  83: {
    response: 3,
    justification: "Accord très fort : la réforme hospitalière adoptée sous le gouvernement Tusk vise explicitement à concentrer les soins aigus et les services nécessitant une disponibilité permanente dans les établissements disposant de davantage d'expérience et de personnel. Elle facilite aussi la transformation, le regroupement et la consolidation de services ou d'établissements lorsque l'offre est dispersée ou inadaptée aux besoins locaux. La logique correspond directement à la proposition ; +3 est plus adapté que +1.",
    source: "https://www.gov.pl/web/zdrowie/ustawa-reformujaca-szpitalnictwo-podpisana-przez-prezydenta"
  },
  84: {
    response: 3,
    justification: "Accord très fort : en Pologne, le directeur d'un établissement scolaire est déjà le responsable de l'employeur et décide notamment de l'embauche et du licenciement des enseignants. Le droit lui confie également un rôle direct dans l'évaluation professionnelle des enseignants. Le fonctionnement polonais va donc au moins aussi loin que la proposition, qui ne demande de recruter qu'une partie des enseignants et de peser davantage dans leur évaluation ; +3 est adapté.",
    source: "https://eli.gov.pl/api/acts/DU/2024/737/text.html"
  }
};

const pologneGovernment = DATA.entities.find(entity => entity.id === 'pologne');
if (pologneGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(POLOGNE_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    pologneGovernment.responses[index] = override.response;
    pologneGovernment.justifications[index] = override.justification;
    if (Array.isArray(pologneGovernment.sources)) pologneGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (pologneGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  pologneGovernment.axisScores = scores;
}
