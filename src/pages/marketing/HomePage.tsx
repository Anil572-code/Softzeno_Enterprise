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
import { CtaBanner, FeatureCard, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { benefits, industries, platformFeatures, processSteps } from '@/data/siteContent';
import { Seo } from '@/seo';

export function HomePage() {
  return (
    <main id="main-content">
      <Seo
        description="Interactive workplace health and safety training for modern organisations."
        path={ROUTE_PATHS.home}
        title="Interactive Workplace Safety Training"
      />

      <section className="home-hero">
        <Container className="home-hero__inner">
          <Reveal className="home-hero__content">
            <div className="hero-kicker">
              <ShieldCheck aria-hidden="true" size={17} />
              Interactive workplace safety learning
            </div>
            <h1>
              Build safer teams through <span>learning that people remember.</span>
            </h1>
            <p className="home-hero__lead">
              SARAS transforms workplace health and safety training into engaging digital
              experiences with scenarios, assessments, certificates and actionable progress
              insights.
            </p>
            <div className="home-hero__actions">
              <ButtonLink size="large" to={ROUTE_PATHS.demo}>
                Request a demonstration <ArrowRight aria-hidden="true" size={19} />
              </ButtonLink>
              <ButtonLink size="large" to={ROUTE_PATHS.howItWorks} variant="secondary">
                See how it works
              </ButtonLink>
            </div>
            <ul className="hero-proof-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={18} /> Interactive learning
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} /> Progress tracking
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} /> Cloud ready
              </li>
            </ul>
          </Reveal>

          <Reveal className="home-hero__visual" delay={0.08}>
            <div className="platform-preview">
              <div className="platform-preview__topbar">
                <span className="platform-preview__brand-dot" />
                <span>SARAS learning workspace</span>
                <span className="platform-preview__secure">Secure</span>
              </div>
              <div className="platform-preview__body">
                <div className="platform-preview__sidebar">
                  <span className="is-active" />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="platform-preview__content">
                  <div className="preview-welcome">
                    <div>
                      <small>Current learning path</small>
                      <strong>Warehouse hazard awareness</strong>
                    </div>
                    <span>68%</span>
                  </div>
                  <div className="preview-progress">
                    <span />
                  </div>
                  <div className="preview-grid">
                    <div className="preview-card preview-card--primary">
                      <Sparkles aria-hidden="true" size={22} />
                      <strong>Interactive scenario</strong>
                      <p>Identify the safest action before continuing.</p>
                      <span>Continue module</span>
                    </div>
                    <div className="preview-card">
                      <TrendingUp aria-hidden="true" size={22} />
                      <strong>Team progress</strong>
                      <div className="mini-bars">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                  <div className="preview-activity">
                    <div>
                      <span className="activity-icon">
                        <ShieldCheck aria-hidden="true" size={17} />
                      </span>
                      <div>
                        <strong>Hazard recognition</strong>
                        <small>Assessment completed</small>
                      </div>
                    </div>
                    <span className="activity-score">92%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-stat floating-stat--one">
              <strong>9</strong>
              <span>Core platform capabilities</span>
            </div>
            <div className="floating-stat floating-stat--two">
              <ShieldCheck aria-hidden="true" size={23} />
              <span>
                <strong>Safety first</strong> by design
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="trust-strip" aria-label="Designed for">
        <Container>
          <p>Designed for safety-led organisations across</p>
          <div className="trust-strip__items">
            <span>Warehousing</span>
            <span>Manufacturing</span>
            <span>Automotive</span>
            <span>Logistics</span>
            <span>Corporate teams</span>
          </div>
        </Container>
      </section>

      <SectionWrapper className="section-surface" spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="Move beyond passive content with practical learning experiences designed around real workplace decisions."
            eyebrow="A modern training experience"
            title={
              <>
                Make safety learning{' '}
                <span className="text-gradient">active, measurable and scalable.</span>
              </>
            }
          />
          <div className="feature-grid feature-grid--home">
            {platformFeatures.slice(0, 6).map((feature, index) => (
              <Reveal delay={index * 0.04} key={feature.title}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
          <div className="section-action">
            <ButtonLink to={ROUTE_PATHS.features} variant="secondary">
              Explore all platform features <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="outcome-section" spacing="spacious">
        <Container className="split-layout">
          <Reveal className="split-layout__content">
            <p className="eyebrow">Built for operational impact</p>
            <h2>Give every learner a clearer path to safer decisions.</h2>
            <p>
              SARAS helps organisations coordinate consistent workplace safety learning while
              keeping the experience practical for learners and visible for managers.
            </p>
            <ul className="benefit-list">
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 aria-hidden="true" size={19} />
                  {benefit}
                </li>
              ))}
            </ul>
            <ButtonLink to={ROUTE_PATHS.solutions} variant="secondary">
              View solutions <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </Reveal>
          <Reveal className="outcome-visual" delay={0.08}>
            <div className="outcome-dashboard">
              <div className="outcome-dashboard__header">
                <div>
                  <small>Training overview</small>
                  <strong>Organisation readiness</strong>
                </div>
                <span>This quarter</span>
              </div>
              <div className="outcome-score">
                <strong>84%</strong>
                <span>Average completion</span>
              </div>
              <div className="outcome-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="outcome-metrics">
                <div>
                  <span>Certificates</span>
                  <strong>248</strong>
                </div>
                <div>
                  <span>Active learners</span>
                  <strong>326</strong>
                </div>
                <div>
                  <span>Modules</span>
                  <strong>18</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="A clear implementation journey from organisation setup to continuous improvement."
            eyebrow="How it works"
            title="A straightforward path from training need to measurable progress."
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="industries-home" spacing="spacious">
        <Container>
          <div className="section-heading-row">
            <SectionHeading
              description="Adapt the learning experience to the operational risks and responsibilities of different workplaces."
              eyebrow="Industry focused"
              title="Relevant training for the environments your people work in."
            />
            <ButtonLink to={ROUTE_PATHS.industries} variant="ghost">
              View all industries <ChevronRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
          <div className="industry-grid">
            {industries.slice(0, 4).map(({ description, icon: Icon, title }) => (
              <Link className="industry-card" key={title} to={ROUTE_PATHS.industries}>
                <Icon aria-hidden="true" size={26} />
                <h3>{title}</h3>
                <p>{description}</p>
                <span>
                  Explore use case <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
