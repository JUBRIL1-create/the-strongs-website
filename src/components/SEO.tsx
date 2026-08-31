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
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.seo.defaultTitle;

  const canonicalUrl = `${SITE_CONFIG.seo.siteUrl}${slug ? `/${slug}` : ''}`;

  useEffect(() => {
    document.title = pageTitle;

    // Update meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', SITE_CONFIG.logos.profileImage);
    }

    // Inject JSON-LD structured data
    const existingScript = document.getElementById('json-ld-org');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'json-ld-org';
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NGO',
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.fullName,
        url: SITE_CONFIG.seo.siteUrl,
        logo: `${SITE_CONFIG.seo.siteUrl}${SITE_CONFIG.logos.primary}`,
        image: SITE_CONFIG.logos.profileImage,
        description: SITE_CONFIG.seo.defaultDescription,
        foundingDate: '2026',
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: SITE_CONFIG.location.state,
            addressCountry: SITE_CONFIG.location.country,
          },
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: SITE_CONFIG.contact.email,
          contactType: 'General Inquiries',
        },
        sameAs: [
          SITE_CONFIG.social.instagram.url,
          SITE_CONFIG.social.youtube.url,
        ],
      });
      document.head.appendChild(script);
    }
  }, [pageTitle, description, canonicalUrl]);

  return null;
};
