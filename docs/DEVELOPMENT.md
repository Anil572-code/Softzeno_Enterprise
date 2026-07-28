# Development guide

## Prerequisites

- Node.js 22.12 or newer.
- npm 10 or newer.
- A modern Chromium, Firefox or Safari browser.

## First setup

Run `scripts/Setup-Foundation.ps1` from Windows PowerShell 5.1. The script validates tooling, creates `.env`, installs pinned direct dependencies and executes the complete quality pipeline. It never starts a server.

The first `npm install` creates `package-lock.json`. Commit that lockfile before collaborative development or deployment so the complete dependency graph remains deterministic.

## Quality gates

- `npm run typecheck` — strict TypeScript project build.
- `npm run lint` — type-aware ESLint with accessibility and React rules.
- `npm run format:check` — Prettier verification.
- `npm run build` — optimized Vite production build.
- `npm run validate` — executes all quality gates in order.

## Adding a page later

1. Implement the page composition in `src/pages/<feature>`.
2. Keep substantial reusable page sections in `src/sections/<feature>`.
3. Replace the matching deferred route module with a lazy module exporting `Component`.
4. Keep route paths and route metadata centralized.
5. Compose approved primitives rather than introducing page-local visual systems.
6. Run `npm run validate` before merging.

## Dependency rules

- UI components must not call APIs directly.
- Services must not import React components.
- Utilities must remain side-effect free unless their name communicates the side effect.
- Route modules may compose pages but must not own shared visual primitives.
- Shared infrastructure must never import route-specific page implementations.
- Avoid index barrels inside frequently changed feature internals; use them at stable public boundaries.

## Client-side routing deployment

Production hosting must rewrite unknown document requests to `index.html` so direct navigation to routes such as `/features` or `/contact` works. Configure this in the selected host during the deployment phase.

## Environment variables

| Variable            |           Required | Purpose                                                 |
| ------------------- | -----------------: | ------------------------------------------------------- |
| `VITE_APP_NAME`     |                 No | Application display name.                               |
| `VITE_SITE_URL`     | Yes for production | Canonical website origin used by SEO and schema markup. |
| `VITE_API_BASE_URL` |                 No | Future service API origin.                              |

Never place secrets in `VITE_*` variables because Vite exposes them to the browser bundle.
