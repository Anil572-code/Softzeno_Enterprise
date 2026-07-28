import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { cn } from '@/utils/cn';

type ContainerElement = 'div' | 'section';

type ContainerProps<TElement extends ContainerElement = 'div'> = {
  as?: TElement;
  size?: 'content' | 'wide';
} & Omit<ComponentPropsWithoutRef<TElement>, 'as'>;

export function Container<TElement extends ContainerElement = 'div'>({
  as,
  className,
  size = 'wide',
  ...props
}: ContainerProps<TElement>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <Component
      className={cn('app-container', size === 'content' && 'app-container--content', className)}
      {...props}
    />
  );
}
