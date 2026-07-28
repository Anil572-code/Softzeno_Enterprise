import { MotionConfig } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@/context/theme/ThemeProvider';
import { OrganizationSchema } from '@/seo/OrganizationSchema';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <OrganizationSchema />
      <ThemeProvider>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </ThemeProvider>
    </HelmetProvider>
  );
}
