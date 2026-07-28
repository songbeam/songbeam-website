import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  assert.match(html, /glory-logo\.jpg/);
  assert.doesNotMatch(html, /SLEEP CONCERNS|BODY BEGINS TO UNWIND/);
  assert.doesNotMatch(html, /有時候，|一顆枕頭，從支撐開始/);
  assert.doesNotMatch(html, /href="#series"|id="series"|id="concerns"/);
  assert.match(html, /HERBAL &amp; TACTILE DETAIL/);
  assert.match(html, /cbd-seagull-spine-support-pillow-bedroom\.png/);
  assert.match(html, /微膠囊機能織物/);
  assert.match(html, /融入表布/);
  assert.match(html, /實際洗滌仍以商品洗標為準/);
  assert.match(html, /CBD草本忘憂枕頭/);
  assert.match(html, /cbd-sleep-collection-pillow-card.png/);
  assert.match(html, /CBD隨身旅行組/);
  assert.match(html, /讓頭頸找到最舒服的位置/);
  assert.match(html, /乾淨，是舒適睡眠的開始/);
  assert.match(html, /無論走到哪裡，都睡得安心/);
  assert.doesNotMatch(html, /CBD 草本忘憂親水枕|隨身旅行頸枕／眼罩/);
  assert.doesNotMatch(html, /href="\/cbd-series"/);
  assert.match(html, /讓睡前，多一點放鬆儀式/);
  assert.match(html, /不只是柔軟，/);
  assert.match(html, /更懂得好好支撐/);
  assert.match(html, /慢慢貼合，/);
  assert.match(html, /也慢慢卸下疲憊/);
  assert.doesNotMatch(html, /只依品牌資料與後續可提出的檢驗說明，不延伸為療效/);
  assert.doesNotMatch(html, /product-press-closeup\.png/);
  assert.doesNotMatch(html, /lifestyle-reading\.png|lifestyle-morning\.png/);
  assert.match(html, /海鷗曲線/);
  assert.match(html, /cbd-seagull-pressure-relief-pillow-bedroom\.png/);
  assert.match(html, /GLORY 獨家專利 Tempwiser 親水棉/);
  assert.match(html, /海鷗曲線支撐/);
  assert.match(html, /可調高度設計/);
  assert.doesNotMatch(html, /SLEEP FEEL GUIDE|五段式定位|id="fit"/);
  assert.match(html, /親水記憶棉/);
  assert.match(html, /structure-title-nowrap/);
  assert.match(html, /structure-editorial/);
  assert.match(html, /structure-spec-panel/);
  assert.match(html, /cbd-hydrophilic-contour-pillow-bedroom\.png/);
  assert.doesNotMatch(html, /材質資訊，一目了然/);
  assert.doesNotMatch(html, /已確認的資訊清楚呈現；尺寸、產地或內套配置等未有正式文件的項目/);
  assert.match(html, /近 7 成/);
  assert.match(html, /全台近 400 萬人/);
  assert.match(html, /總睡眠、淺眠與深睡變化/);
  assert.match(html, /獨家比利時萃取/);
  assert.match(html, /天然抗菌/);
  assert.match(html, /除臭/);
  assert.doesNotMatch(html, /Patrick Lin, D\.C\.|MDPI|全台 500 萬人/);
  assert.match(html, /從睡眠數據/);
  assert.match(html, /safety-title-nowrap/);
  assert.match(html, /cbd-textile-title-nowrap/);
  assert.match(html, /cbd-down-pillow-bedroom\.png/);
  assert.doesNotMatch(html, /臨床睡眠觀察與表布科技，讓每一項舒適設計都有清楚脈絡/);
  assert.doesNotMatch(html, /FROM NIGHT TO MORNING|從躺下的那一刻|id="scenes"|href="#scenes"/);
  assert.match(html, /讓舒服/);
  assert.match(html, /陪伴更久/);
  assert.doesNotMatch(html, /順著材質照顧/);
  assert.match(html, /care-title-lines/);
  assert.match(html, /讓舒服<\/span><span>陪伴更久/);
  assert.match(html, /日常以除塵、局部清潔為主；枕芯與布套請分開處理/);
  assert.match(html, /實際洗滌仍以商品洗標為準/);
  assert.match(html, /防護布套/);
  assert.match(html, /CBD 外布套/);
  assert.match(html, /wash-instruction-lines/);
  assert.match(html, /浸泡時間請勿超過 30 分鐘/);
  assert.doesNotMatch(html, /常見問題|FREQUENTLY ASKED|id="faq"|href="#faq"|可以改善失眠嗎/);
  assert.match(html, /新聞報導/);
  assert.match(html, /id="news"/);
  assert.match(html, /href="#news"/);
  assert.match(html, /TOP U\.S\. MEDIA COVERAGE/);
  assert.match(html, /Yahoo! Finance/);
  assert.match(html, /CBS Lake Charles/);
  assert.match(html, /Coast to Coast Newspaper/);
  assert.match(html, /news-card/);
  assert.doesNotMatch(html, /品牌消息、專題採訪與媒體報導，將在這裡留下每一段值得閱讀的紀錄|最新報導，即將上線/);
  assert.doesNotMatch(html, /IN-STORE PILLOW FITTING/);
  assert.match(html, /store-intro-lines/);
  assert.match(html, /查看全台門市/);
  assert.doesNotMatch(html, /預約門市體驗/);
  assert.match(html, /product-detail-trigger/);
  assert.match(html, /<button class="shop-product-card"[^>]*aria-label="查看 CBD草本忘憂枕頭 商品選單"/);
  assert.doesNotMatch(html, /商品規格與購買資訊|href="#specs"/);
  assert.doesNotMatch(html, /以直覺的大圖、簡短睡感描述與必要資訊/);
  assert.doesNotMatch(html, /不一次塞入太多術語/);
  assert.match(html, /枕頭合不合適/);
  assert.match(html, /吳若權 老師/);
  assert.match(html, /林國偉 博士/);
  assert.match(html, /wu-ruo-quan\.jpg/);
  assert.match(html, /professional-doctors-lin-yang\.jpg/);
  assert.match(html, /林國偉 博士 × 楊韻丞 博士/);
  assert.match(html, /美國 Palmer 脊骨神經醫學博士 Patrick Lin, D\.C/);
  assert.match(html, /中醫藥學博士 楊韻丞/);
  assert.match(html, /理想的枕頭可填補因脊椎弧度產生的空隙/);
  assert.match(html, /結合纖維編織工法，經兩年多時間研發/);
  assert.match(html, /endorsement-title-nowrap/);
  assert.doesNotMatch(html, /從生活感受，到頭頸支撐的專業觀點/);
  assert.match(html, /href="#endorsements"/);
  assert.doesNotMatch(html, /舒服入睡|不必等到很累以後|id="buy"|href="#buy"|立即購買/);
  assert.match(html, /非藥品/);
  assert.doesNotMatch(html, /具有治療失眠功效|有效抗焦慮|醫療級|國際認證/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.ok(html.indexOf('id="safety"') < html.indexOf('id="products"'));
  assert.ok(html.indexOf('id="products"') < html.indexOf('id="news"'));
});

test("defines the official store directory dialog", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /const faqs|openFaq|href="#faq"|id="faq"|常見問題|FREQUENTLY ASKED/);
  assert.match(source, /storeModalOpen/);
  assert.match(source, /className="store-modal"/);
  assert.match(source, /const openStoreDirectory = \(\) =>/);
  assert.match(source, /onClick=\{openStoreDirectory\}/);
  assert.match(source, /aria-controls="store-directory-dialog"/);
  assert.match(source, /id="store-directory-dialog"/);
  assert.match(source, /共 11 間門市/);
  assert.match(source, /name: "南京館"/);
  assert.match(source, /name: "斗六館"/);
  assert.doesNotMatch(source, /songbeam\.com\.tw\/v2\/Shop\/StoreList\/38775|查看官方門市頁/);
  assert.doesNotMatch(source, /預約門市體驗/);
});

test("defines the two-step CBD product collection dialogs", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /const openProductCatalog = \(index: number\) =>/);
  assert.match(source, /<button className="shop-product-card"[^>]*onClick=\{\(\) => openProductCatalog\(index\)\}/);
  assert.match(source, /aria-controls="product-catalog-dialog"/);
  assert.match(source, /id="product-catalog-dialog"/);
  assert.match(source, /查看商品連結/);
  assert.match(source, /pillow-catalog-modal/);
  assert.match(source, /selectedSeriesItemIndex/);
  for (const name of [
    "CBD草本忘憂 天絲枕",
    "CBD草本忘憂 羽絨枕",
    "CBD草本忘憂 好眠雲朵枕",
    "CBD草本忘憂 好眠親水枕（海鷗枕／止鼾枕）",
    "CBD草本忘憂 海鷗減壓枕",
    "CBD草本忘憂 海鷗護脊枕",
    "CBD草本忘憂 好眠 長纖細棉 涼被",
    "CBD草本忘憂 好眠 長纖細棉 枕套",
    "CBD草本忘憂 好眠 長纖細棉 床包",
    "CBD草本忘憂 雙層平面保潔墊（保潔墊＋枕套）",
    "CBD草本忘憂 毛小孩安撫墊被",
    "CBD草本忘憂 信封式枕頭套",
    "CBD草本忘憂 好眠眼罩",
    "CBD草本忘憂 旅行好眠頸枕",
    "CBD草本忘憂 好眠旅行組",
  ]) assert.match(source, new RegExp(name));
  for (const detail of [
    "30% 天絲＋70% 聚酯纖維",
    "100% 純棉表布",
    "睡感偏軟",
    "獨家比利時萃取微膠囊技術",
    "天絲纖維能舒緩過敏感性的肌膚",
  ]) assert.match(source, new RegExp(detail));
  assert.match(source, /pillow-feature-details/);
  for (const detail of [
    "睡感軟硬適中，枕型飽滿，支撐性高",
    "長 75 cm × 寬 48 cm",
    "90% 天然羽毛＋10% 天然羽絨",
    "重量：1.2 kg",
    "羽毛絨可隨溫度變化自然收縮膨脹",
    "cbd-down-pillow-bedroom.png",
  ]) assert.match(source, new RegExp(detail));
  assert.match(source, /pillow-series-expanded/);
  assert.match(source, /pillow-series-title-nowrap/);
  assert.match(source, /className="product-modal pillow-series-detail pillow-series-expanded"/);
  assert.doesNotMatch(source, /selectedProductIndex === 0 \? "pillow-series-expanded"/);
  const styles = await readFile(new URL("../app/product-layout.css", import.meta.url), "utf8");
  assert.doesNotMatch(styles, /\.pillow-series-image-3\s*\{[^}]*object-fit:contain/);
  assert.doesNotMatch(styles, /\.pillow-catalog-card:nth-child\(4\)[^{]*\{[^}]*object-fit:contain/);
  assert.doesNotMatch(styles, /\.shop-product-card:first-child[^{]*\{[^}]*object-fit:contain/);
  for (const detail of [
    "親水棉粒填充，兼具支撐、可塑與蓬鬆包覆",
    "GLORY 獨家專利「Tempwiser 親水棉」",
    "正睡、側睡，都能完美支撐",
    "接觸空氣後會產生泛黃狀況",
    "cbd-sleep-cloud-pillow-bedroom.png",
  ]) assert.match(source, new RegExp(detail));
  for (const detail of [
    "獨家比利時萃取微膠囊技術",
    "枕芯採用 GLORY 獨家專利「Tempwiser 親水棉」",
    "特殊造型，正睡、側睡，都能完美支撐",
    "止鼾枕」為商品系列名稱",
    "cbd-hydrophilic-contour-pillow-bedroom.png",
  ]) assert.match(source, new RegExp(detail));
  for (const detail of [
    "特殊海鷗造型，正睡、側睡，都能完美支撐",
    "可依照不同身形添增高度，更加貼合保護頸椎",
    "cbd-seagull-pressure-relief-pillow-bedroom.png",
  ]) assert.match(source, new RegExp(detail));
  for (const detail of [
    "CBD草本忘憂 海鷗護脊枕",
    "護脊枕」為商品系列名稱",
    "cbd-seagull-spine-support-pillow-bedroom.png",
  ]) assert.match(source, new RegExp(detail));
});

test("defines direct original links for all U.S. media cards", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /selectedNewsIndex|news-modal-backdrop|<iframe|window\.open\(item\.url/);
  assert.match(source, /finance\.yahoo\.com/);
  assert.match(source, /pr\.cbslakecharles\.tv/);
  assert.match(source, /ccnewspaper\.com/);
  assert.match(source, /className="news-card-link"/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noreferrer"/);
});
