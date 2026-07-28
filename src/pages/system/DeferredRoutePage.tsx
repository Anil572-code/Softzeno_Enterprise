import { SharedPageLayout } from '@/layout';
import { Seo } from '@/seo/Seo';
import { getRouteDefinition } from '@/routes/routeDefinitions';
import type { RouteKey } from '@/types/routes';

interface DeferredRoutePageProps {
  routeKey: RouteKey;
}

export function DeferredRoutePage({ routeKey }: DeferredRoutePageProps) {
  const route = getRouteDefinition(routeKey);

  return (
    <>
      <Seo description={route.description} path={route.path} title={route.seoTitle} />
      <SharedPageLayout>
        <h1 className="sr-only">{route.label}</h1>
        <div className="route-content-slot" data-route-slot={route.key} />
      </SharedPageLayout>
    </>
  );
}
