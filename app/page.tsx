"use client";

import { useEffect, useState } from "react";

const features = [
  ["01", "HERBAL RITUAL", "讓睡前，多一點放鬆儀式。", "", "草本概念透過微膠囊機能織物融入表布。"],
  ["02", "ERGONOMIC SUPPORT", "不只是柔軟，", "更懂得好好支撐。", "海鷗式輪廓以中央凹槽、頸部曲線與兩側枕區，回應仰睡、側睡及翻身時的不同高度。"],
  ["03", "SLOW REBOUND", "慢慢貼合，", "也慢慢卸下疲憊。", "親水記憶棉在受壓後逐步貼合頭頸，以包覆、回彈與水氣調節共同建立舒適睡感。"],
];

const fitItems = ["喜歡有包覆感的枕頭", "希望頭頸獲得穩定支撐", "習慣仰睡與側睡交替", "在意睡眠環境與放鬆儀式", "不喜歡過軟、容易塌陷的枕頭", "想親自體驗不同枕頭高度與睡感"];

const sleepScales = [
  ["柔軟度", 3, "適中"], ["支撐度", 4, "偏高"], ["包覆感", 4, "明顯"], ["回彈速度", 2, "慢回彈"], ["建議睡姿", 4, "仰睡・側睡"],
] as const;

const collectionProducts = [
  {
    name: "CBD草本忘憂枕頭",
    en: "HYDROPHILIC PILLOW",
    image: "/product-pillow-angle.jpg",
    statement: "貼合頭頸，也讓睡感保持輕盈。",
    detail: "海鷗式分區曲線搭配親水記憶棉，回應仰睡、側睡與翻身時的承托需求。",
    highlights: ["海鷗式分區曲線", "親水記憶棉支撐", "仰睡與側睡皆可試躺"],
    note: "實際尺寸、高度、售價與適用睡姿，請以門市說明及商品標示為準。",
  },
  {
    name: "CBD 寢具保潔墊組",
    en: "BEDDING PROTECTOR SET",
    image: "/product-protector.jpg",
    statement: "把日常髒污留在床墊與枕頭之外。",
    detail: "床墊與枕頭保潔墊組，作為寢具與日常使用之間的保護層；正式尺寸與洗滌方式以商品標示為準。",
    highlights: ["床墊與枕頭保潔組", "建立寢具日常防護層", "洗滌方式依商品標示"],
    note: "實際組合、尺寸與清潔方式，請以品牌正式商品資訊及洗標為準。",
  },
  {
    name: "CBD隨身旅行組",
    en: "TRAVEL REST SET",
    image: "/product-travel-pillow.jpg",
    accessoryImage: "/product-eye-mask.jpg",
    statement: "離開臥室，也保留熟悉的放鬆節奏。",
    detail: "適合飛機、火車與長途移動使用；頸枕與眼罩的實際販售方式，以品牌正式商品資訊為準。",
    highlights: ["旅行頸枕與眼罩", "適合長途移動情境", "輕巧延續熟悉睡感"],
    note: "頸枕與眼罩的販售組合、材質與尺寸，請以正式商品資訊為準。",
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
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const selectedProduct = selectedProductIndex === null ? null : collectionProducts[selectedProductIndex];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (selectedProductIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProductIndex(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProductIndex]);

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo" href="#top" aria-label="上品寢具首頁" onClick={closeMenu}><img src="/shangpin-logo.png" alt="上品寢具館 SONG BEAM International Bedding Gallery" /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#features" onClick={closeMenu}>產品特色</a><a href="#products" onClick={closeMenu}>系列商品</a><a href="#pillow" onClick={closeMenu}>枕型設計</a><a href="#structure" onClick={closeMenu}>材質結構</a><a href="#safety" onClick={closeMenu}>材質檢驗</a><a href="#faq" onClick={closeMenu}>常見問題</a><a href="#stores" onClick={closeMenu}>門市體驗</a><a className="nav-cta" href="#buy" onClick={closeMenu}>立即購買</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" /><div className="hero-wash" /><div className="dream-haze" aria-hidden="true" /><div className="loose-curve hero-curve" aria-hidden="true" /><span className="summer-moon" aria-hidden="true">☾</span>
        <div className="hero-content">
          <p className="hero-series">上品寢具・CBD 草本忘憂系列</p><h1>讓夜晚，<br />慢慢鬆開。</h1><p className="hero-lead"><span>月光落下，讓草本的柔和想像與貼合支撐，</span><span className="hero-lead-nowrap">陪身體回到舒服的睡眠節奏。</span></p>
          <div className="hero-actions"><a className="button primary capsule" href="#features">探索草本忘憂系列 <span>→</span></a></div>
        </div>
        <p className="vertical-note">SUMMER NIGHT · HERBAL REST · SONG BEAM</p>
      </section>

      <section className="core-features section" id="features">
        <div className="section-label"><span>01</span><p>HERBAL &amp; TACTILE DETAIL</p></div><div className="feature-heading"><div><h2 className="feature-title"><span>將草本的柔和想像，</span><span>放進每天最靠近你的枕頭裡。</span></h2></div></div>
        <div className="feature-editorial"><figure><img src="/herbal-tactile-pillow-scene.png" alt="暖晨光中完整展示 CBD 草本忘憂枕的表布與立體輪廓" /><figcaption>SLOW REBOUND / TACTILE DETAIL</figcaption></figure><div className="feature-list">{features.map(([no, en, titleLine1, titleLine2, copy]) => <article key={no}><span>{no} / {en}</span><h3><span>{titleLine1}</span>{titleLine2 ? <span>{titleLine2}</span> : null}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="product-showcase section" id="products">
        <div className="collection-head">
          <div><div className="section-label"><span>02</span><p>CBD SLEEP COLLECTION</p></div><p className="eyebrow">草本忘憂系列商品</p><h2>從臥室到旅途，<br />延續熟悉的舒服。</h2></div>
        </div>
        <div className="shop-product-grid">
          {collectionProducts.map((product, index) => (
            <article className="shop-product-card" key={product.name}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
                {product.accessoryImage ? <img className="accessory-image" src={product.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}
                <span className="shop-product-number">0{index + 1}</span>
              </div>
              <div className="shop-product-info"><small>{product.en}</small><h3>{product.name}</h3><strong>{product.statement}</strong><p>{product.detail}</p><button className="product-detail-trigger" type="button" onClick={() => setSelectedProductIndex(index)}>查看商品細節 <span>→</span></button></div>
            </article>
          ))}
        </div>
      </section>

      {selectedProduct ? <div className="product-modal-backdrop" onMouseDown={() => setSelectedProductIndex(null)}>
        <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉商品介紹" onClick={() => setSelectedProductIndex(null)} autoFocus>×</button>
          <div className="product-modal-visual"><img className={`product-modal-image product-modal-image-${selectedProductIndex}`} src={selectedProduct.image} alt={selectedProduct.name} />{selectedProduct.accessoryImage ? <img className="product-modal-accessory" src={selectedProduct.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}</div>
          <div className="product-modal-copy"><small>{selectedProduct.en}</small><h2 id="product-modal-title">{selectedProduct.name}</h2><strong>{selectedProduct.statement}</strong><p>{selectedProduct.detail}</p><ul>{selectedProduct.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p className="product-modal-note">{selectedProduct.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={() => setSelectedProductIndex(null)}>到門市體驗 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=詢問 CBD 草本忘憂系列商品">詢問商品資訊 →</a></div></div>
        </section>
      </div> : null}

      <section className="pillow-section section" id="pillow">
        <div className="section-label"><span>03</span><p>SEAGULL CONTOUR DESIGN</p></div>
        <p className="seagull-kicker">海鷗減壓枕型</p>
        <div className="seagull-editorial">
          <figure className="seagull-photo"><img src="/herbal-tactile-pillow-scene.png" alt="晨光臥室中展示 CBD 草本忘憂海鷗減壓枕型" /><figcaption>SEAGULL CONTOUR / NATURAL SUPPORT</figcaption></figure>
          <div className="seagull-copy">
            <h2 className="seagull-title"><span>海鷗曲線，</span><span>讓肩頸自然找到</span><span>舒服的位置。</span></h2>
            <div className="product-details seagull-details"><article><span>01</span><div><h3>草本科技 × 親水棉</h3><p>結合漢麻二酚天然草本技術，枕芯採用 GLORY 獨家專利 Tempwiser 親水棉，兼顧包覆與回彈。</p></div></article><article><span>02</span><div><h3>海鷗曲線支撐</h3><p>特殊海鷗造型回應仰睡、側睡的不同承托需求，讓頭頸與肩部自然找到合適位置。</p></div></article><article><span>03</span><div><h3>可調高度設計</h3><p>可依不同身形與睡眠習慣增添高度，更貼合頸部曲線，減少肩頸懸空與壓迫感。</p></div></article></div>
            <a className="button dark capsule seagull-button" href="#stores">到門市實際感受 <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="sleep-fit section" id="fit">
        <div className="section-label"><span>04</span><p>SLEEP FEEL GUIDE</p></div><div className="fit-layout"><div className="fit-copy"><p className="eyebrow">適合哪些睡眠習慣</p><h2>這顆枕頭，適合正在尋找<br />這些睡感的你。</h2><div className="fit-list">{fitItems.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div></div><div className="scale-panel"><p className="scale-note">睡感溝通示意｜非檢測數值，實際感受請以門市試躺為準</p>{sleepScales.map(([label, value, note]) => <div className="feel-scale" key={label}><div><strong>{label}</strong><span>{note}</span></div><div className="scale-dots" aria-label={`${label}五段式定位 ${value} 格`}>{[1,2,3,4,5].map(n => <i className={n <= value ? "active" : ""} key={n} />)}</div></div>)}</div></div>
      </section>

      <section className="structure section" id="structure">
        <div className="section-label"><span>05</span><p>MATERIAL & STRUCTURE</p></div><div className="structure-heading"><div><p className="eyebrow">材質與產品結構</p><h2>每一層，都為舒適睡眠而設計。</h2></div><p>已確認的資訊清楚呈現；尺寸、產地或內套配置等未有正式文件的項目，不先替產品下結論。</p></div>
        <div className="exploded"><div className="exploded-visual"><div className="layer l1">01 外布套</div><div className="layer l2">02 內層／內套</div><div className="layer l3">03 親水記憶棉枕芯</div><img src="/product-pillow-side.jpg" alt="草本忘憂枕頭側面結構參考" /></div><div className="structure-list"><article><span>01</span><div><h3>外布套</h3><p>CBD 草本微膠囊機能針織表布；是否可拆洗及耐洗次數，以正式洗標與測試資料為準。</p></div></article><article><span>02</span><div><h3>內套與拉鍊</h3><p>目前提供資料未完整列出內套、拉鍊與可拆結構，待正式商品規格確認。</p></div></article><article><span>03</span><div><h3>枕芯</h3><p>親水記憶棉，著重貼合、回彈與水氣調節；密度數值待原廠文件確認。</p></div></article><article><span>04</span><div><h3>尺寸、高度與產地</h3><p>目前尚無可公開的完整尺寸、高度及產地資料，網站不自行推估。</p></div></article></div></div>
      </section>

      <section className="safety" id="safety">
        <div className="safety-copy"><div className="section-label light"><span>06</span><p>TESTING & SAFETY</p></div><p className="eyebrow pale">檢驗與安全說明</p><h2>看得見的安心，<br />才能放心陪伴每一晚。</h2><p>這裡只呈現目前可以對應品牌資料的內容。檢驗報告尚未提供的項目，統一標示為待文件確認，不採用任何無法直接佐證的等級或認證說法。</p></div>
        <div className="evidence-list"><article><span className="status known">品牌資料記載</span><h3>微膠囊織物技術</h3><p>品牌簡報記載技術來源為比利時；原料商名稱與技術授權文件待補。</p></article><article><span className="status pending">待檢驗文件</span><h3>CBD 成分與含量</h3><p>需提供成分名稱、來源、添加方式、含量與對應批次報告。</p></article><article><span className="status pending">待檢驗文件</span><h3>THC 檢驗結果</h3><p>目前沒有可公開數值，因此不宣稱「不含 THC」或「零檢出」。</p></article><article><span className="status pending">待法規文件</span><h3>台灣相關規範</h3><p>需依實際材質、輸入與銷售方式確認適用規範並提供文件。</p></article><article><span className="status pending">有報告再上架</span><h3>無毒、耐久與其他檢測</h3><p>抗菌、耐洗、耐久或無毒等項目，僅在有對應測試標準與報告時呈現。</p></article></div>
      </section>

      <section className="care section" id="care">
        <div className="section-label"><span>07</span><p>CARE GUIDE</p></div><div className="care-layout"><div><p className="eyebrow">使用與保養方式</p><h2>好好使用，也讓舒服<br />陪伴得更久。</h2><p>以下為保守使用原則；若正式洗標與原廠說明不同，請以商品文件為準。</p></div><div className="care-grid"><article><span>01</span><h3>初次使用</h3><p>依包裝說明處理；若開封後有材質氣味，可先置於陰涼通風處。</p></article><article><span>02</span><h3>外布套</h3><p>是否可拆洗、洗程與水溫請依洗標，不自行承諾機能耐洗次數。</p></article><article><span>03</span><h3>枕芯</h3><p>親水記憶棉避免直接水洗、扭轉、曝曬與高溫烘乾。</p></article><article><span>04</span><h3>日常整理</h3><p>置於陰涼通風處，保持乾爽；避免長時間潮濕與重物壓放。</p></article><article><span>05</span><h3>草本機能期限</h3><p>目前未提供使用期限或洗滌遞減資料，需由品牌與原料商補充。</p></article><article><span>06</span><h3>建議更換時間</h3><p>未有固定年限資料；若明顯塌陷、支撐改變或表布損壞，建議評估更換。</p></article></div></div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title"><div className="section-label"><span>08</span><p>FREQUENTLY ASKED</p></div><h2>資訊說清楚，<br />再放心選擇。</h2><p>成分、側睡、枕高與特殊族群等選購前常見問題。</p></div><div className="faq-list">{faqs.map((item, index) => <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" /></button><div className="faq-answer"><p>{item.a}</p></div></article>)}</div>
      </section>

      <section className="buy-panel" id="buy"><div className="buy-image"><img src="/product-press-closeup.png" alt="草本忘憂枕材質與曲線情境" /></div><div className="buy-copy"><p className="overline">READY FOR YOUR NIGHT</p><h2>舒服入睡，<br />不必等到很累以後。</h2><p>由上品寢具人員協助確認現貨、售價、門市與適合的試躺方式。</p><div className="buy-actions"><a className="button primary" href="#features">立即了解 <span>↑</span></a><a className="button outline-dark" href="#stores">查看門市</a><a className="button outline-dark" href="mailto:service@shangpin-bedding.tw?subject=預約 CBD 草本忘憂枕試躺">預約體驗</a></div></div></section>

      <section className="stores" id="stores"><div className="stores-copy"><p className="overline">IN-STORE PILLOW FITTING</p><h2>枕頭合不合適，<br />躺過才知道。</h2><p>每個人的肩寬、睡姿、床墊軟硬與習慣都不同。歡迎至上品寢具門市親自試躺，由專業人員陪你找到更適合自己的枕頭高度與睡感。</p><div className="hero-actions"><a className="button primary" href="mailto:service@shangpin-bedding.tw?subject=查詢上品寢具全台門市">查看全台門市 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=預約草本忘憂枕試躺">預約門市體驗 →</a></div></div><div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡感相談<br />仰睡・側睡實際感受</p></div></section>

      <footer><div className="footer-top"><div className="brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING CO., LTD</span></div><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="#features">產品特色</a><a href="#pillow">枕型設計</a><a href="#safety">材質檢驗</a><a href="#faq">常見問題</a><a href="#stores">門市體驗</a></div><div className="footer-bottom footer-disclaimer"><span>© 2026 SONG BEAM BEDDING</span><span>本產品為一般寢具用品，非藥品或醫療器材，不具診斷、治療、預防疾病或改善失眠之功效。產品特色與材質說明，請以實際商品標示、原廠資料及檢驗報告為準。</span></div></footer>
    </main>
  );
}
