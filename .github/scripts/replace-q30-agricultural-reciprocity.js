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
const i=qd.questions.findIndex(q=>q.id===30);
if(i<0) throw new Error('Q30 introuvable');
if(qd.questions[i].text!=="La vidéosurveillance et les outils de surveillance numérique devraient être davantage utilisés pour prévenir les crimes.") throw new Error(`Ancienne Q30 inattendue: ${qd.questions[i].text}`);

qd.questions[i]={
  id:30,
  theme:'Agriculture / commerce',
  text:'La France devrait pouvoir interdire l’importation de produits agricoles fabriqués selon des normes qu’elle interdit à ses propres agriculteurs, même si cela faisait disparaître des rayons les produits alimentaires les moins chers.',
  defaultAnswer:0,
  note:'',
  coefficients:{economy:-0.6,authority:0.3,europe:0,ecology:0,immigration:0,democracy:0}
};

const coding={
  lfi:[3,4,'Accord fort : LFI propose des clauses de sauvegarde contre les importations agricoles exposant les producteurs français à des normes interdites ou moins exigeantes et défend des normes, quotas ou interdictions contre la concurrence déloyale. La souveraineté agricole prime clairement sur l’accès aux produits importés les moins chers.','https://lafranceinsoumise.fr/europeennes-2024/programme-de-lunion-populaire/chapitre-4-faire-la-planification-ecologique-europeenne/'],
  pcf:[3,4,'Accord fort : le PCF veut mettre fin aux importations de produits alimentaires provenant de pays qui ne respectent pas les mêmes normes sanitaires et environnementales que celles exigées aux producteurs français et exige une stricte réciprocité des normes.','https://lem.pcf.fr/attributs/3?page=321'],
  'les-ecologistes':[3,4,'Accord fort : Les Écologistes demandent explicitement d’interdire les importations qui ne respectent pas les normes sociales et environnementales de production applicables en Europe, afin d’éviter un dumping au détriment des agriculteurs.','https://commissions.lesecologistes.fr/posts/5vcoS78aJnPpYmW9KhfnaQ/accord-ue-mercosur-non-toujours-non-a-la-destruction-de-l-agriculture-paysanne'],
  ps:[3,4,'Accord fort : le PS défend de véritables mesures miroirs conditionnant l’accès au marché européen au respect strict des normes sanitaires, environnementales et sociales de production et s’oppose aux accords commerciaux qui n’apportent pas ces garanties.','https://www.parti-socialiste.fr/contre_l_accord_ue_mercosur_et_pour_le_juste_echange_rendez_vous_le_29_janvier'],
  renaissance:[2,4,'Accord net : Renaissance défend l’accès au marché sous réserve du respect des normes européennes et s’est opposé à des accords jugés insuffisamment protecteurs de l’agriculture. Le parti reste néanmoins favorable aux échanges commerciaux lorsqu’ils sont encadrés, ce qui justifie +2 plutôt que +3.','https://www.assemblee-nationale.fr/dyn/17/scrutins/685'],
  modem:[2,4,'Accord net : des responsables MoDem jugent les mesures miroirs indispensables pour éviter d’importer des produits issus de pratiques refusées en Europe et défendent contrôles et clauses de sauvegarde, tout en restant favorables aux accords commerciaux lorsque les garanties sont suffisantes.','https://www.mouvementdemocrate.fr/actualites/geraldine-bannier-des-mesures-miroirs-dans-le-mercosur-sont-indispensables-pour-eviter'],
  horizons:[2,3,'Accord net : les députés Horizons présents ont soutenu la résolution imposant des exigences de production équivalentes aux importations agricoles, et le parti dénonce la concurrence de produits ne respectant pas les mêmes contraintes. Le soutien est net mais moins directement formulé comme une interdiction générale.','https://www.assemblee-nationale.fr/dyn/17/scrutins/685'],
  'france-humaniste':[2,4,'Accord net : Dominique de Villepin défend la souveraineté agricole, les clauses miroir, la traçabilité et des protections contre le dumping social et environnemental. La ligne est clairement favorable à la réciprocité, sans formulation aussi absolue qu’une interdiction systématique de tout produit non conforme.','https://lafrancehumaniste.fr/articles/souverainete-agricole-et-alimentaire.html'],
  lr:[3,4,'Accord fort : LR dénonce explicitement la concurrence à normes inégales et défend l’exclusion ou l’interdiction des importations agricoles produites selon des pratiques qui ne sont pas autorisées en France, au nom de la protection des agriculteurs français.','https://republicains.fr/actualites/2025/12/19/a-normes-inegales-la-concurrence-nest-plus-loyale-proteger-devient-un-devoir/'],
  'nouvelle-energie':[3,4,'Accord fort : Nouvelle Énergie réclame des clauses miroirs obligatoires et affirme explicitement que ce qui est interdit aux agriculteurs français ne doit pas être autorisé pour les produits importés.','https://www.unenouvelleenergie.fr/notre-programme/agriculture/'],
  udr:[3,4,'Accord fort : l’UDR a soutenu l’exigence de normes de production équivalentes pour les importations et Éric Ciotti a défendu des clauses de réciprocité sanitaire, environnementale et de bien-être animal dans les accords commerciaux.','https://www.assemblee-nationale.fr/dyn/17/scrutins/685'],
  rn:[3,4,'Accord fort : le RN a massivement soutenu la résolution imposant aux importations agricoles des normes de production équivalentes et combat les accords commerciaux qu’il juge responsables d’une concurrence déloyale envers les agriculteurs français.','https://www.assemblee-nationale.fr/dyn/17/scrutins/685'],
  reconquete:[3,3,'Accord fort : Reconquête affirme qu’aucun produit étranger ne devrait entrer en France s’il ne respecte pas les normes imposées aux producteurs français ; la correspondance avec la question est directe.','https://fede11.parti-reconquete.fr/communique-de-presse/soutien-a-nos-agriculteurs-et-viticulteurs'],

  allemagne:[-1,4,'Désaccord modéré : le gouvernement Merz soutient fortement l’ouverture commerciale et l’accord UE-Mercosur afin de réduire les droits de douane et les barrières. Il accepte les normes sanitaires européennes, mais ne défend pas une interdiction générale fondée sur l’équivalence de toutes les normes de production.','https://www.bundesregierung.de/breg-de/aktuelles/bundeskanzler-merz-zur-einigung-zum-eu-mercosur-abkommen-2402138'],
  espagne:[2,4,'Accord net : le gouvernement espagnol a explicitement demandé des clauses miroir afin que les produits importés soient soumis à des conditions de production comparables à celles des agriculteurs européens. Il reste cependant très favorable aux accords commerciaux comme le Mercosur, d’où +2 plutôt que +3.','https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/agricultura/paginas/2024/010424-medidas-respuesta-sector-agrario.aspx'],
  suisse:[1,4,'Accord modéré : la Suisse impose déjà des obligations spécifiques de déclaration pour certains produits issus de méthodes de production interdites en Suisse et protège certaines filières, mais privilégie souvent l’information, les quotas et les accords commerciaux plutôt qu’une interdiction générale.','https://www.blw.admin.ch/fr/ordonnance-agricole-declaration'],
  finlande:[-1,3,'Désaccord modéré : le gouvernement finlandais met fortement l’accent sur la libéralisation des échanges et le démantèlement des droits de douane et soutient les nouveaux accords commerciaux. Les contrôles sanitaires demeurent, mais aucune ligne générale de clauses miroir sur les méthodes de production n’est défendue.','https://valtioneuvosto.fi/en/-/progress-in-trade-liberalisation-where-to-find-information-on-dismantling-of-tariffs'],
  'royaume-uni':[1,3,'Accord modéré : le Royaume-Uni exige que les aliments importés respectent ses règles de sécurité et d’hygiène et rapproche plusieurs normes sanitaires de celles de l’UE, mais il ne pose pas de principe général exigeant l’identité de toutes les méthodes de production étrangères.','https://www.gov.uk/government/publications/importing-fruit-and-vegetables/importing-fruit-and-vegetables'],
  danemark:[0,2,'Position non tranchée : le gouvernement danois combine des normes agricoles et environnementales élevées avec une priorité récente donnée à la baisse du prix de l’alimentation. Aucune proposition directe de principe général interdisant les importations produites sous des normes différentes n’a été identifiée.','https://stm.dk/media/rc1ktdmg/det-politiske-grundlag-for-firkloeverregeringen.pdf'],
  'pays-bas':[0,3,'Position équilibrée : les Pays-Bas appliquent les contrôles européens aux importations mais le gouvernement reste attaché au commerce ouvert et refuse les surtranspositions nationales. Aucune position suffisamment directe n’établit un soutien ou un rejet d’une interdiction générale fondée sur des clauses miroir.','https://www.government.nl/government/coalition-agreement/big-choices-facing-the-netherlands'],
  pologne:[3,4,'Accord fort : la Pologne a engagé en 2026 des mesures nationales visant à suspendre l’importation de produits contenant des substances non acceptées dans l’Union et réclame explicitement la réciprocité des normes de production dans les accords commerciaux.','https://www.gov.pl/web/agriculture/the-ban-on-the-import-of-products-containing-harmful-substances-will-soon-be-implemented-in-poland-as-well']
};

const byId=new Map(all.map(e=>[e.id,e]));
for(const [id,[score,confidence,justification,source]] of Object.entries(coding)){
  const e=byId.get(id);
  if(!e) throw new Error(`${id} introuvable`);
  e.responses[i]=score;
  e.confidence[i]=confidence;
  e.justifications[i]=justification;
  e.sources[i]=source;
}
if(coding && Object.keys(coding).length!==all.length) throw new Error(`Coding count ${Object.keys(coding).length} != entity count ${all.length}`);

const axes=qd.axes.map(a=>a.key);
qd.axisMasses=Object.fromEntries(axes.map(axis=>[axis,qd.questions.reduce((s,q)=>s+Math.abs(q.coefficients[axis]||0),0)]));
for(const e of all){
  e.axisScores=Object.fromEntries(axes.map(axis=>{
    let n=0,m=0;
    qd.questions.forEach((q,j)=>{const c=q.coefficients[axis]||0;n+=e.responses[j]*c;m+=Math.abs(c);});
    return [axis,m?10*n/(3*m):0];
  }));
  e.averageConfidence=e.confidence.reduce((a,b)=>a+b,0)/e.confidence.length;
}

for(let j=0;j<qd.questions.length;j++){
  if(j===i) continue;
  if(JSON.stringify(qd.questions[j])!==JSON.stringify(beforeQuestions[j])) throw new Error(`Question hors Q30 modifiée: index ${j}`);
}
for(const e of all){
  const b=beforeEntities.get(e.id);
  for(let j=0;j<e.responses.length;j++) if(j!==i && e.responses[j]!==b.responses[j]) throw new Error(`${e.id}: réponse hors Q30 modifiée`);
  for(let j=0;j<e.confidence.length;j++) if(j!==i && e.confidence[j]!==b.confidence[j]) throw new Error(`${e.id}: confiance hors Q30 modifiée`);
  for(let j=0;j<e.justifications.length;j++) if(j!==i && e.justifications[j]!==b.justifications[j]) throw new Error(`${e.id}: justification hors Q30 modifiée`);
  for(let j=0;j<e.sources.length;j++) if(j!==i && e.sources[j]!==b.sources[j]) throw new Error(`${e.id}: source hors Q30 modifiée`);
}

fs.writeFileSync(qp,`// Questions, axes et métadonnées du questionnaire.\nconst QUESTIONNAIRE_DATA = ${JSON.stringify(qd,null,2)};\n`);
fs.writeFileSync(pp,`// Données de comparaison avec les partis politiques français.\nconst PARTIES_DATA = ${JSON.stringify(parties,null,2)};\n`);
fs.writeFileSync(gp,`// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(governments,null,2)};\n`);
console.log('Q30 agricultural reciprocity coding applied.', qd.axisMasses);
