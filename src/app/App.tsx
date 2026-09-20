import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppProviders } from '@/app/providers/AppProviders';
import { BackToTopButton } from '@/components/navigation/BackToTopButton';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { router } from '@/routes/router';

export function App() {
  return (
    <AppProviders>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
        <BackToTopButton />
      </Suspense>
    </AppProviders>
  );
}
