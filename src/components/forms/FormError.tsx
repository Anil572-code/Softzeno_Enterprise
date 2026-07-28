import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

interface FormErrorProps extends ComponentPropsWithoutRef<'p'> {
  message?: string;
}

export function FormError({ className, id, message, ...props }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <p className={cn('form-error', className)} id={id} role="alert" {...props}>
      {message}
    </p>
  );
}
