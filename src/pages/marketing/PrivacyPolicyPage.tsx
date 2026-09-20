import { Container, SectionWrapper } from '@/components/layout';
import { PageHero } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

const sections = [
  {
    title: '1. Purpose of this notice',
    body: 'This privacy notice explains how Softzeno Tech approaches personal information collected through this website and related enquiry channels.',
  },
  {
    title: '2. Information the website may collect',
    body: 'When online enquiry services are enabled, demo and contact forms may collect names, work email addresses, organisation details, team size and information voluntarily provided in enquiry messages. Technical analytics may also be used where an approved analytics service is configured.',
  },
  {
    title: '3. How information may be used',
    body: 'Information collected through enabled enquiry channels is used to respond to enquiries, arrange demonstrations, understand organisational needs, improve the website and meet applicable legal obligations.',
  },
  {
    title: '4. Data sharing',
    body: 'Softzeno Tech does not sell personal information. Where required, information may be processed by approved service providers supporting website forms, email delivery, hosting or analytics, subject to appropriate contractual and security controls.',
  },
  {
    title: '5. Retention and security',
    body: 'Personal information is retained only for as long as necessary for the purpose for which it was collected, with appropriate technical and organisational safeguards applied to enabled data workflows.',
  },
  {
    title: '6. Your rights',
    body: 'Depending on applicable law, individuals may have rights to access, correct, delete or restrict the use of their personal information. Privacy enquiries can be directed to Softzeno Tech through the contact channel published on this website.',
  },
  {
    title: '7. Contact and current website status',
    body: 'At present, this website does not transmit or store form submissions through an external service. If online forms, analytics or additional third-party services are enabled, this notice will be updated to reflect the relevant processing and contact details.',
  },
] as const;

export function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <Seo
        description="Read the Softzeno Tech website privacy notice."
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
        description="A clear overview of how Softzeno Tech approaches personal information submitted through this website."
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
            <strong>Current website status:</strong> Online enquiry services are not connected to an external submission service
            at present. Form entries therefore do not
            transmit or store data through this website.
          </div>
          <article className="legal-content">
            <p className="legal-content__updated">Last updated: 20 September 2026</p>
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
