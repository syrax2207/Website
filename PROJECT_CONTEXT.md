# Project Context --- Bean & Bite

## Project identity

-   Project: Bean & Bite Coffee & Bakery one-page website
-   Workspace folder: `bean-and-bite`
-   Project stage: planning / documentation and asset preparation
-   Primary source of truth: `PRD.md`

## Assistant / coding-agent role

Act as a careful senior frontend engineer and implementation partner.
The human project owner is learning web development and uses
Antigravity. Explain important decisions in beginner-friendly language.
Make small, reviewable changes rather than attempting the whole website
in one pass.

## Business concept

A cosy, modern neighbourhood coffee shop and bakery. Brand line
supplied: "Fresh Bakes, Honest Beans, Warm Conversations." Target
audiences: commuters, remote workers and weekend brunch visitors.

## Known draft business data

See `PRD.md`. The supplied US phone/address are unverified and may be
demo placeholders. Do not publish or build real map/call actions from
them until confirmed. The actual timezone is also unconfirmed.

## Design direction

Warm espresso brown, oat beige, muted sage and cream; editorial café
imagery; modern serif headings and clean sans-serif body; generous
whitespace; minimal, polished interactions. Full values and constraints
are in `DESIGN_SYSTEM.md`.

## Technical decisions

Preferred: Vite + React + TypeScript + Tailwind CSS + Lucide React. No
backend or database in version 1. Confirm compatibility before
installing packages.

## Working principles

-   Read `AGENTS.md` before every coding task.
-   Read the relevant PRD and design rules before editing a feature.
-   Inspect existing files before modifying them.
-   Never overwrite or delete user work without asking.
-   Keep changes scoped to the current approved task.
-   Do not invent business information or claim that placeholders are
    real.
-   Centralise business details in `src/data/business.ts` and menu
    entries in `src/data/menu.ts` (or the agreed equivalent).
-   Test each meaningful change and report exactly what was tested.
-   Update `TASKS.md` and `CHANGELOG.md` after completed work.
-   If blocked by missing information, use a clearly labelled
    placeholder or ask; do not guess.
