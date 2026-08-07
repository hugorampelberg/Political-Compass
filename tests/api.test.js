import assert from "node:assert/strict";
import test from "node:test";

import DATA from "../assets/data.js";
import analyseHandler from "../api/analyse.js";
import healthHandler from "../api/health.js";
import indexHandler from "../api/index.js";

function responseRecorder() {
  return {
    statusCode: 200,
    headers: {},
    payload: undefined,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.payload = payload; return this; }
  };
}

function request(method, body, ip = "127.0.0.1") {
  return { method, body, headers: { "x-forwarded-for": ip }, socket: { remoteAddress: ip } };
}

function axisRecord(value = 0) {
  return {
    Économie: value,
    "Sécurité, justice et libertés publiques": value,
    "Place de la France dans l’Europe": value,
    Écologie: value,
    "Immigrations, accueil et intégration": value,
    Démocratie: value
  };
}

function validFullPayload() {
  const ranking = (category) => DATA.entities
    .filter((entity) => entity.category === category)
    .map((entity, index) => ({ rank: index + 1, name: entity.name, score: 50, axis_scores: axisRecord(50) }));
  return {
    consent: true,
    consent_version: "gemini-sensitive-data-v3",
    age_confirmed: true,
    quiz_mode: "full",
    question_count: 80,
    axis_scores: axisRecord(),
    question_responses: DATA.questions.map((question) => ({
      id: question.id,
      theme: question.theme,
      question: question.text,
      answer: 0,
      answer_label: "Neutre / partagé",
      comment: ""
    })),
    open_answers: DATA.openQuestions.map((question) => ({ question: question.text, answer: "" })),
    party_ranking: ranking("party"),
    government_ranking: ranking("government")
  };
}

test("GET /api décrit les routes disponibles", async () => {
  const response = responseRecorder();
  await indexHandler(request("GET"), response);
  assert.equal(response.statusCode, 200);
  assert.equal(response.payload.ok, true);
  assert.equal(response.payload.endpoints.health, "/api/health");
});
test("les routes API refusent les méthodes non prévues", async () => {
  const response = responseRecorder();
  await indexHandler(request("POST"), response);
  assert.equal(response.statusCode, 405);
  assert.equal(response.headers.allow, "GET");
});

test("GET /api/health ne propose jamais de profil de démonstration", async () => {
  const response = responseRecorder();
  await healthHandler(request("GET"), response);
  assert.equal(response.statusCode, 200);
  assert.equal(typeof response.payload.ai_enabled, "boolean");
  assert.doesNotMatch(JSON.stringify(response.payload), /démonstration|mock/i);
});

test("POST /api/analyse rejette un contenu incomplet", async () => {
  const response = responseRecorder();
  await analyseHandler(request("POST", { consent: true }, "127.0.0.2"), response);
  assert.equal(response.statusCode, 400);
});

test("POST /api/analyse accepte la structure complète puis exige la configuration payante", async () => {
  const response = responseRecorder();
  const previousError = console.error;
  console.error = () => {};
  try {
    await analyseHandler(request("POST", validFullPayload(), "127.0.0.3"), response);
  } finally {
    console.error = previousError;
  }
  assert.equal(response.statusCode, 503);
  assert.ok(["GEMINI_PAID_TIER_REQUIRED", "GEMINI_API_KEY_NOT_CONFIGURED"].includes(response.payload.code));
});
