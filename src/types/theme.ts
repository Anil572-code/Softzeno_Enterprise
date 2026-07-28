export type ThemePreference = 'dark' | 'light' | 'system';
export type ResolvedTheme = Exclude<ThemePreference, 'system'>;

export interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
}
