import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { ErrorLayout } from '@/layout';
import { Seo } from '@/seo/Seo';

export function RouteErrorBoundary() {
  const error = useRouteError();
  const isResponseError = isRouteErrorResponse(error);
  const statusCode = isResponseError ? error.status : 500;
  const title = statusCode === 404 ? 'Page not found' : 'Something went wrong';
  const description = isResponseError
    ? error.statusText || 'The route could not be loaded.'
    : 'An unexpected application error occurred.';

  return (
    <>
      <Seo description={description} noIndex path="/error" title={title} />
      <ErrorLayout description={description} statusCode={statusCode} title={title} />
    </>
  );
}
