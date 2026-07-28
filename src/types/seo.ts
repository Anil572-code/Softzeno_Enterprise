export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoMetadata {
  canonicalUrl?: string;
  description: string;
  imageUrl?: string;
  noIndex?: boolean;
  path: string;
  title: string;
}
