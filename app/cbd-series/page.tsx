import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBD 草本忘憂系列介紹｜上品寢具",
  description: "了解 CBD 草本忘憂系列的材質概念、微膠囊機能表布、親水記憶棉與海鷗式支撐設計，以及清潔與耐洗資訊。",
};

const comfortMoments = [
  ["01", "放鬆氛圍", "以低彩度色彩、柔和觸感與安靜寢室情境，營造舒適放鬆的睡眠氛圍。"],
  ["02", "卸下疲憊", "讓貼近肌膚的表布與包覆睡感，陪伴身體慢慢卸下白天累積的疲憊。"],
  ["03", "安穩睡感", "透過回彈枕芯與分區曲線，提供安穩、舒適且不過度下陷的睡眠感受。"],
  ["04", "每日陪伴", "不強調神奇改變，而是成為每天睡前都能重複建立的放鬆陪伴。"],
];

export default function CbdSeriesPage() {
  return (
    <main className="series-page">
      <header className="site-header series-header">
        <a className="brand brand-logo" href="/" aria-label="返回上品寢具首頁"><img src="/shangpin-logo.png" alt="上品寢具館 SONG BEAM International Bedding Gallery" /></a>
        <nav className="series-nav" aria-label="系列頁導覽"><a href="/">首頁</a><a href="/#consultation">睡眠相談</a><a href="#where">材質位置</a><a href="#support">支撐設計</a><a className="nav-cta" href="/#stores">預約試躺</a></nav>
      </header>

      <section className="series-hero">
        <div className="series-hero-image"><img src="/product-bedding-room.png" alt="CBD 草本忘憂系列寢室情境" /></div>
        <div className="series-hero-wash" />
        <div className="series-hero-copy">
          <p className="overline">CBD HERBAL COMFORT COLLECTION</p>
          <h1>為夜晚，加入一點<br />自然放鬆的想像。</h1>
          <p>上品將草本概念融入睡眠用品設計，並搭配枕頭本身的包覆、回彈與支撐機能，讓舒適不是一句口號，而是每晚都能感受到的接觸。</p>
          <a className="button primary" href="#where">了解材質使用位置 <span>↓</span></a>
        </div>
        <div className="series-hero-index"><span>HERBAL</span><span>COMFORT</span><span>SUPPORT</span></div>
      </section>

      <section className="series-intro section">
        <div className="section-label"><span>01</span><p>THE IDEA</p></div>
        <div className="series-intro-grid">
          <div><p className="eyebrow">草本 × 寢具設計</p><h2>讓自然的想像，<br />回到每天會接觸的地方。</h2></div>
          <div><p className="series-lead">這個系列不把 CBD 描述成治療方法，而是把草本機能織物、親水記憶棉與人體工學枕型放在同一個睡眠設計裡。</p><p>表布負責柔和接觸，枕芯提供包覆與回彈，海鷗式輪廓回應仰睡與側睡的支撐需求。三者共同構成一種安靜、舒服的睡前體驗。</p></div>
        </div>
        <div className="comfort-moments">{comfortMoments.map(([no, title, copy]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="ingredient-truth" id="where">
        <div className="truth-heading"><div className="section-label light"><span>02</span><p>WHERE IT IS USED</p></div><p className="eyebrow pale">成分與結構透明說明</p><h2>草本成分，<br />實際用在哪裡？</h2><p>把使用位置說清楚，比放大成分名稱更重要。以下依目前品牌提供資料整理；各品項正式規格仍以商品標示為準。</p></div>
        <div className="truth-list">
          <article className="confirmed"><span>01</span><div><small>目前資料可確認</small><h3>應用於機能表布</h3><p>品牌資料將 CBD 草本概念描述為織物應用，透過針織表布成為睡眠用品與肌膚接觸的一層。</p></div><b>表布</b></article>
          <article className="confirmed"><span>02</span><div><small>目前資料可確認</small><h3>使用微膠囊織物技術</h3><p>草本來源成分以微膠囊形成細微載體，再融入纖維／織物。這是材質技術說明，不代表醫療效果。</p></div><b>微膠囊</b></article>
          <article className="separate"><span>03</span><div><small>功能分層說明</small><h3>枕芯為親水記憶棉</h3><p>枕芯主要負責貼合、回彈與水氣調節。目前提供的品牌資料未說明 CBD 直接添加於枕芯，因此不作此項宣稱。</p></div><b>枕芯</b></article>
          <article className="pending"><span>04</span><div><small>購買前請確認</small><h3>耐洗次數與遞減數據</h3><p>目前資料未提供可水洗次數、洗後殘留率或機能遞減曲線。外布套應依洗標清潔，並向門市確認該品項的耐洗測試與正式說明。</p></div><b>待確認</b></article>
        </div>
      </section>

      <section className="layer-story section" id="support">
        <div className="section-label"><span>03</span><p>THREE-LAYER COMFORT</p></div>
        <div className="layer-heading"><div><p className="eyebrow">真正的舒適來自整體設計</p><h2>不是只靠一種成分，<br />而是三層感受一起作用。</h2></div><p>從碰到表布的第一刻，到頭頸落在枕面後的包覆與承托，每一層都有不同任務。</p></div>
        <div className="layer-display">
          <div className="layer-product"><img src="/product-pillow-angle.jpg" alt="草本忘憂好眠親水枕" /></div>
          <div className="layer-list">
            <article><span>01</span><div><small>TOUCH</small><h3>草本機能表布</h3><p>負責貼近肌膚的柔和觸感，將草本概念安靜融入日常寢具。</p></div></article>
            <article><span>02</span><div><small>CUSHION</small><h3>親水記憶棉</h3><p>提供包覆、回彈與水氣調節，回應頭頸重量與夜間悶熱感受。</p></div></article>
            <article><span>03</span><div><small>SUPPORT</small><h3>海鷗式分區曲線</h3><p>以中央凹槽與兩側枕區，分別承接仰睡、側睡與翻身時的高度落差。</p></div></article>
          </div>
        </div>
      </section>

      <section className="care-note">
        <div><p className="overline">BEFORE YOU CHOOSE</p><h2>資訊清楚，<br />才能放心選擇。</h2></div>
        <div className="care-checklist"><p>選購前，建議向門市確認：</p><ul><li>CBD 草本機能應用的確切布層與品項</li><li>表布是否可拆洗，以及正式洗滌方式</li><li>耐洗測試次數、洗後機能殘留或遞減資料</li><li>商品成分、來源、檢驗與批次規格文件</li></ul><p className="legal-note">本系列為寢具商品，非藥品，不具治療失眠、抗焦慮、改善疾病或其他醫療用途。實際規格以商品吊牌、洗標與正式文件為準。</p></div>
      </section>

      <section className="series-cta"><p className="eyebrow pale">上品睡眠相談室</p><h2>先了解材質，<br />再親自感受適合自己的支撐。</h2><div><a className="button primary" href="/#stores">預約門市試躺 <span>↗</span></a><a className="text-link" href="/">返回系列首頁 →</a></div></section>

      <footer><div className="footer-top"><div className="brand"><span className="brand-cn">上品寢具</span><span className="brand-en">SONG BEAM BEDDING CO., LTD</span></div><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="/">首頁</a><a href="/#consultation">睡眠相談</a><a href="#where">材質位置</a><a href="#support">支撐設計</a><a href="/#faq">常見問題</a></div><div className="footer-bottom"><span>© 2026 SONG BEAM BEDDING</span><span>本系列為寢具商品，非藥品，無醫療或療效用途。</span></div></footer>
    </main>
  );
}
