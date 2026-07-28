import { ROUTE_PATHS } from '@/constants/routes';
import type { NavigationItem } from '@/types/navigation';

export const primaryNavigation = [
  { href: ROUTE_PATHS.home, label: 'Home' },
  { href: ROUTE_PATHS.solutions, label: 'Solutions' },
  { href: ROUTE_PATHS.features, label: 'Features' },
  { href: ROUTE_PATHS.industries, label: 'Industries' },
  { href: ROUTE_PATHS.howItWorks, label: 'How It Works' },
  { href: ROUTE_PATHS.resources, label: 'Resources' },
  { href: ROUTE_PATHS.contact, label: 'Contact' },
] satisfies readonly NavigationItem[];
