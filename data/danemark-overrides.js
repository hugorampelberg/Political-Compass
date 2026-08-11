const DANEMARK_RESPONSE_OVERRIDES = {
  3: {
    response: -1,
    justification: "Désaccord modéré : le gouvernement Frederiksen III maintient une forte redistribution, mais sa politique fiscale d'ensemble ne consiste pas à augmenter nettement l'imposition des hauts revenus et des grands patrimoines. La coalition supprime notamment la top-top-skat, allège plusieurs prélèvements sur le capital et reconnaît qu'il n'existe pas de majorité pour instaurer un impôt général sur la fortune. Elle renforce parallèlement la progressivité de certaines successions, ce qui empêche un désaccord plus fort ; -1 est donc plus précis que 0.",
    source: "https://stm.dk/presse/pressemoedearkiv/2026/pressemoede-den-2-juni-2026/"
  },
  5: {
    response: -3,
    justification: "Désaccord très fort : le Danemark ne dispose pas de salaire minimum légal national et défend par principe la fixation des salaires par les partenaires sociaux dans le cadre du modèle danois de négociation collective. Le gouvernement danois a d'ailleurs contesté les dispositions européennes susceptibles d'empiéter sur ce modèle. Une forte hausse du salaire minimum décidée par la loi est donc directement contraire à cette doctrine institutionnelle ; -3 est adapté.",
    source: "https://bm.dk/nyheder/pressemeddelelser/2025/11/eu-domstolen-annullerer-dele-af-mindsteloensdirektivet"
  },
  27: {
    response: 1,
    justification: "Accord modéré : le gouvernement veut durcir certaines peines, notamment pour les crimes violents, et accroître les capacités pénitentiaires. Mais son accord maintient explicitement un équilibre entre sanctions plus fermes, prévention, réinsertion et alternatives à l'incarcération. Il ne présente donc pas une forte augmentation de la population carcérale comme une contrepartie souhaitable en elle-même ; +1 est plus fidèle que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  },
  28: {
    response: 0,
    justification: "Position intermédiaire : le gouvernement Frederiksen III renforce à la fois la prévention et la réinsertion, mais aussi les sanctions pénales et les capacités carcérales. Il ne choisit donc pas clairement d'investir dans la prévention et la réinsertion plutôt que dans l'augmentation des sanctions ; les deux approches sont assumées simultanément. Un score neutre est plus précis que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  },
  33: {
    response: 0,
    justification: "Position intermédiaire : le Danemark utilise fortement la tarification carbone et des signaux-prix pour accélérer la transition énergétique, mais le nouveau gouvernement insiste également sur une énergie abordable, la protection du pouvoir d'achat et la compétitivité. Il ne défend donc pas sans réserve une forte augmentation du prix des énergies fossiles supportée par les ménages. L'ambition climatique et la priorité donnée à l'abordabilité se compensent ici, ce qui justifie 0 plutôt que +1.",
    source: "https://stm.dk/presse/pressemoedearkiv/2026/pressemoede-den-2-juni-2026/"
  },
  66: {
    response: -3,
    justification: "Désaccord très fort : l'usage de l'arme à feu par la police danoise est encadré par les principes de nécessité et de proportionnalité et vise notamment les situations présentant un danger grave pour la vie ou la santé. Le simple fait qu'un conducteur refuse d'obtempérer et prenne la fuite ne suffit pas à justifier un tir lorsque le danger n'est pas immédiat. La proposition de la question va donc directement à l'encontre de la doctrine danoise ; -3 est adapté.",
    source: "https://politi.dk/aktuelt/statistik/politiets-anvendelse-af-magtmidler"
  },
  75: {
    response: -3,
    justification: "Désaccord très fort : le système démocratique danois repose sur l'égalité du suffrage et ne donne pas davantage de poids politique à certains citoyens en fonction de leurs connaissances, de leur diplôme ou de leur expertise. Introduire une pondération du vote selon la compétence institutionnelle ou économique créerait précisément une inégalité politique contraire au principe démocratique danois ; -3 est donc plus adapté que -2.",
    source: "https://www.ft.dk/da/folkestyret/grundloven-og-folkestyret/grundloven-og-det-danske-demokrati"
  },
  76: {
    response: -3,
    justification: "Désaccord très fort : transposée au Premier ministre danois, la proposition est contraire au fonctionnement du régime parlementaire. Le gouvernement dépend du Folketing et ne peut gouverner durablement contre une majorité parlementaire ; seul le Parlement adopte les lois et le budget. Renforcer l'exécutif afin qu'il puisse contourner les blocages du Parlement irait donc directement à l'encontre de l'architecture institutionnelle danoise ; -3 est adapté.",
    source: "https://www.ft.dk/da/folkestyret/folketinget/folketingets-arbejde"
  },
  83: {
    response: 1,
    justification: "Accord modéré : le Danemark accepte la spécialisation et la concentration de certains soins hospitaliers lorsque la qualité, la sécurité ou la disponibilité des équipes l'exigent. Mais le nouveau gouvernement veut parallèlement rapprocher davantage de soins des habitants et renforcer l'offre sanitaire locale, notamment hors des grands centres. Il n'existe donc pas de préférence générale pour fermer ou fusionner les petites maternités et urgences ; +1 est plus précis que +2.",
    source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
  }
};

const danemarkGovernment = DATA.entities.find(entity => entity.id === 'danemark');
if (danemarkGovernment) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(DANEMARK_RESPONSE_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    danemarkGovernment.responses[index] = override.response;
    danemarkGovernment.justifications[index] = override.justification;
    if (Array.isArray(danemarkGovernment.sources)) danemarkGovernment.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (danemarkGovernment.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  danemarkGovernment.axisScores = scores;
}
