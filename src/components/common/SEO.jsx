/**
 * =====================================================
 * SEO Component
 * =====================================================
 *
 * Manages page meta tags for SEO optimization.
 * Uses native document manipulation (no external library required).
 *
 * For better SEO with SSR, consider using:
 * - react-helmet-async (recommended)
 * - Next.js (built-in Head component)
 *
 * Usage:
 *   <SEO
 *     title="Blog Title"
 *     description="Blog description"
 *     image="/images/blog-cover.jpg"
 *   />
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_CONFIG, SEO_DEFAULTS } from "../../constants";

export default function SEO({
  title,
  description = SEO_DEFAULTS.description,
  image = SEO_DEFAULTS.image,
  type = "website",
  keywords = SEO_DEFAULTS.keywords
}) {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SEO_DEFAULTS.title;
  const url = `https://${SITE_CONFIG.domain}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    // Basic SEO
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph (Facebook)
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:site_name", SITE_CONFIG.name, true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", url);

  }, [fullTitle, description, image, type, keywords, url]);

  return null; // This component doesn't render anything
}

/**
 * =====================================================
 * OPTIONAL: Install react-helmet-async for better SEO
 * =====================================================
 *
 * Run: npm install react-helmet-async
 *
 * Then replace this component with:
 *
 * import { Helmet } from 'react-helmet-async';
 *
 * export default function SEO({ title, description, image }) {
 *   return (
 *     <Helmet>
 *       <title>{title} | WellFitLife</title>
 *       <meta name="description" content={description} />
 *       <meta property="og:title" content={title} />
 *       <meta property="og:description" content={description} />
 *       <meta property="og:image" content={image} />
 *       ... more tags
 *     </Helmet>
 *   );
 * }
 *
 * And wrap your App in index.jsx with:
 * import { HelmetProvider } from 'react-helmet-async';
 * <HelmetProvider><App /></HelmetProvider>
 */
