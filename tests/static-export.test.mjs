import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);

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
  ]);
});
