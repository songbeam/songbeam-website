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

test("renders the complete CBD series landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /上品寢具/);
  assert.match(html, /把夜晚/);
  assert.match(html, /CBD 草本忘憂系列/);
  assert.match(html, /系列概念/);
  assert.match(html, /產品特色/);
  assert.match(html, /枕型設計/);
  assert.match(html, /常見問題/);
  assert.match(html, /門市體驗/);
  assert.match(html, /立即購買/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
