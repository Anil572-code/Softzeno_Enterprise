import { Link } from 'react-router-dom';

import { Container } from '@/components/layout';
import { ROUTE_PATHS } from '@/constants/routes';

interface ErrorLayoutProps {
  description: string;
  statusCode: number;
  title: string;
}

export function ErrorLayout({ description, statusCode, title }: ErrorLayoutProps) {
  return (
    <main className="error-layout" id="main-content">
      <Container size="content">
        <p className="error-layout__status">{statusCode}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="text-link" to={ROUTE_PATHS.home}>
          Return to the home route
        </Link>
      </Container>
    </main>
  );
}
