import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Eye,
  Gauge,
  GraduationCap,
  Trophy,
} from 'lucide-react';

import safety360Achievements from '@/assets/product/safety360-achievements.png';
import safety360Certificates from '@/assets/product/safety360-certificates.png';
import safety360Dashboard from '@/assets/product/safety360-dashboard.png';
import safety360Leaderboard from '@/assets/product/safety360-leaderboard.png';
import safety360Progress from '@/assets/product/safety360-progress.png';
import safety360Training from '@/assets/product/safety360-training.png';
import { Container } from '@/components/layout';
import { Reveal } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { Seo } from '@/seo';

const productCapabilities = [
  {
    icon: GraduationCap,
    title: 'Structured training',
    description: 'Focused workplace modules with clear scenarios, duration, assessment and next actions.',
  },
  {
    icon: BarChart3,
    title: 'Measurable progress',
    description: 'Completion, best scores, knowledge accuracy and attempts stay visible in one learning record.',
  },
  {
    icon: Award,
    title: 'Training records',
    description: 'Completed learning is reflected through clear certificate, score and status information.',
  },
  {
    icon: Trophy,
    title: 'Recognition',
    description: 'Leaderboards and milestones make achievement visible without taking focus away from learning.',
  },
] as const;

const journey = [
  { number: '01', title: 'Learn', description: 'Complete focused workplace training modules.' },
  { number: '02', title: 'Practise', description: 'Work through scenario-led decisions and assessments.' },
  { number: '03', title: 'Measure', description: 'Record scores, knowledge results and attempts.' },
  { number: '04', title: 'Certify', description: 'Keep completed learning visible through certificate records.' },
  { number: '05', title: 'Recognise', description: 'Celebrate meaningful milestones and governed performance.' },
] as const;

export function Safety360Page() {
  return (
    <main className="s360-page s360-page--product" id="main-content">
      <Seo
        description="Explore Safety 360 by Softzeno Tech: structured workplace safety training, measurable progress, certificates, leaderboards and achievement tracking in one focused platform."
        path={ROUTE_PATHS.safety360}
        title="Safety 360 | Workplace Safety Training Platform"
      />

      <section className="s360-product-hero" aria-labelledby="s360-page-title">
        <Container className="s360-product-hero__inner">
          <Reveal className="s360-product-hero__copy">
            <p className="s360-product-hero__kicker">Safety 360 · Workplace training platform</p>
            <h1 id="s360-page-title">Train people for the decisions that matter.</h1>
            <p className="s360-product-hero__lead">
              Safety 360 gives employees a clear path from assigned learning to measurable progress,
              certification and recognition — without turning training into a complicated system.
            </p>

            <div className="s360-product-hero__actions">
              <ButtonLink size="large" to={ROUTE_PATHS.demo}>
                Request a demonstration <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink size="large" to={ROUTE_PATHS.contact} variant="secondary">
                Talk to Softzeno Tech
              </ButtonLink>
            </div>

            <div className="s360-product-hero__facts" aria-label="Safety 360 product highlights">
              <span><strong>6</strong> focused training modules</span>
              <span><strong>360°</strong> immersive learning</span>
              <span><strong>Connected</strong> progress, certification and recognition</span>
            </div>
          </Reveal>

          <Reveal className="s360-product-hero__stage" delay={0.05}>
            <div className="s360-product-window">
              <div className="s360-product-window__topbar" aria-hidden="true">
                <span />
                <span />
                <span />
                <p>Safety 360 · Training Library</p>
              </div>
              <img
                alt="Safety 360 training library showing six workplace safety modules and their current status"
                decoding="async"
                fetchPriority="high"
                src={safety360Training}
              />
            </div>
            <p className="s360-product-hero__implementation">
              Current implementation shown: Nexus Global Logistics employee training.
            </p>
          </Reveal>
        </Container>
      </section>

      <nav className="s360-product-nav" aria-label="Safety 360 page sections">
        <Container className="s360-product-nav__inner">
          <a href="#overview">Overview</a>
          <a href="#training">Training</a>
          <a href="#progress">Progress</a>
          <a href="#certificates">Certificates</a>
          <a href="#recognition">Recognition</a>
        </Container>
      </nav>

      <section className="s360-product-overview" id="overview" aria-labelledby="s360-overview-title">
        <Container>
          <Reveal className="s360-product-heading s360-product-heading--center">
            <p className="eyebrow">One connected experience</p>
            <h2 id="s360-overview-title">A training platform that stays clear from assignment to achievement.</h2>
            <p>
              Safety 360 keeps the employee experience focused while making progress and completion
              visible through a consistent, structured interface.
            </p>
          </Reveal>

          <div className="s360-product-capabilities">
            {productCapabilities.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.03} key={title}>
                <article className="s360-product-capability">
                  <span><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="s360-product-story s360-product-story--dashboard" id="training">
        <Container className="s360-product-story__layout">
          <Reveal className="s360-product-story__visual">
            <img
              alt="Safety 360 overview dashboard showing training progression, recommended next module and programme status"
              loading="lazy"
              src={safety360Dashboard}
            />
          </Reveal>

          <Reveal className="s360-product-story__copy" delay={0.04}>
            <p className="eyebrow">Focused employee experience</p>
            <h2>Give each learner a clear next action.</h2>
            <p>
              The employee overview combines programme status, best recorded performance, knowledge
              accuracy and recommended next learning in one concise workspace.
            </p>
            <ul>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Current completion and module status</li>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Recommended next training</li>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Recorded scores and knowledge visibility</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="s360-product-story" id="progress">
        <Container className="s360-product-story__layout s360-product-story__layout--reverse">
          <Reveal className="s360-product-story__copy">
            <p className="eyebrow">Progress & performance</p>
            <h2>Turn training activity into a learning record people can understand.</h2>
            <p>
              Completion, best scores, knowledge accuracy, attempts and module-level history stay
              together instead of being scattered across disconnected screens.
            </p>
            <div className="s360-product-metrics" aria-label="Progress capabilities">
              <span><Gauge aria-hidden="true" size={17} /> Completion</span>
              <span><BarChart3 aria-hidden="true" size={17} /> Performance</span>
              <span><Eye aria-hidden="true" size={17} /> Visibility</span>
            </div>
          </Reveal>

          <Reveal className="s360-product-story__visual" delay={0.04}>
            <img
              alt="Safety 360 progress and performance page showing completion, best scores, knowledge and training history"
              loading="lazy"
              src={safety360Progress}
            />
          </Reveal>
        </Container>
      </section>

      <section className="s360-product-story s360-product-story--soft" id="certificates">
        <Container className="s360-product-story__layout">
          <Reveal className="s360-product-story__visual">
            <img
              alt="Safety 360 training certificate registry showing earned, in-progress and not-earned certificate states"
              loading="lazy"
              src={safety360Certificates}
            />
          </Reveal>

          <Reveal className="s360-product-story__copy" delay={0.04}>
            <p className="eyebrow">Certificates & records</p>
            <h2>Keep completed learning visible, organised and easy to review.</h2>
            <p>
              Certificate records connect completed modules with scores, knowledge results, issue
              dates and status so learners can see exactly what has been earned.
            </p>
            <ul>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Earned and in-progress visibility</li>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Module score and knowledge result</li>
              <li><CheckCircle2 aria-hidden="true" size={17} /> Clear certificate actions and status</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="s360-product-recognition" id="recognition" aria-labelledby="s360-recognition-title">
        <Container>
          <Reveal className="s360-product-heading">
            <p className="eyebrow">Recognition with purpose</p>
            <h2 id="s360-recognition-title">Make progress visible without turning training into noise.</h2>
            <p>
              Leaderboards and achievements sit around the training record, helping employees see
              milestones and performance while the learning journey remains the primary focus.
            </p>
          </Reveal>

          <div className="s360-product-recognition__grid">
            <Reveal>
              <figure>
                <img
                  alt="Safety 360 leaderboard comparing completed training results by employee"
                  loading="lazy"
                  src={safety360Leaderboard}
                />
                <figcaption>
                  <strong>Leaderboard</strong>
                  <span>Transparent ranking based on completed training results.</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.04}>
              <figure>
                <img
                  alt="Safety 360 achievements showing earned and locked workplace safety milestones"
                  loading="lazy"
                  src={safety360Achievements}
                />
                <figcaption>
                  <strong>Achievements</strong>
                  <span>Governed milestones tied to training, knowledge and performance.</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="s360-product-journey" aria-labelledby="s360-journey-title">
        <Container>
          <Reveal className="s360-product-heading s360-product-heading--center">
            <p className="eyebrow">How the experience connects</p>
            <h2 id="s360-journey-title">One simple journey from learning to recognition.</h2>
          </Reveal>

          <ol className="s360-product-journey__grid">
            {journey.map((item, index) => (
              <Reveal delay={index * 0.025} key={item.number}>
                <li>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="s360-product-company">
        <Container className="s360-product-company__inner">
          <Reveal>
            <p className="eyebrow">Built by Softzeno Tech</p>
            <h2>Smarter Technology. Stronger Workplaces.</h2>
            <p>
              Safety 360 reflects our approach to software: clear workflows, practical interaction,
              measurable outcomes and an interface that supports the work instead of getting in the way.
            </p>
          </Reveal>
          <Reveal className="s360-product-company__actions" delay={0.04}>
            <ButtonLink to={ROUTE_PATHS.about} variant="secondary">About Softzeno Tech</ButtonLink>
            <ButtonLink to={ROUTE_PATHS.demo}>
              Request a demonstration <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
