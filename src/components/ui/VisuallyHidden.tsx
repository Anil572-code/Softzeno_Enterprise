import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

export function VisuallyHidden({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return <span className={cn('sr-only', className)} {...props} />;
}
