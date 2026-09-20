import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { platformFeatures } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

const featureGroups = [
  {
    eyebrow: 'Learning experience',
    title: 'Make important safety learning more active and memorable.',
    featureTitles: ['Interactive learning', 'Hazard identification', 'Scenario-based learning'],
  },
  {
    eyebrow: 'Assessment and evidence',
    title: 'Turn participation into visible progress and dependable records.',
    featureTitles: ['Gamified assessments', 'Certificates and records', 'Progress and analytics'],
  },
  {
    eyebrow: 'Administration and scale',
    title: 'Give administrators a clear foundation for secure, distributed delivery.',
    featureTitles: ['Administrator dashboard', 'Cloud ready', 'Secure authentication'],
  },
] as const;

export function FeaturesPage() {
  return (
    <main className="internal-page internal-page--product internal-page--features" id="main-content">
      <Seo
        description="Explore interactive learning, assessments, certificates, analytics and other Softzeno Tech platform features."
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

      <SectionWrapper className="internal-feature-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="Capabilities are grouped around three jobs: engaging learners, proving progress and keeping administration controlled."
            eyebrow="Core capabilities"
            title="A complete learning foundation without a wall of features."
          />

          <div className="internal-feature-groups">
            {featureGroups.map((group, groupIndex) => {
              const featureTitles = new Set<string>(group.featureTitles);
              const groupFeatures = platformFeatures.filter(({ title }) => featureTitles.has(title));

              return (
                <Reveal delay={groupIndex * 0.05} key={group.eyebrow}>
                  <section className="internal-feature-group">
                    <header>
                      <span>0{groupIndex + 1}</span>
                      <div>
                        <p className="eyebrow">{group.eyebrow}</p>
                        <h2>{group.title}</h2>
                      </div>
                    </header>

                    <div className="internal-feature-group__items">
                      {groupFeatures.map(({ description, icon: Icon, title }) => (
                        <article key={title}>
                          <span className="internal-feature-group__icon">
                            <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                          </span>
                          <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-readiness-section" spacing="spacious">
        <Container className="internal-readiness-grid">
          <div>
            <p className="eyebrow">Built for today, ready for what is next</p>
            <h2>A cloud-ready foundation with room for richer learning experiences.</h2>
            <p>
              The platform direction supports secure access, scalable administration and future
              immersive learning while keeping today’s browser experience clear and usable.
            </p>
            <ButtonLink to={ROUTE_PATHS.demo}>
              Request a platform demonstration <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>

          <div className="internal-readiness-list">
            {[
              'Secure authentication foundation',
              'Responsive browser access',
              'Reusable learning modules',
              'Administrator controls',
              'Analytics and reporting',
              'Future immersive-learning support',
            ].map((item) => (
              <div key={item}>
                <CheckCircle2 aria-hidden="true" size={18} />
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
