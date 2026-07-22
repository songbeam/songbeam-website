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
  assert.match(html, /讓夜晚/);
  assert.match(html, /慢慢鬆開/);
  assert.match(html, /從草本放鬆到貼合支撐/);
  assert.match(html, /shangpin-logo\.png/);
  assert.doesNotMatch(html, /SLEEP CONCERNS|BODY BEGINS TO UNWIND/);
  assert.doesNotMatch(html, /有時候，|一顆枕頭，從支撐開始/);
  assert.doesNotMatch(html, /href="#series"|id="series"|id="concerns"/);
  assert.match(html, /HERBAL &amp; TACTILE DETAIL/);
  assert.match(html, /微膠囊機能織物/);
  assert.match(html, /應用於表布/);
  assert.match(html, /不自行承諾機能耐洗次數/);
  assert.doesNotMatch(html, /href="\/cbd-series"/);
  assert.match(html, /讓睡前，多一點放鬆儀式/);
  assert.match(html, /不只是柔軟，/);
  assert.match(html, /更懂得好好支撐/);
  assert.match(html, /慢慢貼合，/);
  assert.match(html, /也慢慢卸下疲憊/);
  assert.doesNotMatch(html, /只依品牌資料與後續可提出的檢驗說明，不延伸為療效/);
  assert.match(html, /lifestyle-reading\.png/);
  assert.match(html, /product-press-closeup\.png/);
  assert.match(html, /lifestyle-morning\.png/);
  assert.match(html, /海鷗曲線/);
  assert.match(html, /GLORY 獨家專利 Tempwiser 親水棉/);
  assert.match(html, /海鷗曲線支撐/);
  assert.match(html, /可調高度設計/);
  assert.match(html, /五段式定位/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /THC 檢驗結果/);
  assert.match(html, /不宣稱「不含 THC」/);
  assert.match(html, /從躺下的那一刻/);
  assert.match(html, /好好使用/);
  assert.match(html, /可以改善失眠嗎/);
  assert.match(html, /product-detail-trigger/);
  assert.doesNotMatch(html, /商品規格與購買資訊|href="#specs"/);
  assert.doesNotMatch(html, /以直覺的大圖、簡短睡感描述與必要資訊/);
  assert.doesNotMatch(html, /不一次塞入太多術語/);
  assert.match(html, /枕頭合不合適/);
  assert.match(html, /舒服入睡/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /具有治療失眠功效|有效抗焦慮|醫療級|國際認證/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
