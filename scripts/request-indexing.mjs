#!/usr/bin/env node
/**
 * Notify search engines about every URL in the live sitemap.
 *
 * 1. Google Indexing API (URL_UPDATED for each URL)        needs GOOGLE_SERVICE_ACCOUNT_JSON
 * 2. Google Search Console: (re)submit the sitemap          needs GOOGLE_SERVICE_ACCOUNT_JSON
 * 3. IndexNow (Bing, Yandex, Seznam, Naver...)              uses the public key file in /public
 *
 * The service account must be an Owner of the Search Console property.
 * Run: GOOGLE_SERVICE_ACCOUNT_JSON="$(cat key.json)" node scripts/request-indexing.mjs
 * Never commit the key; in GitHub Actions it comes from a repository secret.
 */
import crypto from "node:crypto";

const SITE = process.env.SITE_URL || "https://www.scalewithads.us";
const INDEXNOW_KEY = "0b676bd899bc8f389c8511965fa99287"; // public by design: served at /<key>.txt

const log = (...a) => console.log(...a);
let failures = 0;

async function googleToken(key, scope) {
  const b = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b({ alg: "RS256", typ: "JWT" })}.${b({ iss: key.client_email, scope, aud: key.token_uri, iat: now, exp: now + 3600 })}`;
  const jwt = `${unsigned}.${crypto.sign("RSA-SHA256", Buffer.from(unsigned), key.private_key).toString("base64url")}`;
  const res = await fetch(key.token_uri, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`Google token error: ${JSON.stringify(json)}`);
  return json.access_token;
}

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function google(urls) {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    log("Google: skipped (GOOGLE_SERVICE_ACCOUNT_JSON not set)");
    return;
  }
  const key = JSON.parse(raw);
  const wm = await googleToken(key, "https://www.googleapis.com/auth/webmasters");
  const idx = await googleToken(key, "https://www.googleapis.com/auth/indexing");

  const site = encodeURIComponent(`${SITE}/`);
  const sm = encodeURIComponent(`${SITE}/sitemap.xml`);
  const put = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/sitemaps/${sm}`, {
    method: "PUT",
    headers: { authorization: `Bearer ${wm}` },
  });
  log(`Search Console sitemap submit: ${put.status}${put.ok ? " OK" : ` ${await put.text()}`}`);
  if (!put.ok) failures++;

  let ok = 0;
  for (const url of urls) {
    const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: { authorization: `Bearer ${idx}`, "content-type": "application/json" },
      body: JSON.stringify({ url, type: "URL_UPDATED" }),
    });
    if (res.ok) ok++;
    else {
      failures++;
      log(`  Google Indexing API ${res.status} ${url}: ${(await res.json()).error?.message}`);
    }
  }
  log(`Google Indexing API: ${ok}/${urls.length} accepted`);
}

async function indexNow(urls) {
  const host = new URL(SITE).host;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`, urlList: urls }),
  });
  // 200 = received, 202 = accepted (key validation pending)
  log(`IndexNow: ${res.status} for ${urls.length} URLs`);
  if (![200, 202].includes(res.status)) {
    failures++;
    log(`  ${await res.text()}`);
  }
}

const urls = await sitemapUrls();
log(`Sitemap: ${urls.length} URLs from ${SITE}/sitemap.xml`);
for (const [name, step] of [["Google", google], ["IndexNow", indexNow]]) {
  try {
    await step(urls);
  } catch (err) {
    failures++;
    log(`${name}: failed (${err.cause?.message || err.message})`);
  }
}
if (failures) {
  log(`Finished with ${failures} failure(s).`);
  process.exit(1);
}
log("Done.");
