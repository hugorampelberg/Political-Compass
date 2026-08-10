#!/usr/bin/env node

import fs from 'node:fs';
import vm from 'node:vm';

function load(path, name) {
  const c = {};
  vm.createContext(c);
  vm.runInContext(fs.readFileSync(path, 'utf8').replace(/^const /gm, 'var '), c, { filename: path });
  return c[name];
}

const questionnairePath='data/questionnaire.js';
const partiesPath='data/parties.js';
const governmentsPath='data/governments.js';
const questionnaire=load(questionnairePath,'QUESTIONNAIRE_DATA');
const parties=load(partiesPath,'PARTIES_DATA');
const governments=load(governmentsPath,'GOVERNMENTS_DATA');
const qIndex=new Map(questionnaire.questions.map((q,i)=>[q.id,i]));
const i=qIndex.get(4);
if(i===undefined) throw new Error('Q4 introuvable');
if(questionnaire.questions[i].coefficients.economy!==-1) throw new Error('Q4 economy doit déjà être -1');

const all=[...parties,...governments];
const byId=new Map(all.map(e=>[e.id,e]));
const before=new Map(all.map(e=>[e.id,JSON.parse(JSON.stringify(e))]));

const responseChanges={
  'nouvelle-energie': {
    from:-3,to:-2,
    justification:'Désaccord net : aucune prise de position directement équivalente à un ratio salarial obligatoire n’a été identifiée, mais Nouvelle Énergie défend une ligne économique nettement libérale, hostile aux contraintes générales supplémentaires sur les entreprises. L’opposition au principe est donc claire, sans preuve suffisante pour un désaccord maximal.'
  },
  'finlande': {
    from:-2,to:-1,
    justification:'Désaccord modéré : l’État finlandais exige des rémunérations raisonnables et transparentes dans les entreprises qu’il contrôle et peut s’opposer à des packages jugés excessifs, mais le gouvernement Orpo a aussi relevé les plafonds de rémunération variable afin de rester compétitif pour recruter des dirigeants. La ligne est donc opposée à un ratio salarial rigide sans rejeter toute modération des hauts salaires.'
  },
  'royaume-uni': {
    from:0,to:-1,
    justification:'Désaccord modéré : le Royaume-Uni impose la transparence des ratios entre rémunération du dirigeant et rémunération des salariés, mais n’impose pas de plafond général et la ligne gouvernementale actuelle privilégie la transparence et le fair pay plutôt qu’un ratio salarial légal obligatoire.'
  },
  'pays-bas': {
    from:-1,to:0,
    justification:'Position équilibrée : les Pays-Bas plafonnent fortement certaines rémunérations dans le secteur public et semi-public, mais n’imposent pas de ratio général entre dirigeants et salariés dans les entreprises privées. Le système combine donc encadrement ciblé et liberté salariale dans le privé.'
  }
};

for(const [id,ch] of Object.entries(responseChanges)){
  const e=byId.get(id); if(!e) throw new Error(`${id} introuvable`);
  if(e.responses[i]!==ch.from && e.responses[i]!==ch.to) throw new Error(`${id} Q4 attendu ${ch.from} ou ${ch.to}, trouvé ${e.responses[i]}`);
  e.responses[i]=ch.to;
  e.justifications[i]=ch.justification;
}

const confidenceChanges={allemagne:[2,3],suisse:[3,4]};
for(const [id,[from,to]] of Object.entries(confidenceChanges)){
  const e=byId.get(id); if(!e) throw new Error(`${id} introuvable`);
  if(e.confidence[i]!==from && e.confidence[i]!==to) throw new Error(`${id} Q4 confidence attendu ${from} ou ${to}, trouvé ${e.confidence[i]}`);
  e.confidence[i]=to;
}

const reconquete=byId.get('reconquete');
if(!reconquete || reconquete.responses[i]!==-3) throw new Error('Reconquête Q4 doit rester à -3');

const axes=questionnaire.axes.map(a=>a.key);
for(const id of ['nouvelle-energie','finlande','royaume-uni','pays-bas','allemagne','suisse']){
  const e=byId.get(id);
  e.axisScores=Object.fromEntries(axes.map(axis=>{
    let n=0,m=0;
    questionnaire.questions.forEach((q,j)=>{const c=q.coefficients[axis]||0;n+=e.responses[j]*c;m+=Math.abs(c);});
    return [axis,m?10*n/(3*m):0];
  }));
  e.averageConfidence=e.confidence.reduce((a,b)=>a+b,0)/e.confidence.length;
}

const allowed=new Set(['nouvelle-energie','finlande','royaume-uni','pays-bas','allemagne','suisse']);
for(const e of all){
  const b=before.get(e.id);
  if(!allowed.has(e.id)){
    if(JSON.stringify(e)!==JSON.stringify(b)) throw new Error(`Modification non autorisée sur ${e.id}`);
    continue;
  }
  for(let j=0;j<e.responses.length;j++) if(j!==i && e.responses[j]!==b.responses[j]) throw new Error(`${e.id}: réponse hors Q4 modifiée`);
  for(let j=0;j<e.confidence.length;j++) if(j!==i && e.confidence[j]!==b.confidence[j]) throw new Error(`${e.id}: confiance hors Q4 modifiée`);
  for(let j=0;j<e.justifications.length;j++) if(j!==i && e.justifications[j]!==b.justifications[j]) throw new Error(`${e.id}: justification hors Q4 modifiée`);
  for(let j=0;j<e.sources.length;j++) if(e.sources[j]!==b.sources[j]) throw new Error(`${e.id}: source modifiée`);
}

fs.writeFileSync(partiesPath,`// Données de comparaison avec les partis politiques français.\nconst PARTIES_DATA = ${JSON.stringify(parties,null,2)};\n`);
fs.writeFileSync(governmentsPath,`// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(governments,null,2)};\n`);
console.log('Approved Q4 arbitrations applied.');
