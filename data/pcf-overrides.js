const PCF_RESPONSE_OVERRIDES = {
  2: {
    response: -2,
    justification: "Désaccord net : le PCF refuse que le travail, le mérite ou la prise de risque suffisent à légitimer de très fortes inégalités économiques. Les députés communistes ont notamment proposé de limiter dans une même entreprise la rémunération la plus élevée à vingt fois la plus faible. Cette doctrine accepte donc qu'il existe des écarts de rémunération, mais refuse qu'ils deviennent très importants au seul motif du mérite ou du risque ; -2 est plus précis qu'un rejet absolu de toute inégalité.",
    source: "https://groupe-communiste.assemblee-nationale.fr/propositions/propositions-de-loi/article/lutte-contre-les-inegalites-salariales-4593"
  },
  4: {
    response: 3,
    justification: "Accord très fort : les députés communistes ont proposé d'inscrire dans le code du travail qu'aucune rémunération dans une entreprise ne puisse dépasser vingt fois le salaire minimal qui y est pratiqué. Leur texte prévoit en outre qu'une hausse de la rémunération maximale dépassant ce ratio soit nulle si le salaire minimal n'est pas relevé simultanément. Le mécanisme correspond presque exactement à l'exemple donné dans la question ; +3 est pleinement justifié.",
    source: "https://groupe-communiste.assemblee-nationale.fr/propositions/propositions-de-loi/article/lutte-contre-les-inegalites-salariales-4593"
  },
  7: {
    response: 3,
    justification: "Accord très fort : le PCF considère la nationalisation comme un instrument légitime lorsqu'une entreprise contrôle une activité stratégique ou essentielle. Il défend la maîtrise publique de secteurs clés et demande encore explicitement la nationalisation de grands groupes stratégiques comme TotalEnergies. La proposition autorisant une prise de contrôle publique temporaire ou durable correspond donc directement à sa doctrine ; +3 est adapté.",
    source: "https://www.pcf.fr/nationalisation_total"
  },
  14: { response: 3, justification: "Accord très fort : le PCF défend explicitement l'égalité des droits, la liberté de vivre son orientation sexuelle ou son identité de genre et des politiques d'émancipation permettant à chacun de choisir son mode de vie tant que les droits d'autrui sont respectés. Cette conception correspond directement à l'acceptation d'une grande diversité de modes de vie, d'où +3.", source: "https://www.pcf.fr/pacte_2025_republique" },
  17: { response: 3, justification: "Accord très fort : le PCF propose un plan d'action global contre les discriminations dans l'emploi, le logement, l'éducation et la santé, ainsi que des politiques spécifiques contre le racisme et les discriminations visant les personnes LGBTQI+. Il ne se limite donc pas à l'égalité juridique formelle et veut corriger activement les discriminations persistantes et structurelles ; +3 est justifié.", source: "https://www.pcf.fr/pacte_2025_republique" },
  27: { response: -2, justification: "Désaccord net : le PCF conteste explicitement l'idée que la justice française souffrirait d'un manque de sévérité, souligne le niveau record de la population carcérale et l'allongement des peines, et demande davantage de moyens pour la justice, la prévention, l'éducation et les services sociaux. Il ne rejette toutefois ni la prison ni des sanctions fermes pour les faits graves ; l'opposition à un durcissement général assorti d'une forte hausse de l'incarcération est donc nette sans être absolue, d'où -2.", source: "https://www.pcf.fr/justice_faire_toujours_plus_avec_moins_de_moyens" },
  32: { response: 1, justification: "Accord modéré : le PCF fait de la neutralité carbone et de la lutte contre le dérèglement climatique des objectifs majeurs, mais son plan associe cette transition à la réindustrialisation, à une production abondante d'électricité décarbonée et bon marché et à l'amélioration du niveau de vie. Il ne présente donc pas une baisse de la croissance à court terme comme une contrepartie qu'il faudrait accepter par principe ; l'ambition climatique maintient un score positif mais limité à +1.", source: "https://www.pcf.fr/canicule_chaleur_est_politique" },
  33: { response: -3, justification: "Désaccord très fort : tout en voulant organiser la sortie progressive du pétrole et du gaz, le PCF refuse que cette transition passe par une forte hausse du prix des énergies fossiles supportée par les ménages. En mai 2026, il propose au contraire de bloquer l'essence et le gazole à 1,50 euro le litre, d'annuler des hausses liées aux certificats d'économies d'énergie et de faire davantage contribuer les bénéfices de l'industrie pétrolière. Le mécanisme de renchérissement substantiel posé par la question est donc directement opposé à sa ligne actuelle, d'où -3.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  35: { response: -3, justification: "Désaccord très fort : la politique écologique et énergétique du PCF repose sur la planification, la maîtrise publique des secteurs stratégiques, la régulation des prix et des investissements et, lorsque nécessaire, des nationalisations comme celle de TotalEnergies. Les mécanismes de marché peuvent jouer un rôle secondaire, mais le PCF refuse précisément d'en faire l'instrument généralement préférable à la réglementation et à l'action publique ; -3 reflète cette opposition de principe à la hiérarchie proposée.", source: "https://www.pcf.fr/nationalisation_total" },
  43: {
    response: -3,
    justification: "Désaccord très fort : le PCF ne veut pas supprimer la fiscalité spécifique sur les patrimoines élevés. Son programme met au contraire en avant le rétablissement de l'impôt sur la fortune, avec un taux et une progressivité renforcés et un rendement visé environ trois fois supérieur. Supprimer l'IFI puis renoncer à toute taxation spécifique du patrimoine immobilier va donc directement à l'encontre de cette politique ; -3 est adapté.",
    source: "https://www.pcf.fr/moyen_1"
  },
  44: {
    response: 3,
    justification: "Accord très fort : le PCF propose de renforcer fortement la progressivité des droits de succession, de doubler le nombre de tranches selon le montant transmis et les ressources de l'héritier, de supprimer des niches favorables aux patrimoines élevés et de conserver une franchise de 170 000 euros. Il défend donc explicitement une taxation accrue des transmissions importantes au-delà d'un seuil ; +3 est adapté.",
    source: "https://www.pcf.fr/128_la_fiscalit_des_donations_et_des_successions_sera_profond_ment_r_form_e"
  },
  48: {
    response: -3,
    justification: "Désaccord très fort : le PCF ne considère pas la protection du CDI comme un frein à l'emploi stable. Il veut au contraire faire du CDI la norme, réduire fortement les contrats précaires, construire une sécurité d'emploi ou de formation et donner aux représentants des salariés des pouvoirs pour proposer des alternatives aux licenciements. Faciliter la rupture du CDI au motif qu'il protégerait excessivement les salariés va directement à l'encontre de cette doctrine ; -3 est adapté.",
    source: "https://www.pcf.fr/contrat_jeunes_medef"
  },
  49: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend un système de retraite reposant sur la répartition et la cotisation sociale et exclut explicitement une évolution structurelle vers la capitalisation. Son projet prévoit que le système soit intégralement financé par les cotisations sociales et administré par les représentants des assurés. Une réforme combinant progressivement répartition et capitalisation est donc directement contraire à son modèle ; -3 est adapté.",
    source: "https://www.pcf.fr/r_forme_des_retraites"
  },
  50: {
    response: -3,
    justification: "Désaccord très fort : le PCF veut fixer politiquement le droit à une retraite à taux plein à 60 ans et considère que l'allongement de l'espérance de vie doit améliorer la durée de la retraite plutôt que provoquer automatiquement un recul de l'âge de départ. Il refuse donc précisément le principe d'une indexation automatique de l'âge légal sur l'espérance de vie ; -3 est adapté.",
    source: "https://www.pcf.fr/8_une_loi_r_tablira_la_retraite_60_ans_taux_plein"
  },
  51: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend une protection sociale fondée sur la solidarité et sur le principe de contribuer selon ses moyens et de recevoir selon ses besoins. Son projet de sécurité d'emploi et de formation vise en outre à sécuriser le revenu pendant des périodes de formation ou de transition plutôt qu'à subordonner fortement les droits sociaux à une présence continue sur le marché du travail. Une forte conditionnalité des prestations à la durée de cotisation et à la participation à l'emploi va donc directement à l'encontre de ce modèle ; -3 est adapté.",
    source: "https://www.pcf.fr/notre_ambition_communiste_pour_la_securite_sociale"
  },
  63: {
    response: 0,
    justification: "Position intermédiaire : le PCF veut donner davantage de moyens au renseignement, à la police et à la justice pour prévenir et combattre le terrorisme, ce qui exclut un rejet de principe de toute surveillance préventive. En revanche, il ne défend pas clairement un pouvoir administratif général permettant de surveiller une personne sans éléments suffisants pour engager des poursuites et reste attaché aux garanties de l'État de droit. Faute d'équivalent direct au mécanisme précis de la question, 0 est le codage le plus prudent.",
    source: "https://www.pcf.fr/contre_le_terrorisme"
  },
  68: { response: 1, justification: "Accord modéré : le PCF veut accélérer fortement l'électrification du parc automobile et propose un leasing social massif ainsi qu'un soutien public à des véhicules électriques neufs très abordables. En revanche, sa ligne récente insiste sur la baisse du coût de la transition pour les ménages et n'assume pas clairement le mécanisme exact consistant à interdire progressivement les ventes de voitures thermiques tout en acceptant une hausse temporaire du prix moyen des véhicules. L'orientation vers la sortie du thermique est favorable, mais la contrepartie contenue dans la question limite l'accord à +1.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  69: {
    response: 0,
    justification: "Position intermédiaire : le PCF défend une relance nucléaire très ambitieuse, mais présente explicitement le nucléaire et les énergies renouvelables comme les deux piliers complémentaires d'un mix énergétique décarboné. Il affirme que les renouvelables sont indispensables et refuse d'opposer les filières. Le parti est donc fortement favorable au nucléaire sans défendre une réduction des investissements renouvelables pour le privilégier ; 0 est plus précis que +1 pour la formulation exacte de la question.",
    source: "https://www.pcf.fr/face_explosion_des_prix_le_gouvernement_doit_declarer_l_etat_d_urgence_energetique"
  },
  71: { response: 1, justification: "Accord modéré : le PCF veut que la France mène une politique climatique très ambitieuse, atteigne la neutralité carbone et réduise aussi l'empreinte liée aux importations, ce qui implique d'accepter des transformations économiques importantes même sans parfaite simultanéité internationale. Mais son plan met également au centre la coopération internationale, la justice sociale et la réindustrialisation et ne s'engage pas explicitement à accepter une perte de 3 % du PIB si les autres pays ne font aucun effort comparable. L'ambition climatique justifie donc un score positif, limité à +1 par l'extrême contrepartie économique et l'absence de réciprocité posées par la question.", source: "https://www.pcf.fr/plan_climat_du_pcf" },
  74: { response: 2, justification: "Accord net : le PCF veut instaurer de nouveaux pouvoirs citoyens, notamment un référendum d'initiative populaire et un droit de pétition, ce qui traduit une volonté claire d'accroître le recours à la démocratie directe. Il associe toutefois ces mécanismes à des conférences citoyennes et à la co-élaboration des lois afin d'éclairer et préparer les décisions complexes. Il soutient donc fortement davantage de référendums, sans assumer aussi directement l'idée de faire voter sans précaution sur des sujets techniques mal maîtrisés ; +2 est adapté.", source: "https://www.pcf.fr/pacte_2025_republique" },
  80: { response: 2, justification: "Accord net : le PCF refuse le retour de pesticides interdits pour des raisons sanitaires ou environnementales et accepte donc des normes françaises exigeantes même lorsqu'elles imposent des contraintes aux agriculteurs. Mais il veut simultanément interdire les importations produites avec des substances interdites en France afin d'éviter que les producteurs français supportent seuls ce désavantage concurrentiel. L'interdiction nationale est clairement soutenue, tandis que l'acceptation durable d'une concurrence étrangère plus favorable ne l'est pas ; +2 est donc plus précis que +3.", source: "https://www.pcf.fr/reaction_loi_agricole2026" },
  87: {
    response: -2,
    justification: "Désaccord net : le PCF condamne l'agression russe et défend la souveraineté de l'Ukraine, mais sa ligne actuelle consiste à ne plus alimenter durablement la guerre et à faire du cessez-le-feu et de la négociation une priorité. Il s'oppose à une logique d'escalade militaire et demande une conférence de sécurité paneuropéenne. Continuer une aide militaire et financière importante aussi longtemps que le territoire ukrainien reste occupé va donc nettement plus loin que sa position ; -2 reste adapté.",
    source: "https://www.pcf.fr/pacte_2025_paix"
  },
  89: {
    response: 2,
    justification: "Accord net : la majorité des députés du groupe communiste a soutenu la création d'un droit à l'aide à mourir lorsque celui-ci est exceptionnel et entouré de critères et de garde-fous stricts. Le groupe a toutefois laissé une liberté de vote sur cette question de conscience et plusieurs députés communistes s'y sont opposés. La tendance majoritaire correspond donc clairement à la proposition sans permettre d'attribuer une position unanimement maximale au PCF ; +2 est adapté.",
    source: "https://groupe-communiste.assemblee-nationale.fr/interventions/explications-de-vote-et-scrutins/article/accompagnement-et-soins-palliatifs-droit-a-l-aide-a-mourir-8175"
  },
  90: {
    response: 2,
    justification: "Accord net : le PCF veut développer un service public du grand âge, interdire la création de nouveaux EHPAD à but lucratif et placer les établissements appartenant à de grands groupes privés sous un contrôle public beaucoup plus fort. Cette ligne vise clairement à faire reculer le secteur lucratif. En revanche, le programme national ne formule pas aussi explicitement que la question la conversion obligatoire et progressive de tous les EHPAD privés lucratifs existants en structures publiques ou non lucratives ; +2 reste donc plus précis que +3.",
    source: "https://www.pcf.fr/16_-_l_autonomie_de_nos_a_n_e_s_sera_assur_e"
  },
  92: {
    response: 0,
    justification: "Position intermédiaire : les députés communistes reconnaissent la nécessité de mieux protéger les mineurs et défendent un contrôle effectif de l'âge ainsi que des obligations fortes pour les plateformes. Ils ont cependant critiqué l'interdiction générale des réseaux sociaux avant 15 ans comme une mesure difficilement applicable et insuffisante lorsqu'elle se substitue à la responsabilité des plateformes. Le PCF soutient donc une régulation très forte sans adhérer clairement au principe d'une interdiction absolue même avec l'accord parental ; 0 reste adapté.",
    source: "https://groupe-communiste.assemblee-nationale.fr/interventions/discussions-ge%CC%81ne%CC%81rales/article/proteger-les-mineurs-des-risques-auxquels-les-expose-l-utilisation-des-reseaux-8289"
  },
  93: {
    response: 2,
    justification: "Accord net : le PCF défend explicitement une souveraineté européenne en matière d'intelligence artificielle et considère nécessaire que l'Europe maîtrise les infrastructures, les données et la chaîne technologique sur lesquelles reposent les modèles d'IA. Il reconnaît parallèlement le retard industriel européen face aux acteurs américains et asiatiques, ce qui montre qu'il accepte un effort de rattrapage et d'investissement au nom de cette souveraineté. La préférence européenne est donc nette, mais le parti ne dit pas qu'il faudrait accepter sans limite n'importe quel surcoût ou perte de performance ; +2 est adapté.",
    source: "https://www.pcf.fr/ia_pcf"
  }
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
