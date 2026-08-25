// Audit documentaire du Parti socialiste d'août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const PS_OVERRIDES = {
  "1": {
    "justification": "Désaccord net : le PS refuse une baisse générale des prélèvements qui serait financée par des coupes dans les services publics ou la protection sociale. Son projet privilégie une fiscalité plus progressive et des investissements publics, tout en pouvant soutenir des baisses ciblées de prélèvements. Le désaccord avec l’arbitrage général de la question est donc net sans être maximal.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "2": {
    "justification": "Position intermédiaire : le PS reconnaît la légitimité de certains écarts liés au travail, à la qualification ou à l’initiative, mais considère que les inégalités actuelles résultent aussi de l’héritage, de la concentration du patrimoine et des rapports économiques. Il ne valide donc ni l’acceptation générale des inégalités fondées sur le mérite, ni leur rejet absolu.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "3": {
    "justification": "Accord net : le projet socialiste renforce fortement la progressivité de l’impôt, taxe davantage le capital et les grandes fortunes et vise explicitement une réduction des inégalités. L’orientation correspond directement à la question, mais le PS conserve une fiscalité graduée et ciblée plutôt qu’une taxation maximale de tous les hauts revenus et patrimoines.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "5": {
    "response": 3,
    "justification": "Accord très fort : le projet socialiste prévoit une hausse importante du salaire minimum, avec un objectif de SMIC porté à environ 1 690 euros net, ainsi qu’une dynamique de revalorisation des salaires au-dessus du minimum. L’augmentation significative du SMIC est donc une proposition explicite et centrale.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "6": {
    "justification": "Désaccord modéré : le PS veut renforcer les services publics et soustraire plusieurs biens essentiels à une logique purement marchande, mais il ne nie pas l’utilité ni l’efficacité des entreprises privées dans de nombreux secteurs. La thèse d’une supériorité générale du privé, y compris dans les services essentiels, rencontre donc une réserve réelle mais limitée.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "8": {
    "response": -2,
    "justification": "Désaccord net : le projet socialiste entend reprendre en main les marchés lorsque la concurrence produit des effets sociaux, territoriaux ou écologiques indésirables et donne une place importante à la réglementation, à la planification et à l’intervention publique. La concurrence reste utile dans certains secteurs, mais elle n’est pas considérée comme généralement préférable à la règle publique.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "9": {
    "response": -3,
    "justification": "Désaccord très fort : le PS conteste l’idée que le retour à l’équilibre budgétaire doive passer par une réduction des politiques sociales. Ses propositions budgétaires privilégient davantage de recettes sur les hauts revenus, le capital et certaines rentes, tout en protégeant la Sécurité sociale et les services publics. La contrepartie précise de la question est donc frontalement rejetée.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "10": {
    "justification": "Accord très fort : le PS défend un niveau élevé de protection sociale, de services publics et de solidarité collective et accepte une fiscalité significative pour les financer, à condition qu’elle soit progressive. Le principe posé par la question correspond directement au cœur de son modèle social.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "11": {
    "justification": "Accord net : encadrement des prix dans certains secteurs, régulation des marchés, investissements publics, planification et conditionnement des aides aux entreprises font partie des outils revendiqués par le PS lorsque le marché produit des résultats socialement indésirables. L’intervention est forte, sans aller jusqu’à substituer systématiquement l’État au marché.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "12": {
    "justification": "Désaccord net : le PS reste attaché à des systèmes collectifs obligatoires de retraite, d’assurance maladie et de protection sociale financés par la solidarité. Des choix individuels complémentaires peuvent exister, mais il ne propose pas de transformer une part importante de ces cotisations en budgets librement utilisables par chacun.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "13": {
    "justification": "Accord très fort : le PS défend explicitement l’égalité des droits, l’autonomie personnelle et la liberté des modes de vie, notamment sur les droits des femmes, des personnes LGBT+ et les choix familiaux. L’éloignement des normes traditionnelles n’est pas présenté comme un motif de restriction.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "14": {
    "response": 3,
    "justification": "Accord très fort : le projet socialiste 2026 propose de supprimer l’article 49.3 pour les lois ordinaires mais de le conserver pour les lois de finances et de financement de la Sécurité sociale. Le PS choisit donc explicitement de maintenir un mécanisme permettant à un gouvernement de faire adopter un budget sans vote positif de l’Assemblée lorsque la situation parlementaire est bloquée.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "15": {
    "response": 1,
    "justification": "Accord modéré : le PS accepte des politiques redistributives, des obligations antidiscriminatoires, la parité et d’autres règles contraignantes pour corriger certaines inégalités. Il place néanmoins des limites fortes à ces contraintes au nom des libertés individuelles et des droits fondamentaux. L’accord avec le principe général existe donc, mais reste circonscrit.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "16": {
    "justification": "Accord très fort : le PS ne se limite pas à l’égalité juridique formelle et défend des politiques actives contre les discriminations systémiques, les inégalités de genre, de classe ou d’origine et les obstacles persistants à l’égalité réelle. La logique correctrice de la question est pleinement assumée.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "18": {
    "justification": "Désaccord modéré : le PS accorde une place au patrimoine culturel et aux repères communs, mais privilégie l’évolution des droits et des normes sociales lorsque les traditions entrent en tension avec l’égalité ou l’autonomie individuelle. La tradition n’est donc pas rejetée en soi, sans pour autant bénéficier d’une présomption forte de préservation.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "19": {
    "justification": "Désaccord net : le PS ne fixe pas comme objectif général de réduire le nombre d’immigrés entrant en France. Il défend des voies légales, le droit d’asile, des régularisations encadrées et une politique d’intégration, tout en acceptant le contrôle des frontières et des règles d’admission. Le désaccord est donc net mais pas maximal.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "20": {
    "justification": "Accord net : le PS souligne la contribution des travailleurs étrangers à l’économie, aux métiers en tension et au financement collectif et refuse de présenter l’immigration comme un coût global. L’argument économique existe clairement, mais il n’est pas le seul fondement de sa politique migratoire.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "22": {
    "justification": "Désaccord net : le PS s’oppose aux durcissements généraux du droit du sol et de l’accès à la nationalité et défend une citoyenneté plus inclusive. Il conserve néanmoins des conditions juridiques et administratives d’acquisition de la nationalité, ce qui justifie un désaccord fort mais non absolu.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "23": {
    "justification": "Désaccord net : le PS rejette une politique automatique d’expulsion des étrangers condamnés et défend l’individualisation des situations, les protections familiales et le respect des droits fondamentaux. Il n’exclut toutefois pas toute expulsion de personnes condamnées lorsque les conditions légales sont réunies, notamment dans les cas les plus graves.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "24": {
    "justification": "Désaccord net : la politique migratoire socialiste repose sur les droits, l’intégration et le pluralisme plutôt que sur la recherche d’une homogénéité culturelle. Le PS peut valoriser des repères républicains communs, mais ne fait pas de la cohésion culturelle un motif autonome de réduction globale de l’immigration.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "25": {
    "justification": "Accord très fort : le PS défend le droit d’asile et un accueil digne des personnes fuyant la guerre ou les persécutions, avec les moyens publics nécessaires. Les contraintes budgétaires ne sont pas présentées comme un motif suffisant pour refuser cette protection.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "26": {
    "justification": "Désaccord modéré : le PS souhaite une justice pénale efficace et des peines réellement exécutées, mais ne porte pas un objectif général d’allongement des peines ou d’augmentation massive de l’incarcération. Il développe également les alternatives à la détention et la réinsertion. La réserve envers une politique systématiquement plus carcérale reste donc modérée.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "27": {
    "justification": "Accord net : le projet socialiste donne une place importante à la prévention, à la police de proximité, à l’éducation, à la réinsertion et au traitement des facteurs sociaux de la délinquance. La sanction demeure nécessaire, mais la prévention est clairement considérée comme un outil central de réduction durable de la criminalité.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "28": {
    "justification": "Désaccord modéré : le PS veut renforcer les moyens de la police et du renseignement tout en développant les contrôles, la déontologie, le contrôle du juge et les garanties attachées aux libertés publiques. Il n’accepte pas comme principe général d’accroître les pouvoirs policiers au prix d’un recul substantiel des libertés.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "30": {
    "response": 2,
    "justification": "Accord net : le PS place la transition climatique parmi ses priorités économiques et accepte des investissements, des réglementations et des transformations qui peuvent peser sur certaines activités à court terme. Le projet cherche toutefois à concilier transition, emploi et prospérité plutôt qu’à assumer explicitement une baisse générale de la croissance ; +2 est donc plus précis que +3.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "31": {
    "response": 1,
    "justification": "Accord modéré : le PS accepte la fiscalité carbone et des signaux-prix sur les énergies fossiles lorsqu’ils sont accompagnés de compensations sociales et d’alternatives accessibles. Il ne défend pas pour autant une hausse importante et générale du prix des énergies fossiles supportée directement par les ménages. L’accord avec l’énoncé reste donc limité.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "33": {
    "response": -2,
    "justification": "Désaccord net : le PS combine fiscalité écologique et mécanismes économiques avec une forte planification, des normes, des interdictions ciblées et des investissements publics. Il ne propose pas que la transition repose principalement sur le marché plutôt que sur les interdictions ; la hiérarchie posée par la question est donc nettement contraire à sa doctrine.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "34": {
    "justification": "Accord net : le PS accepte des interdictions de substances, produits ou pratiques particulièrement nocifs et soutient des normes environnementales contraignantes même lorsqu’elles limitent certains choix de consommation. Il conserve toutefois une logique d’accompagnement et de transition, ce qui justifie un accord fort sans nécessairement être maximal.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "35": {
    "justification": "Accord net : le PS reconnaît une responsabilité accrue des pays riches et historiquement les plus émetteurs dans le financement climatique international et dans l’aide aux pays vulnérables. Il défend néanmoins un effort international partagé plutôt que l’idée que les pays riches supporteraient presque seuls l’ensemble du coût mondial.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "36": {
    "justification": "Accord très fort : le PS défend une intégration européenne approfondie et souhaite mutualiser davantage de compétences et de capacités dans des domaines stratégiques comme la défense, l’énergie, l’industrie ou la politique extérieure. Le renforcement du poids européen par davantage d’action commune correspond directement à sa ligne.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "37": {
    "justification": "Désaccord très fort : le PS considère qu’une partie de la souveraineté française est plus efficace lorsqu’elle est exercée en commun au niveau européen. Préserver au maximum les compétences nationales même au prix d’une influence européenne plus faible va donc directement à l’encontre de son projet.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "38": {
    "justification": "Accord très fort : le PS inscrit durablement son projet dans la zone euro, souhaite réformer la gouvernance économique européenne et renforcer les instruments communs plutôt que retrouver une monnaie nationale. Son engagement en faveur de l’euro est très fort, même si le programme formule moins explicitement le bilan coût-avantage exact de la question.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "39": {
    "justification": "Accord très fort : le PS veut davantage de règles, de politiques et de capacités communes européennes dans plusieurs domaines économiques, sociaux, écologiques et stratégiques. L’orientation est clairement favorable à une Union disposant de moyens normatifs plus importants.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "40": {
    "justification": "Désaccord net : le PS privilégie la réforme des règles européennes, la négociation et la construction de majorités à l’échelle de l’Union plutôt qu’une doctrine générale de désobéissance unilatérale. Des conflits ponctuels peuvent exister, mais le respect et la transformation du cadre européen restent sa stratégie centrale.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "41": {
    "justification": "Désaccord net : le PS veut renforcer la taxation des patrimoines élevés et des grandes fortunes et ne propose pas de supprimer toute fiscalité spécifique sur le patrimoine immobilier important. La suppression pure de l’IFI sans mécanisme patrimonial de remplacement est donc contraire à son orientation, même si son projet fiscal dépasse largement le seul immobilier.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "42": {
    "response": 2,
    "justification": "Accord net : le projet socialiste veut renforcer la progressivité des droits de succession sur les transmissions importantes tout en protégeant l’immense majorité des héritages ordinaires. Le principe de taxer davantage au-delà d’un seuil élevé est donc explicite, mais le ciblage sur les très grandes transmissions justifie +2 plutôt qu’un accord maximal.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "43": {
    "justification": "Accord net : le PS veut limiter l’évitement fiscal des très grandes fortunes, renforcer l’exit tax et maintenir une contribution de certains contribuables fortunés après leur départ. Le projet ne décrit toutefois pas une imposition permanente et sans limite de l’ensemble du patrimoine mondial après expatriation ; +2 reste donc un calibrage prudent.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "44": {
    "justification": "Désaccord net : le PS veut encadrer plus strictement les sanctions de France Travail, protéger l’indemnisation et éviter les radiations liées au refus d’emplois précaires ou inadaptés. Il ne supprime pas toute obligation de recherche d’emploi ni tout barème de sanctions. La perte importante d’allocations après plusieurs refus raisonnables rencontre donc un désaccord net sans être absolu.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "45": {
    "response": 2,
    "justification": "Accord net : le PS veut lutter durablement contre la vie chère outre-mer par la régulation des marges, la lutte contre les monopoles, le bouclier qualité-prix et des mécanismes de continuité territoriale. Le programme n’engage cependant pas clairement l’État à subventionner sans limite le fret ou les prix jusqu’à un quasi-alignement systématique avec l’Hexagone ; +2 est plus précis que +3.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "46": {
    "response": -2,
    "justification": "Désaccord net : le PS cherche à sécuriser les parcours professionnels, à limiter la précarité et à protéger le contrat de travail plutôt qu’à faciliter fortement la rupture des CDI pour accroître la mobilité du marché du travail. Il peut accepter des adaptations du droit du travail, mais rejette la prémisse selon laquelle la protection du CDI serait globalement excessive.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "47": {
    "justification": "Désaccord net : le PS réaffirme le rôle central du système de retraite par répartition et rejette une évolution structurelle qui ferait de la capitalisation un second pilier obligatoire ou majeur. Des dispositifs d’épargne retraite facultatifs peuvent subsister, ce qui distingue cette position d’une interdiction totale de toute capitalisation.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "48": {
    "response": -3,
    "justification": "Désaccord très fort : le PS veut revenir sur le relèvement récent de l’âge légal et faire dépendre les départs de choix politiques, des carrières et de la pénibilité plutôt que d’une formule automatique liée à l’espérance de vie. L’indexation automatique proposée par la question est donc directement contraire à sa ligne.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "49": {
    "justification": "Désaccord net : le modèle socialiste repose sur des droits sociaux relativement universels et sur la solidarité, et non sur une forte conditionnalité générale à la durée de cotisation ou de présence sur le marché du travail. Certaines prestations contributives dépendent naturellement des cotisations, mais le principe général de la question va plus loin que sa doctrine.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "50": {
    "response": 2,
    "justification": "Accord net : le PS veut conditionner les aides publiques aux entreprises à des objectifs sociaux, écologiques et fiscaux, prévoir leur remboursement en cas de non-respect et encadrer les distributions aux actionnaires. En revanche, le mécanisme précis limitant simultanément dividendes et rémunérations des dirigeants jusqu’au remboursement complet n’est pas formulé comme une règle générale. +2 est donc plus rigoureux que +3.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "51": {
    "justification": "Accord net : le PS veut utiliser les participations publiques, la commande publique et la stratégie de l’État pour orienter les entreprises vers l’investissement, l’emploi, la souveraineté industrielle et la transition écologique. L’État actionnaire est donc conçu comme un outil stratégique de long terme, sans devenir l’unique instrument de politique industrielle.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "52": {
    "justification": "Désaccord net : le PS accepte certaines simplifications administratives, mais refuse qu’elles se traduisent par un affaiblissement significatif des protections sociales ou environnementales. Son projet privilégie au contraire des normes plus exigeantes dans plusieurs domaines. La concession centrale de la question est donc nettement rejetée.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "54": {
    "justification": "Désaccord net : le PS combat les dispositifs de préférence nationale et défend l’égalité d’accès aux droits sociaux pour les étrangers légalement installés, sous réserve des conditions générales applicables aux prestations. Une restriction beaucoup plus forte pendant les premières années après l’arrivée est donc contraire à sa ligne.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "55": {
    "response": 0,
    "justification": "Position intermédiaire : le PS reconnaît les besoins de l’économie, ouvre des voies spécifiques aux étudiants, chercheurs et travailleurs dans certains secteurs, mais refuse de réduire l’immigration à une sélection par niveau de qualification. Il défend aussi des régularisations par le travail et des voies de mobilité pour des personnes peu qualifiées. Aucun arbitrage net en faveur de « plus de qualifiés contre moins de peu qualifiés » ne se dégage.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "56": {
    "justification": "Accord très fort : le PS défend le droit du sol et l’acquisition de la nationalité à la majorité pour les personnes nées et ayant grandi en France de parents étrangers, sans exiger une démonstration subjective particulière d’attachement culturel. La logique de la question correspond directement à cette position.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "57": {
    "justification": "Désaccord net : le PS met l’accent sur l’apprentissage du français, les droits et l’intégration après l’arrivée, mais ne défend pas un pouvoir général de refuser l’entrée à une personne juridiquement admissible sur la seule anticipation de sa volonté d’intégration culturelle. Le désaccord est donc substantiel.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "58": {
    "justification": "Accord net : le PS défend le pluralisme culturel et religieux et considère que des pratiques différentes de celles de la majorité sont légitimes tant qu’elles respectent la loi, les droits fondamentaux et l’égalité. Il maintient néanmoins un attachement fort à la laïcité et aux règles communes, ce qui justifie +2 plutôt que +3.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "59": {
    "justification": "Position intermédiaire : le PS accepte le renseignement préventif et certaines mesures administratives lorsqu’un risque terroriste sérieux est identifié, mais veut renforcer le contrôle du juge, les garanties procédurales et l’évaluation des lois d’exception. Sa position combine donc prévention sécuritaire et protection des libertés.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "60": {
    "justification": "Accord net : le PS défend une conception large de la liberté d’expression et ne souhaite pas sanctionner des propos uniquement parce qu’ils sont offensants, tant qu’ils restent dans les limites fixées par la loi concernant notamment la haine, les menaces, le harcèlement ou l’appel à la violence. +2 correspond à cette protection assortie de limites.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "62": {
    "justification": "Accord très fort : le PS accepte la fiscalité carbone lorsqu’elle produit un effet réel sur les émissions et prévoit explicitement de compenser son impact sur les ménages populaires par des mécanismes redistributifs. La combinaison d’un signal-prix maintenu et d’une compensation ciblée correspond très directement à la question.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "63": {
    "response": 2,
    "justification": "Accord net : le PS soutient la sortie progressive des véhicules thermiques neufs et l’électrification des mobilités, mais insiste sur les aides, le leasing social et l’accessibilité des véhicules propres. L’objectif de transition est clair, tandis que l’acceptation explicite d’une hausse du prix moyen des véhicules l’est moins ; +2 est donc plus précis que +3.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "64": {
    "justification": "Position intermédiaire : le PS défend à la fois le maintien d’une composante nucléaire importante et une montée en puissance forte des énergies renouvelables. Sa ligne peut être résumée par le nucléaire autant que nécessaire et les renouvelables autant que possible. Il ne choisit donc pas clairement de réduire les investissements renouvelables pour privilégier le nucléaire.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  },
  "65": {
    "response": 1,
    "justification": "Accord modéré : le PS place les objectifs climatiques au-dessus de certains intérêts économiques de court terme et accepte des transformations coûteuses. Mais il ne s’engage pas sur l’arbitrage extrême et chiffré de la question — baisse de 20 % des émissions, perte de 3 % de PIB et absence d’effort comparable à l’étranger. +1 reflète la priorité climatique sans lui attribuer un scénario non documenté.",
    "source": "https://projet-socialiste.fr/projet/vivre-avec-la-nature/"
  },
  "66": {
    "justification": "Désaccord modéré : le PS valorise l’expertise, les institutions indépendantes et l’évaluation des politiques publiques, mais son projet institutionnel cherche surtout à renforcer le Parlement, le contrôle démocratique et la participation citoyenne. L’expertise doit éclairer la décision plutôt que remplacer les responsables élus.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "67": {
    "justification": "Position intermédiaire : le PS accepte qu’un gouvernement prenne des décisions difficiles et parfois impopulaires, mais insiste sur la légitimité parlementaire, la négociation sociale et la participation citoyenne. Aucun principe général ne permet de conclure qu’une décision dite économiquement nécessaire devrait être prise sans rechercher d’approbation politique immédiate.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "68": {
    "justification": "Accord net : le PS veut développer les référendums, les conventions citoyennes et d’autres formes de démocratie participative. Il accepte donc que les citoyens interviennent sur des sujets complexes, mais souhaite généralement accompagner cette participation d’information, de délibération et de garanties institutionnelles plutôt que multiplier des votes sans préparation.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "69": {
    "response": -3,
    "justification": "Désaccord très fort : le projet socialiste repose sur l’égalité du suffrage et cherche au contraire à élargir la participation politique, notamment par le vote à 16 ans. Donner davantage de poids politique aux citoyens jugés plus compétents ou mieux informés introduirait une hiérarchie entre électeurs directement contraire à ce principe.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "70": {
    "justification": "Désaccord très fort : le PS veut rééquilibrer la Ve République au profit du Parlement, limiter les pouvoirs unilatéraux de l’exécutif et renforcer les contre-pouvoirs. Accroître encore les pouvoirs présidentiels afin de contourner les blocages parlementaires est donc directement opposé à son projet institutionnel.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "71": {
    "response": 1,
    "justification": "Accord modéré : le PS veut rendre la représentation parlementaire beaucoup plus proportionnelle, mais son projet 2026 retient un système mixte inspiré du modèle allemand plutôt qu’une proportionnelle intégrale pure. La direction de la réforme correspond à la question, tandis que son intensité est nettement moindre ; +1 est donc préférable à +2.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "72": {
    "justification": "Accord modéré : le PS considère l’apprentissage du français et la participation à la vie collective comme des éléments importants de l’intégration et peut les associer au parcours de séjour. Il refuse toutefois une logique excessivement punitive ou des conditions culturelles subjectives. +1 traduit cette exigence d’intégration relativement modérée.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "73": {
    "justification": "Accord très fort : le PS explique principalement les écarts de délinquance par les inégalités, la ségrégation, la pauvreté, l’âge et les conditions sociales plutôt que par une culture d’origine. Cette lecture structurelle est au cœur de sa politique de prévention et correspond directement à la question.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "75": {
    "justification": "Accord très fort : le projet socialiste prévoit de restreindre l’installation de nouveaux médecins libéraux dans les zones déjà bien dotées, sauf notamment en cas de remplacement, afin d’orienter les nouvelles installations vers les territoires sous-dotés. Cette mesure va au moins aussi loin que le conventionnement sélectif décrit par la question.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "77": {
    "justification": "Désaccord net : le PS veut maintenir un maillage hospitalier de proximité, lutter contre les déserts médicaux et éviter les fermetures de maternités ou d’urgences sans solution territoriale satisfaisante. Il n’exclut toutefois pas toute réorganisation lorsque la qualité et la sécurité des soins l’exigent, ce qui empêche un désaccord maximal.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "78": {
    "justification": "Désaccord net : le PS demeure attaché à un service public national de l’éducation, à des règles collectives de recrutement et de carrière et à une gouvernance pédagogique qui ne repose pas principalement sur le pouvoir du chef d’établissement. Il ne propose pas de donner aux directions un rôle large de recrutement et d’évaluation individuelle des enseignants.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "80": {
    "justification": "Accord net : le PS veut donner aux communes des pouvoirs importants pour encadrer ou interdire certains meublés touristiques dans les zones en tension afin de préserver le logement permanent. Ces dispositifs sont ciblés sur les territoires concernés et ne constituent pas une interdiction nationale générale, ce qui justifie +2.",
    "source": "https://projet-socialiste.fr/projet/refaire-societe/"
  },
  "81": {
    "justification": "Accord très fort : le PS soutient la poursuite d’une aide militaire, financière et diplomatique substantielle à l’Ukraine aussi longtemps que son territoire reste occupé et que sa sécurité est menacée. Cette position est constante dans sa ligne européenne et internationale.",
    "source": "https://projet-socialiste.fr/projet/pacifier-le-monde/"
  },
  "82": {
    "justification": "Accord très fort : le projet socialiste veut renforcer la protection du territoire européen par la dissuasion française tout en maintenant explicitement la souveraineté nationale sur la décision ultime d’emploi de l’arme nucléaire. La formulation correspond presque directement à la question.",
    "source": "https://projet-socialiste.fr/projet/pacifier-le-monde/"
  },
  "83": {
    "justification": "Accord très fort : les socialistes ont très majoritairement soutenu la loi permettant une aide à mourir strictement encadrée pour les personnes majeures atteintes d’une affection grave et incurable provoquant des souffrances importantes. La position parlementaire correspond directement à la question.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/scrutins/8280"
  },
  "84": {
    "response": 2,
    "justification": "Accord net : le projet socialiste veut sortir le grand âge de la marchandisation, développer fortement les EHPAD publics et non lucratifs et rapprocher les établissements commerciaux d’un modèle non lucratif. Cette orientation va clairement vers une réduction structurelle du rôle des groupes lucratifs, mais le texte n’établit pas une interdiction immédiate et absolue de tout opérateur privé lucratif ; +2 est donc plus précis que +3.",
    "source": "https://projet-socialiste.fr/projet/etre-en-securites/"
  },
  "85": {
    "response": 2,
    "justification": "Accord net : des responsables et députés socialistes ont récemment défendu le retour au caractère universel des allocations familiales et contesté leur modulation selon le revenu. Cette orientation marque une rupture avec la modulation instaurée sous le quinquennat Hollande. Le principe est désormais clairement soutenu dans le débat parlementaire, mais il reste moins central et explicite dans le projet national 2026 ; +2 est donc prudent.",
    "source": "https://www.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/CRSANR5L17S2025O1N227"
  },
  "86": {
    "justification": "Accord modéré : le groupe socialiste a soutenu le renforcement de la protection des mineurs face aux réseaux sociaux et le principe d’un seuil d’âge, mais les positions sur l’âge exact de 15 ans et sur les modalités d’application ne sont pas totalement homogènes. L’orientation va donc dans le sens de la question sans justifier un accord plus fort.",
    "source": "https://questions.assemblee-nationale.fr/dyn/17/scrutins/8431"
  },
  "87": {
    "justification": "Accord net : le PS veut privilégier des solutions numériques souveraines, des logiciels ouverts et des infrastructures européennes ou françaises pour les administrations publiques et réduire les dépendances extraterritoriales. Il ne dit toutefois pas qu’il faudrait accepter sans limite des modèles sensiblement moins performants ou beaucoup plus coûteux ; +2 reste donc adapté.",
    "source": "https://projet-socialiste.fr/projet/vivre-libres/"
  }
};

const psParty = DATA.entities.find(entity => entity.id === 'ps');
if (psParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(PS_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) psParty.responses[index] = override.response;
    if (override.justification) psParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(psParty.sources)) psParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (psParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  psParty.axisScores = scores;
}
