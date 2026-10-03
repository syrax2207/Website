# Design System --- Bean & Bite

## Brand feeling

Warm, welcoming, artisanal, calm, neighbourhood-friendly, contemporary
and uncluttered. The site should feel like entering a well-designed
independent café, not a generic restaurant template.

## Colour tokens

  Token      Hex         Intended use
  ---------- ----------- ------------------------------------
  Espresso   `#39251E`   Main dark text, dark backgrounds
  Coffee     `#704832`   Primary actions, accents
  Oat        `#F3EBDD`   Warm section/background
  Sage       `#87947A`   Secondary accent, small highlights
  Cream      `#FFFDF8`   Main light background

Check contrast before using any colour pairing. Do not use sage or beige
for small text unless contrast is sufficient. Keep colours in CSS
variables/Tailwind theme tokens rather than scattering hex codes.

## Typography

-   Display/headings: Playfair Display, with Georgia/serif fallback.
-   Body/UI: DM Sans, with a system sans-serif fallback.
-   Use a clear responsive type scale. Keep body copy comfortably
    readable.
-   Avoid excessive all-caps and overly tight line-height.

## Layout

-   Mobile-first responsive layout.
-   Consistent max-width container and spacing scale.
-   Generous vertical whitespace; sections should have clear rhythm.
-   Use a mix of full-width photography, editorial split layouts and
    simple menu rows/cards.
-   Avoid making every content block a rounded card.

## Imagery

-   Warm ambient lighting and natural-looking café/product photography.
-   Use only supplied client assets or properly licensed temporary
    assets.
-   Never imply stock/AI images are actual Bean & Bite staff, premises
    or products.
-   Crop intentionally with responsive `object-fit`; use meaningful alt
    text.
-   Keep image source/licence notes in `ASSET_MANIFEST.md`.

## Components and interaction

-   Buttons: clear hierarchy, visible hover/focus/active states,
    adequate touch size.
-   Navigation: simple desktop links and accessible mobile menu.
-   Menu filters: obvious selected state, keyboard accessible.
-   Cards: restrained border/shadow and consistent radius.
-   Motion: subtle, purposeful, short; respect reduced-motion
    preference.
-   Icons: Lucide React, consistent stroke size; do not use emoji as
    interface icons.

## Suggested visual hierarchy

1.  Strong hero with a clear headline and primary CTA.
2.  A concise highlight strip.
3.  Brand/story section.
4.  Readable menu with category filters.
5.  Visit/hours/contact section.
6.  Clean footer.

## Avoid

-   Overuse of gradients, glassmorphism, parallax or scroll-jacking.
-   Huge decorative text that harms readability.
-   Generic AI-generated café photos presented as authentic client
    photography.
-   Unverified badges, awards, ratings, reviews or claims.
-   Tiny low-contrast labels.
