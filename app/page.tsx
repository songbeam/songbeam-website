"use client";

import { useEffect, useState } from "react";

const features = [
  ["01", "WHAT IS CBD", "來自大麻植物的", "天然化合物。", "CBD 是 Cannabidiol 的縮寫，中文常稱大麻二酚或漢麻二酚，是大麻植物中天然存在的多種大麻素之一。"],
  ["02", "CBD & THC", "CBD 與 THC，", "是不同的成分。", "讓人產生迷幻或「嗨」感的是 THC；CBD 本身不會產生 THC 所帶來的精神活性與陶醉感。"],
  ["03", "TEXTILE APPLICATION", "從植物成分概念，", "走進日常寢具。", "GLORY 將 CBD 成分以微膠囊技術融入纖維，讓草本機能表布成為每天貼近肌膚的睡眠素材。"],
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

const testimonials = [
  {
    quote: "到門市實際試躺後，才發現枕頭高度與肩頸貼合感差很多；找到適合的高度，側睡時也更安心。",
    name: "門市試躺者 A",
    profile: "海鷗枕型・使用情境分享",
  },
  {
    quote: "表布觸感柔和，躺下時有乾爽、安定的包覆感，也讓整理寢具成為每天睡前的小儀式。",
    name: "日常使用者 B",
    profile: "CBD 寢具・日常感受分享",
  },
  {
    quote: "旅行時帶著頸枕與眼罩，熟悉的觸感讓移動途中比較容易放鬆，收納起來也不會占太多空間。",
    name: "旅行使用者 C",
    profile: "隨身旅行組・使用情境分享",
  },
  {
    quote: "原本習慣側睡，試躺後依肩寬重新挑選高度，頭頸被穩穩承托，翻身時也能維持舒服的支撐感。",
    name: "門市試躺者 D",
    profile: "海鷗護脊枕・試躺感受分享",
  },
  {
    quote: "床包與枕套的觸感細緻，透氣度也很舒服；臥室換上整套寢具後，每晚都更期待回到床上休息。",
    name: "寢具使用者 E",
    profile: "長纖細棉寢具・日常感受分享",
  },
  {
    quote: "毛小孩很快就習慣在墊被上休息，材質摸起來柔和，日常整理也方便，成了牠最常待的小角落。",
    name: "毛孩家庭 F",
    profile: "毛小孩安撫墊被・生活分享",
  },
] as const;

const testimonialCrowd = [
  { slot: "01", testimonial: 0 },
  { slot: "02", testimonial: 1 },
  { slot: "03", testimonial: 2 },
  { slot: "04", testimonial: 3 },
  { slot: "05", testimonial: 4 },
  { slot: "06", testimonial: 5 },
] as const;

const collectionProducts = [
  {
    name: "CBD 草本忘憂好眠寢具枕頭",
    category: "枕頭",
    en: "HYDROPHILIC PILLOW",
    image: "/cbd-sleep-collection-pillow-card.png",
    statement: "讓頭頸找到最舒服的位置",
    detail: "從支撐到包覆，每一處細節都為放鬆而設計，陪伴身體慢慢沉靜，迎接每一夜好眠",
    highlights: ["海鷗式分區曲線", "親水記憶棉支撐", "仰睡與側睡皆可試躺"],
    note: "實際尺寸、高度、售價與適用睡姿，請以門市說明及商品標示為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具保潔墊組",
    category: "保潔墊組",
    en: "BEDDING PROTECTOR SET",
    image: "/product-protector.jpg",
    cardImage: "/cbd-sleep-collection-protector-card-clean.jpg",
    statement: "乾淨，是舒適睡眠的開始",
    detail: "為床墊建立一道安心防護，減少日常髒污與磨損，讓每一次躺下，都像第一次一樣舒適",
    highlights: ["床墊與枕頭保潔組", "建立寢具日常防護層", "洗滌方式依商品標示"],
    note: "實際組合、尺寸與清潔方式，請以品牌正式商品資訊及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具隨身旅行組",
    category: "隨身旅行組",
    en: "TRAVEL REST SET",
    image: "/product-travel-pillow.jpg",
    cardImage: "/cbd-sleep-collection-travel-card.png",
    accessoryImage: "/product-eye-mask.jpg",
    statement: "無論走到哪裡，都睡得安心",
    detail: "將熟悉的睡眠感受隨身帶著，在每一段旅程中，都保留屬於自己的放鬆節奏",
    highlights: ["旅行頸枕與眼罩", "適合長途移動情境", "輕巧延續熟悉睡感"],
    note: "頸枕與眼罩的販售組合、材質與尺寸，請以正式商品資訊為準。",
  },
];

type SeriesProduct = {
  name: string;
  en: string;
  image: string;
  statement: string;
  detail: string;
  highlights: string[];
  note: string;
  featureDetails?: string[];
};

const pillowSeries: SeriesProduct[] = [
  {
    name: "CBD 草本忘憂好眠寢具 天絲枕",
    en: "TENCEL PILLOW",
    image: "/sleep-concerns-cbd-pillow-wide.png",
    statement: "30% 天絲＋70% 聚酯纖維，立體邊設計，表布鋪棉。",
    detail: "100% 純棉表布、天絲親膚纖維，親膚抑菌抗敏。",
    highlights: ["睡感偏軟", "包覆性佳", "枕型飽滿，高度適中"],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "獨家比利時萃取微膠囊技術，將 CBD 成分提煉至微膠囊分子，編織進纖維。睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
      "天絲纖維能舒緩過敏感性的肌膚，其柔和觸感帶給肌膚自然舒適的感受；具優良的濕度管理，觸感涼快乾爽，光滑纖維表面能有效減輕肌膚過敏症狀並加強呵護肌膚。",
    ],
    note: "實際材質成分、尺寸、高度與清潔方式，請以商品洗標及正式商品標示為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 羽絨枕",
    en: "DOWN PILLOW",
    image: "/cbd-down-pillow-bedroom.png",
    statement: "睡感軟硬適中，枕型飽滿，支撐性高。",
    detail: "羽絨枕芯表布為緹花樣式，每批花色不同。",
    highlights: [
      "尺寸：長 75 cm × 寬 48 cm",
      "大小可適用一般床罩組之枕套",
      "內容物：90% 天然羽毛＋10% 天然羽絨",
      "重量：1.2 kg",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "獨家比利時萃取微膠囊技術，將 CBD 成分提煉至微膠囊分子，編織進纖維。睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
      "羽毛絨可隨溫度變化自然收縮膨脹，不怕擠壓也不易變形；透氣性佳，非常適合台灣的氣候。",
    ],
    note: "實際表布緹花樣式、尺寸與重量，請以收到商品及正式商品標示為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠雲朵枕",
    en: "SLEEP CLOUD PILLOW",
    image: "/cbd-sleep-cloud-pillow-bedroom.png",
    statement: "親水棉粒填充，兼具支撐、可塑與蓬鬆包覆。",
    detail: "保有親水記憶枕支撐性佳、服貼肩頸的特性，同時擁有羽絨枕的可塑性與纖維枕的蓬鬆感。",
    highlights: [
      "順應睡姿包覆頭頸部，紓壓護頸，正躺、側躺都好眠",
      "親水棉有效吸濕排熱",
      "棉粒間保有空隙，加速排熱並增加涼爽舒適度",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "GLORY 獨家專利「Tempwiser 親水棉」",
      "醫藥大學臨床實驗證明",
      "正睡、側睡，都能完美支撐。",
      "完全釋放肩頸壓力，給你最佳的睡眠品質。",
    ],
    note: "Tempwiser 親水棉接觸空氣後會產生泛黃狀況，屬於正常現象，不影響正常使用。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠親水枕（海鷗枕／止鼾枕）",
    en: "HYDROPHILIC CONTOUR PILLOW",
    image: "/cbd-hydrophilic-contour-pillow-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "枕芯採用 GLORY 獨家專利「Tempwiser 親水棉」",
      "醫藥大學臨床實驗證明",
      "特殊造型，正睡、側睡，都能完美支撐。",
      "完全釋放肩頸壓力，給你最佳的睡眠品質。",
    ],
    note: "Tempwiser 親水棉材質接觸空氣後會產生泛黃狀況，屬於正常現象，不影響正常使用。「止鼾枕」為商品系列名稱，不代表具有醫療或治療功效。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 海鷗減壓枕",
    en: "SEAGULL PRESSURE-RELIEF PILLOW",
    image: "/cbd-seagull-pressure-relief-pillow-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "枕芯採用 GLORY 獨家專利「Tempwiser 親水棉」",
      "醫藥大學臨床實驗證明",
      "特殊海鷗造型，正睡、側睡，都能完美支撐。",
      "完全釋放肩頸壓力，給你最佳的睡眠品質。",
      "可依照不同身形添增高度，更加貼合保護頸椎。",
    ],
    note: "Tempwiser 親水棉材質接觸空氣後會產生泛黃狀況，屬於正常現象，不影響正常使用。實際高度調整方式與適用睡姿，請以正式商品標示及門市試躺結果為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 海鷗護脊枕",
    en: "SEAGULL SPINE-SUPPORT PILLOW",
    image: "/cbd-seagull-spine-support-pillow-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "枕芯採用 GLORY 獨家專利「Tempwiser 親水棉」",
      "醫藥大學臨床實驗證明",
      "特殊海鷗造型，正睡、側睡，都能完美支撐。",
      "完全釋放肩頸壓力，給你最佳的睡眠品質。",
      "可依照不同身形添增高度，更加貼合保護頸椎。",
    ],
    note: "Tempwiser 親水棉材質接觸空氣後會產生泛黃狀況，屬於正常現象，不影響正常使用。「護脊枕」為商品系列名稱，實際高度與適用睡姿請以正式商品標示及門市說明為準。",
  },
];

const protectorSeries: SeriesProduct[] = [
  {
    name: "CBD 草本忘憂好眠寢具 好眠 長纖細棉 涼被",
    en: "LONG-STAPLE COTTON SUMMER QUILT",
    image: "/product-bedding-room.png",
    statement: "選用高等級 60 支長纖棉，紗線更細、織密更緊。",
    detail: "觸感如絲柔滑，透氣、親膚、不易起毛球；搭配雙面素色＋白框滾邊設計，並將 CBD 微膠囊成分織入纖維，營造舒適的睡前放鬆情境。",
    highlights: [
      "60 支長纖棉，細緻柔滑",
      "100% 長纖細棉，親膚透氣",
      "雙面素色＋白框滾邊設計",
      "CBD 微膠囊成分織入纖維",
    ],
    featureDetails: [
      "60 支長纖棉｜細緻柔滑，親膚不悶熱",
      "100% 長纖細棉｜頂級棉織",
      "雙面素色＋白框設計｜簡約百搭，美感升級",
      "漢麻二酚草本機能表布｜以舒適寢具使用情境為主",
      "舒適睡感設計｜協助建立放鬆的睡前節奏",
      "天然草本技術製成，具抗菌效果",
      "醫藥大學臨床實驗資料",
    ],
    note: "實際材質比例、尺寸、重量與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠 長纖細棉 枕套",
    en: "LONG-STAPLE COTTON PILLOWCASE",
    image: "/product-bedding-detail.png",
    statement: "選用高等級 60 支長纖棉，紗線更細、織密更緊。",
    detail: "觸感如絲柔滑，透氣、親膚、不易起毛球；搭配雙面素色＋白框滾邊設計，並將 CBD 微膠囊成分織入纖維，營造舒適的睡前放鬆情境。",
    highlights: [
      "60 支長纖棉，細緻柔滑",
      "100% 長纖細棉，親膚透氣",
      "雙面素色＋白框滾邊設計",
      "CBD 微膠囊成分織入纖維",
    ],
    featureDetails: [
      "60 支長纖棉｜細緻柔滑，親膚不悶熱",
      "100% 長纖細棉｜頂級棉織",
      "雙面素色＋白框設計｜簡約百搭，美感升級",
      "漢麻二酚草本機能表布｜以舒適寢具使用情境為主",
      "舒適睡感設計｜協助建立放鬆的睡前節奏",
      "天然草本技術製成，具抗菌效果",
      "醫藥大學臨床實驗資料",
    ],
    note: "實際尺寸、開口形式、材質比例與清潔方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠 長纖細棉 床包",
    en: "LONG-STAPLE COTTON FITTED SHEET",
    image: "/cbd-long-staple-cotton-fitted-sheet.png",
    statement: "選用高等級 60 支長纖棉，紗線更細、織密更緊。",
    detail: "觸感如絲柔滑，透氣、親膚、不易起毛球；搭配雙面素色＋白框滾邊設計，並將 CBD 微膠囊成分織入纖維，營造舒適的睡前放鬆情境。",
    highlights: [
      "60 支長纖棉，細緻柔滑",
      "100% 長纖細棉，親膚透氣",
      "雙面素色＋白框滾邊設計",
      "CBD 微膠囊成分織入纖維",
    ],
    featureDetails: [
      "60 支長纖棉｜細緻柔滑，親膚不悶熱",
      "100% 長纖細棉｜頂級棉織",
      "雙面素色＋白框設計｜簡約百搭，美感升級",
      "漢麻二酚草本機能表布｜以舒適寢具使用情境為主",
      "舒適睡感設計｜協助建立放鬆的睡前節奏",
      "天然草本技術製成，具抗菌效果",
      "醫藥大學臨床實驗資料",
    ],
    note: "實際適用床墊尺寸、包覆高度、材質比例與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 雙層平面保潔墊（保潔墊＋枕套）",
    en: "DOUBLE-LAYER PROTECTOR SET",
    image: "/cbd-sleep-collection-protector-card-clean.jpg",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
    ],
    note: "實際組合內容、尺寸、防護特性與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 毛小孩安撫墊被",
    en: "PET COMFORT MAT QUILT",
    image: "/cbd-pet-comfort-mat-quilt.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "具抗菌效果",
    ],
    note: "實際材質、尺寸、適用寵物與清潔方式，請以正式商品標示及洗標為準。",
  },
];

const travelSeries: SeriesProduct[] = [
  {
    name: "CBD 草本忘憂好眠寢具 信封式枕頭套",
    en: "ENVELOPE PILLOWCASE",
    image: "/cbd-envelope-pillowcase-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "不換枕頭，同樣可以有深層睡眠。",
      "輕巧好攜帶，陪你把好眠帶到每個地方。",
    ],
    note: "實際材質、尺寸、適用枕型與洗滌方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠眼罩",
    en: "SLEEP EYE MASK",
    image: "/cbd-sleep-eye-mask-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "輕巧好攜帶，陪你把好眠帶到每個地方。",
    ],
    note: "實際表布、填充材質、尺寸與清潔方式，請以正式商品標示及洗標為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 旅行好眠頸枕",
    en: "TRAVEL NECK PILLOW",
    image: "/cbd-travel-neck-pillow-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "輕巧好攜帶，陪你把好眠帶到每個地方。",
    ],
    note: "實際材質、尺寸與承托感受，請以正式商品標示及試用結果為準。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 好眠旅行組",
    en: "TRAVEL SLEEP SET",
    image: "/cbd-travel-sleep-set-bedroom.png",
    statement: "獨家比利時萃取微膠囊技術",
    detail: "將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時，表布會緩慢且持續釋放出微量的 CBD 油。",
    highlights: [
      "CBD 成分提煉至微膠囊分子",
      "微膠囊編織進纖維",
      "睡眠時由表布緩慢且持續釋放",
    ],
    featureDetails: [
      "漢麻二酚，天然草本技術製成",
      "醫藥大學臨床實驗證明",
      "輕巧好攜帶，陪你把好眠帶到每個地方。",
    ],
    note: "實際組合內容、材質、尺寸與收納方式，請以品牌正式商品資訊及商品標示為準。",
  },
];

const stores = [
  { name: "南京館", address: "台北市松山區南京東路五段 8 號", phone: "(02) 2765-8701", tags: ["可刷卡", "國旅卡"] },
  { name: "竹北館", address: "新竹縣竹北市文興路一段 136 號", phone: "(03) 667-0229", tags: ["可刷卡", "停車場"] },
  { name: "豐原館", address: "台中市豐原區中山路 39 號", phone: "(04) 2535-0160", tags: ["可刷卡", "停車場"] },
  { name: "崇德館", address: "台中市北屯區崇德路二段 32 號", phone: "(04) 2236-7963", tags: ["可刷卡", "國旅卡"] },
  { name: "經貿館", address: "台中市北屯區新平里經貿五路 68 號", phone: "(04) 2426-0752", tags: ["可刷卡", "國旅卡"] },
  { name: "精誠館", address: "台中市西區精誠路 340 號", phone: "(04) 2321-4988", tags: ["可刷卡", "停車場", "國旅卡"] },
  { name: "惠中館", address: "台中市西屯區惠中路二段 43 號", phone: "(04) 2255-0169", tags: ["可刷卡", "停車場", "國旅卡"] },
  { name: "大里館", address: "台中市大里區國光路二段 711 號", phone: "(04) 2407-1007", tags: ["可刷卡", "國旅卡"] },
  { name: "草屯館", address: "南投縣草屯鎮成功路一段 153-1 號", phone: "(049) 230-7036", tags: ["可刷卡", "國旅卡"] },
  { name: "田中館", address: "彰化縣田中鎮新福路 43 號", phone: "(04) 875-5753", tags: ["可刷卡"] },
  { name: "斗六館", address: "雲林縣斗六市雲林路三段 10 號", phone: "(05) 522-1585", tags: ["可刷卡", "國旅卡"] },
  {
    name: "台中榮總",
    displayName: "上品寢具 CBD 專櫃【台中榮總】",
    address: "台中市西屯區福聯里台灣大道四段1650號（門診後棟2樓領藥區前商場）",
    phone: "",
    tags: ["CBD 專櫃"],
  },
];

const storeGroups = [
  { name: "北部地區", en: "NORTH", stores: stores.filter((store) => /台北市|新北市|基隆市|桃園市|新竹/.test(store.address)) },
  { name: "中部地區", en: "CENTRAL", stores: stores.filter((store) => /苗栗|台中市|彰化|南投|雲林/.test(store.address) && store.name !== "台中榮總") },
  { name: "南部地區", en: "SOUTH", stores: stores.filter((store) => /嘉義|台南|高雄|屏東/.test(store.address)) },
  { name: "醫療院所", en: "MEDICAL INSTITUTIONS", stores: stores.filter((store) => store.name === "台中榮總") },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState<number | null>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const [selectedSeriesItemIndex, setSelectedSeriesItemIndex] = useState<number | null>(null);
  const selectedProduct = selectedProductIndex === null ? null : collectionProducts[selectedProductIndex];
  const catalogConfig = selectedProductIndex === 0
    ? { en: "CBD PILLOW COLLECTION", title: "CBD 草本忘憂好眠寢具枕頭系列", titleClass: "pillow-catalog-title-nowrap", copy: "從材質觸感到枕型支撐，選擇一款枕頭查看產品介紹。", items: pillowSeries }
    : selectedProductIndex === 1
      ? { en: "CBD BEDDING PROTECTOR COLLECTION", title: "CBD寢具保潔墊組系列", copy: "從寢具搭配到日常防護，選擇一項產品查看完整介紹。", items: protectorSeries }
      : selectedProductIndex === 2
        ? { en: "CBD TRAVEL REST COLLECTION", title: "CBD隨身旅行組系列", copy: "從枕套、眼罩到頸枕，選擇一項旅行配件查看完整介紹。", items: travelSeries }
        : null;
  const selectedSeriesItem = selectedSeriesItemIndex === null ? null : catalogConfig?.items[selectedSeriesItemIndex] ?? null;
  const selectedTestimonial = selectedTestimonialIndex === null ? null : testimonials[selectedTestimonialIndex];
  const closeMenu = () => setMenuOpen(false);
  const closeProductModal = () => {
    setSelectedSeriesItemIndex(null);
    setSelectedProductIndex(null);
  };
  const openProductCatalog = (index: number) => {
    setStoreModalOpen(false);
    setSelectedSeriesItemIndex(null);
    setSelectedProductIndex(index);
  };
  const openStoreDirectory = () => {
    setMenuOpen(false);
    setSelectedSeriesItemIndex(null);
    setSelectedProductIndex(null);
    setStoreModalOpen(true);
  };
  const openPartnerContact = () => {
    setMenuOpen(false);
    setStoreModalOpen(false);
    setPartnerModalOpen(true);
  };

  useEffect(() => {
    if (selectedProductIndex === null && selectedSeriesItemIndex === null && !storeModalOpen && !partnerModalOpen && selectedTestimonialIndex === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectedTestimonialIndex !== null) setSelectedTestimonialIndex(null);
      else if (partnerModalOpen) setPartnerModalOpen(false);
      else if (storeModalOpen) setStoreModalOpen(false);
      else if (selectedSeriesItemIndex !== null) setSelectedSeriesItemIndex(null);
      else setSelectedProductIndex(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProductIndex, selectedSeriesItemIndex, storeModalOpen, partnerModalOpen, selectedTestimonialIndex]);

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo glory-brand-logo" href="#top" aria-label="GLORY 葛洛麗名床寢具首頁" onClick={closeMenu}><img src="/glory-logo-transparent.png" alt="GLORY 1953 德國葛洛麗名床寢具" /></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? "關閉選單" : "開啟選單"} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="主要導覽">
          <a href="#features" onClick={closeMenu}>CBD 漢麻二酚簡介</a><a href="#endorsements" onClick={closeMenu}>品牌代言</a><a href="#pillow" onClick={closeMenu}>枕型設計</a><a href="#structure" onClick={closeMenu}>材質結構</a><a href="#safety" onClick={closeMenu}>材質檢驗</a><a href="#products" onClick={closeMenu}>系列商品</a><a href="#news" onClick={closeMenu}>新聞報導</a><a href="#testimonials" onClick={closeMenu}>使用者見證</a><a href="#stores" onClick={closeMenu}>門市體驗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" /><div className="hero-wash" /><div className="dream-haze" aria-hidden="true" /><div className="loose-curve hero-curve" aria-hidden="true" /><span className="summer-moon" aria-hidden="true">☾</span>
        <div className="hero-content">
          <p className="hero-series">GLORY 葛洛麗品牌・CBD 草本忘憂好眠寢具系列</p><h1>讓夜晚，<br />慢慢鬆開。</h1><p className="hero-lead"><span>月光落下，讓草本的柔和想像與貼合支撐，</span><span className="hero-lead-nowrap">陪身體回到舒服的睡眠節奏。</span></p>
          <div className="hero-actions"><a className="button primary capsule" href="#features">探索草本忘憂系列 <span>→</span></a></div>
        </div>
        <p className="vertical-note">SUMMER NIGHT · HERBAL REST · SONG BEAM</p>
      </section>

      <section className="core-features section" id="features">
        <div className="section-label"><span>01</span><p>INTRODUCTION TO CANNABIDIOL</p></div><div className="feature-heading cbd-intro-heading"><div><p className="eyebrow">CBD 漢麻二酚簡介</p><h2 className="feature-title cbd-intro-title-nowrap">CBD 漢麻二酚（大麻二酚）是什麼？</h2><p className="cbd-intro-lead">從植物中的天然成分開始，認識 CBD 與 THC 的差異，以及 GLORY 如何將草本概念帶進每日寢具。</p></div></div>
        <div className="cbd-intro-showcase">
          <figure className="cbd-video-frame cbd-video-block"><iframe src="https://www.youtube-nocookie.com/embed/BmpU3CbUALE?rel=0" title="CBD 漢麻二酚介紹影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></figure>
          <div className="cbd-intro-lower-grid cbd-intro-stack">
            <article className="doctor-story-card yang-story cbd-doctor-card cbd-expert-block"><figure><img src="/professional-doctors-lin-yang.jpg" alt="中醫藥學博士楊顓丞博士" /></figure><div><small>HERBAL TEXTILE RESEARCH</small><p className="doctor-role">中醫藥學博士</p><h3>楊顓丞 博士</h3><blockquote>「漢麻二酚成分及功效，結合纖維編織工法，經兩年多時間研發，並通過醫院臨床實驗，證實有效改善睡眠品質。」</blockquote><p>從草本成分研究到纖維應用，以專業觀點說明 CBD 如何走進每日貼近肌膚的寢具表布。</p></div></article>
            <div className="cbd-feature-panel cbd-overview-block"><div className="feature-list">{features.map(([no, en, titleLine1, titleLine2, copy]) => <article key={no}><span>{no} / {en}</span><h3><span>{titleLine1}</span>{titleLine2 ? <span>{titleLine2}</span> : null}</h3><p>{copy}</p></article>)}</div></div>
          </div>
        </div>
      </section>

      <section className="endorsement-section section" id="endorsements">
        <div className="section-label"><span>02</span><p>BRAND AMBASSADOR</p></div>
        <div className="endorsement-intro"><div><p className="eyebrow">品牌代言</p><h2>從好好睡一晚，<br /><span className="endorsement-title-nowrap">開始好好照顧自己。</span></h2></div></div>
        <div className="endorsement-grid">
          <article className="ambassador-profile-card"><figure className="endorsement-portrait wu"><img src="/wu-ruo-quan.jpg" alt="吳若權老師" /></figure><div><small>BRAND AMBASSADOR</small><h3>吳若權 老師</h3><strong className="ambassador-title-lines"><span>GLORY 葛洛麗品牌</span><span>CBD 草本忘憂好眠寢具代言人</span></strong><p>以溫柔而真誠的生活觀點，陪伴品牌傳遞舒適、安定且貼近日常的好眠想像。</p></div></article>
          <article className="ambassador-reason-card"><div><small>WHY GLORY</small><h3>為什麼願意成為<br />GLORY 好眠寢具代言人？</h3><p>吳若權老師長期倡議在日常中照顧身心，也重視真正能被實踐的生活品質。他認同 GLORY 從舒適材質、貼合支撐到睡前放鬆感受的完整思考，讓好眠不只是夜晚的片刻，而是每天好好照顧自己的開始。</p><p>這份對「從睡眠開始，善待自己」的共同信念，成為他願意擔任 <strong>GLORY 葛洛麗品牌 CBD 草本忘憂好眠寢具代言人</strong>的原因。</p></div></article>
        </div>
      </section>

      <section className="pillow-section section" id="pillow">
        <div className="section-label"><span>03</span><p>SEAGULL CONTOUR DESIGN</p></div>
        <p className="seagull-kicker">海鷗減壓枕型</p>
        <div className="seagull-combined-layout">
          <div className="seagull-editorial">
            <figure className="seagull-photo"><img src="/cbd-seagull-pressure-relief-pillow-bedroom.png" alt="晨光臥室中展示 CBD 草本忘憂好眠寢具海鷗減壓枕型" /><figcaption>SEAGULL CONTOUR / NATURAL SUPPORT</figcaption></figure>
            <div className="seagull-copy">
              <h2 className="seagull-title"><span>海鷗曲線，</span><span>讓肩頸自然找到</span><span>舒服的位置。</span></h2>
              <div className="product-details seagull-details"><article><span>01</span><div><h3>草本科技 × 親水棉</h3><p>結合漢麻二酚天然草本技術，枕芯採用 GLORY 獨家專利 Tempwiser 親水棉，兼顧包覆與回彈。</p></div></article><article><span>02</span><div><h3>海鷗曲線支撐</h3><p>特殊海鷗造型回應仰睡、側睡的不同承托需求，讓頭頸與肩部自然找到合適位置。</p></div></article><article><span>03</span><div><h3>可調高度設計</h3><p>可依不同身形與睡眠習慣增添高度，更貼合頸部曲線，減少肩頸懸空與壓迫感。</p></div></article></div>
              <a className="button dark capsule seagull-button" href="#stores">到門市實際感受 <span>↗</span></a>
            </div>
          </div>
          <article className="doctor-story-card lin-story seagull-doctor-card"><figure><img src="/dr-lin-kuo-wei.png" alt="美國脊骨神經醫學博士林國偉博士" /></figure><div><small>SPINAL SUPPORT PERSPECTIVE</small><p className="doctor-role">美國脊骨神經醫學博士</p><h3>林國偉 博士</h3><blockquote>「理想的枕頭可填補因脊椎弧度產生的空隙，讓頸椎被自然支撐。若枕頭高度不對，會造成神經孔空間改變，神經傳導受到影響。」</blockquote><p>海鷗曲線與可調高度的設計，回應不同睡姿與身形所需要的頭頸承托。</p></div></article>
        </div>
      </section>

      {catalogConfig ? <div className="product-modal-backdrop" onMouseDown={closeProductModal}>
        <section className="pillow-catalog-modal" id="product-catalog-dialog" role="dialog" aria-modal="true" aria-labelledby="pillow-catalog-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉產品系列" onClick={closeProductModal} autoFocus>×</button>
          <header className="pillow-catalog-heading"><small>{catalogConfig.en}</small><h2 id="pillow-catalog-title" className={catalogConfig.titleClass ?? ""}>{catalogConfig.title}</h2><p>{catalogConfig.copy}</p></header>
          <div className="pillow-catalog-grid">{catalogConfig.items.map((item, index) => {
            const isHydrophilicContour = item.name === "CBD 草本忘憂好眠寢具 好眠親水枕（海鷗枕／止鼾枕）";
            return <button className={`pillow-catalog-card ${isHydrophilicContour ? "hydrophilic-catalog-card" : ""}`} type="button" key={item.name} onClick={() => setSelectedSeriesItemIndex(index)}><span className="pillow-catalog-image"><img src={item.image} alt={item.name} /><i>{String(index + 1).padStart(2, "0")}</i></span><span className="pillow-catalog-copy"><small>{item.en}</small><strong className={isHydrophilicContour ? "hydrophilic-title-lines" : ""}>{isHydrophilicContour ? <><span>CBD 草本忘憂好眠寢具 好眠親水枕</span><span>（海鷗枕／止鼾枕）</span></> : item.name}</strong><em>查看產品介紹 <b>→</b></em></span></button>;
          })}</div>
        </section>
      </div> : selectedProduct ? <div className="product-modal-backdrop" onMouseDown={closeProductModal}>
        <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉商品介紹" onClick={closeProductModal} autoFocus>×</button>
          <div className="product-modal-visual"><img className={`product-modal-image product-modal-image-${selectedProductIndex}`} src={selectedProduct.image} alt={selectedProduct.name} />{selectedProduct.accessoryImage ? <img className="product-modal-accessory" src={selectedProduct.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}</div>
          <div className="product-modal-copy"><small>{selectedProduct.en}</small><h2 id="product-modal-title">{selectedProduct.name}</h2><strong>{selectedProduct.statement}</strong><p>{selectedProduct.detail}</p><ul>{selectedProduct.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p className="product-modal-note">{selectedProduct.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={closeProductModal}>到門市體驗 <span>↗</span></a><a className="text-link" href="mailto:service@shangpin-bedding.tw?subject=詢問 CBD 草本忘憂好眠寢具系列商品">詢問商品資訊 →</a></div></div>
        </section>
      </div> : null}

      {selectedSeriesItem ? <div className="product-modal-backdrop pillow-detail-layer" onMouseDown={() => setSelectedSeriesItemIndex(null)}>
        <section className="product-modal pillow-series-detail pillow-series-expanded" role="dialog" aria-modal="true" aria-labelledby="pillow-detail-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="返回產品系列" onClick={() => setSelectedSeriesItemIndex(null)} autoFocus>←</button>
          <div className="product-modal-visual"><img className={`product-modal-image pillow-series-image pillow-series-image-${selectedSeriesItemIndex}`} src={selectedSeriesItem.image} alt={selectedSeriesItem.name} /></div>
          <div className="product-modal-copy pillow-series-copy"><small>{selectedSeriesItem.en}</small><h2 id="pillow-detail-title" className={`pillow-series-title-nowrap ${selectedSeriesItem.name.length > 18 ? "pillow-series-title-long" : ""} ${selectedSeriesItem.name === "CBD 草本忘憂好眠寢具 好眠親水枕（海鷗枕／止鼾枕）" ? "hydrophilic-title-lines" : ""}`}>{selectedSeriesItem.name === "CBD 草本忘憂好眠寢具 好眠親水枕（海鷗枕／止鼾枕）" ? <><span>CBD 草本忘憂好眠寢具 好眠親水枕</span><span>（海鷗枕／止鼾枕）</span></> : selectedSeriesItem.name}</h2><strong>{selectedSeriesItem.statement}</strong><p>{selectedSeriesItem.detail}</p><ul>{selectedSeriesItem.highlights.map((item) => <li key={item}>{item}</li>)}</ul>{selectedSeriesItem.featureDetails?.length ? <section className="pillow-feature-details" aria-label={`${selectedSeriesItem.name}產品特色`}><small>PRODUCT FEATURES</small><h3>{selectedSeriesItemIndex === 0 && selectedProductIndex === 0 ? "草本科技與天絲親膚特色" : "草本科技與產品特色"}</h3><ol>{selectedSeriesItem.featureDetails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section> : null}<p className="product-modal-note">{selectedSeriesItem.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={closeProductModal}>到門市體驗 <span>↗</span></a><button className="pillow-back-button" type="button" onClick={() => setSelectedSeriesItemIndex(null)}>返回系列商品</button></div></div>
        </section>
      </div> : null}

      <section className="structure section" id="structure">
        <div className="section-label"><span>04</span><p>MATERIAL &amp; STRUCTURE</p></div>
        <div className="structure-heading structure-heading-editorial"><div><p className="eyebrow">材質與產品結構</p><h2 className="structure-title"><span>每一層，</span><span className="structure-title-nowrap">都為舒適睡眠而設計。</span></h2></div></div>
        <div className="structure-editorial">
          <figure className="structure-product-photo"><span>CBD PILLOW / SIDE VIEW</span><img src="/cbd-hydrophilic-contour-pillow-bedroom.png" alt="晨光臥室中的 CBD 草本忘憂好眠寢具好眠親水枕" /><figcaption>柔和表布與貼合枕芯，共同構成每晚靠近肌膚的舒適層次。</figcaption></figure>
          <div className="structure-layers"><header><small>THREE-LAYER COMFORT</small><h3>由外而內，<br />看見每一層的角色。</h3></header><article><span>01</span><div><h4>CBD 機能外布套</h4><p>草本微膠囊機能針織表布，建立柔和、親膚的接觸層。</p></div></article><article><span>02</span><div><h4>內層與保護結構</h4><p>位於表布與枕芯之間；實際內套、拉鍊及拆卸方式依各款商品規格為準。</p></div></article><article><span>03</span><div><h4>親水記憶棉枕芯</h4><p>以貼合、慢回彈與水氣調節，承接頭頸並回應不同睡姿。</p></div></article></div>
        </div>
        <div className="structure-spec-panel"><table><tbody><tr><th>表布特色</th><td>CBD 草本微膠囊機能針織表布</td><th>枕芯材質</th><td>親水記憶棉</td></tr><tr><th>睡感重點</th><td>柔和觸感、貼合承托、慢回彈</td><th>日常清潔</th><td>枕芯與外布套分開處理，依商品洗標為準</td></tr><tr><th>結構配置</th><td>依不同枕款的內套、拉鍊與可拆設計為準</td><th>商品規格</th><td>尺寸、高度與產地請以正式商品標示為準</td></tr></tbody></table></div>
      </section>

      <section className="evidence-story section" id="safety">
        <div className="section-label"><span>05</span><p>TESTING &amp; TEXTILE TECHNOLOGY</p></div>
        <header className="safety-editorial-head"><p className="eyebrow">檢驗與安全說明</p><h2>從睡眠數據，<br /><span className="safety-title-nowrap">看見安心的依據。</span></h2></header>

        <div className="clinical-data-card">
          <div className="clinical-data-intro"><small>CLINICAL SLEEP OBSERVATION</small><h3>全台近 500 萬人<br />失眠福音</h3><p>市場獨家醫學大學臨床試驗，觀察 CBD 枕頭使用前後的總睡眠、淺眠與深睡變化。</p><div className="clinical-seven"><strong>近 7 成</strong><span>受驗者明顯改善睡眠品質</span></div></div>
          <div className="clinical-charts"><div className="sleep-chart-grid"><article><h4>總睡眠數</h4><div className="chart-bars"><div><i style={{ height: "55%" }} /><strong>約 355</strong><span>使用前</span></div><div><i className="after" style={{ height: "76%" }} /><strong>約 376</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>淺眠</h4><div className="chart-bars"><div><i style={{ height: "60%" }} /><strong>約 208</strong><span>使用前</span></div><div><i className="after" style={{ height: "88%" }} /><strong>約 230</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>深睡</h4><div className="chart-bars"><div><i style={{ height: "53%" }} /><strong>約 61</strong><span>使用前</span></div><div><i className="after" style={{ height: "68%" }} /><strong>約 67</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article></div><p>Effect of cannabidiol (CBD) containing pillow protector on sleep quality in health providers working at hospital.</p></div>
        </div>

        <div className="cbd-textile-story">
          <div className="textile-cycle-visual">
            <img src="/cbd-textile-cycle.png" alt="CBD 萃取、微膠囊化、編織進纖維循環圖" />
          </div>
          <div className="cbd-textile-copy"><small>MICROCAPSULE TEXTILE TECHNOLOGY</small><h3 className="cbd-textile-title-nowrap">CBD 漢麻二酚表布</h3><h4>獨家比利時萃取微膠囊技術</h4><p>將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時緩慢且持續釋放微量 CBD 成分。</p></div>
        </div>

        <div className="safety-feature-grid"><article><span>01</span><strong>草本助眠<br />漢麻二酚</strong></article><article><span>02</span><strong>醫藥大學<br />臨床實驗證明</strong></article><article><span>03</span><strong>獨家微膠囊<br />技術</strong></article><article><span>04</span><strong>天然草本<br />技術製成</strong></article><article><span>05</span><strong>天然抗菌<br />除臭</strong></article></div>
      </section>

      <section className="product-showcase section" id="products">
        <div className="collection-head">
          <div><div className="section-label"><span>06</span><p>CBD SLEEP COLLECTION</p></div><p className="eyebrow collection-eyebrow-nowrap">CBD 草本忘憂好眠寢具</p><h2>從臥室到旅途，<br />延續熟悉的舒服。</h2></div>
        </div>
        <div className="shop-product-grid">
          {collectionProducts.map((product, index) => (
            <button className="shop-product-card" type="button" key={product.name} onClick={() => openProductCatalog(index)} aria-label={`查看 ${product.name} 商品選單`} aria-haspopup="dialog" aria-controls="product-catalog-dialog">
              <div className="shop-product-image">
                <img src={product.cardImage ?? product.image} alt={product.name} />
                {!product.cardImage && product.accessoryImage ? <img className="accessory-image" src={product.accessoryImage} alt="CBD 草本旅行眼罩" /> : null}
                <span className="shop-product-number">0{index + 1}</span>
              </div>
              <div className="shop-product-info"><small>{product.en}</small><h3 className="shop-product-title"><span>CBD 草本忘憂好眠寢具</span><span>{product.category}</span></h3><strong>{product.statement}</strong><p>{product.detail}</p><span className="product-detail-trigger">查看商品連結 <span>→</span></span></div>
            </button>
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

      <section className="testimonial-section section" id="testimonials">
        <div className="section-label"><span>09</span><p>REAL SLEEP STORIES</p></div>
        <header className="testimonial-heading"><div><p className="eyebrow">使用者見證</p><h2><span>每一段好眠故事，</span><span className="testimonial-title-nowrap">都從找到適合自己開始。</span></h2></div></header>
        <div className="testimonial-crowd" aria-label="使用者見證人物群像">
          <img src="/testimonial-crowd-transparent.png" alt="去背灰色人群示意圖" />
          {testimonialCrowd.map((person) => <button className={`crowd-person crowd-person-${person.slot} crowd-person-featured${selectedTestimonialIndex === person.testimonial ? " is-active" : ""}`} type="button" key={person.slot} onClick={() => setSelectedTestimonialIndex(person.testimonial)} aria-pressed={selectedTestimonialIndex === person.testimonial} aria-haspopup="dialog" aria-controls="testimonial-story-dialog" aria-label={`閱讀${testimonials[person.testimonial].name}的使用者見證`}><i className="person-body" /><i className="person-legs" /></button>)}
        </div>
      </section>

      <section className="stores" id="stores"><div className="stores-copy"><h2>枕頭合不合適，<br />躺過才知道。</h2><p className="store-intro-lines"><span>每個人的肩寬、睡姿、床墊軟硬與習慣都不同。</span><span>歡迎至上品寢具門市親自試躺，由專業人員陪你找到更適合自己的枕頭高度與睡感。</span></p><div className="store-action-row"><button className="button primary store-list-trigger" type="button" onClick={openStoreDirectory} aria-haspopup="dialog" aria-controls="store-directory-dialog">查看全台門市 <span>↗</span></button><button className="button partner-trigger" type="button" onClick={openPartnerContact} aria-haspopup="dialog" aria-controls="partner-contact-dialog">專人接洽 <span>↗</span></button></div><aside className="partner-invite"><small>PARTNERSHIP</small><h3>誠徵合作夥伴</h3><p>歡迎設計旅宿、健康生活通路、醫療院所及企業禮贈合作，與 GLORY 一起把更好的睡眠體驗帶進更多日常場景。</p></aside></div><div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡感相談<br />仰睡・側睡實際感受</p></div></section>

      {storeModalOpen ? <div className="product-modal-backdrop store-modal-backdrop" onMouseDown={() => setStoreModalOpen(false)}>
        <section className="store-modal" id="store-directory-dialog" role="dialog" aria-modal="true" aria-labelledby="store-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉門市資訊" onClick={() => setStoreModalOpen(false)} autoFocus>×</button>
          <header className="store-modal-heading"><small>SONG BEAM STORE DIRECTORY</small><h2 id="store-modal-title">全台門市資訊</h2><p>共 12 處門市與專櫃，歡迎於前往前確認營業時間與試躺服務。</p></header>
          <div className="store-regions">{storeGroups.map((group) => <section className="store-region" key={group.name}><header><small>{group.en}</small><h3>{group.name}</h3><span>{group.stores.length} 處</span></header>{group.stores.length ? <div className="store-modal-grid">{group.stores.map((store, index) => <article key={store.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{store.displayName ?? `上品寢具床墊館【${store.name}】`}</h3><p>{store.address}</p>{store.phone ? <a href={`tel:${store.phone.replace(/[^\d]/g, "")}`} aria-label={`致電${store.name} ${store.phone}`}>{store.phone}</a> : null}<ul>{store.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div> : <p className="store-region-empty">此區目前尚無門市資訊，最新據點將持續更新。</p>}</section>)}</div>
          <footer className="store-modal-footer"><p>門市資料依上品寢具官方網站目前刊載內容整理。</p></footer>
        </section>
      </div> : null}

      {partnerModalOpen ? <div className="product-modal-backdrop partner-modal-backdrop" onMouseDown={() => setPartnerModalOpen(false)}>
        <section className="partner-modal" id="partner-contact-dialog" role="dialog" aria-modal="true" aria-labelledby="partner-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉合作洽詢" onClick={() => setPartnerModalOpen(false)} autoFocus>×</button>
          <div className="partner-modal-copy"><small>GLORY PARTNERSHIP</small><h2 id="partner-modal-title">讓專人與你接洽</h2><p>使用 LINE 掃描 QR Code，加入上品寢具官方帳號後留下合作需求，我們將由專人與你聯繫。</p><strong>LINE 官方帳號<br />@0800-800660</strong><a href="https://line.me/R/ti/p/@0800-800660" target="_blank" rel="noreferrer">手機直接開啟 LINE <span>↗</span></a></div>
          <figure className="partner-qr"><span>SCAN TO CONNECT</span><img src="/line-official-qr.png" alt="上品寢具 LINE 官方帳號 QR Code" /><figcaption>掃描加入 LINE 官方帳號</figcaption></figure>
        </section>
      </div> : null}

      {selectedTestimonial ? <div className="product-modal-backdrop testimonial-modal-backdrop" onMouseDown={() => setSelectedTestimonialIndex(null)}>
        <section className="testimonial-modal" id="testimonial-story-dialog" role="dialog" aria-modal="true" aria-labelledby="testimonial-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉使用者見證" onClick={() => setSelectedTestimonialIndex(null)} autoFocus>×</button>
          <div className="testimonial-modal-figure" aria-hidden="true"><span className="crowd-person crowd-person-featured"><i className="person-body" /><i className="person-legs" /></span><small>REAL SLEEP STORY</small></div>
          <div className="testimonial-modal-copy"><small>USER TESTIMONIAL · {String((selectedTestimonialIndex ?? 0) + 1).padStart(2, "0")}</small><h2 id="testimonial-modal-title">{selectedTestimonial.name}</h2><p>{selectedTestimonial.profile}</p><blockquote>「{selectedTestimonial.quote}」</blockquote><button type="button" onClick={() => setSelectedTestimonialIndex(null)}>回到使用者見證 <span>×</span></button></div>
        </section>
      </div> : null}

      <footer><div className="footer-top"><a className="footer-logo" href="#top" aria-label="GLORY 葛洛麗名床寢具首頁"><img src="/glory-logo-transparent.png" alt="GLORY 1953 德國葛洛麗名床寢具" /></a><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="#features">CBD 漢麻二酚簡介</a><a href="#endorsements">品牌代言</a><a href="#pillow">枕型設計</a><a href="#structure">材質結構</a><a href="#safety">材質檢驗</a><a href="#products">系列商品</a><a href="#news">新聞報導</a><a href="#testimonials">使用者見證</a><a href="#stores">門市體驗</a></div><div className="footer-bottom"><span>© 2026 GLORY BEDDING</span></div></footer>
    </main>
  );
}
