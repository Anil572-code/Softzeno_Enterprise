import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';
import { EmptyLayout, MainLayout } from '@/layout';
import { RouteErrorBoundary } from '@/routes/RouteErrorBoundary';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.home,
    Component: MainLayout,
    ErrorBoundary: RouteErrorBoundary,
    children: [
      { index: true, lazy: () => import('@/routes/modules/home.route') },
      { path: ROUTE_PATHS.about, lazy: () => import('@/routes/modules/about.route') },
      { path: ROUTE_PATHS.solutions, lazy: () => import('@/routes/modules/solutions.route') },
      { path: ROUTE_PATHS.features, lazy: () => import('@/routes/modules/features.route') },
      { path: ROUTE_PATHS.industries, lazy: () => import('@/routes/modules/industries.route') },
      {
        path: ROUTE_PATHS.howItWorks,
        lazy: () => import('@/routes/modules/how-it-works.route'),
      },
      { path: ROUTE_PATHS.demo, lazy: () => import('@/routes/modules/demo.route') },
      {
        path: ROUTE_PATHS.caseStudies,
        lazy: () => import('@/routes/modules/case-studies.route'),
      },
      { path: ROUTE_PATHS.resources, lazy: () => import('@/routes/modules/resources.route') },
      { path: ROUTE_PATHS.team, lazy: () => import('@/routes/modules/team.route') },
      { path: ROUTE_PATHS.faq, lazy: () => import('@/routes/modules/faq.route') },
      { path: ROUTE_PATHS.contact, lazy: () => import('@/routes/modules/contact.route') },
      {
        path: ROUTE_PATHS.privacy,
        lazy: () => import('@/routes/modules/privacy-policy.route'),
      },
    ],
  },
  {
    Component: EmptyLayout,
    ErrorBoundary: RouteErrorBoundary,
    children: [{ path: '*', lazy: () => import('@/routes/modules/not-found.route') }],
  },
]);
