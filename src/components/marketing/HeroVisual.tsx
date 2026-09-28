import {
  BarChart3,
  BookOpenCheck,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Factory,
  GraduationCap,
  HelpCircle,
  Layers3,
  MailCheck,
  MessageSquareText,
  PackageCheck,
  RadioTower,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';

export type HeroVisualVariant =
  | 'about'
  | 'caseStudies'
  | 'contact'
  | 'demo'
  | 'faq'
  | 'features'
  | 'howItWorks'
  | 'industries'
  | 'privacy'
  | 'resources'
  | 'solutions'
  | 'team';

interface HeroVisualProps {
  variant: HeroVisualVariant;
}

function SolutionsVisual() {
  return (
    <div className="hero-art hero-art--solutions">
      <div className="hero-art__caption">One connected learning journey</div>
      <div className="solution-flow">
        <div className="solution-flow__node">
          <GraduationCap aria-hidden="true" size={24} />
          <strong>Learners</strong>
          <span>Complete focused training</span>
        </div>
        <span className="solution-flow__connector" />
        <div className="solution-flow__node solution-flow__node--primary">
          <ClipboardCheck aria-hidden="true" size={24} />
          <strong>Coordinators</strong>
          <span>Assign and manage learning</span>
        </div>
        <span className="solution-flow__connector" />
        <div className="solution-flow__node">
          <BarChart3 aria-hidden="true" size={24} />
          <strong>Managers</strong>
          <span>See progress and outcomes</span>
        </div>
      </div>
      <div className="hero-art__footer-row">
        <span>
          <CheckCircle2 aria-hidden="true" size={15} /> Engaging
        </span>
        <span>
          <CheckCircle2 aria-hidden="true" size={15} /> Coordinated
        </span>
        <span>
          <CheckCircle2 aria-hidden="true" size={15} /> Visible
        </span>
      </div>
    </div>
  );
}

function FeaturesVisual() {
  const items = [
    ['Interactive learning', GraduationCap],
    ['Assessments', BookOpenCheck],
    ['Hazard awareness', ShieldCheck],
    ['Certificates', FileCheck2],
    ['Progress tracking', BarChart3],
    ['Analytics', Layers3],
  ] as const;

  return (
    <div className="hero-art hero-art--features">
      <div className="hero-art__caption">Core platform capabilities</div>
      <div className="capability-grid">
        {items.map(([label, Icon], index) => (
          <div
            className={index === 0 ? 'capability-tile capability-tile--active' : 'capability-tile'}
            key={label}
          >
            <Icon aria-hidden="true" size={22} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="capability-summary">
        <strong>6</strong>
        <span>connected capability areas</span>
        <div className="capability-summary__line">
          <span />
        </div>
      </div>
    </div>
  );
}

function IndustriesVisual() {
  const industries = [
    ['Warehouse', Warehouse],
    ['Manufacturing', Factory],
    ['Logistics', Truck],
    ['Corporate', Building2],
  ] as const;

  return (
    <div className="hero-art hero-art--industries">
      <div className="hero-art__caption">Adapted to operational reality</div>
      <div className="industry-map">
        <div className="industry-map__hub">
          <ShieldCheck aria-hidden="true" size={28} />
          <strong>SOFTZENO</strong>
          <span>Safety learning</span>
        </div>
        {industries.map(([label, Icon], index) => (
          <div className={`industry-map__sector industry-map__sector--${index + 1}`} key={label}>
            <Icon aria-hidden="true" size={21} />
            <span>{label}</span>
          </div>
        ))}
        <span className="industry-map__ring industry-map__ring--one" />
        <span className="industry-map__ring industry-map__ring--two" />
      </div>
    </div>
  );
}

function HowItWorksVisual() {
  const steps = [
    ['01', 'Configure'],
    ['02', 'Assign'],
    ['03', 'Learn'],
    ['04', 'Improve'],
  ] as const;

  return (
    <div className="hero-art hero-art--process">
      <div className="hero-art__caption">A clear four-step workflow</div>
      <div className="process-flow">
        {steps.map(([number, label], index) => (
          <div className="process-flow__step" key={number}>
            <div
              className={
                index === 2
                  ? 'process-flow__marker process-flow__marker--active'
                  : 'process-flow__marker'
              }
            >
              {number}
            </div>
            <strong>{label}</strong>
            {index < steps.length - 1 ? <span className="process-flow__line" /> : null}
          </div>
        ))}
      </div>
      <div className="process-flow__status">
        <CheckCircle2 aria-hidden="true" size={18} />
        <div>
          <strong>Training journey active</strong>
          <span>Progress visible at every stage</span>
        </div>
      </div>
    </div>
  );
}

function ResourcesVisual() {
  return (
    <div className="hero-art hero-art--resources">
      <div className="hero-art__caption">Practical guidance library</div>
      <div className="resource-stack">
        <article className="resource-sheet resource-sheet--back">
          <span>Checklist</span>
          <strong>Preparing for digital safety training</strong>
        </article>
        <article className="resource-sheet resource-sheet--middle">
          <span>Guide</span>
          <strong>How to improve learner engagement</strong>
        </article>
        <article className="resource-sheet resource-sheet--front">
          <div className="resource-sheet__icon">
            <FileText aria-hidden="true" size={22} />
          </div>
          <span>Featured resource</span>
          <strong>Five questions for a stronger safety learning strategy</strong>
          <div className="resource-sheet__meta">
            <BookOpenCheck aria-hidden="true" size={15} /> 6 min read
          </div>
        </article>
      </div>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="hero-art hero-art--contact">
      <div className="hero-art__caption">A direct line to the Softzeno Tech team</div>
      <div className="contact-preview">
        <div className="contact-preview__topbar">
          <MailCheck aria-hidden="true" size={21} />
          <div>
            <strong>Enquiry received</strong>
            <span>Response preparation</span>
          </div>
          <span className="contact-preview__status">Open</span>
        </div>
        <div className="contact-preview__message">
          <MessageSquareText aria-hidden="true" size={22} />
          <div>
            <span>Organisation need</span>
            <strong>Improve safety training engagement</strong>
          </div>
        </div>
        <div className="contact-preview__timeline">
          <span className="is-complete">1</span>
          <i />
          <span className="is-active">2</span>
          <i />
          <span>3</span>
        </div>
        <div className="contact-preview__labels">
          <span>Submitted</span>
          <span>Review</span>
          <span>Response</span>
        </div>
      </div>
    </div>
  );
}

function DemoVisual() {
  return (
    <div className="hero-art hero-art--demo">
      <div className="hero-art__caption">A demonstration shaped around your needs</div>
      <div className="demo-preview">
        <div className="demo-preview__calendar">
          <CalendarCheck2 aria-hidden="true" size={24} />
          <div>
            <span>Product demonstration</span>
            <strong>45 focused minutes</strong>
          </div>
        </div>
        <div className="demo-preview__agenda">
          <div>
            <CheckCircle2 aria-hidden="true" size={17} />
            <span>Your training priorities</span>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={17} />
            <span>Relevant platform workflows</span>
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={17} />
            <span>Questions and next steps</span>
          </div>
        </div>
        <div className="demo-preview__footer">
          <Users aria-hidden="true" size={18} /> Tailored to your organisation
        </div>
      </div>
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="hero-art hero-art--about">
      <div className="hero-art__caption">Mission, vision and values</div>
      <div className="values-orbit">
        <div className="values-orbit__centre">
          <ShieldCheck aria-hidden="true" size={29} />
          <strong>Safety first</strong>
        </div>
        <span className="values-orbit__item values-orbit__item--one">Innovation</span>
        <span className="values-orbit__item values-orbit__item--two">Integrity</span>
        <span className="values-orbit__item values-orbit__item--three">Learning</span>
        <span className="values-orbit__item values-orbit__item--four">Excellence</span>
        <span className="values-orbit__track values-orbit__track--one" />
        <span className="values-orbit__track values-orbit__track--two" />
      </div>
    </div>
  );
}

function CaseStudiesVisual() {
  return (
    <div className="hero-art hero-art--case-studies">
      <div className="hero-art__caption">Illustrative outcome view</div>
      <div className="case-preview">
        <div className="case-preview__metric">
          <span>Completion</span>
          <strong>92%</strong>
          <i>
            <span />
          </i>
        </div>
        <div className="case-preview__metric">
          <span>Engagement</span>
          <strong>+34%</strong>
          <i>
            <span />
          </i>
        </div>
        <div className="case-preview__chart">
          {[38, 52, 61, 74, 83, 92].map((height) => (
            <span key={height} style={{ '--bar-height': `${height}%` } as CSSProperties} />
          ))}
        </div>
        <div className="case-preview__footer">
          <PackageCheck aria-hidden="true" size={18} /> Concept study dashboard
        </div>
      </div>
    </div>
  );
}

function TeamVisual() {
  const functions = [
    ['Safety', ShieldCheck],
    ['Engineering', RadioTower],
    ['Experience', Layers3],
    ['Learning', GraduationCap],
  ] as const;

  return (
    <div className="hero-art hero-art--team">
      <div className="hero-art__caption">Multidisciplinary product delivery</div>
      <div className="team-network">
        <div className="team-network__centre">
          <Users aria-hidden="true" size={28} />
          <strong>One team</strong>
        </div>
        {functions.map(([label, Icon], index) => (
          <div className={`team-network__node team-network__node--${index + 1}`} key={label}>
            <Icon aria-hidden="true" size={20} />
            <span>{label}</span>
          </div>
        ))}
        <span className="team-network__connector team-network__connector--one" />
        <span className="team-network__connector team-network__connector--two" />
        <span className="team-network__connector team-network__connector--three" />
        <span className="team-network__connector team-network__connector--four" />
      </div>
    </div>
  );
}

function FaqVisual() {
  return (
    <div className="hero-art hero-art--faq">
      <div className="hero-art__caption">Clear answers, quickly</div>
      <div className="faq-preview">
        <div className="faq-preview__lead">
          <HelpCircle aria-hidden="true" size={25} />
          <div>
            <span>Most asked</span>
            <strong>How does Softzeno Tech support different workplaces?</strong>
          </div>
        </div>
        <div className="faq-preview__row">
          <span>Can training be customised?</span>
          <strong>+</strong>
        </div>
        <div className="faq-preview__row">
          <span>Does Softzeno Tech track completion?</span>
          <strong>+</strong>
        </div>
        <div className="faq-preview__row">
          <span>How do demonstrations work?</span>
          <strong>+</strong>
        </div>
      </div>
    </div>
  );
}

function PrivacyVisual() {
  return (
    <div className="hero-art hero-art--privacy">
      <div className="hero-art__caption">Responsible information handling</div>
      <div className="privacy-preview">
        <div className="privacy-preview__shield">
          <ShieldCheck aria-hidden="true" size={42} />
        </div>
        <div className="privacy-preview__content">
          <span>Privacy framework</span>
          <strong>Clear purpose. Limited collection. Responsible use.</strong>
          <div>
            <CheckCircle2 aria-hidden="true" size={16} /> Transparent
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={16} /> Secure by design
          </div>
          <div>
            <CheckCircle2 aria-hidden="true" size={16} /> Review required
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroVisual({ variant }: HeroVisualProps) {
  const visuals = {
    about: <AboutVisual />,
    caseStudies: <CaseStudiesVisual />,
    contact: <ContactVisual />,
    demo: <DemoVisual />,
    faq: <FaqVisual />,
    features: <FeaturesVisual />,
    howItWorks: <HowItWorksVisual />,
    industries: <IndustriesVisual />,
    privacy: <PrivacyVisual />,
    resources: <ResourcesVisual />,
    solutions: <SolutionsVisual />,
    team: <TeamVisual />,
  } satisfies Record<HeroVisualVariant, ReactNode>;

  return visuals[variant];
}
