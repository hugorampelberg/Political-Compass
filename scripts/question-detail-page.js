(function renderQuestionDetailPage(){
  const questionId=Number(document.body.dataset.questionId);
  const detail=QUESTION_DETAILS[questionId];
  const root=document.querySelector('[data-question-detail-root]');
  const questionnaireReturnUrl=`/?resumeQuestion=${questionId}`;

  if(!detail || !root){
    if(root) root.innerHTML='<p class="loading-error">Cette page de précision est momentanément indisponible.</p>';
    return;
  }

  const sourceMap=new Map(detail.sources.map((source,index)=>[source.id,{...source,number:index+1}]));
  const citationMarkup=(ids=[])=>ids.length
    ? `<span class="citation-links" aria-label="Sources associées">${ids.map(id=>{
        const source=sourceMap.get(id);
        return source ? `<a class="citation-link" href="#source-${questionId}-${source.id}" aria-label="Voir la source ${source.number}">[${source.number}]</a>` : '';
      }).join('')}</span>`
    : '';
  const itemMarkup=item=>`<li><strong>${item.title}</strong>${item.text}${citationMarkup(item.sources)}</li>`;
  const paragraphMarkup=paragraph=>{
    const item=typeof paragraph==='string' ? {text:paragraph} : paragraph;
    return `<p>${item.text}${citationMarkup(item.sources)}</p>`;
  };

  document.title=`Q${questionId} — ${detail.shortTitle} | Boussole politique`;
  document.querySelectorAll('[data-question-theme]').forEach(node=>node.textContent=detail.theme);
  document.querySelectorAll('[data-question-number]').forEach(node=>node.textContent=`Q${questionId}`);
  document.querySelectorAll('[data-question-title]').forEach(node=>node.textContent=detail.question);
  document.querySelector('meta[name="description"]')?.setAttribute('content',detail.metaDescription);

  root.innerHTML=`
    <p class="lead">${detail.introduction}</p>
    <aside class="note neutrality-note">
      <span class="question-mark" aria-hidden="true">?</span>
      <p><strong>Lecture neutre.</strong> Cette page ne désigne aucune réponse comme correcte. Elle sépare les mécanismes possibles, les résultats empiriques disponibles et les choix de valeurs. Un argument peut être pertinent sans que son effet soit automatique dans tous les contextes.</p>
    </aside>

    <section class="question-section" aria-labelledby="balance-title">
      <h2 id="balance-title">Ce que la question met en balance</h2>
      ${detail.balance.map(paragraphMarkup).join('')}
    </section>

    <div class="argument-grid">
      <section class="argument-card argument-card-favour" aria-labelledby="favour-title">
        <h2 id="favour-title">Arguments en faveur</h2>
        <ul class="argument-list">${detail.favour.map(itemMarkup).join('')}</ul>
      </section>
      <section class="argument-card argument-card-reserve" aria-labelledby="reserve-title">
        <h2 id="reserve-title">Arguments défavorables ou réserves</h2>
        <ul class="argument-list">${detail.reserve.map(itemMarkup).join('')}</ul>
      </section>
    </div>

    <section class="question-section" aria-labelledby="factors-title">
      <h2 id="factors-title">Ce qui fait varier les effets</h2>
      <ul class="factor-list">${detail.factors.map(itemMarkup).join('')}</ul>
    </section>

    <section class="question-check" aria-labelledby="decide-title">
      <h2 id="decide-title">Pour vous positionner</h2>
      <p>${detail.decisionPrompt}</p>
    </section>

    <section class="question-section" aria-labelledby="sources-title">
      <h2 id="sources-title">Sources et lectures de référence</h2>
      <ol class="sources-list">${detail.sources.map((source,index)=>`
        <li id="source-${questionId}-${source.id}">
          <a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title}</a>
          <span>${source.publisher} · ${source.year}${source.note ? ` · ${source.note}` : ''}</span>
        </li>`).join('')}
      </ol>
    </section>

    <nav class="review-nav" aria-label="Navigation de validation">
      <a href="/questions/">Voir les 18 pages</a>
      <a href="${questionnaireReturnUrl}">Retour au questionnaire</a>
    </nav>`;
})();
