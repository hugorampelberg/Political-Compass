// Audit documentaire du MoDem d'août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const MODEM_OVERRIDES = {
  "1": {
    "justification": "Accord modéré : le MoDem veut alléger les prélèvements qui pèsent sur le travail et l'appareil productif, tout en faisant de la maîtrise de la dépense publique une condition du redressement. Il ne propose toutefois pas une baisse générale et indifférenciée de la fiscalité du travail et du capital ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2441"
  },
  "2": {
    "justification": "Position intermédiaire : le MoDem valorise le travail, l'initiative et la responsabilité individuelle, mais insiste simultanément sur la correction des inégalités de destin et sur une solidarité forte. Il n'affirme donc ni que les inégalités issues du mérite sont globalement acceptables, ni qu'elles doivent être systématiquement réduites.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "3": {
    "response": 2,
    "justification": "Accord net : Marc Fesneau défend une contribution accrue des plus fortunés, un impôt sur la fortune improductive et le maintien d'une contribution minimale sur les hauts revenus, tout en protégeant davantage le capital productif. Cela correspond à une hausse ciblée mais réelle de la fiscalité des hauts patrimoines et revenus ; +2 est plus précis que +1.",
    "source": "https://www.mouvementdemocrate.fr/actualites/marc-fesneau-nous-proposons-un-impot-sur-la-fortune-improductive-image-7951-image"
  },
  "4": {
    "justification": "Désaccord modéré : aucune proposition récente du MoDem n'établit un ratio salarial légal obligatoire entre dirigeants et bas salaires. Le parti privilégie le partage de la valeur, l'intéressement, la participation et la gouvernance d'entreprise plutôt qu'un plafond uniforme fixé par la loi ; -1 reste donc prudent.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "5": {
    "justification": "Position intermédiaire : le MoDem veut relever les revenus du travail, mais met surtout l'accent sur le partage de la valeur, l'intéressement, la participation et la baisse du coût du travail. Aucune ligne actuelle n'appelle à une hausse significative générale du SMIC, sans pour autant rejeter toute revalorisation ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "6": {
    "justification": "Accord modéré : le MoDem accorde une place importante à l'entreprise privée, à l'innovation et à l'initiative économique, y compris dans des secteurs où public et privé coexistent. Il considère néanmoins la santé, l'éducation et plusieurs services essentiels comme des biens communs nécessitant une forte responsabilité publique ; +1 reste donc mesuré.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "7": {
    "justification": "Désaccord modéré : le MoDem préfère généralement la régulation, l'investissement stratégique et les participations publiques ciblées à la nationalisation. Il ne ferme toutefois pas la porte à une prise de contrôle exceptionnelle lorsqu'un actif stratégique est menacé ; -1 reflète cette préférence sans transformer la nationalisation en interdit doctrinal.",
    "source": "https://www.mouvementdemocrate.fr/relancer-la-production-7926"
  },
  "8": {
    "response": 0,
    "justification": "Position intermédiaire : le MoDem défend concurrence, innovation et simplification, mais également normes, régulation et politique industrielle lorsque l'intérêt général l'exige. Il n'établit pas de supériorité générale de la concurrence sur la réglementation ; 0 est donc plus rigoureux.",
    "source": "https://www.mouvementdemocrate.fr/relancer-la-production-7926"
  },
  "9": {
    "response": 3,
    "justification": "Accord très fort : le plan budgétaire défendu par François Bayrou et Marc Fesneau assume des économies importantes sur la dépense publique, y compris sur certaines prestations, l'assurance-maladie et l'assurance-chômage, afin de restaurer les comptes. La concession sociale contenue dans la question est donc explicitement acceptée ; +3 est justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/marc-fesneau-nous-proposons-un-impot-sur-la-fortune-improductive-image-7951-image"
  },
  "10": {
    "justification": "Accord modéré : le MoDem défend explicitement un modèle social élevé, avec santé, éducation, chômage et retraites protégés collectivement. Il insiste toutefois sur la nécessité de financer ce modèle par la production et la maîtrise des déficits plutôt que par une hausse générale de la fiscalité ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "11": {
    "justification": "Accord modéré : le MoDem accepte l'intervention publique, la régulation, les aides ciblées et la politique industrielle lorsque le marché ne répond pas aux objectifs sociaux ou stratégiques. Il ne propose pas pour autant une extension générale et beaucoup plus forte du rôle de l'État dans toute l'économie ; +1 convient.",
    "source": "https://www.mouvementdemocrate.fr/relancer-la-production-7926"
  },
  "12": {
    "response": -2,
    "justification": "Désaccord net : François Bayrou défend explicitement le modèle français de solidarité collective et le système de retraite par répartition, à l'opposé d'une logique où chacun financerait principalement sa propre protection. Des compléments individuels peuvent exister, mais le socle obligatoire reste central ; -2 est plus fidèle que -1.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-compromis-sur-les-retraites-est-portee-video-7819-video"
  },
  "13": {
    "justification": "Accord net : le MoDem défend la liberté individuelle, l'égalité des droits et la possibilité de vivre selon des choix personnels différents, tout en conservant une référence à des repères communs et à la famille. Cette ouverture est forte sans constituer un rejet de toute norme traditionnelle ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "14": {
    "justification": "Accord très fort : François Bayrou a assumé l'utilisation des mécanismes constitutionnels permettant l'adoption d'un budget en situation de blocage parlementaire, au nom de la continuité financière de l'État. La possibilité institutionnelle décrite par la question est donc directement acceptée ; +3 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-la-france-besoin-dun-budget-nous-devons-ladopter-au-plus-vite-objectif"
  },
  "15": {
    "justification": "Désaccord net : le MoDem cherche à réduire les inégalités par l'égalité des chances, la solidarité et la lutte contre les discriminations, mais reste attaché aux libertés individuelles et refuse d'en faire une variable d'ajustement générale. Certaines contraintes redistributives existent, sans justifier une adhésion au principe large de la question ; -2 reste cohérent.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "16": {
    "justification": "Accord net : le MoDem ne se limite pas à l'égalité juridique et défend des politiques actives contre les discriminations, les déterminismes sociaux et les inégalités de destin. Son approche reste universaliste et moins fondée sur des droits différenciés entre groupes ; +2 est adapté.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "17": {
    "justification": "Accord net : la décentralisation, la subsidiarité et l'adaptation locale des politiques publiques sont des principes anciens du MoDem. Le parti souhaite donner davantage de pouvoir normatif aux collectivités sans remettre en cause l'unité républicaine ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2427"
  },
  "18": {
    "justification": "Accord modéré : le MoDem valorise l'héritage culturel, la langue, les territoires et des repères communs, mais considère aussi que ces appartenances peuvent évoluer et se combiner avec d'autres identités. La préservation des traditions compte sans primer systématiquement sur l'évolution sociale ; +1 reste approprié.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "20": {
    "justification": "Accord net : le MoDem reconnaît l'utilité économique d'une immigration de travail organisée, notamment pour les secteurs en tension et l'activité productive. Cette utilité reste conditionnée à la maîtrise des flux et à l'intégration ; +2 est donc préférable à un accord maximal.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "21": {
    "justification": "Accord net : le MoDem ne défend pas une préférence nationale durable dans les prestations pour les étrangers légalement installés de longue date. Il exige des conditions de régularité et d'intégration, mais une fois celles-ci remplies, l'accès aux droits sociaux repose principalement sur la situation et non sur la nationalité ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "22": {
    "response": 1,
    "justification": "Accord modéré : François Bayrou considère légitime de demander à un jeune né en France de manifester explicitement sa volonté de devenir français plutôt que de laisser l'acquisition se produire sans démarche. La contrainte proposée reste légère et ne remet pas en cause le droit du sol ; +1 est le bon niveau.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "23": {
    "justification": "Accord net : le MoDem soutient l'éloignement effectif des étrangers condamnés pour les faits les plus graves et une meilleure exécution des décisions, tout en maintenant l'individualisation et les garanties juridiques. Le durcissement est réel sans devenir une automaticité absolue ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "25": {
    "response": 0,
    "justification": "Position intermédiaire : le MoDem défend le droit d'asile et la protection des personnes persécutées, mais François Bayrou dénonce aussi les détournements du système et insiste sur la maîtrise des admissions. Aucune ligne actuelle ne réclame d'augmenter globalement le nombre de réfugiés accueillis malgré un coût supérieur ; 0 est plus rigoureux.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "26": {
    "justification": "Position intermédiaire : le MoDem veut une réponse pénale plus rapide et effectivement exécutée, mais François Bayrou ne défend pas un allongement général des peines ni une forte hausse de l'incarcération comme objectif. La fermeté est recherchée sans adhésion à la contrepartie carcérale de la question ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
  },
  "27": {
    "justification": "Accord modéré : le MoDem donne une place importante à la prévention, à la réinsertion et à la lutte contre la récidive, tout en demandant simultanément une justice plus rapide et des sanctions réellement exécutées. La prévention n'efface donc pas la fermeté pénale ; +1 reste un compromis raisonnable.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
  },
  "28": {
    "justification": "Accord modéré : le MoDem soutient davantage de moyens policiers, de renseignement et d'outils de surveillance lorsqu'ils sont encadrés par le droit. Il reste attaché au contrôle du juge et aux libertés publiques, ce qui limite l'acceptation d'un recul général des libertés ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
  },
  "29": {
    "justification": "Accord modéré : les élus MoDem défendent des clauses miroir et des mesures de réciprocité afin que les importations agricoles respectent des exigences comparables à celles imposées en France. Le parti ne dit toutefois pas accepter sans réserve la disparition des produits les moins chers ; +1 reste donc prudent.",
    "source": "https://www.mouvementdemocrate.fr/actualites/geraldine-bannier-des-mesures-miroirs-dans-le-mercosur-sont-indispensables-pour-eviter"
  },
  "30": {
    "justification": "Accord modéré : le MoDem fait de la décarbonation une priorité et accepte des investissements et transformations coûteux, mais présente aussi la transition comme un moteur d'innovation et d'activité. Il n'assume pas explicitement une baisse de croissance comme objectif secondaire ; +1 reste le meilleur calibrage.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "31": {
    "justification": "Accord modéré : le MoDem accepte le signal-prix carbone et la hausse du coût des énergies fossiles comme levier de transition, mais insiste sur les compensations sociales et l'accessibilité de la transition. Il ne défend pas une hausse importante et uniforme supportée par tous les ménages ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "32": {
    "response": 3,
    "justification": "Accord très fort : en novembre 2025, Pascal Lecamp a défendu pour le groupe Les Démocrates une baisse de 1,4 point des cotisations salariales financée par un relèvement du taux normal de TVA de 20 % à 22 %. C'est presque exactement l'arbitrage décrit par la question ; +3 est justifié.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-ordinaire-de-2025-2026/troisieme-seance-du-jeudi-06-novembre-2025"
  },
  "33": {
    "justification": "Accord modéré : le MoDem soutient le prix du carbone, les incitations et l'innovation, tout en conservant des normes, des interdictions ciblées et des objectifs réglementaires. Sa préférence pour les mécanismes de marché existe mais n'est pas exclusive ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "34": {
    "justification": "Accord net : le programme écologiste du MoDem accepte des restrictions et interdictions sur des produits ou pratiques particulièrement polluants lorsque les alternatives existent et que l'objectif environnemental le justifie. L'accompagnement de la transition empêche seulement d'en faire une logique punitive systématique ; +2 reste cohérent.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "35": {
    "justification": "Accord modéré : le MoDem défend une solidarité climatique internationale plus importante de la part des économies développées, mais inscrit cet effort dans une coopération mondiale et européenne. La notion de part prépondérante n'est pas explicitement chiffrée ; +1 reste une lecture prudente.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "36": {
    "justification": "Accord net : le MoDem est l'un des partis français les plus favorables à l'intégration européenne et défend davantage d'action commune dans la défense, l'énergie, l'industrie et la politique extérieure. Il conserve néanmoins la subsidiarité et certaines compétences nationales ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/mouvement-d%C3%A9mocrate/europe-2312"
  },
  "37": {
    "justification": "Désaccord net : pour le MoDem, une souveraineté réellement efficace passe souvent par la capacité d'agir au niveau européen. Conserver une compétence nationale au prix d'une perte d'influence n'est donc pas une priorité, même si le parti ne souhaite pas supprimer la souveraineté française ; -2 reste cohérent.",
    "source": "https://www.mouvementdemocrate.fr/mouvement-d%C3%A9mocrate/europe-2312"
  },
  "38": {
    "justification": "Accord très fort : le MoDem défend depuis longtemps l'euro et l'intégration monétaire comme des instruments de stabilité et de puissance européennes. Le parti accepte clairement la perte de certains instruments nationaux comme contrepartie de cette appartenance ; +3 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/mouvement-d%C3%A9mocrate/europe-2312"
  },
  "39": {
    "justification": "Accord net : le MoDem veut davantage de politiques et de règles communes lorsqu'une action européenne est plus efficace, notamment sur le climat, la défense, l'industrie et les échanges. Il conserve le principe de subsidiarité, ce qui justifie +2 plutôt que +3.",
    "source": "https://www.mouvementdemocrate.fr/mouvement-d%C3%A9mocrate/europe-2312"
  },
  "40": {
    "justification": "Désaccord net : le MoDem cherche à faire évoluer les règles européennes par la négociation commune et rejette une stratégie générale de désobéissance nationale. Il peut contester certaines règles, mais pas faire de leur violation un instrument normal de politique économique ; -2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/mouvement-d%C3%A9mocrate/europe-2312"
  },
  "41": {
    "justification": "Désaccord net : Marc Fesneau propose de remplacer l'IFI par un impôt sur la fortune improductive à l'assiette plus large, afin de moins pénaliser l'investissement productif sans supprimer toute fiscalité spécifique du patrimoine. La suppression pure et simple demandée par Q41 est donc nettement rejetée ; -2 reste justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/marc-fesneau-nous-proposons-un-impot-sur-la-fortune-improductive-image-7951-image"
  },
  "42": {
    "justification": "Position intermédiaire : le MoDem souhaite faciliter la transmission pour une partie des familles tout en maintenant une fiscalité progressive sur les transmissions les plus élevées. Il n'existe pas de ligne actuelle en faveur d'une hausse générale des droits au-delà d'un seuil comparable à celui de la question ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2441"
  },
  "43": {
    "justification": "Accord modéré : Jean-Paul Mattei a proposé de renforcer l'exit tax en allongeant la période pendant laquelle certaines plus-values restent imposables après le départ de France. Ce n'est pas une taxation durable de l'ensemble du patrimoine mondial, mais le principe d'une obligation fiscale prolongée après expatriation va bien dans le sens de la question ; +1 reste défendable.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/amendements/1906A/AN/3918"
  },
  "44": {
    "justification": "Accord modéré : le MoDem accepte des obligations réelles de recherche d'emploi et des sanctions lorsque des offres raisonnables sont refusées de manière répétée. Le parti insiste cependant sur l'accompagnement et la proportionnalité plutôt que sur une perte massive automatique des droits ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-partir-du-10-juin-dessine-un-paysage-politique-nouveau-video-6951-video"
  },
  "45": {
    "justification": "Accord modéré : le MoDem accepte une intervention publique pour réduire la vie chère outre-mer, notamment sur les coûts de transport, la concurrence et certains prix essentiels. Aucune doctrine n'établit toutefois une garantie nationale permanente d'alignement des prix avec l'Hexagone ; +1 reste prudent.",
    "source": "https://www.mouvementdemocrate.fr/actualites/philippe-vigier-le-gouvernement-pris-bras-le-corps-le-sujet-de-lacces-leau-video-6526"
  },
  "46": {
    "justification": "Accord modéré : le MoDem a régulièrement défendu davantage de souplesse dans le marché du travail et des transitions professionnelles plus fluides. Il ne présente toutefois pas la protection du CDI comme la cause principale de l'exclusion des jeunes et précaires, ni ne veut supprimer les garanties contre les licenciements abusifs ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/archives/chomage-il-faut-sortir-du-deni-et-arreter-de-dire-ca-va-aller-mieux-car-il-y-quelque-chose"
  },
  "47": {
    "response": -2,
    "justification": "Désaccord net : François Bayrou fixe explicitement comme objectif de garantir l'avenir du système de retraite par répartition. Le MoDem accepte l'épargne et des compléments individuels, mais ne propose pas une réforme structurelle vers un régime mixte répartition-capitalisation ; -2 est plus fidèle que 0.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-compromis-sur-les-retraites-est-portee-video-7819-video"
  },
  "48": {
    "justification": "Accord modéré : François Bayrou relie l'équilibre des retraites à l'allongement de la vie et admet qu'un déplacement progressif de l'âge de départ peut être nécessaire. Il refuse cependant de réduire la réforme à une indexation automatique et mécanique sur l'espérance de vie ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-ce-sont-nos-actifs-et-nos-enfants-qui-paieront-laddition-de-notre"
  },
  "49": {
    "justification": "Accord modéré : le MoDem lie certaines prestations ou droits à l'activité, à la cotisation et à des obligations de participation au marché du travail. Il ne propose pas de conditionner fortement l'ensemble de la protection sociale à une longue durée de cotisation ; +1 reste donc mesuré.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "50": {
    "justification": "Accord net : Philippe Latombe a proposé de réduire un avantage fiscal public lorsque des entreprises distribuent des dividendes, ce qui établit une logique réelle de conditionnalité des aides au comportement de l'entreprise. La question va plus loin avec le remboursement intégral et les rémunérations dirigeantes, mais le principe central est suffisamment direct pour conserver +2.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/amendements/1906A/AN/2721"
  },
  "51": {
    "justification": "Accord modéré : le MoDem défend un État stratège, des participations publiques dans certains actifs sensibles et l'orientation de la politique industrielle vers la souveraineté et le long terme. Il n'en fait pas une règle générale d'intervention systématique dans toute entreprise où l'État est actionnaire ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/relancer-la-production-7926"
  },
  "52": {
    "justification": "Accord modéré : le MoDem veut simplifier fortement les démarches administratives et réduire certaines normes qui freinent la production. Il ne propose pas pour autant un affaiblissement général des protections sociales ou environnementales et maintient de nombreux standards ; +1 reste prudent.",
    "source": "https://www.mouvementdemocrate.fr/relancer-la-production-7926"
  },
  "53": {
    "justification": "Accord net : des responsables MoDem ont défendu la régularisation de travailleurs sans papiers durablement insérés, employés et sans trouble à l'ordre public, afin de sortir de situations d'exploitation. Le parti conserve des critères et une appréciation administrative, ce qui justifie +2 plutôt qu'un automatisme.",
    "source": "https://www.mouvementdemocrate.fr/actualites/erwan-balanant-il-faut-un-texte-juste-humaniste-et-efficace-video-6571-video"
  },
  "54": {
    "justification": "Position intermédiaire : le MoDem accepte certaines conditions de résidence, de régularité et d'intégration pour l'accès à certains droits, mais ne défend pas une exclusion générale des immigrés légaux de la protection sociale pendant leurs premières années. La proposition précise de Q54 n'est ni pleinement soutenue ni totalement rejetée ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "55": {
    "justification": "Position intermédiaire : le MoDem veut une immigration économique mieux choisie et valorise les qualifications, mais ne formule pas une politique consistant à augmenter l'immigration très qualifiée tout en réduisant simultanément l'immigration moins qualifiée. Les besoins des secteurs en tension peuvent aussi concerner des emplois moins qualifiés ; 0 reste justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
  },
  "56": {
    "response": -1,
    "justification": "Désaccord modéré : François Bayrou souhaite qu'un jeune né en France manifeste entre 16 et 18 ans sa volonté de devenir français, alors que Q56 prévoit une acquisition automatique sans déclaration supplémentaire. La formalité défendue reste très légère et ne remet pas en cause le droit du sol ; -1 correspond mieux que -2.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-droit-dasile-que-nous-defendons-est-completement-devoye-video-6608"
  },
  "57": {
    "justification": "Accord modéré : le MoDem accorde un poids réel à la maîtrise du français, au travail et au respect des règles communes dans l'admission et le séjour durable. Il ne propose toutefois pas un pouvoir général de refus fondé sur une anticipation subjective de la mauvaise intégration culturelle ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
  },
  "58": {
    "response": 1,
    "justification": "Accord modéré : le MoDem affirme que binationalité, identité régionale et appartenance européenne peuvent se renforcer et accepte le pluralisme culturel et religieux. Il exige parallèlement la langue, le respect des règles et des repères communs ; +1 décrit mieux cette ouverture intégrationniste que le -1 précédent.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "59": {
    "justification": "Accord modéré : le MoDem accepte des outils de renseignement et de surveillance préventive ciblés lorsqu'un risque sérieux est identifié, y compris avant qu'une infraction soit constituée. Il maintient des exigences de contrôle, de proportionnalité et de garanties juridictionnelles ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
  },
  "60": {
    "justification": "Accord net : le MoDem demeure attaché à une conception large de la liberté d'expression et à la protection du débat démocratique, y compris lorsque des propos sont choquants ou offensants mais restent licites. Les limites pénales concernant menaces, harcèlement et haine demeurent ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/democratie-et-citoyennete-2424"
  },
  "62": {
    "justification": "Accord net : le MoDem soutient la tarification du carbone tout en défendant des compensations ou mécanismes redistributifs pour que l'effort ne pèse pas disproportionnellement sur les ménages modestes. Le maintien du signal-prix accompagné socialement correspond directement à la question ; +2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "63": {
    "response": 1,
    "justification": "Accord modéré : le MoDem soutient l'électrification et la sortie progressive des véhicules thermiques, mais insiste sur l'accessibilité économique, les aides et les alternatives pour les ménages. L'objectif de décarbonation est clair, tandis que l'acceptation d'une hausse moyenne des prix l'est moins ; +1 est plus précis que +2.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "64": {
    "justification": "Position intermédiaire : François Bayrou et le MoDem défendent une place importante du nucléaire tout en refusant de l'opposer aux renouvelables. Le parti veut développer les deux afin de réduire les énergies fossiles ; il ne soutient donc pas l'arbitrage consistant à réduire les investissements renouvelables au profit du nucléaire.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-le-centre-cest-la-garantie-du-pluralisme-en-refusant-la-bipolarisation"
  },
  "65": {
    "justification": "Position intermédiaire : le MoDem défend une action climatique ambitieuse mais coordonnée au niveau européen et international et ne s'est pas engagé à accepter une perte de 3 % du PIB si les autres pays ne fournissent aucun effort comparable. Le scénario précis de la question n'est donc pas tranché ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2436"
  },
  "66": {
    "justification": "Accord modéré : le MoDem accorde une grande place à l'expertise, aux autorités indépendantes et à l'évaluation, mais considère qu'elles doivent éclairer la décision plutôt que remplacer la légitimité des élus. La préférence technicienne existe sans transfert général du pouvoir politique ; +1 reste défendable.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2427"
  },
  "67": {
    "justification": "Accord net : François Bayrou a explicitement assumé à Matignon des décisions budgétaires impopulaires qu'il jugeait nécessaires pour éviter une crise de la dette et restaurer les finances publiques. Le parti accepte donc qu'un gouvernement décide malgré l'impopularité immédiate, sous contrôle démocratique ; +2 reste justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/moment-budgetaire-de-verite-de-francois-bayrou-que-retenir-image-7842-image"
  },
  "68": {
    "justification": "Accord modéré : le MoDem souhaite développer la participation citoyenne, les consultations et le recours au référendum, mais dans un cadre préparé et articulé à la démocratie représentative. Il n'appelle pas à soumettre systématiquement les sujets techniques complexes à des votes populaires ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/democratie-et-citoyennete-2424"
  },
  "69": {
    "justification": "Désaccord net : le MoDem fonde sa conception démocratique sur l'égalité du suffrage et cherche à mieux informer et associer tous les citoyens, non à pondérer leur voix selon le diplôme ou la compétence. Aucun projet ne prévoit une hiérarchie politique entre électeurs ; -2 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/democratie-et-citoyennete-2424"
  },
  "70": {
    "response": -2,
    "justification": "Désaccord net : la tradition démocrate privilégie la proportionnelle, le compromis et la responsabilisation du Parlement. Le soutien ponctuel à des mécanismes permettant d'adopter un budget ne signifie pas une volonté de renforcer durablement le président contre le Parlement ; Q70 va au contraire contre cette culture institutionnelle, d'où -2.",
    "source": "https://www.mouvementdemocrate.fr/programme/democratie-et-citoyennete-2424"
  },
  "72": {
    "justification": "Accord très fort : François Bayrou relie explicitement la régularité et la durée du séjour à des efforts de travail, de maîtrise du français et d'acceptation des principes communs. Ces exigences correspondent directement à la logique d'intégration concrète décrite par Q72 ; +3 reste justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
  },
  "73": {
    "justification": "Position intermédiaire : le MoDem reconnaît à la fois le poids des facteurs sociaux, scolaires et économiques et celui de l'intégration, des normes communes et des trajectoires individuelles dans la délinquance. Il ne privilégie pas clairement l'un de ces ensembles d'explication au point de justifier un accord ou un désaccord net ; 0 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-ne-veux-pas-de-grandes-lois-destinees-faire-de-la-communication-video"
  },
  "75": {
    "justification": "Position intermédiaire : le MoDem partage l'objectif de mieux répartir les médecins, mais François Bayrou privilégie surtout des obligations ou consultations périodiques dans les zones sous-dotées plutôt qu'un conventionnement sélectif interdisant les nouvelles installations en zone bien dotée. Des élus centristes ont toutefois défendu des solutions plus contraignantes ; 0 reflète cette divergence réelle.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-je-pense-que-la-question-du-budget-est-assez-grave-pour-quelle-sadresse"
  },
  "76": {
    "response": -2,
    "justification": "Désaccord net : des députés Les Démocrates ont défendu le maintien d'un rôle substantiel des complémentaires et même la possibilité de leur déléguer la gestion de certains paniers de soins. Cela va nettement contre une prise en charge intégrale par l'Assurance maladie réduisant fortement les complémentaires ; -2 est plus fidèle que -1.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/amendements/0325/AN/1086"
  },
  "77": {
    "justification": "Accord modéré : le MoDem accepte la réorganisation territoriale de certaines activités hospitalières lorsque la qualité, la sécurité ou la disponibilité des équipes l'exigent, tout en défendant un accès de proximité et une lutte active contre les déserts médicaux. Il ne porte pas une politique générale de fermeture ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2445"
  },
  "78": {
    "justification": "Désaccord net : François Bayrou s'est explicitement opposé au recrutement des enseignants par les chefs d'établissement et ne souhaite pas transformer ces derniers en employeurs locaux disposant d'un fort pouvoir hiérarchique. Cette opposition directe à l'instrument décrit par Q78 justifie -2.",
    "source": "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-invite-de-bfm-politique-ce-dimanche-12h-video-5223-video"
  },
  "79": {
    "response": 1,
    "justification": "Accord modéré : le MoDem fait de la mixité sociale et de la lutte contre les inégalités scolaires des objectifs importants, mais aucune proposition identifiée n'impose de manière générale une modulation du financement du privé sous contrat selon un indicateur chiffré de mixité. Le principe est cohérent avec sa ligne, le mécanisme précis l'est moins ; +1 est plus rigoureux que +2.",
    "source": "https://www.mouvementdemocrate.fr/une-societe-unie-et-solidaire-7924"
  },
  "80": {
    "justification": "Accord modéré : le MoDem accepte que les communes disposent d'outils renforcés pour réguler les locations touristiques dans les zones tendues afin de protéger le logement permanent. Il ne défend pas une interdiction générale de toute location régulière d'une résidence secondaire ; +1 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/programme/propositions-2427"
  },
  "82": {
    "justification": "Accord très fort : Jean-Noël Barrot soutient l'ouverture d'un dialogue stratégique sur la dimension européenne de la dissuasion française tout en rappelant que la force reste autonome et que la décision d'emploi demeure française. Cette combinaison correspond presque exactement à Q82 ; +3 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/actualites/jean-noel-barrot-cest-le-moment-apres-des-decennies-dinsouciance-de-reprendre-notre"
  },
  "84": {
    "justification": "Position intermédiaire : Cyrille Isaac-Sibille critique fortement les dérives liées à la recherche de profit dans certains EHPAD et veut renforcer contrôle, gouvernance, effectifs et financement, mais il ne propose pas de supprimer le statut lucratif ni de convertir tous les établissements existants. Le statut futur reste présenté comme un sujet ouvert ; 0 est donc le meilleur score.",
    "source": "https://www.mouvementdemocrate.fr/sante/scandales-dans-les-ehpad-agir-vite-et-durablement-sur-les-conditions-de-travail-et-le"
  },
  "85": {
    "response": 3,
    "justification": "Accord très fort : Anne Bergantz défend explicitement des allocations familiales pleinement universelles, sans modulation liée aux revenus des parents et ouvertes dès le premier enfant. La proposition correspond directement à Q85 ; +3 est pleinement justifié.",
    "source": "https://www.mouvementdemocrate.fr/actualites/face-la-crise-de-la-natalite-refonder-notre-politique-familiale-pour-aider-le-desir"
  },
  "86": {
    "justification": "Accord très fort : Sarah El Haïry et plusieurs responsables MoDem soutiennent explicitement l'interdiction des réseaux sociaux aux moins de 15 ans, au nom de la protection de l'enfance. La mesure vise l'âge lui-même et non une simple autorisation parentale ; +3 reste adapté.",
    "source": "https://www.mouvementdemocrate.fr/dans-les-medias/sarah-el-hairy-face-des-outils-qui-transforment-nos-enfants-en-produit-nous-avons"
  },
  "87": {
    "justification": "Accord modéré : Philippe Latombe fait de la souveraineté numérique et de la commande publique vers des acteurs français ou européens un objectif explicite, notamment pour l'IA et les données publiques. Le parti ne dit toutefois pas qu'il faut accepter sans limite une baisse sensible de performance ou un surcoût important ; +1 reste le bon niveau.",
    "source": "https://www.mouvementdemocrate.fr/actualites/philippe-latombe-la-france-annonce-linstallation-de-35-nouveaux-datacenters-sur-le"
  }
};

const modemParty = DATA.entities.find(entity => entity.id === 'modem');
if (modemParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(MODEM_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) modemParty.responses[index] = override.response;
    if (override.justification) modemParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(modemParty.sources)) modemParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (modemParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  modemParty.axisScores = scores;
}
