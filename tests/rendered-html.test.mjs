import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the presentation-informed CBD series site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /草本忘憂/);
  assert.match(html, /好眠親水枕/);
  assert.match(html, /微膠囊/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /海鷗式釋壓/);
  assert.match(html, /保潔墊組/);
  assert.match(html, /旅行頸枕/);
  assert.match(html, /林國偉/);
  assert.match(html, /非藥品/);
  assert.match(html, /完整研究設計/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
