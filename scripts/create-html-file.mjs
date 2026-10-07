import { writeFile } from "node:fs/promises";

const destination = new URL("../上品寢具網站.html", import.meta.url);
const siteUrl = "https://shangpin-cbd-comfort.suchloe.chatgpt.site/";

const standaloneHtml = `<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>上品寢具 CBD 草本忘憂好眠寢具系列</title>
    <style>
      html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; background: #eef1ea; }
      iframe { display: block; width: 100%; height: 100%; border: 0; }
    </style>
  </head>
  <body>
    <iframe
      src="${siteUrl}"
      title="上品寢具 CBD 草本忘憂好眠寢具系列"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    <noscript><a href="${siteUrl}">開啟上品寢具網站</a></noscript>
  </body>
</html>
`;

await writeFile(destination, standaloneHtml, "utf8");
