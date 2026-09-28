import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  GraduationCap,
  Layers3,
  LineChart,
  Palette,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
} from 'lucide-react';

import safety360Dashboard from '@/assets/product/safety360-dashboard.png';
import { Container } from '@/components/layout';
import { Reveal } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { industries } from '@/data/siteContent';
import { Seo } from '@/seo';

const companyCapabilities = [
  {
    icon: Code2,
    title: 'Enterprise software',
    description: 'Practical web applications built around real operational workflows and clear ownership.',
  },
  {
    icon: GraduationCap,
    title: 'Interactive training systems',
    description: 'Structured digital learning experiences that turn knowledge into measurable performance.',
  },
  {
    icon: BarChart3,
    title: 'Data & reporting',
    description: 'Focused dashboards and reporting that make progress, status and next actions visible.',
  },
  {
    icon: Palette,
    title: 'Product & UX design',
    description: 'Clean, accessible interfaces designed to keep complex work understandable and efficient.',
  },
] as const;

const safety360Highlights = [
  'Immersive and scenario-led training',
  'Progress, scores and knowledge visibility',
  'Certificate and completion records',
  'Leaderboards and achievement milestones',
] as const;

const deliverySteps = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'Clarify users, business goals, operational constraints and the outcome the client needs.',
  },
  {
    number: '02',
    title: 'Design the experience',
    description: 'Shape workflows, information architecture and interfaces before implementation becomes expensive.',
  },
  {
    number: '03',
    title: 'Build with discipline',
    description: 'Develop the product with maintainable structure, clear validation and practical testing.',
  },
  {
    number: '04',
    title: 'Refine with feedback',
    description: 'Use client and user feedback to improve the product before final delivery and demonstration.',
  },
] as const;

const teamMembers = [
  { name: 'Aakriti Bhusal', role: 'Project Manager & Requirements Lead' },
  { name: 'Prajwal Sharma', role: 'System Analysis & Technical Lead' },
  { name: 'Sarina Basnet', role: 'UX/UI & Marketing Lead' },
  { name: 'Subasna Chhetri', role: 'Documentation & Delivery Operations Lead' },
] as const;

const homeIndustries = industries.filter(({ title }) =>
  ['Warehousing', 'Manufacturing', 'Logistics', 'Operational businesses'].includes(title),
);

export function HomePage() {
  return (
    <main className="company-home" id="main-content">
      <Seo
        description="Softzeno Tech designs practical digital products, enterprise software and interactive training systems for safer, smarter and more efficient workplaces."
        path={ROUTE_PATHS.home}
        title="Softzeno Tech | Smarter Technology. Stronger Workplaces."
      />

      <section className="company-hero" aria-labelledby="company-home-title">
        <div className="company-hero__ambient" aria-hidden="true" />
        <Container className="company-hero__inner">
          <Reveal className="company-hero__content">
            <div className="company-hero__eyebrow">
              Digital products for modern operations
            </div>

            <div className="company-hero__headline">
              <p>Softzeno Tech</p>
              <h1 id="company-home-title">Smarter Technology. Stronger Workplaces.</h1>
            </div>

            <p className="company-hero__lead">
              We design practical digital systems that help organisations train teams, simplify
              workflows and make performance easier to understand.
            </p>

            <div className="company-hero__actions">
              <ButtonLink className="company-hero__primary" size="large" to={ROUTE_PATHS.demo}>
                Request a demonstration <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink
                className="company-hero__secondary"
                size="large"
                to={ROUTE_PATHS.safety360}
                variant="secondary"
              >
                Explore Safety 360
              </ButtonLink>
            </div>

            <div className="company-hero__capabilities" aria-label="Softzeno Tech capabilities">
              {companyCapabilities.map(({ icon: Icon, title }) => (
                <div className="company-hero__capability" key={title}>
                  <span>
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </span>
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="company-hero__visual" delay={0.06}>
            <div className="company-featured-product">
              <div className="company-featured-product__frame">
                <div className="company-featured-product__chrome" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <p>Safety 360 · Employee Training</p>
                </div>
                <img
                  alt="Safety 360 employee dashboard showing completion, best score, knowledge accuracy and training progression"
                  decoding="async"
                  fetchPriority="high"
                  src={safety360Dashboard}
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="company-solutions" aria-labelledby="company-solutions-title">
        <Container>
          <Reveal className="company-section-heading">
            <p className="eyebrow">What we build</p>
            <h2 id="company-solutions-title">Software designed around real work, not unnecessary complexity.</h2>
            <p>
              Softzeno Tech combines software engineering, product thinking and user-centred design
              to create focused digital systems for organisations and operational teams.
            </p>
          </Reveal>

          <div className="company-solutions__grid">
            {companyCapabilities.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.035} key={title}>
                <article className="company-solution-card">
                  <span><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-featured" aria-labelledby="company-featured-title">
        <Container className="company-featured__inner">
          <Reveal className="company-featured__copy">
            <p className="eyebrow">Flagship solution</p>
            <h2 id="company-featured-title">Safety 360 turns workplace training into a clearer, measurable experience.</h2>
            <p>
              Safety 360 brings structured learning, practical assessment, progress tracking,
              certification and recognition into one focused employee training platform.
            </p>

            <ul className="company-featured__list">
              {safety360Highlights.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink to={ROUTE_PATHS.safety360}>
              View Safety 360 <ArrowRight aria-hidden="true" size={17} />
            </ButtonLink>
          </Reveal>

          <Reveal className="company-featured__proof" delay={0.05}>
            <div className="company-featured__proof-top">
              <span><ShieldCheck aria-hidden="true" size={18} /> Product focus</span>
              <strong>Workplace safety training</strong>
            </div>
            <div className="company-featured__proof-grid">
              <article>
                <GraduationCap aria-hidden="true" size={22} />
                <div><strong>Learn</strong><span>Structured training modules</span></div>
              </article>
              <article>
                <LineChart aria-hidden="true" size={22} />
                <div><strong>Measure</strong><span>Progress and performance</span></div>
              </article>
              <article>
                <ShieldCheck aria-hidden="true" size={22} />
                <div><strong>Record</strong><span>Certificates and status</span></div>
              </article>
              <article>
                <UsersRound aria-hidden="true" size={22} />
                <div><strong>Recognise</strong><span>Milestones and ranking</span></div>
              </article>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="company-process" aria-labelledby="company-process-title">
        <Container>
          <Reveal className="company-section-heading company-section-heading--compact">
            <p className="eyebrow">How we work</p>
            <h2 id="company-process-title">A disciplined path from client need to finished product.</h2>
          </Reveal>

          <div className="company-process__grid">
            {deliverySteps.map((step, index) => (
              <Reveal delay={index * 0.03} key={step.number}>
                <article className="company-process-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-industries" aria-labelledby="company-industries-title">
        <Container>
          <Reveal className="company-section-heading company-section-heading--with-action">
            <div>
              <p className="eyebrow">Operational context</p>
              <h2 id="company-industries-title">Built for environments where clarity and consistency matter.</h2>
            </div>
            <ButtonLink to={ROUTE_PATHS.industries} variant="secondary">
              View industries <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </Reveal>

          <div className="company-industries__grid">
            {homeIndustries.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.025} key={title}>
                <article className="company-industry-card">
                  <span><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-mission" aria-labelledby="company-mission-title">
        <Container className="company-mission__inner">
          <Reveal className="company-mission__statement">
            <p className="eyebrow">Our mission</p>
            <h2 id="company-mission-title">Build practical, reliable technology that helps organisations work smarter, safer and more effectively.</h2>
            <p>
              We value clear requirements, dependable implementation, thoughtful user experience and
              delivery quality that can be explained to both technical and non-technical stakeholders.
            </p>
          </Reveal>

          <Reveal className="company-mission__principles" delay={0.05}>
            <article><Target aria-hidden="true" size={21} /><div><strong>Purpose before features</strong><span>Start with the problem and the outcome.</span></div></article>
            <article><Layers3 aria-hidden="true" size={21} /><div><strong>Structure before noise</strong><span>Keep workflows understandable and maintainable.</span></div></article>
            <article><Workflow aria-hidden="true" size={21} /><div><strong>Feedback before finality</strong><span>Refine the product with evidence and client input.</span></div></article>
          </Reveal>
        </Container>
      </section>

      <section className="company-team" aria-labelledby="company-team-title">
        <Container>
          <Reveal className="company-section-heading company-section-heading--with-action">
            <div>
              <p className="eyebrow">The team behind Softzeno Tech</p>
              <h2 id="company-team-title">Clear responsibilities. Shared delivery quality.</h2>
            </div>
            <ButtonLink to={ROUTE_PATHS.team} variant="secondary">
              Meet the team <ArrowRight aria-hidden="true" size={16} />
            </ButtonLink>
          </Reveal>

          <div className="company-team__grid">
            {teamMembers.map((member, index) => (
              <Reveal delay={index * 0.025} key={member.name}>
                <article className="company-team-card">
                  <span>{member.name.split(' ').map((part) => part[0]).join('')}</span>
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-final-cta">
        <Container className="company-final-cta__inner">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2>Have a workflow, training challenge or digital product idea?</h2>
            <p>Tell us what needs to work better. We will focus the conversation on the problem, users and practical outcome.</p>
          </Reveal>
          <Reveal className="company-final-cta__actions" delay={0.04}>
            <ButtonLink size="large" to={ROUTE_PATHS.contact}>Contact Softzeno Tech</ButtonLink>
            <ButtonLink size="large" to={ROUTE_PATHS.demo} variant="secondary">Request a demonstration</ButtonLink>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
