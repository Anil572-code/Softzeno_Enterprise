import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Brand } from '@/components/marketing';
import { ButtonLink, ThemeToggle } from '@/components/ui';
import { ROUTE_PATHS } from '@/constants/routes';
import { headerNavigation } from '@/data/navigation';
import { cn } from '@/utils/cn';

const DESKTOP_MEDIA_QUERY = '(min-width: 68.001rem)';
const SCROLLED_THRESHOLD = 12;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > SCROLLED_THRESHOLD);

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (openDropdown) {
          setOpenDropdown(null);
          return;
        }

        if (menuOpen) {
          setMenuOpen(false);
          window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        }
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, openDropdown]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const body = document.body;
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const firstFocusable = navigationRef.current?.querySelector<HTMLElement>('a, button');

    body.classList.add('mobile-navigation-open');
    firstFocusable?.focus();

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      body.classList.remove('mobile-navigation-open');
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, [menuOpen]);

  const closeNavigation = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={cn('site-header', scrolled && 'site-header--scrolled')}
      ref={headerRef}
    >
      <Container className="site-header__inner">
        <Brand compact />

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="site-header__menu-button"
          onClick={() => {
            setMenuOpen((current) => !current);
            setOpenDropdown(null);
          }}
          ref={menuButtonRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>

        <div
          className={cn('site-header__navigation', menuOpen && 'site-header__navigation--open')}
          id="primary-navigation"
          ref={navigationRef}
        >
          <nav aria-label="Primary navigation">
            <ul className="primary-navigation">
              {headerNavigation.map((item) => {
                if ('children' in item) {
                  const dropdownId = `header-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
                  const isOpen = openDropdown === item.label;
                  const isActive = item.children.some((child) => child.href === location.pathname);

                  return (
                    <li className="navigation-group" key={item.label}>
                      <button
                        aria-controls={dropdownId}
                        aria-expanded={isOpen}
                        className={cn(
                          'navigation-group__trigger',
                          isActive && 'is-active',
                          isOpen && 'is-open',
                        )}
                        onClick={() =>
                          setOpenDropdown((current) => (current === item.label ? null : item.label))
                        }
                        type="button"
                      >
                        <span>{item.label}</span>
                        <ChevronDown aria-hidden="true" size={14} />
                      </button>

                      {isOpen ? (
                        <div className="navigation-dropdown" id={dropdownId}>
                          {item.children.map((child) => (
                            <NavLink
                              className={({ isActive: childActive }: { isActive: boolean }) =>
                                cn('navigation-dropdown__link', childActive && 'is-active')
                              }
                              key={child.href}
                              onClick={closeNavigation}
                              to={child.href}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <NavLink
                      className={({ isActive }: { isActive: boolean }) =>
                        cn('navigation-link', isActive && 'is-active')
                      }
                      onClick={closeNavigation}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <ThemeToggle />
            <ButtonLink
              className="site-header__cta"
              onClick={closeNavigation}
              size="small"
              to={ROUTE_PATHS.demo}
            >
              Request demo
            </ButtonLink>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <button
          aria-label="Close navigation menu"
          className="site-header__backdrop"
          onClick={closeNavigation}
          type="button"
        />
      ) : null}
    </header>
  );
}
