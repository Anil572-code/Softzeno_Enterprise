import { env } from '@/services/env';
import { StructuredData } from '@/seo/StructuredData';
import type { BreadcrumbItem } from '@/types/seo';
import { buildAbsoluteUrl } from '@/utils/urls';

interface BreadcrumbSchemaProps {
  items: readonly BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <StructuredData
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: buildAbsoluteUrl(item.path, env.siteUrl),
        })),
      }}
    />
  );
}
