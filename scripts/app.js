const STORAGE_KEY = 'boussole-politique-state-v4';
const QUIZ_MODES = { FULL:'full', QUICK:'quick' };
const STRUCTURAL_WEIGHT_SHARE = 0.3;
const QUICK_QUESTION_IDS = new Set([1,3,5,7,9,10,14,19,20,21,24,25,26,27,28,29,32,34,35,38,39,40,42,46,49,50,56,63,64,66,67,71,72,74,76,77,78,79,81,87]);
const AXIS_COLORS = { economy:'#d96c57', authority:'#6f63a8', europe:'#4e77a7', ecology:'#2d8c87', immigration:'#d7a744', democracy:'#40556a' };
const PRIORITY_LABELS = {
  economy:'Économie',
  authority:'Sécurité, justice et libertés publiques',
  europe:'Place de la France dans l’Europe',
  ecology:'Écologie',
  immigration:'Immigrations, accueil et intégration',
  democracy:'Démocratie'
};
const SCALE_LABELS = { '-3':'Pas du tout d’accord', '-2':'Plutôt pas d’accord', '-1':'Légèrement pas d’accord', '0':'Neutre / partagé', '1':'Légèrement d’accord', '2':'Plutôt d’accord', '3':'Tout à fait d’accord' };
const ICONS = { economy:'€', authority:'§', europe:'E', ecology:'◉', immigration:'↔', democracy:'◇' };

const initialState = (mode=QUIZ_MODES.FULL) => ({ mode, priority: null, answers: Array(DATA.questions.length).fill(null), questionComments:Array(DATA.questions.length).fill(''), openAnswers:{}, current:0, completed:false, updatedAt:Date.now() });
let state = loadState() || initialState();
if(!Object.values(QUIZ_MODES).includes(state.mode)) state.mode=QUIZ_MODES.FULL;
if(!Array.isArray(state.answers) || state.answers.length!==DATA.questions.length) state.answers=Array(DATA.questions.length).fill(null);
if(!Array.isArray(state.questionComments) || state.questionComments.length!==DATA.questions.length) state.questionComments=Array(DATA.questions.length).fill('');
let results = null;
let activeMatchTab = 'party';
let demoMode = false;
let stateBeforeDemo = null;
const EQUAL_PRIORITY = 'equal';

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const screens = ['intro','priority','quiz','open','processing','results'];

function loadState(){ try { const raw=localStorage.getItem(STORAGE_KEY); return raw ? {...initialState(), ...JSON.parse(raw)} : null; } catch(e){ return null; } }
function activeQuestionIndexes(forState=state){
  return DATA.questions.map((q,i)=>({q,i})).filter(({q})=>forState.mode!==QUIZ_MODES.QUICK || QUICK_QUESTION_IDS.has(q.id)).map(({i})=>i);
}
function activeQuestionCount(forState=state){ return activeQuestionIndexes(forState).length; }
function activeOriginalIndex(position=state.current, forState=state){ return activeQuestionIndexes(forState)[position]; }
function activeQuestions(forState=state){ return activeQuestionIndexes(forState).map(i=>({q:DATA.questions[i],i})); }
function answeredActiveCount(forState=state){ return activeQuestionIndexes(forState).filter(i=>forState.answers[i]!==null).length; }
function firstMissingActivePosition(forState=state){ return activeQuestionIndexes(forState).findIndex(i=>forState.answers[i]===null); }
function activeAnswersComplete(forState=state){ const indexes=activeQuestionIndexes(forState); return indexes.length>0 && indexes.every(i=>forState.answers[i]!==null); }
function modeLabel(forState=state){ return forState.mode===QUIZ_MODES.QUICK?'Questionnaire rapide':'Questionnaire complet'; }
function saveState(){ if(demoMode){ refreshResume(); return; } state.updatedAt=Date.now(); localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); refreshResume(); }
function restoreRealState(){
  if(!demoMode) return;
  state = stateBeforeDemo ? JSON.parse(JSON.stringify(stateBeforeDemo)) : initialState();
  stateBeforeDemo = null; demoMode = false; results = null;
}
function clearState(){ localStorage.removeItem(STORAGE_KEY); state=initialState(); results=null; aiAnalysisResult=null; demoMode=false; stateBeforeDemo=null; refreshResume(); }
function showScreen(name){ screens.forEach(s => $('#screen-'+s).classList.toggle('hidden', s!==name)); window.scrollTo({top:0,behavior:'instant'}); }
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2200); }
function clamp(v,min,max){ return Math.min(max,Math.max(min,v)); }
function fmt(v,d=1){ return Number(v).toLocaleString('fr-FR',{minimumFractionDigits:d,maximumFractionDigits:d}); }
function esc(s){ return String(s ?? '').replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function cleanAIQuestionReferences(value){
  return String(value ?? '')
    .replace(/\s*\((?:Q|question)\s*#?\s*\d+\)/gi,'')
    .replace(/\b(?:Q|question)\s*#?\s*\d+\s*[:–—-]?\s*/gi,'')
    .replace(/\s{2,}/g,' ')
    .trim();
}

function formatAIText(value){
  const text=cleanAIQuestionReferences(value);
  if(!text) return '';
  return text.split(/\n{2,}/).map(block=>{
    const lines=block.split(/\n/).map(x=>x.trim()).filter(Boolean);
    if(lines.length && lines.every(line=>/^[-•]\s+/.test(line))){
      return `<ul class="ai-list">${lines.map(line=>`<li>${esc(line.replace(/^[-•]\s+/,''))}</li>`).join('')}</ul>`;
    }
    return `<p>${lines.map(esc).join('<br>')}</p>`;
  }).join('');
}

function refreshResume(){
  const resumeState = demoMode && stateBeforeDemo ? stateBeforeDemo : state;
  const count=answeredActiveCount(resumeState), total=activeQuestionCount(resumeState);
  const visible=count>0 && !resumeState.completed;
  $('#resume-card').classList.toggle('hidden',!visible);
  $('#top-progress-btn').classList.toggle('hidden',!visible);
  if(visible) $('#resume-copy').textContent=`${modeLabel(resumeState)} · ${count} réponse${count>1?'s':''} enregistrée${count>1?'s':''} sur ${total}`;
}

function renderPriority(){
  const grid=$('#priority-grid');
  const equalChoice=`<button type="button" class="axis-choice equal-choice ${state.priority===EQUAL_PRIORITY?'selected':''}" data-axis="${EQUAL_PRIORITY}" aria-pressed="${state.priority===EQUAL_PRIORITY?'true':'false'}"><span class="axis-icon">＝</span><span><strong>Aucun axe prioritaire</strong><small>La pondération structurelle lissée s’applique sans bonus</small></span><span class="radio-dot"></span></button>`;
  grid.innerHTML=equalChoice+DATA.axes.map(a=>`<button type="button" class="axis-choice ${state.priority===a.key?'selected':''}" data-axis="${a.key}" aria-pressed="${state.priority===a.key?'true':'false'}"><span class="axis-icon" style="color:${AXIS_COLORS[a.key]}">${ICONS[a.key]}</span><span><strong>${esc(PRIORITY_LABELS[a.key])}</strong></span><span class="radio-dot"></span></button>`).join('');
  const chosen=DATA.axes.find(a=>a.key===state.priority);
  const equalSelected=state.priority===EQUAL_PRIORITY;
  const hasChoice=Boolean(chosen)||equalSelected;
  const required=$('#priority-required');
  required.textContent=equalSelected ? 'Choix sélectionné : aucun axe prioritaire.' : chosen ? `Axe choisi comme plus important : ${PRIORITY_LABELS[chosen.key]}.` : 'Choisissez une option avant de commencer.';
  required.classList.toggle('chosen',hasChoice);
  $('#priority-next').disabled=!hasChoice;
  $$('.axis-choice').forEach(btn=>btn.addEventListener('click',()=>{
    state.priority=btn.dataset.axis;
    saveState();
    renderPriority();
  }));
}

function startFresh(mode=QUIZ_MODES.FULL){ restoreRealState(); state=initialState(mode); results=null; aiAnalysisResult=null; saveState(); renderPriority(); showScreen('priority'); }
function resume(){ restoreRealState(); if(state.priority===null){ renderPriority(); showScreen('priority'); return; } const firstMissing=firstMissingActivePosition(); state.current=firstMissing>=0?firstMissing:Math.min(state.current,activeQuestionCount()-1); showScreen('quiz'); renderQuestion(); }

function renderScale(){
  const originalIndex=activeOriginalIndex();
  const current=state.answers[originalIndex];
  $('#scale').innerHTML=[-3,-2,-1,0,1,2,3].map(v=>`<button type="button" class="scale-choice ${current===v?'selected':''}" data-value="${v}" aria-label="${SCALE_LABELS[v]}"><span>${v>0?'+'+v:v}</span></button>`).join('');
  $$('.scale-choice').forEach(btn=>btn.addEventListener('click',()=>answerQuestion(Number(btn.dataset.value))));
  $('#answer-caption').textContent=current===null?'':SCALE_LABELS[current];
}

function renderQuestion(){
  const originalIndex=activeOriginalIndex();
  const q=DATA.questions[originalIndex];
  const total=activeQuestionCount();
  const pct=((state.current+1)/total)*100;
  $('#question-count').textContent=`Question ${state.current+1} sur ${total}`;
  $('#progress-percent').textContent=`${Math.round(pct)} %`;
  $('#progress-fill').style.width=pct+'%';
  $('#theme-chip').textContent=q.theme;
  $('#question-text').textContent=q.text;
  const explanation=$('#question-explanation');
  if(q.explanation){
    explanation.textContent=q.explanation;
    explanation.classList.remove('hidden');
  }else{
    explanation.textContent='';
    explanation.classList.add('hidden');
  }
  $('#prev-btn').disabled=state.current===0;
  $('#next-btn').textContent=state.current===total-1?'Questions ouvertes':'Question suivante';
  $('#next-btn').disabled=state.answers[originalIndex]===null;
  renderScale();
  const comment=$('#question-comment');
  const commentDetails=$('#question-comment-details');
  comment.value=state.questionComments[originalIndex]||'';
  comment.placeholder=state.current===0
    ? 'Cette case peut servir à apporter de la nuance à votre réponse. Par exemple : « Je ne pense pas qu’il faille diminuer les charges patronales : en théorie, cela pourrait faire baisser les prix ou permettre d’augmenter les salaires, mais en pratique les entreprises pourraient conserver une partie des bénéfices. »'
    : 'Expliquez une réserve, une condition ou une nuance…';
  commentDetails.open=Boolean(comment.value.trim());
  comment.oninput=()=>{ state.questionComments[originalIndex]=comment.value; saveState(); };
  $('#question-card').animate([{opacity:.2,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:230,easing:'ease-out'});
}

function answerQuestion(v){ state.answers[activeOriginalIndex()]=v; saveState(); renderScale(); $('#next-btn').disabled=false; }
function nextQuestion(){ const originalIndex=activeOriginalIndex(); if(state.answers[originalIndex]===null) return; if(state.current<activeQuestionCount()-1){ state.current++; saveState(); renderQuestion(); window.scrollTo({top:0,behavior:'smooth'}); } else { renderOpenQuestions(); showScreen('open'); } }
function prevQuestion(){ if(state.current>0){ state.current--; saveState(); renderQuestion(); } }

function renderOpenQuestions(){
  $('#open-questions').innerHTML=DATA.openQuestions.map((q,i)=>`<article class="open-card"><label for="open-${q.id}">${i+1}. ${esc(q.text)}</label><textarea id="open-${q.id}" data-id="${q.id}" placeholder="Réponse facultative…">${esc(state.openAnswers[q.id]||'')}</textarea></article>`).join('');
  $$('#open-questions textarea').forEach(t=>t.addEventListener('input',()=>{ state.openAnswers[t.dataset.id]=t.value; saveState(); }));
}

function axisMassesForMode(){
  if(state.mode===QUIZ_MODES.FULL) return {...DATA.axisMasses};
  const masses={};
  DATA.axes.forEach(a=>masses[a.key]=activeQuestions().reduce((sum,{q})=>sum+Math.abs(q.coefficients[a.key]),0));
  return masses;
}
function axisWeights(){
  const masses=axisMassesForMode();
  const averageMass=Object.values(masses).reduce((sum,mass)=>sum+mass,0)/DATA.axes.length;
  const out={};
  DATA.axes.forEach(a=>{
    const structuralRatio=averageMass ? masses[a.key]/averageMass : 1;
    const smoothedWeight=(1-STRUCTURAL_WEIGHT_SHARE)+STRUCTURAL_WEIGHT_SHARE*structuralRatio;
    out[a.key]=smoothedWeight*(state.priority===a.key?1.3:1);
  });
  return out;
}
function axisScoresFromAnswers(answers){
  const out={}; const selected=activeQuestions();
  DATA.axes.forEach(a=>{
    const den=3*selected.reduce((sum,{q})=>sum+Math.abs(q.coefficients[a.key]),0);
    const num=selected.reduce((sum,{q,i})=>sum+(answers[i]??0)*q.coefficients[a.key],0);
    out[a.key]=den?10*num/den:0;
  });
  return out;
}
function userAxisScores(){ return axisScoresFromAnswers(state.answers); }
function entityAxisScores(entity){ return state.mode===QUIZ_MODES.FULL ? {...entity.axisScores} : axisScoresFromAnswers(entity.responses); }
function politicalDistance(user, party) {
  const raw = Math.abs(user - party) / 6;

  const opposite =
user !== 0 &&
party !== 0 &&
Math.sign(user) !== Math.sign(party);

  if (!opposite) return raw;

  const oppositionStrength =
Math.min(Math.abs(user), Math.abs(party)) / 3;

  return Math.min(
1,
raw +
  0.75 *
  oppositionStrength *
  (1 - raw)
  );
}

function detailedAxisSimilarity(entity, axisKey) {
  let num = 0;
  let den = 0;

  activeQuestions().forEach(({ q, i }) => {
const w = Math.abs(q.coefficients[axisKey]);
const c = entity.confidence[i] || 0;

if (w > 0 && c > 0) {
  const user = state.answers[i] ?? 0;
  const party = entity.responses[i];

  const distance =
    politicalDistance(user, party);

  num += distance * distance * w * c;
  den += w * c;
}
  });

  return den
? clamp(
    100 * (1 - Math.sqrt(num / den)),
    0,
    100
  )
: 0;
}
function entityResult(entity, userScores, weights){
  const axisScores=entityAxisScores(entity);
  const detailed={}; DATA.axes.forEach(a=>detailed[a.key]=detailedAxisSimilarity(entity,a.key));
  const weightSum=Object.values(weights).reduce((a,b)=>a+b,0);
  const global=DATA.axes.reduce((sum,a)=>sum+detailed[a.key]*weights[a.key],0)/weightSum;
  const netByAxis={}; DATA.axes.forEach(a=>netByAxis[a.key]=clamp(100*(1-Math.abs(userScores[a.key]-axisScores[a.key])/20),0,100));
  const net=DATA.axes.reduce((sum,a)=>sum+netByAxis[a.key]*weights[a.key],0)/weightSum;
  const dx=userScores.economy-axisScores.economy, dy=userScores.authority-axisScores.authority;
  const compass=clamp(100*(1-Math.sqrt(dx*dx+dy*dy)/(20*Math.sqrt(2))),0,100);
  return {...entity,axisScores,detailed,global,netByAxis,net,compass};
}
function calculateResults(){
  const userScores=userAxisScores(); const weights=axisWeights();
  const entities=DATA.entities.map(e=>entityResult(e,userScores,weights));
  const parties=entities.filter(e=>e.category==='party').sort((a,b)=>b.global-a.global);
  const governments=entities.filter(e=>e.category==='government').sort((a,b)=>b.global-a.global);
  return {userScores,weights,entities,parties,governments,mode:state.mode,questionCount:activeQuestionCount()};
}

function descriptors(scores){
  const defs={
    economy:{neg:'social et interventionniste',pos:'libéral et responsabiliste',mid:'équilibré économiquement'},
    authority:{neg:'attaché aux libertés civiles',pos:'régalien',mid:'pragmatique sur l’autorité'},
    europe:{neg:'souverainiste',pos:'fédéraliste européen',mid:'européen critique'},
    ecology:{neg:'techno-pragmatique',pos:'écologiste interventionniste',mid:'écologiste pragmatique'},
    immigration:{neg:'assimilationniste',pos:'ouvert sur l’immigration',mid:'modéré sur l’immigration'},
    democracy:{neg:'favorable à l’exécutif et à l’expertise',pos:'participatif et parlementaire',mid:'institutionnellement équilibré'}
  };
  return DATA.axes.map(a=>({key:a.key,value:scores[a.key],text:scores[a.key]>2?defs[a.key].pos:scores[a.key]<-2?defs[a.key].neg:defs[a.key].mid}));
}
function makeProfileTitle(scores){ const d=descriptors(scores).sort((a,b)=>Math.abs(b.value)-Math.abs(a.value)).slice(0,3); return d.map(x=>x.text).join(', '); }
function makeSummary(scores, topParty, topGov){
  const d=descriptors(scores).sort((a,b)=>Math.abs(b.value)-Math.abs(a.value));
  return `Votre profil se distingue surtout par une orientation ${d[0].text}, complétée par une sensibilité ${d[1].text}. Votre meilleure correspondance parmi les partis est ${topParty.shortName} (${fmt(topParty.global)} %), tandis que le gouvernement le plus proche est ${topGov.shortName} (${fmt(topGov.global)} %).`;
}

function finish(){
  if(state.priority===null){ toast('Choisissez une option de pondération avant de continuer.'); renderPriority(); showScreen('priority'); return; }
  if(!activeAnswersComplete()){ toast('Certaines questions n’ont pas de réponse.'); return; }
  $('#processing-copy').textContent=`Analyse des six axes et comparaison des ${activeQuestionCount()} réponses…`;
  showScreen('processing');
  setTimeout(()=>{ results=calculateResults(); state.completed=true; saveState(); renderResults(); showScreen('results'); },900);
}

function renderResults(){
  if(!results) results=calculateResults();
  const topParty=results.parties[0], topGov=results.governments[0];
  $('#profile-title').textContent=makeProfileTitle(results.userScores);
  $('#result-mode-badge').textContent=`${modeLabel()} · ${activeQuestionCount()} questions comparées`;
  $('#profile-summary').textContent=makeSummary(results.userScores,topParty,topGov);
  const desc=descriptors(results.userScores).sort((a,b)=>Math.abs(b.value)-Math.abs(a.value)).slice(0,4);
  $('#result-badges').innerHTML=desc.map(d=>`<span class="result-badge">${esc(d.text)}</span>`).join('');
  const priorityAxis=DATA.axes.find(a=>a.key===state.priority);
  $('#priority-badge').textContent=state.priority===EQUAL_PRIORITY ? 'Aucun axe prioritaire' : `Axe plus important : ${PRIORITY_LABELS[priorityAxis.key]}`;
  $('#ai-question-count-copy').textContent=`vos notes aux ${activeQuestionCount()} questions de la version ${state.mode===QUIZ_MODES.QUICK?'rapide':'complète'} ;`;
  renderAxes(); renderMatches(activeMatchTab); renderCompass(); renderBestDetail(topParty); refreshResume();
  if(aiAnalysisResult) renderAIAnalysis(aiAnalysisResult);
  checkAIAvailability();
}

function renderAxes(){
  $('#axis-results').innerHTML=DATA.axes.map(a=>{
    const v=results.userScores[a.key], pos=(v+10)/20*100;
    return `<div class="axis-result"><div><strong>${esc(a.name)}</strong><small>${v>=0?esc(a.positive):esc(a.negative)}</small></div><div class="axis-track"><span class="axis-marker" style="left:${pos}%;border-color:${AXIS_COLORS[a.key]}"></span></div><div class="axis-value">${v>0?'+':''}${fmt(v)}</div><div class="axis-endpoints"><span>${esc(a.negative)}</span><span>${esc(a.positive)}</span></div></div>`;
  }).join('');
}

function renderMatches(category){
  activeMatchTab=category;
  $$('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===category));
  const arr=category==='party'?results.parties:results.governments;
  $('#match-grid').innerHTML=arr.map((e,i)=>`<article class="match-card ${i===0?'top':''}"><div class="match-rank">${i===0?'Meilleure correspondance':'Rang '+(i+1)}</div><h3>${esc(e.name)}</h3><div class="score-row"><span class="score-number">${fmt(e.global)} %</span><span style="color:var(--muted);font-size:.78rem">confiance documentaire ${Math.round(e.averageConfidence*100)} %</span></div><div class="mini-bar"><span style="width:${e.global}%"></span></div><button class="btn btn-secondary entity-detail" data-id="${e.id}" type="button">Voir le détail</button></article>`).join('');
  $$('.entity-detail').forEach(btn=>btn.addEventListener('click',()=>openEntity(btn.dataset.id)));
}

function renderCompass(){
  const w=760,h=520,pad=54; const x=v=>pad+(v+10)/20*(w-2*pad); const y=v=>h-pad-(v+10)/20*(h-2*pad);
  const grid=[-10,-5,0,5,10].map(v=>`<line x1="${x(v)}" y1="${pad}" x2="${x(v)}" y2="${h-pad}" stroke="${v===0?'#9aa7ae':'#dfe3e1'}" stroke-width="${v===0?2:1}"/><line x1="${pad}" y1="${y(v)}" x2="${w-pad}" y2="${y(v)}" stroke="${v===0?'#9aa7ae':'#dfe3e1'}" stroke-width="${v===0?2:1}"/>`).join('');
  const points=results.entities.map((e,i)=>{
    const px=x(e.axisScores.economy), py=y(e.axisScores.authority);
    const placeLeft=px>w-175, anchor=placeLeft?'end':'start', labelX=px+(placeLeft?-8:8);
    const offsets=[-12,14,-22,24,-4,8], labelY=clamp(py+offsets[i%offsets.length],pad+12,h-pad-5);
    const color=e.category==='party'?'#2d8c87':'#6f63a8';
    return `<g><circle cx="${px}" cy="${py}" r="${e.category==='party'?5:4.5}" fill="${color}" opacity=".84"><title>${esc(e.name)} — économie ${fmt(e.axisScores.economy)}, autorité ${fmt(e.axisScores.authority)}</title></circle><text x="${labelX}" y="${labelY}" text-anchor="${anchor}" fill="${color}" font-size="${e.category==='party'?10.5:9.5}" font-weight="750" paint-order="stroke" stroke="#fbfbf8" stroke-width="4" stroke-linejoin="round">${esc(e.shortName)}</text></g>`;
  }).join('');
  const ux=x(results.userScores.economy), uy=y(results.userScores.authority);
  $('#compass-box').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Political compass économie et libertés"><rect width="${w}" height="${h}" fill="#fbfbf8"/>${grid}<text x="${w/2}" y="28" text-anchor="middle" fill="#40556a" font-size="13" font-weight="700">Autoritaire</text><text x="${w/2}" y="${h-12}" text-anchor="middle" fill="#40556a" font-size="13" font-weight="700">Libertaire</text><text x="16" y="${h/2}" text-anchor="middle" transform="rotate(-90 16 ${h/2})" fill="#40556a" font-size="13" font-weight="700">Gauche économique</text><text x="${w-16}" y="${h/2}" text-anchor="middle" transform="rotate(90 ${w-16} ${h/2})" fill="#40556a" font-size="13" font-weight="700">Droite économique</text>${points}<circle cx="${ux}" cy="${uy}" r="10" fill="#d7a744" stroke="white" stroke-width="4"><title>Votre profil</title></circle><circle cx="${ux}" cy="${uy}" r="16" fill="none" stroke="#d7a744" stroke-width="2" opacity=".55"/><text x="${ux+13}" y="${clamp(uy-13,pad+12,h-pad-5)}" fill="#8a671d" font-size="11" font-weight="850" paint-order="stroke" stroke="#fbfbf8" stroke-width="4">Vous</text></svg>`;
}

function renderBestDetail(entity){
  $('#detail-lead').textContent=`Comparaison avec ${entity.name}, votre meilleure correspondance parmi les partis.`;
  $('#detail-bars').innerHTML=DATA.axes.map(a=>`<div class="detail-bar"><div class="detail-bar-head"><span>${esc(a.name)}</span><span>${fmt(entity.detailed[a.key])} %</span></div><div class="mini-bar"><span style="width:${entity.detailed[a.key]}%;background:${AXIS_COLORS[a.key]}"></span></div></div>`).join('');
}

function questionImportance(q){ return Math.max(...DATA.axes.map(a=>Math.abs(q.coefficients[a.key])*(state.priority===a.key?1.3:1))); }
function driversFor(entity){
  const items=activeQuestions().map(({q,i})=>{
    const user = state.answers[i] ?? 0;
const party = entity.responses[i];

const distance =
  politicalDistance(user, party);

const imp =
  questionImportance(q) *
  (entity.confidence[i] || 0);

return {
  q,
  i,
  gap: Math.abs(user - party),
  distance,
  score: distance * distance * imp,
  imp
};
  }).filter(x=>x.imp>0);
  const disagree=[...items].sort((a,b)=>b.score-a.score).slice(0,5);
  const agree=items.filter(x=>x.gap<=1).sort((a,b)=>b.imp-a.imp).slice(0,5);
  return {agree,disagree};
}

function openEntity(id){
  const e=results.entities.find(x=>x.id===id); if(!e) return;
  const {agree,disagree}=driversFor(e);
  $('#modal-title').textContent=e.name;
  $('#modal-subtitle').textContent=`Similitude globale : ${fmt(e.global)} % · Confiance documentaire moyenne : ${Math.round(e.averageConfidence*100)} %`;
  const axisRows=DATA.axes.map(a=>{ const u=results.userScores[a.key], v=e.axisScores[a.key]; return `<div class="compare-axis-row"><strong>${esc(a.name)}</strong><div class="two-marker-track"><span class="two-marker marker-user" style="left:${(u+10)/20*100}%" title="Vous : ${fmt(u)}"></span><span class="two-marker marker-entity" style="left:${(v+10)/20*100}%" title="${esc(e.shortName)} : ${fmt(v)}"></span></div><span style="text-align:right;font-weight:800">${fmt(e.detailed[a.key])} %</span></div>`; }).join('');
  const itemHtml=x=>`<div class="driver-item">${esc(x.q.text)}<span class="driver-score">Vous ${formatAnswer(state.answers[x.i])} · ${esc(e.shortName)} ${formatAnswer(e.responses[x.i])}</span></div>`;
  const uniqueSources=[...new Set(e.sources.filter(Boolean))].slice(0,4);
  $('#modal-body').innerHTML=`<div style="display:flex;gap:18px;flex-wrap:wrap;margin-bottom:22px"><span class="eyebrow">Score calculé ${fmt(e.global)} %</span></div><h3>Indices détaillés par axe</h3>${axisRows}<div style="display:flex;gap:16px;align-items:center;color:var(--muted);font-size:.82rem;margin-top:14px"><span class="dot dot-user"></span>Vous <span class="dot dot-party"></span>${esc(e.shortName)}</div><div class="drivers"><div class="driver-box agree"><h3>Principaux accords</h3>${agree.map(itemHtml).join('')}</div><div class="driver-box disagree"><h3>Principales divergences</h3>${disagree.map(itemHtml).join('')}</div></div>${uniqueSources.length?`<h3 style="margin-top:26px">Sources documentaires</h3><ul class="source-list">${uniqueSources.map(s=>`<li><a href="${esc(s)}" target="_blank" rel="noopener">${esc(s)}</a></li>`).join('')}</ul>`:''}`;
  $('#modal-backdrop').classList.remove('hidden'); document.body.style.overflow='hidden';
}
function closeModal(){ $('#modal-backdrop').classList.add('hidden'); document.body.style.overflow=''; }
function formatAnswer(v){ return `${v>0?'+':''}${v}`; }


const AI_API_BASE = String(window.BOUSSOLE_API_BASE || '').replace(/\/$/, '');
let aiServiceAvailable = false;
let aiAnalysisResult = null;

function aiApiUrl(path){ return `${AI_API_BASE}${path}`; }

function answerForAI(value){ return SCALE_LABELS[String(value)] || String(value); }

function buildAIAnalysisPayload(){
  const questionResponses = activeQuestions().map(({q,i})=>({
    id:q.id,
    theme:q.theme,
    question:q.text,
    answer:state.answers[i],
    answer_label:answerForAI(state.answers[i]),
    comment:String(state.questionComments[i] || '').trim()
  }));

  const partyRanking = results.parties.map((e,i)=>({
    rank:i+1, name:e.name, score:Number(e.global.toFixed(1)),
    axis_scores:Object.fromEntries(DATA.axes.map(a=>[PRIORITY_LABELS[a.key],Number(e.detailed[a.key].toFixed(1))]))
  }));
  const governmentRanking = results.governments.map((e,i)=>({
    rank:i+1, name:e.name, score:Number(e.global.toFixed(1)),
    axis_scores:Object.fromEntries(DATA.axes.map(a=>[PRIORITY_LABELS[a.key],Number(e.detailed[a.key].toFixed(1))]))
  }));
  const topPartyDrivers = results.parties.slice(0,3).map(e=>{
    const {agree,disagree}=driversFor(e);
    const convert=x=>({
      question:x.q.text,
      user_answer:answerForAI(state.answers[x.i]),
      user_comment:String(state.questionComments[x.i] || '').trim(),
      party_answer:answerForAI(e.responses[x.i])
    });
    return {name:e.name,score:Number(e.global.toFixed(1)),agreements:agree.map(convert),disagreements:disagree.map(convert)};
  });
  const openAnswers = DATA.openQuestions.map(q=>({
    question:q.text,
    answer:String(state.openAnswers[q.id]||'').trim()
  }));
  return {
    consent:true,
    consent_version:'gemini-quiz-mode-v2',
    age_confirmed:true,
    quiz_mode:state.mode,
    quiz_mode_label:modeLabel(),
    question_count:activeQuestionCount(),
    profile_title:makeProfileTitle(results.userScores),
    priority:state.priority===EQUAL_PRIORITY?'Aucun axe prioritaire — pondération structurelle lissée':PRIORITY_LABELS[state.priority],
    axis_scores:Object.fromEntries(DATA.axes.map(a=>[PRIORITY_LABELS[a.key],Number(results.userScores[a.key].toFixed(2))])),
    question_responses:questionResponses,
    party_ranking:partyRanking,
    government_ranking:governmentRanking,
    top_party_drivers:topPartyDrivers,
    open_answers:openAnswers,
    methodological_context:{
      score_meaning:'Distance mathématique calculée, pas pourcentage d’adhésion au programme',
      party_data_basis:'Programmes officiels et positions publiques documentées, sans analyse exhaustive des votes réels à l’Assemblée nationale',
      recommendation:'Le résultat ne constitue pas une recommandation de vote',
      questionnaire_scope:`${modeLabel()} : le profil de l’utilisateur, les partis et les gouvernements sont tous calculés uniquement sur les mêmes ${activeQuestionCount()} questions.`,
      comment_basis:'Les commentaires transmis ont été saisis librement par l’utilisateur. Aucune note éditoriale ou précision de l’auteur du questionnaire n’est transmise.'
    }
  };
}

function refreshAIButton(){
  const button=$('#ai-analysis-btn');
  if(!button) return;
  const consent=Boolean($('#ai-consent')?.checked);
  const age=Boolean($('#ai-age-confirm')?.checked);
  button.disabled=!(aiServiceAvailable && consent && age);
}

async function checkAIAvailability(){
  const status=$('#ai-status'), button=$('#ai-analysis-btn'), help=$('#ai-server-help');
  if(!status || !button) return;
  aiServiceAvailable=false; button.disabled=true; help.classList.add('hidden');
  if(location.protocol==='file:'){
    status.textContent='Service Gemini non connecté dans le fichier HTML autonome.';
    status.className='ai-connect-status error';
    help.textContent='Utilisez la version serveur fournie dans le ZIP : elle conserve la clé Gemini hors du navigateur.';
    help.classList.remove('hidden'); return;
  }
  try{
    const response=await fetch(aiApiUrl('/api/health'),{cache:'no-store',headers:{'Accept':'application/json'}});
    const data=await response.json().catch(()=>({}));
    if(!response.ok || !data.ai_enabled) throw new Error(data.error||'Service indisponible');
    aiServiceAvailable=true;
    status.textContent=`Service Gemini disponible · modèle ${data.model || 'configuré côté serveur'}`;
    status.className='ai-connect-status ready';
    refreshAIButton();
  }catch(error){
    status.textContent='Service Gemini non connecté.'; status.className='ai-connect-status error';
    help.textContent='Le questionnaire fonctionne normalement. Pour activer l’analyse, lancez ou déployez le serveur fourni dans le ZIP et configurez GEMINI_API_KEY.';
    help.classList.remove('hidden');
  }
}

function renderAIAnalysis(analysis){
  const output=$('#ai-output'); if(!output || !analysis) return;
  const axes=(analysis.axis_analysis||[]).map(x=>`<article class="ai-mini-card"><strong>${esc(x.axis)}</strong>${formatAIText(x.analysis)}</article>`).join('');
  const parties=(analysis.party_analysis||[]).map(x=>`<article class="ai-mini-card"><strong>${esc(x.party)}</strong>${formatAIText(x.analysis)}</article>`).join('');
  const tensions=(analysis.tensions||[]).map(x=>`<li>${esc(cleanAIQuestionReferences(x))}</li>`).join('');
  const identity=analysis.independent_profile ? `<div class="ai-panel"><h3>Si l’on devait résumer votre profil indépendamment des partis</h3><p style="font-size:1.08rem;font-weight:800;color:var(--teal);margin:0 0 12px">${esc(cleanAIQuestionReferences(analysis.independent_profile.label))}</p>${formatAIText(analysis.independent_profile.analysis)}</div>` : '';
  const refs=(analysis.factual_references||[]).length ? `<div class="ai-panel"><h3>Repères factuels utilisés</h3><ul class="source-list">${analysis.factual_references.map(x=>`<li><strong>${esc(x.fact)}</strong><br><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.source)}</a></li>`).join('')}</ul></div>` : '';
  output.innerHTML=`
    <div class="ai-output-head"><span class="ai-label" style="background:rgba(255,255,255,.12);color:#d9f3ef">Analyse Gemini générée</span><h3>${esc(cleanAIQuestionReferences(analysis.title))}</h3>${formatAIText(analysis.overview)}</div>
    ${identity}
    <div class="ai-panel"><h3>Lecture de vos six axes</h3><div class="ai-axis-grid">${axes}</div></div>
    <div class="ai-panel"><h3>Lecture de vos principales correspondances</h3><div class="ai-party-grid">${parties}</div></div>
    <div class="ai-panel"><h3>Tensions et nuances de votre profil</h3><ul class="ai-list">${tensions}</ul></div>
    <div class="ai-panel"><h3>Comparaison internationale</h3>${formatAIText(analysis.international_comparison)}</div>
    <div class="ai-panel"><h3>Synthèse</h3>${formatAIText(analysis.conclusion)}</div>
    ${refs}
    <div class="ai-warning"><strong>Limite méthodologique</strong><br>${esc(cleanAIQuestionReferences(analysis.caveat))}</div>`;
  output.classList.remove('hidden');
  output.scrollIntoView({behavior:'smooth',block:'start'});
}

async function generateAIAnalysis(){
  if(!results || !aiServiceAvailable){ toast('Le service Gemini n’est pas connecté.'); return; }
  if(!$('#ai-consent').checked || !$('#ai-age-confirm').checked){
    toast('Validez le consentement et la confirmation d’âge avant de continuer.');
    refreshAIButton();
    return;
  }
  const button=$('#ai-analysis-btn'), loading=$('#ai-loading'), output=$('#ai-output'), help=$('#ai-server-help');
  button.disabled=true; loading.classList.remove('hidden'); help.classList.add('hidden');
  if(!aiAnalysisResult) output.classList.add('hidden');
  try{
    const payload=buildAIAnalysisPayload();
    const response=await fetch(aiApiUrl('/api/analyse'),{
      method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)
    });
    const data=await response.json().catch(()=>({}));
    if(!response.ok) throw new Error(data.error||'L’analyse Gemini n’a pas pu être générée.');
    aiAnalysisResult=data.analysis; renderAIAnalysis(aiAnalysisResult);
    button.textContent='Régénérer l’analyse avec Gemini';
  }catch(error){
    help.textContent=error.message||'Erreur lors de la génération de l’analyse Gemini.'; help.classList.remove('hidden');
  }finally{
    loading.classList.add('hidden'); refreshAIButton();
  }
}


function exportResults(){
  if(!results) return;
  const payload={generatedAt:new Date().toISOString(),quizMode:state.mode,questionCount:activeQuestionCount(),priority:state.priority,activeQuestionIds:activeQuestions().map(({q})=>q.id),answers:state.answers,questionComments:state.questionComments,openAnswers:state.openAnswers,userAxisScores:results.userScores,parties:results.parties.map(e=>({name:e.name,similarity:e.global,detailed:e.detailed,axisScores:e.axisScores})),governments:results.governments.map(e=>({name:e.name,similarity:e.global,detailed:e.detailed,axisScores:e.axisScores}))};
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='resultats-boussole-politique.json'; a.click(); URL.revokeObjectURL(url); toast('Résultats exportés');
}

function demoResults(){
  if(!demoMode) stateBeforeDemo=JSON.parse(JSON.stringify(state));
  const demoState=initialState(QUIZ_MODES.FULL);
  demoState.answers=DATA.questions.map(q=>q.defaultAnswer??0);
  demoState.questionComments=Array(DATA.questions.length).fill('');
  demoState.priority=EQUAL_PRIORITY;
  state=demoState; demoMode=true;
  results=calculateResults(); renderResults(); showScreen('results'); refreshResume();
}
function scrollMethod(){ if($('#screen-results').classList.contains('hidden')){ demoResults(); setTimeout(()=>$$('details.method')[0]?.scrollIntoView({behavior:'smooth'}),100); } else { $$('details.method')[0]?.scrollIntoView({behavior:'smooth'}); } }

// Events
$('#start-full-btn').addEventListener('click',()=>startFresh(QUIZ_MODES.FULL));
$('#start-quick-btn').addEventListener('click',()=>startFresh(QUIZ_MODES.QUICK));
$('#resume-btn').addEventListener('click',resume); $('#top-progress-btn').addEventListener('click',resume);
$('#discard-btn').addEventListener('click',()=>{ if(confirm('Effacer la progression enregistrée ?')) clearState(); });
$('#priority-back').addEventListener('click',()=>showScreen('intro'));
$('#priority-next').addEventListener('click',()=>{ if(state.priority===null){ toast('Choisissez une option avant de commencer.'); return; } state.current=firstMissingActivePosition(); if(state.current<0) state.current=0; saveState(); showScreen('quiz'); renderQuestion(); });
$('#prev-btn').addEventListener('click',prevQuestion); $('#next-btn').addEventListener('click',nextQuestion);
$('#open-back').addEventListener('click',()=>{ state.current=activeQuestionCount()-1; showScreen('quiz'); renderQuestion(); });
$('#finish-btn').addEventListener('click',finish);
$('#edit-answers-btn').addEventListener('click',()=>{ if(demoMode){ restoreRealState(); startFresh(); return; } state.completed=false; state.current=0; aiAnalysisResult=null; saveState(); showScreen('quiz'); renderQuestion(); });
$('#export-btn').addEventListener('click',exportResults); $('#print-btn').addEventListener('click',()=>window.print());
$('#ai-analysis-btn').addEventListener('click',generateAIAnalysis);
$('#ai-consent').addEventListener('change',refreshAIButton);
$('#ai-age-confirm').addEventListener('change',refreshAIButton);
$('#restart-btn').addEventListener('click',()=>{ if(confirm('Recommencer le test et effacer vos réponses ?')){ clearState(); showScreen('intro'); } });
$$('.tab').forEach(t=>t.addEventListener('click',()=>renderMatches(t.dataset.tab)));
$('#modal-close').addEventListener('click',closeModal); $('#modal-backdrop').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeModal(); });
document.addEventListener('keydown',e=>{
  if(!$('#modal-backdrop').classList.contains('hidden') && e.key==='Escape'){ closeModal(); return; }
  if($('#screen-quiz').classList.contains('hidden')) return;
  if(/^[1-7]$/.test(e.key)){ answerQuestion(Number(e.key)-4); }
  if(e.key==='ArrowLeft') prevQuestion(); if(e.key==='ArrowRight' && state.answers[activeOriginalIndex()]!==null) nextQuestion();
});

renderPriority(); refreshResume();
if(state.completed && activeAnswersComplete()){ results=calculateResults(); renderResults(); showScreen('results'); }
