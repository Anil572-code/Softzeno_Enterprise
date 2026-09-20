import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { values } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function AboutPage() {
  return (
    <main className="internal-page internal-page--editorial internal-page--about" id="main-content">
      <Seo
        description="Learn about Softzeno Tech, our mission and our approach to practical enterprise technology for safer workplaces."
        path={ROUTE_PATHS.about}
        title="About Softzeno Tech"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      <PageHero
        description="Softzeno Tech builds practical enterprise technology that helps organisations replace passive safety training with engaging learning experiences and better operational insight."
        eyebrow="Softzeno Tech"
        visual="about"
        title={
          <>
            Safety education should be{' '}
            <span className="text-gradient">practical, engaging and built for people.</span>
          </>
        }
      />

      <SectionWrapper className="internal-editorial-section" spacing="spacious">
        <Container className="internal-editorial-split">
          <Reveal className="internal-editorial-copy">
            <p className="eyebrow">Our mission</p>
            <h2>Build thoughtful technology that helps organisations learn and improve with confidence.</h2>
            <p>
              Better operations begin with technology that respects people’s time, reflects real
              risks and creates confidence to act. Softzeno combines thoughtful interaction, clear
              assessment and useful progress information in one focused experience.
            </p>
            <ul className="internal-check-list">
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Designed around real workplace decisions
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Accessible to different roles and learning needs
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={18} />
                Built to scale without adding unnecessary complexity
              </li>
            </ul>
          </Reveal>

          <Reveal className="internal-editorial-quote" delay={0.06}>
            <span>Our vision</span>
            <blockquote>
              Become a trusted technology partner for safer, smarter operational businesses.
            </blockquote>
            <p>
              Our direction includes richer simulations, deeper analytics and future immersive
              experiences, grounded in practical outcomes and responsible technology.
            </p>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted internal-values-section" spacing="spacious">
        <Container>
          <SectionHeading
            description="Five principles guide how we design the product and work with organisations."
            eyebrow="Our values"
            title="A clear standard for the way we build."
          />

          <div className="internal-values-list">
            {values.map(({ description, icon: Icon, title }, index) => (
              <Reveal delay={index * 0.035} key={title}>
                <article className="internal-value-item">
                  <span className="internal-value-item__index">0{index + 1}</span>
                  <span className="internal-value-item__icon">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
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

      <SectionWrapper className="internal-story-section" spacing="spacious">
        <Container className="internal-story-grid">
          <div>
            <p className="eyebrow">Enterprise software, human outcomes</p>
            <h2>Professional technology should make safety learning simpler, not more complicated.</h2>
          </div>
          <div>
            <p>
              The Softzeno Interactive Safety Platform is designed as a maintainable, cloud-ready
              product with a clear experience for learners, coordinators and administrators. The
              goal is not technology for its own sake; it is technology that helps people understand
              risk and respond well.
            </p>
            <div className="internal-action-row">
              <ButtonLink to={ROUTE_PATHS.team}>
                Meet our team <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
              <ButtonLink to={ROUTE_PATHS.howItWorks} variant="secondary">
                See how it works <ArrowRight aria-hidden="true" size={18} />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
