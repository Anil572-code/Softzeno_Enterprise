import { ArrowRight, BookOpen, Mail } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { resourceCards } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function ResourcesPage() {
  return (
    <main id="main-content">
      <Seo
        description="Workplace safety learning guides, checklists and insights from SARAS."
        path={ROUTE_PATHS.resources}
        title="Safety Training Resources"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources' },
        ]}
      />
      <PageHero
        description="Practical guidance for teams exploring digital safety learning, stronger engagement and more consistent training delivery."
        eyebrow="Resources"
        visual="resources"
        title={
          <>
            Ideas and guidance for{' '}
            <span className="text-gradient">better workplace safety learning.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            description="A growing collection of practical material for safety managers, training coordinators and business leaders."
            eyebrow="Featured resources"
            title="Start with the questions that shape a stronger training strategy."
          />
          <div className="resource-grid">
            {resourceCards.map(({ description, eyebrow, icon: Icon, title }, index) => (
              <Reveal className="resource-card" delay={index * 0.05} key={title}>
                <span className="resource-card__icon">
                  <Icon aria-hidden="true" size={24} />
                </span>
                <span className="resource-card__eyebrow">{eyebrow}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className="resource-card__link">
                  Coming soon <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container className="resource-feature">
          <div className="resource-feature__icon">
            <BookOpen aria-hidden="true" size={34} />
          </div>
          <div>
            <p className="eyebrow">Resource roadmap</p>
            <h2>Build a useful library—not content for content’s sake.</h2>
            <p>
              Future resources can include implementation checklists, safety-learning templates,
              platform guides and evidence-based insights. Each item should have a clear purpose for
              the organisations SARAS serves.
            </p>
          </div>
          <ButtonLink to={ROUTE_PATHS.contact} variant="secondary">
            Suggest a topic <Mail aria-hidden="true" size={18} />
          </ButtonLink>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
