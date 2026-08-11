const DANEMARK_RESPONSE_OVERRIDES = {
  3: {
    response: -1,
    justification: "Désaccord modéré : le gouvernement Frederiksen III maintient une forte redistribution, mais sa politique fiscale d'ensemble ne consiste pas à augmenter nettement l'imposition des hauts revenus et des grands patrimoines. La coalition supprime notamment la top-top-skat, allège plusieurs prélèvements sur le capital et reconnaît qu'il n'existe pas de majorité pour instaurer un impôt général sur la fortune. Elle renforce parallèlement la progressivité de certaines successions, ce qui empêche un désaccord plus fort ; -1 est donc plus précis que 0.",
    source: "https://stm.dk/presse/pressemoedearkiv/2026/pressemoede-den-2-juni-2026/"
  },
  5: {
    response: -3,
    justification: "Désaccord très fort : le Danemark ne dispose pas de salaire minimum légal national et défend par principe la fixation des salaires par les partenaires sociaux dans le cadre du modèle danois de négociation collective. Le gouvernement danois a d'ailleurs contesté les dispositions européennes susceptibles d'empiéter sur ce modèle. Une forte hausse du salaire minimum décidée par la loi est donc directement contraire à cette doctrine institutionnelle ; -3 est adapté.",
    source: "https://bm.dk/nyheder/pressemeddelelser/2025/11/eu-domstolen-annullerer-dele-af-mindsteloensdirektivet"
  },
  27: {
    response: 1,
    justification: "Accord modéré : le gouvernement veut durcir certaines peines, notamment pour les crimes violents, et accroître les capacités pénitentiaires. Mais son accord maintient explicitement un équilibre entre sanctions plus fermes, prévention, réinsertion et alternatives à l'incarcération. Il ne présente donc pas une forte augmentation de la population carcérale comme une contrepartie souhaitable en elle-même ; +1 est plus fidèle que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  },
  28: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement Frederiksen III renforce à la fois la prévention et la réinsertion, mais aussi les sanctions pénales et les capacités carcérales. Il ne choisit donc pas clairement d'investir dans la prévention et la réinsertion plutôt que dans l'augmentation des sanctions ; les deux approches sont assumées simultanément. Un score neutre est plus précis que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  },
  33: {
    response: 0,
    justification: "Position intermédiaire : le Danemark utilise fortement la tarification carbone et des signaux-prix pour accélérer la transition énergétique, mais le nouveau gouvernement insiste également sur une énergie abordable, la protection du pouvoir d'achat et la compétitivité. Il ne défend donc pas sans réserve une forte augmentation du prix des énergies fossiles supportée par les ménages. L'ambition climatique et la priorité donnée à l'abordabilité se compensent ici, ce qui justifie 0 plutôt que +1.",
    source: "https://stm.dk/presse/pressemoedearkiv/2026/pressemoede-den-2-juni-2026/"
  },
  66: {
    response: -3,
    justification: "Désaccord très fort : l'usage de l'arme à feu par la police danoise est encadré par les principes de nécessité et de proportionnalité et vise notamment les situations présentant un danger grave pour la vie ou la santé. Le simple fait qu'un conducteur refuse d'obtempérer et prenne la fuite ne suffit pas à justifier un tir lorsque le danger n'est pas immédiat. La proposition de la question va donc directement à l'encontre de la doctrine danoise ; -3 est adapté.",
    source: "https://politi.dk/aktuelt/statistik/politiets-anvendelse-af-magtmidler"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : le système démocratique danois repose sur l'égalité du suffrage et ne donne pas davantage de poids politique à certains citoyens en fonction de leurs connaissances, de leur diplôme ou de leur expertise. Introduire une pondération du vote selon la compétence institutionnelle ou économique créerait précisément une inégalité politique contraire au principe démocratique danois ; -3 est donc plus adapté que -2.",
    source: "https://www.ft.dk/da/folkestyret/grundloven-og-folkestyret/grundloven-og-det-danske-demokrati"
  },
  76: {
    response: -3,
    justification: "Désaccord très fort : transposée au Premier ministre danois, la proposition est contraire au fonctionnement du régime parlementaire. Le gouvernement dépend du Folketing et ne peut gouverner durablement contre une majorité parlementaire ; seul le Parlement adopte les lois et le budget. Renforcer l'exécutif afin qu'il puisse contourner les blocages du Parlement irait donc directement à l'encontre de l'architecture institutionnelle danoise ; -3 est adapté.",
    source: "https://www.ft.dk/da/folkestyret/folketinget/folketingets-arbejde"
  },
  83: {
    response: 1,
    justification: "Accord modéré : le Danemark accepte la spécialisation et la concentration de certains soins hospitaliers lorsque la qualité, la sécurité ou la disponibilité des équipes l'exigent. Mais le nouveau gouvernement veut parallèlement rapprocher davantage de soins des habitants et renforcer l'offre sanitaire locale, notamment hors des grands centres. Il n'existe donc pas de préférence générale pour fermer ou fusionner les petites maternités et urgences ; +1 est plus précis que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  }
};

const danemarkGovernment = DATA.entities.find(entity => entity.id === 'danemark');
if (danemarkGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(DANEMARK_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    danemarkGovernment.responses[index] = override.response;
    danemarkGovernment.justifications[index] = override.justification;
    if (Array.isArray(danemarkGovernment.sources)) danemarkGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (danemarkGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  danemarkGovernment.axisScores = scores;
}

// Calibration d'intensité validée pour les questions quantitatives ou fortement graduées.
// Les sources existantes restent inchangées ; seuls le score et sa justification sont ajustés.
const GOVERNMENT_INTENSITY_OVERRIDES = {
  allemagne: {
    5: {
      response: 2,
      justification: "Accord net : l'Allemagne a engagé une hausse substantielle du salaire minimum, avec une progression cumulée importante sur 2026-2027. Cela correspond bien à une augmentation significative, sans justifier pour autant un accord maximal réservé à une hausse exceptionnellement forte ou à une transformation beaucoup plus radicale ; +2 est adapté."
    },
    37: {
      response: 1,
      justification: "Accord modéré : l'Allemagne reconnaît que les économies riches doivent contribuer davantage au financement climatique international, mais elle ne défend pas clairement qu'elles doivent supporter à elles seules ou de façon prépondérante le coût mondial de la transition. +1 reflète mieux cette différence d'intensité."
    },
    71: {
      response: -2,
      justification: "Désaccord net : le gouvernement allemand maintient des objectifs climatiques élevés mais refuse une stratégie qui sacrifierait fortement la compétitivité et la croissance sans effort comparable des autres pays. Face à l'hypothèse précise d'une baisse de 3 % du PIB en agissant presque seul, -2 est plus cohérent qu'une simple réserve."
    }
  },
  espagne: {
    33: {
      response: 1,
      justification: "Accord modéré : l'Espagne accepte la tarification carbone et des signaux-prix pour accélérer la transition, mais cherche parallèlement à protéger les ménages contre de fortes hausses durables du prix des carburants et de l'énergie. Elle va donc dans le sens de la question sans en assumer toute l'intensité ; +1 est adapté."
    },
    37: {
      response: 1,
      justification: "Accord modéré : l'Espagne soutient une contribution accrue des pays riches au financement climatique international, mais la notion de part prépondérante va plus loin que la position effectivement défendue, qui reste fondée sur un effort international partagé. +1 est donc plus précis que +2."
    },
    71: {
      response: 0,
      justification: "Position intermédiaire : l'Espagne poursuit une politique climatique ambitieuse et accepte des coûts de transition, mais aucune position suffisamment directe n'établit qu'elle accepterait une baisse de 3 % du PIB alors que les autres pays ne feraient aucun effort comparable. La prudence conduit à 0 plutôt qu'à un accord positif."
    }
  },
  suisse: {
    37: {
      response: 0,
      justification: "Position intermédiaire : la Suisse participe au financement climatique international et reconnaît une responsabilité particulière des économies développées, sans défendre clairement le principe selon lequel les pays riches devraient supporter une part prépondérante du coût mondial de la transition. 0 évite de surinterpréter cette contribution."
    },
    67: {
      response: 1,
      justification: "Accord modéré : la Suisse maintient une taxe CO₂ dont une partie est redistribuée à la population, mais cette redistribution est largement générale et forfaitaire plutôt que précisément ciblée sur les ménages modestes. Le mécanisme va dans le sens de la question sans en être l'équivalent exact ; +1 est adapté."
    },
    71: {
      response: -2,
      justification: "Désaccord net : la Suisse poursuit ses objectifs climatiques tout en accordant une forte importance à la prospérité, à la compétitivité et à la coordination internationale. Une perte de 3 % du PIB sans effort comparable des autres pays serait nettement contraire à cette ligne ; -2 est plus cohérent que -1."
    }
  },
  finlande: {
    37: {
      response: 0,
      justification: "Position intermédiaire : la Finlande contribue au financement climatique international et accepte une responsabilité accrue des pays développés, mais ne défend pas clairement qu'ils doivent supporter une part prépondérante du coût mondial de la transition. 0 reflète cette absence d'engagement sur l'intensité précise de l'énoncé."
    },
    57: {
      response: 2,
      justification: "Accord net : la Finlande renforce sensiblement les conditions et le niveau de certaines prestations applicables aux nouveaux arrivants pendant leurs premières années, notamment via des exigences de résidence, d'activité et d'intégration. Ces restrictions sont substantielles, mais ne constituent pas une exclusion générale de la protection sociale ; +2 est plus adapté que +3."
    },
    71: {
      response: -2,
      justification: "Désaccord net : le gouvernement Orpo maintient des objectifs climatiques mais subordonne explicitement leur mise en œuvre à la compétitivité, à la croissance et à la maîtrise des coûts. Il est peu compatible avec l'acceptation d'une perte de 3 % du PIB sans effort comparable des autres pays ; -2 est adapté."
    }
  },
  'royaume-uni': {
    37: {
      response: 1,
      justification: "Accord modéré : le Royaume-Uni finance fortement l'action climatique internationale et reconnaît une responsabilité accrue des économies riches, mais sa stratégie repose aussi sur la mobilisation d'autres pays et des capitaux privés. Cela ne suffit pas à établir qu'il souhaite que les pays riches supportent une part prépondérante du coût mondial ; +1 est adapté."
    },
    71: {
      response: 0,
      justification: "Position intermédiaire : le Royaume-Uni conserve des objectifs climatiques ambitieux, mais présente la transition comme compatible avec la croissance, l'emploi et la baisse des factures. Aucune position suffisamment directe ne permet de lui attribuer l'acceptation d'une baisse de 3 % du PIB sans effort comparable des autres pays ; 0 reste le score le plus prudent."
    }
  },
  danemark: {
    37: {
      response: 1,
      justification: "Accord modéré : le Danemark assume une forte responsabilité climatique internationale et contribue davantage que beaucoup de pays au financement de la transition, mais il ne défend pas clairement que les pays riches doivent porter une part prépondérante de l'ensemble du coût mondial. +1 respecte mieux l'intensité exacte de l'énoncé."
    },
    71: {
      response: 0,
      justification: "Position intermédiaire : le Danemark est très volontariste sur le climat, mais aucune position suffisamment directe n'établit qu'il accepterait une baisse de 3 % du PIB en l'absence totale d'effort comparable des autres pays. L'ambition climatique justifie de ne pas retenir un désaccord net, mais l'intensité de l'hypothèse empêche un score positif ; 0 est adapté."
    }
  },
  'pays-bas': {
    37: {
      response: 1,
      justification: "Accord modéré : le gouvernement néerlandais assume une responsabilité internationale importante en matière de climat et de développement, mais ne défend pas clairement que les économies riches doivent supporter une part prépondérante du coût mondial de la transition. +1 reste la bonne intensité."
    },
    71: {
      response: -2,
      justification: "Désaccord net : le gouvernement néerlandais veut concilier les objectifs climatiques avec la croissance structurelle, une énergie abordable et la compétitivité européenne. Accepter une baisse de 3 % du PIB alors que les autres pays ne feraient aucun effort comparable va nettement à l'encontre de cette ligne ; -2 est adapté."
    }
  },
  pologne: {
    37: {
      response: 0,
      justification: "Position intermédiaire : la Pologne participe aux mécanismes européens et internationaux de financement climatique mais conteste régulièrement une répartition des coûts qui pèserait excessivement sur certains pays. Elle ne défend pas le principe d'une part prépondérante à la charge des économies riches ; 0 est adapté."
    },
    71: {
      response: -2,
      justification: "Désaccord net : la Pologne refuse explicitement que la politique climatique impose des coûts élevés à la croissance, à l'industrie ou au pouvoir d'achat sans garanties de réciprocité et de compétitivité. Une perte de 3 % du PIB sans effort comparable des autres pays serait nettement contraire à cette position ; -2 est adapté."
    }
  }
};

const intensityQuestionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

Object.entries(GOVERNMENT_INTENSITY_OVERRIDES).forEach(([entityId, overrides]) => {
  const entity = DATA.entities.find(candidate => candidate.id === entityId);
  if (!entity) return;

  Object.entries(overrides).forEach(([questionId, override]) => {
    const index = intensityQuestionIndexById.get(Number(questionId));
    if (index === undefined) return;
    entity.responses[index] = override.response;
    entity.justifications[index] = override.justification;
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

// Charge les overrides documentaires ajoutés après l'audit avant l'initialisation de l'application.
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.write('<script src="/data/pologne-overrides.js"></scr' + 'ipt>');
  document.write('<script src="/data/espagne-overrides.js"></scr' + 'ipt>');
  document.write('<script src="/data/royaume-uni-overrides.js"></scr' + 'ipt>');
}
