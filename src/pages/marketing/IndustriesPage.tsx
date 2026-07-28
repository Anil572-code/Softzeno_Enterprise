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
  'Accessible training for varied roles',
  'A platform that can grow with the organisation',
] as const;

export function IndustriesPage() {
  return (
    <main id="main-content">
      <Seo
        description="Discover how SARAS supports workplace safety learning across warehousing, manufacturing, automotive, logistics and corporate environments."
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
        description="Different environments create different risks. SARAS provides a flexible learning foundation that can be shaped around the realities of your workforce."
        eyebrow="Industries"
        visual="industries"
        title={
          <>
            Relevant safety learning for{' '}
            <span className="text-gradient">real operational environments.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="Adapt interactive learning, scenarios and assessment to the people and risks that define your organisation."
            eyebrow="Industry use cases"
            title="Built for organisations where safety performance matters every day."
          />
          <div className="industry-grid industry-grid--large">
            {industries.map(({ description, icon: Icon, title }, index) => (
              <Reveal
                className="industry-card industry-card--static"
                delay={index * 0.04}
                key={title}
              >
                <Icon aria-hidden="true" size={28} />
                <h3>{title}</h3>
                <p>{description}</p>
                <span>
                  Role-aware learning <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container className="split-layout">
          <div className="split-layout__content">
            <p className="eyebrow">Shared needs, tailored context</p>
            <h2>
              One platform can support different teams without making every experience identical.
            </h2>
            <p>
              Organisations can create a consistent safety standard while still presenting learning
              in language, scenarios and workflows that feel relevant to each audience.
            </p>
            <ButtonLink to={ROUTE_PATHS.demo}>
              Discuss your industry needs <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
          <div className="benefit-panel">
            {commonNeeds.map((need) => (
              <div key={need}>
                <CheckCircle2 aria-hidden="true" size={20} />
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
