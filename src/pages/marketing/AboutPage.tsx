import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, FeatureCard, PageHero, Reveal, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { values } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function AboutPage() {
  return (
    <main id="main-content">
      <Seo
        description="Learn about SARAS, our mission, vision and commitment to better workplace safety learning."
        path={ROUTE_PATHS.about}
        title="About SARAS"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <PageHero
        description="SARAS exists to help organisations replace passive safety training with engaging learning experiences that support better workplace decisions."
        eyebrow="About SARAS"
        visual="about"
        title={
          <>
            Safety education should be{' '}
            <span className="text-gradient">practical, engaging and built for people.</span>
          </>
        }
      />

      <SectionWrapper spacing="spacious">
        <Container className="split-layout split-layout--balanced">
          <Reveal className="split-layout__content">
            <p className="eyebrow">Our mission</p>
            <h2>Empower organisations through engaging digital workplace safety education.</h2>
            <p>
              We believe safer workplaces begin with learning that respects people’s time, reflects
              real risks and creates confidence to act. SARAS combines thoughtful interaction, clear
              assessment and useful progress information in one modern platform.
            </p>
            <ul className="benefit-list benefit-list--compact">
              <li>
                <CheckCircle2 aria-hidden="true" size={19} />
                Designed around real workplace decisions
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={19} />
                Accessible to different roles and learning needs
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" size={19} />
                Scalable for growing organisations
              </li>
            </ul>
          </Reveal>
          <Reveal className="vision-card" delay={0.08}>
            <span>Our vision</span>
            <h2>Become a leading provider of innovative workplace safety learning solutions.</h2>
            <p>
              Our long-term direction includes richer simulations, deeper analytics and future VR
              experiences—all grounded in the same safety-first philosophy.
            </p>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted" spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="The principles that guide how we design the platform and work with organisations."
            eyebrow="Our values"
            title="A safety-first product built on clear values."
          />
          <div className="feature-grid feature-grid--five">
            {values.map((value, index) => (
              <Reveal delay={index * 0.04} key={value.title}>
                <FeatureCard {...value} />
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper spacing="spacious">
        <Container className="story-panel">
          <div>
            <p className="eyebrow">Enterprise software, human outcomes</p>
            <h2>
              Professional technology should make safety learning simpler—not more complicated.
            </h2>
          </div>
          <div>
            <p>
              SARAS is designed as a maintainable, cloud-ready enterprise product with a clear
              experience for learners, coordinators and administrators. The focus is not technology
              for its own sake; it is technology that helps people understand risk and respond well.
            </p>
            <ButtonLink to={ROUTE_PATHS.howItWorks} variant="secondary">
              See the platform journey <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
