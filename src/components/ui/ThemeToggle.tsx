import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/context/theme/useTheme';

export function ThemeToggle() {
  const { resolvedTheme, setPreference } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Use light theme' : 'Use dark theme'}
      className="icon-button"
      onClick={() => setPreference(isDark ? 'light' : 'dark')}
      type="button"
    >
      {isDark ? <Sun aria-hidden="true" size={19} /> : <Moon aria-hidden="true" size={19} />}
    </button>
  );
}
