import type { ROUTE_PATHS } from '@/constants/routes';

export type RouteKey = keyof typeof ROUTE_PATHS;

export interface RouteDefinition {
  description: string;
  key: RouteKey;
  label: string;
  path: (typeof ROUTE_PATHS)[RouteKey];
  seoTitle: string;
}
