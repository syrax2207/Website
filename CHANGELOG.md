# Changelog

Record meaningful project changes in reverse chronological order. Keep
entries factual and concise.

## Unreleased

-   Awaiting client verification of contact and address details.
-   Awaiting approved brand logo and photography assets.

### 2026-10-03 --- Phase 3: Complete Technical SEO & On-Page SEO Implementation

-   Added: `public/robots.txt` allowing crawler access and pointing to `sitemap.xml`.
-   Added: `public/sitemap.xml` with canonical indexable site structure and lastmod timestamp.
-   Added: `public/favicon.svg` and `public/assets/brand/logo.svg` brand SVG coffee cup vector icons preventing 404s.
-   Updated: `index.html` with target document title (53 chars), meta description (144 chars), robots meta directives (`index, follow, max-image-preview:large`), OpenGraph tags, Twitter card tags with 1200x630 social share card, and Schema.org JSON-LD structured data (`WebSite` & `Organization`).
-   Documented: Intentional withholding of `LocalBusiness` / `CafeOrCoffeeShop` schema to avoid emitting unverified contact details until confirmed by the owner.
-   Updated: `src/main.tsx` dynamically setting canonical URL from `window.location.origin + window.location.pathname` to prevent hardcoding preview or localhost URLs.
-   Improved: Image SEO and CLS performance with explicit `width` and `height` across `MenuCard`, `BakerySection`, `MenuItemModal`, and `loading="eager"` / `fetchPriority="high"` on Hero LCP image.
-   Improved: Semantic heading hierarchy in `Highlights.tsx` (`<h3>` cards) preventing skipped levels.
-   Updated: `metadata.json`, `TEST_PLAN.md`, and `TASKS.md`.
-   Tested: `compile_applet` passed (`tsc -b && vite build`) with zero errors.

### 2026-10-03 --- Phase 2: Professional Homepage Expansion

-   Added: `CoffeeExperience.tsx` dedicated specialty coffee section introducing single-origin pour-overs, calibrated espresso, artisanal craft pillars, and seamless button navigation to `#menu`.
-   Added: `BakerySection.tsx` highlighting daily morning bakes (Almond Croissants, Avocado Sourdough Toast, Cinnamon Rolls, Blueberry Scones, Vegan Muffins) with fresh bake cards and quick navigation to the complete menu.
-   Enhanced: `About.tsx` reinforcing the brand philosophy ("Fresh Bakes, Honest Beans, Warm Conversations"), welcoming commuters, remote workers, and weekend brunch visitors with an editorial quote card and warm ambient photography.
-   Enhanced: `Showcase.tsx` featuring an expanded 6-image interior & atmosphere gallery with an accessible keyboard-navigable Lightbox modal (`Escape`, `ArrowLeft`, `ArrowRight`, focus trap, and body scroll lock).
-   Enhanced: `VisitUs.tsx` with a refined 3-card layout (Opening Hours, Location, Contact) plus a neighbourhood amenities card showcasing quiet work desks, outdoor patio, bike racks, and community vibe.
-   Updated: `Navbar.tsx` and `Footer.tsx` with expanded navigation links matching the complete homepage journey (`#home`, `#coffee`, `#bakery`, `#story`, `#menu`, `#showcase`, `#visit`).
-   Updated: `App.tsx` orchestrating all 10 homepage sections in optimal narrative sequence.
-   Updated: `src/data/images.ts` and `ASSET_MANIFEST.md` with complete source log and licensing attribution for all new Unsplash assets.
-   Tested: Production build (`tsc -b && vite build`) passed with zero errors.

### 2026-10-02 --- Upgrade Phase 1: Premium Interactive Menu

-   Enhanced: `src/types/menu.ts` with `shortDescription`, `description`, `tasteProfile`, `prepNotes`, `dietaryInfo`, and `image` (URL, alt, photographer attribution).
-   Enhanced: `src/data/menu.ts` with curated product imagery, evocative draft descriptions, taste profiles, and artisanal preparation notes for all 11 drinks and bakery items.
-   Added: `MenuItemModal.tsx` accessible modal dialog featuring high-resolution product photography, item titles, category/dietary badges, full tasting notes, craft methods, focus management (auto-focus, focus-trap, restore on exit), body scroll lock, and Escape/backdrop click dismiss.
-   Upgraded: `MenuCard.tsx` with consistent 16:10 product image aspect ratio, graceful visual fallback, taste profile indicator, and accessible "View Details" click/keyboard trigger.
-   Updated: `MenuSection.tsx` managing active item selection and seamlessly rendering `MenuItemModal` while preserving category filter tabs.
-   Updated: `ASSET_MANIFEST.md` with complete source log and photographer attribution for all 11 menu stock images.
-   Tested: Production build (`tsc -b && vite build`) passed with zero errors.

### 2026-10-02 --- Phase 3: Complete Website Sections & Integration

-   Added: `About.tsx` section presenting brand philosophy, honest beans, fresh bakes, and welcoming space pillars without invented founder biography.
-   Added: `Showcase.tsx` visual gallery featuring 4 curated editorial images showcasing espresso craft, pour-over brewing, fresh morning pastries, and quiet café seating with clear attribution.
-   Added: `VisitUs.tsx` section detailing opening hours, draft location details, contact inquiries, and a friendly grand opening announcement banner without activating unverified live calling or maps.
-   Updated: `Footer.tsx` with full branding, tagline, quick navigation links, opening schedule summary, and unverified data disclaimer.
-   Updated: `App.tsx` integrating the complete page sequence (`Navbar` -> `Hero` -> `Highlights` -> `About` -> `MenuSection` -> `Showcase` -> `VisitUs` -> `Footer`).
-   Updated: `ASSET_MANIFEST.md` with complete source log and licensing attribution for temporary editorial imagery.
-   Updated: `TASKS.md` marking Phase 3 page sections completed.
-   Tested: `compile_applet` passed (`tsc -b && vite build`) with zero errors.

### 2026-10-02 --- AI Studio Environment & GitHub Import Migration

-   Removed: `bun.lock` to standardize on npm runtime.
-   Added: `metadata.json` for AI Studio applet registration and OpenGraph meta tags in `index.html`.
-   Configured: Vite server and preview bindings (`host: '0.0.0.0'`, `port: 3000`) in `vite.config.ts` and `package.json`.
-   Added: `.env.example`.
-   Tested: `compile_applet` passed cleanly (`tsc -b && vite build`). Dev server restart verified.

### 2026-10-02 --- Phase 2: Design foundation

-   Added: Typography system mapping Playfair Display to `--font-serif`/`--font-display` and DM Sans to `--font-sans`.
-   Added: Reusable, accessible `Button` component supporting 4 variants (`primary`, `secondary`, `outline`, `ghost`), 3 sizes, icon support, and polymorphic anchor/button rendering.
-   Added: Layout primitives (`Container` with responsive max-widths, `Section` with vertical rhythm and background options, `SectionHeading` with eyebrow, title, and subtitle).
-   Added: Responsive `Navbar` with brand text treatment, desktop links, and accessible mobile drawer with keyboard (Escape key) close and focus management.
-   Added: Simple preview `Footer` component with copyright and draft status notice.
-   Added: Temporary design foundation preview in `App.tsx` displaying typography specimens, button gallery, color palette cards, and primitive layout demonstration.
-   Tested: Production build (`tsc -b && vite build`) passed with zero errors in 648ms.
-   Tested: Headless browser inspection across 6 viewport widths (320px, 375px, 768px, 1024px, 1280px, 1440px) confirmed zero horizontal overflow and verified full mobile menu open/close interaction.

### 2026-10-02 --- Phase 1: Project initialisation

-   Added: Vite, React 19, TypeScript, Tailwind CSS v4 (@tailwindcss/vite), Lucide React.
-   Added: Project configuration (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `.gitignore`).
-   Added: Source tree (`src/components/*`, `src/data/*`, `src/hooks`, `src/styles`, `src/types`, `src/utils`).
-   Added: Centralized data stores with TypeScript interfaces in `src/data/business.ts` and `src/data/menu.ts`.
-   Added: Tailwind CSS v4 CSS-first theme configuration with design tokens (`espresso`, `coffee`, `oat`, `sage`, `cream`) and typography tokens.
-   Tested: TypeScript build (`tsc -b && vite build`) passed with zero errors; Vite dev server verified.
-   Notes / decisions: Used stable TypeScript 5.7.3 to avoid platform binary download issues. All documentation files and asset directory structures strictly preserved. Git repository initialized.

## Entry template

### YYYY-MM-DD --- Short description

-   Added:
-   Changed:
-   Fixed:
-   Tested:
-   Notes / decisions:
