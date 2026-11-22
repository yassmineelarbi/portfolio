# Yassmine El Arbi · Portfolio

Bilingual (EN/FR) engineering portfolio. Next.js 15 (App Router, static export), TypeScript, plain CSS.
No UI library, no CSS framework: the only runtime dependencies are `next`, `react` and `react-dom`.

## Run locally

```powershell
npm install
npm run dev          # http://localhost:3000  → redirects to /en/ or /fr/
npm run build        # static site in out/
npx serve out        # or any static server, to preview the production build
python scripts/check_links.py   # after a build: internal links, images, html lang, EN/FR switch targets
```

## Structure

```
src/
  app/
    (root)/page.tsx                 "/" → redirects to /en/ or /fr/ (saved choice, then browser language)
    [lang]/layout.tsx               html lang, fonts, header, footer
    [lang]/page.tsx                 homepage: hero, about, projects, experience, skills, education, leadership, contact
    [lang]/about/page.tsx           about page
    [lang]/projects/page.tsx        project index
    [lang]/projects/[slug]/page.tsx one page per project (generated for both languages)
    globals.css                     design system (tokens, type, layout, components)
  content/
    site.ts                         every UI string + profile, experience, skills, education, leadership, photos
    projects.ts                     the five case studies
  components/                       Header (EN/FR switch, mobile menu), WorkList, Trace, Frame/Figure, ...
  lib/i18n.ts                       locales, L<T> type, path switching
  lib/seo.ts                        titles, descriptions, canonical + hreflang alternates
public/
  cv/                               CV-EN and CV-FR PDFs (the download link follows the page language)
  images/projects/<slug>/           project visuals (WebP)
  images/events/                    event photos
  images/portrait/                  empty: add a portrait here (see below)
scripts/
  optimize_images.py                source → WebP pipeline with a manifest of every image used
  check_links.py                    static QA of the exported site
assets-src/
  report-figures/                   figures extracted from the SOMEF and P2M reports (image sources)
  PHOTOS_TO_REVIEW.md               photos found on disk that were NOT assigned automatically
```

## Translations

All text is written once per language as `{ en: "...", fr: "..." }` in `src/content/`. Facts shared by both
languages (numbers, tool names) are written once. Pages render from the same components for both locales,
so a page cannot exist in one language only. The EN/FR switch maps `/en/<path>` ↔ `/fr/<path>` and keeps the
current section anchor.

## Adding or replacing images

1. Add a line to `MANIFEST` in `scripts/optimize_images.py` (source path → `public/images/...`), then run
   `npm run images`. Or drop a ready WebP/JPEG into `public/images/` directly.
2. Reference it in `src/content/projects.ts` (`cover` or `gallery`) or `src/content/site.ts` (`eventPhotos`).
   Set `paper: true` for charts and diagrams so they sit on a light panel instead of being cropped.

**Portrait:** put the file in `public/images/portrait/` and set `profile.portrait` in `src/content/site.ts`
to `{ src: "/images/portrait/<file>", width, height }`. Until then the About page shows a marked placeholder.

## Placeholders

Information that still needs confirming is rendered as a dashed pink "To be completed / À compléter" box.
Search `placeholder` in `src/content/projects.ts` to find them all.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yassmine-elarbi.dev`) before `npm run build` so canonical and
hreflang URLs are absolute, then upload `out/` to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Contact form

The form in the Contact section sends messages through [Web3Forms](https://web3forms.com), which works with a static site.

1. On web3forms.com, enter the inbox that should receive the messages; the access key arrives by email.
2. Copy `.env.example` to `.env.local` and paste the key after `NEXT_PUBLIC_WEB3FORMS_KEY=`.
3. Run `npm run build` (or restart `npm run dev`). On a host such as Vercel or Netlify, add the same variable in its settings.

The key only allows sending to that inbox, so it is safe in the public build. Without a key, the Send button opens the visitor's mail app instead.
