// Ajustements documentaires validés pour La France Humaniste en août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const FRANCE_HUMANISTE_OVERRIDES = {
  1: {
    justification: "Position intermédiaire : La France Humaniste propose d’alléger d’environ 5 points les cotisations patronales, ce qui va dans le sens d’une baisse des prélèvements sur le travail. Mais cet allègement serait financé par une contribution accrue de la consommation et des bénéfices ; LFH ne défend donc ni une baisse générale de la fiscalité du capital, ni un financement prioritaire par des réductions de dépenses publiques. Les différents volets de la proposition se compensent, ce qui justifie 0.",
    source: "https://lafrancehumaniste.fr/articles/un-nouveau-monde-du-travail.html"
  },
  69: {
    justification: "Désaccord très fort : La France Humaniste fonde sa conception démocratique sur l'égalité politique des citoyens, la souveraineté populaire et le refus qu'une minorité de techniciens ou de « sachants » confisque la décision publique. Donner davantage de poids politique à certains électeurs en fonction de leur connaissance des institutions ou de l'économie contredirait directement l'égalité du suffrage ; -3 reste donc pleinement justifié.",
    source: "https://lafrancehumaniste.fr/articles/sortir-de-l-impasse.html"
  },
  83: {
    response: 0,
    justification: "Position intermédiaire avec réserve documentaire : aucune doctrine récente de La France Humaniste n'a été identifiée sur l'aide active à mourir. Historiquement, la formation de Dominique de Villepin jugeait qu'une nouvelle loi autorisant l'euthanasie ou le suicide assisté n'était pas nécessaire et privilégiait la loi Leonetti ainsi que les soins palliatifs. Cette prise de position ancienne constitue un indice défavorable, mais son ancienneté ne permet pas d'en faire automatiquement la doctrine actuelle de LFH ; 0 est donc plus prudent qu'un accord ou un désaccord.",
    source: "https://www.doctissimo.fr/html/sante/politique/articles/15454-presidentielles-projet-sante-dominique-de-villepin.htm"
  },
  85: {
    response: 2,
    justification: "Accord net : La France Humaniste critique explicitement le plafonnement et la modulation des prestations familiales qui ont affaibli l'universalité de la politique familiale, et veut restaurer un soutien plus large aux familles, y compris aux classes moyennes. Cette orientation va clairement vers des allocations moins dépendantes du revenu, sans établir toutefois de manière assez explicite que leur montant devrait être strictement identique pour tous les ménages ; +2 est donc plus précis que +1 ou +3.",
    source: "https://lafrancehumaniste.fr/articles/la-rupture-du-pacte-social.html"
  },
  87: {
    response: 3,
    justification: "Accord très fort : La France Humaniste fait de la souveraineté numérique européenne un objectif prioritaire et propose d'orienter la commande publique vers des solutions européennes, notamment pour l'intelligence artificielle et le cloud. Dominique de Villepin assume explicitement qu'une politique de souveraineté puisse entraîner un coût supérieur ou une efficacité immédiate moindre afin de réduire les dépendances stratégiques. Le compromis posé par la question est donc directement accepté ; +3 est justifié.",
    source: "https://lafrancehumaniste.fr/articles/moment-europeen-europe-souveraine.html"
  }
};

const franceHumanisteParty = DATA.entities.find(entity => entity.id === 'france-humaniste');
if (franceHumanisteParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(FRANCE_HUMANISTE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) franceHumanisteParty.responses[index] = override.response;
    if (override.justification) franceHumanisteParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(franceHumanisteParty.sources)) franceHumanisteParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (franceHumanisteParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  franceHumanisteParty.axisScores = scores;
}