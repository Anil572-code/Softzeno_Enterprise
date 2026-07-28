import { ROUTE_PATHS } from '@/constants/routes';
import type { RouteDefinition, RouteKey } from '@/types/routes';

export const routeDefinitions = {
  home: {
    key: 'home',
    label: 'Home',
    path: ROUTE_PATHS.home,
    seoTitle: 'Workplace Safety Training',
    description: 'Enterprise workplace health and safety learning from SARAS.',
  },
  about: {
    key: 'about',
    label: 'About',
    path: ROUTE_PATHS.about,
    seoTitle: 'About SARAS',
    description: 'Company information for SARAS.',
  },
  solutions: {
    key: 'solutions',
    label: 'Solutions',
    path: ROUTE_PATHS.solutions,
    seoTitle: 'Safety Training Solutions',
    description: 'Workplace safety training solutions from SARAS.',
  },
  features: {
    key: 'features',
    label: 'Features',
    path: ROUTE_PATHS.features,
    seoTitle: 'Platform Features',
    description: 'Explore the SARAS Interactive Safety Platform feature set.',
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
    seoTitle: 'How SARAS Works',
    description: 'How organisations use the SARAS safety learning platform.',
  },
  demo: {
    key: 'demo',
    label: 'Demo',
    path: ROUTE_PATHS.demo,
    seoTitle: 'Request a Demonstration',
    description: 'Request a demonstration of the SARAS Interactive Safety Platform.',
  },
  caseStudies: {
    key: 'caseStudies',
    label: 'Case Studies',
    path: ROUTE_PATHS.caseStudies,
    seoTitle: 'Case Studies',
    description: 'SARAS customer and workplace safety training case studies.',
  },
  resources: {
    key: 'resources',
    label: 'Resources',
    path: ROUTE_PATHS.resources,
    seoTitle: 'Safety Training Resources',
    description: 'Workplace safety learning resources from SARAS.',
  },
  team: {
    key: 'team',
    label: 'Team',
    path: ROUTE_PATHS.team,
    seoTitle: 'SARAS Team',
    description: 'Meet the team behind SARAS.',
  },
  faq: {
    key: 'faq',
    label: 'FAQ',
    path: ROUTE_PATHS.faq,
    seoTitle: 'Frequently Asked Questions',
    description: 'Frequently asked questions about SARAS.',
  },
  contact: {
    key: 'contact',
    label: 'Contact',
    path: ROUTE_PATHS.contact,
    seoTitle: 'Contact SARAS',
    description: 'Contact SARAS about workplace safety training.',
  },
  privacy: {
    key: 'privacy',
    label: 'Privacy Policy',
    path: ROUTE_PATHS.privacy,
    seoTitle: 'Privacy Policy',
    description: 'SARAS privacy policy.',
  },
} satisfies Record<RouteKey, RouteDefinition>;

export function getRouteDefinition(routeKey: RouteKey): RouteDefinition {
  return routeDefinitions[routeKey];
}
