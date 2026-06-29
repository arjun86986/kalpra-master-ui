import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SEOMeta, StructuredData } from '../models/seo.model';
import { APP_CONFIG, SEO_CONFIG } from '../config/app.config';

/**
 * SEO Service - Manages meta tags and structured data
 * SOLID: Single Responsibility - Only handles SEO operations
 * Open/Closed: Can be extended for specific SEO requirements
 */
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  /**
   * Set page meta tags
   */
  setMeta(meta: Partial<SEOMeta>): void {
    const fullMeta: SEOMeta = {
      title: meta.title ?? SEO_CONFIG.defaultTitle,
      description: meta.description ?? SEO_CONFIG.defaultDescription,
      keywords: meta.keywords ?? SEO_CONFIG.defaultKeywords,
      ogTitle: meta.ogTitle ?? meta.title ?? SEO_CONFIG.defaultTitle,
      ogDescription: meta.ogDescription ?? meta.description ?? SEO_CONFIG.defaultDescription,
      ogImage: meta.ogImage ?? '',
      ogUrl: meta.ogUrl ?? APP_CONFIG.siteUrl + this.router.url,
      canonical: meta.canonical ?? APP_CONFIG.siteUrl + this.router.url,
      robots: meta.robots ?? 'index, follow',
      viewport: meta.viewport ?? 'width=device-width, initial-scale=1',
      author: meta.author ?? SEO_CONFIG.defaultAuthor,
      twitterCard: meta.twitterCard ?? 'summary_large_image',
      twitterSite: meta.twitterSite ?? '@kalpra',
    };

    this.updateMetaTags(fullMeta);
  }

  /**
   * Add structured data (Schema.org)
   */
  setStructuredData(data: StructuredData): void {
    if (!this.isBrowser) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /**
   * Remove all structured data scripts
   */
  removeStructuredData(): void {
    if (!this.isBrowser) return;

    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }

  private updateMetaTags(meta: SEOMeta): void {
    this.titleService.setTitle(meta.title);

    const metaTags = [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords.join(', ') },
      { name: 'robots', content: meta.robots },
      { name: 'viewport', content: meta.viewport },
      { name: 'author', content: meta.author },
      { name: 'og:title', content: meta.ogTitle },
      { name: 'og:description', content: meta.ogDescription },
      { name: 'og:image', content: meta.ogImage },
      { name: 'og:url', content: meta.ogUrl },
      { name: 'twitter:card', content: meta.twitterCard },
      { name: 'twitter:site', content: meta.twitterSite },
    ];

    metaTags.forEach(tag => {
      this.metaService.updateTag({ name: tag.name, content: tag.content });
    });

    // Set canonical - only in browser
    if (this.isBrowser) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', meta.canonical);
    }
  }
}
