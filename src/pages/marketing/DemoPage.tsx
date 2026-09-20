import { CheckCircle2, Clock3, ShieldCheck, UsersRound } from 'lucide-react';

import { DemoRequestForm } from '@/components/forms';
import { Container, SectionWrapper } from '@/components/layout';
import { PageHero } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const demoBenefits = [
  {
    icon: UsersRound,
    title: 'Relevant to your organisation',
    description:
      'We focus the conversation on your workforce, industry and current training process.',
  },
  {
    icon: Clock3,
    title: 'Focused and practical',
    description:
      'See the learner journey, administrator workflow and reporting direction without unnecessary detail.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-first discussion',
    description:
      'Explore how interactive learning could support your real workplace safety objectives.',
  },
] as const;

export function DemoPage() {
  return (
    <main id="main-content">
      <Seo
        description="Request a tailored demonstration of the Softzeno Interactive Safety Platform."
        path={ROUTE_PATHS.demo}
        title="Request a Demonstration"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Demo', path: '/demo' },
        ]}
      />
      <PageHero
        actions={
          <p className="page-hero__note">
            No obligation. A focused conversation about your training needs.
          </p>
        }
        description="Tell us about your organisation and we will shape the demonstration around the teams, risks and outcomes that matter most to you."
        eyebrow="Request a demonstration"
        visual="demo"
        title={
          <>
            See how Softzeno Tech can support{' '}
            <span className="text-gradient">safer, better-prepared teams.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container className="demo-layout">
          <div className="demo-layout__content">
            <p className="eyebrow">What to expect</p>
            <h2>A clear view of the platform and its potential fit.</h2>
            <p>
              The demonstration is designed for decision makers, safety teams and training
              coordinators who want to understand how interactive learning could improve their
              current approach.
            </p>
            <div className="demo-benefits">
              {demoBenefits.map(({ description, icon: Icon, title }) => (
                <article key={title}>
                  <span>
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="demo-checklist">
              <h3>The demonstration can cover</h3>
              <ul>
                {[
                  'Learner experience',
                  'Interactive scenarios',
                  'Assessment approach',
                  'Administrator workflow',
                  'Progress and reporting',
                  'Future platform direction',
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form-card">
            <div className="form-card__header">
              <p className="eyebrow">Tell us about your needs</p>
              <h2>Request your Softzeno demo</h2>
              <p>Complete the form and the team can prepare a relevant conversation.</p>
            </div>
            <DemoRequestForm />
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
