import { ROUTE_PATHS } from '@/constants/routes';
import type { NavigationItem } from '@/types/navigation';

export const primaryNavigation = [
  { href: ROUTE_PATHS.home, label: 'Home' },
  { href: ROUTE_PATHS.safety360, label: 'Safety 360' },
  { href: ROUTE_PATHS.about, label: 'About Us' },
  { href: ROUTE_PATHS.solutions, label: 'Solutions' },
  { href: ROUTE_PATHS.features, label: 'Features' },
  { href: ROUTE_PATHS.industries, label: 'Industries' },
  { href: ROUTE_PATHS.howItWorks, label: 'How It Works' },
  { href: ROUTE_PATHS.resources, label: 'Resources' },
  { href: ROUTE_PATHS.team, label: 'Our Team' },
  { href: ROUTE_PATHS.contact, label: 'Contact' },
] satisfies readonly NavigationItem[];

/**
 * Header-specific information architecture.
 * Safety 360 is intentionally first-class because it is Softzeno Tech's
 * flagship solution; supporting corporate and service pages remain concise.
 */
export const headerNavigation = [
  { href: ROUTE_PATHS.safety360, label: 'Safety 360' },
  { href: ROUTE_PATHS.solutions, label: 'Solutions' },
  { href: ROUTE_PATHS.industries, label: 'Industries' },
  { href: ROUTE_PATHS.resources, label: 'Resources' },
  {
    label: 'Company',
    children: [
      { href: ROUTE_PATHS.about, label: 'About Us' },
      { href: ROUTE_PATHS.team, label: 'Our Team' },
    ],
  },
  { href: ROUTE_PATHS.contact, label: 'Contact' },
] as const;
