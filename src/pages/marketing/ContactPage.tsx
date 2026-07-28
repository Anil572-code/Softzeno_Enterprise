import { Clock3, Mail, MapPin } from 'lucide-react';

import { ContactForm } from '@/components/forms';
import { Container, SectionWrapper } from '@/components/layout';
import { PageHero } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { BreadcrumbSchema, Seo } from '@/seo';

export function ContactPage() {
  return (
    <main id="main-content">
      <Seo
        description="Contact SARAS about workplace safety training, demonstrations and platform enquiries."
        path={ROUTE_PATHS.contact}
        title="Contact SARAS"
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
      <SectionWrapper spacing="spacious">
        <Container className="contact-layout">
          <div className="contact-layout__details">
            <p className="eyebrow">Get in touch</p>
            <h2>Share what your organisation is trying to improve.</h2>
            <p>
              Use the contact form for general enquiries. For a product-focused conversation, the
              dedicated demonstration form will capture more useful preparation details.
            </p>
            <div className="contact-methods">
              <div>
                <span>
                  <Mail aria-hidden="true" size={21} />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:hello@saras-safety.example">hello@saras-safety.example</a>
                </div>
              </div>
              <div>
                <span>
                  <Clock3 aria-hidden="true" size={21} />
                </span>
                <div>
                  <strong>Response target</strong>
                  <p>Within two working days</p>
                </div>
              </div>
              <div>
                <span>
                  <MapPin aria-hidden="true" size={21} />
                </span>
                <div>
                  <strong>Location</strong>
                  <p>Project contact details to be confirmed</p>
                </div>
              </div>
            </div>
            <div className="contact-note">
              Replace placeholder email and location details with verified organisational contact
              information before publishing the website.
            </div>
          </div>
          <div className="form-card">
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
