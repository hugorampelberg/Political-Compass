(() => {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));
  const q47Index = questionIndexById.get(47);
  if (q47Index === undefined) return;

  const q47 = DATA.questions[q47Index];
  q47.text = "L’État devrait davantage subventionner les produits de première nécessité dans les DOM-TOM afin d’y réduire les prix, même si leur financement faisait légèrement augmenter le prix de certains produits consommés en France métropolitaine en contribution. ";
  q47.explanation = "Faire ses courses dans les DOM-TOM coûte en moyenne 30 % à 40 % plus cher pour l'alimentation par rapport à la France hexagonale, notamment à cause du coût d'acheminement dû l'éloignement géographique. ";

  const Q47_PARTY_OVERRIDES = {
    lfi: {
      response: 2,
      justification: "Accord net : des députés LFI ont proposé dans le cadre du budget 2025 d’étudier une continuité territoriale économique pour le fret de marchandises outre-mer afin d’en faire un levier direct de baisse des prix, et ont parallèlement défendu un renforcement du bouclier qualité-prix sur les produits de première nécessité. L’intervention publique sur le fret ou les prix est donc clairement soutenue. En revanche, LFI ne propose pas de financer cette solidarité par une hausse des prix payés par les consommateurs métropolitains et privilégie plutôt le budget public, la régulation des marges ou la contribution des acteurs les plus aisés ; +2 reste donc plus précis que +3.",
      source: "https://www.assemblee-nationale.fr/dyn/17/amendements/AMANR5L17PO59048B0324P2D1N001039"
    },
    pcf: {
      response: 2,
      justification: "Accord net : le PCF veut réduire fortement la vie chère outre-mer et demande notamment une baisse des coûts de fret, un contrôle des prix et une intervention accrue de l’État. Il défend cependant parallèlement le pouvoir d’achat et cherche plutôt à faire financer l’effort par les marges, les profits ou le budget public que par une hausse des prix payés par les consommateurs de métropole. Le principe de solidarité est très clair, mais la contrepartie précise de la question l’est moins ; +2 est donc plus adapté que +3.",
      source: "https://lem.pcf.fr/sujets/120?page=265"
    },
    'les-ecologistes': {
      response: 2,
      justification: "Accord net : Les Écologistes défendent une forte solidarité avec les territoires ultramarins, des mécanismes de baisse des prix et une intervention publique accrue contre la vie chère. Leur doctrine accepte aussi que certaines politiques collectives soient financées par des mécanismes affectant les prix, à condition d’en corriger les effets sociaux. Aucune proposition exactement équivalente à la contribution métropolitaine décrite n’étant toutefois établie, +2 reste plus prudent que +3.",
      source: "https://lesecologistes.fr/pages/6930DbJUnKbVCve3jxr595/v-la-republique-partout-et-pour-tou-te-s-organiser-le-partage-reel-des-pouvoirs"
    },
    ps: {
      response: 2,
      justification: "Accord net : le PS fait de la réduction de la vie chère outre-mer une priorité et propose des dispositifs publics puissants pour rapprocher les prix de ceux de l’Hexagone. Il privilégie néanmoins des financements reposant sur les grandes entreprises, les profits ou le budget public plutôt qu’une hausse des prix de consommation en métropole. Le soutien au principe de solidarité est donc très fort, mais la contrepartie précise de la question justifie +2 plutôt que +3.",
      source: "https://www.parti-socialiste.fr/pas_decisif_cout_de_la_vie_dans_les_territoires_d_outre_mer"
    },
    renaissance: {
      response: 1,
      justification: "Accord modéré : des élus du bloc central ont soutenu une aide publique au fret destinée à réduire le surcoût des produits essentiels outre-mer, ce qui va clairement dans le sens de la proposition. Renaissance privilégie toutefois aussi des mesures structurelles de concurrence, de transparence et de production locale et n’a pas défendu explicitement le financement d’une telle politique par une hausse des prix payés en métropole. L’accord reste donc limité à +1.",
      source: "https://www.assemblee-nationale.fr/dyn/17/amendements/1906C/AN/571"
    },
    modem: {
      response: 0,
      justification: "Position intermédiaire : le MoDem reconnaît la nécessité d’une solidarité nationale face à la vie chère outre-mer et accepte une intervention de l’État, mais il accorde également une forte priorité au pouvoir d’achat et à l’absence de nouvelles charges sur les classes moyennes. Aucune position suffisamment claire ne montre qu’il accepterait de financer durablement cette solidarité par une hausse, même légère, des prix de consommation en métropole ; 0 traduit mieux cet arbitrage que +1.",
      source: "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/troisieme-seance-du-jeudi-11-decembre-2025"
    },
    horizons: {
      response: 0,
      justification: "Position intermédiaire : Horizons reconnaît le problème de la vie chère outre-mer et soutient des mesures pour réduire les écarts, mais insiste sur leur financement, la production locale, la concurrence et la baisse structurelle des coûts. Le parti n’a pas clairement accepté qu’une subvention durable soit financée par une hausse des prix supportée par les consommateurs métropolitains ; 0 reste donc plus adapté qu’un accord.",
      source: "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/troisieme-seance-du-jeudi-11-decembre-2025"
    },
    'france-humaniste': {
      response: 1,
      justification: "Accord modéré : La France Humaniste défend la cohésion nationale, la solidarité territoriale et un État capable de corriger les fractures entre territoires. Elle insiste cependant aussi sur le redressement budgétaire et sur des interventions publiques ciblées, sans position explicite en faveur d’une contribution payée par les consommateurs métropolitains via une légère hausse des prix. Le principe général va dans le sens de la question, mais l’arbitrage financier précis limite l’accord à +1.",
      source: "https://lafrancehumaniste.fr/articles/la-grande-adaptation-du-territoire.html"
    },
    lr: {
      response: 0,
      justification: "Position intermédiaire : LR reconnaît la gravité de la vie chère outre-mer et accepte des mesures de solidarité nationale, mais demande qu’elles soient financées de manière soutenable et privilégie aussi la concurrence, la production locale et la protection du pouvoir d’achat. Le parti n’a pas clairement accepté que les consommateurs de métropole paient cette solidarité par une hausse de certains prix ; 0 est donc plus adapté que +1.",
      source: "https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/troisieme-seance-du-jeudi-11-decembre-2025"
    },
    'nouvelle-energie': {
      response: -2,
      justification: "Désaccord net : Nouvelle Énergie privilégie la baisse des prélèvements et des dépenses, la concurrence et la protection du pouvoir d’achat. Une solidarité territoriale ciblée reste compatible avec cette doctrine, mais financer une subvention nationale durable des prix ultramarins par une hausse des prix supportée par les consommateurs métropolitains va nettement à l’encontre de sa ligne économique. Le désaccord est donc net sans être maximal, d’où -2.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/"
    },
    udr: {
      response: -2,
      justification: "Désaccord net : l’UDR fait de la baisse des prélèvements, de la réduction de la dépense publique et de la défense du pouvoir d’achat des priorités centrales. Il peut accepter des aides territoriales ciblées, mais une subvention durable financée par une hausse des prix de consommation en métropole est nettement contraire à cette orientation. L’opposition porte surtout sur le mode de financement plutôt que sur toute solidarité avec les outre-mer, ce qui justifie -2 plutôt que -3.",
      source: "https://www.udr.fr/livretacteii"
    },
    rn: {
      response: 2,
      justification: "Accord net : le RN défend explicitement une continuité territoriale économique et des mécanismes de soutien au fret afin de réduire les surcoûts subis outre-mer. Le parti place parallèlement le pouvoir d’achat et la baisse des prix au premier plan, de sorte que la hausse de certains prix en métropole empêche de retenir un accord maximal. Mais son soutien direct à un mécanisme de péréquation du fret justifie de conserver +2 malgré cette contrepartie.",
      source: "https://www.assemblee-nationale.fr/dyn/17/amendements/AMANR5L17PO59048B1906P2D1N002166"
    },
    reconquete: {
      response: -1,
      justification: "Désaccord modéré : Reconquête met fortement l’accent sur la baisse des prélèvements, la réduction des dépenses publiques et la défense du pouvoir d’achat, sans proposition identifiée de péréquation nationale comparable pour les produits essentiels outre-mer. Le financement d’une telle subvention par une hausse des prix en métropole va donc plutôt contre sa ligne, mais l’absence de rejet direct et documenté de toute solidarité territoriale conduit à limiter le désaccord à -1.",
      source: "https://programme.ericzemmour.fr/outre-mer"
    }
  };

  const recomputeAxisScores = entity => {
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
  };

  Object.entries(Q47_PARTY_OVERRIDES).forEach(([entityId, override]) => {
    const entity = DATA.entities.find(candidate => candidate.id === entityId && candidate.category === 'party');
    if (!entity) return;

    entity.responses[q47Index] = override.response;
    entity.justifications[q47Index] = override.justification;
    if (Array.isArray(entity.sources)) entity.sources[q47Index] = override.source;
    recomputeAxisScores(entity);
  });
})();
