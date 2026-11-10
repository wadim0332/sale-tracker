# SALE TRACKER 2.0 — Sale & Discount Monitor

Bilingual English/Ukrainian static frontend prototype.

## Deploy
Upload `index.html`, `styles.css`, `app.js`, and `README.md` to the root of the `sale-tracker` GitHub repository. Cloudflare Pages settings: branch `main`, framework preset `None`, build command blank, output directory `.`.

## Prototype features
- Overview focused on store-wide sales and promotions.
- Stores page and universal Add store form (custom store name, URL, category).
- Sales & Discounts page with illustrative seasonal sale, outlet, promo and extra-discount examples.
- Optional Products page, Activity and Settings.
- EN/UA language switch with browser preference persistence.
- Responsive warm light theme using the supplied grey/gold palette.

## Limitations
Demo sales are illustrative, not verified live offers. Added stores are only kept in the current browser session. No database, automatic website checks, authentication, scheduler or Telegram integration is connected yet. The prototype does not claim that the listed retailers currently have these promotions.

## Next stage
Connect Cloudflare D1 and server-side scheduled checks, implement per-store parsers, persist store and sale records, then add Telegram alerts and authentication.


## v0.3 usability update
- Store list is saved in browser LocalStorage and survives page reloads on the same browser/device.
- Duplicate store URLs are prevented.
- Stores can be removed from the Stores page.
- Browser alert popups were replaced with in-page toast notifications.
- Typography and form controls were enlarged for readability.

Note: LocalStorage is browser/device-specific. It is not cloud sync or a backup. Clearing browser site data removes the saved list. Cloudflare D1 will be used later for cross-device persistence.
