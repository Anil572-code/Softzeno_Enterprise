# Architecture

## Architectural style

The foundation uses a layered, dependency-directed React architecture:

1. **Application layer** — bootstrapping and global providers.
2. **Routing layer** — route definitions, lazy modules and route error boundaries.
3. **Layout layer** — application chrome and structural page layouts.
4. **Component layer** — reusable primitives grouped by responsibility.
5. **Infrastructure layer** — hooks, services, contexts, SEO, animation and utilities.
6. **Configuration layer** — immutable constants, static data and shared types.
7. **Theme layer** — runtime CSS variables and TypeScript token contracts.

Page implementations depend on shared infrastructure. Shared infrastructure never imports page code. This keeps the dependency graph one-directional and prevents route concerns from leaking into reusable modules.

## Routing and code splitting

`createBrowserRouter` is configured in `src/routes/router.tsx`. Every requested route points to a separate lazy route module. Current modules render only an empty route slot, an accessible screen-reader heading and route-specific metadata. No marketing page content has been implemented.

The 404 route uses the empty layout, while standard marketing routes use the main layout. Route failures are isolated through a shared error boundary.

## Design tokens

CSS custom properties are the runtime source of truth for colour, typography, spacing, radius, shadow, motion, container and z-index decisions. Tailwind CSS maps semantic variables through `@theme inline` rather than introducing unrelated values.

TypeScript mirrors stable tokens required by JavaScript concerns such as motion configuration and responsive logic. Components consume semantic classes or variables instead of raw brand values.

## Theme strategy

The theme context supports `light`, `dark` and `system` preferences. The preference is stored defensively and the resolved theme is applied through a root data attribute. No component owns theme colours directly, so future palette expansion does not require component API changes.

The visible theme control is deferred to the Design System phase.

## Accessibility foundation

- Semantic header, navigation, main and footer landmarks.
- Keyboard-visible focus treatment.
- Skip navigation link.
- Reduced-motion handling in CSS and Framer Motion.
- Accessible loading and form-error announcements.
- Screen-reader route headings while visible page content is deferred.
- Native route links with active-state semantics.

The target remains WCAG 2.2 AA. Component-level contrast and interaction certification continues during the Design System and page phases.

## SEO foundation

The reusable SEO layer supports titles, descriptions, canonicals, robots directives, Open Graph, Twitter cards, organisation schema and breadcrumb schema. Environment validation prevents malformed configured URLs.

The marketing site currently uses client-side rendering. Pre-rendering, sitemap generation and production crawler verification should be assessed before launch once page content is complete.

## Services

The HTTP client provides typed responses, merged headers, request timeouts, caller cancellation, safe JSON handling and structured API errors. Product-specific endpoints must be introduced as dedicated service modules rather than called directly from UI components.

## SOLID alignment

- **Single responsibility:** each module has one clear purpose.
- **Open/closed:** route, token and schema definitions can be extended without rewriting consumers.
- **Liskov substitution:** structural primitives preserve native element contracts.
- **Interface segregation:** shared contracts remain small and concern-specific.
- **Dependency inversion:** pages rely on shared abstractions such as `request`, `Seo`, `Container` and token contracts.

## Performance strategy

- Route-based lazy loading.
- Vite tree shaking and CSS code splitting.
- Local variable-font packaging rather than runtime font requests.
- Reduced initial route modules while page content is deferred.
- Image assets kept outside component code and ready for later optimization.
- No global state library or runtime dependency without a demonstrated need.
