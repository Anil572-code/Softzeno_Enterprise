import { Container, SectionWrapper } from '@/components/layout';
import { PageHero } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const sections = [
  {
    title: '1. Purpose of this notice',
    body: 'This privacy notice explains the intended approach to personal information collected through the SARAS promotional website. It must be reviewed and approved by the organisation before production publication.',
  },
  {
    title: '2. Information the website may collect',
    body: 'Demo and contact forms may collect names, work email addresses, organisation details, team size and information voluntarily provided in enquiry messages. Technical analytics may also be introduced if an approved analytics service is configured.',
  },
  {
    title: '3. How information may be used',
    body: 'Information should only be used to respond to enquiries, arrange demonstrations, understand organisational needs, improve the website and meet applicable legal obligations.',
  },
  {
    title: '4. Data sharing',
    body: 'Personal information should not be sold. It may be processed by approved service providers required to operate website forms, email delivery, hosting or analytics, subject to appropriate contractual and security controls.',
  },
  {
    title: '5. Retention and security',
    body: 'Information should be retained only for as long as necessary for the purpose for which it was collected. Appropriate technical and organisational safeguards should be applied to any production data workflow.',
  },
  {
    title: '6. Your rights',
    body: 'Depending on applicable law, individuals may have rights to access, correct, delete or restrict the use of their personal information. Verified contact details for privacy requests must be added before launch.',
  },
  {
    title: '7. Contact and approval status',
    body: 'This is a professionally structured draft for the university project and not final legal advice. The responsible organisation must confirm its legal identity, jurisdiction, contact address, retention periods and third-party services before publication.',
  },
] as const;

export function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <Seo
        description="Read the draft SARAS promotional website privacy policy."
        path={ROUTE_PATHS.privacy}
        title="Privacy Policy"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />
      <PageHero
        description="A clear draft framework describing how the promotional website should handle enquiry information."
        eyebrow="Privacy policy"
        visual="privacy"
        title={
          <>
            Respecting personal information with a{' '}
            <span className="text-gradient">clear, responsible approach.</span>
          </>
        }
      />
      <SectionWrapper spacing="spacious">
        <Container size="content">
          <div className="legal-notice">
            <strong>Draft status:</strong> This policy requires legal and organisational review
            before production use. Form submissions currently operate in preview mode and do not
            transmit data.
          </div>
          <article className="legal-content">
            <p className="legal-content__updated">Last updated: 28 July 2026</p>
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>
        </Container>
      </SectionWrapper>
    </main>
  );
}
