import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Brand } from '@/components/marketing';
import { ButtonLink, ThemeToggle } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { primaryNavigation } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Brand compact />
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="site-header__menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
        <div
          className={cn('site-header__navigation', menuOpen && 'site-header__navigation--open')}
          id="primary-navigation"
        >
          <nav aria-label="Primary navigation">
            <ul className="primary-navigation">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }: { isActive: boolean }) =>
                      cn('navigation-link', isActive && 'is-active')
                    }
                    end={item.href === ROUTE_PATHS.home}
                    onClick={() => setMenuOpen(false)}
                    to={item.href}
                    viewTransition
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__actions">
            <ThemeToggle />
            <ButtonLink className="site-header__cta" size="small" to={ROUTE_PATHS.demo}>
              Request demo
            </ButtonLink>
          </div>
        </div>
      </Container>
      {menuOpen ? (
        <button
          aria-label="Close navigation menu"
          className="site-header__backdrop"
          onClick={() => setMenuOpen(false)}
          type="button"
        />
      ) : null}
    </header>
  );
}
