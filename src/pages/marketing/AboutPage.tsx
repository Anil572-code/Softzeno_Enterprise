import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Layers3,
} from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { values } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

const companyCapabilities = [
  {
    icon: Layers3,
    title: 'Enterprise software',
    description: 'Focused digital systems designed around operational workflows, clarity and dependable use.',
  },
  {
    icon: GraduationCap,
    title: 'Interactive training systems',
    description: 'Structured learning experiences that connect practical scenarios, assessment and progress.',
  },
  {
    icon: BarChart3,
    title: 'Data & reporting',
    description: 'Useful visibility into completion, performance and the information teams need to act on.',
  },
  {
    icon: ClipboardCheck,
    title: 'Product & UX design',
    description: 'Clear interfaces and user journeys shaped around real tasks rather than unnecessary complexity.',
  },
] as const;

const deliveryPrinciples = [
  {
    number: '01',
    title: 'Understand the requirement',
    description: 'Clarify the client need, operating context and expected outcome before committing to the solution.',
  },
  {
    number: '02',
    title: 'Design the experience',
    description: 'Turn requirements into a coherent workflow, interface and system structure that people can understand.',
  },
  {
    number: '03',
    title: 'Build with discipline',
    description: 'Keep technical decisions, usability, documentation and delivery quality connected throughout implementation.',
  },
  {
    number: '04',
    title: 'Review and improve',
    description: 'Use feedback, testing and evidence to refine the product without losing clarity or purpose.',
  },
] as const;

export function AboutPage() {
  return (
    <main className="internal-page internal-page--editorial internal-page--about company-authority-page" id="main-content">
      <Seo
        description="Learn about Softzeno Tech, our mission, capabilities and the team approach behind practical enterprise software and workplace learning systems."
        path={ROUTE_PATHS.about}
        title="Company | Softzeno Tech"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Company', path: '/about' },
        ]}
      />

      <PageHero
        actions={
          <>
            <ButtonLink size="large" to={ROUTE_PATHS.demo}>
              Request a demonstration <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
            <ButtonLink size="large" to={ROUTE_PATHS.team} variant="secondary">
              Meet our team <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </>
        }
        description="Softzeno Tech designs practical digital systems for organisations that need clearer workflows, stronger learning experiences and useful performance visibility."
        eyebrow="SOFTZENO TECH · COMPANY"
        visual="about"
        title={
          <>
            Smarter Technology. <span className="text-gradient">Stronger Workplaces.</span>
          </>
        }
      />

      <SectionWrapper className="company-authority-foundation" spacing="spacious">
        <Container className="company-authority-foundation__grid">
          <Reveal className="company-authority-foundation__copy">
            <p className="eyebrow">Who we are</p>
            <h2>A focused software team building around real operational needs.</h2>
            <p>
              Softzeno Tech combines requirements planning, system analysis, technical implementation,
              experience design and delivery discipline in one connected team. Our work is shaped around
              practical outcomes: software should make a process easier to understand, easier to manage
              and more useful to the people responsible for it.
            </p>
            <p>
              Safety 360 is our flagship workplace learning solution and demonstrates this approach through
              structured training, progress visibility, certification and recognition in one focused experience.
            </p>
          </Reveal>

          <Reveal className="company-authority-mission" delay={0.05}>
            <span className="company-authority-mission__label">Our mission</span>
            <blockquote>
              Build practical, reliable technology that helps organisations work smarter, safer and more effectively.
            </blockquote>
            <div className="company-authority-mission__signature">
              <span />
              <strong>Smarter Technology. Stronger Workplaces.</strong>
            </div>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted company-authority-capabilities" spacing="spacious">
        <Container>
          <SectionHeading
            description="Our capabilities stay deliberately focused on the work required to design, build and present useful digital products."
            eyebrow="What we build"
            title="Practical capability across the full product experience."
          />

          <div className="company-authority-capability-grid">
            {companyCapabilities.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.035} key={title}>
                <article className="company-authority-capability">
                  <span className="company-authority-capability__icon">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="company-authority-delivery" spacing="spacious">
        <Container className="company-authority-delivery__grid">
          <Reveal className="company-authority-delivery__lead">
            <p className="eyebrow">How we work</p>
            <h2>Clear responsibilities from requirement to delivery.</h2>
            <p>
              Professional delivery depends on more than implementation. We keep client requirements,
              technical direction, interface quality, documentation and release readiness connected so
              decisions remain understandable throughout the project.
            </p>
            <ButtonLink to={ROUTE_PATHS.team} variant="secondary">
              See team responsibilities <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </Reveal>

          <div className="company-authority-delivery__list">
            {deliveryPrinciples.map((item, index) => (
              <Reveal delay={index * 0.03} key={item.number}>
                <article className="company-authority-delivery__item">
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted company-authority-values" spacing="spacious">
        <Container>
          <SectionHeading
            description="These principles guide how we make product and delivery decisions."
            eyebrow="Our values"
            title="A professional standard for the way we build."
          />

          <div className="company-authority-values__list">
            {values.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.03} key={title}>
                <article className="company-authority-value">
                  <span className="company-authority-value__index">0{index + 1}</span>
                  <span className="company-authority-value__icon">
                    <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="company-authority-team-bridge" spacing="spacious">
        <Container className="company-authority-team-bridge__grid">
          <Reveal>
            <p className="eyebrow">The people behind the work</p>
            <h2>One multidisciplinary team with clear ownership.</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Requirements, technical direction, experience design and delivery operations each have a clear
              owner while the final product remains a shared responsibility across the team.
            </p>
            <ButtonLink to={ROUTE_PATHS.team}>
              Meet our team <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </Reveal>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
