import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

interface SectionWrapperProps extends ComponentPropsWithoutRef<'section'> {
  spacing?: 'compact' | 'default' | 'spacious';
}

export function SectionWrapper({ className, spacing = 'default', ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn('section-wrapper', `section-wrapper--${spacing}`, className)}
      {...props}
    />
  );
}
