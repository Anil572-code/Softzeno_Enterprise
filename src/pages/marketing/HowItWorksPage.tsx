import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { processSteps } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function HowItWorksPage() {
  return (
    <main className="internal-page internal-page--product internal-page--workflow" id="main-content">
      <Seo
        description="See how organisations set up, assign, deliver and track workplace safety learning with Softzeno Tech."
        path={ROUTE_PATHS.howItWorks}
        title="How Softzeno Works"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'How It Works', path: '/how-it-works' },
        ]}
      />

      <PageHero
        description="A clear workflow helps administrators stay in control and gives learners a focused path from assignment to completion."
        eyebrow="How it works"
        visual="howItWorks"
        title={
          <>
            From organisation setup to{' '}
            <span className="text-gradient">continuous safety improvement.</span>
          </>
        }
      />

      <SectionWrapper className="internal-workflow-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="Planning, learning, assessment and progress visibility connect in one repeatable journey."
            eyebrow="The Softzeno workflow"
            title="Four stages. One understandable operating flow."
          />

          <ol className="internal-workflow-list">
            {processSteps.map((step, index) => (
              <li key={step.number}>
                <Reveal delay={index * 0.045}>
                  <article className="internal-workflow-step">
                    <span className="internal-workflow-step__number">{step.number}</span>
                    <div>
                      <h2>{step.title}</h2>
                      <p>{step.description}</p>
                    </div>
                    <span aria-hidden="true" className="internal-workflow-step__line" />
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-audience-section" spacing="spacious">
        <Container>
          <div className="internal-section-lead">
            <p className="eyebrow">Two sides of the same experience</p>
            <h2>Simple for learners. Clear for administrators.</h2>
          </div>

          <div className="internal-audience-grid">
            <article>
              <span>Learner experience</span>
              <h3>Stay focused on what needs to be completed.</h3>
              <ul>
                {[
                  'Clear assigned learning',
                  'Interactive activities',
                  'Immediate assessment feedback',
                  'Visible progress and certificates',
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <span>Administrator experience</span>
              <h3>Keep training organised and progress visible.</h3>
              <ul>
                {[
                  'Structured team management',
                  'Assignment controls',
                  'Completion oversight',
                  'Analytics and reporting',
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="internal-action-row internal-action-row--spaced">
            <ButtonLink size="large" to={ROUTE_PATHS.demo}>
              Request a tailored demo <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
