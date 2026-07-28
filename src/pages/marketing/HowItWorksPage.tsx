import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { processSteps } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function HowItWorksPage() {
  return (
    <main id="main-content">
      <Seo
        description="See how organisations set up, assign, deliver and track workplace safety learning with SARAS."
        path={ROUTE_PATHS.howItWorks}
        title="How SARAS Works"
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

      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="The platform connects planning, learning, assessment and progress visibility in one repeatable journey."
            eyebrow="The SARAS workflow"
            title="Four steps to a stronger digital training experience."
          />
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <Reveal className="process-timeline__item" delay={index * 0.05} key={step.number}>
                <span className="process-timeline__number">{step.number}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div aria-hidden="true" className="process-timeline__visual">
                  <span />
                  <span />
                  <span />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container className="split-layout split-layout--balanced">
          <div>
            <p className="eyebrow">Designed for both sides of the experience</p>
            <h2>Simple for learners. Clear for administrators.</h2>
            <p>
              The learner experience prioritises focus and progress. The administrator experience
              prioritises organisation, visibility and dependable records.
            </p>
          </div>
          <div className="dual-audience-grid">
            <article>
              <h3>For learners</h3>
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
              <h3>For administrators</h3>
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
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="spacious">
        <Container className="centre-callout">
          <p className="eyebrow">See the workflow in context</p>
          <h2>A demonstration can focus on the needs of your organisation.</h2>
          <p>
            Share your industry, workforce size and current training priorities with the SARAS team.
          </p>
          <ButtonLink size="large" to={ROUTE_PATHS.demo}>
            Request a tailored demo <ArrowRight aria-hidden="true" size={19} />
          </ButtonLink>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
