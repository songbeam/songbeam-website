"use client";

import { useState } from "react";

const faqs = [
  {
    q: "CBD 草本忘憂系列是藥品嗎？",
    a: "不是。本系列為寢具商品，重點是表布、枕芯與枕型帶來的日常舒適感受，不具醫療用途，也不以治療失眠、焦慮或疼痛為訴求。",
  },
  {
    q: "微膠囊織物技術是什麼？",
    a: "依品牌資料，將選用成分包覆為微膠囊並應用於針織纖維，透過日常接觸與摩擦逐步作用。實際成分、含量、耐洗次數與檢驗資訊，請以正式商品標示為準。",
  },
  {
    q: "親水記憶棉和一般記憶棉有何不同？",
    a: "親水記憶棉著重透氣與水氣調節，藉由吸收並散發熱能，減少睡眠時的悶熱感；同時保留記憶棉貼合頭頸曲線的特性。",
  },
  {
    q: "海鷗護脊枕適合什麼睡姿？",
    a: "中央圓弧凹槽穩定仰睡頭位，兩側較完整的承托區可回應側睡時的肩頸落差。每個人的肩寬與枕高習慣不同，仍建議到門市實際躺試。",
  },
  {
    q: "表布與枕芯要如何保養？",
    a: "外布套請依洗標溫和清潔並自然陰乾；枕芯避免直接水洗與曝曬。若商品含特殊機能表布，清潔方式與耐洗資訊應以該品項標示為準。",
  },
];

function CapsuleMark() {
  return <span className="capsule-mark" aria-hidden="true"><i /><i /><i /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="上品寢具首頁" onClick={closeMenu}>
          <span className="brand-cn">上品寢具</span>
          <span className="brand-en">SONG BEAM BEDDING</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#concept" onClick={closeMenu}>系列理念</a>
          <a href="#technology" onClick={closeMenu}>技術核心</a>
          <a href="#pillow" onClick={closeMenu}>親水枕</a>
          <a href="#collection" onClick={closeMenu}>生活系列</a>
          <a href="#research" onClick={closeMenu}>研發背景</a>
          <a href="#faq" onClick={closeMenu}>常見問題</a>
          <a className="nav-buy" href="#stores" onClick={closeMenu}>門市體驗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">CBD HERBAL COMFORT / 2025</p>
          <h1>草本忘憂<br />好眠親水枕</h1>
          <p className="hero-lead">把草本纖維科技、親水記憶棉與海鷗式釋壓曲線，收進一顆安靜而穩定的枕頭。</p>
          <div className="hero-actions">
            <a className="button button-light" href="#pillow">認識親水枕 <span>↗</span></a>
            <a className="quiet-link" href="#technology">探索微膠囊技術 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-product-card">
          <img src="/product-pillow-angle.jpg" alt="草本忘憂親水枕側面實品" />
          <div><span>海鷗式釋壓造型</span><strong>仰睡・側睡都能穩定承托</strong></div>
        </div>
      </section>

      <section className="concept section" id="concept">
        <div className="section-index"><span>01</span><p>SERIES PHILOSOPHY</p></div>
        <div className="concept-grid">
          <div className="concept-title">
            <CapsuleMark />
            <p className="kicker">NATURE × MATERIAL × FORM</p>
            <h2>不靠誇張承諾，<br />把舒服做進每一層。</h2>
          </div>
          <div className="concept-body">
            <p className="large">投影片裡的「草本忘憂」，核心不是神奇療效，而是讓天然靈感、纖維技術與符合人體工學的枕型，共同回應一晚的舒適。</p>
            <p>系列以漢麻來源 CBD 概念為靈感，將微膠囊技術應用於針織表布；內層選用親水記憶棉，外型則以特殊海鷗曲線分配頭頸壓力。三者相互配合，讓仰睡與側睡都能找到合適的支撐區。</p>
            <div className="truth-note"><span>關於 CBD</span><p>CBD（漢麻二酚）是漢麻植株中的成分之一，不等同造成迷幻感的物質。此系列為纖維與寢具應用，非吸食性產品。</p></div>
          </div>
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="tech-intro">
          <div className="section-index inverse"><span>02</span><p>MICROCAPSULE TEXTILE</p></div>
          <p className="kicker pale">投影片指定核心技術</p>
          <h2>把草本概念，<br />留在纖維之間。</h2>
          <p>依品牌資料，選用成分經包覆形成微膠囊，再應用於針織纖維；日常躺臥、翻身時產生的接觸與摩擦，讓織物機能以更細緻的方式融入睡眠。</p>
        </div>
        <div className="tech-process" aria-label="微膠囊織物技術三階段示意">
          <article><div className="tech-orb orb-leaf"><i /></div><span>01</span><h3>草本來源</h3><p>從漢麻來源概念出發，選擇可運用於纖維的成分。</p></article>
          <article><div className="tech-orb orb-capsule"><i /><i /><i /></div><span>02</span><h3>微膠囊包覆</h3><p>以微膠囊技術包覆，成為可被應用於織物的細微載體。</p></article>
          <article><div className="tech-orb orb-fiber"><i /><i /><i /></div><span>03</span><h3>編織進纖維</h3><p>融入針織表布，透過日常接觸與摩擦逐步作用。</p></article>
        </div>
        <p className="tech-disclaimer">技術內容依使用者提供之品牌投影片整理；成分、規格、耐洗與檢驗資訊以正式商品文件為準。</p>
      </section>

      <section className="pillow section" id="pillow">
        <div className="section-index"><span>03</span><p>HYDROPHILIC PILLOW</p></div>
        <div className="pillow-heading">
          <div><p className="kicker">親水枕 / 海鷗護脊枕</p><h2>一顆枕頭，<br />三個剛好的回應。</h2></div>
          <p>從睡眠溫度、頭頸曲線到不同睡姿，讓材料與造型各自完成它該做的事。</p>
        </div>
        <div className="pillow-showcase">
          <div className="pillow-gallery">
            <figure className="gallery-main"><img src="/product-pillow-front.jpg" alt="草本忘憂親水枕正面實品" /><figcaption>FRONT / CENTRAL CONTOUR</figcaption></figure>
            <figure><img src="/product-pillow-angle.jpg" alt="草本忘憂親水枕斜側實品" /><figcaption>ANGLE / SHOULDER SUPPORT</figcaption></figure>
            <figure><img src="/product-pillow-side.jpg" alt="草本忘憂親水枕側面高度實品" /><figcaption>SIDE / HEIGHT PROFILE</figcaption></figure>
          </div>
          <div className="pillow-features">
            <article><span>01</span><div><h3>親水涼爽性枕芯</h3><p>親水記憶棉著重透氣與水氣調節，協助吸收並散發熱能，降低悶熱感。</p></div></article>
            <article><span>02</span><div><h3>特殊海鷗式釋壓曲線</h3><p>中央凹槽穩定頭位，頸部承托區順著生理曲線回應，讓肩頸自然落下。</p></div></article>
            <article><span>03</span><div><h3>仰睡、側睡雙向支撐</h3><p>不同高度區域回應仰睡與側睡的落差，減少反覆尋找枕位的不安定感。</p></div></article>
            <a className="button button-dark" href="#stores">預約門市試躺 <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="sleep-map">
        <div className="sleep-map-copy">
          <p className="eyebrow">FORM FOLLOWS SLEEP</p>
          <h2>不是只有高與低，<br />而是每個區域都知道<br />該承接哪裡。</h2>
        </div>
        <div className="pillow-diagram" aria-label="親水枕支撐區域示意圖">
          <div className="diagram-pillow"><i className="zone zone-center" /><i className="zone zone-neck" /><i className="zone zone-side left" /><i className="zone zone-side right" /></div>
          <span className="label label-center"><b>01</b> 穩定頭位</span>
          <span className="label label-neck"><b>02</b> 頸部承托</span>
          <span className="label label-side"><b>03</b> 側睡支撐</span>
        </div>
      </section>

      <section className="collection section" id="collection">
        <div className="section-index"><span>04</span><p>HERBAL COMFORT COLLECTION</p></div>
        <div className="collection-heading"><h2>從臥室到旅程，<br />讓熟悉的舒適感延續。</h2><p>依投影片所列品項，草本忘憂不只是一顆枕頭，也是一套可以進入不同生活場景的寢具系列。</p></div>
        <div className="collection-grid">
          <article className="collection-card wide"><div className="collection-image"><img src="/product-protector.jpg" alt="草本忘憂床墊與枕頭保潔墊組" /></div><div className="collection-copy"><span>01 / PROTECTOR SET</span><h3>保潔墊組</h3><p>床墊保潔墊＋枕頭保潔墊，阻隔日常髒污與汗水，為寢具多留一層乾淨保護。</p><small>投影片參考售價：NT$ 3,900 起</small></div></article>
          <article className="collection-card"><div className="collection-image sage"><img src="/product-travel-pillow.jpg" alt="草本忘憂旅行頸枕" /></div><div className="collection-copy"><span>02 / TRAVEL</span><h3>隨身旅行頸枕</h3><p>長途搭乘飛機或火車時，也能為頸部留住熟悉的承托。</p></div></article>
          <article className="collection-card"><div className="collection-image"><img src="/product-eye-mask.jpg" alt="草本忘憂旅行眼罩" /></div><div className="collection-copy"><span>03 / EYE MASK</span><h3>舒眠眼罩</h3><p>減少環境光線干擾，讓移動途中的休息更安靜。</p></div></article>
          <article className="collection-card bedding"><div className="collection-image"><img src="/product-bedding-room.png" alt="上品寢具床組情境" /></div><div className="collection-copy"><span>04 / BEDDING</span><h3>寢具床組</h3><p>灰藍與霧灰層次，把系列的沉靜感延伸到整間臥室。</p></div></article>
        </div>
        <p className="collection-note">品項、尺寸、售價與供貨狀況請以門市及正式銷售資訊為準。</p>
      </section>

      <section className="research" id="research">
        <div className="research-head">
          <div className="section-index inverse"><span>05</span><p>DEVELOPMENT &amp; EVIDENCE</p></div>
          <p className="kicker pale">從人體工學出發</p>
          <h2>先理解肩頸，<br />再設計一顆枕頭。</h2>
        </div>
        <div className="research-grid">
          <article className="expert"><span>GUIDED DEVELOPMENT</span><strong>美國 Palmer<br />脊骨神經醫學博士</strong><h3>林國偉 博士</h3><p>依品牌投影片所載，參與草本忘憂好眠親水枕之指導開發，從脊椎排列、頭頸受力與睡姿支撐切入枕型設計。</p></article>
          <article className="study"><span>REFERENCE STUDY / 2022.06.10</span><h3>睡眠品質使用觀察</h3><p>投影片附有中國醫藥大學護理學系之研究摘要，題為「漢麻二酚（Cannabidiol, CBD）枕頭保潔墊改善醫療工作人員睡眠品質之成效」，並呈現總睡眠、淺眠與深睡時間之比較。</p><small>網站不據此宣稱治療效果；完整研究設計、樣本與統計結果應以正式研究文件為準。</small></article>
          <article className="principle"><span>OUR PRINCIPLE</span><blockquote>研究資料用來理解產品，<br />不拿來承諾每一個人的睡眠結果。</blockquote><p>因此網站聚焦在可被感受的材質、透氣、枕型與支撐，保留消費者做出安心選擇所需要的界線。</p></article>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title"><div className="section-index"><span>06</span><p>FREQUENTLY ASKED</p></div><h2>把重要的事，<br />說得更清楚。</h2><p>關於材質、技術與使用方式，先了解，再選擇。</p></div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" /></button>
              <div className="faq-answer"><p>{item.a}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="stores" id="stores">
        <div className="stores-inner">
          <p className="eyebrow">FEEL BEFORE YOU CHOOSE</p>
          <h2>真正適合的枕頭，<br />讓身體躺過才知道。</h2>
          <p>到上品寢具門市，實際感受親水記憶棉的回彈、海鷗曲線的承托，以及仰睡與側睡的高度差異。</p>
          <div className="store-actions"><a className="button button-light" href="mailto:service@shangpin-bedding.tw?subject=預約草本忘憂親水枕試躺">預約試躺 <span>↗</span></a><a className="quiet-link" href="mailto:service@shangpin-bedding.tw?subject=詢問草本忘憂系列">洽詢系列商品 →</a></div>
        </div>
        <div className="store-promise"><span>15 min</span><p>試躺仰睡、側睡<br />找到適合自己的支撐</p></div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING CO., LTD</span><p>草本忘憂系列｜讓材料與枕型，陪你回到舒服的睡眠日常。</p></div>
        <div className="footer-links"><a href="#concept">系列理念</a><a href="#technology">技術核心</a><a href="#pillow">親水枕</a><a href="#collection">生活系列</a><a href="#research">研發背景</a><a href="#faq">常見問題</a></div>
        <div className="footer-bottom"><span>© 2026 SONG BEAM BEDDING</span><span>本系列為寢具商品，非藥品，無醫療或療效用途；內容以正式商品標示與檢驗文件為準。</span></div>
      </footer>
    </main>
  );
}
