import { ArrowRight, BookOpen, Mail } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { resourceCards } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function ResourcesPage() {
  return (
    <main className="internal-page internal-page--discovery internal-page--resources" id="main-content">
      <Seo
        description="Workplace safety learning guides, checklists and insights from Softzeno Tech."
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

      <SectionWrapper className="internal-resource-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="A focused collection for safety managers, training coordinators and business leaders."
            eyebrow="Resource library"
            title="Start with the questions that shape a stronger training strategy."
          />

          <div className="internal-resource-list">
            {resourceCards.map(({ description, eyebrow, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.045} key={title}>
                <article className="internal-resource-item">
                  <span className="internal-resource-item__icon">
                    <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <span>{eyebrow}</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                  <span className="internal-resource-item__status">In preparation</span>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-resource-roadmap" spacing="spacious">
        <Container className="internal-resource-roadmap__inner">
          <span className="internal-resource-roadmap__icon">
            <BookOpen aria-hidden="true" size={28} />
          </span>
          <div>
            <p className="eyebrow">Resource roadmap</p>
            <h2>Build a useful library, not content for content’s sake.</h2>
            <p>
              Future material can include implementation checklists, safety-learning templates,
              platform guides and evidence-based insights. Each item should solve a clear problem
              for the organisations Softzeno serves.
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
