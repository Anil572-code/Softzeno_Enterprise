import { Helmet } from 'react-helmet-async';

import { SITE_CONFIG } from '@/constants/site';
import { env } from '@/services/env';
import type { SeoMetadata } from '@/types/seo';
import { buildAbsoluteUrl } from '@/utils/urls';

export function Seo({
  canonicalUrl,
  description,
  imageUrl,
  noIndex = false,
  path,
  title,
}: SeoMetadata) {
  const resolvedCanonicalUrl = canonicalUrl ?? buildAbsoluteUrl(path, env.siteUrl);
  const resolvedImageUrl = buildAbsoluteUrl(imageUrl ?? '/brand/saras-icon-512.png', env.siteUrl);
  const pageTitle = `${title} | ${SITE_CONFIG.name}`;

  return (
    <Helmet>
      <html lang={SITE_CONFIG.language} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={resolvedCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedCanonicalUrl} />
      <meta property="og:image" content={resolvedImageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImageUrl} />
    </Helmet>
  );
}
