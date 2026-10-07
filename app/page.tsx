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

const ambassadorFilms = [
  {
    number: "01",
    chapter: "第一章",
    label: "品牌篇",
    en: "THE BRAND STORY",
    title: "品質很重要，沒有錯。\n但是品格，也非常重要。",
    video: "/wu-ruo-quan-brand-film-01.mp4",
    paragraphs: [
      "若權老師和上品的緣分，是從一場廣播專訪開始的。",
      "那時候他還不是代言人，只是節目裡認識了品牌經營者、也認識了產品的主持人。第一次拿到 CBD 草本忘憂枕，他心裡想的是「好佛心來的」——因為他長期做個人諮詢與輔導，太多個案告訴他，睡覺對他們來說是一件有壓力的事。",
      "三年之後，上品的執行長來問他，有沒有機會可以合作代言。",
      "他說他下了很大的決心。代言一個產品，是對自己責任的要求，是對品牌深刻的期許，也是對消費者最大的保障。",
      "「基於這三個原因的考慮，我覺得非常的榮幸。」",
    ],
    points: [],
    closing: "而他拿回家的第一顆枕頭，是給媽媽的。",
  },
  {
    number: "02",
    chapter: "第二章",
    label: "產品篇",
    en: "THE PRODUCT STORY",
    title: "五星級飯店那顆很貴的枕頭，\n他睡過之後，還是想念家裡那一顆。",
    video: "/wu-ruo-quan-product-film-02.mp4",
    paragraphs: [
      "「怎麼還是我家那一顆 CBD，讓我比較安心、睡得比較好。」",
      "若權老師的工作免不了外宿，在外面演講、上課。很多人都有「認床」的問題——換了一組寢具，第一個晚上就是睡不好。",
      "用了三年，他說感受最深的是三件事：",
    ],
    points: [
      "外型非常符合人體工學",
      "支撐度不是第一、二個月，是從第一年到第二年都沒有變形、沒有軟塌",
      "微膠囊技術帶來的親膚感",
    ],
    closing: "而出門的時候，可以不用帶一整顆枕頭——帶那個特別設計的枕頭套就好。",
  },
  {
    number: "03",
    chapter: "第三章",
    label: "人生篇",
    en: "THE LIFE STORY",
    title: "年輕的時候會覺得，休息就等於可惜。\n等到年紀越來越長之後就知道，休息不是可惜，它是可貴。",
    video: "/wu-ruo-quan-life-film-03.mp4",
    paragraphs: [
      "這一支，若權老師沒有談枕頭。他談的是他自己。",
      "他說很多人來上時間管理的課，是為了做更多的事、擁有更多的效率。這些都沒有錯——但所有工作效率最後的核心價值，其實是想要擁有更好的生活品質，並且更肯定自己生命的意義。",
      "給正在為別人努力的你，老師說：",
      "「照顧自己並不是奢侈的事，照顧自己其實是非常值得的事。」",
    ],
    points: [],
    closing: "「當你為別人、為這個世界付出了很多，請你也把你的愛留給你自己。」",
  },
] as const;

const ambassadorFilmTotal = 3;

const testimonials = [
  {
    name: "林小姐",
    profile: "長照家庭",
    product: "CBD 草本忘憂枕頭＋寢具保潔墊組",
    headline: "家人的睡眠，也是照護的一部分",
    paragraphs: ["媽媽已經有一段時間睡不好，所以想先替她試試 CBD 草本忘憂枕頭與寢具保潔墊組。", "沒想到使用後媽媽自己很喜歡，還主動提醒我要再幫她補齊寢具。看到她願意使用，也讓我更期待後續的睡眠感受。", "現在換我也想一起試試，希望我們每天都能好好休息、舒服入睡。"],
    gender: "female",
  },
  {
    name: "王先生",
    profile: "工程師",
    product: "CBD 草本忘憂枕頭",
    headline: "下班了，但腦袋還在運轉。",
    paragraphs: ["每天長時間盯著螢幕、處理各種問題，回到家明明身體已經很累，腦袋卻常常還停留在工作的節奏裡。", "開始使用 CBD 草本忘憂枕頭後，我也慢慢把躺上床的這一刻，當成每天從工作切換到休息的時間。", "對我來說，一顆舒服、熟悉的枕頭，不只是睡覺時使用的寢具，也像是在提醒自己：今天的工作結束了，該好好休息了。"],
    gender: "male",
  },
  {
    name: "陳小姐",
    profile: "創業者",
    product: "CBD 草本忘憂枕頭＋寢具保潔墊組",
    headline: "工作沒有真正的下班時間，更需要留一點時間給自己。",
    paragraphs: ["自己創業之後才發現，即使人已經回到家，腦袋裡還是會想著客戶、營運和明天要處理的事情。", "所以我替自己的房間換上 CBD 草本忘憂枕頭與寢具保潔墊組，也開始更認真看待每天休息的環境。", "現在回到床上的那一刻，就像是一天真正結束的訊號。再忙，也希望留一段時間給自己，好好休息，再迎接明天。"],
    gender: "female",
  },
  {
    name: "張小姐",
    profile: "旅行愛好者",
    product: "CBD 草本忘憂隨身旅行組",
    headline: "旅行可以一直換風景，熟悉的睡眠感不用跟著換。",
    paragraphs: ["我很喜歡旅行，但每次換飯店、換枕頭、換一張陌生的床，都需要一點時間適應。", "後來開始把 CBD 草本忘憂隨身旅行組放進行李箱，無論住在哪裡，都能替自己的睡眠空間多留一點熟悉感。", "東西不用帶很多，但有了自己習慣的寢具陪著，旅行中的每一晚，也能多一點屬於自己的舒服。"],
    gender: "female",
  },
  {
    name: "李先生",
    profile: "長期商務出差",
    product: "CBD 草本忘憂隨身旅行組",
    headline: "一個月睡好幾張床，更知道熟悉有多重要。",
    paragraphs: ["因為工作的關係經常需要到不同城市出差，有時候一個星期就要換好幾間飯店，住宿環境幾乎沒辦法自己決定。", "現在我的行李箱裡，都會固定放著一組 CBD 草本忘憂隨身旅行組。到了飯店整理好房間，也順手把自己的寢具準備好。", "不管今天住在哪個城市，熟悉的睡眠習慣都能跟著自己走。對經常在外工作的人來說，這一點熟悉感，反而成了出差時很重要的小事。"],
    gender: "male",
  },
] as const;

const testimonialCrowd = [
  { slot: "01", testimonial: 0 },
  { slot: "02", testimonial: 1 },
  { slot: "03", testimonial: 2 },
  { slot: "04", testimonial: 3 },
  { slot: "05", testimonial: 4 },
] as const;

const collectionProducts = [
  {
    name: "CBD 草本忘憂好眠寢具枕頭",
    category: "枕頭",
    en: "HYDROPHILIC PILLOW",
    image: "/cbd-sleep-collection-pillow-card.png",
    statement: "讓頭頸找到最舒服的位置",
    detail: "從支撐到包覆，每一處細節都為放鬆而設計，陪伴身體慢慢沉靜，迎接每一夜好眠",
    highlights: ["海鷗式分區曲線", "Tempwiser 親水棉支撐", "仰睡與側睡皆可試躺"],
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
    image: "/cbd-tencel-pillow-2026.png",
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
    image: "/cbd-down-pillow-2026-v2.png",
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
    image: "/cbd-sleep-cloud-pillow-2026.png",
    statement: "Tempwiser 親水棉粒填充，兼具支撐、可塑與蓬鬆包覆。",
    detail: "保有親水記憶枕支撐性佳、服貼肩頸的特性，同時擁有羽絨枕的可塑性與纖維枕的蓬鬆感。",
    highlights: [
      "順應睡姿包覆頭頸部，紓壓護頸，正躺、側躺都好眠",
      "Tempwiser 親水棉有效吸濕排熱",
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
    name: "CBD 草本忘憂好眠寢具 Tempwiser 親水棉 海鷗枕",
    en: "HYDROPHILIC SEAGULL PILLOW",
    image: "/cbd-tempwiser-seagull-pillow-2026.png",
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
    note: "Tempwiser 親水棉材質接觸空氣後會產生泛黃狀況，屬於正常現象，不影響正常使用。",
  },
  {
    name: "CBD 草本忘憂好眠寢具 Tempwiser 親水棉 止鼾枕",
    en: "HYDROPHILIC ANTI-SNORE PILLOW",
    image: "/cbd-tempwiser-anti-snore-pillow-2026.png",
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
    image: "/cbd-seagull-pressure-relief-pillow-2026.png",
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
    image: "/cbd-seagull-spine-support-pillow-2026-v2.png",
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
    image: "/cbd-double-layer-protector-set-2026.png",
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
    image: "/cbd-pet-comfort-mat-quilt-2026.png",
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
    name: "CBD 草本忘憂好眠寢具 旅行隨身枕頭套",
    en: "TRAVEL PILLOWCASE",
    image: "/cbd-travel-pillowcase-2026.png",
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
    image: "/cbd-sleep-eye-mask-2026.png",
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
    image: "/cbd-travel-neck-pillow-2026.png",
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
    image: "/cbd-travel-sleep-set-2026.png",
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

type StoreLocation = {
  name: string;
  displayName?: string;
  address: string;
  tags: string[];
};

const stores: StoreLocation[] = [
  { name: "南京館", address: "台北市松山區南京東路五段 8 號", tags: ["可刷卡", "國旅卡"] },
  { name: "竹北館", address: "新竹縣竹北市文興路一段 136 號", tags: ["可刷卡", "停車場"] },
  { name: "豐原館", address: "台中市豐原區中山路 39 號", tags: ["可刷卡", "停車場"] },
  { name: "崇德館", address: "台中市北屯區崇德路二段 32 號", tags: ["可刷卡", "國旅卡"] },
  { name: "經貿館", address: "台中市北屯區新平里經貿五路 68 號", tags: ["可刷卡", "國旅卡"] },
  { name: "精誠館", address: "台中市西區精誠路 340 號", tags: ["可刷卡", "停車場", "國旅卡"] },
  { name: "惠中館", address: "台中市西屯區惠中路二段 43 號", tags: ["可刷卡", "停車場", "國旅卡"] },
  { name: "大里館", address: "台中市大里區國光路二段 711 號", tags: ["可刷卡", "國旅卡"] },
  { name: "草屯館", address: "南投縣草屯鎮成功路一段 153-1 號", tags: ["可刷卡", "國旅卡"] },
  { name: "斗六館", address: "雲林縣斗六市雲林路三段 10 號", tags: ["可刷卡", "國旅卡"] },
];

const medicalStores: StoreLocation[] = [
  {
    name: "台中榮總",
    displayName: "上品寢具 CBD 專櫃【台中榮總】",
    address: "台中市西屯區福聯里台灣大道四段1650號（門診後棟2樓領藥區前商場）",
    tags: ["CBD 專櫃"],
  },
  {
    name: "三總醫院",
    displayName: "三總醫院-極織房專櫃",
    address: "台北市內湖區成功路二段325號B1商場",
    tags: ["極織房專櫃"],
  },
  {
    name: "亞東醫院",
    displayName: "亞東醫院-極織房專櫃",
    address: "新北市板橋區南雅南路二段21號B1商場",
    tags: ["極織房專櫃"],
  },
];

const dealers: StoreLocation[] = [
  { name: "律倫企業有限公司", displayName: "律倫企業有限公司", address: "臺北市中山區大佳里松江路523號", tags: ["經銷商"] },
  { name: "康裕網路行銷有限公司(茉莉床單)", displayName: "康裕網路行銷有限公司(茉莉床單)", address: "臺北市士林區天祿里士東路91巷17號1樓", tags: ["經銷商"] },
  { name: "亞梭傢俬國際股份有限公司－新光A8", displayName: "亞梭傢俬國際股份有限公司", address: "臺北市信義區西村里松高路12號6樓 (新光A8)", tags: ["經銷商"] },
  { name: "亞梭傢俬國際股份有限公司－大巨蛋", displayName: "亞梭傢俬國際股份有限公司", address: "臺北市信義區新仁里忠孝東路四段505號 5F(大巨蛋)", tags: ["經銷商"] },
  { name: "璽品屋國際有限公司", displayName: "璽品屋國際有限公司", address: "臺北市中正區文北里仁愛路二段34-1號1樓", tags: ["經銷商"] },
  { name: "貝里恩有限公司", displayName: "貝里恩有限公司", address: "新北市淡水區協元里中山路176號1樓", tags: ["經銷商"] },
  { name: "家禾傢俱行(睡眠工藝)", displayName: "家禾傢俱行(睡眠工藝)", address: "新北市中和區中正路866-9號1樓", tags: ["經銷商"] },
  { name: "亞梭傢俬國際股份有限公司－新竹巨城", displayName: "亞梭傢俬國際股份有限公司", address: "新竹市東區復中里中央路239號號5樓(新竹巨城)", tags: ["經銷商"] },
  { name: "東城精品寢飾生活館", displayName: "東城精品寢飾生活館", address: "臺中市沙鹿區鹿寮里福星路6號", tags: ["經銷商"] },
  { name: "愛豐健康股份有限公司", displayName: "愛豐健康股份有限公司", address: "臺中市豐原區東勢里中興路61號", tags: ["經銷商"] },
  { name: "名坊生活館(上品田中館)", displayName: "名坊生活館(上品田中館)", address: "彰化縣田中鎮北路里新福路43號", tags: ["經銷商"] },
  { name: "美閣典藏家具行", displayName: "美閣典藏家具行", address: "嘉義市西區世賢路一段334號", tags: ["經銷商"] },
  { name: "台南文化店  荷蘭英黛爾", displayName: "台南文化店  荷蘭英黛爾", address: "臺南市東區忠孝里崇明路286號", tags: ["經銷商"] },
  { name: "雅茲寢飾生活館", displayName: "雅茲寢飾生活館", address: "高雄市小港區六苓里漢民路686號", tags: ["經銷商"] },
  { name: "御鋒木器行(御鋒家具)", displayName: "御鋒木器行(御鋒家具)", address: "宜蘭縣冬山鄉群英村冬山路三段338號", tags: ["經銷商"] },
  { name: "薇閣寢飾行", displayName: "薇閣寢飾行", address: "宜蘭縣羅東鎮賢文里忠孝路101號", tags: ["經銷商"] },
];

const storeGroups = [
  { name: "北部地區", en: "NORTH", stores: [...stores, ...dealers].filter((store) => /台北市|臺北市|新北市|基隆市|桃園市|新竹/.test(store.address)) },
  { name: "中部地區", en: "CENTRAL", stores: [...stores, ...dealers].filter((store) => /苗栗|台中市|臺中市|彰化|南投|雲林/.test(store.address)) },
  { name: "南部地區", en: "SOUTH", stores: [...stores, ...dealers].filter((store) => /嘉義|台南|臺南|高雄|屏東/.test(store.address)) },
  { name: "東部地區", en: "EAST", stores: dealers.filter((store) => /宜蘭|花蓮|臺東|台東/.test(store.address)) },
  { name: "醫療院所", en: "MEDICAL INSTITUTIONS", stores: medicalStores },
];

const storeLocationCount = storeGroups.reduce((count, group) => count + group.stores.length, 0);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState<number | null>(null);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const [selectedSeriesItemIndex, setSelectedSeriesItemIndex] = useState<number | null>(null);
  const [selectedAmbassadorFilmIndex, setSelectedAmbassadorFilmIndex] = useState(0);
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
  const selectedAmbassadorFilm = ambassadorFilms[selectedAmbassadorFilmIndex];
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
          <a href="#features" onClick={closeMenu}>認識 CBD</a><a href="#safety" onClick={closeMenu}>睡眠研究</a><a href="#products" onClick={closeMenu}>系列商品</a><a href="#technology" onClick={closeMenu}>好眠科技</a><a href="#endorsements" onClick={closeMenu}>品牌代言</a><a href="#testimonials" onClick={closeMenu}>使用者故事</a><a href="#news" onClick={closeMenu}>媒體報導</a><a href="#stores" onClick={closeMenu}>門市體驗</a>
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
          <figure className="cbd-video-frame cbd-video-block"><iframe src="https://www.youtube.com/embed/BmpU3CbUALE?rel=0&playsinline=1" title="CBD 漢麻二酚介紹影片" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></figure>
          <div className="cbd-intro-lower-grid cbd-intro-stack">
            <article className="doctor-story-card yang-story cbd-doctor-card cbd-expert-block"><figure><img src="/professional-doctors-lin-yang.jpg" alt="中醫藥學博士楊顓丞博士" /></figure><div><small>HERBAL TEXTILE RESEARCH</small><p className="doctor-role">中醫藥學博士</p><h3>楊顓丞 博士</h3><blockquote>「漢麻二酚成分及功效，結合纖維編織工法，經兩年多時間研發，並通過醫院臨床實驗，證實有效改善睡眠品質。」</blockquote><div className="doctor-biography"><p>睡眠，是每天生活中不可或缺的一部分，而寢具更是長時間與肌膚貼近的重要日常用品。</p><p>從中醫藥與草本成分的專業研究出發，楊顓丞博士將漢麻二酚（CBD）的成分特性進一步延伸至寢具纖維應用，思考如何透過特殊技術與編織工法，讓草本研究不只停留在實驗室，而能真正走進日常生活。</p><p>歷經兩年多的研發與反覆測試，團隊將 CBD 技術與寢具表布結合，並進一步透過醫院臨床睡眠實驗進行驗證，從科學數據觀察實際使用後的睡眠表現。</p><p>從成分研究、纖維技術到臨床驗證，每一個環節都經過層層探索與確認，也成為GLORY葛洛麗 CBD 草本忘憂好眠系列從研究走向日常的重要基礎。</p><p>讓專業研究不只存在於實驗室，更成為每一晚貼近生活的睡眠科技。</p></div></div></article>
            <div className="cbd-feature-panel cbd-overview-block"><div className="feature-list">{features.map(([no, en, titleLine1, titleLine2, copy]) => <article key={no}><span>{no} / {en}</span><h3><span>{titleLine1}</span>{titleLine2 ? <span>{titleLine2}</span> : null}</h3><p>{copy}</p></article>)}</div></div>
          </div>
        </div>
      </section>

      {catalogConfig ? <div className="product-modal-backdrop" onMouseDown={closeProductModal}>
        <section className="pillow-catalog-modal" id="product-catalog-dialog" role="dialog" aria-modal="true" aria-labelledby="pillow-catalog-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉產品系列" onClick={closeProductModal} autoFocus>×</button>
          <header className="pillow-catalog-heading"><small>{catalogConfig.en}</small><h2 id="pillow-catalog-title" className={catalogConfig.titleClass ?? ""}>{catalogConfig.title}</h2><p>{catalogConfig.copy}</p></header>
          <div className="pillow-catalog-grid">{catalogConfig.items.map((item, index) => {
            const isTempwiserContour = item.name.includes("Tempwiser 親水棉");
            return <button className={`pillow-catalog-card ${isTempwiserContour ? "hydrophilic-catalog-card" : ""}`} type="button" key={item.name} onClick={() => setSelectedSeriesItemIndex(index)}><span className="pillow-catalog-image"><img src={item.image} alt={item.name} /><i>{String(index + 1).padStart(2, "0")}</i></span><span className="pillow-catalog-copy"><small>{item.en}</small><strong className={isTempwiserContour ? "tempwiser-catalog-title" : ""}>{item.name}</strong><em>查看產品介紹 <b>→</b></em></span></button>;
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
          <div className="product-modal-visual"><img className={`product-modal-image pillow-series-image pillow-series-image-${selectedSeriesItemIndex} ${selectedSeriesItem.en === "PET COMFORT MAT QUILT" ? "pet-comfort-series-image" : ""}`} src={selectedSeriesItem.image} alt={selectedSeriesItem.name} /></div>
          <div className="product-modal-copy pillow-series-copy"><small>{selectedSeriesItem.en}</small><h2 id="pillow-detail-title" className={`pillow-series-title-nowrap ${selectedSeriesItem.name.length > 18 ? "pillow-series-title-long" : ""} ${selectedSeriesItem.name.includes("Tempwiser 親水棉") ? "tempwiser-title-nowrap" : ""}`}>{selectedSeriesItem.name}</h2><strong>{selectedSeriesItem.statement}</strong><p>{selectedSeriesItem.detail}</p><ul>{selectedSeriesItem.highlights.map((item) => <li key={item}>{item}</li>)}</ul>{selectedSeriesItem.featureDetails?.length ? <section className="pillow-feature-details" aria-label={`${selectedSeriesItem.name}產品特色`}><small>PRODUCT FEATURES</small><h3>{selectedSeriesItemIndex === 0 && selectedProductIndex === 0 ? "草本科技與天絲親膚特色" : "草本科技與產品特色"}</h3><ol>{selectedSeriesItem.featureDetails.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section> : null}<p className="product-modal-note">{selectedSeriesItem.note}</p><div className="product-modal-actions"><a className="button dark capsule" href="#stores" onClick={closeProductModal}>到門市體驗 <span>↗</span></a><button className="pillow-back-button" type="button" onClick={() => setSelectedSeriesItemIndex(null)}>返回系列商品</button></div></div>
        </section>
      </div> : null}

      <section className="evidence-story section" id="safety">
        <div className="section-label"><span>02</span><p>CLINICAL SLEEP RESEARCH</p></div>
        <header className="safety-editorial-head"><p className="eyebrow">檢驗與安全說明</p><h2>從睡眠數據，<br /><span className="safety-title-nowrap">看見安心的依據。</span></h2></header>

        <div className="clinical-data-card">
          <div className="clinical-data-intro"><small>CLINICAL SLEEP OBSERVATION</small><h3>全台近 500 萬人<br />失眠福音</h3><p>市場獨家醫學大學臨床試驗，觀察 CBD 枕頭使用前後的總睡眠、淺眠與深睡變化。</p><div className="clinical-seven"><strong>近 7 成</strong><span>受驗者明顯改善睡眠品質</span></div></div>
          <div className="clinical-charts"><div className="sleep-chart-grid"><article><h4>總睡眠數</h4><div className="chart-bars"><div><i style={{ height: "55%" }} /><strong>約 355</strong><span>使用前</span></div><div><i className="after" style={{ height: "76%" }} /><strong>約 376</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>淺眠</h4><div className="chart-bars"><div><i style={{ height: "60%" }} /><strong>約 208</strong><span>使用前</span></div><div><i className="after" style={{ height: "88%" }} /><strong>約 230</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article><article><h4>深睡</h4><div className="chart-bars"><div><i style={{ height: "53%" }} /><strong>約 61</strong><span>使用前</span></div><div><i className="after" style={{ height: "68%" }} /><strong>約 67</strong><span>使用後</span></div></div><small>睡眠時間／分</small></article></div><p>Effect of cannabidiol (CBD) containing pillow protector on sleep quality in health providers working at hospital.</p></div>
        </div>
        <figure className="safety-proof-banner" aria-label="CBD 獨家比利時萃取微膠囊技術、醫療臨床試驗、睡眠品質改善與 2025 MDPI 國際期刊認證">
          <img className="safety-proof-desktop" src="/cbd-clinical-certification-banner.png" alt="" />
          <div className="safety-proof-mobile" aria-hidden="true">
            <span><img src="/cbd-clinical-certification-banner.png" alt="" /></span>
            <span><img src="/cbd-clinical-certification-banner.png" alt="" /></span>
          </div>
        </figure>

      </section>

      <section className="product-showcase section" id="products">
        <div className="collection-head">
          <div><div className="section-label"><span>03</span><p>CBD SLEEP COLLECTION</p></div><p className="eyebrow collection-eyebrow-nowrap">CBD 草本忘憂好眠寢具</p><h2>從臥室到旅途，<br /><span className="collection-comfort-nowrap">延續熟悉的舒服。</span></h2></div>
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

      <section className="evidence-story section" id="technology">

        <div className="section-label"><span>04</span><p>SLEEP TECHNOLOGY</p></div>

        <div className="cbd-textile-story">
          <div className="textile-cycle-visual">
            <img src="/cbd-textile-cycle.png" alt="CBD 萃取、微膠囊化、編織進纖維循環圖" />
          </div>
          <div className="cbd-textile-copy"><small>MICROCAPSULE TEXTILE TECHNOLOGY</small><h3 className="cbd-textile-title-nowrap">CBD 漢麻二酚表布</h3><h4>獨家比利時萃取微膠囊技術</h4><p>將 CBD 成分提煉至微膠囊分子，編織進纖維；睡眠時緩慢且持續釋放微量 CBD 成分。</p><ul className="cbd-textile-benefits"><li><span>01</span><strong>草本助眠・漢麻二酚</strong></li><li><span>02</span><strong>醫藥大學臨床實驗證明</strong></li><li><span>03</span><strong>獨家微膠囊技術</strong></li><li><span>04</span><strong>天然草本技術製成</strong></li><li><span>05</span><strong>天然抗菌除臭</strong></li></ul></div>
        </div>
      </section>

      <section className="structure section" id="structure">
        <div className="section-label"><span>04</span><p>MATERIAL &amp; STRUCTURE</p></div>
        <div className="structure-heading structure-heading-editorial"><div><p className="eyebrow">材質與產品結構</p><h2 className="structure-title"><span>每一層，</span><span className="structure-title-nowrap">都為舒適睡眠而設計。</span></h2></div></div>
        <div className="structure-editorial">
          <figure className="structure-product-photo"><span>CBD PILLOW / SIDE VIEW</span><img src="/cbd-hydrophilic-contour-pillow-bedroom.png" alt="晨光臥室中的 CBD 草本忘憂好眠寢具好眠親水枕" /><figcaption>柔和表布與貼合枕芯，共同構成每晚靠近肌膚的舒適層次。</figcaption></figure>
          <div className="structure-layers"><header><small>THREE-LAYER COMFORT</small><h3>由外而內，<br />看見每一層的角色。</h3></header><article><span>01</span><div><h4>CBD 機能外布套</h4><p>草本微膠囊機能針織表布，建立柔和、親膚的接觸層。</p></div></article><article><span>02</span><div><h4>內層與保護結構</h4><p>位於表布與枕芯之間；實際內套、拉鍊及拆卸方式依各款商品規格為準。</p></div></article><article><span>03</span><div><h4>Tempwiser 親水棉枕芯</h4><p>以貼合、慢回彈與水氣調節，承接頭頸並回應不同睡姿。</p></div></article></div>
        </div>
        <div className="structure-spec-panel"><table><tbody><tr><th>表布特色</th><td>CBD 草本微膠囊機能針織表布</td><th>枕芯材質</th><td>Tempwiser 親水棉</td></tr><tr><th>睡感重點</th><td>柔和觸感、貼合承托、慢回彈</td><th>日常清潔</th><td>枕芯與外布套分開處理，依商品洗標為準</td></tr><tr><th>結構配置</th><td>依不同枕款的內套、拉鍊與可拆設計為準</td><th>商品規格</th><td>尺寸、高度與產地請以正式商品標示為準</td></tr></tbody></table></div>
      </section>

      <section className="pillow-section section" id="pillow">
        <div className="section-label"><span>04</span><p>SEAGULL CONTOUR DESIGN</p></div>
        <p className="seagull-kicker">海鷗減壓枕型</p>
        <div className="seagull-combined-layout">
          <div className="seagull-editorial">
            <figure className="seagull-photo"><img src="/cbd-seagull-pressure-relief-pillow-bedroom.png" alt="晨光臥室中展示 CBD 草本忘憂好眠寢具海鷗減壓枕型" /><figcaption>SEAGULL CONTOUR / NATURAL SUPPORT</figcaption></figure>
            <div className="seagull-copy">
              <h2 className="seagull-title"><span>海鷗曲線，讓肩頸自然找到舒服的位置。</span></h2>
              <div className="product-details seagull-details"><article><span>01</span><div><h3>草本科技 × Tempwiser 親水棉</h3><p>結合漢麻二酚天然草本技術，枕芯採用 GLORY 獨家專利 Tempwiser 親水棉，兼顧包覆與回彈。</p></div></article><article><span>02</span><div><h3>海鷗曲線支撐</h3><p>特殊海鷗造型回應仰睡、側睡的不同承托需求，讓頭頸與肩部自然找到合適位置。</p></div></article><article><span>03</span><div><h3>可調高度設計</h3><p>可依不同身形與睡眠習慣增添高度，更貼合頸部曲線，減少肩頸懸空與壓迫感。</p></div></article></div>
              <a className="button dark capsule seagull-button" href="#stores">到門市實際感受 <span>↗</span></a>
            </div>
          </div>
          <article className="doctor-story-card lin-story seagull-doctor-card"><figure><img src="/dr-lin-kuo-wei.png" alt="美國脊骨神經醫學博士林國偉博士" /></figure><div><small>SPINAL SUPPORT PERSPECTIVE</small><p className="doctor-role">美國脊骨神經醫學博士</p><h3>林國偉 博士</h3><blockquote>「理想的枕頭可填補因脊椎弧度產生的空隙，讓頸椎被自然支撐。若枕頭高度不對，會造成神經孔空間改變，神經傳導受到影響。」</blockquote><div className="doctor-biography"><p>一顆真正適合的枕頭，不只是柔軟舒服，更重要的是能否在睡眠時，給予頭部與頸椎恰到好處的承托。</p><p>從脊骨神經醫學的專業角度來看，每個人的身形、肩寬、頸椎弧度與習慣睡姿都不盡相同，因此，枕頭的高度與支撐方式，也不應只有單一標準。</p><p>GLORY 葛洛麗 CBD 草本忘憂好眠枕以人體工學為設計基礎，透過海鷗曲線與可調式高度設計，因應仰睡、側睡等不同睡姿，協助填補頭頸與寢具之間的空隙，讓頭部、頸部與肩部獲得更自然的承托。</p><p>從人體結構出發，把專業醫學觀點融入每一處設計細節，讓枕頭不只是陪伴入睡，更成為每天睡眠中重要的支撐。</p><p>找到適合自己的高度，讓每一次躺下，都回到更自然、舒適的睡眠姿勢。</p></div></div></article>
        </div>
      </section>

      <section className="endorsement-section section" id="endorsements">
        <div className="section-label"><span>05</span><p>BRAND AMBASSADOR</p></div>
        <div className="endorsement-intro"><div><p className="eyebrow">吳若權・品牌代言三部曲</p><h2>一段合作的開始，<br /><span className="endorsement-title-nowrap">從相信彼此的品格開始。</span></h2></div></div>
        <article className="ambassador-profile-strip">
          <figure className="endorsement-portrait wu"><img src="/wu-ruo-quan.jpg" alt="吳若權老師" /></figure>
          <div><small>BRAND AMBASSADOR</small><h3>吳若權 老師</h3><strong className="ambassador-title-lines"><span>GLORY 葛洛麗品牌</span><span>CBD 草本忘憂好眠寢具代言人</span></strong></div>
          <div className="ambassador-profile-bio"><p>以溫柔而真誠的生活觀點，陪伴品牌傳遞舒適、安定且貼近日常的好眠想像。</p><p>長期透過廣播、演講、課程與個人諮詢，陪伴人們整理生活節奏與內在感受；這次也從實際使用經驗出發，分享他對品牌品格、睡眠選擇與人生休息的理解。</p></div>
        </article>
        {ambassadorFilms.length > 1 ? <nav className="ambassador-film-tabs" aria-label="品牌代言三部曲影片選擇">{ambassadorFilms.map((film, index) => <button type="button" className={selectedAmbassadorFilmIndex === index ? "active" : ""} key={film.number} onClick={() => setSelectedAmbassadorFilmIndex(index)} aria-pressed={selectedAmbassadorFilmIndex === index}><span>{film.number}</span><strong>品牌三部曲・{film.chapter}<small>{film.label}</small></strong></button>)}</nav> : null}
        <div className="ambassador-film-layout">
          <div className="ambassador-film-stage">
            <header><span>FILM {selectedAmbassadorFilm.number}</span><p>{selectedAmbassadorFilm.en}</p><strong>{selectedAmbassadorFilm.number} / {String(ambassadorFilmTotal).padStart(2, "0")}</strong></header>
            <video key={selectedAmbassadorFilm.video} controls playsInline preload="metadata" aria-label={`吳若權品牌代言${selectedAmbassadorFilm.label}影片`}>
              <source src={selectedAmbassadorFilm.video} type="video/mp4" />
              您的瀏覽器不支援影片播放。
            </video>
          </div>
          <article className="ambassador-film-copy" data-film-number={selectedAmbassadorFilm.number}>
            <header><small>品牌代言三部曲・{selectedAmbassadorFilm.chapter}</small><span className="ambassador-film-chapter-label">{selectedAmbassadorFilm.label}・FILM {selectedAmbassadorFilm.number}</span><h3>{selectedAmbassadorFilm.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3></header>
            <div className="ambassador-film-copy-body"><div className="ambassador-film-story">{selectedAmbassadorFilm.paragraphs.map((paragraph) => <p className={paragraph.startsWith("「") ? "ambassador-film-quote-line" : undefined} key={paragraph}>{paragraph}</p>)}</div>{selectedAmbassadorFilm.points.length ? <div className="ambassador-film-highlights" aria-label={`${selectedAmbassadorFilm.label}重點`}>{selectedAmbassadorFilm.points.map((point) => <p key={point}>{point}</p>)}</div> : null}<blockquote><span>{selectedAmbassadorFilm.closing}</span></blockquote></div>
          </article>
        </div>
      </section>

      <section className="testimonial-section section" id="testimonials">
        <div className="section-label"><span>06</span><p>REAL SLEEP STORIES</p></div>
        <header className="testimonial-heading"><div><p className="eyebrow">使用者見證</p><h2><span>每一段好眠故事，</span><span className="testimonial-title-nowrap">都從找到適合自己開始。</span></h2></div></header>
        <div className="testimonial-crowd testimonial-dialogue-scene" aria-label="使用者見證對話群像">
          <img src="/testimonial-dialogue-crowd.png" alt="人群與五則使用者見證對話框" />
          {testimonialCrowd.map((person) => <button className={`testimonial-bubble testimonial-bubble-${person.slot}${selectedTestimonialIndex === person.testimonial ? " is-active" : ""}`} type="button" key={person.slot} onClick={() => setSelectedTestimonialIndex(person.testimonial)} aria-pressed={selectedTestimonialIndex === person.testimonial} aria-haspopup="dialog" aria-controls="testimonial-story-dialog" aria-label={`閱讀${testimonials[person.testimonial].name}的使用者見證`}><span>「{testimonials[person.testimonial].headline}」</span><small>{testimonials[person.testimonial].name}・閱讀完整心得</small></button>)}
        </div>
      </section>

      <section className="news-section section" id="news">
        <div className="section-label"><span>07</span><p>PRESS &amp; NEWS</p></div>
        <header className="news-heading compact"><div><p className="eyebrow">TOP U.S. MEDIA COVERAGE</p><h2>來自美國媒體的<br />好眠新消息。</h2></div></header>
        <div className="news-grid">{newsItems.map((item, index) => <article className={`news-card ${item.tone}`} key={`${item.date}-${item.source}`}><a className="news-card-link" href={item.url} target="_blank" rel="noreferrer" aria-label={`前往 ${item.source} 閱讀原始新聞`}><div className="news-card-mark"><span>{item.short}</span><i>{String(index + 1).padStart(2, "0")}</i></div><div className="news-card-copy"><small>{item.date} · {item.source}</small><h3>{item.title}</h3><p>{item.summary}</p><em>閱讀新聞 <span>↗</span></em></div></a></article>)}</div>
      </section>

      <section className="care section" id="care">
        <div className="section-label"><span>08</span><p>CARE GUIDE</p></div>
        <div className="care-wash-layout"><header><p className="eyebrow">使用與保養方式</p><h2 className="care-title-lines"><span>讓舒服</span><span>陪伴更久</span></h2><p className="care-intro-lines"><span>日常以除塵、局部清潔為主；枕芯與布套請分開處理。</span><span>實際洗滌仍以商品洗標為準。</span></p><div className="care-symbols"><span>低溫</span><span>勿漂白</span><span>枕芯勿機洗</span></div></header><div className="wash-guide-list"><article><span>01</span><div><h3>無明顯髒污</h3><p>可用吸塵器清除表面的灰塵或皮屑。</p></div></article><article><span>02</span><div><h3>有局部污跡</h3><p>可用濕布沾少許肥皂，溫和地輕輕清潔。</p></div></article><article><span>03</span><div><h3>枕芯特殊材質</h3><p>勿機洗，避免直接曝曬於太陽下，或以高溫方式處理。</p></div></article><article className="wash-cover"><span>04</span><div><h3>防護布套</h3><p className="wash-instruction-lines"><span>可水洗、可乾洗；勿烘乾及漂白。</span><span>浸泡時間請勿超過 30 分鐘，建議放入大型洗衣袋後再清洗，並以低溫熨燙。</span></p></div></article><article className="wash-cover cbd"><span>05</span><div><h3>CBD 外布套</h3><p className="wash-instruction-lines"><span>可水洗、可乾洗、可低溫烘乾；勿漂白。</span><span>浸泡時間請勿超過 30 分鐘，建議放入大型洗衣袋後再清洗，並以低溫熨燙。</span></p></div></article></div></div>
        <p className="care-source-note">以上內容依品牌提供之洗滌說明整理。若商品洗標、材質標示或原廠文件另有規定，請優先依實際商品標示操作。</p>
      </section>

      <section className="stores" id="stores"><div className="section-label"><span>08</span><p>IN-STORE EXPERIENCE</p></div><div className="stores-copy"><h2>枕頭合不合適，<br />躺過才知道。</h2><p className="store-intro-lines"><span>每個人的肩寬、睡姿、床墊軟硬與習慣都不同。</span><span>歡迎至上品寢具門市親自試躺，由專業人員陪你找到更適合自己的枕頭高度與睡感。</span></p><div className="store-action-row"><button className="button primary store-list-trigger" type="button" onClick={openStoreDirectory} aria-haspopup="dialog" aria-controls="store-directory-dialog">查看全台門市 <span>↗</span></button><button className="button partner-trigger" type="button" onClick={openPartnerContact} aria-haspopup="dialog" aria-controls="partner-contact-dialog">專人接洽 <span>↗</span></button></div><aside className="partner-invite"><small>PARTNERSHIP</small><h3>誠徵合作夥伴</h3><p>歡迎設計旅宿、健康生活通路、醫療院所及企業禮贈合作，與 GLORY 一起把更好的睡眠體驗帶進更多日常場景。</p></aside></div><div className="stores-stamp"><strong>15</strong><span>MINUTES</span><p>一對一睡感相談<br />仰睡・側睡實際感受</p></div></section>

      {storeModalOpen ? <div className="product-modal-backdrop store-modal-backdrop" onMouseDown={() => setStoreModalOpen(false)}>
        <section className="store-modal" id="store-directory-dialog" role="dialog" aria-modal="true" aria-labelledby="store-modal-title" onMouseDown={(event) => event.stopPropagation()}>
          <button className="product-modal-close" type="button" aria-label="關閉門市資訊" onClick={() => setStoreModalOpen(false)} autoFocus>×</button>
          <header className="store-modal-heading"><small>SONG BEAM STORE DIRECTORY</small><h2 id="store-modal-title">全台門市資訊</h2><p>共 {storeLocationCount} 處門市、專櫃與經銷據點，歡迎於前往前確認營業時間與試躺服務。</p></header>
          <div className="store-regions">{storeGroups.map((group) => <section className="store-region" key={group.name}><header><small>{group.en}</small><h3>{group.name}</h3><span>{group.stores.length} 處</span></header>{group.stores.length ? <div className="store-modal-grid">{group.stores.map((store, index) => <article key={store.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{store.displayName ?? `上品寢具床墊館【${store.name}】`}</h3><p>{store.address}</p><ul>{store.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div> : <p className="store-region-empty">此區目前尚無門市資訊，最新據點將持續更新。</p>}</section>)}</div>
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
          <div className={`testimonial-modal-figure testimonial-avatar-${selectedTestimonial.gender}`} aria-hidden="true"><img className="testimonial-avatar-image" src={`/testimonial-avatar-${selectedTestimonial.gender}.png`} alt="" /><small>REAL SLEEP STORY</small></div>
          <div className="testimonial-modal-copy"><small>USER TESTIMONIAL · {String((selectedTestimonialIndex ?? 0) + 1).padStart(2, "0")}</small><h2 id="testimonial-modal-title">{selectedTestimonial.name}</h2><p>{selectedTestimonial.profile}</p><strong className="testimonial-product">使用產品｜{selectedTestimonial.product}</strong><blockquote>「{selectedTestimonial.headline}」</blockquote><div className="testimonial-story-body">{selectedTestimonial.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><button type="button" onClick={() => setSelectedTestimonialIndex(null)}>回到使用者見證 <span>×</span></button></div>
        </section>
      </div> : null}

      <footer><div className="footer-top"><a className="footer-logo" href="#top" aria-label="GLORY 葛洛麗名床寢具首頁"><img src="/glory-logo-transparent.png" alt="GLORY 1953 德國葛洛麗名床寢具" /></a><p>舒適材質、貼合支撐，以及安心放鬆的睡眠環境。</p></div><div className="footer-nav"><a href="#features">CBD 漢麻二酚簡介</a><a href="#endorsements">品牌代言</a><a href="#pillow">枕型設計</a><a href="#structure">材質結構</a><a href="#safety">材質檢驗</a><a href="#products">系列商品</a><a href="#news">新聞報導</a><a href="#testimonials">使用者見證</a><a href="#stores">門市體驗</a></div><div className="footer-bottom"><span>© 2026 GLORY BEDDING</span></div></footer>
    </main>
  );
}
