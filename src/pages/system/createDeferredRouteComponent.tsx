import type { ComponentType } from 'react';

import { DeferredRoutePage } from '@/pages/system/DeferredRoutePage';
import type { RouteKey } from '@/types/routes';

export function createDeferredRouteComponent(routeKey: RouteKey): ComponentType {
  function DeferredRouteComponent() {
    return <DeferredRoutePage routeKey={routeKey} />;
  }

  DeferredRouteComponent.displayName = `${routeKey}Route`;

  return DeferredRouteComponent;
}
