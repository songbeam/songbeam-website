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

test("keeps all explicitly sized site text at 10pt or larger", async () => {
  const cssFiles = [
    "globals.css",
    "product-layout.css",
    "render-depth.css",
    "summer-night.css",
  ];
  const styles = (
    await Promise.all(
      cssFiles.map((file) =>
        readFile(new URL(`../app/${file}`, import.meta.url), "utf8"),
      ),
    )
  ).join("\n");
  const assertMinimum = (value, declaration) => {
    for (const [, amount, unit] of value.matchAll(/(\d+(?:\.\d+)?)(px|pt|rem)\b/g)) {
      const size = Number(amount);
      const isTooSmall =
        (unit === "px" && size < 13.32) ||
        (unit === "pt" && size < 10) ||
        (unit === "rem" && size < 0.833);
      assert.ok(!isTooSmall, `text below 10pt in ${declaration}`);
    }
  };

  for (const match of styles.matchAll(/font-size\s*:\s*([^;}]+)/g)) {
    assertMinimum(match[1], match[0]);
  }
  for (const match of styles.matchAll(/font\s*:\s*([^;}]+)/g)) {
    assertMinimum(match[1], match[0]);
  }
  assert.match(styles, /\.site-header\{[^}]*position:fixed[^}]*z-index:900/);
  assert.match(styles, /\.site-header \.glory-brand-logo\{width:104px;height:88px/);
  assert.match(styles, /main h1,main h2,main \.cbd-textile-title-nowrap,main \.ambassador-film-copy h3\{font-weight:700!important\}/);
  assert.match(styles, /\.seagull-combined-layout \.seagull-title\{[^}]*white-space:nowrap/);
  assert.match(styles, /\.hero \.hero-series\{[^}]*white-space:nowrap/);
  assert.match(styles, /\.collection-comfort-nowrap\{[^}]*white-space:nowrap/);
  assert.match(styles, /\.cbd-textile-copy \.cbd-textile-title-nowrap\{[^}]*white-space:nowrap!important/);
  assert.doesNotMatch(styles, /scaleX\(\.(?:5|62|78|88)\)/);
  assert.match(styles, /\.ambassador-film-copy\[data-film-number="02"\] blockquote span,[\s\S]*?white-space:normal!important;font-size:15px!important/);
});

test("renders the complete one-page CBD bedding product story", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  const pageSource = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(html, /讓夜晚/);
  assert.match(html, /慢慢鬆開/);
  assert.match(html, /從草本放鬆到貼合支撐/);
  assert.match(html, /glory-logo-transparent\.png/);
  assert.doesNotMatch(html, /SLEEP CONCERNS|BODY BEGINS TO UNWIND/);
  assert.doesNotMatch(html, /有時候，|一顆枕頭，從支撐開始/);
  assert.doesNotMatch(html, /href="#series"|id="series"|id="concerns"/);
  assert.match(html, /INTRODUCTION TO CANNABIDIOL/);
  assert.match(html, /CBD 漢麻二酚簡介/);
  assert.match(html, /CBD 漢麻二酚（大麻二酚）/);
  assert.match(html, /CBD 是 Cannabidiol 的縮寫/);
  assert.match(html, /CBD 本身不會產生 THC 所帶來的精神活性與陶醉感/);
  assert.doesNotMatch(html, /HERBAL &amp; TACTILE DETAIL/);
  assert.match(html, /cbd-intro-title-nowrap/);
  assert.match(html, /CBD 漢麻二酚（大麻二酚）是什麼？/);
  assert.match(html, /cbd-intro-showcase/);
  assert.match(html, /cbd-intro-lower-grid/);
  assert.match(html, /cbd-video-block/);
  assert.match(html, /cbd-overview-block/);
  assert.match(html, /cbd-expert-block/);
  assert.match(html, /cbd-feature-panel/);
  assert.match(html, /cbd-doctor-card/);
  assert.match(html, /cbd-video-frame/);
  assert.match(html, /youtube\.com\/embed\/BmpU3CbUALE\?rel=0&amp;playsinline=1/);
  assert.doesNotMatch(html, /origin=https%3A%2F%2Fshangpin-cbd-comfort\.suchloe\.chatgpt\.site/);
  assert.match(html, /referrerPolicy="strict-origin-when-cross-origin"/);
  assert.doesNotMatch(html, /youtube-playback-fallback|youtube\.com\/watch\?v=BmpU3CbUALE/);
  assert.match(html, /CBD 漢麻二酚介紹影片/);
  assert.doesNotMatch(html, /cbd-seagull-spine-support-pillow-bedroom\.png|CBD \/ CANNABIDIOL \/ TEXTILE/);
  assert.match(html, /seagull-combined-layout/);
  assert.match(html, /seagull-doctor-card/);
  assert.match(html, /微膠囊技術融入纖維/);
  assert.match(html, /草本機能表布/);
  assert.match(html, /實際洗滌仍以商品洗標為準/);
  assert.match(html, /CBD 草本忘憂好眠寢具枕頭/);
  assert.match(html, /GLORY 葛洛麗品牌・CBD 草本忘憂好眠寢具系列/);
  assert.match(html, /cbd-sleep-collection-pillow-card.png/);
  assert.match(html, /CBD 草本忘憂好眠寢具保潔墊組/);
  assert.match(html, /CBD 草本忘憂好眠寢具隨身旅行組/);
  assert.match(html, /讓頭頸找到最舒服的位置/);
  assert.match(html, /collection-comfort-nowrap/);
  assert.match(html, /乾淨，是舒適睡眠的開始/);
  assert.match(html, /無論走到哪裡，都睡得安心/);
  assert.doesNotMatch(html, /CBD 草本忘憂好眠寢具親水枕|隨身旅行頸枕／眼罩/);
  assert.doesNotMatch(html, /href="\/cbd-series"/);
  assert.match(html, /來自大麻植物的/);
  assert.match(html, /CBD 與 THC/);
  assert.match(html, /從植物成分概念/);
  assert.doesNotMatch(html, /只依品牌資料與後續可提出的檢驗說明，不延伸為療效/);
  assert.doesNotMatch(html, /product-press-closeup\.png/);
  assert.doesNotMatch(html, /lifestyle-reading\.png|lifestyle-morning\.png/);
  assert.match(html, /海鷗曲線/);
  assert.match(html, /海鷗曲線，讓肩頸自然找到舒服的位置。/);
  assert.match(html, /cbd-seagull-pressure-relief-pillow-bedroom\.png/);
  assert.match(html, /GLORY 獨家專利 Tempwiser 親水棉/);
  assert.match(html, /海鷗曲線支撐/);
  assert.match(html, /可調高度設計/);
  assert.doesNotMatch(html, /SLEEP FEEL GUIDE|五段式定位|id="fit"/);
  assert.match(html, /Tempwiser 親水棉枕芯/);
  assert.doesNotMatch(html, /親水記憶棉/);
  assert.match(html, /structure-title-nowrap/);
  assert.match(html, /structure-editorial/);
  assert.match(html, /structure-spec-panel/);
  assert.match(html, /cbd-hydrophilic-contour-pillow-bedroom\.png/);
  assert.doesNotMatch(html, /材質資訊，一目了然/);
  assert.doesNotMatch(html, /已確認的資訊清楚呈現；尺寸、產地或內套配置等未有正式文件的項目/);
  assert.match(html, /近 7 成/);
  assert.match(html, /全台近 500 萬人/);
  assert.match(html, /總睡眠、淺眠與深睡變化/);
  assert.match(html, /獨家比利時萃取/);
  assert.match(html, /天然抗菌/);
  assert.match(html, /除臭/);
  assert.doesNotMatch(html, /Patrick Lin, D\.C\.|全台近 400 萬人/);
  assert.match(html, /cbd-clinical-certification-banner\.png/);
  assert.match(html, /safety-proof-mobile/);
  assert.match(html, /2025 MDPI 國際期刊認證/);
  assert.match(html, /cbd-textile-benefits/);
  assert.doesNotMatch(html, /class="safety-feature-grid"/);
  assert.match(html, /從睡眠數據/);
  assert.match(html, /safety-title-nowrap/);
  assert.match(html, /cbd-textile-title-nowrap/);
  assert.match(html, /textile-cycle-visual/);
  assert.match(html, /CBD 萃取/);
  assert.match(html, /微膠囊化/);
  assert.match(html, /編織進纖維/);
  assert.match(html, /cbd-textile-cycle\.png/);
  assert.doesNotMatch(html, /CBD HEMP-DERIVED TEXTILE/);
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
  assert.match(html, /collection-eyebrow-nowrap">CBD 草本忘憂好眠寢具/);
  assert.match(html, /shop-product-title"><span>CBD 草本忘憂好眠寢具<\/span><span>枕頭/);
  assert.match(html, /shop-product-title"><span>CBD 草本忘憂好眠寢具<\/span><span>保潔墊組/);
  assert.match(html, /shop-product-title"><span>CBD 草本忘憂好眠寢具<\/span><span>隨身旅行組/);
  assert.match(html, /<button class="shop-product-card"[^>]*aria-label="查看 CBD 草本忘憂好眠寢具枕頭 商品選單"/);
  assert.doesNotMatch(html, /商品規格與購買資訊|href="#specs"/);
  assert.doesNotMatch(html, /以直覺的大圖、簡短睡感描述與必要資訊/);
  assert.doesNotMatch(html, /不一次塞入太多術語/);
  assert.match(html, /枕頭合不合適/);
  assert.match(html, /吳若權 老師/);
  assert.match(html, /ambassador-title-lines/);
  assert.match(html, /ambassador-profile-bio/);
  assert.match(html, /長期透過廣播、演講、課程與個人諮詢/);
  assert.match(html, /ambassador-film-copy-body/);
  assert.match(html, /品牌代言三部曲/);
  assert.match(pageSource, /品牌代言三部曲・\{selectedAmbassadorFilm\.chapter\}/);
  assert.match(html, /ambassador-film-chapter-label/);
  assert.match(html, /品牌代言三部曲影片選擇/);
  assert.match(html, /品牌三部曲/);
  assert.match(pageSource, /品牌三部曲・\{film\.chapter\}/);
  assert.match(html, /GLORY 葛洛麗品牌<\/span><span>CBD 草本忘憂好眠寢具代言人/);
  assert.match(html, /wu-ruo-quan\.jpg/);
  assert.match(html, /吳若權・品牌代言三部曲/);
  assert.match(html, /wu-ruo-quan-brand-film-01\.mp4/);
  assert.match(pageSource, /wu-ruo-quan-product-film-02\.mp4/);
  assert.match(pageSource, /wu-ruo-quan-life-film-03\.mp4/);
  assert.match(html, /吳若權品牌代言品牌篇影片/);
  assert.match(html, /品質很重要，沒有錯/);
  assert.match(html, /若權老師和上品的緣分，是從一場廣播專訪開始的/);
  assert.match(html, /而他拿回家的第一顆枕頭，是給媽媽的/);
  assert.match(pageSource, /五星級飯店那顆很貴的枕頭/);
  assert.match(pageSource, /微膠囊技術帶來的親膚感/);
  assert.match(pageSource, /ambassador-film-highlights/);
  assert.match(pageSource, /data-film-number=\{selectedAmbassadorFilm\.number\}/);
  assert.match(pageSource, /<blockquote><span>\{selectedAmbassadorFilm\.closing\}<\/span><\/blockquote>/);
  assert.match(pageSource, /休息不是可惜，它是可貴/);
  assert.match(pageSource, /請你也把你的愛留給你自己/);
  assert.doesNotMatch(pageSource, /三支影片，三段關於品牌、睡眠與陪伴的故事/);
  assert.ok(pageSource.indexOf('className="ambassador-film-tabs"') < pageSource.indexOf('className="ambassador-film-layout"'));
  assert.doesNotMatch(html, /WHY GLORY|學會放鬆，<br\/>是送給自己最溫柔的禮物/);
  assert.doesNotMatch(html, /PROFESSIONAL RECOMMENDATION|professional-card/);
  assert.match(html, /doctor-story-card yang-story/);
  assert.match(html, /中醫藥學博士/);
  assert.match(html, /楊顓丞 博士/);
  assert.match(html, /睡眠，是每天生活中不可或缺的一部分/);
  assert.match(html, /讓專業研究不只存在於實驗室/);
  assert.match(html, /doctor-story-card lin-story/);
  assert.match(html, /美國脊骨神經醫學博士/);
  assert.match(html, /林國偉 博士/);
  assert.match(html, /一顆真正適合的枕頭，不只是柔軟舒服/);
  assert.match(html, /找到適合自己的高度，讓每一次躺下/);
  assert.doesNotMatch(html, /從草本成分研究到纖維應用，以專業觀點說明/);
  assert.doesNotMatch(html, /海鷗曲線與可調高度的設計，回應不同睡姿與身形所需要的頭頸承托/);
  assert.doesNotMatch(html, /本頁代言與推薦資訊依品牌提供資料呈現/);
  assert.match(html, /endorsement-title-nowrap/);
  assert.doesNotMatch(html, /從生活感受，到頭頸支撐的專業觀點/);
  assert.match(html, /href="#endorsements"/);
  assert.match(html, />品牌代言</);
  assert.match(html, />CBD 漢麻二酚簡介</);
  assert.doesNotMatch(html, /舒服入睡|不必等到很累以後|id="buy"|href="#buy"|立即購買/);
  assert.doesNotMatch(html, /本產品為一般寢具用品，非藥品或醫療器材；實際使用感受可能因人而異/);
  assert.doesNotMatch(html, /具有治療失眠功效|有效抗焦慮|醫療級|國際認證/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
  assert.match(pageSource, /<h2 className="seagull-title"><span>海鷗曲線，讓肩頸自然找到舒服的位置。<\/span><\/h2>/);
  assert.ok(html.indexOf('id="safety"') < html.indexOf('id="products"'));
  assert.ok(html.indexOf('id="products"') < html.indexOf('id="technology"'));
});

test("uses the requested navigation architecture without duplicating section anchors", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const nav = source.match(/<nav className=\{menuOpen \? "nav open" : "nav"\}[\s\S]*?<\/nav>/)?.[0] ?? "";
  const expectedNav = [
    ['#features', '認識 CBD'],
    ['#safety', '睡眠研究'],
    ['#products', '系列商品'],
    ['#technology', '好眠科技'],
    ['#endorsements', '品牌代言'],
    ['#testimonials', '使用者故事'],
    ['#news', '媒體報導'],
    ['#stores', '門市體驗'],
  ];
  assert.equal((nav.match(/<a href=/g) || []).length, 8);
  let previousNavIndex = -1;
  for (const [href, label] of expectedNav) {
    const item = `<a href="${href}" onClick={closeMenu}>${label}</a>`;
    const index = nav.indexOf(item);
    assert.ok(index > previousNavIndex, `${label} should appear in the requested navigation order`);
    previousNavIndex = index;
  }

  const orderedAnchors = ["top", "features", "safety", "products", "technology", "structure", "pillow", "endorsements", "testimonials", "news", "care", "stores"];
  let previousSectionIndex = -1;
  for (const id of orderedAnchors) {
    const marker = `id="${id}"`;
    assert.equal((source.match(new RegExp(marker, "g")) || []).length, 1, `${id} must remain unique`);
    const index = source.indexOf(marker);
    assert.ok(index > previousSectionIndex, `${id} should appear in the requested page order`);
    previousSectionIndex = index;
  }

  const orderedSectionLabels = [
    ['01', 'INTRODUCTION TO CANNABIDIOL'],
    ['02', 'CLINICAL SLEEP RESEARCH'],
    ['03', 'CBD SLEEP COLLECTION'],
    ['04', 'SLEEP TECHNOLOGY'],
    ['04', 'MATERIAL &amp; STRUCTURE'],
    ['04', 'SEAGULL CONTOUR DESIGN'],
    ['05', 'BRAND AMBASSADOR'],
    ['06', 'REAL SLEEP STORIES'],
    ['07', 'PRESS &amp; NEWS'],
    ['08', 'CARE GUIDE'],
    ['08', 'IN-STORE EXPERIENCE'],
  ];
  let previousLabelIndex = -1;
  for (const [number, label] of orderedSectionLabels) {
    const marker = `<div className="section-label"><span>${number}</span><p>${label}</p></div>`;
    const index = source.indexOf(marker);
    assert.ok(index > previousLabelIndex, `${label} should use the current page sequence number`);
    previousLabelIndex = index;
  }
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
  assert.match(source, /共 \{storeLocationCount\} 處門市、專櫃與經銷據點/);
  assert.match(source, /const storeLocationCount = storeGroups\.reduce/);
  assert.match(source, /const storeGroups =/);
  for (const region of ["北部地區", "中部地區", "南部地區", "東部地區", "醫療院所"]) assert.match(source, new RegExp(region));
  assert.match(source, /name: "南京館"/);
  assert.match(source, /name: "斗六館"/);
  assert.match(source, /displayName: "上品寢具 CBD 專櫃【台中榮總】"/);
  assert.match(source, /台中市西屯區福聯里台灣大道四段1650號（門診後棟2樓領藥區前商場）/);
  assert.match(source, /displayName: "三總醫院-極織房專櫃"/);
  assert.match(source, /台北市內湖區成功路二段325號B1商場/);
  assert.match(source, /displayName: "亞東醫院-極織房專櫃"/);
  assert.match(source, /新北市板橋區南雅南路二段21號B1商場/);
  assert.match(source, /\{ name: "醫療院所", en: "MEDICAL INSTITUTIONS", stores: medicalStores \}/);
  const dealerNames = ["律倫企業有限公司", "康裕網路行銷有限公司(茉莉床單)", "璽品屋國際有限公司", "貝里恩有限公司", "家禾傢俱行(睡眠工藝)", "東城精品寢飾生活館", "愛豐健康股份有限公司", "名坊生活館(上品田中館)", "美閣典藏家具行", "雅茲寢飾生活館", "御鋒木器行(御鋒家具)", "薇閣寢飾行"];
  for (const dealer of dealerNames) assert.ok(source.includes(dealer), `${dealer} should be listed as a dealer`);
  assert.equal((source.match(/tags: \["經銷商"\]/g) || []).length, 16);
  assert.doesNotMatch(source, /聯絡方式|02-25023383|0968-139507/);
  assert.doesNotMatch(source, /門市資料依上品寢具官方網站目前刊載內容整理/);
  assert.doesNotMatch(source, /songbeam\.com\.tw\/v2\/Shop\/StoreList\/38775|查看官方門市頁/);
  assert.doesNotMatch(source, /預約門市體驗/);
});

test("defines testimonials and official LINE partnership contact", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /id="testimonials"/);
  assert.match(source, />使用者見證</);
  assert.match(source, /testimonial-title-nowrap/);
  assert.match(source, /都從找到適合自己開始。/);
  assert.match(source, /林小姐/);
  assert.match(source, /王先生/);
  assert.match(source, /陳小姐/);
  assert.match(source, /張小姐/);
  assert.match(source, /李先生/);
  assert.match(source, /家人的睡眠，也是照護的一部分/);
  assert.match(source, /一個月睡好幾張床，更知道熟悉有多重要/);
  assert.equal((source.match(/gender: "female"/g) || []).length, 3);
  assert.equal((source.match(/gender: "male"/g) || []).length, 2);
  assert.match(source, /testimonial-avatar-\$\{selectedTestimonial\.gender\}\.png/);
  assert.match(source, /testimonialCrowd/);
  assert.match(source, /testimonial-crowd/);
  assert.match(source, /testimonial-dialogue-crowd\.png/);
  assert.match(source, /testimonial-bubble/);
  assert.match(source, /selectedTestimonialIndex/);
  assert.match(source, /id="testimonial-story-dialog"/);
  assert.doesNotMatch(source, /將游標移向深色人物/);
  assert.equal((source.match(/testimonial:\s*[0-4]/g) || []).length, 5);
  assert.doesNotMatch(source, /此頁保留給經使用者授權的門市試躺與日常使用感受/);
  assert.doesNotMatch(source, /正式見證內容將於取得使用者授權並完成品牌確認後公開/);
  assert.ok(source.indexOf('id="endorsements"') < source.indexOf('id="testimonials"'));
  assert.ok(source.indexOf('id="testimonials"') < source.indexOf('id="news"'));
  assert.ok(source.indexOf('id="news"') < source.indexOf('id="care"'));
  assert.ok(source.indexOf('id="care"') < source.indexOf('id="stores"'));
  assert.match(source, /partnerModalOpen/);
  assert.match(source, /aria-controls="partner-contact-dialog"/);
  assert.match(source, /id="partner-contact-dialog"/);
  assert.match(source, /專人接洽/);
  assert.match(source, /line-official-qr\.png/);
  assert.match(source, /https:\/\/line\.me\/R\/ti\/p\/@0800-800660/);
});

test("uses the new testimonial art, compact video, and mobile overflow guards", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const styles = await readFile(new URL("../app/product-layout.css", import.meta.url), "utf8");
  assert.doesNotMatch(source, /本產品為一般寢具用品，非藥品或醫療器材，不具診斷、治療、預防疾病或改善失眠之功效/);
  assert.match(source, /© 2026 GLORY BEDDING/);
  assert.match(styles, /\.testimonial-crowd\{/);
  assert.match(styles, /\.testimonial-bubble:hover/);
  assert.match(styles, /\.testimonial-bubble\{[^}]*overflow:hidden/);
  assert.match(styles, /\.testimonial-bubble span\{[^}]*-webkit-line-clamp:3/);
  assert.match(styles, /\.testimonial-bubble small\{[^}]*text-overflow:ellipsis/);
  assert.match(styles, /\.testimonial-modal\{/);
  assert.match(styles, /\.testimonial-avatar-female/);
  assert.match(styles, /\.testimonial-avatar-male/);
  assert.doesNotMatch(styles, /testimonial-crowd-morandi\.png/);
  assert.match(styles, /\.cbd-video-block\{width:min\(100%,920px\)/);
  assert.match(styles, /html,body,main\{width:100%;max-width:100%;overflow-x:hidden\}/);
  assert.match(styles, /\.product-modal,\.pillow-catalog-modal,\.store-modal,\.partner-modal\{width:100%;max-width:100vw\}/);
});

test("defines the two-step CBD product collection dialogs", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(source, /const openProductCatalog = \(index: number\) =>/);
  assert.match(source, /<button className="shop-product-card"[^>]*onClick=\{\(\) => openProductCatalog\(index\)\}/);
  assert.match(source, /aria-controls="product-catalog-dialog"/);
  assert.match(source, /id="product-catalog-dialog"/);
  assert.match(source, /查看商品連結/);
  assert.match(source, /pillow-catalog-modal/);
  assert.match(source, /titleClass: "pillow-catalog-title-nowrap"/);
  assert.match(source, /tempwiser-catalog-title/);
  assert.match(source, /tempwiser-title-nowrap/);
  assert.match(source, /selectedSeriesItemIndex/);
  assert.match(source, /cbd-tencel-pillow-2026\.png/);
  assert.match(source, /cbd-down-pillow-2026-v2\.png/);
  assert.match(source, /cbd-sleep-cloud-pillow-2026\.png/);
  assert.match(source, /cbd-double-layer-protector-set-2026\.png/);
  assert.match(source, /cbd-pet-comfort-mat-quilt-2026\.png/);
  assert.match(source, /pet-comfort-series-image/);
  for (const name of [
    "CBD 草本忘憂好眠寢具 天絲枕",
    "CBD 草本忘憂好眠寢具 羽絨枕",
    "CBD 草本忘憂好眠寢具 好眠雲朵枕",
    "CBD 草本忘憂好眠寢具 Tempwiser 親水棉 海鷗枕",
    "CBD 草本忘憂好眠寢具 Tempwiser 親水棉 止鼾枕",
    "CBD 草本忘憂好眠寢具 海鷗減壓枕",
    "CBD 草本忘憂好眠寢具 海鷗護脊枕",
    "CBD 草本忘憂好眠寢具 好眠 長纖細棉 涼被",
    "CBD 草本忘憂好眠寢具 好眠 長纖細棉 枕套",
    "CBD 草本忘憂好眠寢具 好眠 長纖細棉 床包",
    "CBD 草本忘憂好眠寢具 雙層平面保潔墊（保潔墊＋枕套）",
    "CBD 草本忘憂好眠寢具 毛小孩安撫墊被",
    "CBD 草本忘憂好眠寢具 旅行隨身枕頭套",
    "CBD 草本忘憂好眠寢具 好眠眼罩",
    "CBD 草本忘憂好眠寢具 旅行好眠頸枕",
    "CBD 草本忘憂好眠寢具 好眠旅行組",
  ]) assert.match(source, new RegExp(name));
  assert.doesNotMatch(source, /tel:|致電|phone:/);
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
    "cbd-down-pillow-2026-v2.png",
  ]) assert.match(source, new RegExp(detail));
  assert.match(source, /pillow-series-expanded/);
  assert.match(source, /pillow-series-title-nowrap/);
  assert.match(source, /cbd-tempwiser-seagull-pillow-2026\.png/);
  assert.match(source, /cbd-tempwiser-anti-snore-pillow-2026\.png/);
  assert.match(source, /cbd-seagull-pressure-relief-pillow-2026\.png/);
  assert.match(source, /cbd-seagull-spine-support-pillow-2026-v2\.png/);
  assert.match(source, /cbd-travel-pillowcase-2026\.png/);
  assert.match(source, /cbd-sleep-eye-mask-2026\.png/);
  assert.match(source, /cbd-travel-neck-pillow-2026\.png/);
  assert.match(source, /cbd-travel-sleep-set-2026\.png/);
  assert.match(source, /en: "TRAVEL PILLOWCASE"/);
  assert.doesNotMatch(source, /down-pillow-(?:series-image|backdrop|visual)/);
  assert.match(source, /className="product-modal pillow-series-detail pillow-series-expanded"/);
  assert.doesNotMatch(source, /selectedProductIndex === 0 \? "pillow-series-expanded"/);
  const styles = await readFile(new URL("../app/product-layout.css", import.meta.url), "utf8");
  assert.doesNotMatch(styles, /\.pillow-series-image-3\s*\{[^}]*object-fit:contain/);
  assert.doesNotMatch(styles, /\.down-pillow-/);
  assert.match(styles, /\.product-modal-image\{[^}]*object-fit:cover/);
  assert.doesNotMatch(styles, /\.pillow-catalog-card:nth-child\(4\)[^{]*\{[^}]*object-fit:contain/);
  assert.doesNotMatch(styles, /\.shop-product-card:first-child[^{]*\{[^}]*object-fit:contain/);
  assert.match(styles, /\.shop-product-info strong\{[^}]*font-size:10pt/);
  assert.match(styles, /\.shop-product-info p\{[^}]*font-size:10pt/);
  assert.match(styles, /\.shop-product-info \.product-detail-trigger\{[^}]*font:10pt/);
  for (const detail of [
    "Tempwiser 親水棉粒填充，兼具支撐、可塑與蓬鬆包覆",
    "GLORY 獨家專利「Tempwiser 親水棉」",
    "正睡、側睡，都能完美支撐",
    "接觸空氣後會產生泛黃狀況",
    "cbd-sleep-cloud-pillow-2026.png",
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
    "CBD 草本忘憂好眠寢具 海鷗護脊枕",
    "護脊枕」為商品系列名稱",
    "cbd-seagull-spine-support-pillow-2026-v2.png",
  ]) assert.match(source, new RegExp(detail));
});

test("defines direct original links for all U.S. media cards", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(source, /selectedNewsIndex|news-modal-backdrop|window\.open\(item\.url/);
  assert.match(source, /finance\.yahoo\.com/);
  assert.match(source, /pr\.cbslakecharles\.tv/);
  assert.match(source, /ccnewspaper\.com/);
  assert.match(source, /className="news-card-link"/);
  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noreferrer"/);
});
