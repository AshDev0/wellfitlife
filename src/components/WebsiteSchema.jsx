/**
 * =====================================================
 * Website JSON-LD Schema Component
 * =====================================================
 *
 * Defines the website with search functionality
 * Enables Google Search Box in results
 */

import { Helmet } from 'react-helmet-async';

export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WellFitLife",
    "url": "https://wellfitlife.in",
    "description": "Transform your body and mind with expert fitness tips, Indian meal plans, and wellness guidance.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wellfitlife.in/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WellFitLife",
      "logo": "https://wellfitlife.in/images/logo.webp"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
