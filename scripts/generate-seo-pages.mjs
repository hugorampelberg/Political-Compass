#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import {
  PARTY_EDITORIAL_CONTENT,
  PROFILE_EDITORIAL_REVIEW_DATE
} from '../data/party-editorial-content.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteOrigin = 'https://www.frenchpoliticalcompass.com';
const lastModified = process.env.SEO_LASTMOD || new Date().toISOString().slice(0, 10);

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

const PARTY_SEO_LABELS = {
  lfi: 'LFI',
  pcf: 'PCF',
  'les-ecologistes': 'Les Écologistes',
  ps: 'PS',
  renaissance: 'Renaissance',
  modem: 'MoDem',
  horizons: 'Horizons',
  'france-humaniste': 'France Humaniste',
  lr: 'LR',
  'nouvelle-energie': 'Nouvelle Énergie',
  udr: 'UDR',
  rn: 'RN',
  reconquete: 'Reconquête'
};

const QUESTION_SEO_TITLES = {
  5: 'Hausse du SMIC',
  6: 'Privé ou public dans les services essentiels',
  8: 'Concurrence ou réglementation',
  12: 'Choix individuel ou protection obligatoire',
  17: 'Règles régionales ou nationales',
  28: 'Prévention, réinsertion ou sanctions',
  33: 'TVA sociale et cotisations',
  37: 'Compétences nationales et européennes',
  39: 'Bilan de l’euro pour la France',
  42: 'Suppression de l’IFI',
  48: 'Retraite par répartition et capitalisation',
  50: 'Prestations sociales et durée de cotisation',
  51: 'Aides publiques, dividendes et dirigeants',
  63: 'Taxe carbone et compensation',
  72: 'Proportionnelle intégrale',
  77: 'Assurance maladie et complémentaires santé',
  79: 'Recrutement local des enseignants',
  80: 'Financement du privé et mixité sociale'
};

const productionDataFiles = [
  'data/questionnaire.js',
  'data/parties.js',
  'data/governments.js',
  'data/index.js',
  'data/pcf-overrides.js',
  'data/rn-overrides.js',
  'data/lfi-overrides.js',
  'data/pays-bas-overrides.js',
  'data/danemark-overrides.js',
  'data/suisse-overrides.js',
  'data/finlande-overrides.js',
  'data/allemagne-overrides.js',
  'data/residence-permit-overrides.js'
];

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');
}

function write(relativePath, content) {
  const absolutePath = path.join(projectRoot, relativePath);
  fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
  fs.writeFileSync(absolutePath, `${content.trim()}\n`, 'utf8');
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function safeJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}

function loadQuestionDetails() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(
    `${read('data/question-details.js')}\nglobalThis.__QUESTION_DETAILS__ = QUESTION_DETAILS;`,
    context,
    { filename: 'data/question-details.js' }
  );
  return context.__QUESTION_DETAILS__;
}

function loadProductionData() {
  const context = { console };
  vm.createContext(context);
  for (const relativePath of productionDataFiles) {
    vm.runInContext(read(relativePath), context, { filename: relativePath });
  }
  vm.runInContext('globalThis.__DATA__ = DATA;', context);
  return context.__DATA__;
}

function brand() {
  return '<a class="brand" href="/"><img class="brand-mark brand-logo" src="/favicon.png" width="40" height="40" alt=""><span>Boussole politique</span></a>';
}

function header() {
  return `<header class="topbar"><div class="shell topbar-inner">${brand()}<nav class="top-nav" aria-label="Navigation principale"><a href="/">Faire le test</a><a href="/questions/">Questions expliquées</a><a href="/partis-politiques/">Partis comparés</a><a href="/methodologie/">Méthodologie</a><a href="/a-propos/">À propos</a></nav></div></header>`;
}

function footer() {
  return '<footer><div class="shell">Outil indépendant et exploratoire · <a href="/a-propos/">À propos</a> · <a href="/confidentialite.html">Politique de confidentialité</a></div></footer>';
}

function breadcrumb(items) {
  return `<nav class="breadcrumbs" aria-label="Fil d’Ariane"><ol>${items.map((item, index) => {
    const label = escapeHtml(item.name);
    return `<li>${item.url && index < items.length - 1 ? `<a href="${escapeHtml(item.url)}">${label}</a>` : `<span aria-current="page">${label}</span>`}</li>`;
  }).join('')}</ol></nav>`;
}

function structuredPage({ canonical, title, description, crumbs }) {
  const breadcrumbId = `${canonical}#breadcrumb`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': `${siteOrigin}/#website` },
        breadcrumb: { '@id': breadcrumbId }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: crumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }
    ]
  };
}

function documentHead({ title, description, canonical, type = 'website', structuredData }) {
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6201499207692945"
   crossorigin="anonymous"></script>
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="icon" type="image/png" sizes="434x434" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <meta name="theme-color" content="#20364d">
  <meta property="og:type" content="${type}">
  <meta property="og:locale" content="fr_FR">
  <meta property="og:site_name" content="Boussole politique">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${siteOrigin}/social-preview.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${siteOrigin}/social-preview.png">
  <script type="application/ld+json">${safeJson(structuredData)}</script>`;
}

function questionCitation(ids, sourceMap, questionId) {
  if (!ids?.length) return '';
  const links = ids.map((id) => {
    const source = sourceMap.get(id);
    if (!source) return '';
    return `<a class="citation-link" href="#source-${questionId}-${escapeHtml(source.id)}" aria-label="Voir la source ${source.number}">[${source.number}]</a>`;
  }).join('');
  return links ? `<span class="citation-links" aria-label="Sources associées">${links}</span>` : '';
}

function questionItem(item, sourceMap, questionId) {
  return `<li><strong>${escapeHtml(item.title)}</strong>${escapeHtml(item.text)}${questionCitation(item.sources, sourceMap, questionId)}</li>`;
}

function questionParagraph(paragraph, sourceMap, questionId) {
  const item = typeof paragraph === 'string' ? { text: paragraph } : paragraph;
  return `<p>${escapeHtml(item.text)}${questionCitation(item.sources, sourceMap, questionId)}</p>`;
}

function generateQuestionPages(questionDetails) {
  const ids = Object.keys(questionDetails).map(Number).sort((a, b) => a - b);

  for (const [position, questionId] of ids.entries()) {
    const detail = questionDetails[questionId];
    const canonical = `${siteOrigin}/questions/q${questionId}/`;
    const title = `${QUESTION_SEO_TITLES[questionId] || detail.shortTitle} | Test politique`;
    const description = detail.metaDescription;
    const crumbs = [
      { name: 'Test politique', url: `${siteOrigin}/` },
      { name: 'Questions expliquées', url: `${siteOrigin}/questions/` },
      { name: `Q${questionId}`, url: canonical }
    ];
    const sourceMap = new Map(detail.sources.map((source, index) => [source.id, { ...source, number: index + 1 }]));
    const previousId = ids[position - 1];
    const nextId = ids[position + 1];
    const navigation = [
      previousId ? `<a href="/questions/q${previousId}/">← Q${previousId}</a>` : '',
      '<a href="/questions/">Toutes les questions expliquées</a>',
      `<a href="/?resumeQuestion=${questionId}">Retour au questionnaire</a>`,
      nextId ? `<a href="/questions/q${nextId}/">Q${nextId} →</a>` : ''
    ].join('');

    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  ${documentHead({ title, description, canonical, type: 'article', structuredData: structuredPage({ canonical, title, description, crumbs }) })}
  <link rel="stylesheet" href="/styles/content.css">
  <link rel="stylesheet" href="/styles/question-detail.css">
</head>
<body data-question-id="${questionId}">
  ${header()}
  <main><article class="shell article question-article">
    ${breadcrumb([{ name: 'Accueil', url: '/' }, { name: 'Questions expliquées', url: '/questions/' }, { name: `Q${questionId}` }])}
    <span class="eyebrow">Q${questionId} · ${escapeHtml(detail.theme)}</span>
    <h1 class="question-heading"><span class="question-number">Q${questionId}</span> — ${escapeHtml(detail.question)}</h1>
    <p class="lead">${escapeHtml(detail.introduction)}</p>
    <aside class="note neutrality-note">
      <span class="question-mark" aria-hidden="true">?</span>
      <p><strong>Lecture neutre.</strong> Cette page ne désigne aucune réponse comme correcte. Elle sépare les mécanismes possibles, les résultats disponibles et les choix de valeurs. Un argument peut être pertinent sans que son effet soit automatique dans tous les contextes.</p>
    </aside>

    <section class="question-section" aria-labelledby="balance-title">
      <h2 id="balance-title">Ce que la question met en balance</h2>
      ${detail.balance.map((paragraph) => questionParagraph(paragraph, sourceMap, questionId)).join('')}
    </section>

    <div class="argument-grid">
      <section class="argument-card argument-card-favour" aria-labelledby="favour-title">
        <h2 id="favour-title">Arguments en faveur</h2>
        <ul class="argument-list">${detail.favour.map((item) => questionItem(item, sourceMap, questionId)).join('')}</ul>
      </section>
      <section class="argument-card argument-card-reserve" aria-labelledby="reserve-title">
        <h2 id="reserve-title">Arguments défavorables ou réserves</h2>
        <ul class="argument-list">${detail.reserve.map((item) => questionItem(item, sourceMap, questionId)).join('')}</ul>
      </section>
    </div>

    <section class="question-section" aria-labelledby="factors-title">
      <h2 id="factors-title">Ce qui fait varier les effets</h2>
      <ul class="factor-list">${detail.factors.map((item) => questionItem(item, sourceMap, questionId)).join('')}</ul>
    </section>

    <section class="question-check" aria-labelledby="decide-title">
      <h2 id="decide-title">Pour vous positionner</h2>
      <p>${escapeHtml(detail.decisionPrompt)}</p>
    </section>

    <section class="question-section" aria-labelledby="sources-title">
      <h2 id="sources-title">Sources et lectures de référence</h2>
      <ol class="sources-list">${detail.sources.map((source, index) => `<li id="source-${questionId}-${escapeHtml(source.id)}"><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a><span>${escapeHtml(source.publisher)} · ${escapeHtml(source.year)}${source.note ? ` · ${escapeHtml(source.note)}` : ''}</span></li>`).join('')}</ol>
    </section>

    <nav class="review-nav" aria-label="Navigation entre les explications">${navigation}</nav>
  </article></main>
  ${footer()}
</body>
</html>`;

    write(`questions/q${questionId}/index.html`, html);
  }

  const canonical = `${siteOrigin}/questions/`;
  const title = 'Questions expliquées du test politique français';
  const description = 'Comprenez les enjeux de 18 questions du test politique : arguments pour et contre, points de vigilance et sources publiques, dans une présentation neutre.';
  const crumbs = [
    { name: 'Test politique', url: `${siteOrigin}/` },
    { name: 'Questions expliquées', url: canonical }
  ];
  const cards = ids.map((questionId) => {
    const detail = questionDetails[questionId];
    return `<a class="question-index-card" href="/questions/q${questionId}/"><span>Q${questionId} · ${escapeHtml(detail.theme)}</span><strong>${escapeHtml(detail.question)}</strong><small>${escapeHtml(detail.shortTitle)}</small></a>`;
  }).join('');

  write('questions/index.html', `<!DOCTYPE html>
<html lang="fr">
<head>
  ${documentHead({ title, description, canonical, structuredData: structuredPage({ canonical, title, description, crumbs }) })}
  <link rel="stylesheet" href="/styles/content.css">
  <link rel="stylesheet" href="/styles/question-detail.css">
</head>
<body>
  ${header()}
  <main><article class="shell article question-article">
    ${breadcrumb([{ name: 'Accueil', url: '/' }, { name: 'Questions expliquées' }])}
    <span class="eyebrow">Comprendre avant de répondre</span>
    <h1>Questions expliquées du test politique</h1>
    <p class="lead">Certaines propositions économiques, sociales ou institutionnelles demandent un peu de contexte. Ces 18 fiches présentent simplement les mécanismes en jeu, les principaux arguments favorables et défavorables, les limites des études disponibles et des sources à consulter.</p>
    <div class="note"><p><strong>Pour relier ces questions aux grands débats économiques,</strong> consultez le guide des <a href="/theories-economiques/">théories économiques et de leur pertinence dans la France actuelle</a>.</p></div>
    <div class="note"><p><strong>Le but n’est pas de suggérer une réponse.</strong> Chaque fiche aide à distinguer les faits documentés, les effets qui dépendent du contexte et les arbitrages de valeurs.</p></div>
    <a class="cta" href="/">Commencer le test politique</a>
    <h2>Les 18 propositions détaillées</h2>
    <div class="questions-index-grid">${cards}</div>
    <section class="related"><h2>Comment ces fiches sont-elles construites ?</h2><p>Les textes privilégient des mots courants, exposent les arguments dans les deux sens et renvoient vers des travaux de recherche, des institutions publiques ou des organismes reconnus. Ils complètent le questionnaire sans intervenir dans le calcul des scores.</p><nav class="related-links"><a href="/methodologie/">Méthodologie du test</a><a href="/partis-politiques/">Positions documentées des partis</a><a href="/a-propos/">À propos du projet</a></nav></section>
  </article></main>
  ${footer()}
</body>
</html>`);

  return ids;
}

function sourceLink(source, questionId) {
  if (typeof source !== 'string' || !source) return '<span class="evidence-unavailable">Source non renseignée</span>';
  try {
    const url = new URL(source);
    if (url.protocol !== 'https:') throw new Error('Unsupported protocol');
    const host = url.hostname.replace(/^www\./, '');
    return `<a class="evidence-source" href="${escapeHtml(url.href)}" target="_blank" rel="noopener noreferrer"><span>Source de la position Q${questionId}</span><small>${escapeHtml(host)}</small></a>`;
  } catch {
    return '<span class="evidence-unavailable">Source non renseignée</span>';
  }
}

function partyEditorialSection(partyId, label, questionCount) {
  const paragraphs = PARTY_EDITORIAL_CONTENT[partyId];
  if (!Array.isArray(paragraphs) || paragraphs.length < 3) {
    throw new Error(`Synthèse éditoriale absente ou incomplète pour ${partyId}.`);
  }

  return `<section class="profile-editorial" aria-labelledby="profile-editorial-title">
      <span class="profile-editorial-kicker">Repères de lecture</span>
      <h2 id="profile-editorial-title">Lecture d’ensemble du profil</h2>
      <div class="profile-editorial-body">${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</div>
      <p class="profile-editorial-note"><strong>Méthode et date.</strong> Synthèse éditoriale vérifiée le ${escapeHtml(PROFILE_EDITORIAL_REVIEW_DATE)}, à partir des ${questionCount} positions et des sources publiques présentées ci-dessous. Elle décrit le corpus retenu pour ${escapeHtml(label)} et ne constitue ni une prise de position du site, ni une communication officielle du parti. <a href="/methodologie/">Voir la méthode de codage et de comparaison.</a></p>
    </section>`;
}

function partyCard(party, questionCount) {
  const label = PARTY_LABELS[party.id] || party.name;
  return `<li><strong>${escapeHtml(label)}</strong><a class="party-profile-link" href="/partis-politiques/profils/${escapeHtml(party.id)}/">Voir les ${questionCount} justifications et sources.</a></li>`;
}

function generatePartyProfilePages(data) {
  const parties = data.entities.filter((entity) => entity.category === 'party');

  for (const party of parties) {
    const label = PARTY_LABELS[party.id] || party.name;
    const canonical = `${siteOrigin}/partis-politiques/profils/${party.id}/`;
    const title = `${PARTY_SEO_LABELS[party.id] || label} : positions et sources | Test politique`;
    const description = `Consultez les justifications et les sources de ${label} pour les ${data.questions.length} questions du test politique français.`;
    const crumbs = [
      { name: 'Test politique', url: `${siteOrigin}/` },
      { name: 'Partis politiques', url: `${siteOrigin}/partis-politiques/` },
      { name: 'Profils documentés', url: `${siteOrigin}/partis-politiques/profils/` },
      { name: label, url: canonical }
    ];
    const rows = data.questions.map((question, index) => `<tr><td data-label="Question"><span class="evidence-question-meta">Q${question.id} · ${escapeHtml(question.theme)}</span><strong class="evidence-question">${escapeHtml(question.text)}</strong></td><td data-label="Justification">${escapeHtml(party.justifications?.[index] || 'Justification non renseignée.')}</td><td data-label="Source">${sourceLink(party.sources?.[index], question.id)}</td></tr>`).join('');
    const otherParties = parties.filter((candidate) => candidate.id !== party.id).map((candidate) => `<a href="/partis-politiques/profils/${escapeHtml(candidate.id)}/">${escapeHtml(PARTY_LABELS[candidate.id] || candidate.name)}</a>`).join('');

    write(`partis-politiques/profils/${party.id}/index.html`, `<!DOCTYPE html>
<html lang="fr">
<head>
  ${documentHead({ title, description, canonical, type: 'article', structuredData: structuredPage({ canonical, title, description, crumbs }) })}
  <link rel="stylesheet" href="/styles/content.css">
</head>
<body>
  ${header()}
  <main><article class="shell article profile-article">
    ${breadcrumb([{ name: 'Accueil', url: '/' }, { name: 'Partis politiques', url: '/partis-politiques/' }, { name: 'Profils documentés', url: '/partis-politiques/profils/' }, { name: label }])}
    <span class="eyebrow">Documentation question par question</span>
    <h1>${escapeHtml(label)} : justifications et sources</h1>
    <p class="lead">Retrouvez la position documentaire de ${escapeHtml(label)} pour chacune des ${data.questions.length} questions du test politique.</p>
    ${partyEditorialSection(party.id, label, data.questions.length)}
    <p class="profile-summary">Ce tableau affiche uniquement les questions, les justifications et les sources publiques utilisées. Il ne contient ni votre score ni la note attribuée au parti.</p>
    <div class="evidence-table-wrap">
      <table class="evidence-table">
        <caption>${data.questions.length} questions documentées pour ${escapeHtml(label)}.</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">Justification</th><th scope="col">Source</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <section class="related"><h2>Comparer avec un autre parti</h2><nav class="related-links profile-links">${otherParties}</nav></section>
    <section class="related"><h2>À lire également</h2><nav class="related-links"><a href="/partis-politiques/">Tous les partis comparés</a><a href="/methodologie/">Méthodologie du test</a><a href="/">Faire le test politique</a></nav></section>
  </article></main>
  ${footer()}
</body>
</html>`);
  }

  const canonical = `${siteOrigin}/partis-politiques/profils/`;
  const title = 'Positions, justifications et sources des partis politiques';
  const description = `Choisissez un parti français et consultez, pour les ${data.questions.length} questions du test politique, sa justification documentaire et la source publique associée.`;
  const crumbs = [
    { name: 'Test politique', url: `${siteOrigin}/` },
    { name: 'Partis politiques', url: `${siteOrigin}/partis-politiques/` },
    { name: 'Profils documentés', url: canonical }
  ];

  write('partis-politiques/profils/index.html', `<!DOCTYPE html>
<html lang="fr">
<head>
  ${documentHead({ title, description, canonical, structuredData: structuredPage({ canonical, title, description, crumbs }) })}
  <link rel="stylesheet" href="/styles/content.css">
</head>
<body>
  ${header()}
  <main><article class="shell article">
    ${breadcrumb([{ name: 'Accueil', url: '/' }, { name: 'Partis politiques', url: '/partis-politiques/' }, { name: 'Profils documentés' }])}
    <span class="eyebrow">Documentation question par question</span>
    <h1>Justifications et sources des partis politiques</h1>
    <p class="lead">Chaque profil rassemble les ${data.questions.length} questions du test, la justification retenue pour le parti et la source publique associée. Les notes numériques restent volontairement absentes de ces tableaux.</p>
    <a class="cta" href="/">Comparer mes opinions aux partis</a>
    <h2>Choisir un parti</h2>
    <ul class="party-list">${parties.map((party) => partyCard(party, data.questions.length)).join('')}</ul>
    <section class="related"><h2>À lire également</h2><nav class="related-links"><a href="/partis-politiques/">Comprendre la comparaison</a><a href="/methodologie/">Consulter la méthodologie</a><a href="/questions/">Questions expliquées</a></nav></section>
  </article></main>
  ${footer()}
  <script>
    (() => {
      const legacyProfile = decodeURIComponent(window.location.hash.slice(1)).trim().toLowerCase();
      const profiles = ${safeJson(parties.map((party) => party.id))};
      if (profiles.includes(legacyProfile)) window.location.replace('/partis-politiques/profils/' + legacyProfile + '/');
    })();
  </script>
</body>
</html>`);

  return parties;
}

function generateSitemap(questionIds, parties) {
  const urls = [
    ['/', lastModified],
    ['/quel-parti-politique-me-correspond/', lastModified],
    ['/test-gauche-droite/', lastModified],
    ['/theories-economiques/', lastModified],
    ['/methodologie/', lastModified],
    ['/questions/', lastModified],
    ...questionIds.map((id) => [`/questions/q${id}/`, lastModified]),
    ['/partis-politiques/', lastModified],
    ['/partis-politiques/profils/', lastModified],
    ...parties.map((party) => [`/partis-politiques/profils/${party.id}/`, lastModified]),
    ['/a-propos/', lastModified],
    ['/confidentialite.html', '2026-08-21']
  ];
  const entries = urls.map(([pathname, date]) => `  <url>\n    <loc>${siteOrigin}${pathname}</loc>\n    <lastmod>${date}</lastmod>\n  </url>`).join('\n');
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`);
}

const questionDetails = loadQuestionDetails();
const productionData = loadProductionData();
const questionIds = generateQuestionPages(questionDetails);
const parties = generatePartyProfilePages(productionData);
generateSitemap(questionIds, parties);

console.log(`Pages SEO générées : ${questionIds.length} fiches de questions, ${parties.length} profils de partis et sitemap (${lastModified}).`);
