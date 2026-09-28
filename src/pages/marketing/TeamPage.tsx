import { ArrowRight } from 'lucide-react';

import aakritiPhoto from '@/assets/team/aakriti-bhusal.png';
import prajwalPhoto from '@/assets/team/prajwal-sharma.png';
import sarinaPhoto from '@/assets/team/sarina-basnet.png';
import subasnaPhoto from '@/assets/team/subasna-chhetri.png';
import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, Reveal } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const teamMembers = [
  {
    key: 'aakriti',
    name: 'Aakriti Bhusal',
    role: 'Project Manager & Requirements Lead',
    description: 'Coordinates product scope, stakeholder requirements and delivery priorities across the team.',
    focus: ['Requirements planning', 'Stakeholder coordination'],
    photo: aakritiPhoto,
  },
  {
    key: 'prajwal',
    name: 'Prajwal Sharma',
    role: 'System Analysis & Technical Lead',
    description: 'Leads system analysis, technical direction and implementation decisions across the platform.',
    focus: ['System analysis', 'Technical implementation'],
    photo: prajwalPhoto,
  },
  {
    key: 'sarina',
    name: 'Sarina Basnet',
    role: 'UX/UI & Marketing Lead',
    description: 'Leads the user experience, interface direction and product communication across the platform.',
    focus: ['UX/UI direction', 'Product communication'],
    photo: sarinaPhoto,
  },
  {
    key: 'subasna',
    name: 'Subasna Chhetri',
    role: 'Documentation & Delivery Operations Lead',
    description: 'Leads product documentation, delivery planning and release readiness.',
    focus: ['Documentation', 'Delivery readiness'],
    photo: subasnaPhoto,
  },
] as const;

const teamPrinciples = [
  {
    number: '01',
    title: 'Requirements clarity',
    description: 'Product scope, operational context and delivery goals stay aligned from the start.',
  },
  {
    number: '02',
    title: 'Technical direction',
    description: 'System design and implementation decisions stay connected to usability and delivery needs.',
  },
  {
    number: '03',
    title: 'Experience quality',
    description: 'Interface decisions and product communication remain consistent with the intended user journey.',
  },
  {
    number: '04',
    title: 'Delivery readiness',
    description: 'Documentation, planning and release coordination support dependable project handover.',
  },
] as const;

export function TeamPage() {
  return (
    <main className="internal-page internal-page--team team-authority-page" id="main-content">
      <Seo
        description="Meet the Softzeno Tech project team and the responsibilities behind requirements, technical delivery, user experience and release readiness."
        path={ROUTE_PATHS.team}
        title="Our Team | Softzeno Tech"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/team' },
        ]}
      />

      <PageHero
        actions={
          <>
            <ButtonLink size="large" to={ROUTE_PATHS.about} variant="secondary">
              About Softzeno Tech <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
            <ButtonLink size="large" to={ROUTE_PATHS.demo}>
              Request a demonstration <ArrowRight aria-hidden="true" size={19} />
            </ButtonLink>
          </>
        }
        description="A focused multidisciplinary team connecting requirements, technical direction, user experience and delivery readiness around one shared product outcome."
        eyebrow="SOFTZENO TECH · OUR TEAM"
        visual="team"
        title={
          <>
            Clear ownership. <span className="text-gradient">Shared delivery quality.</span>
          </>
        }
      />

      <SectionWrapper className="team-authority-profiles" spacing="spacious">
        <Container>
          <Reveal>
            <header className="team-authority-profiles__header">
              <p className="eyebrow">Meet the team</p>
              <h2>The people behind Softzeno Tech.</h2>
              <p>
                Four complementary responsibilities shape the project from early requirements through
                technical implementation, interface quality, documentation and final delivery.
              </p>
            </header>
          </Reveal>

          <div className="team-authority-grid">
            {teamMembers.map((member, index) => (
              <Reveal delay={index * 0.035} key={member.name}>
                <article className={`team-authority-card team-authority-card--${member.key}`}>
                  <div className="team-authority-card__media">
                    <img
                      alt={`${member.name}, ${member.role}`}
                      decoding="async"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      src={member.photo}
                    />
                  </div>

                  <div className="team-authority-card__content">
                    <div>
                      <h3>{member.name}</h3>
                      <p className="team-authority-card__role">{member.role}</p>
                    </div>
                    <p className="team-authority-card__description">{member.description}</p>
                    <div className="team-authority-card__focus">
                      {member.focus.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted team-authority-method" spacing="spacious">
        <Container className="team-authority-method__grid">
          <Reveal className="team-authority-method__lead">
            <p className="eyebrow">How responsibilities connect</p>
            <h2>One team. Clear responsibilities. Shared standards.</h2>
            <p>
              Ownership is explicit, but decisions are not isolated. Requirements inform technical choices,
              technical choices support the interface, and documentation keeps delivery understandable.
            </p>
          </Reveal>

          <div className="team-authority-method__list">
            {teamPrinciples.map((principle, index) => (
              <Reveal delay={index * 0.03} key={principle.number}>
                <article className="team-authority-method__item">
                  <span>{principle.number}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="team-authority-standard" spacing="spacious">
        <Container className="team-authority-standard__grid">
          <Reveal>
            <p className="eyebrow">Team working standard</p>
            <h2>Professional collaboration without unnecessary complexity.</h2>
          </Reveal>
          <Reveal delay={0.04}>
            <p>
              The project is organised around clear ownership, regular communication and evidence-led refinement.
              The goal is a finished product that reflects the client requirement while remaining coherent across
              technical implementation, user experience and supporting documentation.
            </p>
            <ButtonLink to={ROUTE_PATHS.about} variant="secondary">
              Read about our approach <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </Reveal>
        </Container>
      </SectionWrapper>

      <CtaBanner />
    </main>
  );
}
