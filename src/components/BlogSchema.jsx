/**
 * =====================================================
 * Blog Post JSON-LD Schema Component
 * =====================================================
 *
 * Adds structured data for blog posts to help Google:
 * - Index faster (critical for "Discovered - not indexed")
 * - Show rich snippets in search results
 * - Understand content type, author, dates
 *
 * Schema Types:
 * - Article (blog post content)
 * - Person (author information)
 * - ImageObject (featured image)
 */

import { Helmet } from 'react-helmet-async';

export default function BlogSchema({ post }) {
  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": `https://wellfitlife.in${post.image}`,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": post.author?.name || "WellFitLife",
      "url": "https://wellfitlife.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WellFitLife",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wellfitlife.in/images/logo.webp",
        "width": 600,
        "height": 60
      }
    },
    "datePublished": post.publishedDate,
    "dateModified": post.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wellfitlife.in/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags?.join(", ") || post.metaKeywords,
    "wordCount": post.content?.length || 1500,
    "inLanguage": "en-IN"
  };

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wellfitlife.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://wellfitlife.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://wellfitlife.in/blog/${post.slug}`
      }
    ]
  };

  return (
    <Helmet>
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
