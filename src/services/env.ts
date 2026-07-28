import { z } from 'zod';

const environmentSchema = z.object({
  appName: z.string().min(1),
  siteUrl: z.string().url(),
  apiBaseUrl: z.string().url().optional(),
});

function normalizeOptionalValue(value: string | undefined): string | undefined {
  const normalizedValue = value?.trim();
  return normalizedValue === '' ? undefined : normalizedValue;
}

function normalizeRequiredValue(value: string | undefined, fallback: string): string {
  return normalizeOptionalValue(value) ?? fallback;
}

export const env = environmentSchema.parse({
  appName: normalizeRequiredValue(import.meta.env.VITE_APP_NAME, 'SARAS'),
  siteUrl: normalizeRequiredValue(import.meta.env.VITE_SITE_URL, 'http://127.0.0.1:6066'),
  apiBaseUrl: normalizeOptionalValue(import.meta.env.VITE_API_BASE_URL),
});
