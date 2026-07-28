import { SITE_CONFIG } from '@/constants/site';
import { env } from '@/services/env';
import { StructuredData } from '@/seo/StructuredData';
import { buildAbsoluteUrl } from '@/utils/urls';

export function OrganizationSchema() {
  return (
    <StructuredData
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.legalName,
        slogan: SITE_CONFIG.tagline,
        url: env.siteUrl,
        logo: buildAbsoluteUrl('/brand/saras-icon-512.png', env.siteUrl),
      }}
    />
  );
}
