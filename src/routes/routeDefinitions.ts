import { ROUTE_PATHS } from '@/constants/routes';
import type { RouteDefinition, RouteKey } from '@/types/routes';

export const routeDefinitions = {
  home: {
    key: 'home',
    label: 'Home',
    path: ROUTE_PATHS.home,
    seoTitle: 'Workplace Safety Training',
    description: 'Enterprise workplace health and safety learning by Softzeno Tech.',
  },
  about: {
    key: 'about',
    label: 'About Us',
    path: ROUTE_PATHS.about,
    seoTitle: 'About Softzeno Tech',
    description: 'Company information for Softzeno Tech.',
  },
  solutions: {
    key: 'solutions',
    label: 'Solutions',
    path: ROUTE_PATHS.solutions,
    seoTitle: 'Safety Training Solutions',
    description: 'Workplace safety training solutions from Softzeno Tech.',
  },
  features: {
    key: 'features',
    label: 'Features',
    path: ROUTE_PATHS.features,
    seoTitle: 'Platform Features',
    description: 'Explore the Softzeno Interactive Safety Platform feature set.',
  },
  industries: {
    key: 'industries',
    label: 'Industries',
    path: ROUTE_PATHS.industries,
    seoTitle: 'Industry Safety Training',
    description: 'Industry-focused digital workplace safety training.',
  },
  howItWorks: {
    key: 'howItWorks',
    label: 'How It Works',
    path: ROUTE_PATHS.howItWorks,
    seoTitle: 'How Softzeno Works',
    description: 'How organisations use the Softzeno Tech safety learning platform.',
  },
  demo: {
    key: 'demo',
    label: 'Demo',
    path: ROUTE_PATHS.demo,
    seoTitle: 'Request a Demonstration',
    description: 'Request a demonstration of the Softzeno Interactive Safety Platform.',
  },
  caseStudies: {
    key: 'caseStudies',
    label: 'Case Studies',
    path: ROUTE_PATHS.caseStudies,
    seoTitle: 'Case Studies',
    description: 'Softzeno Tech customer and workplace safety training case studies.',
  },
  resources: {
    key: 'resources',
    label: 'Resources',
    path: ROUTE_PATHS.resources,
    seoTitle: 'Safety Training Resources',
    description: 'Workplace safety learning resources from Softzeno Tech.',
  },
  team: {
    key: 'team',
    label: 'Our Team',
    path: ROUTE_PATHS.team,
    seoTitle: 'Softzeno Tech Team',
    description: 'Meet the team behind Softzeno Tech.',
  },
  faq: {
    key: 'faq',
    label: 'FAQ',
    path: ROUTE_PATHS.faq,
    seoTitle: 'Frequently Asked Questions',
    description: 'Frequently asked questions about Softzeno Tech.',
  },
  contact: {
    key: 'contact',
    label: 'Contact',
    path: ROUTE_PATHS.contact,
    seoTitle: 'Contact Softzeno Tech',
    description: 'Contact Softzeno Tech about workplace safety training.',
  },
  privacy: {
    key: 'privacy',
    label: 'Privacy Policy',
    path: ROUTE_PATHS.privacy,
    seoTitle: 'Privacy Policy',
    description: 'Softzeno Tech privacy policy.',
  },
} satisfies Record<RouteKey, RouteDefinition>;

export function getRouteDefinition(routeKey: RouteKey): RouteDefinition {
  return routeDefinitions[routeKey];
}
