import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn('button', `button--${variant}`, `button--${size}`, className);
}

export function Button({
  children,
  className,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClassName(variant, size, className)} type={type} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClassName(variant, size, className)} viewTransition {...props}>
      {children}
    </Link>
  );
}
