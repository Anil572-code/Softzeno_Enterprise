import { Outlet } from 'react-router-dom';

import { SiteFooter } from '@/components/footer';
import { ScrollToTop, SiteHeader, SkipLink } from '@/components/navigation';

export function MainLayout() {
  return (
    <div className="app-shell" id="top">
      <SkipLink />
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
