"use client";

import { useState } from "react";

const concerns = [
  ["01", "肩頸仍然緊繃", "工作一整天，即使躺下，肩膀與頸部仍像沒有真正卸下力氣。", "shoulder-mark"],
  ["02", "找不到舒服位置", "翻來覆去調整睡姿，卻始終找不到能讓身體安定下來的位置。", "turn-mark"],
  ["03", "枕頭高度不合", "枕頭過高或過低，起床後反而覺得頭頸卡住、身體不夠舒展。", "height-mark"],
  ["04", "思緒還停不下來", "身體已經休息，腦中卻仍反覆整理白天的訊息，很難進入夜晚節奏。", "mind-mark"],
];

const features = [
  ["01", "HERBAL RITUAL", "讓睡前，多一點放鬆儀式。", "草本概念透過微膠囊機能織物融入表布；只依品牌資料與後續可提出的檢驗說明，不延伸為療效。"],
  ["02", "ERGONOMIC SUPPORT", "不只是柔軟，更懂得好好支撐。", "海鷗式輪廓以中央凹槽、頸部曲線與兩側枕區，回應仰睡、側睡及翻身時的不同高度。"],
  ["03", "SLOW REBOUND", "慢慢貼合，也慢慢卸下疲憊。", "親水記憶棉在受壓後逐步貼合頭頸，以包覆、回彈與水氣調節共同建立舒適睡感。"],
];

const fitItems = ["喜歡有包覆感的枕頭", "希望頭頸獲得穩定支撐", "習慣仰睡與側睡交替", "在意睡眠環境與放鬆儀式", "不喜歡過軟、容易塌陷的枕頭", "想親自體驗不同枕頭高度與睡感"];

const sleepScales = [
  ["柔軟度", 3, "適中"], ["支撐度", 4, "偏高"], ["包覆感", 4, "明顯"], ["回彈速度", 2, "慢回彈"], ["建議睡姿", 4, "仰睡・側睡"],
] as const;

const collectionProducts = [
  {
    name: "CBD 草本忘憂親水枕",
    en: "HYDROPHILIC PILLOW",
    image: "/product-pillow-angle.jpg",
    statement: "貼合頭頸，也讓睡感保持輕盈。",
    detail: "海鷗式分區曲線搭配親水記憶棉，回應仰睡、側睡與翻身時的承托需求。",
    href: "#pillow",
  },
  {
    name: "CBD 寢具保潔墊組",
    en: "BEDDING PROTECTOR SET",
    image: "/product-protector.jpg",
    statement: "把日常髒污留在床墊與枕頭之外。",
    detail: "床墊與枕頭保潔墊組，作為寢具與日常使用之間的保護層；正式尺寸與洗滌方式以商品標示為準。",
    href: "#care",
  },
  {
    name: "隨身旅行頸枕／眼罩",
    en: "TRAVEL REST SET",
    image: "/product-travel-pillow.jpg",
    accessoryImage: "/product-eye-mask.jpg",
    statement: "離開臥室，也保留熟悉的放鬆節奏。",
    detail: "適合飛機、火車與長途移動使用；頸枕與眼罩的實際販售方式，以品牌正式商品資訊為準。",
    href: "#specs",
  },
];

const faqs = [
  { q: "CBD 是什麼？在這款寢具中如何使用？", a: "本頁僅就商品應用說明。依目前品牌資料，CBD 草本概念透過微膠囊機能織物應用於表布，並非食品或藥品；實際成分名稱、含量與來源仍應以原廠文件及檢驗報告為準。" },
  { q: "這款產品含有 THC 嗎？", a: "目前提供的品牌資料未附可供網站公開的 THC 檢驗數值，因此網站不宣稱零檢出或不含 THC。購買前建議向門市索取對應品項與批次的正式檢驗文件。" },
  { q: "使用 CBD 寢具會產生依賴性嗎？", a: "本產品是一般寢具，使用方式為接觸表布，並非食用或藥用。依賴性屬醫療判斷，網站不自行推論；如對成分或特殊健康狀況有疑慮，請先查看檢驗資料並諮詢專業醫療人員。" },
  { q: "可以改善失眠嗎？", a: "本產品為一般寢具用品，主要提供舒適支撐與睡眠使用感受，不具有診斷、治療或改善疾病的用途。若長期有睡眠困擾，建議諮詢專業醫療人員。" },
  { q: "適合側睡嗎？", a: "海鷗式枕型的兩側區域提供較明確的側睡承托，但是否合適仍取決於肩寬、枕高、床墊軟硬與個人習慣，建議到門市實際試躺。" },
  { q: "枕頭高度適合所有人嗎？", a: "不一定。每個人的肩寬、體型、主要睡姿與床墊下陷程度不同；同一高度不會適合所有人，建議由門市人員陪同比較仰睡與側睡位置。" },
  { q: "孕婦、兒童或特殊族群可以使用嗎？", a: "目前資料不足以對所有特殊族群作一致建議。請先確認原廠適用規範與成分檢驗；孕婦、兒童、過敏體質或有特殊健康狀況者，建議使用前諮詢專業人員。" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo" href="#top" aria-label="上品寢具首頁" onClick={closeMenu}><img src="/shangpin-logo.png" alt="上品寢具館 SONG BEAM International Bedding Gallery" /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#series" onClick={closeMenu}>系列概念</a><a href="#products" onClick={closeMenu}>系列商品</a><a href="#pillow" onClick={closeMenu}>枕型設計</a><a href="#structure" onClick={closeMenu}>材質結構</a><a href="#safety" onClick={closeMenu}>材質檢驗</a><a href="#specs" onClick={closeMenu}>商品規格</a><a href="#faq" onClick={closeMenu}>常見問題</a><a href="#stores" onClick={closeMenu}>門市體驗</a><a className="nav-cta" href="#buy" onClick={closeMenu}>立即購買</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" /><div className="hero-wash" /><div className="dream-haze" aria-hidden="true" /><div className="loose-curve hero-curve" aria-hidden="true" /><span className="summer-moon" aria-hidden="true">☾</span>
        <div className="hero-content">
          <p className="hero-series">上品寢具・CBD 草本忘憂系列</p><h1>讓夜晚，<br />慢慢鬆開。</h1><p className="hero-lead"><span>月光落下，讓草本的柔和想像與貼合支撐，</span><span className="hero-lead-nowrap">陪身體回到舒服的睡眠節奏。</span></p>
          <div className="hero-actions"><a className="button primary capsule" href="#series">探索草本忘憂系列 <span>→</span></a></div>
        </div>
        <p className="vertical-note">SUMMER NIGHT · HERBAL REST · SONG BEAM</p>
      </section>

      <section className="consultation section" id="concerns">
        <div className="section-label"><span>01</span><p>SLEEP CONCERNS</p></div>
        <div className="emotion-editorial"><div className="emotion-copy"><p className="eyebrow">第一幕｜夜晚還沒有真正開始</p><h2>有時候，<br />不是不想睡。</h2><p className="lead">只是白天的疲憊，<br />還沒有慢慢放下來。</p><div className="emotion-list">{concerns.map(([no, title]) => <p key={no}><span>{no}</span>{title}</p>)}</div><blockquote>真正舒服的睡眠，不只是柔軟，<br />還需要適合自己的支撐與安心放鬆的睡眠環境。</blockquote><a className="text-link" href="#series">讓身體慢慢鬆開 <span>↓</span></a></div><figure><img src="/lifestyle-reading.png" alt="夜晚在床邊閱讀並靠著草本忘憂枕的自然情境" /><figcaption>THE QUIET MOMENT BEFORE SLEEP</figcaption></figure></div>
      </section>

      <section className="series-home" id="series">
        <div className="series-intro section"><div className="section-label"><span>02</span><p>BODY BEGINS TO UNWIND</p></div><div className="series-product-editorial"><div className="series-product-copy"><p className="eyebrow">第二幕｜身體開始慢慢鬆開</p><h2>一顆枕頭，<br />從支撐開始，也從放鬆開始。</h2><p>上品將草本概念融入睡眠用品設計，並搭配枕頭本身的包覆、回彈與支撐機能。不把 CBD 描述為治療方式，而是讓舒適成為每日睡前可以重複的放鬆陪伴。</p><div className="series-short-points"><span>貼合頭頸</span><span>慢回彈包覆</span><span>草本睡眠概念</span></div></div><div className="series-product-image"><img src="/product-pillow-angle.jpg" alt="上品 CBD 草本忘憂海鷗減壓枕" /><i aria-hidden="true" /><b className="product-orbit" aria-hidden="true">BREATHE · RELEASE · REST ·</b></div></div></div>
      </section>

      <section className="product-showcase section" id="products">
        <div className="collection-head">
          <div><div className="section-label"><span>03</span><p>CBD SLEEP COLLECTION</p></div><p className="eyebrow">草本忘憂系列商品</p><h2>從臥室到旅途，<br />延續熟悉的舒服。</h2></div>
          <p>以直覺的大圖、簡短睡感描述與必要資訊，先看見每項商品最重要的使用情境。</p>
        </div>
        <div className="shop-product-grid">
          {collectionProducts.map((product, index) => (
            <article className="shop-product-card" key={product.name}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
                {product.accessoryImage ? <img className="accessory-image" src={product.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}
                <span className="shop-product-number">0{index + 1}</span>
              </div>
              <div className="shop-product-info"><small>{product.en}</small><h3>{product.name}</h3><strong>{product.statement}</strong><p>{product.detail}</p><a href={product.href}>查看商品細節 <span>→</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="core-features section" id="features">
        <div className="section-label"><span>04</span><p>HERBAL &amp; TACTILE DETAIL</p></div><div className="feature-heading"><div><p className="eyebrow">第四幕｜草本與材質</p><h2>將草本的柔和想像，<br />放進每天最靠近你的枕頭裡。</h2></div><p>不一次塞入太多術語，回到每晚真正能感受的三件事。</p></div>
        <div className="feature-editorial"><figure><img src="/product-press-closeup.png" alt="手部輕壓草本忘憂枕，呈現慢回彈材質" /><figcaption>SLOW REBOUND / TACTILE DETAIL</figcaption></figure><div className="feature-list">{features.map(([no, en, title, copy]) => <article key={no}><span>{no} / {en}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="pillow-section section" id="pillow">
        <div className="section-label"><span>05</span><p>SEAGULL CONTOUR DESIGN</p></div><div className="pillow-heading"><div><p className="eyebrow">海鷗減壓枕型</p><h2>海鷗曲線，讓肩頸自然<br />找到舒服的位置。</h2></div><p>中央、頸部與兩側各有不同任務，協助仰睡、側睡與翻身時自然轉換。</p></div>
        <div className="product-stage"><div className="product-photo"><img src="/product-pillow-angle.jpg" alt="CBD 草本忘憂海鷗減壓枕型" /><span className="callout c1"><b>01</b> 頭部<br />穩定承托</span><span className="callout c2"><b>02</b> 頸部<br />自然貼合</span><span className="callout c3"><b>03</b> 兩側<br />側睡更舒適</span></div><div className="product-details"><article><span>01</span><div><h3>中央區</h3><p>以中央凹槽承接後腦，協助維持自然仰睡位置。</p></div></article><article><span>02</span><div><h3>頸部與肩頸區</h3><p>曲線貼近頸部，降低肩膀與枕頭間明顯懸空的感受。</p></div></article><article><span>03</span><div><h3>兩側與波浪曲線</h3><p>提高側睡承托範圍，並讓不同睡姿之間的轉換更連續。</p></div></article><a className="button dark capsule" href="#stores">到門市實際感受 <span>↗</span></a></div></div>
        <div className="posture-comparison"><article><div className="posture-drawing back"><i /><b /></div><div><span>BACK SLEEP</span><h3>仰睡｜中央承托</h3><p>後腦落在中央凹槽，頸部曲線由枕面承接。</p></div></article><article><div className="posture-drawing side"><i /><b /></div><div><span>SIDE SLEEP</span><h3>側睡｜填補肩頸落差</h3><p>頭部落在較高的兩側枕區，回應肩寬形成的高度。</p></div></article></div>
      </section>

      <section className="sleep-fit section" id="fit">
        <div className="section-label"><span>06</span><p>SLEEP FEEL GUIDE</p></div><div className="fit-layout"><div className="fit-copy"><p className="eyebrow">適合哪些睡眠習慣</p><h2>這顆枕頭，適合正在尋找<br />這些睡感的你。</h2><div className="fit-list">{fitItems.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div></div><div className="scale-panel"><p className="scale-note">睡感溝通示意｜非檢測數值，實際感受請以門市試躺為準</p>{sleepScales.map(([label, value, note]) => <div className="feel-scale" key={label}><div><strong>{label}</strong><span>{note}</span></div><div className="scale-dots" aria-label={`${label}五段式定位 ${value} 格`}>{[1,2,3,4,5].map(n => <i className={n <= value ? "active" : ""} key={n} />)}</div></div>)}</div></div>
      </section>

      <section className="structure section" id="structure">
        <div className="section-label"><span>07</span><p>MATERIAL & STRUCTURE</p></div><div className="structure-heading"><div><p className="eyebrow">材質與產品結構</p><h2>每一層，都為舒適睡眠而設計。</h2></div><p>已確認的資訊清楚呈現；尺寸、產地或內套配置等未有正式文件的項目，不先替產品下結論。</p></div>
        <div className="exploded"><div className="exploded-visual"><div className="layer l1">01 外布套</div><div className="layer l2">02 內層／內套</div><div className="layer l3">03 親水記憶棉枕芯</div><img src="/product-pillow-side.jpg" alt="草本忘憂枕頭側面結構參考" /></div><div className="structure-list"><article><span>01</span><div><h3>外布套</h3><p>CBD 草本微膠囊機能針織表布；是否可拆洗及耐洗次數，以正式洗標與測試資料為準。</p></div></article><article><span>02</span><div><h3>內套與拉鍊</h3><p>目前提供資料未完整列出內套、拉鍊與可拆結構，待正式商品規格確認。</p></div></article><article><span>03</span><div><h3>枕芯</h3><p>親水記憶棉，著重貼合、回彈與水氣調節；密度數值待原廠文件確認。</p></div></article><article><span>04</span><div><h3>尺寸、高度與產地</h3><p>目前尚無可公開的完整尺寸、高度及產地資料，網站不自行推估。</p></div></article></div></div>
      </section>

      <section className="safety" id="safety">
        <div className="safety-copy"><div className="section-label light"><span>08</span><p>TESTING & SAFETY</p></div><p className="eyebrow pale">檢驗與安全說明</p><h2>看得見的安心，<br />才能放心陪伴每一晚。</h2><p>這裡只呈現目前可以對應品牌資料的內容。檢驗報告尚未提供的項目，統一標示為待文件確認，不採用任何無法直接佐證的等級或認證說法。</p></div>
        <div className="evidence-list"><article><span className="status known">品牌資料記載</span><h3>微膠囊織物技術</h3><p>品牌簡報記載技術來源為比利時；原料商名稱與技術授權文件待補。</p></article><article><span className="status pending">待檢驗文件</span><h3>CBD 成分與含量</h3><p>需提供成分名稱、來源、添加方式、含量與對應批次報告。</p></article><article><span className="status pending">待檢驗文件</span><h3>THC 檢驗結果</h3><p>目前沒有可公開數值，因此不宣稱「不含 THC」或「零檢出」。</p></article><article><span className="status pending">待法規文件</span><h3>台灣相關規範</h3><p>需依實際材質、輸入與銷售方式確認適用規範並提供文件。</p></article><article><span className="status pending">有報告再上架</span><h3>無毒、耐久與其他檢測</h3><p>抗菌、耐洗、耐久或無毒等項目，僅在有對應測試標準與報告時呈現。</p></article></div>
      </section>

      <section className="usage-scenes section" id="scenes">
        <div className="section-label"><span>09</span><p>FROM NIGHT TO MORNING</p></div><div className="scene-heading"><p className="eyebrow">第五幕｜一夜的使用故事</p><h2>從躺下的那一刻，<br />讓夜晚慢慢安靜下來。</h2></div><div className="scene-grid magazine"><article><img src="/lifestyle-reading.png" alt="睡前在床邊閱讀" /><div><span>22:30 / BEFORE SLEEP</span><h3>慢慢關掉白天的聲音</h3><p>洗完澡、放下手機，讓柔和燈光與安靜閱讀成為休息訊號。</p></div></article><article><img src="/hero-night.png" alt="側躺使用草本忘憂枕放鬆" /><div><span>23:10 / FALLING ASLEEP</span><h3>找到身體舒服的位置</h3><p>頭頸落在海鷗曲線上，讓包覆與支撐陪身體慢慢找到位置。</p></div></article><article><img src="/lifestyle-morning.png" alt="清晨起床拉開窗簾" /><div><span>07:00 / MORNING</span><h3>在柔和晨光裡醒來</h3><p>自然光回到房間，以安靜、沒有壓力的生活感開始新的一天。</p></div></article></div>
      </section>

      <section className="care section" id="care">
        <div className="section-label"><span>10</span><p>CARE GUIDE</p></div><div className="care-layout"><div><p className="eyebrow">使用與保養方式</p><h2>好好使用，也讓舒服<br />陪伴得更久。</h2><p>以下為保守使用原則；若正式洗標與原廠說明不同，請以商品文件為準。</p></div><div className="care-grid"><article><span>01</span><h3>初次使用</h3><p>依包裝說明處理；若開封後有材質氣味，可先置於陰涼通風處。</p></article><article><span>02</span><h3>外布套</h3><p>是否可拆洗、洗程與水溫請依洗標，不自行承諾機能耐洗次數。</p></article><article><span>03</span><h3>枕芯</h3><p>親水記憶棉避免直接水洗、扭轉、曝曬與高溫烘乾。</p></article><article><span>04</span><h3>日常整理</h3><p>置於陰涼通風處，保持乾爽；避免長時間潮濕與重物壓放。</p></article><article><span>05</span><h3>草本機能期限</h3><p>目前未提供使用期限或洗滌遞減資料，需由品牌與原料商補充。</p></article><article><span>06</span><h3>建議更換時間</h3><p>未有固定年限資料；若明顯塌陷、支撐改變或表布損壞，建議評估更換。</p></article></div></div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title"><div className="section-label"><span>11</span><p>FREQUENTLY ASKED</p></div><h2>資訊說清楚，<br />再放心選擇。</h2><p>成分、側睡、枕高與特殊族群等選購前常見問題。</p></div><div className="faq-list">{faqs.map((item, index) => <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" /></button><div className="faq-answer"><p>{item.a}</p></div></article>)}</div>
      </section>

      <section className="specs section" id="specs">
        <div className="section-label"><span>12</span><p>PRODUCT SPECIFICATIONS</p></div><div className="spec-heading"><div><p className="eyebrow">商品規格與購買資訊</p><h2>找到適合自己的<br />睡眠選擇。</h2></div><p>未確認的商業與規格資訊保留空白，待正式商品頁資料補齊後再公開。</p></div><div className="spec-layout"><div className="spec-product"><img src="/product-pillow-front.jpg" alt="上品 CBD 草本忘憂好眠親水枕正面" /><p>上品 CBD 草本忘憂好眠親水枕<br /><small>海鷗減壓枕型｜正式品名以商品標示為準</small></p></div><dl className="spec-table"><div><dt>表布</dt><dd>CBD 草本微膠囊機能針織表布</dd></div><div><dt>枕芯</dt><dd>親水記憶棉</dd></div><div><dt>枕型</dt><dd>海鷗式分區曲線</dd></div><div><dt>尺寸／高度</dt><dd className="pending-text">待正式規格確認</dd></div><div><dt>顏色／產地</dt><dd className="pending-text">待正式規格確認</dd></div><div><dt>售價／優惠</dt><dd className="pending-text">待正式售價確認</dd></div><div><dt>保固／配送</dt><dd className="pending-text">待品牌政策確認</dd></div><div><dt>退換貨</dt><dd className="pending-text">依正式銷售通路規則</dd></div></dl></div>
      </section>

      <section className="buy-panel" id="buy"><div className="buy-image"><img src="/product-press-closeup.png" alt="草本忘憂枕材質與曲線情境" /></div><div className="buy-copy"><p className="overline">READY FOR YOUR NIGHT</p><h2>舒服入睡，<br />不必等到很累以後。</h2><p>由上品寢具人員協助確認現貨、售價、門市與適合的試躺方式。</p><div className="buy-actions"><a className="button primary" href="#features">立即了解 <span>↑</span></a><a className="button outline-dark" href="#stores">查看門市</a><a className="button outline-dark" href="mailto:service@shangpin-bedding.tw?subject=預約 CBD 草本忘憂枕試躺">預約體驗</a></div></div></section>

      <section className="stores" id="stores"><div className="stores-copy"><p className="overline">IN-STORE PILLOW FITTING</p><h2>枕頭合不合適，<br />躺過才知道。</h2><p>每個人的肩寬、睡姿、床墊軟硬與習慣都不同。歡迎至上品寢具門市親自試躺，由專業人員陪你找到更適合自己的枕頭高度與睡感。</p><div className="hero-actions"><a className="button primary" href="mailto:service@shangpin-bedding.tw?subject=查詢上品寢具全台門市">查看全台門市 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=預約草本忘憂枕試躺">預約門市體驗 →</a></div></div><div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡感相談<br />仰睡・側睡實際感受</p></div></section>

      <footer><div className="footer-top"><div className="brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING CO., LTD</span></div><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="#series">系列概念</a><a href="#features">產品特色</a><a href="#pillow">枕型設計</a><a href="#safety">材質檢驗</a><a href="#specs">商品規格</a><a href="#faq">常見問題</a><a href="#stores">門市體驗</a></div><div className="footer-bottom footer-disclaimer"><span>© 2026 SONG BEAM BEDDING</span><span>本產品為一般寢具用品，非藥品或醫療器材，不具診斷、治療、預防疾病或改善失眠之功效。產品特色與材質說明，請以實際商品標示、原廠資料及檢驗報告為準。</span></div></footer>
    </main>
  );
}
