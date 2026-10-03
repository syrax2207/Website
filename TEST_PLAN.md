# Test Plan --- Bean & Bite

## Test approach

Test incrementally after each feature, then run the full checklist
before handover. Record actual results; never claim a test passed if it
was not performed.

## Browsers and viewports

Where available, test current Chrome, Edge, Firefox and Safari. At
minimum, test the target browser used by the owner.

    Viewport width Typical device
  ---------------- ----------------
            360 px Small phone
            390 px Modern phone
            768 px Tablet
           1024 px Small laptop
           1440 px Desktop

## Functional tests

-   [ ] Logo/brand link returns to top.
-   [ ] Desktop navigation links reach correct sections.
-   [ ] Mobile menu opens, closes and closes after selecting a link.
-   [ ] Hero CTAs reach the intended section/action.
-   [ ] Menu category filters show the correct items.
-   [ ] Menu filter selected state is visible and accessible.
-   [ ] Phone action uses a verified number.
-   [ ] WhatsApp action opens the verified destination with correctly
    encoded text.
-   [ ] Email action opens the verified email address.
-   [ ] Directions/map uses a verified address only.
-   [ ] Hours match owner-approved schedule.
-   [ ] Dynamic open/closed status (if present) uses verified timezone
    and handles weekends/DST.
-   [ ] Footer links work.

## Responsive and visual tests

-   [ ] No horizontal page overflow at each viewport.
-   [ ] Navigation does not overlap hero content.
-   [ ] Text is readable and does not clip.
-   [ ] Images crop appropriately and do not distort.
-   [ ] Buttons and controls are easy to tap.
-   [ ] Sections have consistent spacing and alignment.
-   [ ] No unexpected layout shift while images load.

## Accessibility checks

-   [ ] Page uses semantic landmarks.
-   [ ] Heading levels are logical.
-   [ ] All interactive elements are keyboard reachable.
-   [ ] Focus indicator is visible.
-   [ ] Icon-only buttons have accessible names.
-   [ ] Images have appropriate alt text.
-   [ ] Colour contrast is checked.
-   [ ] Menu filters announce state appropriately.
-   [ ] Mobile menu exposes expanded/collapsed state.
-   [ ] Reduced-motion preference is respected.

## Technical checks

-   [x] No console errors.
-   [x] No broken network assets (favicon and brand logos provided as SVG).
-   [x] TypeScript check passes (`tsc -b`).
-   [x] Production build passes (`vite build`).
-   [x] Page title and meta description are present, customized, and optimal length.
-   [x] Robots.txt and sitemap.xml present and correctly configured.
-   [x] Structured data (Schema.org WebSite & Organization) valid JSON-LD.
-   [x] LocalBusiness schema intentionally withheld until physical address is confirmed.
-   [x] No secrets or private credentials in source control.

## Performance checks

Measure using browser Lighthouse or an equivalent tool and record date,
device profile and results: - LCP target: ≤ 2.5 seconds - INP target: ≤
200 milliseconds - CLS target: ≤ 0.1

These are targets, not assumed results. Optimise large images, avoid
unnecessary scripts and lazy-load below-the-fold imagery. Hero image is
marked with `fetchPriority="high"` and `loading="eager"`, while secondary
images utilize `loading="lazy"` with explicit dimension attributes.

## Test report: Phase 3 Technical SEO Implementation

-   Date: 2026-10-03
-   Commit/version: Phase 3 SEO Release
-   Browser/device: Chrome Desktop & Mobile Viewports (320px, 375px, 768px, 1024px, 1440px)
-   Tests performed: Technical SEO audit, semantic HTML validation, JSON-LD schema parsing, robots.txt & sitemap.xml route availability, build compilation.
-   Passed:
    - HTML lang="en" and meta viewport defined.
    - Page title (53 chars) and description (144 chars) within search snippet boundaries.
    - OpenGraph and Twitter card tags complete with 1200x630 social share asset.
    - Robots meta directive (`index, follow, max-image-preview:large`).
    - `/robots.txt` and `/sitemap.xml` generated in `/public`.
    - Favicons provided (`/favicon.svg` and `/assets/brand/logo.svg`).
    - Heading hierarchy verified (single `h1` in Hero, semantic `h2` per section, `h3` for features/cards).
    - JSON-LD `@graph` containing `WebSite` and `Organization`.
    - All 11 menu items and categories discoverable in base DOM.
    - `tsc -b && vite build` completed with 0 errors.
-   Known issues / Pending client confirmation:
    - Physical address and telephone remain unverified demo data; `LocalBusiness` schema is intentionally omitted until confirmed.
    - Production custom domain (`https://...`) to be finalized for Search Console sitemap submission.
