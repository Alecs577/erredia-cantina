# ERREDIA — Cantina SPA (Production Ready)

Vetrina di lusso per **ERREDIA** — vini biologici d'Abruzzo. React 19, Vite 8, Tailwind CSS v4, Framer Motion.

## Comandi

```bash
npm install
npm run dev      # sviluppo locale
npm run build    # build produzione → cartella dist/
npm run preview  # anteprima della build
```

## Deploy (Vercel consigliato)

1. Collega il repository a [Vercel](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Collega il dominio `errediaorganicwines.it`

Il file `vercel.json` include rewrite SPA, cache asset e header di sicurezza.

## Asset

| Percorso | Uso |
|----------|-----|
| `public/images/hero.webp` | Hero |
| `public/images/terroir.webp` | Sezione storia |
| `public/images/label-story.webp` | Etichetta |
| `public/images/wines/*.webp` | Catalogo vini |
| `public/og-image.webp` | Social preview |

## Produzione — checklist completata

- Immagini WebP ottimizzate, PNG PDF rimossi
- SEO: meta OG/Twitter, JSON-LD Winery, `robots.txt`, `sitemap.xml`
- Privacy policy IT/EN (senza form)
- Contatti: telefono + mappa (no form)
- i18n IT/EN con persistenza
- Lazy loading immagini below-the-fold
- Favicon brand, skip link accessibilità

## Dati vini

Modifica `src/data/winesData.js` per aggiungere o aggiornare etichette e schede tecniche.
