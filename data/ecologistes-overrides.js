// Audit documentaire des Écologistes d'août 2026.
// Les clés correspondent aux IDs stables des questions, jamais à leur position dans le tableau.
const ECOLOGISTES_OVERRIDES = {
  1: {
    justification: 'Désaccord très fort : Les Écologistes ne proposent pas une baisse générale des impôts sur le travail et le capital financée par des réductions de dépenses publiques. Leur programme 2026 combine au contraire fiscalité plus progressive, nouvelles contributions sur les plus hauts patrimoines et maintien d\'investissements publics importants. L\'arbitrage posé par la question est donc directement opposé à leur ligne.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  2: {
    justification: 'Désaccord modéré : Les Écologistes contestent l\'idée que les inégalités économiques deviennent globalement acceptables dès lors qu\'elles seraient attribuées au travail ou à la prise de risque. Leur projet insiste sur les rapports de pouvoir, l\'héritage et la concentration patrimoniale, tout en n\'exigeant pas une égalité complète des revenus. Un désaccord limité reste donc plus précis qu\'une opposition maximale.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  3: {
    justification: 'Accord très fort : le programme 2026 veut renforcer fortement la progressivité fiscale, rétablir une imposition plus élevée des grandes fortunes et instaurer notamment une contribution minimale sur les patrimoines les plus élevés. L\'objectif revendiqué est de réduire les inégalités et de faire davantage contribuer les plus aisés ; +3 correspond directement à cette orientation.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  5: {
    justification: 'Accord très fort : Les Écologistes proposent un salaire minimum à 2 000 euros brut et font de la hausse des bas salaires un élément central de leur projet social. Il s\'agit d\'une augmentation significative du salaire minimum légal ; +3 est adapté.',
    source: 'https://lesecologistes.fr/'
  },
  6: {
    justification: 'Désaccord net : Les Écologistes défendent des services publics forts et souhaitent soustraire plusieurs biens essentiels à une logique purement marchande. Ils ne rejettent toutefois pas l\'existence d\'entreprises privées ni leur efficacité dans de nombreux secteurs. La proposition d\'une supériorité générale du privé, y compris dans certains secteurs essentiels, rencontre donc un désaccord net mais pas nécessairement absolu.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  7: {
    justification: 'Accord net : Les Écologistes acceptent la propriété ou la prise de contrôle publique lorsqu\'une activité stratégique, un service essentiel ou la transition écologique le justifie. Le programme mobilise l\'investissement public et la maîtrise publique d\'infrastructures stratégiques, sans faire de la nationalisation générale un instrument systématique ; +2 reste proportionné.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  8: {
    justification: 'Désaccord net : le projet écologiste considère que le marché laissé à lui-même ne suffit pas à atteindre les objectifs sociaux et environnementaux et prévoit de nombreuses normes, régulations et politiques de planification. La concurrence conserve néanmoins une place dans l\'économie. Le désaccord avec sa primauté générale sur la réglementation est donc net sans être total.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  9: {
    justification: 'Désaccord net : Les Écologistes refusent que la réduction du déficit passe prioritairement par des coupes dans les politiques sociales et les services publics. Leur projet cherche néanmoins à rendre les finances publiques soutenables et ne nie pas toute contrainte budgétaire. La contrepartie précise de la question est rejetée, mais la note actuelle de -2 est conservée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  10: {
    justification: 'Accord très fort : Les Écologistes défendent une protection sociale étendue, des services publics renforcés et une fiscalité plus progressive destinée à financer ces protections. Un niveau élevé de redistribution, même avec des prélèvements importants, correspond très directement à leur doctrine sociale.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  11: {
    justification: 'Accord très fort : réglementation, investissement public, planification écologique, aides ciblées et services publics figurent au cœur du programme lorsque le fonctionnement du marché produit des résultats jugés socialement ou écologiquement indésirables. La formulation de la question correspond donc directement à cette orientation.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  12: {
    justification: 'Désaccord net : Les Écologistes privilégient des systèmes collectifs et mutualisés de protection sociale plutôt qu\'une individualisation permettant à chacun d\'utiliser librement une part importante des sommes aujourd\'hui affectées à la retraite, à la santé ou aux assurances sociales obligatoires. Le désaccord est net, tout en laissant une place à des choix individuels complémentaires.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  13: {
    justification: 'Accord très fort : Les Écologistes défendent explicitement l\'émancipation individuelle, les droits des personnes LGBTQIA+, l\'égalité de genre et la liberté des choix de vie. Les normes traditionnelles ne sont pas présentées comme une limite générale à l\'évolution des modes de vie ; +3 est pleinement cohérent.',
    source: 'https://lesecologistes.fr/pages/5ejHks7BbNKNnK2pX4cfp5/valeurs-et-principes'
  },
  14: {
    justification: 'Désaccord très fort : le projet institutionnel écologiste veut renforcer le Parlement, limiter les procédures permettant à l\'exécutif de contourner les votes et réduire la verticalité du pouvoir. Permettre au gouvernement de faire adopter un budget sans vote en cas d\'absence de majorité stable va directement à l\'encontre de cette conception parlementaire.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  15: {
    justification: 'Accord modéré : Les Écologistes acceptent que certaines politiques d\'égalité imposent des contraintes, par exemple par la redistribution, des obligations antidiscriminatoires ou des règles de représentation. Ils défendent parallèlement très fortement les libertés civiles et personnelles. L\'accord avec le principe général de la question existe mais reste circonscrit ; +1 demeure adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  18: {
    justification: 'Désaccord net : le projet écologiste valorise l\'émancipation, l\'évolution des normes sociales et la pluralité des modes de vie plutôt que la préservation de traditions en tant que telles. Il ne rejette pas pour autant tout héritage culturel ou toute continuité historique. Un désaccord net, plutôt que maximal, reste donc le meilleur calibrage.',
    source: 'https://lesecologistes.fr/pages/5ejHks7BbNKNnK2pX4cfp5/valeurs-et-principes'
  },
  20: {
    justification: 'Accord net : Les Écologistes soulignent la contribution des personnes immigrées au travail, à l\'activité économique et à la société, et rejettent les discours présentant l\'immigration comme un coût global. L\'utilité économique n\'est cependant pas le fondement central de leur politique migratoire, qui repose d\'abord sur les droits ; +2 reste plus précis qu\'un accord maximal.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  22: {
    justification: 'Désaccord très fort : Les Écologistes défendent un accès ouvert à la citoyenneté et s\'opposent aux durcissements généraux de la nationalité et du droit du sol. Rendre globalement l\'acquisition de la nationalité plus exigeante est donc l\'inverse de leur orientation.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  24: {
    justification: 'Désaccord très fort : Les Écologistes défendent une société pluraliste et refusent de faire de l\'homogénéité culturelle un motif autonome de fermeture migratoire. La cohésion sociale doit selon eux reposer sur les droits communs et la lutte contre les discriminations, non sur une limitation de l\'immigration culturellement motivée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  25: {
    justification: 'Accord très fort : le programme écologiste défend le droit d\'asile, l\'accueil digne des personnes fuyant les guerres ou les persécutions et la mise à disposition de moyens publics suffisants. Le coût budgétaire n\'est pas posé comme une raison de renoncer à cette obligation ; +3 est adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  28: {
    justification: 'Désaccord très fort : Les Écologistes opposent une politique de prévention, de proximité et de justice à une logique de surveillance et d\'extension générale des pouvoirs policiers. Ils acceptent des moyens de sécurité, mais refusent que ceux-ci se traduisent par un recul général des libertés individuelles ; -3 est cohérent avec l\'arbitrage précis de la question.',
    source: 'https://municipales2026.lesecologistes.fr/pages/1wa5qoXRxHpUHeDrU9rp4V/notre-socle-programmatique'
  },
  30: {
    justification: 'Accord très fort : l\'urgence climatique structure le programme économique des Écologistes et la prospérité n\'y est pas mesurée par la seule croissance du PIB. Des investissements, réglementations et transformations économiques sont assumés même lorsqu\'ils peuvent réduire certaines activités à court terme. La priorité climatique est donc très fortement affirmée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  31: {
    response: -1,
    justification: 'Désaccord modéré : Les Écologistes utilisent certains signaux-prix et veulent supprimer des avantages fiscaux favorables aux énergies fossiles, mais leur ligne actuelle refuse que la transition repose sur une forte hausse du chauffage et de l\'essence supportée par les ménages. En juillet 2026, ils ont demandé de renégocier l\'ETS2 tant qu\'il pèse sur les déplacements et le chauffage des familles et affirmé que la transition devait être financée par les pollueurs. La proposition va donc plutôt à l\'encontre de leur arbitrage actuel ; -1 est plus précis que +3.',
    source: 'https://lesecologistes.fr/posts/6tyd96aH0swQV6MafCoqXV/marche-carbone-la-commission-exonere-les-industriels-et-fait-payer-les-menages'
  },
  32: {
    justification: 'Désaccord modéré : Les Écologistes critiquent la TVA lorsqu\'elle pèse proportionnellement davantage sur les ménages modestes et veulent au contraire la moduler selon l\'impact social et environnemental des produits. Ils ne défendent pas le transfert général de cotisations sociales vers une TVA plus élevée pour réduire le coût du travail. Le désaccord est réel, mais la question combine plusieurs effets et justifie de conserver -1.',
    source: 'https://lesecologistes.fr/pages/3FUIw0kVkP3JCPpiNU9PEA/ii-pour-la-justice-sociale-et-une-economie-au-service-du-climat'
  },
  33: {
    response: -2,
    justification: 'Désaccord net : Les Écologistes recourent à la fiscalité environnementale, mais refusent d\'en faire l\'instrument principal de la transition. Leur programme 2026 subordonne explicitement le marché à des normes écologiques contraignantes, à la planification et à des interdictions lorsque cela est nécessaire. La préférence pour des mécanismes de marché plutôt que des interdictions est donc nettement contraire à leur doctrine ; -2 est plus adapté que -1.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  34: {
    justification: 'Accord très fort : interdictions de substances dangereuses, restrictions sur les activités les plus polluantes et normes environnementales contraignantes figurent explicitement parmi les outils des Écologistes. Le maintien d\'une demande des consommateurs ne constitue pas, à lui seul, une raison de renoncer à ces interdictions ; +3 est adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  35: {
    justification: 'Accord très fort : Les Écologistes attribuent une responsabilité particulière aux pays historiquement les plus émetteurs et veulent accroître leur contribution au financement climatique international, notamment au bénéfice des pays vulnérables. Leur programme formule explicitement cette dette écologique et le financement des pertes et dommages ; +3 est justifié.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  36: {
    justification: 'Accord très fort : le programme 2026 revendique une Europe plus fédérale, davantage de compétences partagées et une capacité d\'action commune renforcée dans plusieurs domaines stratégiques. Le transfert de compétences à l\'Union pour accroître son poids économique et géopolitique correspond directement à cette orientation.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  37: {
    justification: 'Désaccord très fort : Les Écologistes considèrent qu\'une souveraineté efficace s\'exerce souvent en commun au niveau européen et défendent une Europe fédérale. Conserver autant que possible les compétences nationales même au prix d\'une influence européenne plus faible est donc fortement contraire à leur projet.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  38: {
    justification: 'Accord très fort : Les Écologistes inscrivent leur projet dans la zone euro, proposent de réformer la BCE et de renforcer des instruments monétaires et financiers européens plutôt que de rétablir une monnaie nationale. La note actuelle de +3 traduit leur adhésion très forte à l\'intégration monétaire, même si le programme ne formule pas littéralement le bilan coût-avantage de la question.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  39: {
    justification: 'Accord très fort : le projet fédéraliste des Écologistes veut davantage de règles communes et de décisions européennes dans des domaines économiques, sociaux, écologiques et stratégiques, avec notamment une réduction du recours aux vétos nationaux. La proposition correspond directement à leur orientation européenne.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  40: {
    response: -3,
    justification: 'Désaccord très fort : Les Écologistes veulent renforcer l\'ordre juridique et politique européen, développer les compétences communes et remplacer plusieurs vétos nationaux par des décisions à la majorité. Leur stratégie n\'est pas celle d\'une désobéissance économique unilatérale de la France ; la logique de la question est donc directement contraire à leur fédéralisme, ce qui justifie -3 plutôt que -2.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  41: {
    justification: 'Désaccord très fort : Les Écologistes veulent rétablir et renforcer une fiscalité des très hauts patrimoines, notamment avec une taxation minimale des grandes fortunes. Supprimer l\'IFI sans autre imposition spécifique du patrimoine immobilier élevé va donc directement à l\'encontre de leur orientation fiscale.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  42: {
    justification: 'Accord net : le programme 2026 veut augmenter la progressivité des droits de succession sur les transmissions importantes, avec de nouvelles tranches sur les patrimoines les plus élevés et une réduction de certaines exonérations. Le principe de taxer davantage l\'héritage au-delà d\'un seuil est donc clairement assumé. Les mesures restent toutefois concentrées sur des transmissions très élevées ; +2 demeure un meilleur calibrage que +3.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  43: {
    justification: 'Accord net : Les Écologistes veulent renforcer l\'exit tax, combattre l\'expatriation fiscale et maintenir une contribution des très grandes fortunes qui organisent leur départ. Le programme ne décrit toutefois pas exactement une imposition permanente de l\'ensemble du patrimoine mondial après expatriation. La direction générale est favorable à l\'objectif anti-évitement de la question, mais le mécanisme précis reste moins directement documenté ; la note actuelle de +2 est conservée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  44: {
    response: -2,
    justification: 'Désaccord net : Les Écologistes veulent abroger les réformes de l\'assurance-chômage qu\'ils jugent punitives, améliorer l\'indemnisation et protéger davantage les demandeurs d\'emploi. Le programme ne documente cependant pas directement le cas précis de plusieurs refus d\'emplois raisonnablement adaptés. Une opposition forte à la logique de sanctions est établie, mais -2 est plus rigoureux que -3 pour cet arbitrage précis.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  45: {
    justification: 'Accord net : Les Écologistes veulent renforcer le bouclier qualité-prix et les mécanismes publics de lutte contre la vie chère dans les Outre-mer. Leur programme accepte donc une intervention publique durable sur les prix essentiels, mais ne formule pas exactement une subvention nationale permanente du fret permettant d\'aligner systématiquement les prix sur l\'Hexagone. +2 reste adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  46: {
    justification: 'Désaccord net : Les Écologistes attribuent la précarité de l\'emploi à la flexibilisation et aux contrats instables plutôt qu\'à une protection excessive des salariés en CDI. Ils veulent sécuriser les parcours professionnels et renforcer les droits des travailleurs. La prémisse de la question est donc rejetée, sans que le programme exclue toute réforme du droit du travail ; -2 est cohérent.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  47: {
    justification: 'Désaccord très fort : le programme 2026 affirme explicitement le refus d\'une évolution du système de retraite vers la capitalisation et maintient la répartition comme principe central. La combinaison répartition-capitalisation proposée dans la question est donc directement opposée à leur ligne ; -3 est solidement documenté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  48: {
    response: -3,
    justification: 'Désaccord très fort : Les Écologistes veulent revenir sur le relèvement de l\'âge légal, rétablir rapidement 62 ans et ouvrir des départs plus précoces selon la pénibilité et les carrières. Leur projet fixe donc politiquement l\'âge de départ et cherche à l\'abaisser plutôt qu\'à l\'indexer automatiquement sur l\'espérance de vie. L\'opposition au mécanisme de la question est maximale ; -3 est plus adapté que -2.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  49: {
    justification: 'Désaccord très fort : Les Écologistes défendent une protection sociale largement fondée sur les besoins et les droits de résidence, et non sur une conditionnalité très forte à la durée de présence sur le marché du travail. Les cotisations continuent de jouer un rôle, mais la proposition d\'une forte conditionnalité générale est directement contraire à leur modèle social.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  50: {
    justification: 'Accord très fort : Les Écologistes veulent conditionner les aides publiques aux entreprises à des objectifs sociaux, environnementaux et fiscaux, avec contrôle et remboursement en cas de non-respect. Leur doctrine prévoit également de limiter les distributions lorsque des entreprises bénéficient d\'un soutien public. La logique de contraintes fortes tant que l\'aide n\'est pas remboursée correspond donc très largement à leur ligne ; la note actuelle de +3 est conservée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  51: {
    justification: 'Accord net : Les Écologistes veulent utiliser les participations publiques, la commande publique et l\'investissement de l\'État pour orienter l\'appareil productif vers des objectifs industriels et écologiques de long terme. Ils ne réduisent toutefois pas cette stratégie au seul pouvoir d\'actionnaire dans les grandes entreprises. +2 reste un calibrage prudent et cohérent.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  52: {
    justification: 'Désaccord très fort : le programme écologiste veut renforcer plusieurs normes sociales et environnementales et refuse une simplification administrative qui se traduirait par un affaiblissement substantiel de ces protections. Des simplifications de procédures peuvent être admises, mais pas au prix explicitement posé dans la question ; -3 est adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  54: {
    justification: 'Désaccord très fort : Les Écologistes s\'opposent aux formes de préférence nationale et défendent l\'accès aux droits sociaux des personnes étrangères en situation régulière. Une limitation beaucoup plus forte des prestations durant les premières années après l\'arrivée est donc directement contraire à leur politique migratoire et sociale.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  55: {
    response: -2,
    justification: 'Désaccord net : Les Écologistes reconnaissent l\'apport économique des personnes immigrées mais refusent de réduire la politique migratoire à leur utilité économique. Un atelier officiel des Journées d\'été 2025 met explicitement en garde contre le « piège d\'une vision utilitariste » alors que les titres liés aux métiers en tension sont discutés. Privilégier les plus qualifiés en accueillant moins de personnes peu qualifiées va donc nettement à l\'encontre de cette logique de droits ; -2 est plus adapté que 0.',
    source: 'https://journees.lesecologistes.fr/events/4TCQCmbkqteSEDSgOUZud3/proteger-les-travailleurs-et-travailleuses-etrangers-eres'
  },
  57: {
    justification: 'Désaccord très fort : Les Écologistes fondent l\'admission et le séjour sur des critères juridiques et des droits, non sur une appréciation anticipée de la conformité culturelle d\'une personne à la majorité française. L\'intégration et l\'apprentissage de la langue peuvent être accompagnés, mais un refus d\'entrée fondé sur une volonté supposée de s\'intégrer culturellement est contraire à leur approche.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  58: {
    justification: 'Accord très fort : Les Écologistes défendent le pluralisme culturel et religieux et la lutte contre les discriminations, sous réserve du respect de la loi commune et des droits fondamentaux. La conservation de pratiques différentes de celles de la majorité n\'est donc pas considérée comme un problème en soi ; +3 est adapté.',
    source: 'https://lesecologistes.fr/pages/5ejHks7BbNKNnK2pX4cfp5/valeurs-et-principes'
  },
  59: {
    justification: 'Désaccord modéré : Les Écologistes acceptent le renseignement et certaines mesures préventives face à un risque terroriste sérieux, mais insistent sur le contrôle juridictionnel et la protection des libertés publiques. Ils refusent que la prévention devienne une surveillance administrative générale sans garanties suffisantes. La proposition rencontre donc une réserve réelle mais non absolue ; -1 reste cohérent.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  60: {
    justification: 'Accord net : Les Écologistes défendent fortement la liberté d\'expression, y compris pour des opinions choquantes ou dérangeantes, tout en maintenant les limites légales concernant l\'incitation à la haine, les discriminations, les menaces ou le harcèlement. La protection des propos offensants mais licites est donc clairement compatible avec leur ligne ; +2 est adapté.',
    source: 'https://lesecologistes.fr/pages/5ejHks7BbNKNnK2pX4cfp5/valeurs-et-principes'
  },
  62: {
    response: 2,
    justification: 'Accord net : Les Écologistes acceptent le principe de tarifications carbone et de fiscalité écologique lorsque leurs effets sont redistribués et socialement compensés. Leur ligne 2026 refuse cependant qu\'un marché carbone appliqué aux ménages augmente directement chauffage et carburant sans protection suffisante et veut faire davantage payer les gros émetteurs. La compensation prévue par la question rapproche les positions, mais l\'adhésion n\'est plus assez inconditionnelle pour +3 ; +2 est plus précis.',
    source: 'https://lesecologistes.fr/posts/6tyd96aH0swQV6MafCoqXV/marche-carbone-la-commission-exonere-les-industriels-et-fait-payer-les-menages'
  },
  63: {
    justification: 'Accord très fort : Les Écologistes soutiennent la sortie progressive des véhicules thermiques neufs et un basculement accéléré vers les véhicules zéro émission. Ils prévoient parallèlement des aides importantes, notamment la location sociale, afin de limiter le coût pour les ménages. L\'objectif d\'interdiction progressive est néanmoins explicite ; la note actuelle de +3 est conservée.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  64: {
    justification: 'Désaccord très fort : le projet écologiste organise une montée en puissance des énergies renouvelables et une sortie progressive du nucléaire. Privilégier le nucléaire au point de réduire certains investissements dans les renouvelables est donc directement opposé à leur stratégie énergétique ; -3 est solidement documenté.',
    source: 'https://lesecologistes.fr/pages/358vv7W974UgosGhCBbIPT/notre-projet'
  },
  65: {
    justification: 'Accord net : Les Écologistes refusent de faire du PIB l\'unique boussole de la politique économique et placent les objectifs climatiques au-dessus de certaines activités productives. Le scénario chiffré de la question — 20 % d\'émissions en moins, 3 % de PIB perdu et absence d\'effort comparable à l\'étranger — n\'est toutefois pas formulé dans le programme. La note actuelle de +2 est conservée comme traduction d\'une priorité climatique forte, avec une justification explicitement prudente.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  66: {
    justification: 'Désaccord modéré : Les Écologistes défendent l\'expertise scientifique et des autorités indépendantes dans leurs domaines, mais leur projet institutionnel cherche surtout à renforcer le contrôle démocratique et la participation citoyenne. Ils ne proposent pas de transférer de manière générale les décisions économiques complexes des élus vers des institutions technocratiques ; -1 reste adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  67: {
    justification: 'Position intermédiaire : le projet écologiste reconnaît qu\'un gouvernement doit parfois prendre des décisions difficiles, mais il insiste simultanément sur la délibération, le Parlement, les conventions citoyennes et la participation populaire. Aucun principe général ne permet de trancher l\'arbitrage précis entre nécessité économique alléguée et absence d\'approbation immédiate. Une note neutre reste la plus rigoureuse.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  68: {
    justification: 'Accord net : Les Écologistes veulent élargir les instruments de démocratie directe et participative et faire davantage intervenir les citoyens entre les élections. Ils assument que des questions complexes puissent être soumises à la délibération populaire, mais privilégient souvent des dispositifs accompagnés d\'information et de débat plutôt qu\'un recours indistinct au référendum. +2 est donc adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  69: {
    response: -3,
    justification: 'Désaccord très fort : Les Écologistes fondent leur projet démocratique sur l\'égalité du suffrage et veulent élargir la participation politique à davantage de citoyens. Leur programme critique précisément les conceptions qui traitent une partie du peuple comme politiquement moins légitime ou moins compétente. Donner plus de poids électoral aux électeurs jugés mieux informés violerait directement ce principe d\'égalité ; -3 est plus adapté que -2.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  70: {
    justification: 'Désaccord net : Les Écologistes veulent renforcer le Parlement, les contre-pouvoirs et la responsabilité du gouvernement, et réduire la verticalité présidentielle. Ils s\'opposent donc à un renforcement des pouvoirs du président destiné à éviter les blocages parlementaires. La note actuelle de -2 est conservée, même si la direction du programme est clairement contraire à la proposition.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  71: {
    response: 3,
    justification: 'Accord très fort : le programme 2026 propose explicitement la proportionnelle intégrale sans prime majoritaire pour l\'élection de l\'Assemblée nationale. Des coalitions plus fréquentes constituent une conséquence prévisible de ce choix et ne remettent pas en cause l\'adhésion au principe. La correspondance avec la question est directe ; +3 est plus adapté que +2.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  72: {
    justification: 'Désaccord modéré : Les Écologistes soutiennent l\'apprentissage du français et l\'accompagnement vers la participation à la vie collective, mais refusent d\'en faire une condition générale et punitive du droit au séjour durable. Les efforts d\'intégration sont encouragés davantage comme un droit et un outil d\'émancipation que comme un test de maintien du séjour ; -1 reste adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  73: {
    justification: 'Accord très fort : Les Écologistes expliquent prioritairement les phénomènes de délinquance par les conditions sociales, la précarité, les discriminations, l\'âge, le logement et les politiques de prévention plutôt que par une culture d\'origine. Cette lecture structurelle correspond très directement à la proposition ; +3 est adapté.',
    source: 'https://municipales2026.lesecologistes.fr/pages/1wa5qoXRxHpUHeDrU9rp4V/notre-socle-programmatique'
  },
  76: {
    response: 3,
    justification: 'Accord très fort : le programme 2026 propose que les soins essentiels soient remboursés à 100 % par l\'Assurance maladie et que les complémentaires se concentrent davantage sur les prestations optionnelles. Le mécanisme correspond presque exactement à la question et réduit structurellement le rôle des mutuelles sur les soins essentiels ; +3 est plus adapté que +2.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  77: {
    justification: 'Désaccord net : Les Écologistes veulent maintenir un maillage territorial de soins, renforcer les services publics de proximité et lutter contre les déserts médicaux. Ils ne rejettent pas toute réorganisation hospitalière lorsque la sécurité des soins l\'impose, ce qui empêche un désaccord maximal. La logique générale de fermetures destinées à concentrer les moyens rencontre néanmoins une opposition nette ; -2 reste adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  78: {
    justification: 'Désaccord net : Les Écologistes défendent un service public national de l\'éducation, des équipes pédagogiques collégiales et une gouvernance plus démocratique des établissements. Ils ne proposent pas de transférer aux chefs d\'établissement un pouvoir important de recrutement et d\'évaluation individuelle des enseignants. Le désaccord est net mais la documentation n\'impose pas -3 ; -2 est conservé.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  80: {
    response: 2,
    justification: 'Accord net : Les Écologistes veulent donner davantage de pouvoirs aux collectivités pour réguler très fortement les meublés touristiques, limiter les licences en zone tendue et aligner leur fiscalité et leurs contraintes sur celles de l\'hébergement professionnel. Le programme 2026 ne formule cependant pas un pouvoir général d\'interdiction de toute location touristique régulière d\'une résidence non principale. +2 est donc plus précis que +3.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  81: {
    justification: 'Accord très fort : le programme 2026 soutient la poursuite d\'une aide militaire, financière et logistique substantielle à l\'Ukraine, comprenant notamment des équipements de défense et des capacités nécessaires à sa résistance. Tant que le territoire ukrainien reste occupé, l\'orientation est clairement favorable à la continuité du soutien ; +3 est adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  83: {
    justification: 'Accord très fort : Les Écologistes soutiennent un droit strictement encadré à l\'aide à mourir pour les personnes majeures atteintes d\'une affection grave et incurable et confrontées à des souffrances insupportables. Cette position correspond directement à la formulation de la question ; +3 est adapté.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  84: {
    justification: 'Accord modéré : Les Écologistes veulent développer fortement les EHPAD publics et non lucratifs, mieux encadrer les opérateurs privés et soumettre les financements à des exigences de qualité. Le programme ne prévoit toutefois pas clairement d\'interdire à tous les groupes privés lucratifs de gérer des EHPAD ni de convertir systématiquement les établissements existants. +1 reste donc plus précis qu\'un accord fort.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  },
  85: {
    response: 2,
    justification: 'Accord net : Les Écologistes défendent de longue date le retour à des allocations familiales universelles et dès le premier enfant. Le programme 2026 prévoit également un même montant d\'allocation dès le premier enfant, ce qui va dans le sens d\'un droit familial moins conditionné au revenu. La formulation actuelle ne répète toutefois pas aussi explicitement l\'abolition de toute modulation selon les ressources ; +2 est donc un accord net mais prudent.',
    source: 'https://yvelines.lesecologistes.fr/pages/60OqbjIdkQZgA2yQnYqeun/la-lutte-contre-les-inegalites-et-la-precarite-au-coeur-du-projet-ecologiste'
  },
  86: {
    response: 2,
    justification: 'Accord net : lors du débat du 21 juillet 2026, Lisa Belluco a indiqué que le groupe Écologiste et social soutiendrait majoritairement la fixation à 15 ans de l\'âge minimum d\'accès aux réseaux sociaux. Des positions écologistes antérieures ont toutefois défendu d\'autres seuils et modalités, ce qui empêche de considérer l\'adhésion comme absolument homogène. +2 est plus adapté que +1.',
    source: 'https://questions.assemblee-nationale.fr/dyn/17/comptes-rendus/seance/session-extraordinaire-de-2025-2026/premiere-seance-du-mardi-21-juillet-2026'
  },
  87: {
    justification: 'Accord net : Les Écologistes veulent renforcer la souveraineté numérique, privilégier des infrastructures et solutions européennes ou françaises pour les données publiques sensibles et limiter les dépendances technologiques extraterritoriales. Le programme ne dit toutefois pas explicitement qu\'il faut accepter une IA moins performante ou sensiblement plus coûteuse uniquement en raison de son hébergement européen. La note actuelle de +2 est conservée, avec cette réserve documentaire.',
    source: 'https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf'
  }
};

const ecologistesParty = DATA.entities.find(entity => entity.id === 'les-ecologistes');
if (ecologistesParty) {
  const questionIndexById = new Map(DATA.questions.map((question, index) => [question.id, index]));

  Object.entries(ECOLOGISTES_OVERRIDES).forEach(([questionId, override]) => {
    const index = questionIndexById.get(Number(questionId));
    if (index === undefined) return;
    if (Object.prototype.hasOwnProperty.call(override, 'response')) ecologistesParty.responses[index] = override.response;
    if (override.justification) ecologistesParty.justifications[index] = override.justification;
    if (override.source && Array.isArray(ecologistesParty.sources)) ecologistesParty.sources[index] = override.source;
  });

  const scores = {};
  DATA.axes.forEach(axis => {
    const denominator = 3 * DATA.questions.reduce(
      (sum, question) => sum + Math.abs(question.coefficients[axis.key]),
      0
    );
    const numerator = DATA.questions.reduce(
      (sum, question, index) => sum + (ecologistesParty.responses[index] ?? 0) * question.coefficients[axis.key],
      0
    );
    scores[axis.key] = denominator ? 10 * numerator / denominator : 0;
  });
  ecologistesParty.axisScores = scores;
}
