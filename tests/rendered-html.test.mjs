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

test("renders the complete one-page CBD bedding product story", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /把一天的疲憊/);
  assert.match(html, /輕輕交給夜晚/);
  assert.match(html, /從貼合支撐到放鬆睡感/);
  assert.match(html, /shangpin-logo\.png/);
  assert.match(html, /有時候，不是真的不累/);
  assert.match(html, /肩頸仍然緊繃/);
  assert.match(html, /找不到舒服位置/);
  assert.match(html, /枕頭高度不合/);
  assert.match(html, /思緒還停不下來/);
  assert.match(html, /一顆枕頭，從支撐開始/);
  assert.match(html, /草本機能表布/);
  assert.match(html, /微膠囊機能織物/);
  assert.match(html, /應用於表布/);
  assert.match(html, /不自行承諾機能耐洗次數/);
  assert.doesNotMatch(html, /href="\/cbd-series"/);
  assert.match(html, /讓睡前，多一點放鬆儀式/);
  assert.match(html, /不只是柔軟，更懂得好好支撐/);
  assert.match(html, /慢慢貼合，也慢慢卸下疲憊/);
  assert.match(html, /lifestyle-reading\.png/);
  assert.match(html, /product-press-closeup\.png/);
  assert.match(html, /lifestyle-morning\.png/);
  assert.match(html, /海鷗曲線/);
  assert.match(html, /仰睡｜中央承托/);
  assert.match(html, /五段式定位/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /THC 檢驗結果/);
  assert.match(html, /不宣稱「不含 THC」/);
  assert.match(html, /從躺下的那一刻/);
  assert.match(html, /好好使用/);
  assert.match(html, /可以改善失眠嗎/);
  assert.match(html, /商品規格與購買資訊/);
  assert.match(html, /枕頭合不合適/);
  assert.match(html, /舒服入睡/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /具有治療失眠功效|有效抗焦慮|醫療級|國際認證/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
