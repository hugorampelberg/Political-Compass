// Questions, axes et métadonnées du questionnaire.
const QUESTIONNAIRE_DATA = {
  "meta": {
    "title": "French Political Compass",
    "subtitle": "Test politique multidimensionnel",
    "version": "2026-08-07",
    "questionCount": 80,
    "openQuestionCount": 5,
    "scale": {
      "min": -3,
      "max": 3
    }
  },
  "axes": [
    {
      "key": "economy",
      "name": "Économie",
      "short": "Économie",
      "negative": "Gauche économique",
      "positive": "Droite économique"
    },
    {
      "key": "authority",
      "name": "Libertés / autorité",
      "short": "Libertés",
      "negative": "Libertaire",
      "positive": "Autoritaire"
    },
    {
      "key": "europe",
      "name": "Europe",
      "short": "Europe",
      "negative": "Souverainiste",
      "positive": "Fédéraliste"
    },
    {
      "key": "ecology",
      "name": "Écologie",
      "short": "Écologie",
      "negative": "Techno-pragmatisme",
      "positive": "Transition interventionniste"
    },
    {
      "key": "immigration",
      "name": "Immigration / intégration",
      "short": "Immigration",
      "negative": "Restriction / assimilation",
      "positive": "Ouverture / multiculturalisme"
    },
    {
      "key": "democracy",
      "name": "Démocratie / institutions",
      "short": "Institutions",
      "negative": "Exécutif / expertise",
      "positive": "Participatif / parlementaire"
    }
  ],
  "axisMasses": {
    "economy": 17.4,
    "authority": 22.1,
    "europe": 4.6,
    "ecology": 8.8,
    "immigration": 10.9,
    "democracy": 5.5
  },
  "defaultPriority": "economy",
  "questions": [
    {
      "id": 1,
      "theme": "Économie",
      "text": "Il faut réduire les impôts sur le travail et le capital, même si cela implique de réduire certaines dépenses publiques.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 1,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 2,
      "theme": "Économie",
      "text": "Les inégalités économiques sont acceptables tant qu'elles résultent principalement du mérite, du travail ou de la prise de risque.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0.6,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 3,
      "theme": "Économie",
      "text": "L'État devrait davantage taxer les hauts revenus et les gros patrimoines afin de réduire les inégalités.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": -0.8,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 4,
      "theme": "Économie",
      "text": "Il vaut mieux avoir un niveau relativement élevé d'impôts et de prestations sociales que laisser davantage de responsabilités économiques aux individus.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 5,
      "theme": "Économie",
      "text": "Le salaire minimum devrait être augmenté significativement.",
      "defaultAnswer": -3,
      "note": "",
      "coefficients": {
        "economy": -1,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 6,
      "theme": "Économie",
      "text": "Les entreprises privées sont généralement plus efficaces que l'État pour fournir des biens et services, même dans certains secteurs essentiels.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 7,
      "theme": "Économie",
      "text": "L'État devrait pouvoir nationaliser temporairement ou durablement une entreprise privée lorsqu'elle contrôle une activité stratégique pour le pays.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": -0.8,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 8,
      "theme": "Économie",
      "text": "La concurrence est généralement préférable à la réglementation pour améliorer les prix, la qualité et l'innovation.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": 0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 9,
      "theme": "État",
      "text": "La France dépense trop d'argent public et devrait accepter de réduire certaines politiques sociales pour revenir à l'équilibre budgétaire.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0.8,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 10,
      "theme": "État",
      "text": "L'État devrait garantir un niveau élevé de protection sociale, même si cela implique une fiscalité importante.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 11,
      "theme": "État",
      "text": "Il est acceptable de s'endetter davantage pour financer des investissements publics rentables à long terme.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0.2,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 12,
      "theme": "État",
      "text": "L'État devrait intervenir beaucoup plus fortement dans l'économie lorsque le marché produit des résultats jugés socialement indésirables.",
      "explanation": "Par exemple : encadrer certains prix, subventionner des biens essentiels ou imposer davantage de règles aux entreprises lorsque certains services deviennent trop chers ou insuffisamment accessibles.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.6,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 13,
      "theme": "État",
      "text": "Les citoyens devraient avoir davantage de liberté pour choisir eux-mêmes comment utiliser leur argent plutôt que de passer par des systèmes publics obligatoires.",
      "explanation": "Par exemple : pouvoir choisir soi-même une plus grande part de sa retraite, de son assurance santé ou de sa protection sociale, plutôt que de cotiser uniquement à des dispositifs obligatoires.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": 0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 14,
      "theme": "Social / société",
      "text": "La société devrait accepter beaucoup plus largement les différents modes de vie, même lorsqu'ils s'éloignent des normes traditionnelles.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 15,
      "theme": "Social / société",
      "text": "L'État devrait être très prudent avant d'imposer des normes morales ou comportementales aux individus.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 16,
      "theme": "Social / société",
      "text": "La priorité donnée à l'égalité des résultats peut parfois justifier de limiter la liberté individuelle.",
      "explanation": "Par exemple : accepter davantage de redistribution, des quotas ou certaines règles contraignantes afin de réduire les écarts entre groupes, même si cela limite certains choix individuels.",
      "defaultAnswer": -3,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.8,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 17,
      "theme": "Social / société",
      "text": "Les politiques publiques devraient chercher à corriger activement les discriminations historiques ou structurelles entre groupes sociaux.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.3,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 18,
      "theme": "Social / société",
      "text": "La liberté d'expression devrait être protégée même lorsque des propos sont considérés comme offensants ou choquants.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 19,
      "theme": "Social / société",
      "text": "Certaines traditions et valeurs culturelles méritent d'être préservées même si elles évoluent moins vite que la société.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.6,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 20,
      "theme": "Immigration",
      "text": "La France devrait réduire significativement le nombre d'immigrants qu'elle accueille chaque année.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": -1,
        "democracy": 0
      }
    },
    {
      "id": 21,
      "theme": "Immigration",
      "text": "L'immigration économique est globalement bénéfique pour l'économie française.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.3,
        "democracy": 0
      }
    },
    {
      "id": 22,
      "theme": "Immigration",
      "text": "Les immigrés en situation régulière devraient bénéficier des mêmes droits sociaux que les Français après une période suffisamment longue de résidence et de cotisation.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.8,
        "democracy": 0
      }
    },
    {
      "id": 23,
      "theme": "Immigration",
      "text": "L'accès à la nationalité française devrait être rendu plus exigeant.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": -1,
        "democracy": 0
      }
    },
    {
      "id": 24,
      "theme": "Immigration",
      "text": "La France devrait être beaucoup plus stricte concernant l'expulsion des étrangers condamnés pour des crimes graves.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.8,
        "europe": 0,
        "ecology": 0,
        "immigration": -0.7,
        "democracy": 0
      }
    },
    {
      "id": 25,
      "theme": "Immigration",
      "text": "Même lorsque l'immigration est économiquement bénéfique, elle peut être légitimement limitée pour préserver la cohésion culturelle du pays.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.3,
        "europe": 0,
        "ecology": 0,
        "immigration": -0.8,
        "democracy": 0
      }
    },
    {
      "id": 26,
      "theme": "Immigration",
      "text": "La France devrait accueillir davantage de réfugiés lorsqu'ils fuient une guerre ou une persécution, même si cela représente un coût économique.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 1,
        "democracy": 0
      }
    },
    {
      "id": 27,
      "theme": "Sécurité / justice",
      "text": "Les peines de prison devraient être plus sévères, même si cela augmente fortement la population carcérale.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.8,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 28,
      "theme": "Sécurité / justice",
      "text": "Il vaut mieux investir dans la prévention et la réinsertion que dans l'augmentation des sanctions.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.6,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 29,
      "theme": "Sécurité / justice",
      "text": "La police devrait disposer de pouvoirs plus importants pour lutter contre la criminalité, quitte à accepter davantage de contrôles sur certaines libertés individuelles.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 30,
      "theme": "Sécurité / justice",
      "text": "La vidéosurveillance et les outils de surveillance numérique devraient être davantage utilisés pour prévenir les crimes.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 31,
      "theme": "Sécurité / justice",
      "text": "La liberté individuelle doit généralement primer sur les considérations de sécurité lorsque les deux entrent en conflit.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 32,
      "theme": "Écologie",
      "text": "La lutte contre le changement climatique doit rester prioritaire même lorsqu'elle réduit la croissance économique à court terme.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": -0.1,
        "authority": 0,
        "europe": 0,
        "ecology": 1,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 33,
      "theme": "Écologie",
      "text": "Il faut accepter une hausse importante du prix des énergies fossiles pour accélérer la transition écologique.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0.8,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 34,
      "theme": "Écologie",
      "text": "L'énergie nucléaire devrait être massivement développée en France.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": -0.2,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 35,
      "theme": "Écologie",
      "text": "Les politiques écologiques devraient reposer principalement sur des mécanismes de marché comme la taxe carbone plutôt que sur des interdictions.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.6,
        "europe": 0,
        "ecology": -0.7,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 36,
      "theme": "Écologie",
      "text": "Il est justifié d'interdire certains produits ou comportements très polluants même lorsque les consommateurs les souhaitent.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.6,
        "europe": 0,
        "ecology": 1,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 37,
      "theme": "Écologie",
      "text": "Les pays riches devraient supporter une part disproportionnée du coût de la transition écologique mondiale.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.5,
        "authority": 0,
        "europe": 0,
        "ecology": 0.6,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 38,
      "theme": "Europe",
      "text": "La France devrait transférer davantage de compétences à l'Union européenne afin de renforcer son poids économique et géopolitique.",
      "explanation": "Par exemple : confier davantage de décisions sur la défense, la fiscalité, l’énergie ou la politique étrangère aux institutions européennes plutôt qu’à chaque État séparément.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 1,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 39,
      "theme": "Europe",
      "text": "La France devrait conserver autant que possible sa souveraineté nationale, même si cela réduit son influence au niveau européen.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": -1,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 40,
      "theme": "Europe",
      "text": "L'euro est globalement bénéfique pour la France malgré la perte de certains instruments de politique économique.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0.8,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 41,
      "theme": "Europe",
      "text": "L'Union européenne devrait pouvoir imposer davantage de règles communes aux États membres.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 1,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 42,
      "theme": "Europe",
      "text": "En cas de conflit entre les intérêts économiques français et les règles européennes, la France devrait pouvoir désobéir à certaines règles européennes.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": -0.8,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 43,
      "theme": "Fiscalité / patrimoine",
      "text": "Il faudrait supprimer l'IFI et ne plus taxer spécifiquement le patrimoine immobilier au-delà de la fiscalité ordinaire.",
      "explanation": "L’IFI est un impôt spécifique sur les patrimoines immobiliers élevés. La question demande s’il faut le supprimer et ne conserver que les impôts immobiliers ordinaires.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0.5,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 44,
      "theme": "Fiscalité / patrimoine",
      "text": "L'héritage devrait être davantage taxé, même si cela conduit certaines familles à transmettre moins de patrimoine à leurs enfants.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": -0.5,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 45,
      "theme": "Fiscalité / patrimoine",
      "text": "Les très grandes fortunes devraient être imposées sur leur patrimoine mondial, même lorsqu'elles quittent la France.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": -0.4,
        "authority": 0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 46,
      "theme": "Travail / chômage",
      "text": "Un chômeur devrait pouvoir perdre une partie significative de ses allocations s'il refuse plusieurs emplois raisonnablement adaptés à ses compétences.",
      "defaultAnswer": 3,
      "note": "",
      "coefficients": {
        "economy": 0.8,
        "authority": 0.6,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 47,
      "theme": "Travail / chômage",
      "text": "Il faudrait faciliter nettement les licenciements économiques en contrepartie d'une meilleure indemnisation et d'un meilleur accompagnement des salariés licenciés.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0.7,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 48,
      "theme": "Travail / chômage",
      "text": "Le CDI protège trop fortement certains salariés et contribue à créer une dualité entre insiders et outsiders.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": 0.5,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 49,
      "theme": "Retraites",
      "text": "Les retraites devraient être progressivement réformées vers un système combinant répartition et capitalisation, même si cela implique une période de transition coûteuse.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0.8,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 50,
      "theme": "Retraites",
      "text": "L'âge légal de départ à la retraite devrait être automatiquement indexé sur l'espérance de vie.",
      "defaultAnswer": -3,
      "note": "",
      "coefficients": {
        "economy": 0.3,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 51,
      "theme": "Protection sociale",
      "text": "Les prestations sociales devraient être fortement conditionnées à la durée de cotisation et de participation au marché du travail.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0.8,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 52,
      "theme": "État / entreprises",
      "text": "Lorsqu'une entreprise stratégique est en difficulté, l'État devrait privilégier les prêts, garanties ou prises de participation temporaires plutôt que les subventions sans contrepartie.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0.3,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 53,
      "theme": "État / entreprises",
      "text": "Une entreprise qui reçoit plusieurs milliards d'euros d'aides publiques devrait pouvoir être contrainte de limiter ses dividendes et les rémunérations de ses dirigeants tant que l'aide n'est pas remboursée.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": -0.3,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 54,
      "theme": "État / entreprises",
      "text": "L'État devrait davantage utiliser son pouvoir d'actionnaire pour orienter les grandes entreprises françaises vers des objectifs industriels de long terme.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": -0.4,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 55,
      "theme": "État / entreprises",
      "text": "Il faudrait réduire fortement les normes administratives pesant sur les entreprises, même si certaines protections environnementales ou sociales deviennent moins strictes.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0.6,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 56,
      "theme": "Immigration / assimilation",
      "text": "Un immigré légal qui travaille, paie ses impôts, maîtrise correctement le français et respecte les lois devrait pouvoir obtenir la nationalité française relativement facilement, même s'il conserve une partie importante de sa culture d'origine.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.7,
        "democracy": 0
      }
    },
    {
      "id": 57,
      "theme": "Immigration / assimilation",
      "text": "L'accès à certaines prestations sociales devrait être beaucoup plus limité pendant les premières années suivant l'arrivée d'un immigré.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": -0.7,
        "democracy": 0
      }
    },
    {
      "id": 58,
      "theme": "Immigration / assimilation",
      "text": "La France devrait privilégier l'immigration économique qualifiée, même si cela signifie accueillir moins de personnes peu qualifiées.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": -0.2,
        "democracy": 0
      }
    },
    {
      "id": 59,
      "theme": "Immigration / assimilation",
      "text": "Une personne née en France de parents étrangers devrait automatiquement devenir française à sa majorité si elle y a grandi, même si elle ne manifeste pas particulièrement d'attachement à la France.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.6,
        "democracy": 0
      }
    },
    {
      "id": 60,
      "theme": "Immigration / assimilation",
      "text": "La France devrait pouvoir refuser l'entrée à un immigré légalement admissible lorsqu'il existe de fortes raisons de penser qu'il ne souhaite pas s'intégrer culturellement à la société française.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.5,
        "europe": 0,
        "ecology": 0,
        "immigration": -0.8,
        "democracy": 0
      }
    },
    {
      "id": 61,
      "theme": "Immigration / assimilation",
      "text": "Le fait de conserver des pratiques culturelles ou religieuses très différentes de celles de la majorité française n'est pas en soi un problème tant que les lois françaises sont respectées.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.8,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.8,
        "democracy": 0
      }
    },
    {
      "id": 62,
      "theme": "Libertés / sécurité",
      "text": "Il faudrait accepter davantage de surveillance numérique de la population si cela permettait de réduire significativement le terrorisme et la criminalité.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 63,
      "theme": "Libertés / sécurité",
      "text": "Pour lutter contre le terrorisme, l'État devrait pouvoir surveiller préventivement une personne considérée comme présentant un risque sérieux, même sans preuve suffisante pour engager des poursuites pénales.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 64,
      "theme": "Libertés / expression",
      "text": "Une personne qui tient publiquement des propos profondément offensants mais qui n'appelle ni à la violence ni à commettre une infraction devrait être protégée par la liberté d'expression.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 65,
      "theme": "Libertés / expression",
      "text": "La liberté d'expression devrait protéger les opinions politiques radicales, y compris lorsqu'elles remettent en cause des valeurs fondamentales de la République.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 66,
      "theme": "Sécurité",
      "text": "Lorsqu’un conducteur refuse d’obtempérer et prend la fuite, les policiers devraient pouvoir utiliser leur arme à feu même si le danger pour leur vie n’est pas immédiat.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 1,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 67,
      "theme": "Écologie",
      "text": "Si une taxe carbone réduit les émissions de CO₂ mais diminue le pouvoir d'achat des ménages modestes, il faut la maintenir et compenser les ménages concernés par des transferts ciblés.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 0.8,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 68,
      "theme": "Écologie",
      "text": "La France devrait interdire progressivement la vente de voitures thermiques même si cela augmente temporairement le prix moyen des véhicules.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.2,
        "europe": 0,
        "ecology": 0.7,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 69,
      "theme": "Écologie",
      "text": "Si le nucléaire permet de réduire fortement les émissions sans réduire significativement le niveau de vie, il faut privilégier le nucléaire même si cela conduit à réduire certains investissements dans les renouvelables.",
      "defaultAnswer": -1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": -0.3,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 70,
      "theme": "Écologie / commerce",
      "text": "La France devrait imposer une taxe carbone aux produits importés provenant de pays qui ne respectent pas suffisamment les objectifs climatiques, même si cela augmente les prix pour les consommateurs français.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.2,
        "europe": 0,
        "ecology": 0.7,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 71,
      "theme": "Écologie / croissance",
      "text": "Si la France pouvait réduire ses émissions de 20 % mais que cela réduisait son PIB de 3 %, alors que les autres pays ne faisaient aucun effort comparable, il faudrait quand même le faire.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0,
        "europe": 0,
        "ecology": 1,
        "immigration": 0,
        "democracy": 0
      }
    },
    {
      "id": 72,
      "theme": "Institutions",
      "text": "Pour certaines décisions économiques complexes, il serait préférable de confier davantage de pouvoir à des institutions indépendantes composées d'experts plutôt qu'aux responsables politiques élus.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": -1
      }
    },
    {
      "id": 73,
      "theme": "Institutions",
      "text": "Un gouvernement devrait pouvoir prendre une décision économiquement nécessaire mais très impopulaire sans chercher à obtenir l'approbation immédiate de la population.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.8,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": -1
      }
    },
    {
      "id": 74,
      "theme": "Institutions",
      "text": "Le référendum devrait être beaucoup plus utilisé, même lorsque les citoyens votent sur des sujets dont ils maîtrisent mal les aspects techniques.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.2,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0.8
      }
    },
    {
      "id": 75,
      "theme": "Institutions",
      "text": "Il serait acceptable de donner davantage de poids politique aux citoyens qui démontrent un niveau élevé de connaissance du fonctionnement des institutions et de l'économie.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.5,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": -1
      }
    },
    {
      "id": 76,
      "theme": "Institutions",
      "text": "Le président de la République devrait disposer de davantage de pouvoirs pour pouvoir mettre en œuvre un programme pendant cinq ans sans être constamment bloqué par le Parlement.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.6,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": -1
      }
    },
    {
      "id": 77,
      "theme": "Institutions",
      "text": "La proportionnelle intégrale serait préférable au système actuel, même si elle rendait plus fréquentes les coalitions et les gouvernements instables.",
      "defaultAnswer": 1,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": -0.3,
        "europe": 0,
        "ecology": 0,
        "immigration": 0,
        "democracy": 0.7
      }
    },
    {
      "id": 78,
      "theme": "Immigration / assimilation",
      "text": "Le droit de séjour durable en France devrait dépendre, sauf impossibilité particulière, d’efforts concrets pour apprendre le français, comprendre les règles et usages du pays et participer à la vie collective.",
      "defaultAnswer": 2,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.3,
        "europe": 0,
        "ecology": 0,
        "immigration": -1,
        "democracy": 0
      }
    },
    {
      "id": 79,
      "theme": "Immigration / délinquance",
      "text": "Les différences de délinquance observées s’expliquent davantage par les inégalités sociales et économiques que par la culture d’origine des personnes concernées.",
      "defaultAnswer": -2,
      "note": "",
      "coefficients": {
        "economy": -0.3,
        "authority": 0,
        "europe": 0,
        "ecology": 0,
        "immigration": 0.5,
        "democracy": 0
      }
    },
    {
      "id": 80,
      "theme": "Écologie / agriculture",
      "text": "La France devrait interdire aux agriculteurs l’usage d’un produit phytosanitaire jugé trop polluant, même si cette interdiction les désavantage face à des concurrents étrangers qui peuvent encore l’utiliser.",
      "defaultAnswer": 0,
      "note": "",
      "coefficients": {
        "economy": 0,
        "authority": 0.6,
        "europe": 0,
        "ecology": 1,
        "immigration": 0,
        "democracy": 0
      }
    }
  ],
  "openQuestions": [
    {
      "id": 81,
      "theme": "Question ouverte",
      "text": "Quel est actuellement le plus gros problème économique de la France ?",
      "defaultAnswer": ""
    },
    {
      "id": 82,
      "theme": "Question ouverte",
      "text": "Si tu devenais président demain et que tu ne pouvais prendre que trois mesures économiques, lesquelles choisirais-tu ?",
      "defaultAnswer": ""
    },
    {
      "id": 83,
      "theme": "Question ouverte",
      "text": "Quelle est la limite acceptable de l'immigration en France ? Et qu'est-ce qui devrait déterminer cette limite ?",
      "defaultAnswer": ""
    },
    {
      "id": 84,
      "theme": "Question ouverte",
      "text": "Jusqu'où l'État peut-il légitimement aller pour lutter contre le changement climatique si cela impose des contraintes importantes aux citoyens ?",
      "defaultAnswer": ""
    },
    {
      "id": 85,
      "theme": "Question ouverte",
      "text": "Qu'est-ce qui te ferait voter pour un parti de gauche plutôt que pour un parti de droite, et inversement ?",
      "defaultAnswer": ""
    }
  ]
};
