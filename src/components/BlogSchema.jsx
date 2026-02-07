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

  const postUrl = `https://wellfitlife.in/blog/${post.slug}`;
  const imageUrl = post.image?.startsWith?.('http') ? post.image : `https://wellfitlife.in${post.image}`;

  return (
    <Helmet>
      {/* Page Title */}
      <title>{post.title} | WellFitLife</title>

      {/* Primary Meta Tags */}
      <meta name="description" content={post.metaDescription || post.excerpt} />
      <meta name="keywords" content={post.metaKeywords || post.tags?.join(', ')} />
      <link rel="canonical" href={postUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={postUrl} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.metaDescription || post.excerpt} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="WellFitLife" />
      <meta property="article:published_time" content={post.publishedDate} />
      <meta property="article:section" content={post.category} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
      <meta name="twitter:image" content={imageUrl} />

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
