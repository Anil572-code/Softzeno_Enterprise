import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: Record<string, unknown> | readonly Record<string, unknown>[];
}

function serializeStructuredData(data: StructuredDataProps['data']): string {
  return JSON.stringify(data).replaceAll('<', '\\u003c');
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{serializeStructuredData(data)}</script>
    </Helmet>
  );
}
