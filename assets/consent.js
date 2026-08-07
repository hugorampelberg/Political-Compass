const CONSENT_STORAGE_KEY = "boussole-privacy-choice-v1";
const CONSENT_LIFETIME_MS = 183 * 24 * 60 * 60 * 1000;
const GTM_CONTAINER_ID = "GTM-N7HJVRJQ";

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  functionality_storage: "granted",
  security_storage: "granted",
  wait_for_update: 500
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", false);

function readChoice() {
  try {
    const choice = JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) || "null");
    if (!choice || typeof choice.analytics !== "boolean" || !Number.isFinite(choice.updatedAt)) return null;
    if (Date.now() - choice.updatedAt > CONSENT_LIFETIME_MS) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return choice;
  } catch {
    return null;
  }
}

function storeChoice(analytics) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({
    analytics,
    updatedAt: Date.now(),
    version: 1
  }));
}

function loadScript(id, src) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.append(script);
}

function enableAnalytics() {
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  loadScript("vercel-analytics", "/_vercel/insights/script.js");
  loadScript(
    "google-tag-manager",
    `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_CONTAINER_ID)}`
  );
}

function disableAnalytics() {
  gtag("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
}

function deleteAnalyticsCookies() {
  const hostnameParts = location.hostname.split(".");
  const domains = [location.hostname];
  for (let index = 0; index < hostnameParts.length - 1; index += 1) {
    domains.push(`.${hostnameParts.slice(index).join(".")}`);
  }

  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^(_ga|_gid|_gat)/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
    }
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  }
}

function removePanel() {
  document.getElementById("privacy-consent")?.remove();
}

function renderPanel(isSettings = false) {
  removePanel();
  const currentChoice = readChoice();
  const panel = document.createElement("section");
  panel.id = "privacy-consent";
  panel.className = "consent-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "consent-title");
  panel.tabIndex = -1;
  panel.innerHTML = `
    <div class="consent-copy">
      <strong id="consent-title">Votre choix pour la mesure d’audience</strong>
      <p>Le questionnaire fonctionne sans traceur publicitaire. Avec votre accord, Google Tag Manager et Vercel Analytics mesurent uniquement l’usage général du site ; vos réponses politiques, commentaires et résultats ne leur sont jamais envoyés.</p>
      <a href="/confidentialite.html#traceurs">En savoir plus</a>
    </div>
    <div class="consent-actions">
      <button type="button" class="consent-button consent-refuse" data-consent="refuse">Refuser</button>
      <button type="button" class="consent-button consent-accept" data-consent="accept">Accepter</button>
      ${isSettings && currentChoice ? '<button type="button" class="consent-close" data-consent="close">Fermer sans modifier</button>' : ""}
    </div>`;
  document.body.append(panel);
  panel.focus({ preventScroll: true });

  panel.querySelector('[data-consent="accept"]').addEventListener("click", () => {
    storeChoice(true);
    enableAnalytics();
    removePanel();
  });
  panel.querySelector('[data-consent="refuse"]').addEventListener("click", () => {
    const analyticsWasLoaded = Boolean(document.getElementById("google-tag-manager") || document.getElementById("vercel-analytics"));
    storeChoice(false);
    disableAnalytics();
    deleteAnalyticsCookies();
    removePanel();
    if (analyticsWasLoaded) location.reload();
  });
  panel.querySelector('[data-consent="close"]')?.addEventListener("click", removePanel);
}

const choice = readChoice();
if (choice?.analytics) enableAnalytics();
else if (choice) disableAnalytics();
else renderPanel();

document.getElementById("manage-consent")?.addEventListener("click", () => renderPanel(true));
