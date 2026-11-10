# SALE TRACKER — frontend prototype

A bilingual (English/Ukrainian), dark-mode dashboard prototype for a personal store and product price tracker.

## Run locally
Open `index.html` in a browser. No build step is required.

## Publish on GitHub Pages
1. Create a GitHub repository (or use your existing `salesmonitorbot` repository only if you want to keep the prototype together).
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. GitHub will show the public Pages URL after deployment.

## Prototype limitations
- Product rows, stores, prices, and activity are illustrative sample data.
- The EN / UA language toggle is included; the selection is saved in the browser.
- The add-product form and currency display work in the browser, but new rows are not persisted to a database.
- No live scraping, login, admin authorization, D1 database, or Telegram integration is connected yet.
- Exchange rates are static demo values. Live FX rates will be added separately.
- The Google Fonts import requires an internet connection; system fallbacks are available.

## Planned next stage
Cloudflare Pages + Workers + D1 for the web app and database; scheduled Python monitoring for store/product checks; Telegram alerts from server-side secrets.
