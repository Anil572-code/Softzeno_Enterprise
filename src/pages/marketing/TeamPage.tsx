import { Code2, GraduationCap, Palette, ShieldCheck } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, SectionHeading } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const teamFunctions = [
  {
    icon: ShieldCheck,
    title: 'Safety and learning',
    description:
      'Defines relevant learning outcomes, practical scenarios and a safety-first product direction.',
  },
  {
    icon: Code2,
    title: 'Software engineering',
    description:
      'Builds a secure, maintainable and scalable platform using modern enterprise practices.',
  },
  {
    icon: Palette,
    title: 'Experience design',
    description:
      'Creates accessible interfaces that help learners stay focused and administrators stay informed.',
  },
  {
    icon: GraduationCap,
    title: 'Content development',
    description:
      'Transforms workplace safety objectives into structured, engaging digital learning experiences.',
  },
] as const;

export function TeamPage() {
  return (
    <main id="main-content">
      <Seo
        description="Meet the multidisciplinary functions behind the SARAS Interactive Safety Platform."
        path={ROUTE_PATHS.team}
        title="SARAS Team"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Team', path: '/team' },
        ]}
      />
      <PageHero
        description="SARAS brings together software engineering, experience design, safety thinking and learning design around one shared product mission."
        eyebrow="Team"
        visual="team"
        title={
          <>
            A multidisciplinary approach to{' '}
            <span className="text-gradient">workplace safety learning.</span>
          </>
        }
      />
      <SectionWrapper spacing="spacious">
        <Container>
          <SectionHeading
            align="centre"
            description="The website does not publish fictional personal profiles. It presents the real capabilities required to deliver the product responsibly."
            eyebrow="Core functions"
            title="The expertise required behind a credible enterprise platform."
          />
          <div className="team-function-grid">
            {teamFunctions.map(({ description, icon: Icon, title }) => (
              <article className="team-function-card" key={title}>
                <Icon aria-hidden="true" size={29} />
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="notice-card notice-card--centre">
            <p>
              Named team profiles, professional biographies and photographs should be added only
              when accurate, approved information is available from the SARAS project team.
            </p>
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
