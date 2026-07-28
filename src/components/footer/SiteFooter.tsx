import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Brand } from '@/components/marketing';
import { ROUTE_PATHS } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/site';

const footerGroups = [
  {
    title: 'Platform',
    links: [
      { label: 'Solutions', href: ROUTE_PATHS.solutions },
      { label: 'Features', href: ROUTE_PATHS.features },
      { label: 'Industries', href: ROUTE_PATHS.industries },
      { label: 'How it works', href: ROUTE_PATHS.howItWorks },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: ROUTE_PATHS.about },
      { label: 'Team', href: ROUTE_PATHS.team },
      { label: 'Case studies', href: ROUTE_PATHS.caseStudies },
      { label: 'Contact', href: ROUTE_PATHS.contact },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Resources', href: ROUTE_PATHS.resources },
      { label: 'FAQ', href: ROUTE_PATHS.faq },
      { label: 'Request a demo', href: ROUTE_PATHS.demo },
      { label: 'Privacy policy', href: ROUTE_PATHS.privacy },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand-column">
            <Brand className="site-footer__brand" />
            <p>
              Interactive workplace safety learning designed to help organisations build safer,
              better-prepared teams.
            </p>
            <a className="site-footer__email" href="mailto:hello@saras-safety.example">
              <Mail aria-hidden="true" size={18} /> hello@saras-safety.example
            </a>
          </div>
          {footerGroups.map((group) => (
            <div className="site-footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="site-footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <a href="#top">
            Back to top <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
