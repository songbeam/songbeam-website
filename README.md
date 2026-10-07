# 上品寢具 CBD 草本忘憂好眠寢具系列網站

## 靜態部署

此專案預設會輸出不需要 Node.js 伺服器的靜態網站：

```bash
npm install
npm run build
```

完成後，請將 `out/` 目錄內的全部檔案上傳到靜態主機的網站根目錄。可用於 Netlify、Cloudflare Pages、AWS S3、一般虛擬主機或其他支援 HTML/CSS/JavaScript 的空間。

建置完成時也會在專案根目錄產生 `上品寢具網站.html`。這是可以直接點開的單一 HTML 入口檔，會在檔案內完整載入正式網站，因此彈出視窗、品牌代言三部曲切換與影片播放都與正式網站一致。開啟時需要網路連線。

- 建置指令：`npm run build`
- 發布目錄：`out`
- 單一 HTML 檔案：`上品寢具網站.html`
- Node.js 版本：`22.13.0` 以上
- 不需要資料庫、伺服器端 API 或環境變數

若要在本機確認靜態輸出，可執行：

```bash
npx serve out
```

請從網站根目錄發布，確保 `/圖片檔名`、`/影片檔名` 與 `/_next/` 資源路徑可以正確讀取。

## Sites 相容建置

原有 Sites 發布流程仍保留：

```bash
npm run build:sites
```

## 常用指令

- `npm run dev`：啟動原有的即時預覽環境
- `npm run build`：輸出可直接部署的靜態網站至 `out/`
- `上品寢具網站.html`：直接開啟的單一 HTML 入口檔
- `npm run test:static`：重新輸出並檢查靜態網站必要檔案
- `npm run build:sites`：建立原有 Sites 發布版本
- `npm test`：檢查 Sites 版本的頁面內容與樣式規則
