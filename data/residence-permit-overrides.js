// Calibration documentaire des questions sur le séjour et la naturalisation (24 août 2026).
// Cette couche est chargée en dernier pour garantir que Q19, Q21 et Q22 conservent
// leurs scores, justifications et sources après les autres surcharges historiques.
const RESIDENCE_PERMIT_RESEARCH = {
  lfi: {
    q19: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : LFI propose de faire de la carte de séjour de dix ans le titre de référence, de régulariser plusieurs catégories de personnes durablement présentes et de rendre les critères d'obtention des titres plus objectifs. Restreindre le nombre de titres ou en durcir globalement l'accès va directement à l'encontre de cette politique ; -3 est adapté.",
      source: "https://melenchon2027.fr/livrets-2022/migrations/"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : LFI rejette déjà la préférence nationale pour les étrangers en situation régulière. A fortiori, le mouvement ne propose aucune différence de prestations ou d'accès au logement entre une personne française par naturalisation et une personne française de naissance ; toutes deux relèvent de la même citoyenneté, d'où +3.",
      source: "https://lafranceinsoumise.fr/2024/01/25/immigration-le-conseil-censure-les-mesures-lepenistes-mais-conserve-la-reforme-darmanin-qui-porte-une-grave-atteinte-aux-droits-des-etrangers/"
    },
    q22: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : LFI rejette explicitement les délais de carence et la préférence nationale dans l'accès aux prestations sociales pour les étrangers en situation régulière. Le mouvement défend l'égalité des droits sociaux entre résidents réguliers et citoyens français, sous les mêmes conditions ordinaires d'éligibilité ; +3 correspond directement à cette position.",
      source: "https://lafranceinsoumise.fr/2024/01/25/immigration-le-conseil-censure-les-mesures-lepenistes-mais-conserve-la-reforme-darmanin-qui-porte-une-grave-atteinte-aux-droits-des-etrangers/"
    }
  },
  pcf: {
    q19: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : le PCF défend l'ouverture de voies légales, des régularisations et des titres de séjour stables plutôt qu'une politique de quotas restrictifs ou de durcissement général des conditions. La proposition prend donc la direction opposée à sa ligne migratoire ; -3 est adapté.",
      source: "https://www.pcf.fr/mediapart_la_gauche_et_l_immigration_les_r_ponses_et_propositions_du_pcf"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le PCF combat les restrictions de droits sociaux fondées sur la nationalité, y compris lorsqu'elles visent des étrangers réguliers. Il défend donc sans ambiguïté l'égalité entre deux citoyens français, que la nationalité ait été acquise par naturalisation ou à la naissance ; +3 est adapté.",
      source: "https://www.pcf.fr/immigration_une_loi_r_actionnaire_et_cruelle"
    },
    q22: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le PCF combat la préférence nationale et les restrictions qui subordonnent l'accès aux droits sociaux à la nationalité. Il défend l'égalité d'accès aux prestations pour les étrangers en situation régulière dès lors qu'ils remplissent les mêmes critères sociaux que les Français ; +3 est directement cohérent.",
      source: "https://www.pcf.fr/immigration_une_loi_r_actionnaire_et_cruelle"
    }
  },
  "les-ecologistes": {
    q19: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : Les Écologistes proposent des voies de migration légales, la régularisation de plusieurs catégories et un accès plus stable au séjour. Ils ne font pas du plafonnement des titres ni de leur durcissement un objectif ; la proposition est directement contraire à cette orientation, d'où -3.",
      source: "https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : Les Écologistes défendent une protection sociale sans discrimination et refusent déjà les différences de droits fondées sur la nationalité pour les résidents réguliers. L'égalité entre Français naturalisés et Français de naissance est donc pleinement cohérente avec leur programme ; +3 est adapté.",
      source: "https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf"
    },
    q22: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le programme écologiste ouvre la protection sociale à toutes et tous sans discrimination et rejette les restrictions de prestations fondées sur la nationalité ou une longue durée de résidence. L'égalité d'accès pour les titulaires d'un séjour régulier correspond donc directement à la ligne publiée ; +3 est adapté.",
      source: "https://lesecologistes.fr/document/5ZhR2m5t2ZaGKqIdD1bJaD/vdef-programme-1.pdf"
    }
  },
  ps: {
    q19: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : le projet socialiste refuse une « logique du chiffre », veut créer davantage de voies légales et faciliter le titre de séjour des personnes qui travaillent durablement en France. Le PS conserve toutefois des conditions de séjour et une politique de maîtrise organisée des flux ; le désaccord avec un durcissement général est donc net mais non absolu, d'où -2.",
      source: "https://projet-socialiste.fr/projet/refaire-societe/"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le PS s'oppose explicitement à la préférence nationale et défend l'égalité des droits sociaux. Une personne naturalisée étant française à part entière, le parti ne soutient aucune priorité liée au fait d'être Français de naissance ; la proposition correspond directement à sa ligne, d'où +3.",
      source: "https://www.parti-socialiste.fr/contre_la_preference_nationale_nous_continuons_le_combat_non_au_rip_de_la_honte"
    },
    q22: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le PS combat explicitement la préférence nationale et les délais de carence visant les étrangers en situation régulière. Il défend l'accès aux prestations selon les critères sociaux de droit commun plutôt que selon la nationalité ; la proposition correspond directement à cette ligne, d'où +3.",
      source: "https://www.parti-socialiste.fr/contre_la_preference_nationale_nous_continuons_le_combat_non_au_rip_de_la_honte"
    }
  },
  renaissance: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : la convention régalienne de Renaissance propose de piloter les entrées par des quotas et un système à points, de durcir le regroupement familial et de contrôler chaque année le maintien des conditions du titre étudiant. Ces mesures restreignent directement certains titres et en rendent l'obtention ou le renouvellement plus exigeants ; +3 est adapté.",
      source: "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : les restrictions proposées par Renaissance portent sur les étrangers, les titres de séjour ou les conditions d'accès à la nationalité, pas sur les droits sociaux d'une personne une fois devenue française. Le parti ne propose aucune distinction entre Français naturalisés et Français de naissance ; +3 est donc le codage cohérent, avec une confiance limitée à 2 faute de passage consacré précisément à ce cas.",
      source: "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
    },
    q22: {
      response: -1,
      confidence: 2,
      justification: "Désaccord modéré : Renaissance conserve des conditions liées à la durée de résidence, au statut et à l'intégration pour certaines prestations et veut interrompre les droits dès l'expiration du titre. Le parti ne défend pas une préférence nationale permanente et maintient de nombreux droits pour les résidents réguliers, mais il n'endosse pas l'égalité immédiate pour tout type de titre de séjour ; -1 traduit cette distinction.",
      source: "https://doc.parti.re/conventions/Restitution-Regalien-Une-Republique-ferme-une-France-apaisee.pdf"
    }
  },
  modem: {
    q19: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : François Bayrou souhaite réguler l'immigration et lie la régularité puis la durée du séjour au travail, à la maîtrise du français et au respect des principes communs. Il ne propose toutefois ni plafond général de titres ni durcissement uniforme de toutes les catégories ; +1 est plus précis qu'un accord fort.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : le MoDem rattache la citoyenneté à l'égalité des droits et ne propose pas de distinguer les Français selon le mode d'acquisition de leur nationalité. Ses conditions d'intégration interviennent avant l'accès à la nationalité ; une fois naturalisée, la personne relève des mêmes droits sociaux, d'où +3 avec une confiance documentaire de 2.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
    },
    q22: {
      response: 0,
      confidence: 1,
      justification: "Position intermédiaire : le MoDem défend une solidarité attachée à la résidence régulière et refuse que les soins indispensables dépendent du passeport, tout en acceptant des conditions de séjour, d'activité ou d'intégration pour l'accès à certains droits. Aucune position actuelle ne tranche l'égalité immédiate pour l'ensemble des prestations et des titres ; 0 est le codage le plus prudent.",
      source: "https://www.mouvementdemocrate.fr/actualites/francois-bayrou-notre-desordre-politique-rend-la-france-faible-video-7531-video"
    }
  },
  horizons: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : Horizons propose des quotas migratoires, un durcissement du regroupement familial et une sélection plus exigeante des admissions selon le travail, la langue et les capacités d'intégration. La restriction du nombre de titres ou de leurs conditions est donc un instrument central de sa politique ; +3 est adapté.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : Horizons veut durcir l'admission, l'intégration et certaines règles applicables aux étrangers, mais ne propose aucune catégorie sociale inférieure pour les citoyens naturalisés. Après acquisition de la nationalité, Français naturalisés et Français de naissance sont placés dans la même catégorie de droits ; +3 est adapté, avec une confiance de 2 car cette égalité est implicite.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    },
    q22: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : le programme d'Horizons cible la suppression des aides sur les étrangers délinquants, mais ne propose pas de priver en général les autres titulaires d'un séjour régulier des prestations de droit commun. L'égalité est donc largement compatible avec sa ligne pour les résidents respectant les règles, sans engagement explicite couvrant tout titre et toute prestation ; +1 reste prudent.",
      source: "https://www.edouardphilippe.fr/priorites/pour-une-france-plus-sure"
    }
  },
  "france-humaniste": {
    q19: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : La France Humaniste veut réguler l'immigration, mieux exécuter les décisions de retour et conditionner le séjour durable à la langue, au travail et à l'intégration. Elle reconnaît parallèlement les besoins démographiques, économiques et universitaires du pays et ne propose pas un plafond général des titres ; +1 traduit cet équilibre.",
      source: "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : La France Humaniste insiste sur l'intégration avant l'accès durable à la communauté nationale, sans proposer ensuite de hiérarchie entre citoyens français selon leur origine ou leur mode de naturalisation. L'égalité des prestations et du logement social entre Français est donc cohérente avec sa ligne ; +3, avec une confiance de 2.",
      source: "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html"
    },
    q22: {
      response: 0,
      confidence: 1,
      justification: "Position intermédiaire : La France Humaniste affirme que les soins indispensables ne doivent pas dépendre du passeport et ne propose pas de préférence nationale générale pour les résidents réguliers. Ses textes distinguent néanmoins la citoyenneté, l'intégration et certains droits attachés au séjour, sans traiter l'égalité de toutes les prestations ; 0 évite d'extrapoler au-delà de la source.",
      source: "https://lafrancehumaniste.fr/articles/le-moment-francais-sorbonne.html"
    }
  },
  lr: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : Bruno Retailleau veut réduire l'immigration légale et agir directement sur les titres accordés au titre de l'asile, des études, de la famille et du travail. Le durcissement et la diminution des admissions régulières correspondent exactement à la proposition ; +3 est adapté.",
      source: "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : LR formule ses délais d'accès aux prestations pour les étrangers, donc avant une éventuelle naturalisation, et Laurent Wauquiez a même refusé une priorité au logement social fondée sur la nationalité au profit d'un critère de travail. Rien ne distingue les droits d'un Français naturalisé de ceux d'un Français de naissance ; +3 est directement justifié.",
      source: "https://republicains.fr/actualites/2025/02/03/laurent-wauquiez-il-faut-passer-des-paroles-aux-actes/"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : Bruno Retailleau propose de réserver les aides sociales aux étrangers justifiant cinq années de résidence légale et de travail. Un titulaire récent d'un titre n'aurait donc pas les mêmes droits qu'un Français placé dans la même situation ; cette opposition directe à l'égalité immédiate justifie -3.",
      source: "https://republicains.fr/actualites/2026/05/31/ma-candidature-ira-jusquau-bout/"
    }
  },
  "nouvelle-energie": {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : Nouvelle Énergie propose de diviser par huit la délivrance annuelle de titres de séjour, de supprimer plusieurs voies de régularisation et de renforcer les conditions d'admission familiale. L'objectif porte explicitement sur le nombre et l'accès aux titres ; +3 est directement documenté.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : Nouvelle Énergie réserve ses délais de carence aux étrangers et présente la démarche de naturalisation comme le passage vers la pleine appartenance nationale. Le programme ne maintient aucune différence de prestations entre un Français naturalisé et un Français de naissance ; +3 est adapté.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : Nouvelle Énergie veut conditionner les prestations sociales non contributives à cinq années de résidence régulière. Les détenteurs récents d'un titre seraient donc traités différemment des nationaux malgré un séjour légal ; la proposition d'égalité générale est directement rejetée, d'où -3.",
      source: "https://www.unenouvelleenergie.fr/notre-programme/immigration/"
    }
  },
  udr: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : l'UDR veut supprimer le regroupement familial automatique, instaurer des quotas annuels et renforcer fortement les conditions d'admission et de maintien au séjour. Restreindre les titres est donc explicitement au cœur de ses priorités ; +3 est adapté.",
      source: "https://www.udr.fr/priorites"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : l'UDR cible explicitement les étrangers dans sa proposition de délai pour les allocations. Une personne naturalisée n'étant plus étrangère mais française, aucune restriction publiée ne la distingue d'une personne française de naissance ; +3 est le codage cohérent, avec une confiance de 2 car le cas n'est pas traité explicitement.",
      source: "https://www.udr.fr/priorites"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : l'UDR propose de supprimer les allocations sociales pour les étrangers ne résidant pas régulièrement en France depuis au moins cinq ans. Le parti assume donc une différence de droits fondée sur l'ancienneté du séjour légal ; cela contredit directement l'égalité proposée et justifie -3.",
      source: "https://www.udr.fr/priorites"
    }
  },
  rn: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le RN veut réduire drastiquement l'immigration légale, supprimer ou limiter plusieurs catégories d'admission et donner la priorité aux besoins nationaux pour les titres de travail. La restriction du volume et des conditions de séjour correspond directement à sa ligne ; +3 est adapté.",
      source: "https://rassemblementnational.fr/discours/discours-de-jordan-bardella-a-menton"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le RN veut rendre la naturalisation plus difficile, mais reconnaît explicitement qu'une fois la nationalité acquise, la personne obtient tous les droits et avantages correspondants, dont les prestations sociales et familiales. Sa priorité nationale oppose Français et étrangers, non Français de naissance et Français naturalisés ; +3 est donc adapté.",
      source: "https://rassemblementnational.fr/communiques/nationalite-francaise-la-grande-braderie"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : le RN défend la priorité nationale pour les aides et le logement social et veut conditionner plusieurs prestations à une durée minimale de travail ou de résidence. Il refuse donc explicitement l'égalité générale entre simples titulaires d'un titre et nationaux ; -3 est adapté.",
      source: "https://rassemblementnational.fr/discours/discours-de-jordan-bardella-a-menton"
    }
  },
  reconquete: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le programme de Reconquête veut supprimer le regroupement familial, réduire fortement les titres accordés et réserver l'immigration de travail à des besoins strictement sélectionnés. La proposition correspond directement à ce durcissement quantitatif et qualitatif ; +3 est adapté.",
      source: "https://programme.ericzemmour.fr/immigration"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : Reconquête veut supprimer les prestations non contributives pour les étrangers extra-européens et, séparément, durcir la naturalisation. Cette architecture ne prévoit pas de différence sociale après l'acquisition de la nationalité : une personne naturalisée entre dans la catégorie des Français bénéficiaires de la préférence nationale ; +3 est cohérent, avec une confiance de 2 car l'implication n'est pas formulée mot pour mot.",
      source: "https://fede32.parti-reconquete.fr/article/operation-contre-l-immigration-clandestine-a-mayotte-et-en-metropole"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : Reconquête veut réserver aux Français les prestations sociales non contributives et revendique une préférence nationale durable. La possession d'un titre de séjour ne suffirait donc pas à ouvrir les mêmes droits sociaux ; l'opposition à la proposition est maximale, d'où -3.",
      source: "https://fede79.parti-reconquete.fr/communique-de-presse/le-conseil-departemental-des-deux-sevres-met-en-place-un-dispositif-pour-que-des-migrants-clandestins-vivent-avec-des-personnes-agees"
    }
  },
  allemagne: {
    q19: {
      response: 2,
      confidence: 3,
      justification: "Accord net : l'accord de coalition allemand durcit plusieurs voies de séjour, suspend le regroupement familial de certains bénéficiaires de protection et renforce les conditions et contrôles migratoires. Il maintient toutefois des voies facilitées pour la main-d'œuvre qualifiée dont l'économie a besoin ; +2 est plus précis qu'un accord maximal.",
      source: "https://www.bundesregierung.de/breg-de/aktuelles/koalitionsvertrag-2025-2340970"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le portail fédéral allemand précise que la naturalisation fait de la personne un citoyen allemand avec tous les droits et devoirs. Les conditions peuvent être durcies avant l'acquisition, mais les droits sociaux ne dépendent ensuite pas du fait d'être Allemand de naissance ou naturalisé ; +3 est directement documenté.",
      source: "https://www.einbuergerung.de/ablauf.php"
    },
    q22: {
      response: -1,
      confidence: 2,
      justification: "Désaccord modéré : en Allemagne, l'accès à la protection de base dépend du type de titre et certaines catégories, notamment les demandeurs d'asile, relèvent d'un régime distinct. De nombreux étrangers légalement installés peuvent néanmoins accéder aux prestations ordinaires sous les mêmes conditions de ressources ; la différence existe mais n'est pas générale, d'où -1.",
      source: "https://www.arbeitsagentur.de/grundsicherung/infos-fuer-menschen-aus-dem-ausland"
    }
  },
  espagne: {
    q19: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : le gouvernement Sánchez a élargi les voies de séjour et de travail et engagé en 2026 une régularisation extraordinaire donnant un titre d'un an aux personnes remplissant les critères. Sa politique vise à faciliter l'accès régulier plutôt qu'à réduire le nombre de titres ou à en durcir globalement les conditions ; -3 est adapté.",
      source: "https://www.lamoncloa.gob.es/lang/en/gobierno/councilministers/paginas/2026/20260127-council-press-conference.aspx"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : l'article 14 de la Constitution espagnole proclame l'égalité de tous les Espagnols devant la loi et interdit notamment les discriminations fondées sur la naissance ou toute autre condition personnelle. Une personne naturalisée relève donc des mêmes prestations et règles d'accès au logement qu'une personne espagnole de naissance ; +3 est adapté.",
      source: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229"
    },
    q22: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le gouvernement présente la régularisation comme un moyen de garantir des droits égaux, l'accès au travail et une intégration complète dans la société. Cette doctrine rattache les droits sociaux à la résidence régulière plutôt qu'à la nationalité ; l'égalité proposée correspond directement à l'orientation affichée, d'où +3.",
      source: "https://www.lamoncloa.gob.es/lang/en/gobierno/councilministers/paginas/2026/20260127-council-press-conference.aspx"
    }
  },
  suisse: {
    q19: {
      response: 1,
      confidence: 2,
      justification: "Accord modéré : la Suisse limite par quotas les admissions professionnelles de ressortissants hors UE-AELE et les réserve principalement aux personnes hautement qualifiées. Le Conseil fédéral maintient toutefois la libre circulation européenne, des voies répondant aux besoins du marché du travail et rejette un plafond global rigide ; +1 traduit cette politique sélective plutôt qu'un durcissement général.",
      source: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/grundlagen_zur_arbeitsmarktzulassung.html"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le Secrétariat d'État aux migrations indique que l'acquisition de la citoyenneté suisse emporte les droits et devoirs du citoyen. Les prestations peuvent varier selon les règles cantonales ou la situation sociale, mais pas selon que la citoyenneté a été acquise à la naissance ou par naturalisation ; +3 est adapté.",
      source: "https://www.sem.admin.ch/sem/de/home/integration-einbuergerung/schweizer-werden.html"
    },
    q22: {
      response: 0,
      confidence: 2,
      justification: "Position intermédiaire : les personnes séjournant légalement et durablement en Suisse peuvent recevoir l'aide sociale selon leur besoin, mais le recours à cette aide peut affecter certains titres et tous les statuts n'ouvrent pas les mêmes prestations. Le système ne repose ni sur une égalité complète pour tout détenteur d'un titre, ni sur une exclusion générale ; 0 est adapté.",
      source: "https://www.sem.admin.ch/sem/fr/home/themen/aufenthalt/faq.html"
    }
  },
  finlande: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : depuis janvier 2026, la Finlande a porté de quatre à six ans la durée normale requise pour la résidence permanente et ajouté des conditions de langue, de travail et de non-recours durable à l'aide sociale. Le gouvernement rend donc directement l'accès à un titre durable plus difficile ; +3 est adapté.",
      source: "https://valtioneuvosto.fi/en/-/1410869/stricter-conditions-for-permanent-residence-permits-as-of-8-january"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : la Constitution finlandaise impose l'égalité devant la loi et interdit les différences de traitement sans motif acceptable, notamment selon l'origine. Le gouvernement durcit les conditions avant la naturalisation, mais ne crée pas de droits sociaux distincts pour les citoyens naturalisés ; à situation comparable, +3 est adapté.",
      source: "https://www.finlex.fi/api/media/statute-foreign-language-translation/1070874/mainPdf/main.pdf"
    },
    q22: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : le gouvernement finlandais a décidé de créer pour les nouveaux immigrés une allocation d'intégration distincte et légèrement inférieure à la prestation ordinaire, pendant leurs trois premières années. Une protection subsiste, mais elle n'est pas identique à celle des nationaux et résidents plus anciens ; -2 reflète cette différenciation explicite.",
      source: "https://valtioneuvosto.fi/en/-/1271139/new-integration-assistance-to-improve-incentives-to-work-and-strengthen-language-skills"
    }
  },
  "royaume-uni": {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le livre blanc britannique réduit les catégories de métiers ouvrant droit au visa, renforce les exigences de qualification et de langue, raccourcit certains visas et allonge le parcours normal vers l'installation durable. Il vise explicitement à faire baisser l'immigration nette en durcissant l'accès et le maintien au séjour ; +3 est adapté.",
      source: "https://www.gov.uk/government/publications/restoring-control-over-the-immigration-system-white-paper"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : la doctrine officielle britannique précise expressément qu'une personne naturalisée obtient, dès la naturalisation, les mêmes droits et privilèges qu'une personne née citoyenne britannique. La proposition correspond mot pour mot à cette règle, y compris pour les droits sociaux ; +3 est directement documenté.",
      source: "https://www.gov.uk/government/publications/british-citizenship-caseworker-guidance/british-citizenship-accessible"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : la majorité des migrants titulaires d'une permission temporaire sont soumis à la condition « No Recourse to Public Funds », qui leur interdit de nombreuses prestations jusqu'à l'obtention d'un statut ouvrant ces droits, sauf exceptions. Un titre de séjour ne donne donc clairement pas les mêmes droits qu'à un citoyen britannique ; -3 est adapté.",
      source: "https://www.gov.uk/government/publications/public-funds/public-funds-accessible"
    }
  },
  danemark: {
    q19: {
      response: 2,
      confidence: 3,
      justification: "Accord net : l'accord de gouvernement danois maintient une politique stricte sur l'asile et le regroupement familial et renforce les exigences liées au séjour et à l'intégration. Il conserve cependant des voies d'admission professionnelle pour répondre aux pénuries de main-d'œuvre ; +2 traduit un durcissement important mais sélectif.",
      source: "https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf"
    },
    q21: {
      response: 3,
      confidence: 2,
      justification: "Accord très fort : la naturalisation votée par le Parlement confère la citoyenneté danoise et les droits qui y sont attachés. Les conditions danoises sont exigeantes avant l'acquisition et certaines prestations dépendent de la résidence ou de l'emploi, mais elles ne distinguent pas ensuite les citoyens selon leur mode d'acquisition ; +3 est adapté, avec une confiance de 2.",
      source: "https://lifeindenmark.borger.dk/settle-in-denmark/danish-citizenship/conditions-for-foreign-citizens--acquisition-of-danish-citizenship"
    },
    q22: {
      response: -3,
      confidence: 3,
      justification: "Désaccord très fort : pour obtenir les taux ordinaires de l'aide sociale, le Danemark exige en principe neuf années de résidence sur dix et, pour certains arrivants, deux ans et demi d'emploi. Les nouveaux titulaires d'un droit de séjour reçoivent donc un niveau différent des résidents remplissant ces conditions ; l'égalité immédiate est directement contredite, d'où -3.",
      source: "https://lifeindenmark.borger.dk/money-and-tax/social-benefits/social-assistance"
    }
  },
  "pays-bas": {
    q19: {
      response: 2,
      confidence: 3,
      justification: "Accord net : l'accord de coalition Jetten veut réduire l'afflux, maîtriser l'asile comme l'immigration de travail selon la capacité d'accueil et les besoins du pays, et accélérer les décisions de séjour. Il maintient une place pour les réfugiés et les travailleurs utiles, ce qui justifie +2 plutôt qu'un accord maximal.",
      source: "https://www.government.nl/government/coalition-agreement"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : après la cérémonie de naturalisation, la personne devient citoyenne néerlandaise et bénéficie des droits attachés à cette citoyenneté. Le gouvernement ne prévoit pas de catégorie sociale différente selon que la nationalité a été acquise à la naissance ou plus tard ; les mêmes règles de prestations s'appliquent à situation comparable, d'où +3.",
      source: "https://www.government.nl/themes/migration-and-travel/dutch-citizenship/becoming-a-dutch-citizen"
    },
    q22: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : aux Pays-Bas, demander certaines prestations publiques peut entraîner le réexamen ou la fin du droit de séjour selon le type de titre ; seuls certains compléments sont sans conséquence et la résidence permanente protège davantage. Les titulaires de titres temporaires ne disposent donc pas des mêmes garanties que les nationaux, ce qui justifie -2.",
      source: "https://ind.nl/en/benefits-from-public-funds"
    }
  },
  pologne: {
    q19: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : le gouvernement Tusk a réduit de 31 % le nombre de visas délivrés au premier semestre 2024, relevé leur prix, durci les instructions consulaires et annoncé un contrôle strict de l'objet, de l'utilité et de l'intégration des nouveaux entrants. La réduction et le durcissement des titres correspondent directement à la proposition ; +3 est adapté.",
      source: "https://www.gov.pl/web/primeminister/taking-back-control-ensuring-security"
    },
    q21: {
      response: 3,
      confidence: 3,
      justification: "Accord très fort : la Constitution polonaise garantit l'égalité devant la loi et interdit toute discrimination dans la vie sociale ou économique. Les droits sociaux reconnus aux citoyens ne sont pas différenciés selon que la citoyenneté polonaise est acquise par naissance ou naturalisation ; à situation comparable, +3 est adapté.",
      source: "https://www.sejm.gov.pl/prawo/konst/angielski/konse.htm"
    },
    q22: {
      response: -2,
      confidence: 3,
      justification: "Désaccord net : en Pologne, l'aide sociale générale est ouverte notamment aux titulaires d'un séjour permanent ou de longue durée et aux bénéficiaires d'une protection, mais pas indistinctement à toute personne disposant d'un titre temporaire. Les étrangers admis dans les catégories éligibles sont traités selon les règles générales ; cette restriction par statut justifie -2 plutôt que -3.",
      source: "https://www.gov.pl/web/family/social-assistance-for-foreigners-what-kind-of-support-in-poland-can-they-expect"
    }
  }
};

(() => {
  if (typeof DATA === "undefined" || !Array.isArray(DATA.questions) || !Array.isArray(DATA.entities)) return;

  const indexes = new Map(DATA.questions.map((question, index) => [question.id, index]));
  const q19Index = indexes.get(19);
  const q21Index = indexes.get(21);
  const q22Index = indexes.get(22);
  if (q19Index === undefined || q21Index === undefined || q22Index === undefined) return;

  for (const entity of DATA.entities) {
    const research = RESIDENCE_PERMIT_RESEARCH[entity.id];
    if (!research) continue;

    for (const [index, coding] of [
      [q19Index, research.q19],
      [q21Index, research.q21],
      [q22Index, research.q22]
    ]) {
      entity.responses[index] = coding.response;
      entity.confidence[index] = coding.confidence;
      entity.justifications[index] = coding.justification;
      entity.sources[index] = coding.source;
    }

    const scores = {};
    for (const axis of DATA.axes) {
      const mass = DATA.questions.reduce(
        (sum, question) => sum + Math.abs(question.coefficients[axis.key] || 0),
        0
      );
      const numerator = DATA.questions.reduce(
        (sum, question, index) => sum + (entity.responses[index] ?? 0) * (question.coefficients[axis.key] || 0),
        0
      );
      scores[axis.key] = mass ? 10 * numerator / (3 * mass) : 0;
    }
    entity.axisScores = scores;
    entity.averageConfidence = entity.confidence.reduce((sum, value) => sum + value, 0) / DATA.questions.length;
  }
})();
