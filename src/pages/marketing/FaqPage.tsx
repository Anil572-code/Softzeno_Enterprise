import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

import { Container, SectionWrapper } from '@/components/layout';
import { CtaBanner, PageHero, SectionHeading } from '@/components/marketing';
import { ButtonLink } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { faqs } from '@/data/siteContent';
import { BreadcrumbSchema, Seo } from '@/seo';

export function FaqPage() {
  return (
    <main id="main-content">
      <Seo
        description="Frequently asked questions about the Softzeno Interactive Safety Platform."
        path={ROUTE_PATHS.faq}
        title="Frequently Asked Questions"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ]}
      />
      <PageHero
        description="Clear answers about the platform, its intended audience, its core capabilities and the demonstration process."
        eyebrow="Frequently asked questions"
        visual="faq"
        title={
          <>
            Everything you need to know before{' '}
            <span className="text-gradient">starting a conversation.</span>
          </>
        }
      />
      <SectionWrapper spacing="spacious">
        <Container size="content">
          <SectionHeading
            description="Select a question to reveal the answer."
            eyebrow="Platform questions"
            title="Common questions about Softzeno Tech."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" size={21} />
                </summary>
                <div className="faq-item__answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="faq-contact-card">
            <MessageCircleQuestion aria-hidden="true" size={30} />
            <div>
              <h2>Still have a question?</h2>
              <p>
                Send the team a message or request a demonstration focused on your organisation.
              </p>
            </div>
            <ButtonLink to={ROUTE_PATHS.contact} variant="secondary">
              Contact Softzeno Tech
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>
      <CtaBanner />
    </main>
  );
}
