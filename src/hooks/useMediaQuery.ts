import { useCallback, useSyncExternalStore } from 'react';

function getMediaQueryMatch(query: string): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia(query).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return () => undefined;
      }

      const mediaQuery = window.matchMedia(query);
      const handleChange = () => onStoreChange();

      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => getMediaQueryMatch(query), [query]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
