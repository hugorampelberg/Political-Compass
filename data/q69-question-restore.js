// Applique les formulations validées de Q8, Q21, Q48 et Q69 puis ajoute la Q88 fiscale.
// La Q88 est ajoutée en dernier afin de préserver tous les identifiants des 87 questions
// fermées historiques. Les cinq questions ouvertes sont alors renumérotées Q89 à Q93.
(() => {
  if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions)) return;

  const q8 = DATA.questions.find(item => item.id === 8);
  if (q8) {
    q8.text = "La concurrence est généralement préférable à l'encadrement par des normes pour améliorer les prix, la qualité et l'innovation.";
  }

  const q21 = DATA.questions.find(item => item.id === 21);
  if (q21) {
    q21.text = "Un étranger résidant légalement en France depuis de nombreuses années (par exemple avec un titre de séjour) devrait, à situation économique comparable, bénéficier des mêmes prestations sociales et du même accès au logement social qu’un citoyen français, sans priorité fondée sur la nationalité.";
  }

  const q48 = DATA.questions.find(item => item.id === 48);
  if (q48) {
    q48.text = "L'âge légal de départ à la retraite devrait être augmenté afin d'assurer plus facilement le financement du système de retraite.";
  }

  const q69 = DATA.questions.find(item => item.id === 69);
  if (q69) {
    q69.text = "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.";
  }

  if (DATA.questions.some(item => item.id === 88)) return;

  const q88 = {
    id: 88,
    theme: "Économie / fiscalité",
    text: "Il faudrait diminuer les prélèvements sur les revenus du travail et, en contrepartie, augmenter ceux qui pèsent sur les revenus du capital et le patrimoine.",
    explanation: "Cette proposition porte sur un déplacement de la charge fiscale : alléger les prélèvements directement supportés par les revenus du travail et faire davantage contribuer les revenus du capital (dividendes, intérêts, plus-values) et/ou le patrimoine. Elle n'implique pas nécessairement d'augmenter le niveau global des prélèvements obligatoires.",
    defaultAnswer: 0,
    note: "",
    coefficients: {
      economy: -0.8,
      authority: 0,
      europe: 0,
      ecology: 0,
      immigration: 0,
      democracy: 0
    }
  };

  const Q88_OVERRIDES = {
    lfi: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : LFI propose que les contribuables gagnant moins de 4 000 euros nets par mois paient moins d'impôt sur le revenu et de CSG, tout en supprimant la flat tax, en faisant davantage contribuer les hauts patrimoines et en soumettant les revenus du capital aux cotisations sociales. Le déplacement de l'effort des revenus du travail vers le capital et les patrimoines est explicite et substantiel, ce qui justifie +3.",
      source: "https://lafranceinsoumise.fr/wp-content/uploads/2025/10/Budget-2026_LFI_web_pages.pdf"
    },
    pcf: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le PCF veut faire progressivement disparaître la CSG payée par les ménages à mesure que le financement par cotisations est renforcé, tout en créant une cotisation additionnelle sur les revenus financiers des entreprises et un impôt sur leur capital. Sur l'arbitrage précis entre revenus du travail des ménages et revenus du capital posé par la question, le transfert est majeur ; +3 est donc adapté, même si le PCF souhaite parallèlement renforcer certaines cotisations patronales.",
      source: "https://www.pcf.fr/moyen_1"
    },
    "les-ecologistes": {
      response: 2,
      confidence: 3,
      justification: "Accord net : le programme macroéconomique porté par les Écologistes veut modifier la répartition entre travail et capital, supprimer la flat tax afin que les revenus du capital soient imposés au même niveau que ceux du travail et concentrer les recettes nouvelles sur les plus riches sans augmenter l'imposition des classes populaires et moyennes. La hausse du capital est très claire, mais l'allègement spécifique des prélèvements sur le travail est moins central que chez les partis notés +3 ; d'où +2.",
      source: "https://languedoc-roussillon.lesecologistes.fr/document/1W6012o2tzzdJr3JwcnQmy/proposition-macroeconomique-nouveau-front-populaire.pdf"
    },
    ps: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le Projet socialiste adopté en 2026 prévoit explicitement de supprimer la flat tax et d'augmenter la CSG sur les revenus du capital afin de financer une diminution de la CSG sur les revenus du travail. Il prévoit aussi une fiscalité plus progressive du patrimoine et des grandes fortunes. La contrepartie travail-vers-capital correspond directement à l'énoncé ; +3 est justifié.",
      source: "https://projet-socialiste.fr/projet/refaire-societe/"
    },
    renaissance: {
      response: 0,
      confidence: 3,
      justification: "Position intermédiaire : Renaissance souhaite alléger fortement les prélèvements sur le travail, mais sa ligne économique revendique simultanément la baisse de l'impôt sur les sociétés et des impôts de production, la transformation de l'ISF et l'instauration de la flat tax pour favoriser l'investissement. Il n'y a donc pas de transfert général de la charge du travail vers le capital : les deux volets de l'énoncé ne vont pas dans la même direction, ce qui conduit à 0.",
      source: "https://doc.parti.re/Conventions-thematiques_Nouvelle-donne.pdf"
    },
    modem: {
      response: 1,
      confidence: 3,
      justification: "Accord modéré : le MoDem propose de rapprocher le salaire net du brut, notamment par une bascule sensible de CSG, tout en faisant davantage contribuer la rente et la fortune improductive. L'orientation va bien vers un déplacement partiel de la charge hors du travail, mais le parti veut que l'effort budgétaire repose majoritairement sur la réduction de la dépense et souhaite préserver le capital productif ; +1 reflète cette portée limitée.",
      source: "https://www.mouvementdemocrate.fr/actualites/lettre-de-marc-fesneau-au-premier-ministre-sebastien-lecornu-image-7964-image"
    },
    horizons: {
      response: 0,
      confidence: 2,
      justification: "Position intermédiaire : Horizons veut que le travail et la production soient moins pénalisés et fait de la compétitivité, de l'investissement et de la maîtrise des comptes publics des priorités. En revanche, son projet actuel ne documente pas une hausse générale de la fiscalité du capital ou du patrimoine destinée à financer cet allègement ; la contrepartie recherchée passe surtout par la réduction et la réforme de la dépense publique. La première moitié de l'énoncé est présente sans la seconde, d'où 0.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-prospere"
    },
    "france-humaniste": {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : La France Humaniste propose explicitement de basculer une part significative du financement de la protection sociale d'une taxation du travail et de la production vers la consommation et les revenus du capital. Elle souhaite aussi rapprocher les règles du capital de celles applicables au revenu du travail. Le déplacement d'assiette est au cœur de la réforme proposée ; +3 est donc pleinement justifié.",
      source: "https://lafrancehumaniste.fr/articles/protection-sociale.html"
    },
    lr: {
      response: 0,
      confidence: 3,
      justification: "Position intermédiaire : Les Républicains proposent de réduire fortement les cotisations sur le travail, notamment avec leur seuil « zéro cotisation », mais leur projet vise plus largement à réduire les prélèvements et à financer les mesures par des économies, des réformes de l'assurance chômage et une hausse de l'activité. Il ne prévoit pas de hausse générale de la fiscalité du capital ou du patrimoine en contrepartie de l'allègement du travail ; 0 est donc plus fidèle qu'un score positif.",
      source: "https://republicains.fr/nos-propositions/"
    },
    "nouvelle-energie": {
      response: 0,
      confidence: 3,
      justification: "Position intermédiaire : Nouvelle Énergie veut explicitement « supprimer les surcharges sur le capital et le travail » et réduire la fiscalité de production. Le parti est donc nettement favorable à l'allègement du travail, mais également à celui du capital ; il ne propose pas de faire financer le premier par une hausse du second. Cette baisse parallèle des deux assiettes correspond à une position neutre sur l'arbitrage précis de la question, d'où 0.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
    },
    udr: {
      response: 0,
      confidence: 3,
      justification: "Position intermédiaire : l'UDR veut supprimer la CSG et la CRDS sur les salaires, mais propose simultanément de supprimer l'IFI, d'alléger fortement les donations, successions et plus-values immobilières ainsi que plusieurs impôts de production. Ces baisses seraient financées par environ 200 milliards d'euros d'économies publiques annoncées, et non par une hausse de la fiscalité du capital. Il n'existe donc pas de bascule travail-vers-capital ; 0 est adapté.",
      source: "https://www.udr.fr/livretacteii"
    },
    rn: {
      response: 1,
      confidence: 3,
      justification: "Accord modéré : le RN combine des mesures d'allègement ou de protection du pouvoir d'achat avec des prélèvements ciblés sur le capital financier, notamment les superdividendes et les rachats d'actions. Mais son contre-budget prévoit simultanément d'importantes baisses d'impôts de production et ne propose pas une hausse générale de la fiscalité du capital destinée à remplacer les prélèvements sur le travail. Il existe donc un transfert ciblé mais limité, ce qui justifie +1.",
      source: "https://rassemblementnational.fr/documents/GRN-CONTRE-BUDGET-2026.pdf"
    },
    reconquete: {
      response: 0,
      confidence: 2,
      justification: "Position intermédiaire : le programme économique de Reconquête défend une baisse large des impôts et des prélèvements pour augmenter le revenu du travail et favoriser l'investissement, tout en proposant également des allègements sur la transmission et le patrimoine. La logique est celle d'une réduction générale de la pression fiscale financée par d'autres réformes, et non d'un transfert explicite du travail vers le capital ; 0 est donc le codage le plus prudent.",
      source: "https://programme.ericzemmour.fr/"
    },
    allemagne: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : le système allemand fait déjà contribuer de manière substantielle les revenus du capital, notamment avec un taux légal de 25 % sur une large partie des revenus de capitaux mobiliers. Le travail reste néanmoins fortement prélevé et le gouvernement actuel cherche aussi à améliorer la compétitivité du capital et des entreprises. Le modèle fiscal ne réalise donc que partiellement la bascule proposée, ce qui justifie +1.",
      source: "https://lsth.bundesfinanzministerium.de/lsth/2026/A-Einkommensteuergesetz/IV-Tarif-31-34b/Paragraf-32d/inhalt.html"
    },
    espagne: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : l'Espagne combine une fiscalité significative des revenus du capital avec une taxation explicite du patrimoine et, au niveau national, un impôt temporaire de solidarité sur les grandes fortunes au-delà de 3 millions d'euros. Les réformes récentes ont en outre davantage sollicité les hauts patrimoines et certains profits tout en protégeant davantage les revenus faibles et moyens. Parmi les pays comparés, la structure et la trajectoire fiscales sont particulièrement proches du rééquilibrage proposé ; +3 est justifié.",
      source: "https://sede.agenciatributaria.gob.es/Sede/procedimientos/GC62.shtml"
    },
    suisse: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : la Suisse prélève des impôts cantonaux et communaux sur la fortune, ce qui fait réellement contribuer le patrimoine, tandis que les prélèvements sur le travail sont relativement contenus. En sens inverse, les plus-values privées sur de nombreux actifs mobiliers bénéficient généralement d'un traitement très favorable. Le système présente donc une partie du modèle proposé sans rééquilibrage complet vers le capital ; +1 est adapté.",
      source: "https://www.estv.admin.ch/fr/informations-fiscales"
    },
    finlande: {
      response: 2,
      confidence: 2,
      justification: "Accord net : la Finlande taxe structurellement les revenus du capital à 30 %, puis 34 % au-delà du seuil prévu, de sorte que le capital participe nettement au financement public. Le gouvernement actuel cherche toutefois simultanément à alléger l'imposition du travail et celle des entreprises, avec davantage de transfert vers la consommation que vers le capital. La structure existante reste assez proche de l'énoncé mais la trajectoire récente en atténue l'intensité ; +2 est retenu.",
      source: "https://www.vero.fi/en/individuals/tax-cards-and-tax-returns/tax_card/tax-rate-and-income-ceiling/tax-bases/"
    },
    "royaume-uni": {
      response: 2,
      confidence: 3,
      justification: "Accord net : le Royaume-Uni taxe déjà dividendes, plus-values et revenus patrimoniaux et le gouvernement Labour a décidé d'augmenter plusieurs taux applicables aux dividendes, à l'épargne et aux revenus immobiliers afin de réduire l'écart de traitement avec les revenus du travail. La direction récente renforce donc une fiscalité du capital déjà substantielle, sans aller jusqu'à une substitution générale des prélèvements sur le travail ; +2 est adapté.",
      source: "https://www.gov.uk/government/publications/changes-to-tax-rates-for-property-savings-and-dividend-income"
    },
    danemark: {
      response: 2,
      confidence: 3,
      justification: "Accord net : le Danemark impose déjà fortement les revenus d'actions, avec un barème de 27 % puis 42 % en 2026. Cette contribution élevée du capital rapproche structurellement le pays de l'idée d'un financement moins concentré sur le travail. Le travail demeure toutefois lui aussi fortement imposé et la politique récente comporte des allègements favorables à l'investissement ; +2 est donc plus approprié que +3.",
      source: "https://skat.dk/borger/aktier-og-andre-vaerdipapirer/skat-af-aktier"
    },
    "pays-bas": {
      response: 2,
      confidence: 3,
      justification: "Accord net : les Pays-Bas disposent d'une fiscalité structurée des revenus et du patrimoine financier : la Box 2 taxe les revenus de participations importantes et la Box 3 applique en 2026 un taux de 36 % au rendement calculé ou réel des actifs concernés. Le gouvernement actuel ne cherche pas à accentuer fortement la redistribution fiscale, mais le système existant fait déjà contribuer le capital de façon significative ; +2 est adapté.",
      source: "https://www.belastingdienst.nl/wps/wcm/connect/en/income-in-box-3/content/box-3-provisional-assessment-2026"
    },
    pologne: {
      response: 2,
      confidence: 3,
      justification: "Accord net : la Pologne taxe déjà les revenus financiers et le gouvernement Tusk a proposé en 2026 une réforme de l'impôt sur le revenu bénéficiant à plusieurs millions de contribuables, principalement des salariés, avec une contribution accrue des plus grandes entreprises, des banques et des hauts revenus. Le mouvement récent va donc clairement dans le sens d'un rééquilibrage vers le capital et les plus fortes capacités contributives, sans constituer une refonte aussi complète que dans le cas espagnol ; +2 est retenu.",
      source: "https://www.gov.pl/web/finanse/korzystne-zmiany-w-systemie-podatkowym"
    }
  };

  DATA.questions.push(q88);

  if (DATA.meta && typeof DATA.meta === 'object') {
    DATA.meta.questionCount = DATA.questions.length;
    DATA.meta.version = "2026-09-02";
  }

  if (Array.isArray(DATA.openQuestions)) {
    DATA.openQuestions.forEach((question, index) => {
      question.id = DATA.questions.length + index + 1;
    });
  }

  if (DATA.axisMasses && Array.isArray(DATA.axes)) {
    DATA.axes.forEach(axis => {
      DATA.axisMasses[axis.key] = DATA.questions.reduce(
        (sum, question) => sum + Math.abs(question.coefficients?.[axis.key] || 0),
        0
      );
    });
  }

  if (Array.isArray(DATA.entities)) {
    DATA.entities.forEach(entity => {
      const override = Q88_OVERRIDES[entity.id];
      if (!override) return;

      entity.responses.push(override.response);
      entity.confidence.push(override.confidence);
      entity.justifications.push(override.justification);
      entity.sources.push(override.source);

      entity.axisScores = Object.fromEntries(DATA.axes.map(axis => {
        const mass = DATA.questions.reduce(
          (sum, question) => sum + Math.abs(question.coefficients?.[axis.key] || 0),
          0
        );
        const numerator = DATA.questions.reduce(
          (sum, question, index) => sum + (entity.responses[index] ?? 0) * (question.coefficients?.[axis.key] || 0),
          0
        );
        return [axis.key, mass ? 10 * numerator / (3 * mass) : 0];
      }));

      entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0)
        / entity.confidence.length;
    });
  }
})();
