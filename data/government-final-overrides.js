// Dernière couche de calibration des gouvernements.
// Ce fichier est chargé après tous les overrides pays et avant app.js afin que
// les calculs, classements et comparaisons IA utilisent toujours les valeurs finales.
const GOVERNMENT_FINAL_OVERRIDES = {
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

function recomputeGovernmentAxisScores(entity) {
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
}

function applyGovernmentFinalOverrides() {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(GOVERNMENT_FINAL_OVERRIDES).forEach(([entityId, overrides]) => {
    const entity = DATA.entities.find(candidate => candidate.id === entityId);
    if (!entity) return;

    Object.entries(overrides).forEach(([questionId, override]) => {
      const index = questionIndexById.get(Number(questionId));
      if (index === undefined) return;
      entity.responses[index] = override.response;
      entity.justifications[index] = override.justification;
    });

    recomputeGovernmentAxisScores(entity);
  });
}

// Applique immédiatement la couche finale : le fichier est injecté juste avant app.js.
applyGovernmentFinalOverrides();

function installAIEntityJustifications() {
  if (typeof buildAIAnalysisPayload !== 'function') return;
  if (buildAIAnalysisPayload.__includesEntityJustifications) return;

  const originalBuildAIAnalysisPayload = buildAIAnalysisPayload;

  const attachJustifications = (groups, entities, fieldName) => {
    if (!Array.isArray(groups) || !Array.isArray(entities)) return;
    const questionIndexByText = new Map(DATA.questions.map((question, index) => [question.text, index]));

    groups.forEach(group => {
      const entity = entities.find(candidate => candidate.name === group.name);
      if (!entity) return;

      ['agreements', 'disagreements'].forEach(listName => {
        const items = group[listName];
        if (!Array.isArray(items)) return;

        items.forEach(item => {
          const index = questionIndexByText.get(item.question);
          if (index === undefined) return;
          item[fieldName] = String(entity.justifications?.[index] || '').trim();
        });
      });
    });
  };

  const wrappedBuildAIAnalysisPayload = function() {
    const payload = originalBuildAIAnalysisPayload();

    attachJustifications(payload.top_party_drivers, results?.parties, 'party_justification');
    attachJustifications(payload.top_government_drivers, results?.governments, 'government_justification');

    payload.methodological_context = {
      ...(payload.methodological_context || {}),
      entity_justification_basis: 'Les champs party_justification et government_justification expliquent le codage documentaire de la note de l’entité. Ils servent à interpréter l’intensité de sa position et ne constituent jamais une opinion saisie par l’utilisateur.'
    };

    return payload;
  };

  wrappedBuildAIAnalysisPayload.__includesEntityJustifications = true;
  buildAIAnalysisPayload = wrappedBuildAIAnalysisPayload;
}

// app.js est chargé juste après ce fichier. On installe donc l'enrichissement IA
// une fois le parsing terminé, avant toute utilisation normale du bouton Gemini.
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', installAIEntityJustifications, { once: true });
  } else {
    installAIEntityJustifications();
  }
}
