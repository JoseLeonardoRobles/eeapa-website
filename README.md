# EEAPA, S.A. — Website

Static, ad-free, bilingual (Spanish/English) website for **EEAPA, S.A. — Eficiencia
Energética y Ambiente de Panamá**.

No build step, no framework, no tracking, no ads. Just open `index.html`.

## Files

| File           | Purpose                                              |
| -------------- | ---------------------------------------------------- |
| `index.html`   | All page content (single page)                       |
| `styles.css`   | Theme and layout (night-sky navy + amber/teal)       |
| `script.js`    | Language toggle (ES/EN), mobile nav, footer year     |
| `favicon.svg`  | Site icon                                            |
| `robots.txt`   | Search-engine directives                             |
| `sitemap.xml`  | Sitemap for search engines                           |
| `CNAME`        | Custom domain for GitHub Pages (`www.eeapa.com`)     |

## Preview locally

```bash
cd website
python3 -m http.server 4321
# open http://localhost:4321
```

## Deploy options (all free, no ads)

### Option A — GitHub Pages
1. Create a repo (e.g. `eeapa-website`) and push these files.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Add custom domain `www.eeapa.com` (the included `CNAME` does this).
4. At your domain registrar, add a CNAME DNS record:
   `www  →  <username>.github.io`

### Option B — Netlify (drag & drop)
1. Go to https://app.netlify.com/drop
2. Drag the `website` folder onto the page. It deploys instantly.
3. Site settings → Domain → add `www.eeapa.com`, then add the DNS record Netlify shows.

### Option C — Cloudflare Pages
1. Connect the repo or upload the folder at https://pages.cloudflare.com
2. Add `www.eeapa.com` under Custom domains.

## Editing content

- **Text**: edit Spanish directly in `index.html`. For the English version, edit the
  matching key in the `I18N.en` object in `script.js`.
- **Prices / packages**: search `paquetes` in `index.html`.
- **Contacts**: search `eeapa.com` in `index.html`.

© 2026 EEAPA, S.A.
