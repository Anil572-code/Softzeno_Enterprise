import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Container, SectionWrapper } from '@/components/layout';
import { Reveal } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/site';
import { industries, platformFeatures, processSteps } from '@/data/siteContent';
import { Seo } from '@/seo';

type PreviewRole = 'learner' | 'coordinator' | 'manager';

const rolePreviews: Record<
  PreviewRole,
  {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel: string;
    secondaryValue: string;
    status: string;
  }
> = {
  learner: {
    eyebrow: 'Learner workspace',
    title: 'A focused path through role-based safety learning.',
    description:
      'Learners see their current learning, continue interactive scenarios and understand what is complete without unnecessary complexity.',
    primaryLabel: 'Current module',
    primaryValue: 'Hazard awareness',
    secondaryLabel: 'Progress',
    secondaryValue: '68%',
    status: 'Assessment ready',
  },
  coordinator: {
    eyebrow: 'Coordinator workspace',
    title: 'Coordinate training without losing visibility.',
    description:
      'Training coordinators can organise learning activity, follow completion and keep teams moving through a consistent programme.',
    primaryLabel: 'Active learning',
    primaryValue: '12 modules',
    secondaryLabel: 'Completion view',
    secondaryValue: 'Team level',
    status: 'Records organised',
  },
  manager: {
    eyebrow: 'Manager workspace',
    title: 'Turn training activity into a clearer operational picture.',
    description:
      'Managers get a concise view of participation, completion and areas that may need follow-up across teams and locations.',
    primaryLabel: 'Reporting',
    primaryValue: 'Centralised',
    secondaryLabel: 'Visibility',
    secondaryValue: 'Multi-team',
    status: 'Insights available',
  },
};

const homeCapabilityTitles = new Set([
  'Interactive learning',
  'Hazard identification',
  'Progress and analytics',
]);

const homeIndustryTitles = new Set(['Warehousing', 'Manufacturing', 'Logistics']);

export function HomePage() {
  const [previewRole, setPreviewRole] = useState<PreviewRole>('learner');
  const activePreview = rolePreviews[previewRole];
  const homeCapabilities = platformFeatures.filter(({ title }) => homeCapabilityTitles.has(title));
  const homeIndustries = industries.filter(({ title }) => homeIndustryTitles.has(title));

  return (
    <main className="home-page home-page--focused" id="main-content">
      <Seo
        description="Interactive workplace health and safety training by Softzeno Tech, with practical learning, assessments, progress tracking and reporting for modern organisations."
        path={ROUTE_PATHS.home}
        title="Interactive Workplace Safety Training"
      />

      <section className="home-premium-hero">
        <Container className="home-premium-hero__inner">
          <Reveal className="home-premium-hero__content">
            <div className="home-premium-hero__eyebrow">
              <ShieldCheck aria-hidden="true" size={16} />
              Interactive workplace safety platform
            </div>

            <h1>
              Build safer teams with training <span>people remember.</span>
            </h1>

            <p className="home-premium-hero__lead">
              Softzeno Tech brings interactive learning, assessment and progress visibility into one
              focused workplace safety platform.
            </p>
            <div className="home-premium-hero__motto" aria-label="Softzeno Tech company motto">
              <span>{SITE_CONFIG.tagline}</span>
            </div>

            <div className="home-premium-hero__actions">
              <ButtonLink size="large" to={ROUTE_PATHS.demo}>
                Request a demonstration <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink size="large" to={ROUTE_PATHS.howItWorks} variant="secondary">
                See how it works
              </ButtonLink>
            </div>

            <ul className="home-premium-proof">
              <li>
                <CheckCircle2 aria-hidden="true" size={17} /> Interactive learning
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={17} /> Progress tracking
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={17} /> Cloud ready
              </li>
            </ul>
          </Reveal>

          <Reveal className="home-premium-hero__visual" delay={0.06}>
            <div className="home-product-shell">
              <div className="home-product-shell__topbar">
                <span className="home-product-shell__dot" aria-hidden="true" />
                <span>Softzeno Safety Platform</span>
              </div>

              <div className="home-product-shell__workspace">
                <aside className="home-product-shell__rail" aria-hidden="true">
                  <span className="is-active" />
                  <span />
                  <span />
                  <span />
                </aside>

                <div className="home-product-shell__content">
                  <div className="home-product-shell__heading">
                    <div>
                      <small>Current learning path</small>
                      <strong>Warehouse hazard awareness</strong>
                    </div>
                    <strong className="home-product-shell__score">68%</strong>
                  </div>

                  <div className="home-product-shell__progress" aria-hidden="true">
                    <span />
                  </div>

                  <div className="home-product-shell__cards">
                    <article className="home-product-card home-product-card--primary">
                      <Sparkles aria-hidden="true" size={20} />
                      <div>
                        <strong>Interactive scenario</strong>
                        <p>Choose the safest action before continuing.</p>
                      </div>
                      <span>Continue module</span>
                    </article>

                    <article className="home-product-card home-product-card--metric">
                      <TrendingUp aria-hidden="true" size={20} />
                      <strong>Team progress</strong>
                      <div className="home-product-bars" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </article>
                  </div>

                  <div className="home-product-shell__activity">
                    <span className="home-product-shell__activity-icon">
                      <ShieldCheck aria-hidden="true" size={16} />
                    </span>
                    <div>
                      <strong>Hazard recognition</strong>
                      <small>Assessment completed</small>
                    </div>
                    <strong>92%</strong>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="home-audience-strip" aria-label="Built for operational teams">
        <Container className="home-audience-strip__inner">
          <p>Built for operational teams</p>
          <div className="home-audience-strip__items">
            <span>Warehousing</span>
            <span>Manufacturing</span>
            <span>Automotive</span>
            <span>Logistics</span>
            <span>Corporate teams</span>
          </div>
        </Container>
      </section>

      <SectionWrapper className="home-premium-section" spacing="spacious">
        <Container>
          <div className="home-section-intro">
            <div>
              <p className="eyebrow">Platform essentials</p>
              <h2>Three essentials for practical, measurable safety learning.</h2>
            </div>
            <p>
              Engage people with practical learning, strengthen hazard awareness and keep progress
              visible without turning the experience into a complicated training system.
            </p>
          </div>

          <div className="home-capability-grid">
            {homeCapabilities.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.04} key={title}>
                <article className="home-capability-card">
                  <span className="home-capability-card__icon">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="home-section-action home-section-action--left">
            <ButtonLink to={ROUTE_PATHS.features} variant="secondary">
              Explore platform features <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="home-product-section" spacing="spacious">
        <Container className="home-product-section__grid">
          <Reveal className="home-product-section__copy">
            <p className="eyebrow">One platform, the right view for each role</p>
            <h2>Keep learners, coordinators and managers connected to the same training standard.</h2>
            <p>
              Softzeno presents the right level of information for each role while keeping learning
              activity connected in one consistent platform experience.
            </p>

            <div className="home-role-switcher" aria-label="Preview workspace role">
              {(Object.keys(rolePreviews) as PreviewRole[]).map((role) => (
                <button
                  aria-pressed={previewRole === role}
                  className={previewRole === role ? 'is-active' : undefined}
                  key={role}
                  onClick={() => setPreviewRole(role)}
                  type="button"
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="home-role-preview" delay={0.06}>
            <div className="home-role-preview__topbar">
              <span>{activePreview.eyebrow}</span>
              <span>Sample workspace data</span>
            </div>

            <div className="home-role-preview__body" key={previewRole}>
              <div className="home-role-preview__headline">
                <h3>{activePreview.title}</h3>
                <p>{activePreview.description}</p>
              </div>

              <div className="home-role-preview__metrics">
                <article>
                  <span>{activePreview.primaryLabel}</span>
                  <strong>{activePreview.primaryValue}</strong>
                </article>
                <article>
                  <span>{activePreview.secondaryLabel}</span>
                  <strong>{activePreview.secondaryValue}</strong>
                </article>
              </div>

              <div className="home-role-preview__status">
                <CheckCircle2 aria-hidden="true" size={17} />
                <span>{activePreview.status}</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="home-workflow-section" spacing="spacious">
        <Container>
          <div className="home-section-intro">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>From setup to continuous improvement in four clear stages.</h2>
            </div>
            <p>
              A straightforward operating flow keeps implementation understandable for both
              administrators and learners.
            </p>
          </div>

          <ol className="home-workflow">
            {processSteps.map((step, index) => (
              <li className="home-workflow__item" key={step.number}>
                <Reveal delay={index * 0.035}>
                  <article>
                    <span>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="home-section-action home-section-action--left">
            <ButtonLink to={ROUTE_PATHS.howItWorks} variant="secondary">
              See the complete workflow <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="home-industry-section" spacing="spacious">
        <Container>
          <div className="home-section-intro home-section-intro--compact">
            <div>
              <p className="eyebrow">Built around operational reality</p>
              <h2>Relevant learning for the environments your people work in.</h2>
            </div>
            <ButtonLink to={ROUTE_PATHS.industries} variant="ghost">
              View all industries <ChevronRight aria-hidden="true" size={17} />
            </ButtonLink>
          </div>

          <div className="home-industry-grid">
            {homeIndustries.map(({ description, icon: Icon, title }) => (
              <Link className="home-industry-card" key={title} to={ROUTE_PATHS.industries}>
                <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <section className="home-final-cta">
        <Container className="home-final-cta__inner">
          <div>
            <p className="eyebrow">Request a focused demonstration</p>
            <h2>See how Softzeno can support your workplace safety training.</h2>
            <p>
              Tell us about your teams, training priorities and operational environment. We will
              shape the demonstration around what matters to your organisation.
            </p>
          </div>
          <ButtonLink size="large" to={ROUTE_PATHS.demo}>
            Request a demonstration <ArrowRight aria-hidden="true" size={18} />
          </ButtonLink>
        </Container>
      </section>
    </main>
  );
}
