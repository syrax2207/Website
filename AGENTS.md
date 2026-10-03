# Instructions for Antigravity / Coding Agents

## 1. Start every task by reading

Before making changes, read: - `AGENTS.md` - `PRD.md` -
`PROJECT_CONTEXT.md` - `DESIGN_SYSTEM.md` - `TASKS.md` - Relevant
sections of `ASSET_MANIFEST.md` and `TEST_PLAN.md` - Recent entries in
`CHANGELOG.md`

## 2. Work in small, approved stages

-   Do not build the whole website in one giant task.
-   Work only on the task the user has approved.
-   Before coding, state the intended files to create/change and a short
    plan.
-   If the task changes scope, stack, architecture or approved visual
    direction, explain the impact and ask first.
-   After implementation, summarise files changed, decisions made, and
    tests actually run.

## 3. Protect existing work

-   Inspect the workspace before editing.
-   Never delete, replace, rename or overwrite existing user files
    without explicit permission.
-   Do not reset the project or regenerate the app over existing work.
-   Avoid broad refactors during a focused task.
-   If a file already exists, inspect it and make a targeted edit.
-   Do not discard uncommitted changes.

## 4. Source of truth and business accuracy

-   `PRD.md` is the requirements source of truth.
-   `DESIGN_SYSTEM.md` controls visual direction.
-   `PROJECT_CONTEXT.md` records enduring project decisions.
-   Keep business details in a central typed configuration file
    (suggested: `src/data/business.ts`).
-   Keep menu items in a central data file (suggested:
    `src/data/menu.ts`).
-   Do not duplicate phone, address, hours, menu content or other
    business details across components.
-   Never invent prices, product descriptions, allergens, reviews,
    ratings, awards, opening dates, founder biography, sourcing
    certifications or business claims.
-   The supplied phone and address are unverified draft values. Do not
    make them live links, maps or structured data until confirmed.
-   Do not assume timezone from the unverified address.
-   Use placeholders only when clearly labelled as placeholders.

## 5. Technical conventions

-   Preferred stack: Vite + React + TypeScript + Tailwind CSS + Lucide
    React.
-   No backend/database/auth for version 1.
-   Use semantic HTML and accessible React components.
-   Keep components focused and reusable.
-   Use typed props and data.
-   Avoid `any` unless justified and documented.
-   Keep dependencies minimal. Explain why a new dependency is needed
    before adding it.
-   Never hardcode secrets or API keys.
-   Do not add analytics, tracking, cookie banners or external services
    unless requested and approved.

## 6. Design conventions

-   Follow `DESIGN_SYSTEM.md`.
-   Preserve the warm minimalist café aesthetic.
-   Use the documented colour tokens and typography.
-   Do not redesign approved components during unrelated tasks.
-   Avoid excessive gradients, glassmorphism, heavy animation and
    generic template clutter.
-   Respect reduced-motion settings and accessibility.

## 7. Assets and licensing

-   Check `ASSET_MANIFEST.md` before adding assets.
-   Do not download from Google Images or use random hotlinked images.
-   Record source and licence/permission for every third-party asset.
-   Do not represent stock or AI imagery as actual café, staff or
    product photography.
-   Use descriptive filenames and appropriate alt text.

## 8. Testing and honesty

-   Run relevant checks after each meaningful change.
-   Run typecheck/lint/build where configured.
-   Test responsive layouts and key interactions.
-   Report exactly what was and was not tested.
-   Never claim the site is production-ready or a performance target is
    achieved without evidence.
-   If a test cannot run, state why and provide the next step.

## 9. Documentation maintenance

After completing an approved task: - Update `TASKS.md`. - Add a concise
entry to `CHANGELOG.md`. - Update `PROJECT_CONTEXT.md` if an enduring
decision changed. - Update `ASSET_MANIFEST.md` when assets change. -
Update `TEST_PLAN.md` when test coverage changes. - Update `PRD.md` only
when an approved requirement changes.

## 10. Stop and ask when

-   Client facts are missing or contradictory.
-   A task requires paid services, hosting, API keys or external
    accounts.
-   A change could delete/overwrite user work.
-   The requested design conflicts with the approved design system.
-   The stack needs to change.
-   You cannot safely verify an important requirement.

## 11. Completion report format

At the end of each task, provide: 1. What changed. 2. Files
created/modified. 3. Tests run and their actual results. 4. Remaining
issues or blockers. 5. Suggested next small task.

Do not start the next task until the user approves it.
