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
      viewTransition
    >
      <img alt="" className="brand__mark" src="/brand/saras-mark-transparent.png" />
      <span className="brand__copy">
        <strong>SARAS</strong>
        <span>Safety Comes First.</span>
      </span>
    </Link>
  );
}
