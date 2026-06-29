/**
 * SEO Model - Handles meta information for pages
 * SOLID: Single Responsibility - Only handles SEO data structure
 */
export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  canonical: string;
  robots: string;
  viewport: string;
  author: string;
  twitterCard: string;
  twitterSite: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}
