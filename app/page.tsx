"use client";

import { useEffect, useState } from "react";

const features = [
  ["01", "HERBAL RITUAL", "讓睡前，多一點放鬆儀式。", "", "草本概念透過微膠囊機能織物融入表布。"],
  ["02", "ERGONOMIC SUPPORT", "不只是柔軟，", "更懂得好好支撐。", "海鷗式輪廓以中央凹槽、頸部曲線與兩側枕區，回應仰睡、側睡及翻身時的不同高度。"],
  ["03", "SLOW REBOUND", "慢慢貼合，", "也慢慢卸下疲憊。", "親水記憶棉在受壓後逐步貼合頭頸，以包覆、回彈與水氣調節共同建立舒適睡感。"],
];

const newsItems = [
  {
    date: "2026.07.18",
    source: "Yahoo! Finance",
    short: "YAHOO!",
    title: "Innovative CBD-Coated Bedding Clinically Proven to Improve Sleep Quality",
    summary: "Song Beam Bedding 與中國醫藥大學睡眠研究獲美國財經媒體報導。",
    url: "https://finance.yahoo.com/healthcare/articles/innovative-cbd-coated-bedding-clinically-090000842.html",
    tone: "yahoo",
  },
  {
    date: "2026.07.18",
    source: "CBS Lake Charles",
    short: "CBS",
    title: "Song Beam Bedding and China Medical University’s Joint Study Published in Healthcare",
    summary: "CBD 機能寢具與睡眠品質研究登上 CBS Lake Charles 媒體頁面。",
    url: "https://pr.cbslakecharles.tv/article/Innovative-CBD-Coated-Bedding-Clinically-Proven-to-Improve-Sleep-Quality-Song-Beam-Bedding-and-China-Medical-Universitys-Joint-Study-Published-in-International-Journal-Healthcare?storyId=6a5b4169fef76cbb7d73e15a",
    tone: "cbs",
  },
  {
    date: "2026.07.18",
    source: "Coast to Coast Newspaper",
    short: "C2C",
    title: "Innovative CBD-Coated Bedding Clinically Proven to Improve Sleep Quality",
    summary: "研究消息同步刊載於 Coast to Coast Newspaper 新產品新聞專區。",
    url: "https://ccnewspaper.com/newproductnews?rkey=20260718HK02853&filter=28087",
    tone: "coast",
  },
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

const pillowSeries = [
  {
    name: "CBD草本忘憂 天絲枕",
    en: "TENCEL PILLOW",
    image: "/sleep-concerns-cbd-pillow-wide.png",
    statement: "滑順親膚，延續柔和安定的睡眠感受。",
    detail: "將草本忘憂系列的舒適概念融入天絲枕款，適合偏好細緻觸感與輕柔包覆感的睡眠選擇。",
    highlights: ["細緻親膚觸感", "柔和包覆睡感", "適合到門市實際試躺"],
    note: "實際表布成分、枕芯材質、尺寸與高度，請以正式商品標示及門市說明為準。",
  },
  {
    name: "CBD草本忘憂 羽絨枕",
    en: "DOWN PILLOW",
    image: "/cbd-hero.png",
    statement: "蓬鬆包覆，給喜歡柔軟睡感的你。",
    detail: "以羽絨枕款回應偏好輕盈、蓬鬆與包覆感的睡眠習慣，讓頭頸自然落在柔軟承托之中。",
    highlights: ["蓬鬆柔軟睡感", "輕盈包覆頭頸", "建議依睡姿試躺選擇"],
    note: "實際羽絨比例、填充量、尺寸與清潔方式，請以正式商品標示及門市說明為準。",
  },
  {
    name: "CBD草本忘憂 好眠雲朵枕",
    en: "SLEEP CLOUD PILLOW",
    image: "/series-support-pillow-scene.png",
    statement: "像雲朵般輕柔，保留舒服的包覆空間。",
    detail: "以柔和蓬鬆感作為主要睡感方向，適合喜歡枕頭輕柔承接、身體慢慢放鬆的使用者。",
    highlights: ["雲朵般輕柔感", "舒適包覆設計", "依個人睡姿感受選擇"],
    note: "實際枕芯材質、軟硬度、尺寸與高度，請以正式商品標示及門市說明為準。",
  },
  {
    name: "CBD草本忘憂 好眠親水枕（海鷗枕／止鼾枕）",
    en: "HYDROPHILIC CONTOUR PILLOW",
    image: "/product-pillow-angle.jpg",
    statement: "慢回彈貼合，回應仰睡與側睡的承托需求。",
    detail: "親水記憶棉搭配海鷗式分區輪廓，透過中央、頸部與兩側區域，協助頭頸在不同睡姿中找到合適位置。",
    highlights: ["親水記憶棉", "海鷗式分區輪廓", "仰睡與側睡皆可試躺"],
    note: "「止鼾枕」為商品系列名稱，不代表具有醫療或治療功效；實際效果因個人狀況而異。",
  },
  {
    name: "CBD草本忘憂 海鷗減壓枕",
    en: "SEAGULL PRESSURE-RELIEF PILLOW",
    image: "/herbal-tactile-pillow-scene.png",
    statement: "海鷗曲線承托，讓肩頸自然找到舒服位置。",
    detail: "特殊海鷗造型回應仰睡、側睡與翻身時的高度變化，並可依不同身形與睡眠習慣調整使用感受。",
    highlights: ["海鷗曲線支撐", "回應多種睡姿", "可依身形調整睡感"],
    note: "實際高度調整方式、尺寸與適用睡姿，請以正式商品標示及門市試躺結果為準。",
  },
  {
    name: "CBD草本忘憂 海鷗護脊枕",
    en: "SEAGULL SPINE-SUPPORT PILLOW",
    image: "/product-pillow-side.jpg",
    statement: "以分區曲線承托，回應頭頸與肩部的不同高度。",
    detail: "海鷗式輪廓以中央與兩側枕區建立不同承托位置，讓仰睡、側睡與翻身時的睡感更連續。",
    highlights: ["海鷗式分區輪廓", "頭頸與肩部承托", "建議依體型與睡姿試躺"],
    note: "「護脊枕」為商品系列名稱，實際尺寸、高度與適用睡姿請以正式商品標示及門市說明為準。",
  },
];

const protectorSeries = [
  {
    name: "CBD草本忘憂 好眠 長纖細棉 涼被",
    en: "LONG-STAPLE COTTON SUMMER QUILT",
    image: "/product-bedding-room.png",
    statement: "輕柔覆蓋，為溫暖季節保留舒適睡感。",
    detail: "以長纖細棉系列延續草本忘憂的寢室氛圍，適合偏好輕盈覆蓋感的日常睡眠使用。",
    highlights: ["長纖細棉系列", "輕盈覆蓋睡感", "適合日常寢室搭配"],
    note: "實際材質比例、尺寸、重量與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 好眠 長纖細棉 枕套",
    en: "LONG-STAPLE COTTON PILLOWCASE",
    image: "/product-bedding-detail.png",
    statement: "貼近臉頰的細緻觸感，讓枕頭融入完整寢室搭配。",
    detail: "長纖細棉枕套作為枕頭與日常使用之間的貼身表層，延續系列一致的柔和質感。",
    highlights: ["細緻貼身觸感", "枕頭日常防護", "系列化寢室搭配"],
    note: "實際尺寸、開口形式、材質比例與清潔方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 好眠 長纖細棉 床包",
    en: "LONG-STAPLE COTTON FITTED SHEET",
    image: "/hero-cbd-morning.png",
    statement: "把柔和觸感鋪進每晚最貼近身體的位置。",
    detail: "長纖細棉床包延續好眠系列的寢室質感，作為床墊表層的日常包覆與搭配選擇。",
    highlights: ["長纖細棉系列", "床墊表層包覆", "整體寢室風格搭配"],
    note: "實際適用床墊尺寸、包覆高度、材質比例與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 雙層平面保潔墊（保潔墊＋枕套）",
    en: "DOUBLE-LAYER PROTECTOR SET",
    image: "/product-protector.jpg",
    statement: "雙層平面防護，照顧床墊與枕頭的日常使用。",
    detail: "由保潔墊與枕套組成的寢具防護組合，作為床墊、枕頭與日常使用之間的保護層。",
    highlights: ["保潔墊與枕套組合", "雙層平面防護", "建立寢具日常保護層"],
    note: "實際組合內容、尺寸、防護特性與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 毛小孩安撫墊被",
    en: "PET COMFORT MAT QUILT",
    image: "/lifestyle-morning.png",
    statement: "為毛小孩準備一處柔和、熟悉的休息角落。",
    detail: "可作為毛小孩日常休息時使用的墊被，將草本忘憂系列的柔和居家感延伸到共享生活空間。",
    highlights: ["毛小孩休息墊被", "柔和居家使用情境", "輕巧融入日常空間"],
    note: "實際材質、尺寸、適用寵物與清潔方式，請以正式商品標示及洗標為準。",
  },
];

const travelSeries = [
  {
    name: "CBD草本忘憂 信封式枕頭套",
    en: "ENVELOPE PILLOWCASE",
    image: "/product-bedding-detail.png",
    statement: "簡潔包覆，讓熟悉的枕頭成為旅途中的安心陪伴。",
    detail: "信封式枕頭套以簡潔包覆方式整理枕頭表面，適合搭配旅行與日常寢具使用。",
    highlights: ["信封式包覆設計", "適合旅行收納搭配", "延續熟悉寢具觸感"],
    note: "實際材質、尺寸、適用枕型與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 好眠眼罩",
    en: "SLEEP EYE MASK",
    image: "/product-eye-mask.jpg",
    statement: "輕柔遮蔽視線，為移動中的休息留一點安靜。",
    detail: "好眠眼罩適合睡前與旅途中使用，透過柔和包覆感協助建立較安靜的休息情境。",
    highlights: ["柔和眼周包覆", "適合旅途休息使用", "輕巧方便隨身攜帶"],
    note: "實際表布、填充材質、尺寸與清潔方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD草本忘憂 旅行好眠頸枕 護頸枕",
    en: "TRAVEL NECK PILLOW",
    image: "/product-travel-pillow.jpg",
    statement: "環抱頸部，讓長途移動也保有熟悉的承托感。",
    detail: "旅行好眠頸枕以環繞式輪廓回應乘車、飛行與等待時的頸部支撐需求，適合隨身攜帶使用。",
    highlights: ["環繞式頸部承托", "適合長途移動情境", "輕巧隨身休息配件"],
    note: "「護頸枕」為商品系列名稱，實際材質、尺寸與承托感受請以正式商品標示及試用結果為準。",
  },
  {
    name: "CBD草本忘憂 好眠旅行組",
    en: "TRAVEL SLEEP SET",
    image: "/lifestyle-reading.png",
    statement: "把熟悉的放鬆節奏，整理成一組帶著走的旅途陪伴。",
    detail: "好眠旅行組整合旅途中常用的休息配件，讓飛行、乘車與住宿時也能延續較熟悉的睡前習慣。",
    highlights: ["旅行休息配件組合", "回應多種移動情境", "方便整理與隨身攜帶"],
    note: "實際組合內容、材質、尺寸與收納方式，請以品牌正式商品資訊及商品標示為準。",
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
  const [selectedSeriesItemIndex, setSelectedSeriesItemIndex] = useState<number | null>(null);
  const selectedProduct = selectedProductIndex === null ? null : collectionProducts[selectedProductIndex];
  const catalogConfig = selectedProductIndex === 0
    ? { en: "CBD PILLOW COLLECTION", title: "CBD草本忘憂枕頭系列", copy: "從材質觸感到枕型支撐，選擇一款枕頭查看產品介紹。", items: pillowSeries }
    : selectedProductIndex === 1
      ? { en: "CBD BEDDING PROTECTOR COLLECTION", title: "CBD寢具保潔墊組系列", copy: "從寢具搭配到日常防護，選擇一項產品查看完整介紹。", items: protectorSeries }
      : selectedProductIndex === 2
        ? { en: "CBD TRAVEL REST COLLECTION", title: "CBD隨身旅行組系列", copy: "從枕套、眼罩到頸枕，選擇一項旅行配件查看完整介紹。", items: travelSeries }
        : null;
  const selectedSeriesItem = selectedSeriesItemIndex === null ? null : catalogConfig?.items[selectedSeriesItemIndex] ?? null;
  const closeMenu = () => setMenuOpen(false);
  const closeProductModal = () => {
    setSelectedSeriesItemIndex(null);
    setSelectedProductIndex(null);
  };

  useEffect(() => {
    if (selectedProductIndex === null && selectedSeriesItemIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectedSeriesItemIndex !== null) setSelectedSeriesItemIndex(null);
      else setSelectedProductIndex(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProductIndex, selectedSeriesItemIndex]);

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo glory-brand-logo" href="#top" aria-label="GLORY 葛洛麗名床寢具首頁" onClick={closeMenu}><img src="/glory-logo.jpg" alt="GLORY 1953 德國葛洛麗名床寢具" /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#features" onClick={closeMenu}>產品特色</a><a href="#endorsements" onClick={closeMenu}>品牌推薦</a><a href="#pillow" onClick={closeMenu}>枕型設計</a><a href="#structure" onClick={closeMenu}>材質結構</a><a href="#safety" onClick={closeMenu}>材質檢驗</a><a href="#products" onClick={closeMenu}>系列商品</a><a href="#news" onClick={closeMenu}>新聞報導</a><a href="#faq" onClick={closeMenu}>常見問題</a><a href="#stores" onClick={closeMenu}>門市體驗</a>
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

      <section className="endorsement-section section" id="endorsements">
        <div className="section-label"><span>02</span><p>BRAND AMBASSADOR &amp; PROFESSIONAL RECOMMENDATION</p></div>
        <div className="endorsement-intro"><div><p className="eyebrow">品牌代言與專業推薦</p><h2>讓每一種舒服，<br /><span className="endorsement-title-nowrap">都有值得信任的聲音。</span></h2></div></div>
        <div className="endorsement-grid">
          <article><figure className="endorsement-portrait wu"><img src="/wu-ruo-quan.jpg" alt="吳若權老師" /></figure><div><small>BRAND AMBASSADOR</small><h3>吳若權 老師</h3><strong>CBD 系列產品代言人</strong><p>吳若權老師擔任 CBD 系列產品代言人，陪伴品牌傳遞柔和、舒適而貼近日常的睡眠生活想像。</p></div></article>
          <article><figure className="endorsement-portrait lin"><img src="/dr-lin-kuo-wei.png" alt="林國偉博士" /></figure><div><small>PROFESSIONAL RECOMMENDATION</small><h3>林國偉 博士</h3><strong>美國脊骨神經醫學博士推薦</strong><p>從日常睡眠支撐與肩頸舒適的角度，推薦 CBD 系列產品與枕型設計。</p></div></article>
        </div>
        <p className="endorsement-note">本頁代言與推薦資訊依品牌提供資料呈現；產品為一般寢具用品，非醫療器材，不具診斷或治療功效。</p>
      </section>

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

      {catalogConfig ? <div className="product-modal-backdrop" onMouseDown={closeProductModal}>
        <section className="pillow-catalog-modal" role="dialog" aria-modal="true" aria-labelledby="pillow-catalog-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉產品系列" onClick={closeProductModal} autoFocus>×</button>
          <header className="pillow-catalog-heading"><small>{catalogConfig.en}</small><h2 id="pillow-catalog-title">{catalogConfig.title}</h2><p>{catalogConfig.copy}</p></header>
          <div className="pillow-catalog-grid">{catalogConfig.items.map((item, index) => <button className="pillow-catalog-card" type="button" key={item.name} onClick={() => setSelectedSeriesItemIndex(index)}><span className="pillow-catalog-image"><img src={item.image} alt={item.name} /><i>{String(index + 1).padStart(2, "0")}</i></span><span className="pillow-catalog-copy"><small>{item.en}</small><strong>{item.name}</strong><em>查看產品介紹 <b>→</b></em></span></button>)}</div>
        </section>
      </div> : selectedProduct ? <div className="product-modal-backdrop" onMouseDown={closeProductModal}>
        <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉商品介紹" onClick={closeProductModal} autoFocus>×</button>
          <div className="product-modal-visual"><img className={`product-modal-image product-modal-image-${selectedProductIndex}`} src={selectedProduct.image} alt={selectedProduct.name} />{selectedProduct.accessoryImage ? <img className="product-modal-accessory" src={selectedProduct.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}</div>
          <div className="product-modal-copy"><small>{selectedProduct.en}</small><h2 id="product-modal-title">{selectedProduct.name}</h2><strong>{selectedProduct.statement}</strong><p>{selectedProduct.detail}</p><ul>{selectedProduct.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p className="product-modal-note">{selectedProduct.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={closeProductModal}>到門市體驗 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=詢問 CBD 草本忘憂系列商品">詢問商品資訊 →</a></div></div>
        </section>
      </div> : null}

      {selectedSeriesItem ? <div className="product-modal-backdrop pillow-detail-layer" onMouseDown={() => setSelectedSeriesItemIndex(null)}>
        <section className="product-modal pillow-series-detail" role="dialog" aria-modal="true" aria-labelledby="pillow-detail-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="返回產品系列" onClick={() => setSelectedSeriesItemIndex(null)} autoFocus>←</button>
          <div className="product-modal-visual"><img className={`product-modal-image pillow-series-image pillow-series-image-${selectedSeriesItemIndex}`} src={selectedSeriesItem.image} alt={selectedSeriesItem.name} /></div>
          <div className="product-modal-copy"><small>{selectedSeriesItem.en}</small><h2 id="pillow-detail-title">{selectedSeriesItem.name}</h2><strong>{selectedSeriesItem.statement}</strong><p>{selectedSeriesItem.detail}</p><ul>{selectedSeriesItem.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p className="product-modal-note">{selectedSeriesItem.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={closeProductModal}>到門市體驗 <span>↗</span></a><button className="pillow-back-button" type="button" onClick={() => setSelectedSeriesItemIndex(null)}>返回系列商品</button></div></div>
        </section>
      </div> : null}

      <section className="structure section" id="structure">
        <div className="section-label"><span>04</span><p>MATERIAL &amp; STRUCTURE</p></div>
        <div className="structure-heading structure-heading-editorial"><div><p className="eyebrow">材質與產品結構</p><h2 className="structure-title"><span>每一層，</span><span className="structure-title-nowrap">都為舒適睡眠而設計。</span></h2></div></div>
        <div className="structure-editorial">
          <figure className="structure-product-photo"><span>CBD PILLOW / SIDE VIEW</span><img src="/product-pillow-side.jpg" alt="CBD 草本忘憂枕頭側面與輪廓" /><figcaption>柔和表布與貼合枕芯，共同構成每晚靠近肌膚的舒適層次。</figcaption></figure>
          <div className="structure-layers"><header><small>THREE-LAYER COMFORT</small><h3>由外而內，<br />看見每一層的角色。</h3></header><article><span>01</span><div><h4>CBD 機能外布套</h4><p>草本微膠囊機能針織表布，建立柔和、親膚的接觸層。</p></div></article><article><span>02</span><div><h4>內層與保護結構</h4><p>位於表布與枕芯之間；實際內套、拉鍊及拆卸方式依各款商品規格為準。</p></div></article><article><span>03</span><div><h4>親水記憶棉枕芯</h4><p>以貼合、慢回彈與水氣調節，承接頭頸並回應不同睡姿。</p></div></article></div>
        </div>
        <div className="structure-spec-panel"><table><tbody><tr><th>表布特色</th><td>CBD 草本微膠囊機能針織表布</td><th>枕芯材質</th><td>親水記憶棉</td></tr><tr><th>睡感重點</th><td>柔和觸感、貼合承托、慢回彈</td><th>日常清潔</th><td>枕芯與外布套分開處理，依商品洗標為準</td></tr><tr><th>結構配置</th><td>依不同枕款的內套、拉鍊與可拆設計為準</td><th>商品規格</th><td>尺寸、高度與產地請以正式商品標示為準</td></tr></tbody></table></div>
      </section>

      <section className="evidence-story section" id="safety">
        <div className="section-label"><span>05</span><p>TESTING &amp; TEXTILE TECHNOLOGY</p></div>
        <header className="safety-editorial-head"><p className="eyebrow">檢驗與安全說明</p><h2>從睡眠數據，<br /><span className="safety-title-nowrap">看見安心的依據。</span></h2></header>

        <div className="clinical-data-card">
          <div className="clinical-data-intro"><small>CLINICAL SLEEP OBSERVATION</small><h3>全台近 400 萬人<br />失眠福音</h3><p>市場獨家醫學大學臨床試驗，觀察 CBD 枕頭使用前後的總睡眠、淺眠與深睡變化。</p><div className="clinical-seven"><strong>近 7 成</strong><span>受驗者明顯改善睡眠品質</span></div></div>
          <div className="clinical-charts"><div className="sleep-chart-grid"><article><h4>總睡眠數</h4><div className="chart-bars"><div><i style={{ height: "55%" }} /><strong>約 355</strong><span>使用前</span></div><div><i className="after" style={{ height: "76%" }} /><strong>約 376</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>淺眠</h4><div className="chart-bars"><div><i style={{ height: "60%" }} /><strong>約 208</strong><span>使用前</span></div><div><i className="after" style={{ height: "88%" }} /><strong>約 230</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>深睡</h4><div className="chart-bars"><div><i style={{ height: "53%" }} /><strong>約 61</strong><span>使用前</span></div><div><i className="after" style={{ height: "68%" }} /><strong>約 67</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article></div><p>Effect of cannabidiol (CBD) containing pillow protector on sleep quality in health providers working at hospital.</p></div>
        </div>

        <div className="cbd-textile-story">
          <figure><img src="/product-pillow-front.jpg" alt="CBD 漢麻二酚表布與海鷗枕型" /><figcaption>CBD HEMP-DERIVED TEXTILE</figcaption></figure>
          <div className="cbd-textile-copy"><small>MICROCAPSULE TEXTILE TECHNOLOGY</small><h3 className="cbd-textile-title-nowrap">CBD 漢麻二酚表布</h3><h4>獨家比利時萃取微膠囊技術</h4><p>將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時緩慢且持續釋放微量 CBD 成分。</p><div className="release-path"><span>CBD 萃取</span><i>→</i><span>微膠囊化</span><i>→</i><span>編織進纖維</span></div></div>
        </div>

        <div className="safety-feature-grid"><article><span>01</span><strong>草本助眠<br />漢麻二酚</strong></article><article><span>02</span><strong>醫藥大學<br />臨床實驗證明</strong></article><article><span>03</span><strong>獨家微膠囊<br />技術</strong></article><article><span>04</span><strong>天然草本<br />技術製成</strong></article><article><span>05</span><strong>天然抗菌<br />除臭</strong></article></div>
        <p className="safety-legal">本產品為一般寢具用品，非藥品或醫療器材；實際使用感受可能因人而異。</p>
      </section>

      <section className="product-showcase section" id="products">
        <div className="collection-head">
          <div><div className="section-label"><span>06</span><p>CBD SLEEP COLLECTION</p></div><p className="eyebrow">草本忘憂系列商品</p><h2>從臥室到旅途，<br />延續熟悉的舒服。</h2></div>
        </div>
        <div className="shop-product-grid">
          {collectionProducts.map((product, index) => (
            <article className="shop-product-card" key={product.name}>
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
                {product.accessoryImage ? <img className="accessory-image" src={product.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}
                <span className="shop-product-number">0{index + 1}</span>
              </div>
              <div className="shop-product-info"><small>{product.en}</small><h3>{product.name}</h3><strong>{product.statement}</strong><p>{product.detail}</p><button className="product-detail-trigger" type="button" onClick={() => setSelectedProductIndex(index)}>查看商品連結 <span>→</span></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="care section" id="care">
        <div className="section-label"><span>07</span><p>CARE GUIDE</p></div>
        <div className="care-wash-layout"><header><p className="eyebrow">使用與保養方式</p><h2 className="care-title-lines"><span>讓舒服</span><span>陪伴更久</span></h2><p className="care-intro-lines"><span>日常以除塵、局部清潔為主；枕芯與布套請分開處理。</span><span>實際洗滌仍以商品洗標為準。</span></p><div className="care-symbols"><span>低溫</span><span>勿漂白</span><span>枕芯勿機洗</span></div></header><div className="wash-guide-list"><article><span>01</span><div><h3>無明顯髒污</h3><p>可用吸塵器清除表面的灰塵或皮屑。</p></div></article><article><span>02</span><div><h3>有局部污跡</h3><p>可用濕布沾少許肥皂，溫和地輕輕清潔。</p></div></article><article><span>03</span><div><h3>枕芯特殊材質</h3><p>勿機洗，避免直接曝曬於太陽下，或以高溫方式處理。</p></div></article><article className="wash-cover"><span>04</span><div><h3>防護布套</h3><p className="wash-instruction-lines"><span>可水洗、可乾洗；勿烘乾及漂白。</span><span>浸泡時間請勿超過 30 分鐘，建議放入大型洗衣袋後再清洗，並以低溫熨燙。</span></p></div></article><article className="wash-cover cbd"><span>05</span><div><h3>CBD 外布套</h3><p className="wash-instruction-lines"><span>可水洗、可乾洗、可低溫烘乾；勿漂白。</span><span>浸泡時間請勿超過 30 分鐘，建議放入大型洗衣袋後再清洗，並以低溫熨燙。</span></p></div></article></div></div>
        <p className="care-source-note">以上內容依品牌提供之洗滌說明整理。若商品洗標、材質標示或原廠文件另有規定，請優先依實際商品標示操作。</p>
      </section>

      <section className="news-section section" id="news">
        <div className="section-label"><span>08</span><p>PRESS &amp; NEWS</p></div>
        <header className="news-heading compact"><div><p className="eyebrow">TOP U.S. MEDIA COVERAGE</p><h2>來自美國媒體的<br />好眠新消息。</h2></div></header>
        <div className="news-grid">{newsItems.map((item, index) => <article className={`news-card ${item.tone}`} key={`${item.date}-${item.source}`}><a className="news-card-link" href={item.url} target="_blank" rel="noreferrer" aria-label={`前往 ${item.source} 閱讀原始新聞`}><div className="news-card-mark"><span>{item.short}</span><i>{String(index + 1).padStart(2, "0")}</i></div><div className="news-card-copy"><small>{item.date} · {item.source}</small><h3>{item.title}</h3><p>{item.summary}</p><em>閱讀新聞 <span>↗</span></em></div></a></article>)}</div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title"><div className="section-label"><span>09</span><p>FREQUENTLY ASKED</p></div><h2>資訊說清楚，<br />再放心選擇。</h2><p>成分、側睡、枕高與特殊族群等選購前常見問題。</p></div><div className="faq-list">{faqs.map((item, index) => <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" /></button><div className="faq-answer"><p>{item.a}</p></div></article>)}</div>
      </section>

      <section className="stores" id="stores"><div className="stores-copy"><h2>枕頭合不合適，<br />躺過才知道。</h2><p className="store-intro-lines"><span>每個人的肩寬、睡姿、床墊軟硬與習慣都不同。</span><span>歡迎至上品寢具門市親自試躺，由專業人員陪你找到更適合自己的枕頭高度與睡感。</span></p><div className="hero-actions"><a className="button primary" href="mailto:service@shangpin-bedding.tw?subject=查詢上品寢具全台門市">查看全台門市 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=預約草本忘憂枕試躺">預約門市體驗 →</a></div></div><div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡感相談<br />仰睡・側睡實際感受</p></div></section>

      <footer><div className="footer-top"><a className="footer-logo" href="#top" aria-label="GLORY 葛洛麗名床寢具首頁"><img src="/glory-logo.jpg" alt="GLORY 1953 德國葛洛麗名床寢具" /></a><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="#features">產品特色</a><a href="#endorsements">品牌推薦</a><a href="#pillow">枕型設計</a><a href="#structure">材質結構</a><a href="#safety">材質檢驗</a><a href="#products">系列商品</a><a href="#news">新聞報導</a><a href="#faq">常見問題</a><a href="#stores">門市體驗</a></div><div className="footer-bottom footer-disclaimer"><span>© 2026 GLORY BEDDING</span><span>本產品為一般寢具用品，非藥品或醫療器材，不具診斷、治療、預防疾病或改善失眠之功效。產品特色與材質說明，請以實際商品標示、原廠資料及檢驗報告為準。</span></div></footer>
    </main>
  );
}
