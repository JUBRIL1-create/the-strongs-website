import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  slug?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.seo.defaultDescription,
  slug = '',
  type = 'website',
}) => {
  const pageTitle = title
    ? (title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`)
    : SITE_CONFIG.seo.defaultTitle;

  const cleanSlug = slug.replace(/^\/+/, '').replace(/\/+$/, '');
  const canonicalUrl = cleanSlug
    ? `${SITE_CONFIG.seo.siteUrl}/${cleanSlug}`
    : `${SITE_CONFIG.seo.siteUrl}/`;

  useEffect(() => {
    document.title = pageTitle;

    // Helper to ensure meta tag exists and update content
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');

    // Open Graph meta tags
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE_CONFIG.name);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', SITE_CONFIG.logos.profileImage);

    // Twitter / X card tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', SITE_CONFIG.logos.profileImage);

    // Update canonical link dynamically
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [pageTitle, description, canonicalUrl]);

  return null;
};
