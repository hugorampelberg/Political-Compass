#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';

function load(path, name) {
  const c = {};
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(path, 'utf8').replace(/^const /gm, 'var '), c, { filename: path });
  return c[name];
}

const qp='data/questionnaire.js';
const pp='data/parties.js';
const gp='data/governments.js';
const qd=load(qp,'QUESTIONNAIRE_DATA');
const parties=load(pp,'PARTIES_DATA');
const governments=load(gp,'GOVERNMENTS_DATA');
const all=[...parties,...governments];
const beforeQuestions=JSON.parse(JSON.stringify(qd.questions));
const beforeEntities=new Map(all.map(e=>[e.id,JSON.parse(JSON.stringify(e))]));
const idx=new Map(qd.questions.map((q,i)=>[q.id,i]));
const i18=idx.get(18), i56=idx.get(56);
if(i18===undefined||i56===undefined) throw new Error('Q18 ou Q56 introuvable');
if(qd.questions[i18].text!=="La liberté d'expression devrait être protégée même lorsque des propos sont considérés comme offensants ou choquants.") throw new Error('Ancienne Q18 inattendue');
if(qd.questions[i56].text!=="Un immigré légal qui travaille, paie ses impôts, maîtrise correctement le français et respecte les lois devrait pouvoir obtenir la nationalité française relativement facilement, même s'il conserve une partie importante de sa culture d'origine.") throw new Error('Ancienne Q56 inattendue');

qd.questions[i18]={
  id:18,
  theme:'Institutions / territoires',
  text:'Les régions devraient pouvoir adopter des règles différentes en matière économique, sociale ou environnementale plutôt que d’appliquer partout les mêmes règles nationales.',
  defaultAnswer:0,
  note:'',
  coefficients:{economy:0,authority:0,europe:0,ecology:0,immigration:0,democracy:0.8}
};
qd.questions[i56]={
  id:56,
  theme:'Immigration / régularisation',
  text:"Un étranger en situation irrégulière qui travaille de façon stable en France depuis plusieurs années et n’a commis aucun délit devrait pouvoir être régularisé, même s’il est entré ou est resté sur le territoire sans autorisation.",
  defaultAnswer:0,
  note:'',
  coefficients:{economy:0,authority:0,europe:0,ecology:0,immigration:1,democracy:0}
};

const coding={
  lfi:{q18:[-3,4,'Désaccord fort : LFI s’oppose explicitement au droit à la différenciation lorsqu’il permet à des collectivités de déroger aux normes nationales, en particulier par crainte de moins-disant social ou environnemental et d’une rupture de l’égalité républicaine.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[3,4,'Accord fort : LFI demande explicitement la régularisation de l’ensemble des travailleurs et travailleuses sans papiers ; la situation décrite par la question entre directement dans cette proposition.','https://lafranceinsoumise.fr/2025/11/07/journee-internationale-des-migrants-la-france-insoumise-appelle-a-la-marche-des-solidarites/']},
  pcf:{q18:[-2,4,'Désaccord net : le PCF défend une décentralisation dotée de moyens et de compétences locales, mais reste attaché à l’égalité républicaine et à l’unicité des règles nationales dans les domaines sociaux essentiels ; il est donc réservé face à une différenciation normative large entre régions.','https://www.pcf.fr/pacte_2025_republique'],q56:[3,4,'Accord fort : le PCF propose explicitement de régulariser les travailleurs sans papiers afin de leur garantir les mêmes droits et d’éviter leur mise en concurrence avec les autres salariés.','https://www.pcf.fr/pacte_2025_republique']},
  'les-ecologistes':{q18:[3,4,'Accord fort : Les Écologistes défendent un fédéralisme différencié, le principe de subsidiarité ainsi qu’une autonomie réglementaire et fiscale accrue des territoires ; la proposition correspond directement à leur modèle institutionnel.','https://lesecologistes.fr/pages/6930DbJUnKbVCve3jxr595/v-la-republique-partout-et-pour-tou-te-s-organiser-le-partage-reel-des-pouvoirs'],q56:[3,4,'Accord fort : Les Écologistes proposent une large régularisation des sans-papiers et, explicitement, la régularisation systématique des travailleurs sans papiers.','https://lesecologistes.fr/pages/16D50P7zbCfe2zO5hXh2V9/iv-l-egalite-pour-toutes-et-tous']},
  ps:{q18:[2,4,'Accord net : le PS se déclare favorable à une plus grande différenciation territoriale et à des adaptations normatives locales, tout en maintenant un socle national d’égalité et un encadrement par la loi.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[3,4,'Accord fort : le PS a explicitement proposé de régulariser les personnes sans papiers établies depuis longtemps en France lorsqu’elles disposent d’un travail et d’un logement, ce qui correspond très directement à la question.','https://www.parti-socialiste.fr/meeting_de_perpignan']},
  renaissance:{q18:[2,4,'Accord net : Renaissance accepte la différenciation territoriale dans le respect du principe d’égalité et souhaite laisser davantage de place au pouvoir réglementaire local pour adapter l’application des politiques publiques.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[1,4,'Accord modéré : la majorité macroniste a défendu une admission exceptionnelle au séjour par le travail pour des étrangers présents depuis plusieurs années, mais principalement sous conditions et dans les métiers en tension ; la question est plus large que le dispositif soutenu.','https://www.assemblee-nationale.fr/dyn/16/amendements/1855/CION_LOIS/CL1247']},
  modem:{q18:[1,4,'Accord modéré : le MoDem est favorable au principe de subsidiarité et admet l’élargissement du pouvoir réglementaire local, mais demande un encadrement précis et des moyens adaptés ; son soutien à la différenciation reste prudent.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[2,4,'Accord net : des responsables MoDem ont explicitement défendu la régularisation de travailleurs sans papiers qui travaillent, cotisent et paient leurs impôts, notamment pour sortir de situations d’exploitation ; le parti conserve néanmoins une logique de critères.','https://www.mouvementdemocrate.fr/actualites/erwan-balanant-il-faut-un-texte-juste-humaniste-et-efficace-video-6571-video']},
  horizons:{q18:[2,4,'Accord net : les députés Horizons ayant participé au rapport sur la décentralisation jugent important de renforcer le pouvoir réglementaire des collectivités au nom de la subsidiarité, même s’ils insistent particulièrement sur l’échelon communal.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[1,3,'Accord modéré : Horizons a soutenu la recherche d’un dispositif encadré de régularisation par le travail dans les métiers en tension avec la majorité, sans défendre une régularisation générale de tous les travailleurs installés depuis plusieurs années.','https://www.assemblee-nationale.fr/16/cri/2023-2024/20240081.asp']},
  'france-humaniste':{q18:[1,3,'Accord modéré : La France Humaniste et Dominique de Villepin défendent une réorganisation territoriale plus proche des réalités locales et davantage de responsabilités territoriales, sans aller jusqu’à proposer clairement une autonomie normative générale des régions.','https://lafrancehumaniste.fr/articles/la-grande-adaptation-du-territoire.html'],q56:[0,2,'Position non tranchée : La France Humaniste adopte une ligne humaniste sur l’immigration et critique le durcissement identitaire, mais aucune proposition suffisamment précise n’a été identifiée sur la régularisation d’un travailleur en situation irrégulière selon les critères de la question.','https://lafrancehumaniste.fr/articles/la-france-face-au-piege-identitaire.html']},
  lr:{q18:[2,4,'Accord net : LR soutient le principe de différenciation territoriale et n’est pas opposé à un pouvoir réglementaire local accru, à condition de préserver l’unité nationale et de ne pas systématiser les dérogations.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[-2,4,'Désaccord net : Bruno Retailleau et LR affirment qu’il n’existe pas de droit à la régularisation et ont durci les critères d’admission exceptionnelle au séjour ; des régularisations exceptionnelles restent possibles, ce qui conduit à -2 plutôt qu’à -3.','https://republicains.fr/actualites/2025/01/24/bruno-retailleau-il-ny-a-pas-de-droit-a-la-regularisation/']},
  'nouvelle-energie':{q18:[3,4,'Accord fort : Nouvelle Énergie propose explicitement un transfert massif de compétences aux collectivités et une autonomie du pouvoir réglementaire local permettant d’adapter les politiques publiques et les normes aux réalités territoriales.','https://www.unenouvelleenergie.fr/notre-programme/generer-un-renouveau-civique/'],q56:[-3,4,'Désaccord fort : Nouvelle Énergie propose explicitement de supprimer toute possibilité d’être régularisé après être entré clandestinement sur le territoire ; la proposition est directement opposée à la question.','https://www.unenouvelleenergie.fr/notre-programme/reussir-une-nouvelle-ambition-francaise/']},
  udr:{q18:[1,3,'Accord modéré : l’UDR veut simplifier profondément l’organisation territoriale et rapprocher certaines décisions du terrain, notamment via de nouvelles provinces, mais ne défend pas clairement un pouvoir normatif régional aussi large que celui décrit dans la question.','https://www.udr.fr/livretactei'],q56:[-2,3,'Désaccord net : l’UDR défend une politique d’immigration très restrictive, l’exécution des OQTF et une forte réduction des possibilités de séjour ; aucune proposition directe aussi absolue que celle de Nouvelle Énergie n’a toutefois été identifiée sur ce cas précis.','https://www.udr.fr/priorites']},
  rn:{q18:[-2,4,'Désaccord net : le RN considère que l’unité de la loi et l’indivisibilité de la République doivent primer et s’oppose au renforcement général du pouvoir réglementaire local, même s’il accepte certaines souplesses de compétences entre collectivités.','https://www.assemblee-nationale.fr/dyn/docs/RINFANR5L16B2463.raw'],q56:[-3,4,'Désaccord fort : le RN dénonce explicitement la régularisation des étrangers en situation irrégulière par les métiers en tension comme une prime à l’irrégularité et un facteur d’appel d’air ; il est donc clairement opposé au principe posé.','https://questions.assemblee-nationale.fr/q16/16-1324QG.htm']},
  reconquete:{q18:[0,2,'Position non tranchée : Reconquête défend le rôle des communes et de l’État et souhaite revoir la répartition des compétences territoriales, mais aucune position directe et suffisamment précise n’a été identifiée en faveur ou contre la possibilité pour les régions d’adopter des normes économiques, sociales ou environnementales différentes.','https://programme.ericzemmour.fr/reforme-etat'],q56:[-3,4,'Désaccord fort : Reconquête défend une ligne de zéro régularisation des étrangers en situation irrégulière et privilégie leur éloignement ; la proposition est directement contraire à la question.','https://programme.ericzemmour.fr/immigration']},

  allemagne:{q18:[3,4,'Accord fort : l’Allemagne est un État fédéral dans lequel les Länder disposent de leurs propres compétences législatives et peuvent adopter des lois applicables uniquement sur leur territoire dans les domaines qui leur appartiennent.','https://www.bundestag.de/fr/parlement/fonctions/legislation/competences-246012'],q56:[-1,3,'Désaccord modéré : le gouvernement Merz renforce actuellement la limitation de l’immigration irrégulière et l’exécution des retours tout en favorisant des voies légales d’immigration de travail ; l’emploi stable ne constitue pas en lui-même un principe général de régularisation.','https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/neuregelungen-migrationspolitik-2351746']},
  espagne:{q18:[3,4,'Accord fort : les communautés autonomes espagnoles disposent d’institutions et de compétences normatives propres dans de nombreux domaines ; l’existence de règles territoriales différentes fait structurellement partie du modèle espagnol.','https://administracion.gob.es/pag_Home/espanaAdmon/directorioOrganigrama/comunidadesAutonomas/comunidadesAutonomas.htm'],q56:[3,4,'Accord fort : en 2026, le gouvernement Sánchez a mis en œuvre une régularisation extraordinaire accessible notamment aux personnes en situation irrégulière présentes depuis au moins cinq mois, sans antécédents pénaux, avec une voie liée au travail ; le dispositif est au moins aussi ouvert que la question.','https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/inclusion/paginas/2026/proceso-regularizacion-migratoria.aspx']},
  suisse:{q18:[3,4,'Accord fort : le fédéralisme suisse répartit les pouvoirs politiques et législatifs entre Confédération, cantons et communes afin de leur laisser une large autonomie ; les cantons ont leurs propres constitutions, parlements et gouvernements.','https://www.aboutswitzerland.eda.admin.ch/en/federalism'],q56:[0,4,'Position équilibrée : le droit suisse permet la régularisation de certains sans-papiers très bien intégrés au titre des cas de rigueur et l’opération Papyrus a régularisé des travailleurs, mais avec des conditions nettement plus strictes, notamment cinq à dix ans de séjour selon la situation familiale et un examen individuel.','https://www.sem.admin.ch/sem/fr/home/themen/aufenthalt/sans-papiers/papyrus.html']},
  finlande:{q18:[2,4,'Accord net : le système finlandais permet une différenciation importante des tâches et politiques territoriales, particulièrement entre municipalités et territoires selon leurs caractéristiques, mais il reste moins fédéral et moins autonome normativement que les modèles allemand ou suisse.','https://valtioneuvosto.fi/-/10623/kuntien-erilaiset-lahtokohdat-nakyvat-tehtavien-eriytymisena-'],q56:[-3,4,'Désaccord fort : le gouvernement Orpo a explicitement renforcé l’exécution des expulsions et fait de l’éloignement rapide des personnes en séjour illégal un objectif de sa politique migratoire ; un emploi stable ne fonde pas une régularisation générale.','https://valtioneuvosto.fi/en/-/1410869/legislative-amendments-on-removal-from-the-country-and-entry-bans-to-enter-into-force']},
  'royaume-uni':{q18:[3,4,'Accord fort : le Royaume-Uni a transféré par la dévolution de larges compétences législatives et exécutives à l’Écosse, au pays de Galles et à l’Irlande du Nord, ce qui produit volontairement des règles différentes selon les nations.','https://www.deliveringforscotland.gov.uk/scotland-in-the-uk/devolution/'],q56:[-2,4,'Désaccord net : la politique britannique actuelle renforce la lutte contre le travail illégal et l’éloignement des personnes sans droit au séjour ; le gouvernement ne reconnaît pas le travail stable et l’ancienneté comme voie générale de régularisation, même si des exceptions juridiques individuelles subsistent.','https://questions-statements.parliament.uk/written-statements/detail/2026-06-30/hcws159']},
  danemark:{q18:[1,3,'Accord modéré : le Danemark accorde une autonomie importante aux communes et régions dans l’organisation et la mise en œuvre de nombreux services publics et recherche des solutions adaptées localement, mais l’essentiel du pouvoir législatif reste national.','https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf'],q56:[-3,4,'Désaccord fort : le gouvernement Frederiksen III veut réduire les flux irréguliers et augmenter les retours, en affirmant que le maintien sur le territoire doit relever d’une décision démocratique et d’un séjour légal ; la proposition de régularisation par le seul ancrage professionnel est contraire à cette ligne.','https://stm.dk/statsministeriet/publikationer/faelles-brev-om-udrejse-og-modtagecentre-uden-for-europa/']},
  'pays-bas':{q18:[2,4,'Accord net : les provinces néerlandaises ont des pouvoirs autonomes dans plusieurs domaines, notamment l’aménagement, l’économie régionale, les infrastructures et la nature, mais une grande partie du cadre juridique demeure fixé nationalement.','https://www.government.nl/themes/government-and-democracy/provinces/provincial-tasks'],q56:[-1,3,'Désaccord modéré : la coalition néerlandaise actuelle veut réduire les abus et les flux irréguliers, soutenir les retours et réserver l’immigration de travail aux besoins identifiés ; elle ne défend pas une régularisation générale par l’ancienneté et le travail, tout en gardant des clauses humanitaires.','https://www.government.nl/government/coalition-agreement/the-netherlands-in-the-world']},
  pologne:{q18:[1,3,'Accord modéré : les voïvodies polonaises disposent d’une autonomie régionale et peuvent adopter des actes de droit local dans les domaines confiés par la loi, mais leur pouvoir normatif reste nettement encadré par la législation nationale.','https://eli.gov.pl/eli/DU/1998/576'],q56:[-2,4,'Désaccord net : le gouvernement polonais revendique en 2026 une politique migratoire plus sélective, une forte réduction des visas et permis ainsi qu’une hausse des expulsions ; le séjour et le travail doivent être régularisés par les voies légales plutôt qu’après une présence irrégulière prolongée.','https://www.gov.pl/web/mswia-en/eight-times-fewer-visas-to-poland-for-foreign-nationals--we-have-regained-control-over-immigration-the-governments-migration-policy-is-proving-effective']}
};

const entityIds=new Set(all.map(e=>e.id));
if(Object.keys(coding).length!==all.length) throw new Error(`Coding count ${Object.keys(coding).length} != entities ${all.length}`);
for(const id of Object.keys(coding)) if(!entityIds.has(id)) throw new Error(`Entité inconnue ${id}`);

for(const e of all){
  const c=coding[e.id];
  for(const [i,key] of [[i18,'q18'],[i56,'q56']]){
    const [response,confidence,justification,source]=c[key];
    e.responses[i]=response;
    e.confidence[i]=confidence;
    e.justifications[i]=justification;
    e.sources[i]=source;
  }
}

const axes=qd.axes.map(a=>a.key);
qd.axisMasses=Object.fromEntries(axes.map(axis=>[axis,qd.questions.reduce((s,q)=>s+Math.abs(q.coefficients[axis]||0),0)]));
for(const e of all){
  e.axisScores=Object.fromEntries(axes.map(axis=>{
    let n=0,m=0;
    qd.questions.forEach((q,i)=>{const c=q.coefficients[axis]||0;n+=e.responses[i]*c;m+=Math.abs(c);});
    return [axis,m?10*n/(3*m):0];
  }));
  e.averageConfidence=e.confidence.reduce((a,b)=>a+b,0)/e.confidence.length;
}

for(let i=0;i<qd.questions.length;i++){
  if(i===i18||i===i56) continue;
  if(JSON.stringify(qd.questions[i])!==JSON.stringify(beforeQuestions[i])) throw new Error(`Question hors périmètre modifiée à l’index ${i}`);
}
for(const e of all){
  const b=beforeEntities.get(e.id);
  for(let i=0;i<e.responses.length;i++) if(i!==i18&&i!==i56&&e.responses[i]!==b.responses[i]) throw new Error(`${e.id}: réponse hors Q18/Q56 modifiée`);
  for(let i=0;i<e.confidence.length;i++) if(i!==i18&&i!==i56&&e.confidence[i]!==b.confidence[i]) throw new Error(`${e.id}: confiance hors Q18/Q56 modifiée`);
  for(let i=0;i<e.justifications.length;i++) if(i!==i18&&i!==i56&&e.justifications[i]!==b.justifications[i]) throw new Error(`${e.id}: justification hors Q18/Q56 modifiée`);
  for(let i=0;i<e.sources.length;i++) if(i!==i18&&i!==i56&&e.sources[i]!==b.sources[i]) throw new Error(`${e.id}: source hors Q18/Q56 modifiée`);
}

fs.writeFileSync(qp,`// Questions, axes et métadonnées du questionnaire.\nconst QUESTIONNAIRE_DATA = ${JSON.stringify(qd,null,2)};\n`);
fs.writeFileSync(pp,`// Données de comparaison avec les partis politiques français.\nconst PARTIES_DATA = ${JSON.stringify(parties,null,2)};\n`);
fs.writeFileSync(gp,`// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(governments,null,2)};\n`);
console.log('Q18 and Q56 replaced; all entity codings and scores recomputed.');
console.log(qd.axisMasses);
