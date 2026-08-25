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
  13: { response: 3, justification: "Accord très fort : le PCF défend explicitement l'égalité des droits, la liberté de vivre son orientation sexuelle ou son identité de genre et des politiques d'émancipation permettant à chacun de choisir son mode de vie tant que les droits d'autrui sont respectés. Cette conception correspond directement à l'acceptation d'une grande diversité de modes de vie, d'où +3.", source: "https://www.pcf.fr/pacte_2025_republique" },
  16: { response: 3, justification: "Accord très fort : le PCF propose un plan d'action global contre les discriminations dans l'emploi, le logement, l'éducation et la santé, ainsi que des politiques spécifiques contre le racisme et les discriminations visant les personnes LGBTQI+. Il ne se limite donc pas à l'égalité juridique formelle et veut corriger activement les discriminations persistantes et structurelles ; +3 est justifié.", source: "https://www.pcf.fr/pacte_2025_republique" },
  26: { response: -2, justification: "Désaccord net : le PCF conteste explicitement l'idée que la justice française souffrirait d'un manque de sévérité, souligne le niveau record de la population carcérale et l'allongement des peines, et demande davantage de moyens pour la justice, la prévention, l'éducation et les services sociaux. Il ne rejette toutefois ni la prison ni des sanctions fermes pour les faits graves ; l'opposition à un durcissement général assorti d'une forte hausse de l'incarcération est donc nette sans être absolue, d'où -2.", source: "https://www.pcf.fr/justice_faire_toujours_plus_avec_moins_de_moyens" },
  30: { response: 1, justification: "Accord modéré : le PCF fait de la neutralité carbone et de la lutte contre le dérèglement climatique des objectifs majeurs, mais son plan associe cette transition à la réindustrialisation, à une production abondante d'électricité décarbonée et bon marché et à l'amélioration du niveau de vie. Il ne présente donc pas une baisse de la croissance à court terme comme une contrepartie qu'il faudrait accepter par principe ; l'ambition climatique maintient un score positif mais limité à +1.", source: "https://www.pcf.fr/canicule_chaleur_est_politique" },
  31: { response: -3, justification: "Désaccord très fort : tout en voulant organiser la sortie progressive du pétrole et du gaz, le PCF refuse que cette transition passe par une forte hausse du prix des énergies fossiles supportée par les ménages. En mai 2026, il propose au contraire de bloquer l'essence et le gazole à 1,50 euro le litre, d'annuler des hausses liées aux certificats d'économies d'énergie et de faire davantage contribuer les bénéfices de l'industrie pétrolière. Le mécanisme de renchérissement substantiel posé par la question est donc directement opposé à sa ligne actuelle, d'où -3.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  33: { response: -3, justification: "Désaccord très fort : la politique écologique et énergétique du PCF repose sur la planification, la maîtrise publique des secteurs stratégiques, la régulation des prix et des investissements et, lorsque nécessaire, des nationalisations comme celle de TotalEnergies. Les mécanismes de marché peuvent jouer un rôle secondaire, mais le PCF refuse précisément d'en faire l'instrument généralement préférable à la réglementation et à l'action publique ; -3 reflète cette opposition de principe à la hiérarchie proposée.", source: "https://www.pcf.fr/nationalisation_total" },
  41: {
    response: -3,
    justification: "Désaccord très fort : le PCF ne veut pas supprimer la fiscalité spécifique sur les patrimoines élevés. Son programme met au contraire en avant le rétablissement de l'impôt sur la fortune, avec un taux et une progressivité renforcés et un rendement visé environ trois fois supérieur. Supprimer l'IFI puis renoncer à toute taxation spécifique du patrimoine immobilier va donc directement à l'encontre de cette politique ; -3 est adapté.",
    source: "https://www.pcf.fr/moyen_1"
  },
  42: {
    response: 3,
    justification: "Accord très fort : le PCF propose de renforcer fortement la progressivité des droits de succession, de doubler le nombre de tranches selon le montant transmis et les ressources de l'héritier, de supprimer des niches favorables aux patrimoines élevés et de conserver une franchise de 170 000 euros. Il défend donc explicitement une taxation accrue des transmissions importantes au-delà d'un seuil ; +3 est adapté.",
    source: "https://www.pcf.fr/128_la_fiscalit_des_donations_et_des_successions_sera_profond_ment_r_form_e"
  },
  46: {
    response: -3,
    justification: "Désaccord très fort : le PCF ne considère pas la protection du CDI comme un frein à l'emploi stable. Il veut au contraire faire du CDI la norme, réduire fortement les contrats précaires, construire une sécurité d'emploi ou de formation et donner aux représentants des salariés des pouvoirs pour proposer des alternatives aux licenciements. Faciliter la rupture du CDI au motif qu'il protégerait excessivement les salariés va directement à l'encontre de cette doctrine ; -3 est adapté.",
    source: "https://www.pcf.fr/contrat_jeunes_medef"
  },
  47: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend un système de retraite reposant sur la répartition et la cotisation sociale et exclut explicitement une évolution structurelle vers la capitalisation. Son projet prévoit que le système soit intégralement financé par les cotisations sociales et administré par les représentants des assurés. Une réforme combinant progressivement répartition et capitalisation est donc directement contraire à son modèle ; -3 est adapté.",
    source: "https://www.pcf.fr/r_forme_des_retraites"
  },
  48: {
    response: -3,
    justification: "Désaccord très fort : le PCF veut fixer politiquement le droit à une retraite à taux plein à 60 ans et considère que l'allongement de l'espérance de vie doit améliorer la durée de la retraite plutôt que provoquer automatiquement un recul de l'âge de départ. Il refuse donc précisément le principe d'une indexation automatique de l'âge légal sur l'espérance de vie ; -3 est adapté.",
    source: "https://www.pcf.fr/8_une_loi_r_tablira_la_retraite_60_ans_taux_plein"
  },
  49: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend une protection sociale fondée sur la solidarité et sur le principe de contribuer selon ses moyens et de recevoir selon ses besoins. Son projet de sécurité d'emploi et de formation vise en outre à sécuriser le revenu pendant des périodes de formation ou de transition plutôt qu'à subordonner fortement les droits sociaux à une présence continue sur le marché du travail. Une forte conditionnalité des prestations à la durée de cotisation et à la participation à l'emploi va donc directement à l'encontre de ce modèle ; -3 est adapté.",
    source: "https://www.pcf.fr/notre_ambition_communiste_pour_la_securite_sociale"
  },
  59: {
    response: 0,
    justification: "Position intermédiaire : le PCF veut donner davantage de moyens au renseignement, à la police et à la justice pour prévenir et combattre le terrorisme, ce qui exclut un rejet de principe de toute surveillance préventive. En revanche, il ne défend pas clairement un pouvoir administratif général permettant de surveiller une personne sans éléments suffisants pour engager des poursuites et reste attaché aux garanties de l'État de droit. Faute d'équivalent direct au mécanisme précis de la question, 0 est le codage le plus prudent.",
    source: "https://www.pcf.fr/contre_le_terrorisme"
  },
  63: { response: 1, justification: "Accord modéré : le PCF veut accélérer fortement l'électrification du parc automobile et propose un leasing social massif ainsi qu'un soutien public à des véhicules électriques neufs très abordables. En revanche, sa ligne récente insiste sur la baisse du coût de la transition pour les ménages et n'assume pas clairement le mécanisme exact consistant à interdire progressivement les ventes de voitures thermiques tout en acceptant une hausse temporaire du prix moyen des véhicules. L'orientation vers la sortie du thermique est favorable, mais la contrepartie contenue dans la question limite l'accord à +1.", source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026" },
  64: {
    response: 0,
    justification: "Position intermédiaire : le PCF défend une relance nucléaire très ambitieuse, mais présente explicitement le nucléaire et les énergies renouvelables comme les deux piliers complémentaires d'un mix énergétique décarboné. Il affirme que les renouvelables sont indispensables et refuse d'opposer les filières. Le parti est donc fortement favorable au nucléaire sans défendre une réduction des investissements renouvelables pour le privilégier ; 0 est plus précis que +1 pour la formulation exacte de la question.",
    source: "https://www.pcf.fr/face_explosion_des_prix_le_gouvernement_doit_declarer_l_etat_d_urgence_energetique"
  },
  65: { response: 1, justification: "Accord modéré : le PCF veut que la France mène une politique climatique très ambitieuse, atteigne la neutralité carbone et réduise aussi l'empreinte liée aux importations, ce qui implique d'accepter des transformations économiques importantes même sans parfaite simultanéité internationale. Mais son plan met également au centre la coopération internationale, la justice sociale et la réindustrialisation et ne s'engage pas explicitement à accepter une perte de 3 % du PIB si les autres pays ne font aucun effort comparable. L'ambition climatique justifie donc un score positif, limité à +1 par l'extrême contrepartie économique et l'absence de réciprocité posées par la question.", source: "https://www.pcf.fr/plan_climat_du_pcf" },
  68: { response: 2, justification: "Accord net : le PCF veut instaurer de nouveaux pouvoirs citoyens, notamment un référendum d'initiative populaire et un droit de pétition, ce qui traduit une volonté claire d'accroître le recours à la démocratie directe. Il associe toutefois ces mécanismes à des conférences citoyennes et à la co-élaboration des lois afin d'éclairer et préparer les décisions complexes. Il soutient donc fortement davantage de référendums, sans assumer aussi directement l'idée de faire voter sans précaution sur des sujets techniques mal maîtrisés ; +2 est adapté.", source: "https://www.pcf.fr/pacte_2025_republique" },
  74: { response: 2, justification: "Accord net : le PCF refuse le retour de pesticides interdits pour des raisons sanitaires ou environnementales et accepte donc des normes françaises exigeantes même lorsqu'elles imposent des contraintes aux agriculteurs. Mais il veut simultanément interdire les importations produites avec des substances interdites en France afin d'éviter que les producteurs français supportent seuls ce désavantage concurrentiel. L'interdiction nationale est clairement soutenue, tandis que l'acceptation durable d'une concurrence étrangère plus favorable ne l'est pas ; +2 est donc plus précis que +3.", source: "https://www.pcf.fr/reaction_loi_agricole2026" },
  81: {
    response: -2,
    justification: "Désaccord net : le PCF condamne l'agression russe et défend la souveraineté de l'Ukraine, mais sa ligne actuelle consiste à ne plus alimenter durablement la guerre et à faire du cessez-le-feu et de la négociation une priorité. Il s'oppose à une logique d'escalade militaire et demande une conférence de sécurité paneuropéenne. Continuer une aide militaire et financière importante aussi longtemps que le territoire ukrainien reste occupé va donc nettement plus loin que sa position ; -2 reste adapté.",
    source: "https://www.pcf.fr/pacte_2025_paix"
  },
  83: {
    response: 2,
    justification: "Accord net : la majorité des députés du groupe communiste a soutenu la création d'un droit à l'aide à mourir lorsque celui-ci est exceptionnel et entouré de critères et de garde-fous stricts. Le groupe a toutefois laissé une liberté de vote sur cette question de conscience et plusieurs députés communistes s'y sont opposés. La tendance majoritaire correspond donc clairement à la proposition sans permettre d'attribuer une position unanimement maximale au PCF ; +2 est adapté.",
    source: "https://groupe-communiste.assemblee-nationale.fr/interventions/explications-de-vote-et-scrutins/article/accompagnement-et-soins-palliatifs-droit-a-l-aide-a-mourir-8175"
  },
  84: {
    response: 2,
    justification: "Accord net : le PCF veut développer un service public du grand âge, interdire la création de nouveaux EHPAD à but lucratif et placer les établissements appartenant à de grands groupes privés sous un contrôle public beaucoup plus fort. Cette ligne vise clairement à faire reculer le secteur lucratif. En revanche, le programme national ne formule pas aussi explicitement que la question la conversion obligatoire et progressive de tous les EHPAD privés lucratifs existants en structures publiques ou non lucratives ; +2 reste donc plus précis que +3.",
    source: "https://www.pcf.fr/16_-_l_autonomie_de_nos_a_n_e_s_sera_assur_e"
  },
  86: {
    response: 0,
    justification: "Position intermédiaire : les députés communistes reconnaissent la nécessité de mieux protéger les mineurs et défendent un contrôle effectif de l'âge ainsi que des obligations fortes pour les plateformes. Ils ont cependant critiqué l'interdiction générale des réseaux sociaux avant 15 ans comme une mesure difficilement applicable et insuffisante lorsqu'elle se substitue à la responsabilité des plateformes. Le PCF soutient donc une régulation très forte sans adhérer clairement au principe d'une interdiction absolue même avec l'accord parental ; 0 reste adapté.",
    source: "https://groupe-communiste.assemblee-nationale.fr/interventions/discussions-ge%CC%81ne%CC%81rales/article/proteger-les-mineurs-des-risques-auxquels-les-expose-l-utilisation-des-reseaux-8289"
  },
  87: {
    response: 2,
    justification: "Accord net : le PCF défend explicitement une souveraineté européenne en matière d'intelligence artificielle et considère nécessaire que l'Europe maîtrise les infrastructures, les données et la chaîne technologique sur lesquelles reposent les modèles d'IA. Il reconnaît parallèlement le retard industriel européen face aux acteurs américains et asiatiques, ce qui montre qu'il accepte un effort de rattrapage et d'investissement au nom de cette souveraineté. La préférence européenne est donc nette, mais le parti ne dit pas qu'il faudrait accepter sans limite n'importe quel surcoût ou perte de performance ; +2 est adapté.",
    source: "https://www.pcf.fr/ia_pcf"
  }
};

// Audit documentaire PCF d'août 2026. Les clés sont les IDs stables des questions,
// jamais leur position dans le tableau du questionnaire.
Object.assign(PCF_RESPONSE_OVERRIDES, {
  1: {
    response: -3,
    justification: "Désaccord très fort : le PCF rejette une baisse générale des prélèvements qui serait financée par des coupes dans les politiques publiques. Sa ligne actuelle combat au contraire l'austérité, défend l'investissement public et les services publics et demande de nouvelles recettes sur le capital et les grandes fortunes. L'arbitrage posé par la question est donc presque exactement inverse à sa doctrine ; -3 est adapté.",
    source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026"
  },
  3: {
    response: 3,
    justification: "Accord très fort : le PCF défend explicitement une fiscalité beaucoup plus progressive sur les hauts revenus et les gros patrimoines, avec notamment le rétablissement d'un ISF renforcé et davantage de contribution des plus fortunés. La réduction des inégalités par l'impôt est un élément central de sa politique fiscale ; +3 est directement documenté.",
    source: "https://www.pcf.fr/moyen_1"
  },
  5: {
    response: 3,
    justification: "Accord très fort : le programme actuellement mis en avant par le PCF propose une augmentation du SMIC à 1 600 euros net par mois. Il ne s'agit donc pas d'une simple revalorisation marginale mais d'une hausse substantielle du salaire minimum ; +3 correspond directement à la proposition.",
    source: "https://www.pcf.fr/"
  },
  6: {
    response: -3,
    justification: "Désaccord très fort : dans les secteurs essentiels et stratégiques, le PCF privilégie la maîtrise publique, les services publics, les pôles publics et, lorsque nécessaire, les nationalisations. Cette doctrine est directement opposée à l'idée d'une efficacité généralement supérieure des entreprises privées, y compris pour les biens et services essentiels ; -3 est adapté.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  8: {
    response: -3,
    justification: "Désaccord très fort : le PCF place au cœur de son projet la planification démocratique, la maîtrise publique de secteurs stratégiques, le contrôle des aides et des investissements et la régulation économique. Il ne fait pas de la concurrence le mécanisme généralement préférable à la réglementation pour organiser les marchés ; -3 traduit cette opposition de principe.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  9: {
    response: -3,
    justification: "Désaccord très fort : le PCF combat explicitement les politiques de réduction des dépenses sociales et des services publics au nom du déficit et du désendettement. Il demande au contraire de protéger les dépenses utiles et les investissements d'avenir et de rechercher d'autres recettes. La contrepartie budgétaire proposée par la question est donc directement rejetée ; -3 est adapté.",
    source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026"
  },
  10: {
    response: 3,
    justification: "Accord très fort : le PCF revendique une Sécurité sociale étendue et solidement financée par les cotisations, selon le principe de contribuer selon ses moyens et de recevoir selon ses besoins. Il assume donc un niveau élevé de financement collectif pour garantir une protection sociale importante ; +3 est cohérent.",
    source: "https://www.pcf.fr/notre_ambition_communiste_pour_la_securite_sociale"
  },
  11: {
    response: 3,
    justification: "Accord très fort : le projet communiste prévoit nationalisations, pôle public bancaire, planification, conditionnement des aides publiques, nouveaux pouvoirs des salariés et maîtrise publique de secteurs stratégiques. Ce sont précisément des formes d'intervention forte lorsque le fonctionnement du marché est jugé socialement ou économiquement indésirable ; +3 est adapté.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  12: {
    response: -3,
    justification: "Désaccord très fort : le modèle de protection sociale défendu par le PCF repose sur des mécanismes collectifs, solidaires et obligatoires, notamment financés par la cotisation sociale. Il s'oppose à une individualisation importante de la retraite, de la santé ou de la protection sociale au profit de choix privés financés séparément ; -3 correspond à cette logique.",
    source: "https://www.pcf.fr/notre_ambition_communiste_pour_la_securite_sociale"
  },
  14: {
    response: -3,
    justification: "Désaccord très fort : le PCF propose explicitement d'abroger l'article 49.3 et veut replacer le Parlement au centre de la décision politique. Il refuse donc le principe permettant à l'exécutif de faire adopter un budget sans vote de l'Assemblée au motif d'une absence de majorité stable ; -3 est une opposition directe.",
    source: "https://www.pcf.fr/osons_la_revolution_democratique"
  },
  15: {
    response: 1,
    justification: "Accord modéré, par inférence : le PCF accepte des politiques contraignantes de redistribution et de lutte contre les discriminations afin de réduire les inégalités, mais il défend aussi fortement les libertés fondamentales. Il n'existe pas de doctrine générale affirmant que l'égalité justifierait en elle-même une restriction large des libertés individuelles ; +1 reste donc volontairement prudent.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  17: {
    response: -2,
    justification: "Désaccord net : le PCF défend une nouvelle étape de décentralisation et davantage de pouvoirs locaux, mais il insiste simultanément sur l'unicité des règles et des lois et sur l'égalité des droits sur l'ensemble du territoire. Il est donc favorable à la décentralisation sans aller jusqu'à une différenciation générale des règles économiques, sociales ou environnementales ; -2 traduit cette nuance.",
    source: "https://www.pcf.fr/une_nouvelle_tape_de_d_centralisation_sera_mise_en_uvre"
  },
  18: {
    response: 0,
    justification: "Position intermédiaire : le PCF valorise le patrimoine, la culture et certains héritages collectifs, mais son projet est simultanément progressiste sur les droits et les transformations sociales. Aucune doctrine générale ne permet d'affirmer qu'il faudrait ralentir les évolutions sociales au nom des traditions ; 0 évite donc une extrapolation artificielle.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  19: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend l'ouverture de voies légales de migration, une politique d'accueil et le respect de la libre circulation, et rejette l'objectif consistant à réduire les migrations comme réponse générale. Sa position est donc frontalement opposée à une baisse volontaire du nombre d'immigrants accueillis chaque année ; -3 est adapté.",
    source: "https://www.pcf.fr/mediapart_la_gauche_et_l_immigration_les_r_ponses_et_propositions_du_pcf"
  },
  20: {
    response: 3,
    justification: "Accord très fort : le PCF affirme explicitement que la France a bénéficié de l'apport des migrations sur le plan économique et conteste que l'immigration soit responsable de la dégradation des salaires ou de l'emploi. Cette prise de position répond presque mot pour mot à l'idée que l'immigration économique est globalement bénéfique pour l'économie française ; +3 est donc plus précis que +2.",
    source: "https://www.pcf.fr/mediapart_la_gauche_et_l_immigration_les_r_ponses_et_propositions_du_pcf"
  },
  21: {
    response: 3,
    justification: "Accord très fort : le PCF combat explicitement la préférence nationale et les restrictions qui subordonnent l'accès aux droits sociaux, au logement ou à d'autres droits fondamentaux à la nationalité. Pour un étranger légalement et durablement installé, il défend donc l'égalité des droits à situation comparable ; +3 est directement cohérent.",
    source: "https://www.pcf.fr/marchons_pour_la_liberte_l_egalite_la_fraternite"
  },
  22: {
    response: -2,
    justification: "Désaccord net : le PCF s'oppose aux durcissements généraux de l'accès à la nationalité et du droit du sol et a historiquement défendu des voies de naturalisation relativement accessibles. Les sources les plus exactement équivalentes à une naturalisation facilitée sont toutefois anciennes ; -2 reste donc plus prudent qu'un désaccord maximal.",
    source: "https://www.pcf.fr/immigration_une_loi_r_actionnaire_et_cruelle"
  },
  23: {
    response: -2,
    justification: "Désaccord net : en 2023, le groupe communiste au Sénat a proposé de supprimer une disposition qui facilitait l'expulsion de certaines catégories d'étrangers jusque-là protégées, y compris après des condamnations pour des infractions graves. Le PCF ne rejette toutefois pas toute expulsion dans les situations les plus extrêmes ; -2 est donc plus précis que -3.",
    source: "https://www.senat.fr/encommission/2022-2023/304/Amdt_COM-183.html"
  },
  24: {
    response: -2,
    justification: "Désaccord net : le PCF rejette les discours présentant l'immigration comme une menace civilisationnelle ou identitaire et traite d'abord le sujet comme une question sociale et de classe. Il conserve néanmoins l'idée d'une intégration dans un cadre républicain commun ; -2 reflète mieux cette nuance qu'un rejet absolu de toute considération de cohésion.",
    source: "https://www.pcf.fr/immigration_est_un_enjeu_de_classe"
  },
  25: {
    response: 3,
    justification: "Accord très fort : le PCF demande des voies légales et sûres, le renforcement de l'accueil des réfugiés et des moyens de l'Ofpra et de l'Ofii ainsi que le respect plein du droit d'asile et de la Convention de Genève. Il accepte donc explicitement un effort public accru pour les personnes fuyant guerre et persécution ; +3 est adapté.",
    source: "https://www.pcf.fr/162_des_voies_l_gales_et_s_curis_es_devront_tre_ouvertes_pour_les_migrant_e_s_en_respect_du_droit_international"
  },
  27: {
    response: 2,
    justification: "Accord net : le PCF donne une place importante à la prévention, au traitement des causes sociales de la délinquance et aux services publics, tout en demandant simultanément des moyens importants pour la police, la gendarmerie et la justice. La prévention est donc clairement prioritaire dans son approche sans exclure une politique de sécurité substantielle ; +2, plutôt que +3, traduit cet équilibre.",
    source: "https://www.pcf.fr/droit_securite_et_tranquillite_pour_tous"
  },
  28: {
    response: -2,
    justification: "Désaccord net : le PCF s'oppose aux extensions de pouvoirs de police qu'il juge liberticides et a encore critiqué en 2025 l'élargissement des compétences de la police municipale, tout en demandant davantage d'effectifs de police nationale. Il n'est donc pas opposé à la police, mais refuse une extension générale des pouvoirs au prix des libertés individuelles ; -2 est adapté.",
    source: "https://www.pcf.fr/confusion_police"
  },
  29: {
    response: 2,
    justification: "Accord net : en juillet 2026, le PCF demande explicitement l'interdiction des importations produites avec des substances interdites en France et des protections contre la concurrence de produits ne respectant pas les mêmes normes. Il cherche toutefois en parallèle à maintenir l'alimentation accessible et n'assume pas explicitement la hausse du prix des produits les moins chers contenue dans la question ; +2 est donc plus précis que +3.",
    source: "https://www.pcf.fr/reaction_loi_agricole2026"
  },
  34: {
    response: 3,
    justification: "Accord très fort : le PCF s'est opposé à la réautorisation de pesticides dangereux et défend le maintien de normes sanitaires et environnementales strictes, tout en demandant un accompagnement des agriculteurs vers des alternatives. Il accepte donc le principe d'interdire certains produits ou usages pour des raisons écologiques ou sanitaires malgré les intérêts économiques concernés ; +3 est adapté.",
    source: "https://www.pcf.fr/loi_duplomb"
  },
  35: {
    response: 3,
    justification: "Accord très fort : le PCF souligne la responsabilité beaucoup plus importante des pays riches et industrialisés dans le dérèglement climatique et réclame plus de mille milliards de dollars d'aide, majoritairement sous forme de dons, pour financer l'action climatique dans les pays du Sud. Le principe d'un effort financier très supérieur des économies riches est donc explicite ; +3 est défendable.",
    source: "https://www.pcf.fr/cop_29"
  },
  37: {
    response: 2,
    justification: "Accord net : le projet actuel du PCF décrit l'Europe souhaitée comme une Europe de nations et de peuples libres, souverains et associés. Il veut préserver la souveraineté nationale tout en maintenant des coopérations européennes importantes. Cette combinaison correspond très directement à la proposition ; +2 reflète l'orientation souverainiste sans faire du PCF un parti de retrait européen.",
    source: "https://www.pcf.fr/pacte_2025_paix"
  },
  38: {
    response: 0,
    justification: "Position intermédiaire : le PCF ne porte plus la sortie de l'euro comme objectif politique et cherche plutôt à transformer profondément le rôle de la BCE et l'utilisation de la monnaie européenne. Il reste cependant très critique envers l'architecture monétaire actuelle et ne présente pas l'euro comme un bénéfice économique net en soi ; 0 est donc le codage le plus fidèle.",
    source: "https://www.pcf.fr/ensemble_pour_le_progres_social"
  },
  39: {
    response: 0,
    justification: "Position intermédiaire : le PCF souhaite davantage d'action européenne commune dans certains domaines sociaux, financiers ou écologiques, mais veut simultanément renégocier les traités et renforcer la souveraineté des nations et des peuples. Il n'existe donc pas de préférence générale pour toujours plus ou toujours moins de règles européennes ; 0 traduit cette combinaison.",
    source: "https://www.pcf.fr/pacte_2025_paix"
  },
  40: {
    response: 3,
    justification: "Accord très fort : le PCF veut rompre avec les contraintes du pacte de stabilité, sortir du marché européen de l'électricité tout en conservant l'interconnexion et renégocier les traités afin qu'ils respectent davantage la souveraineté nationale. Il accepte donc explicitement de faire primer certaines priorités nationales sur les règles européennes existantes ; +3 est adapté.",
    source: "https://www.pcf.fr/pacte_2025_paix"
  },
  43: {
    response: 2,
    justification: "Accord net : le PCF défend une forte taxation des très grandes fortunes, le rétablissement d'un ISF renforcé et une lutte déterminée contre l'évasion fiscale ; il conteste aussi l'argument selon lequel l'exil des grandes fortunes devrait empêcher cette taxation. En revanche, il n'y a pas de proposition communiste actuelle formulant exactement un maintien mondial et personnel de l'impôt français après expatriation. La direction de fond est très favorable, mais l'instrument précis reste indirectement documenté ; +2 est donc conservé.",
    source: "https://www.pcf.fr/s_nat_r_tablir_l_isf"
  },
  44: {
    response: -3,
    justification: "Désaccord très fort : le PCF propose d'abroger les durcissements récents de l'assurance-chômage, de restaurer les droits des demandeurs d'emploi et de construire une sécurité d'emploi ou de formation garantissant la continuité du revenu plutôt qu'une logique de sanction et de mise sous pression. Une politique plus stricte envers les chômeurs est donc directement opposée à son projet ; -3 est adapté.",
    source: "https://www.pcf.fr/2_la_loi_el_khomri_les_ordonnances_macron_et_la_loi_borne_sur_l_assurance_ch_mage_seront_imm_diatement_abrog_es"
  },
  45: {
    response: 3,
    justification: "Accord très fort : le programme du PCF pour les Outre-mer prévoit explicitement une politique tarifaire préférentielle des transports aériens et maritimes et une égalité de continuité territoriale pour les passagers comme pour les marchandises. Le mécanisme vise directement à réduire le handicap de coût lié à l'éloignement ; +3 correspond presque exactement à la proposition.",
    source: "https://www.pcf.fr/147_une_politique_volontariste_de_d_veloppement_industriel_agricole_de_l_conomie_de_la_mer_sera_impuls_e_afin_de_permettre_aux_populations_de_vivre_et_de_travailler_dans_ces_territoires"
  },
  50: {
    response: 3,
    justification: "Accord très fort : le PCF demande que les aides publiques aux entreprises soient soumises à des critères stricts d'emploi, de salaire, d'égalité, de formation, de relocalisation et de transition écologique, sous contrôle des salariés, avec restitution en cas de non-respect des engagements. La conditionnalité des aides est donc explicite et très forte ; +3 est directement documenté.",
    source: "https://www.pcf.fr/resolution_paix_vie_digne_mai_2026"
  },
  51: {
    response: 3,
    justification: "Accord très fort : le PCF veut un État stratège capable de planifier les filières industrielles, d'utiliser un pôle public bancaire, de nationaliser des entreprises stratégiques et d'organiser le suivi des engagements économiques. Il va donc nettement au-delà d'un simple usage plus actif du pouvoir d'actionnaire de l'État pour orienter les grandes entreprises ; +3 est adapté.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  52: {
    response: -3,
    justification: "Désaccord très fort : la ligne économique du PCF privilégie l'encadrement public, les droits des salariés, la planification, les normes sociales et environnementales et le contrôle des entreprises. Il ne défend pas une déréglementation générale qui accepterait d'affaiblir ces protections pour faciliter l'activité économique ; la proposition est donc directement opposée à sa doctrine, d'où -3.",
    source: "https://www.pcf.fr/pacte_2025_republique"
  },
  53: {
    response: 3,
    justification: "Accord très fort : le PCF demande explicitement la régularisation des travailleurs sans papiers et l'abrogation de la circulaire Retailleau, qu'il juge destinée à rendre les régularisations plus difficiles. La régularisation des personnes sans titre déjà insérées par le travail constitue donc une revendication actuelle et explicite ; +3 est adapté.",
    source: "https://www.pcf.fr/circulaire_retailleau"
  },
  54: {
    response: -3,
    justification: "Désaccord très fort : le PCF a dénoncé le durcissement qui imposait plusieurs années de présence régulière avant l'accès des étrangers à des prestations comme les APL ou les allocations familiales. Il combat précisément l'idée d'une longue période de carence sociale pour les étrangers légalement présents ; -3 est donc directement documenté.",
    source: "https://www.pcf.fr/immigration_une_loi_r_actionnaire_et_cruelle"
  },
  55: {
    response: -3,
    justification: "Désaccord très fort : le PCF rejette explicitement le tri entre de prétendus « bons » réfugiés et « mauvais » migrants économiques et critique une sélection des personnes selon leur utilité pour le marché du travail. Le principe d'une immigration choisie privilégiant les personnes qualifiées au détriment des moins qualifiées est donc précisément ce qu'il refuse ; -3 est plus fidèle que -2.",
    source: "https://www.pcf.fr/mediapart_la_gauche_et_l_immigration_les_r_ponses_et_propositions_du_pcf"
  },
  56: {
    response: 3,
    justification: "Accord très fort : le PCF s'oppose fermement aux restrictions du droit du sol et défend une conception très ouverte de l'accès à la nationalité pour les personnes nées en France. Sa doctrine historique allait même jusqu'à un droit du sol automatique dès la naissance. La proposition est donc pleinement compatible avec sa ligne ; +3 est adapté.",
    source: "https://www.pcf.fr/restriction_du_droit_du_sol_mayotte"
  },
  57: {
    response: -2,
    justification: "Désaccord net : le PCF refuse de présenter l'immigration comme une menace culturelle ou civilisationnelle et privilégie une analyse sociale et économique ainsi qu'une politique d'intégration. Il ne nie pas pour autant l'existence d'un cadre républicain commun. Il s'oppose donc nettement à un filtrage préalable fondé sur une anticipation d'intégration culturelle, sans aller jusqu'à nier toute exigence d'intégration ; -2 est adapté.",
    source: "https://www.pcf.fr/immigration_est_un_enjeu_de_classe"
  },
  58: {
    response: 3,
    justification: "Accord très fort : le PCF fait de l'égalité des droits indépendamment de l'origine ou de la religion et de la lutte contre le racisme et les discriminations des principes centraux de sa conception républicaine. Il défend une appartenance politique et civique plutôt qu'une définition ethnoculturelle de la nation ; +3 est cohérent.",
    source: "https://www.pcf.fr/contre_xenophobie_racisme_antisemitisme_gagnons_egalite_des_droits"
  },
  60: {
    response: 2,
    justification: "Accord net : le PCF défend fortement la liberté d'expression et s'est opposé à des dispositifs de censure jugés disproportionnés ou liberticides. Il admet toutefois des sanctions contre les abus, notamment les propos racistes ou antisémites. La liberté d'expression reçoit donc une protection élevée mais non absolue ; +2 est plus précis que +3.",
    source: "https://www.pcf.fr/actualite_le_conseil_constitutionnel_rappelle_que_la_liberte_d_expression_est_une_liberte_fondamentale"
  },
  62: {
    response: -2,
    justification: "Désaccord net : le PCF refuse explicitement de financer la transition écologique par une hausse des prix du carburant, du gaz ou de l'électricité supportée par les consommateurs, en particulier les ménages populaires et moyens. Il réclame plutôt un financement budgétaire et une fiscalité plus progressive. La compensation ciblée prévue dans la question atténue le désaccord, mais ne renverse pas son opposition au mécanisme de prix ; -2 est adapté.",
    source: "https://www.pcf.fr/non_la_flambee_des_prix_oui_une_transition_juste"
  },
  66: {
    response: -2,
    justification: "Désaccord net : la philosophie institutionnelle du PCF privilégie le pouvoir du Parlement, des citoyens et des salariés et se méfie du transfert de décisions politiques à des instances d'experts indépendants. Une réflexion communiste a explicitement critiqué la dépolitisation et la dépossession démocratique par l'expertise. Cette source étant ancienne, -2 est plus prudent qu'un désaccord maximal.",
    source: "https://projet.pcf.fr/82953"
  },
  67: {
    response: 0,
    justification: "Position intermédiaire : le PCF défend une forte souveraineté populaire et davantage de participation citoyenne, mais Fabien Roussel a également rappelé qu'un pays ne se gouverne pas par référendum permanent. Le parti veut donc davantage écouter et associer directement les citoyens sans soumettre immédiatement chaque décision gouvernementale à leur approbation ; 0 rend bien cette tension.",
    source: "https://www.pcf.fr/motion_r_f_rendaire_lundi_17_f_vrier_2020_intervention_de_fabien_roussel"
  },
  69: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend une représentation politique proportionnelle à l'influence électorale et veut que les suffrages pèsent de manière égale dans la représentation nationale. Il ne propose aucun mécanisme donnant davantage de poids politique aux électeurs supposés plus compétents ou mieux informés ; le principe de la question est donc frontalement rejeté, d'où -3.",
    source: "https://www.pcf.fr/133_une_s_rie_de_dispositions_viseront_doter_la_nation_d_un_parlement_l_image_de_son_peuple"
  },
  71: {
    response: 3,
    justification: "Accord très fort : le programme du PCF emploie explicitement l'expression « proportionnelle intégrale » pour l'élection des assemblées afin que leur composition reflète l'influence réelle des forces politiques. La proposition correspond donc directement à une revendication programmatique précise ; +3 est pleinement documenté.",
    source: "https://www.pcf.fr/133_une_s_rie_de_dispositions_viseront_doter_la_nation_d_un_parlement_l_image_de_son_peuple"
  },
  72: {
    response: -1,
    justification: "Désaccord modéré : le PCF considère l'intégration comme un objectif légitime et valorise notamment l'accès à l'emploi, à la formation et à l'apprentissage du français, mais il refuse d'en faire un dispositif de sélection ou de précarisation permettant de multiplier les refus et retraits de séjour. Il n'est donc pas opposé aux attentes d'intégration elles-mêmes ; le désaccord porte surtout sur leur usage restrictif, d'où -1.",
    source: "https://www.pcf.fr/immigration_tribune"
  },
  73: {
    response: 3,
    justification: "Accord très fort : le PCF conteste explicitement les discours qui attribuent à l'immigration le chômage, la précarité ou l'insécurité et insiste au contraire sur les déterminants économiques et sociaux de ces phénomènes. L'explication principalement sociale et économique de ces difficultés correspond donc très directement à sa doctrine ; +3 est adapté.",
    source: "https://www.pcf.fr/immigration_r_sister_et_combattre_les_discours_de_haine_envers_les_trangers"
  },
  76: {
    response: 3,
    justification: "Accord très fort : en juillet 2026, Fabien Roussel réaffirme explicitement l'objectif d'un remboursement à 100 % par la Sécurité sociale de tous les soins prescrits, sans reste à charge, avec suppression des franchises et participations forfaitaires. La proposition correspond donc exactement à l'objectif revendiqué par le PCF ; +3 est directement documenté.",
    source: "https://www.pcf.fr/franchises_le_gouvernement_fait_payer_les_malades"
  },
  77: {
    response: -3,
    justification: "Désaccord très fort : le PCF combat les fermetures et regroupements dictés par les logiques budgétaires et défend des services hospitaliers publics de proximité, notamment les urgences et les maternités. Il a explicitement soutenu des mobilisations contre des fusions et fermetures de ce type. La proposition de fermer ou regrouper les petites structures est donc directement opposée à sa ligne ; -3 est adapté.",
    source: "https://www.pcf.fr/h_pital_public_stop_la_folie_des_fermetures_et_la_baisse_des_moyens"
  },
  78: {
    response: -3,
    justification: "Désaccord très fort : le PCF défend le recrutement national des enseignants par concours, leur statut de fonctionnaire et une formation publique ambitieuse. Son programme prévoit des dizaines de milliers de recrutements via les concours et des pré-recrutements sous statut d'élève-fonctionnaire. Il est donc à l'opposé d'un système où chaque chef d'établissement recruterait librement ses enseignants ; -3 est adapté.",
    source: "https://www.pcf.fr/20_les_enseignant_e_s_retrouveront_les_moyens_d_exercer_leurs_missions"
  },
  79: {
    response: 3,
    justification: "Accord très fort : la commission Éducation du PCF considère que l'argent public devrait à terme être réservé à l'école publique et critique le financement public du privé lorsqu'il entretient la ségrégation scolaire. Conditionner les financements des établissements privés à des objectifs de mixité est donc au minimum pleinement compatible avec cette doctrine, qui va même plus loin ; +3 est adapté.",
    source: "https://www.pcf.fr/pour_la_transparence_des_financements"
  },
  80: {
    response: 2,
    justification: "Accord net : le programme municipal 2026 du PCF propose de lutter fortement contre les meublés touristiques et cite favorablement le dispositif parisien imposant une compensation en surface de logement et interdisant ces locations dans le neuf. Cela documente clairement un pouvoir municipal restrictif sur Airbnb, sans constituer pour autant une doctrine nationale d'interdiction générale ; +2 est adapté.",
    source: "https://www.pcf.fr/municipales_2026_le_programme"
  },
  82: {
    response: -3,
    justification: "Désaccord très fort : en mars 2026, le PCF condamne explicitement l'européanisation de la force nucléaire française et affirme que la force nucléaire ne doit servir que les impératifs de la défense nationale, tout en continuant à défendre le désarmement multilatéral. L'extension de la dissuasion française à la protection de partenaires européens est donc l'opposé direct de sa position ; -3 est adapté.",
    source: "https://www.pcf.fr/impasse_dangereuse_du_federalisme_nucleaire_de_macron"
  },
  85: {
    response: 3,
    justification: "Accord très fort : en juin 2025, les députés communistes ont défendu le rétablissement de l'universalité des allocations familiales et expliqué vouloir revenir sur la modulation instaurée en 2015 selon le revenu des familles. Ils présentent leur réforme comme une étape vers une « universalité pleine et entière ». La proposition d'allocations non modulées selon le revenu correspond donc directement à leur objectif ; +3 est plus précis que +2.",
    source: "https://groupe-communiste.assemblee-nationale.fr/interventions/discussions-ge%CC%81ne%CC%81rales/article/versement-des-allocations-familiales-des-le-premier-enfant-ppl"
  }
});

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
