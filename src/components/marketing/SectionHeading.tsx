import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  align?: 'left' | 'centre';
  description?: string;
  eyebrow?: string;
  title: ReactNode;
}

export function SectionHeading({
  align = 'left',
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn('section-heading', align === 'centre' && 'section-heading--centre')}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
