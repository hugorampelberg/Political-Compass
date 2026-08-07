import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { JSDOM } from "jsdom";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");

function installBrowserGlobals(dom) {
  const values = {
    window: dom.window,
    document: dom.window.document,
    localStorage: dom.window.localStorage,
    location: dom.window.location,
    navigator: dom.window.navigator,
    Element: dom.window.Element,
    HTMLElement: dom.window.HTMLElement,
    Node: dom.window.Node,
    Blob: dom.window.Blob,
    confirm: () => true,
    fetch: async () => ({ ok: true, json: async () => ({ ai_enabled: false }) })
  };
  const previous = new Map(
    Object.keys(values).map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)])
  );
  for (const [key, value] of Object.entries(values)) {
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value
    });
  }
  dom.window.scrollTo = () => {};
  dom.window.HTMLElement.prototype.animate = () => ({ finished: Promise.resolve() });
  return () => {
    for (const [key, descriptor] of previous) {
      if (descriptor === undefined) delete globalThis[key];
      else Object.defineProperty(globalThis, key, descriptor);
    }
    dom.window.close();
  };
}

test("les raccourcis sont désactivés pendant la saisie mais actifs sur la page", async () => {
  const dom = new JSDOM(html, { url: "http://127.0.0.1:3000/", pretendToBeVisual: true });
  const cleanup = installBrowserGlobals(dom);
  try {
    await import(`../assets/app.js?ui-test=${Date.now()}`);
    document.querySelector("#start-full-btn").click();
    document.querySelector('[data-axis="equal"]').click();
    document.querySelector("#priority-next").click();

    assert.equal(document.querySelector("#question-count").textContent, "Question 1 sur 80");
    const comment = document.querySelector("#question-comment");
    comment.focus();
    comment.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "7", bubbles: true, cancelable: true }));
    assert.equal(document.querySelector(".scale-choice.selected"), null);

    document.body.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "7", bubbles: true, cancelable: true }));
    assert.equal(document.querySelector('.scale-choice[data-value="3"]').classList.contains("selected"), true);

    document.body.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, cancelable: true }));
    assert.equal(document.querySelector("#question-count").textContent, "Question 2 sur 80");

    const secondComment = document.querySelector("#question-comment");
    secondComment.focus();
    secondComment.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, cancelable: true }));
    assert.equal(document.querySelector("#question-count").textContent, "Question 2 sur 80");
  } finally {
    cleanup();
  }
});

test("GTM et Vercel Analytics ne sont ajoutés qu’après acceptation", async () => {
  const dom = new JSDOM(html, { url: "http://127.0.0.1:3000/", pretendToBeVisual: true });
  const cleanup = installBrowserGlobals(dom);
  try {
    await import(`../assets/consent.js?consent-test=${Date.now()}`);
    assert.ok(document.querySelector("#privacy-consent"));
    assert.equal(document.querySelector("#google-tag-manager"), null);
    assert.equal(document.querySelector("#vercel-analytics"), null);

    document.querySelector('[data-consent="refuse"]').click();
    assert.equal(document.querySelector("#privacy-consent"), null);
    assert.equal(JSON.parse(localStorage.getItem("boussole-privacy-choice-v1")).analytics, false);
    assert.equal(document.querySelector("#google-tag-manager"), null);

    document.querySelector("#manage-consent").click();
    const buttons = [...document.querySelectorAll(".consent-button")];
    assert.deepEqual(buttons.map((button) => button.textContent), ["Refuser", "Accepter"]);
    document.querySelector('[data-consent="accept"]').click();

    assert.equal(JSON.parse(localStorage.getItem("boussole-privacy-choice-v1")).analytics, true);
    assert.match(document.querySelector("#google-tag-manager").src, /^https:\/\/www\.googletagmanager\.com\/gtm\.js/);
    assert.equal(document.querySelector("#vercel-analytics").getAttribute("src"), "/_vercel/insights/script.js");
    assert.equal(window.dataLayer.some((entry) => entry[0] === "consent" && entry[1] === "update"), true);
  } finally {
    cleanup();
  }
});

test("le parcours rapide aboutit à des résultats complets", async () => {
  const dom = new JSDOM(html, { url: "http://127.0.0.1:3000/", pretendToBeVisual: true });
  const cleanup = installBrowserGlobals(dom);
  try {
    await import(`../assets/app.js?quick-flow-test=${Date.now()}`);
    document.querySelector("#start-quick-btn").click();
    document.querySelector('[data-axis="equal"]').click();
    document.querySelector("#priority-next").click();

    for (let index = 0; index < 40; index += 1) {
      document.querySelector('.scale-choice[data-value="0"]').click();
      document.querySelector("#next-btn").click();
    }

    assert.equal(document.querySelector("#screen-open").classList.contains("hidden"), false);
    document.querySelector("#finish-btn").click();
    await new Promise((resolve) => setTimeout(resolve, 950));

    assert.equal(document.querySelector("#screen-results").classList.contains("hidden"), false);
    assert.match(document.querySelector("#result-mode-badge").textContent, /40 questions comparées/);
    assert.equal(document.querySelectorAll("#axis-results .axis-result").length, 6);
    assert.equal(document.querySelectorAll("#match-grid .match-card").length, 11);
    assert.doesNotMatch(document.body.textContent, /démonstration/i);
  } finally {
    cleanup();
  }
});
