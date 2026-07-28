import { ArrowLeft, SearchX } from 'lucide-react';

import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { Seo } from '@/seo';

export function NotFoundPage() {
  return (
    <main className="not-found" id="main-content">
      <Seo
        description="The requested SARAS page could not be found."
        noIndex
        path="/404"
        title="Page Not Found"
      />
      <div className="not-found__visual">
        <SearchX aria-hidden="true" size={48} />
      </div>
      <p className="eyebrow">404 error</p>
      <h1>This page has moved or does not exist.</h1>
      <p>Return to the SARAS home page and continue exploring the interactive safety platform.</p>
      <ButtonLink size="large" to={ROUTE_PATHS.home}>
        <ArrowLeft aria-hidden="true" size={19} /> Return home
      </ButtonLink>
    </main>
  );
}
