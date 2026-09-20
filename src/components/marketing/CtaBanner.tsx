import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';

interface CtaBannerProps {
  description?: string;
  title?: string;
}

export function CtaBanner({
  description = 'See how Softzeno Tech can help your organisation deliver more engaging, measurable and scalable workplace safety learning.',
  title = 'Ready to make safety learning more effective?',
}: CtaBannerProps) {
  return (
    <section className="cta-banner-section">
      <div className="app-container">
        <div className="cta-banner">
          <div>
            <p className="eyebrow eyebrow--light">Plan your demonstration</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <ButtonLink className="button--light" size="large" to={ROUTE_PATHS.demo}>
            Request a demo <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
