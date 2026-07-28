import { useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { ThemeContext } from '@/context/theme/theme-context';
import {
  getDarkModeMediaQuery,
  readThemePreference,
  resolveTheme,
  writeThemePreference,
} from '@/context/theme/theme-storage';
import type { ResolvedTheme, ThemePreference } from '@/types/theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const [preference, setPreference] = useState<ThemePreference>(readThemePreference);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(preference));

  useEffect(() => {
    const mediaQuery = getDarkModeMediaQuery();

    const applyTheme = () => {
      const nextTheme = resolveTheme(preference);
      setResolvedTheme(nextTheme);
      document.documentElement.dataset['theme'] = nextTheme;
      writeThemePreference(preference);
    };

    applyTheme();

    if (preference !== 'system' || !mediaQuery) {
      return undefined;
    }

    mediaQuery.addEventListener('change', applyTheme);
    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [preference]);

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference }),
    [preference, resolvedTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
