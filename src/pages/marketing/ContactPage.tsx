import { ArrowRight, Clock3, MessageSquareText } from 'lucide-react';

import { ContactForm } from '@/components/forms';
import { Container, SectionWrapper } from '@/components/layout';
import { PageHero } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

export function ContactPage() {
  return (
    <main className="internal-page internal-page--conversion internal-page--contact" id="main-content">
      <Seo
        description="Contact Softzeno Tech about workplace safety training, demonstrations and platform enquiries."
        path={ROUTE_PATHS.contact}
        title="Contact Softzeno Tech"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <PageHero
        description="Start a conversation about your workplace safety learning priorities, platform questions or demonstration requirements."
        eyebrow="Contact"
        visual="contact"
        title={
          <>
            Let’s talk about creating a{' '}
            <span className="text-gradient">stronger safety learning experience.</span>
          </>
        }
      />

      <SectionWrapper className="internal-contact-section" spacing="spacious">
        <Container className="internal-contact-layout">
          <div className="internal-contact-intro">
            <p className="eyebrow">Get in touch</p>
            <h2>Share what your organisation is trying to improve.</h2>
            <p>
              Use the enquiry form for general questions. If you already want to see the platform,
              the demonstration request captures the context needed for a more focused conversation.
            </p>

            <div className="internal-contact-methods">
              <div>
                <span>
                  <MessageSquareText aria-hidden="true" size={20} />
                </span>
                <div>
                  <strong>General enquiry</strong>
                  <p>Share your question securely through the form.</p>
                </div>
              </div>
              <div>
                <span>
                  <Clock3 aria-hidden="true" size={20} />
                </span>
                <div>
                  <strong>Response target</strong>
                  <p>Within two working days.</p>
                </div>
              </div>
            </div>

            <ButtonLink to={ROUTE_PATHS.demo} variant="secondary">
              Request a demonstration instead <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>

          <div className="form-card internal-contact-form">
            <div className="form-card__header">
              <p className="eyebrow">General enquiry</p>
              <h2>Send a message</h2>
              <p>Provide enough context for the team to direct your enquiry correctly.</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
