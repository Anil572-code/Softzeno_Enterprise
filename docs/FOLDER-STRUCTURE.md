# Folder responsibilities

| Path                        | Responsibility                                                          |
| --------------------------- | ----------------------------------------------------------------------- |
| `src/app`                   | Application composition and global providers.                           |
| `src/assets`                | Versioned brand and media assets.                                       |
| `src/components/ui`         | Lowest-level reusable UI primitives.                                    |
| `src/components/cards`      | Card family, intentionally deferred.                                    |
| `src/components/forms`      | Accessible form infrastructure.                                         |
| `src/components/navigation` | Header, navigation, skip and scroll behaviour.                          |
| `src/components/footer`     | Footer composition.                                                     |
| `src/components/layout`     | Structural primitives such as containers and sections.                  |
| `src/layout`                | Route-level application layouts.                                        |
| `src/pages`                 | Page compositions; intentionally empty except system route scaffolding. |
| `src/sections`              | Reusable marketing sections; intentionally deferred.                    |
| `src/hooks`                 | Reusable React hooks.                                                   |
| `src/context`               | Cross-cutting React state providers.                                    |
| `src/services`              | Environment and external service access.                                |
| `src/constants`             | Immutable application configuration.                                    |
| `src/utils`                 | Pure, framework-light utility functions.                                |
| `src/types`                 | Shared contracts.                                                       |
| `src/animations`            | Reusable Framer Motion variants.                                        |
| `src/routes`                | Router configuration, route metadata and lazy route boundaries.         |
| `src/styles`                | Tailwind entry point, reset, global and utility styles.                 |
| `src/theme`                 | CSS and TypeScript design tokens.                                       |
| `src/seo`                   | Metadata and structured-data infrastructure.                            |
| `src/data`                  | Static application data such as navigation.                             |
