const PCF_RESPONSE_OVERRIDES = {
  14: { response: 3, justification: "Accord très fort : le PCF défend explicitement l'égalité des droits, la liberté de vivre son orientation sexuelle ou son identité de genre et des politiques d'émancipation permettant à chacun de choisir son mode de vie tant que les droits d'autrui sont respectés. Cette conception correspond directement à l'acceptation d'une grande diversité de modes de vie, d'où +3.", source: "https://www.pcf.fr/pacte_2025_republique" },
  17: { response: 3, justification: "Accord très fort : le PCF propose un plan d'action global contre les discriminations dans l'emploi, le logement, l'éducation et la santé, ainsi que des politiques spécifiques contre le racisme et les discriminations visant les personnes LGBTQI+. Il ne se limite donc pas à l'égalité juridique formelle et veut corriger activement les discriminations persistantes et structurelles ; +3 est justifié.", source: "https://www.pcf.fr/pacte_2025_republique" },
  27: { response: -2, justification: "Désaccord net : le PCF conteste explicitement l'idée que la justice française souffrirait d'un manque de sévérité, souligne le niveau record de la population carcérale et l'allongement des peines, et demande davantage de moyens pour la justice, la prévention, l'éducation et les services sociaux. Il ne rejette toutefois ni la prison ni des sanctions fermes pour les faits graves ; l'opposition à un durcissement général assorti d'une forte hausse de l'incarcération est donc nette sans être absolue, d'où -2.", source: "https://www.pcf.fr/justice_faire_toujours_plus_avec_moins_de_moyens" },
  32: { response: 1, justification: "Accord modéré : le PCF fait de la neutralité carbone et de la lutte contre le dérèglement climatique des objectifs majeurs, mais son plan associe cette transition à la réindustrialisation, à une production abondante d'électricité décarbonée et bon marché et à l'amélioration du niveau de vie. Il ne présente donc pas une baisse de la croissance à court terme comme une contrepartie qu'il faudrait accepter par principe ; l'ambition climatique maintient un score positif mais limité à +1.", source: "https://www.pcf.fr/canicule_chaleur_est_politique" },
  33: { response: -3, justification: "Désaccord très fort : tout en voulant organiser la sortie progressive du pétrole et du gaz, le PCF refuse que cette transition passe par une forte hausse du prix des énergies fossiles supportée par les ménages. En mai 2026, il propose au contraire de bloquer l'essence et le gazole à 1,50 euro le litre, d'annuler des hausses liées aux certificats d'économies d'énergie et de faire davantage contribuer les bénéfices de l'industrie pétrolière. Le mécanisme de renchérissement substantiel posé par la question est donc directement opposé à sa ligne actuelle, d'où -3.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  35: { response: -3, justification: "Désaccord très fort : la politique écologique et énergétique du PCF repose sur la planification, la maîtrise publique des secteurs stratégiques, la régulation des prix et des investissements et, lorsque nécessaire, des nationalisations comme celle de TotalEnergies. Les mécanismes de marché peuvent jouer un rôle secondaire, mais le PCF refuse précisément d'en faire l'instrument généralement préférable à la réglementation et à l'action publique ; -3 reflète cette opposition de principe à la hiérarchie proposée.", source: "https://www.pcf.fr/nationalisation_total" },
  68: { response: 1, justification: "Accord modéré : le PCF veut accélérer fortement l'électrification du parc automobile et propose un leasing social massif ainsi qu'un soutien public à des véhicules électriques neufs très abordables. En revanche, sa ligne récente insiste sur la baisse du coût de la transition pour les ménages et n'assume pas clairement le mécanisme exact consistant à interdire progressivement les ventes de voitures thermiques tout en acceptant une hausse temporaire du prix moyen des véhicules. L'orientation vers la sortie du thermique est favorable, mais la contrepartie contenue dans la question limite l'accord à +1.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  71: { response: 1, justification: "Accord modéré : le PCF veut que la France mène une politique climatique très ambitieuse, atteigne la neutralité carbone et réduise aussi l'empreinte liée aux importations, ce qui implique d'accepter des transformations économiques importantes même sans parfaite simultanéité internationale. Mais son plan met également au centre la coopération internationale, la justice sociale et la réindustrialisation et ne s'engage pas explicitement à accepter une perte de 3 % du PIB si les autres pays ne font aucun effort comparable. L'ambition climatique justifie donc un score positif, limité à +1 par l'extrême contrepartie économique et l'absence de réciprocité posées par la question.", source: "https://www.pcf.fr/plan_climat_du_pcf" },
  74: { response: 2, justification: "Accord net : le PCF veut instaurer de nouveaux pouvoirs citoyens, notamment un référendum d'initiative populaire et un droit de pétition, ce qui traduit une volonté claire d'accroître le recours à la démocratie directe. Il associe toutefois ces mécanismes à des conférences citoyennes et à la co-élaboration des lois afin d'éclairer et préparer les décisions complexes. Il soutient donc fortement davantage de référendums, sans assumer aussi directement l'idée de faire voter sans précaution sur des sujets techniques mal maîtrisés ; +2 est adapté.", source: "https://www.pcf.fr/pacte_2025_republique" },
  80: { response: 2, justification: "Accord net : le PCF refuse le retour de pesticides interdits pour des raisons sanitaires ou environnementales et accepte donc des normes françaises exigeantes même lorsqu'elles imposent des contraintes aux agriculteurs. Mais il veut simultanément interdire les importations produites avec des substances interdites en France afin d'éviter que les producteurs français supportent seuls ce désavantage concurrentiel. L'interdiction nationale est clairement soutenue, tandis que l'acceptation durable d'une concurrence étrangère plus favorable ne l'est pas ; +2 est donc plus précis que +3.", source: "https://www.pcf.fr/reaction_loi_agricole2026" }
};

const pcfParty = DATA.entities.find(entity => entity.id === 'pcf');
if (pcfParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(PCF_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    pcfParty.responses[index] = override.response;
    pcfParty.justifications[index] = override.justification;
    if (Array.isArray(pcfParty.sources)) pcfParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (pcfParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  pcfParty.axisScores = scores;
}
