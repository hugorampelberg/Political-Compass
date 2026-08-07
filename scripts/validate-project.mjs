import assert from "node:assert/strict";
import fs from "node:fs";

const root = new URL("../", import.meta.url);
const read = (path) => fs.readFileSync(new URL(path, root), "utf8");
const index = read("index.html");
const privacy = read("confidentialite.html");
const consent = read("assets/consent.js");
const vercel = JSON.parse(read("vercel.json"));

assert.match(index, /<title>Compas politique français : test gratuit en 80 questions<\/title>/);
assert.match(index, /property="og:image" content="https:\/\/www\.frenchpoliticalcompass\.com\/assets\/og-image\.png"/);
assert.match(index, /src="\/assets\/consent\.js"/);
assert.doesNotMatch(index, /googletagmanager\.com\/gtm\.js/);
assert.doesNotMatch(index, /\/analytics\.js/);
assert.match(privacy, /article 9, paragraphe 2, a\)/i);
assert.match(privacy, /Google AdSense/i);
assert.match(consent, /analytics_storage: "denied"/);
assert.match(consent, /data-consent="refuse"/);
assert.ok(fs.existsSync(new URL("assets/og-image.png", root)));
assert.ok(fs.existsSync(new URL("robots.txt", root)));
assert.ok(fs.existsSync(new URL("sitemap.xml", root)));
assert.equal(vercel.redirects[0].source, "/confidentalite.html");
assert.match(vercel.headers[0].headers.find((header) => header.key === "Content-Security-Policy").value, /googletagmanager\.com/);

console.log("Validation statique réussie.");
