import { NavLink } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';
import { primaryNavigation } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function PrimaryNavigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="primary-navigation">
        {primaryNavigation.map((item) => (
          <li key={item.href}>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                cn('navigation-link', isActive && 'is-active')
              }
              end={item.href === ROUTE_PATHS.home}
              to={item.href}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
