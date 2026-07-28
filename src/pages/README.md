# Pages

Marketing pages are composed in `pages/marketing`. Each page owns its route-level content and SEO metadata while importing reusable presentation components from `components`.

Route modules in `src/routes/modules` export the page components lazily, preserving route-based code splitting.
