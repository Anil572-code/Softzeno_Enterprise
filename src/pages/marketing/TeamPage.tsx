import aakritiPhoto from '@/assets/team/aakriti-bhusal.png';
import prajwalPhoto from '@/assets/team/prajwal-sharma.png';
import sarinaPhoto from '@/assets/team/sarina-basnet.png';
import subasnaPhoto from '@/assets/team/subasna-chhetri.png';
import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, Reveal } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const teamMembers = [
  {
    key: 'aakriti',
    name: 'Aakriti Bhusal',
    role: 'Project Manager & Requirements Lead',
    description: 'Coordinates project scope, requirements and delivery priorities across the team.',
    photo: aakritiPhoto,
  },
  {
    key: 'prajwal',
    name: 'Prajwal Sharma',
    role: 'System Analysis & Technical Lead',
    description:
      'Leads system analysis, technical direction and implementation decisions for the project.',
    photo: prajwalPhoto,
  },
  {
    key: 'sarina',
    name: 'Sarina Basnet',
    role: 'UX/UI & Marketing Lead',
    description:
      'Leads the user experience, interface direction and product communication for the project.',
    photo: sarinaPhoto,
  },
  {
    key: 'subasna',
    name: 'Subasna Chhetri',
    role: 'Documentation, Planning & Presentation Lead',
    description: 'Leads project documentation, planning discipline and presentation readiness.',
    photo: subasnaPhoto,
  },
] as const;

const teamPrinciples = [
  {
    number: '01',
    title: 'Requirements clarity',
    description: 'Project scope, operational context and delivery goals stay aligned from the start.',
  },
  {
    number: '02',
    title: 'Technical direction',
    description: 'System design and implementation decisions stay connected to product usability.',
  },
  {
    number: '03',
    title: 'Experience quality',
    description: 'Interface decisions and communication stay consistent with the learning experience.',
  },
  {
    number: '04',
    title: 'Delivery readiness',
    description: 'Documentation, planning and presentation support dependable rollout and review.',
  },
] as const;

export function TeamPage() {
  return (
    <main className="internal-page internal-page--editorial internal-page--team-premium" id="main-content">
      <Seo
        description="Meet the project team behind Softzeno Tech and the workplace safety learning experience."
        path={ROUTE_PATHS.team}
        title="Our Team | Softzeno Tech"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Team', path: '/team' },
        ]}
      />

      <SectionWrapper className="team-premium-profiles" spacing="compact">
        <Container>
          <Reveal>
            <header className="team-premium-profiles__header">
              <h1>Meet our Team</h1>
            </header>
          </Reveal>

          <div className="team-premium-grid">
            {teamMembers.map((member, index) => (
              <Reveal delay={index * 0.035} key={member.name}>
                <article className={`team-premium-card team-premium-card--${member.key}`}>
                  <div className="team-premium-card__media">
                    <img
                      alt={`${member.name}, ${member.role}`}
                      decoding="async"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      src={member.photo}
                    />
                  </div>

                  <div className="team-premium-card__content">
                    <h2>{member.name}</h2>
                    <p className="team-premium-card__role">{member.role}</p>
                    <p className="team-premium-card__description">{member.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.06}>
            <p className="team-premium-profiles__description">
              The people behind Softzeno Tech â€” a focused multidisciplinary team delivering planning,
              analysis, experience design and presentation readiness.
            </p>
          </Reveal>
        </Container>
      </SectionWrapper>

      <SectionWrapper className="section-muted team-premium-method" spacing="default">
        <Container className="team-premium-method__inner">
          <Reveal>
            <div className="team-premium-method__lead">
              <p className="eyebrow">How we work</p>
              <h2>One team. Clear responsibilities. Shared delivery quality.</h2>
              <p>
                Each role has a clear area of ownership, but decisions stay connected across the
                full delivery journey â€” from requirements and technical direction through to
                experience design, documentation and presentation.
              </p>
            </div>
          </Reveal>

          <div className="team-premium-method__list">
            {teamPrinciples.map((principle, index) => (
              <Reveal delay={index * 0.03} key={principle.title}>
                <article className="team-premium-method__item">
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

      <CtaBanner />
    </main>
  );
}

