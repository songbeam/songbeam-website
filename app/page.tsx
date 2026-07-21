"use client";

import { useState } from "react";

const sleepProfiles = {
  back: { label: "仰睡為主", title: "穩定頭位，留意頸部承托", copy: "仰睡時，枕頭中央不宜過高；需要以自然凹槽承接後腦，並讓頸部維持原有曲線。", focus: "建議感受：中央凹槽、低至中枕高" },
  side: { label: "側睡為主", title: "填補肩頸落差，保持水平", copy: "側睡時，肩寬會形成較大的床面落差；枕頭兩側需要足夠高度，讓頭部不向下傾斜。", focus: "建議感受：兩側承托、中至高枕高" },
  mixed: { label: "經常翻身", title: "在不同區域之間順暢轉換", copy: "混合睡姿需要中央與兩側各自有明確功能，翻身時也要避免突然的高度差造成不適。", focus: "建議感受：分區曲線、回彈穩定" },
};

const faqs = [
  { q: "第一次到門市，睡眠顧問會怎麼協助我？", a: "顧問會先了解主要睡姿、肩寬、習慣枕高與目前的不舒服，再陪你分別試躺仰睡、側睡，觀察頭頸是否維持自然排列。整體體驗約 15 分鐘。" },
  { q: "海鷗護脊枕適合所有人嗎？", a: "枕型能提供仰睡與側睡分區承托，但每個人的肩寬、床墊軟硬與枕高習慣不同。最準確的方法仍是到門市實際試躺，而不是只依身高或網路規格判斷。" },
  { q: "親水記憶棉和一般記憶棉有何不同？", a: "親水記憶棉著重透氣與水氣調節，藉由吸收並散發熱能減少悶熱感，同時保留記憶棉貼合頭頸曲線的特性。" },
  { q: "CBD 草本忘憂系列是藥品嗎？", a: "不是。本系列為寢具商品，CBD 僅作為草本纖維應用概念；產品重點為表布、枕芯與枕型帶來的舒適感受，不具醫療用途或療效。" },
  { q: "表布與枕芯要如何保養？", a: "外布套請依洗標溫和清潔並自然陰乾；枕芯避免直接水洗與曝曬。特殊機能表布的清潔方式與耐洗資訊，請以該品項正式標示為準。" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState<keyof typeof sleepProfiles>("back");
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);
  const activeProfile = sleepProfiles[profile];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="上品寢具首頁" onClick={closeMenu}><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#consultation" onClick={closeMenu}>睡眠相談</a>
          <a href="#diagnosis" onClick={closeMenu}>睡姿診斷</a>
          <a href="#pillow" onClick={closeMenu}>枕型設計</a>
          <a href="#material" onClick={closeMenu}>材質故事</a>
          <a href="#advisor" onClick={closeMenu}>專業顧問</a>
          <a href="#faq" onClick={closeMenu}>常見問題</a>
          <a className="nav-cta" href="#stores" onClick={closeMenu}>預約試躺</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="overline">SHANG PIN SLEEP CONSULTATION</p>
          <h1>今晚，找到肩頸<br />真正放鬆的位置。</h1>
          <p className="hero-lead">從睡姿、肩寬與習慣枕高出發，上品睡眠顧問陪你找到適合自己的支撐。</p>
          <div className="hero-actions"><a className="button primary" href="#stores">預約睡眠諮詢 <span>↗</span></a><a className="text-link" href="#pillow">認識草本忘憂親水枕 <span>↓</span></a></div>
          <div className="hero-credentials"><span>01<br /><b>睡姿觀察</b></span><span>02<br /><b>肩頸評估</b></span><span>03<br /><b>實際試躺</b></span></div>
        </div>
        <aside className="hero-note"><p>上品睡眠相談室</p><strong>不是推薦最高級的枕頭，<br />而是找到最適合你的高度。</strong></aside>
      </section>

      <section className="consultation section" id="consultation">
        <div className="section-label"><span>01</span><p>SLEEP CONSULTATION</p></div>
        <div className="consultation-intro">
          <div><p className="eyebrow">日系睡眠相談室</p><h2>選枕頭之前，<br />先好好理解你的睡姿。</h2></div>
          <div><p className="lead">真正的專業，不是用一組規格替每個人下結論，而是先聽見你的睡眠習慣。</p><p>枕高會受到肩寬、主要睡姿、床墊軟硬與個人習慣共同影響。上品睡眠顧問透過簡單對談與實際試躺，陪你比較不同支撐區域，找出身體感覺自然的位置。</p></div>
        </div>
        <div className="consultation-steps">
          <article><span>01</span><div className="step-line head" /><h3>了解睡眠習慣</h3><p>主要睡姿、翻身頻率、習慣枕高，以及目前最在意的感受。</p></article>
          <article><span>02</span><div className="step-line shoulder" /><h3>觀察肩頸條件</h3><p>從肩寬與頭頸落差，建立適合試躺的高度範圍。</p></article>
          <article><span>03</span><div className="step-line pillow" /><h3>比較分區承托</h3><p>分別以仰睡、側睡感受中央凹槽與兩側支撐。</p></article>
          <article><span>04</span><div className="step-line check" /><h3>確認自然排列</h3><p>讓頭、頸與脊椎回到平順位置，而不是追求越高或越硬。</p></article>
        </div>
      </section>

      <section className="diagnosis" id="diagnosis">
        <div className="diagnosis-copy">
          <div className="section-label light"><span>02</span><p>QUICK SLEEP PROFILE</p></div>
          <p className="eyebrow pale">一分鐘睡姿理解</p>
          <h2>你的夜晚，<br />多半怎麼睡？</h2>
          <p>先選擇最接近自己的睡姿，看看試枕時應該留意什麼。這不是醫療診斷，而是到門市前的簡單準備。</p>
        </div>
        <div className="profile-panel">
          <div className="profile-tabs" role="tablist" aria-label="選擇主要睡姿">
            {(Object.keys(sleepProfiles) as Array<keyof typeof sleepProfiles>).map((key) => <button key={key} type="button" role="tab" aria-selected={profile === key} className={profile === key ? "active" : ""} onClick={() => setProfile(key)}>{sleepProfiles[key].label}</button>)}
          </div>
          <div className="profile-result" role="tabpanel">
            <div className={`posture-icon ${profile}`} aria-hidden="true"><i /><b /></div>
            <div><span>CONSULTANT NOTE</span><h3>{activeProfile.title}</h3><p>{activeProfile.copy}</p><strong>{activeProfile.focus}</strong></div>
          </div>
        </div>
      </section>

      <section className="pillow-section section" id="pillow">
        <div className="section-label"><span>03</span><p>PILLOW DESIGN</p></div>
        <div className="pillow-heading"><div><p className="eyebrow">草本忘憂好眠親水枕</p><h2>讓每一個區域，<br />承接它該照顧的位置。</h2></div><p>海鷗式輪廓不是造型裝飾，而是把仰睡、側睡與頸部承托安排在一顆枕頭上。</p></div>
        <div className="product-stage">
          <div className="product-photo"><img src="/product-pillow-angle.jpg" alt="草本忘憂好眠親水枕實品" /><span className="callout c1"><b>01</b> 中央凹槽<br />穩定仰睡頭位</span><span className="callout c2"><b>02</b> 頸部曲線<br />自然貼合承托</span><span className="callout c3"><b>03</b> 兩側枕區<br />回應側睡落差</span></div>
          <div className="product-details">
            <article><span>01</span><div><h3>海鷗式釋壓曲線</h3><p>中央微凹、兩側展翼，讓頭部與肩頸在不同睡姿中都有清楚落點。</p></div></article>
            <article><span>02</span><div><h3>親水記憶棉</h3><p>兼顧貼合、回彈與水氣調節，減少傳統記憶棉容易產生的悶熱感。</p></div></article>
            <article><span>03</span><div><h3>仰睡・側睡分區</h3><p>一顆枕頭提供不同承托高度，讓翻身時不必重新尋找舒適位置。</p></div></article>
            <a className="button dark" href="#stores">到門市實際感受 <span>↗</span></a>
          </div>
        </div>
        <div className="product-views"><figure><img src="/product-pillow-front.jpg" alt="親水枕正面曲線" /><figcaption>正面｜中央穩定區</figcaption></figure><figure><img src="/product-pillow-side.jpg" alt="親水枕側面高度" /><figcaption>側面｜高度與回彈</figcaption></figure></div>
      </section>

      <section className="material section" id="material">
        <div className="section-label"><span>04</span><p>MATERIAL STORY</p></div>
        <div className="material-grid">
          <div className="material-title"><p className="eyebrow">CBD HERBAL COMFORT</p><h2>把草本概念，<br />安靜地留在表布裡。</h2><p>CBD 不需要成為誇張的視覺主角。它只是系列材質故事的一部分，與透氣枕芯、人體工學枕型一起，構成更舒服的睡前接觸。</p></div>
          <div className="material-process">
            <article><span>01</span><div className="material-orb herb"><i /></div><h3>草本來源概念</h3><p>選擇可應用於寢具纖維的漢麻來源成分。</p></article>
            <article><span>02</span><div className="material-orb capsule"><i /><i /><i /></div><h3>微膠囊包覆</h3><p>以微膠囊技術形成細微載體，融入針織表布。</p></article>
            <article><span>03</span><div className="material-orb touch"><i /></div><h3>日常柔和接觸</h3><p>透過躺臥與翻身時的接觸，讓機能織物融入睡眠日常。</p></article>
          </div>
        </div>
        <p className="legal-note">本系列為寢具商品，非藥品，無醫療或療效用途；成分、規格、耐洗與檢驗資訊以正式商品文件為準。</p>
      </section>

      <section className="advisor" id="advisor">
        <div className="advisor-photo"><div className="advisor-figure"><span /><i /></div></div>
        <div className="advisor-copy">
          <div className="section-label light"><span>05</span><p>PROFESSIONAL ADVISORY</p></div>
          <p className="eyebrow pale">專業顧問背景</p>
          <h2>枕頭的設計，<br />從理解人體開始。</h2>
          <blockquote>不是把頸部固定住，<br />而是讓它在睡眠中保有自然的位置。</blockquote>
          <div className="advisor-credit"><span>指導開發</span><div><strong>林國偉 博士</strong><p>美國 Palmer 脊骨神經醫學博士</p></div></div>
          <p className="advisor-text">依品牌資料，從脊椎排列、頭頸受力與睡姿支撐參與枕型指導。網站聚焦於人體工學與產品使用理解，不以專業背景作療效保證。</p>
        </div>
      </section>

      <section className="collection section">
        <div className="section-label"><span>06</span><p>BEDTIME COLLECTION</p></div>
        <div className="collection-heading"><h2>把熟悉的舒適感，<br />帶進更多生活片刻。</h2><p>從日常臥室到移動旅程，系列以相同的柔和觸感陪伴不同休息場景。</p></div>
        <div className="collection-grid">
          <article className="collection-main"><img src="/product-bedding-room.png" alt="上品寢具床組情境" /><div><span>01 / BEDDING</span><h3>寢具床組</h3><p>低彩度灰藍與霧灰，讓臥室回到安靜。</p></div></article>
          <article><img src="/product-protector.jpg" alt="床墊與枕頭保潔墊組" /><div><span>02 / PROTECTOR</span><h3>保潔墊組</h3><p>為床墊與枕頭多留一層乾淨保護。</p></div></article>
          <article><img src="/product-travel-pillow.jpg" alt="旅行頸枕" /><div><span>03 / TRAVEL</span><h3>旅行頸枕</h3><p>移動途中，也有熟悉的頸部承托。</p></div></article>
          <article><img src="/product-eye-mask.jpg" alt="舒眠眼罩" /><div><span>04 / EYE MASK</span><h3>舒眠眼罩</h3><p>減少光線干擾，留一小段安靜休息。</p></div></article>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title"><div className="section-label"><span>07</span><p>FREQUENTLY ASKED</p></div><h2>安心了解，<br />再慢慢選擇。</h2><p>關於試躺、枕型、材質與保養，睡眠顧問最常被問到的事。</p></div>
        <div className="faq-list">{faqs.map((item, index) => <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" /></button><div className="faq-answer"><p>{item.a}</p></div></article>)}</div>
      </section>

      <section className="stores" id="stores">
        <div className="stores-copy"><p className="overline">PRIVATE SLEEP CONSULTATION</p><h2>留十五分鐘，<br />好好試一顆枕頭。</h2><p>歡迎到上品寢具門市，由睡眠顧問陪你從仰睡、側睡到翻身，實際找到適合的高度與承托。</p><div className="hero-actions"><a className="button primary" href="mailto:service@shangpin-bedding.tw?subject=預約草本忘憂親水枕睡眠諮詢">預約門市諮詢 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=詢問草本忘憂系列">洽詢系列商品 →</a></div></div>
        <div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡眠相談<br />仰睡・側睡實際感受</p></div>
      </section>

      <footer><div className="footer-top"><div className="brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING CO., LTD</span></div><p>讓每一個人，都能找到身體真正舒服的位置。</p></div><div className="footer-nav"><a href="#consultation">睡眠相談</a><a href="#diagnosis">睡姿診斷</a><a href="#pillow">枕型設計</a><a href="#material">材質故事</a><a href="#advisor">專業顧問</a><a href="#faq">常見問題</a></div><div className="footer-bottom"><span>© 2026 SONG BEAM BEDDING</span><span>本系列為寢具商品，非藥品，無醫療或療效用途。</span></div></footer>
    </main>
  );
}
