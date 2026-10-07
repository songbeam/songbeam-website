import { readFile, writeFile } from "node:fs/promises";

const source = new URL("../out/index.html", import.meta.url);
const destination = new URL("../上品寢具網站.html", import.meta.url);
const siteUrl = "https://shangpin-cbd-comfort.suchloe.chatgpt.site/";

const exportedHtml = await readFile(source, "utf8");
const stylesheetPattern = /<link rel="stylesheet" href="([^"]+)"[^>]*\/>/g;
const stylesheetMatches = [...exportedHtml.matchAll(stylesheetPattern)];

let standaloneHtml = exportedHtml;
for (const match of stylesheetMatches) {
  const stylesheetPath = match[1].replace(/^\//, "");
  const stylesheet = await readFile(new URL(`../out/${stylesheetPath}`, import.meta.url), "utf8");
  const portableStylesheet = stylesheet.replace(
    /url\((['"]?)\/(?!\/)/g,
    `url($1${siteUrl}`,
  );
  standaloneHtml = standaloneHtml.replace(match[0], `<style>${portableStylesheet}</style>`);
}

standaloneHtml = standaloneHtml
  .replace("<head>", `<head><base href="${siteUrl}"/>`)
  .replace(/\b(src|href|poster)="\/(?!\/)/g, `$1="${siteUrl}`)
  .replace(
    /<iframe src="https:\/\/www\.youtube\.com\/embed\/BmpU3CbUALE[^"]+"/,
    `<iframe src="${siteUrl}video-player"`,
  );

await writeFile(destination, standaloneHtml, "utf8");
