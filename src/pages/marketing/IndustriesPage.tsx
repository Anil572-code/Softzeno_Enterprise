import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { industries } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

const commonNeeds = [
  'Consistent induction and refresher learning',
  'Clear hazard-recognition activities',
  'Evidence of learner completion',
  'Visibility across teams and locations',
] as const;

export function IndustriesPage() {
  return (
    <main className="internal-page internal-page--discovery internal-page--industries" id="main-content">
      <Seo
        description="Discover how Softzeno Tech supports workplace safety learning across warehousing, manufacturing, automotive, logistics and corporate environments."
        path={ROUTE_PATHS.industries}
        title="Industry Safety Training"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/industries' },
        ]}
      />

      <PageHero
        description="Different environments create different risks. Softzeno Tech provides a flexible learning foundation that can be shaped around the realities of your workforce."
        eyebrow="Industries"
        visual="industries"
        title={
          <>
            Relevant safety learning for{' '}
            <span className="text-gradient">real operational environments.</span>
          </>
        }
      />

      <SectionWrapper className="internal-industry-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="A common platform can support different working environments while keeping learning relevant to the people and risks involved."
            eyebrow="Industry use cases"
            title="Adapt the learning context without fragmenting the standard."
          />

          <div className="internal-industry-list">
            {industries.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.035} key={title}>
                <article className="internal-industry-item">
                  <span className="internal-industry-item__number">0{index + 1}</span>
                  <span className="internal-industry-item__icon">
                    <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-industry-standard" spacing="spacious">
        <Container className="internal-outcome-grid">
          <div>
            <p className="eyebrow">Shared standard, tailored context</p>
            <h2>Keep one safety-learning standard while adapting the experience to different teams.</h2>
            <p>
              The same operating model can present relevant scenarios, language and learning paths
              without making every audience experience identical.
            </p>
            <ButtonLink to={ROUTE_PATHS.demo}>
              Discuss your environment <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>

          <div className="internal-benefit-list">
            {commonNeeds.map((need) => (
              <div key={need}>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>{need}</span>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
