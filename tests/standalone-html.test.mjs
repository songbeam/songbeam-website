import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const standaloneHtml = new URL("../上品寢具網站.html", import.meta.url);

test("creates the optional directly openable HTML wrapper", async () => {
  const html = await readFile(standaloneHtml, "utf8");

  assert.match(html, /<iframe\s+src="https:\/\/shangpin-cbd-comfort\.suchloe\.chatgpt\.site\/"/);
  assert.match(html, /allow="autoplay; encrypted-media; picture-in-picture; fullscreen"/);
  assert.match(html, /allowfullscreen/);
  assert.doesNotMatch(html, /youtube-playback-fallback/);
  assert.match(html, /CBD 草本忘憂好眠寢具系列/);
});
