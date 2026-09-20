import { ArrowRight, Info } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { caseStudyCards } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function CaseStudiesPage() {
  return (
    <main id="main-content">
      <Seo
        description="Explore Softzeno Tech workplace safety learning use cases across operational industries."
        path={ROUTE_PATHS.caseStudies}
        title="Industry Use Cases"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Use Cases', path: '/case-studies' },
        ]}
      />
      <PageHero
        description="Explore practical examples of how organisations can use interactive learning to strengthen consistency, engagement and visibility."
        eyebrow="Use cases"
        visual="caseStudies"
        title={
          <>
            Learning use cases shaped around{' '}
            <span className="text-gradient">real organisational challenges.</span>
          </>
        }
      />
      <SectionWrapper spacing="spacious">
        <Container>
          <div className="notice-card">
            <Info aria-hidden="true" size={21} />
            <p>
              These use cases describe representative operating scenarios and show how the platform can
              support different environments. They are not presented as named customer deployments or measured customer results.
            </p>
          </div>
          <SectionHeading
            align="centre"
            description="Each use case shows a practical application of the platform around a clear workplace training need."
            eyebrow="Operational applications"
            title="See how Softzeno Tech can adapt to different training priorities."
          />
          <div className="case-study-grid">
            {caseStudyCards.map((card, index) => (
              <Reveal className="case-study-card" delay={index * 0.05} key={card.title}>
                <span className="case-study-card__sector">{card.sector}</span>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="case-study-card__result">{card.result}</div>
              </Reveal>
            ))}
          </div>
          <div className="centre-callout centre-callout--compact">
            <h2>Discuss an implementation shaped around your workplace.</h2>
            <ButtonLink to={ROUTE_PATHS.demo}>
              Request a demonstration <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
