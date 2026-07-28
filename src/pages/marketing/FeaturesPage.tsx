import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, FeatureCard, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { platformFeatures } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function FeaturesPage() {
  return (
    <main id="main-content">
      <Seo
        description="Explore interactive learning, assessments, certificates, analytics and other SARAS platform features."
        path={ROUTE_PATHS.features}
        title="Platform Features"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Features', path: '/features' },
        ]}
      />
      <PageHero
        description="A focused set of capabilities that helps organisations deliver, manage and improve workplace safety learning."
        eyebrow="Platform features"
        visual="features"
        title={
          <>
            Everything needed to make safety training{' '}
            <span className="text-gradient">more engaging and visible.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="Every feature supports one shared objective: helping people understand risk and make safer decisions."
            eyebrow="Core capabilities"
            title="A complete interactive learning foundation."
          />
          <div className="feature-grid">
            {platformFeatures.map((feature, index) => (
              <Reveal delay={index * 0.035} key={feature.title}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container className="split-layout split-layout--balanced">
          <div className="feature-highlight">
            <p className="eyebrow">Designed for now, ready for what is next</p>
            <h2>A cloud-ready platform with a roadmap towards richer simulation.</h2>
            <p>
              SARAS is structured to support secure access, scalable administration and future VR
              experiences without compromising the clarity of today’s browser-based learning.
            </p>
            <ButtonLink to={ROUTE_PATHS.demo}>
              See the platform direction <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
          <div className="readiness-list">
            {[
              'Secure authentication foundation',
              'Responsive browser access',
              'Reusable learning modules',
              'Administrator controls',
              'Analytics and reporting',
              'Future VR support',
            ].map((item) => (
              <div key={item}>
                <CheckCircle2 aria-hidden="true" size={20} />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
