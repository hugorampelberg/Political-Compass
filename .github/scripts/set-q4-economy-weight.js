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
const govs=load(gp,'GOVERNMENTS_DATA');
const q4=qd.questions.find(q=>q.id===4);
if (!q4) throw new Error('Q4 introuvable');
if (q4.coefficients.economy !== -0.7 && q4.coefficients.economy !== -1) throw new Error(`Q4 economy inattendu: ${q4.coefficients.economy}`);
q4.coefficients.economy=-1;

const axes=qd.axes.map(a=>a.key);
qd.axisMasses=Object.fromEntries(axes.map(axis=>[axis,qd.questions.reduce((s,q)=>s+Math.abs(q.coefficients[axis]||0),0)]));

function recompute(entity){
  entity.axisScores=Object.fromEntries(axes.map(axis=>{
    let n=0,m=0;
    qd.questions.forEach((q,i)=>{const c=q.coefficients[axis]||0;n+=entity.responses[i]*c;m+=Math.abs(c);});
    return [axis,m?10*n/(3*m):0];
  }));
}
parties.forEach(recompute); govs.forEach(recompute);

fs.writeFileSync(qp,`// Questions, axes et métadonnées du questionnaire.\nconst QUESTIONNAIRE_DATA = ${JSON.stringify(qd,null,2)};\n`);
fs.writeFileSync(pp,`// Données de comparaison avec les partis politiques français.\nconst PARTIES_DATA = ${JSON.stringify(parties,null,2)};\n`);
fs.writeFileSync(gp,`// Données de comparaison avec les gouvernements étrangers.\nconst GOVERNMENTS_DATA = ${JSON.stringify(govs,null,2)};\n`);
console.log(qd.axisMasses);
