import { readFile, writeFile } from "node:fs/promises";

const source = new URL("../out/index.html", import.meta.url);
const destination = new URL("../上品寢具網站.html", import.meta.url);
const siteUrl = "https://shangpin-cbd-comfort.suchloe.chatgpt.site/";

const exportedHtml = await readFile(source, "utf8");
const standaloneHtml = exportedHtml.replace(
  "<head>",
  `<head><base href="${siteUrl}"/>`,
);

await writeFile(destination, standaloneHtml, "utf8");
