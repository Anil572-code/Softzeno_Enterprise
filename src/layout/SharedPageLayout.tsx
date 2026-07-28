import type { PropsWithChildren } from 'react';

import { Container } from '@/components/layout';

export function SharedPageLayout({ children }: PropsWithChildren) {
  return (
    <main className="page-layout" id="main-content">
      <Container>{children}</Container>
    </main>
  );
}
