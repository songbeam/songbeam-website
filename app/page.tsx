"use client";

import { useState } from "react";

const faqs = [
  {
    q: "CBD 草本忘憂系列是藥品嗎？",
    a: "不是。本系列為寢具商品，設計重點在於親膚材質、貼合支撐與舒適的睡前使用感受，不具醫療用途，也不以治療或改善疾病為訴求。",
  },
  {
    q: "產品會讓人產生依賴或精神作用嗎？",
    a: "產品定位為日常寢具，訴求舒適睡眠情境，並非藥品或精神作用產品。實際商品成分、檢驗與適用資訊請以商品標示及門市人員說明為準。",
  },
  {
    q: "我該怎麼選擇適合的枕型？",
    a: "可依主要睡姿、肩寬與習慣枕高選擇。仰睡重視頸部承托，側睡需要足夠高度填補肩頸落差；若不確定，建議到門市實際躺試。",
  },
  {
    q: "枕套可以清洗嗎？",
    a: "可拆式外布套可依洗標清潔。為延長材質壽命，建議使用中性洗劑、裝洗衣袋並自然陰乾；枕芯請依商品保養標示處理。",
  },
];

function LeafMark() {
  return <span className="leaf-mark" aria-hidden="true"><i /><i /></span>;
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
          <span className="brand-en">SHANG PIN</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#concept" onClick={closeMenu}>系列概念</a>
          <a href="#features" onClick={closeMenu}>產品特色</a>
          <a href="#shapes" onClick={closeMenu}>枕型設計</a>
          <a href="#faq" onClick={closeMenu}>常見問題</a>
          <a href="#stores" onClick={closeMenu}>門市體驗</a>
          <a className="nav-buy" href="#buy" onClick={closeMenu}>立即購買</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">CBD HERBAL COMFORT COLLECTION</p>
          <h1>把夜晚，<br />還給舒服的自己。</h1>
          <p className="hero-copy">不追求神奇的一夜好眠。從貼合的支撐、柔和的觸感開始，陪你慢慢回到安穩的睡前日常。</p>
          <div className="hero-actions">
            <a className="button primary" href="#shapes">探索枕型 <span>↗</span></a>
            <a className="text-link" href="#concept">認識系列概念 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span>01</span><p>草本靈感<br />舒適支撐</p></div>
      </section>

      <section className="manifesto section" id="concept">
        <div className="section-number">01 / SERIES CONCEPT</div>
        <div className="manifesto-grid">
          <div>
            <LeafMark />
            <p className="kicker">忘憂，不是忘記。</p>
            <h2>是讓今天，<br />在睡前輕輕放下。</h2>
          </div>
          <div className="manifesto-copy">
            <p className="lead">我們相信，好的睡眠日常不該建立在誇大的承諾上，而是來自每晚都能感受到的舒適。</p>
            <p>上品 CBD 草本忘憂系列，以草本放鬆概念為靈感，結合親膚面料、透氣結構與符合人體工學的枕型設計。當頭頸被穩穩承托，身體便有機會找到自己的放鬆節奏。</p>
            <p className="caption">本系列為寢具商品，非藥品，無醫療或療效用途。</p>
          </div>
        </div>
      </section>

      <section className="ritual">
        <div className="ritual-intro">
          <p className="eyebrow">A QUIETER WAY TO REST</p>
          <h2>睡眠，是一段<br />慢慢安靜的過程。</h2>
        </div>
        <div className="ritual-steps">
          <article><span>18:30</span><div className="ritual-icon sun" /><h3>讓光線柔和下來</h3><p>降低空間亮度，讓一天的節奏逐漸放慢。</p></article>
          <article><span>21:00</span><div className="ritual-icon cup">⌁</div><h3>留一段自己的時間</h3><p>把訊息放遠，替身體預留轉換的片刻。</p></article>
          <article><span>23:00</span><div className="ritual-icon moon" /><h3>找到舒服的支撐</h3><p>讓枕頭承接頭頸，把注意力交還給呼吸。</p></article>
        </div>
      </section>

      <section className="features section" id="features">
        <div className="section-heading">
          <div className="section-number">02 / MATERIAL &amp; COMFORT</div>
          <h2>舒服，來自每一層<br />恰到好處的選擇。</h2>
          <p>不是堆疊規格，而是讓每一種材質，都為睡眠感受多做一點。</p>
        </div>
        <div className="feature-layout">
          <div className="pillow-cutaway" aria-label="枕頭四層舒適結構示意圖">
            <div className="layer layer-1"><span>01</span></div>
            <div className="layer layer-2"><span>02</span></div>
            <div className="layer layer-3"><span>03</span></div>
            <div className="layer layer-4"><span>04</span></div>
          </div>
          <div className="feature-list">
            <article><span className="feature-no">01</span><div><h3>親膚柔觸表布</h3><p>細緻、柔和的第一層接觸，減少睡前肌膚的負擔感。</p></div></article>
            <article><span className="feature-no">02</span><div><h3>草本舒適層</h3><p>以 CBD 草本概念融入日常寢具，營造平靜、自然的睡眠氛圍。</p></div></article>
            <article><span className="feature-no">03</span><div><h3>釋壓支撐核心</h3><p>回應頭頸曲線，均衡承托，翻身時也保有穩定支撐。</p></div></article>
            <article><span className="feature-no">04</span><div><h3>透氣循環結構</h3><p>幫助空氣流動，減少悶熱堆積，維持乾爽睡感。</p></div></article>
          </div>
        </div>
      </section>

      <section className="shapes section" id="shapes">
        <div className="section-heading compact">
          <div className="section-number">03 / PILLOW DESIGN</div>
          <h2>你怎麼睡，<br />枕頭就怎麼承接。</h2>
        </div>
        <div className="shape-grid">
          <article className="shape-card sage">
            <div className="shape-top"><span>01</span><span>BACK SLEEP</span></div>
            <div className="pillow-form back"><i /><b /></div>
            <div className="shape-body"><p>仰睡推薦</p><h3>舒眠曲線枕</h3><p className="desc">中央微凹設計穩定頭部，頸部承托區自然貼合頸椎曲線。</p><div className="tags"><span>低至中枕高</span><span>穩定承托</span></div></div>
          </article>
          <article className="shape-card fog">
            <div className="shape-top"><span>02</span><span>SIDE SLEEP</span></div>
            <div className="pillow-form side"><i /><b /></div>
            <div className="shape-body"><p>側睡推薦</p><h3>側眠支撐枕</h3><p className="desc">加高兩側填補肩頸空間，為習慣側睡的人保留舒適呼吸區。</p><div className="tags"><span>中至高枕高</span><span>肩頸貼合</span></div></div>
          </article>
        </div>
        <div className="shape-help"><span>不知道適合哪一款？</span><p>每個人的肩寬與習慣不同，實際躺過最準確。</p><a href="#stores">預約門市試躺 →</a></div>
      </section>

      <section className="care section">
        <div className="care-image"><div className="linen"><span /></div></div>
        <div className="care-copy">
          <div className="section-number">04 / DAILY CARE</div>
          <p className="kicker">讓舒服，陪你久一點。</p>
          <h2>簡單照顧，<br />每天都像剛開始。</h2>
          <ul>
            <li><span>01</span><div><h3>定期通風</h3><p>保持臥室空氣流動，讓枕芯維持乾爽。</p></div></li>
            <li><span>02</span><div><h3>外布套單獨清潔</h3><p>依洗標溫和洗滌，自然陰乾，保留柔順觸感。</p></div></li>
            <li><span>03</span><div><h3>輕拍回復</h3><p>每日起床後輕拍枕體，幫助恢復蓬鬆與支撐。</p></div></li>
          </ul>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="faq-title">
          <div className="section-number">05 / FAQ</div>
          <h2>安心了解，<br />再好好選擇。</h2>
          <p>關於 CBD 草本忘憂系列，你可能會想知道的事。</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><i aria-hidden="true" />
              </button>
              <div className="faq-answer"><p>{item.a}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="stores" id="stores">
        <div className="stores-card">
          <p className="eyebrow">FEEL IT IN PERSON</p>
          <h2>讓身體告訴你，<br />什麼才是剛剛好。</h2>
          <p>歡迎到上品寢具門市，讓專人依你的睡姿與肩頸條件，陪你找到適合的高度與支撐。</p>
          <a className="button light" href="#store-list">尋找鄰近門市 <span>↗</span></a>
        </div>
        <div className="stores-detail" id="store-list">
          <div><span>全台門市</span><strong>20+</strong><p>提供專業枕型諮詢</p></div>
          <div><span>體驗時間</span><strong>15<small>min</small></strong><p>從仰睡、側睡實際感受</p></div>
          <div><span>預約服務</span><strong>1:1</strong><p>專人陪同安心選擇</p></div>
        </div>
      </section>

      <section className="purchase section" id="buy">
        <div className="purchase-art"><div className="mini-pillow" /></div>
        <div className="purchase-copy">
          <p className="eyebrow">CBD HERBAL COMFORT COLLECTION</p>
          <h2>今晚，從一顆<br />舒服的枕頭開始。</h2>
          <p>上品 CBD 草本忘憂系列</p>
          <div className="price"><span>系列優惠價</span><strong>NT$ 3,980</strong><del>NT$ 4,680</del></div>
          <a className="button dark" href="mailto:service@shangpin-bedding.tw?subject=詢問 CBD 草本忘憂系列">立即洽詢購買 <span>↗</span></a>
          <p className="fineprint">實際售價、規格與庫存依各門市及正式銷售頁資訊為準。</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SHANG PIN BEDDING</span><p>好好睡，是我們想陪你完成的日常。</p></div>
        <div className="footer-links"><div><strong>系列探索</strong><a href="#concept">系列概念</a><a href="#features">產品特色</a><a href="#shapes">枕型設計</a></div><div><strong>購買服務</strong><a href="#faq">常見問題</a><a href="#stores">門市體驗</a><a href="#buy">立即購買</a></div></div>
        <div className="footer-bottom"><span>© 2026 SHANG PIN BEDDING</span><span>本系列為寢具商品，非藥品，無醫療或療效用途。</span></div>
      </footer>
    </main>
  );
}
