# Helping Hands Charity Services

A premium, mobile-first marketing site for the Helping Hands vehicle donation
program. Built with **Next.js (App Router)** and **React**, with SEO baked in.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## What's inside

- **Home** (`/`) — hero, featured partners, how it works + stats, donor
  testimonials, and an on-page donation form (the careasy.org structure).
- **About** (`/about`) — story, values, **team** section, and a blog preview.
- **Blog** (`/blog`, `/blog/[slug]`) — listing + individual articles.
- **Legal** (`/disclaimer`, `/privacy`) and a custom **404**.

## SEO

- Per-page `metadata` (title, description, canonical, Open Graph, Twitter).
- Auto-generated **Open Graph image** (`app/opengraph-image.jsx`).
- `sitemap.xml` and `robots.txt` (`app/sitemap.js`, `app/robots.js`).
- JSON-LD structured data: Organization (site-wide), FAQ (home), Article (posts).
- Semantic HTML, skip link, reduced-motion support.

## Editing content

All swappable content lives in **`lib/data.js`** (partners, team, testimonials,
blog posts, stats) and **`lib/site.js`** (name, contact info, nav, SEO defaults).
Team members and blog posts are placeholders — replace them there.

## Design system

Tokens (colors, spacing, radii, type) are defined in `app/globals.css`.
Type pairs **Bricolage Grotesque** (display) with **Hanken Grotesk** (body).
Styling is via CSS Modules — no inline styles, no icon fonts (SVG icons in
`components/icons.jsx`).

## Notes

- Update the live domain in `lib/site.js` (`url`) so canonical/OG/sitemap URLs
  resolve correctly.
- The donation form (`components/home/DonateForm.jsx`) currently shows a success
  state on submit — wire `handleSubmit` to your CRM or donation backend.
