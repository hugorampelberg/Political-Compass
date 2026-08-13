(() => {
  'use strict';

  const PARTY_LABELS = {
    lfi: 'La France insoumise (LFI)',
    pcf: 'Parti communiste français (PCF)',
    'les-ecologistes': 'Les Écologistes',
    ps: 'Parti socialiste (PS)',
    renaissance: 'Renaissance',
    modem: 'Mouvement démocrate (MoDem)',
    horizons: 'Horizons',
    'france-humaniste': 'La France Humaniste',
    lr: 'Les Républicains (LR)',
    'nouvelle-energie': 'Nouvelle Énergie',
    udr: 'Union des droites pour la République (UDR)',
    rn: 'Rassemblement national (RN)',
    reconquete: 'Reconquête'
  };

  const selector = document.getElementById('party-selector');
  const title = document.getElementById('profile-title');
  const description = document.getElementById('profile-description');
  const intro = document.getElementById('profile-intro');
  const summary = document.getElementById('profile-summary');
  const status = document.getElementById('profile-status');
  const tableWrap = document.getElementById('profile-table-wrap');
  const caption = document.getElementById('profile-caption');
  const tableBody = document.getElementById('profile-table-body');

  function partyLabel(party) {
    return PARTY_LABELS[party.id] || party.name;
  }

  function requestedPartyId() {
    try {
      return decodeURIComponent(window.location.hash.slice(1)).trim().toLowerCase();
    } catch (error) {
      return '';
    }
  }

  function safeSource(source) {
    if (typeof source !== 'string' || !source) return null;
    try {
      const url = new URL(source);
      return url.protocol === 'https:' ? url : null;
    } catch (error) {
      return null;
    }
  }

  function makeCell(label) {
    const cell = document.createElement('td');
    cell.dataset.label = label;
    return cell;
  }

  function fillSelector(parties) {
    const fragment = document.createDocumentFragment();
    parties.forEach((party) => {
      const option = document.createElement('option');
      option.value = party.id;
      option.textContent = partyLabel(party);
      fragment.appendChild(option);
    });
    selector.replaceChildren(fragment);
  }

  function renderParty(parties) {
    const requestedId = requestedPartyId();
    const party = parties.find((candidate) => candidate.id === requestedId) || parties[0];
    if (!party) {
      status.textContent = 'Aucun profil de parti n’est disponible.';
      return;
    }

    const label = partyLabel(party);
    selector.value = party.id;
    title.textContent = `Justifications et sources — ${label}`;
    intro.textContent = `Retrouvez la position documentaire de ${label} pour chacune des questions du test.`;
    summary.textContent = 'Ce tableau affiche uniquement les questions, les justifications et les sources publiques utilisées. Il ne contient ni votre score ni la note attribuée au parti.';
    caption.textContent = `${DATA.questions.length} questions documentées pour ${label}.`;
    document.title = `${label} : justifications et sources`;
    description.setAttribute('content', `Consultez les justifications et les sources de ${label} pour les ${DATA.questions.length} questions du test politique.`);

    const rows = document.createDocumentFragment();
    DATA.questions.forEach((question, index) => {
      const row = document.createElement('tr');

      const questionCell = makeCell('Question');
      const questionMeta = document.createElement('span');
      questionMeta.className = 'evidence-question-meta';
      questionMeta.textContent = `Q${question.id} · ${question.theme}`;
      const questionText = document.createElement('strong');
      questionText.className = 'evidence-question';
      questionText.textContent = question.text;
      questionCell.append(questionMeta, questionText);

      const justificationCell = makeCell('Justification');
      justificationCell.textContent = party.justifications?.[index] || 'Justification non renseignée.';

      const sourceCell = makeCell('Source');
      const source = safeSource(party.sources?.[index]);
      if (source) {
        const sourceLink = document.createElement('a');
        sourceLink.className = 'evidence-source';
        sourceLink.href = source.href;
        sourceLink.target = '_blank';
        sourceLink.rel = 'noopener noreferrer';
        const linkText = document.createElement('span');
        linkText.textContent = 'Consulter la source';
        const sourceHost = document.createElement('small');
        sourceHost.textContent = source.hostname.replace(/^www\./, '');
        sourceLink.append(linkText, sourceHost);
        sourceCell.appendChild(sourceLink);
      } else {
        const unavailable = document.createElement('span');
        unavailable.className = 'evidence-unavailable';
        unavailable.textContent = 'Source non renseignée';
        sourceCell.appendChild(unavailable);
      }

      row.append(questionCell, justificationCell, sourceCell);
      rows.appendChild(row);
    });

    tableBody.replaceChildren(rows);
    status.hidden = true;
    tableWrap.hidden = false;
  }

  function initialize() {
    if (typeof DATA === 'undefined' || !Array.isArray(DATA.questions) || !Array.isArray(DATA.entities)) {
      status.textContent = 'Les données documentaires n’ont pas pu être chargées.';
      return;
    }

    const parties = DATA.entities.filter((entity) => entity.category === 'party');
    fillSelector(parties);
    renderParty(parties);

    selector.addEventListener('change', () => {
      window.location.hash = selector.value;
    });
    window.addEventListener('hashchange', () => renderParty(parties));
  }

  initialize();
})();
