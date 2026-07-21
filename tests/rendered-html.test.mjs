import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
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
  assert.match(html, /明明很累/);
  assert.match(html, /肩頸還在緊繃/);
  assert.match(html, /找不到舒服位置/);
  assert.match(html, /枕頭高度不合/);
  assert.match(html, /思緒還停不下來/);
  assert.match(html, /仰睡為主/);
  assert.match(html, /海鷗式/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /草本忘憂/);
  assert.match(html, /林國偉/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("renders the transparent CBD series introduction page", async () => {
  const response = await render("/cbd-series");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /為夜晚/);
  assert.match(html, /草本機能表布/);
  assert.match(html, /微膠囊織物技術/);
  assert.match(html, /未說明 CBD 直接添加於枕芯/);
  assert.match(html, /耐洗次數與遞減數據/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /具有治療失眠功效|有效抗焦慮|可改善疾病/);
});
