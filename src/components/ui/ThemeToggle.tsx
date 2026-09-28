import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@/context/theme/useTheme';
import type { ThemePreference } from '@/types/theme';

const options: readonly {
  value: ThemePreference;
  label: string;
  icon: typeof Sun;
}[] = [
  { value: 'system', label: 'System', icon: Monitor },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
];

export function ThemeToggle() {
  const { preference, resolvedTheme, setPreference } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ActiveIcon = resolvedTheme === 'dark' ? Moon : Sun;

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const chooseTheme = (value: ThemePreference) => {
    setPreference(value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="theme-control" ref={rootRef}>
      <button
        aria-controls="theme-preference-menu"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Appearance: ${preference}`}
        className="icon-button theme-control__trigger"
        onClick={() => setOpen((current) => !current)}
        ref={buttonRef}
        type="button"
      >
        <ActiveIcon aria-hidden="true" size={19} />
      </button>

      {open ? (
        <div className="theme-control__menu" id="theme-preference-menu" role="menu">
          <p>Appearance</p>
          {options.map(({ icon: Icon, label, value }) => (
            <button
              aria-checked={preference === value}
              className={preference === value ? 'is-selected' : undefined}
              key={value}
              onClick={() => chooseTheme(value)}
              role="menuitemradio"
              type="button"
            >
              <Icon aria-hidden="true" size={17} />
              <span>{label}</span>
              {preference === value ? <Check aria-hidden="true" size={16} /> : <span aria-hidden="true" />}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
