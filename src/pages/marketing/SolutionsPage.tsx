import { ArrowRight, CheckCircle2, ClipboardList, Eye, Gauge, Users } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { benefits } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

const solutionAreas = [
  {
    icon: Users,
    title: 'Learner engagement',
    description:
      'Create focused learning journeys that invite participation instead of passive completion.',
    points: ['Interactive activities', 'Scenario-based decisions', 'Immediate feedback'],
  },
  {
    icon: ClipboardList,
    title: 'Training coordination',
    description:
      'Give coordinators a clear way to organise assignments, participation and completion.',
    points: ['Team organisation', 'Learning assignments', 'Certificate records'],
  },
  {
    icon: Eye,
    title: 'Hazard awareness',
    description: 'Help people recognise workplace risks before those risks become real incidents.',
    points: ['Visual hazard exercises', 'Practical scenarios', 'Reinforcement assessments'],
  },
  {
    icon: Gauge,
    title: 'Management visibility',
    description:
      'Turn activity into useful insight for managers responsible for training outcomes.',
    points: ['Progress tracking', 'Analytics', 'Reporting'],
  },
] as const;

export function SolutionsPage() {
  return (
    <main id="main-content">
      <Seo
        description="Explore SARAS solutions for engaging learners, coordinating training and improving workplace safety visibility."
        path={ROUTE_PATHS.solutions}
        title="Workplace Safety Training Solutions"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ]}
      />
      <PageHero
        description="One connected learning platform for the people who complete training, the teams who coordinate it and the managers who need confidence in the outcome."
        eyebrow="Solutions"
        visual="solutions"
        title={
          <>
            Support safer work through{' '}
            <span className="text-gradient">better learning, coordination and insight.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="SARAS brings the essential parts of workplace safety learning together in one coherent experience."
            eyebrow="One platform, multiple needs"
            title="Designed around the work your organisation needs to do."
          />
          <div className="solution-grid">
            {solutionAreas.map(({ description, icon: Icon, points, title }, index) => (
              <Reveal className="solution-card" delay={index * 0.05} key={title}>
                <span className="feature-card__icon">
                  <Icon aria-hidden="true" size={25} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 aria-hidden="true" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container className="split-layout">
          <div className="split-layout__content">
            <p className="eyebrow">Why organisations choose interactive learning</p>
            <h2>Build a stronger training experience without adding unnecessary complexity.</h2>
            <p>
              The platform is designed to give learners clarity and managers visibility, while
              maintaining a scalable foundation for future capabilities.
            </p>
            <ButtonLink to={ROUTE_PATHS.features} variant="secondary">
              Explore platform features <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
          <div className="benefit-panel">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 aria-hidden="true" size={20} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
