# Partner Logos — how to add them

The nonprofit landing pages and the directory are built to use each partner's
real logo. Until a logo file is added, the page shows a clean branded **monogram
badge** automatically, so nothing ever looks unfinished.

## How to add a logo (no code needed)

1. Save the nonprofit's logo as a **PNG with a transparent background** (or a
   clean white background), ideally square-ish, at least 200×200px.
2. Name the file **exactly the partner's slug** + `.png`, and drop it into
   `public/partners/`.

   The slug is the last part of the page URL. Examples:
   - Rescue Mission Alliance → `public/partners/rescue-mission-alliance.png`
   - Heal the Bay → `public/partners/healthebay.png`
   - WEAVE → `public/partners/weave.png`

3. Open `lib/partners.js`, find that partner, and add a `logo` line:

   ```js
   { slug: "rescue-mission-alliance", name: "Rescue Mission Alliance",
     category: "Housing & Basic Needs",
     logo: "/partners/rescue-mission-alliance.png",
     mission: "..." },
   ```

That's it. The logo appears on the landing page hero and the directory card,
and the monogram disappears for that partner.

## Why I can't bulk-pull all 57 automatically

Each nonprofit's site stores its logo differently (inline SVG, CDN, sprite,
hotlink-protected), and downloading 57 binaries from external sites isn't
something I can do reliably or cleanly from here. It's genuinely faster and
higher-quality to grab them by hand. Good sources, in order:

1. The nonprofit's own website (right-click the header logo, or check their
   press/media kit page).
2. A Google image search for "[Nonprofit] logo png".
3. Their social profile avatar as a fallback.

## Suggested order

Do the **8 "Popular picks"** first (they get the most traffic), then the rest as
time allows:

Rescue Mission Alliance, Meals on Wheels West, Heal the Bay, Protect Our
Winters, Cancer Support Community SF Bay Area, Priceless Pets, Veteran Surf
Alliance, WEAVE.

> If you drop the logo files into a folder (or share the image URLs), I can wire
> the `logo:` lines for all of them in one pass.
