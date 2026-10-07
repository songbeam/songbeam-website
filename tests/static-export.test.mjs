import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const standaloneHtml = new URL("../上品寢具網站.html", import.meta.url);

test("exports a deployable static homepage and required media", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /CBD 草本忘憂好眠寢具系列/);
  assert.match(html, /_next\/static\//);
  assert.doesNotMatch(html, /\/api\//);

  await Promise.all([
    access(new URL(".nojekyll", output)),
    access(new URL("favicon.svg", output)),
    access(new URL("og-morandi.png", output)),
    access(new URL("wu-ruo-quan-brand-film-01.mp4", output)),
    access(new URL("wu-ruo-quan-product-film-02.mp4", output)),
    access(new URL("wu-ruo-quan-life-film-03.mp4", output)),
    access(new URL("video-player/index.html", output)),
  ]);
});

test("creates a directly openable HTML file", async () => {
  const html = await readFile(standaloneHtml, "utf8");

  assert.match(html, /<base href="https:\/\/shangpin-cbd-comfort\.suchloe\.chatgpt\.site\/"\/>/);
  assert.match(html, /<style>[^<]+<\/style>/);
  assert.doesNotMatch(html, /<link rel="stylesheet"/);
  assert.doesNotMatch(html, /\b(?:src|href|poster)="\/(?!\/)/);
  assert.match(html, /<iframe src="https:\/\/shangpin-cbd-comfort\.suchloe\.chatgpt\.site\/video-player"/);
  assert.doesNotMatch(html, /<iframe src="https:\/\/www\.youtube\.com\/embed\//);
  assert.match(html, /CBD 草本忘憂好眠寢具系列/);
  assert.match(html, /wu-ruo-quan-brand-film-01\.mp4/);
});
