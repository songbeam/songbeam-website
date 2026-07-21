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

test("renders the Japanese sleep consultation experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /把一天的疲憊/);
  assert.match(html, /輕輕交給夜晚/);
  assert.match(html, /從貼合支撐到放鬆睡感/);
  assert.match(html, /shangpin-logo\.png/);
  assert.match(html, /睡眠相談/);
  assert.match(html, /睡姿診斷/);
  assert.match(html, /了解睡眠習慣/);
  assert.match(html, /仰睡為主/);
  assert.match(html, /海鷗式/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /草本忘憂/);
  assert.match(html, /林國偉/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
