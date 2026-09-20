import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';
import { SITE_CONFIG } from '@/constants/site';
import { cn } from '@/utils/cn';

interface BrandProps {
  className?: string;
  compact?: boolean;
}

export function Brand({ className, compact = false }: BrandProps) {
  return (
    <Link
      aria-label={`${SITE_CONFIG.name} home`}
      className={cn('brand', compact && 'brand--compact', className)}
      to={ROUTE_PATHS.home}
    >
      <img alt="" className="brand__mark" src="/brand/softzeno-mark.png" />
      <span className="brand__copy">
        <strong>Softzeno Tech</strong>
        <span>{SITE_CONFIG.tagline}</span>
      </span>
    </Link>
  );
}
