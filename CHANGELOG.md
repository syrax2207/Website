# Changelog

Record meaningful project changes in reverse chronological order. Keep
entries factual and concise.

## Unreleased

-   Awaiting client verification of contact and address details.
-   Awaiting approved brand logo and photography assets.

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
