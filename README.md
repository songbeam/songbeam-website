# 上品寢具 CBD 草本忘憂好眠寢具系列網站

這是 Next.js 16 App Router 專案，正式部署採用 Next.js 靜態匯出。原始碼入口是 `app/page.tsx`，不應在專案根目錄手動維護 `index.html`；執行建置後，Next.js 會產生完整的 `out/index.html` 與所需的 CSS、JavaScript、圖片及影片。

## GitHub 與 AWS Amplify Hosting

專案根目錄已提供 `amplify.yml`，連接 GitHub repository 後可直接建置：

- Node.js：22
- 安裝指令：`npm ci`
- 建置指令：`npm run build:amplify`
- 發布目錄：`out`
- 網站入口：`out/index.html`（建置時自動產生，不提交 Git）

在 Amplify 建立應用程式時，請使用 Amazon Linux 2023 建置映像，並確認採用靜態 Hosting 設定、platform 為 `WEB`、Build output directory 為 `out`，不要將此 Next.js 16 專案設成 SSR／WEB_COMPUTE。若自動偵測將它建立成 WEB_COMPUTE，可用 AWS CLI 改回靜態平台後重新部署：

```bash
aws amplify update-app --app-id YOUR_APP_ID --platform WEB --region YOUR_REGION
```

建議在 Amplify 的環境變數加入：

```text
NEXT_PUBLIC_SITE_URL=https://你的正式網域
```

此變數只影響 Open Graph 與社群分享網址；未設定時會沿用目前正式站網址，不影響頁面功能。

## 本機建置與檢查

```bash
npm ci
npm run build
npm run test:static
```

完成後可以靜態伺服器預覽：

```bash
npx serve out
```

請透過 HTTP 伺服器開啟 `out/`，不要直接用 `file://` 開啟 `out/index.html`，以免瀏覽器阻擋 JavaScript、影片或絕對路徑資源。

## 其他既有流程

- `npm run dev`：啟動原有即時預覽環境
- `npm run build:sites`：建立原有 Sites 發布版本
- `npm test`：檢查 Sites 版本的頁面內容與樣式規則
- `npm run build:html`：另行產生選用的 `上品寢具網站.html` 線上包裝頁
- `npm run test:html`：驗證選用的單檔包裝頁

`上品寢具網站.html` 不是 AWS Amplify 的入口檔；Amplify 應發布 `out/` 內的完整靜態網站。
