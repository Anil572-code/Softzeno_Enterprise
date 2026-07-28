import { Outlet } from 'react-router-dom';

import { ScrollToTop, SkipLink } from '@/components/navigation';

export function EmptyLayout() {
  return (
    <div className="app-shell">
      <SkipLink />
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
