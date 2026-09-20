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
    <main className="internal-page internal-page--product internal-page--solutions" id="main-content">
      <Seo
        description="Explore Softzeno Tech solutions for engaging learners, coordinating training and improving workplace safety visibility."
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

      <SectionWrapper className="internal-solution-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="Four connected needs shape the experience, from learner participation through to management visibility."
            eyebrow="One platform, multiple needs"
            title="Designed around the work your organisation needs to do."
          />

          <div className="internal-solution-list">
            {solutionAreas.map(({ description, icon: Icon, points, title }, index) => (
              <Reveal delay={index * 0.04} key={title}>
                <article className="internal-solution-row">
                  <div className="internal-solution-row__identity">
                    <span className="internal-solution-row__number">0{index + 1}</span>
                    <span className="internal-solution-row__icon">
                      <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                    </span>
                  </div>
                  <div className="internal-solution-row__copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 aria-hidden="true" size={16} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-outcome-section" spacing="spacious">
        <Container className="internal-outcome-grid">
          <div>
            <p className="eyebrow">Why interactive learning</p>
            <h2>Strengthen the training experience without adding unnecessary operational complexity.</h2>
            <p>
              Give learners clarity, coordinators structure and managers visibility while keeping
              one scalable learning foundation underneath.
            </p>
            <ButtonLink to={ROUTE_PATHS.features} variant="secondary">
              Explore platform features <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>

          <div className="internal-benefit-list">
            {benefits.slice(0, 5).map((benefit) => (
              <div key={benefit}>
                <CheckCircle2 aria-hidden="true" size={18} />
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
