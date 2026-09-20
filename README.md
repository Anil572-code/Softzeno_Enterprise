# Softzeno Interactive Safety Platform — Promotional Website

Production-quality React promotional website for **Softzeno Tech — Technology for Safer Workplaces.** The website markets the separate Softzeno Interactive Safety Platform and directs organisations towards a tailored product demonstration.

## Included pages

- Home
- About
- Solutions
- Features
- Industries
- How It Works
- Demo
- Case Studies
- Resources
- Team
- FAQ
- Contact
- Privacy Policy
- 404

All routes use React Router lazy modules for route-level code splitting.

## Technology

- React 19
- Vite
- TypeScript in strict mode
- Tailwind CSS foundation with token-driven component CSS
- React Router
- Framer Motion
- React Hook Form
- Zod
- Lucide React
- React Helmet Async

## Local development

Requirements:

- Node.js 22.12 or later
- npm 10 or later

```powershell
& {
    Set-StrictMode -Version Latest
    $ErrorActionPreference = "Stop"

    $ProjectRoot = `
        "C:\Users\Lenovo\Desktop\saras-enterprise-website-foundation"

    Set-Location `
        -LiteralPath `
        $ProjectRoot

    npm install
    npm run validate
    npm start
}
```

Open:

```text
http://127.0.0.1:6066
```

Vite uses strict port mode. It will not silently change to a different port when 6066 is occupied.

## Quality gates

```powershell
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Or run all gates:

```powershell
npm run validate
```

## Architecture

- `src/app`: application composition and providers
- `src/components`: reusable layout, marketing, navigation, form and UI components
- `src/data`: typed website content collections
- `src/pages/marketing`: route page composition
- `src/routes`: lazy route modules and router configuration
- `src/seo`: reusable metadata and structured-data components
- `src/styles`: global, responsive and component-level CSS
- `src/theme`: CSS and TypeScript design tokens
- `src/services`: environment and HTTP infrastructure

See `docs/FINAL-WEBSITE.md` and `docs/ARCHITECTURE.md` for more detail.

## Production integration tasks

The visual website and frontend interaction flows are complete. Before a real public launch:

1. Connect the demo and contact forms to an approved backend or form service.
2. Add verified public office and direct contact details when approved.
3. Confirm the legal entity, jurisdiction and final privacy text.
4. Set `VITE_SITE_URL` to the deployed production URL.
5. Review final copy with the Softzeno Tech project owner.
6. Run the complete quality gates and a final Lighthouse/accessibility review on the deployed build.

Form submissions intentionally remain in preview mode until a production data service is approved.

# enterprise-project
