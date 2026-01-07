/**
 * =====================================================
 * Organization JSON-LD Schema Component
 * =====================================================
 *
 * Site-wide schema for WellFitLife organization
 * Helps Google understand:
 * - What is WellFitLife
 * - Contact information
 * - Social media profiles
 * - Logo and branding
 */

import { Helmet } from 'react-helmet-async';

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WellFitLife",
    "alternateName": "WellFitLife India",
    "url": "https://wellfitlife.in",
    "logo": "https://wellfitlife.in/images/logo.webp",
    "description": "Your trusted companion for fitness, nutrition, and wellness guidance in India. Expert tips for home workouts, Indian meal plans, and healthy lifestyle.",
    "sameAs": [
      "https://www.instagram.com/wellfitlife.in",
      "https://www.facebook.com/wellfitlife.in",
      "https://www.pinterest.com/wellfitlife_in"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "founder": {
      "@type": "Person",
      "name": "WellFitLife Team"
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
