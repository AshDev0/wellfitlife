/**
 * =====================================================
 * Application Constants
 * =====================================================
 *
 * Central location for all app-wide constants.
 * Makes configuration changes easy and maintainable.
 */

// Site Information
export const SITE_CONFIG = {
  name: "WellFitLife",
  domain: "wellfitlife.in",
  tagline: "Your Journey to a Healthier Lifestyle",
  description: "Transform your health with expert fitness guides, nutrition tips, and wellness advice tailored for everyday people.",
  author: "Ashwani Gupta",
  email: "contact@wellfitlife.in",
  social: {
    facebook: "https://facebook.com/wellfitlife",
    instagram: "https://instagram.com/wellfitlife",
    twitter: "https://twitter.com/wellfitlife",
    youtube: "https://youtube.com/@wellfitlife"
  }
};

// SEO Defaults
export const SEO_DEFAULTS = {
  title: "WellFitLife - Your Journey to a Healthier Lifestyle",
  description: "Expert fitness guides, nutrition tips, and wellness advice for everyday people. Start your transformation today.",
  keywords: "fitness, health, nutrition, wellness, workout, diet, healthy lifestyle",
  image: "/images/og-image.jpg", // Add your Open Graph image
  type: "website"
};

// Blog Configuration
export const BLOG_CONFIG = {
  postsPerPage: 9,
  featuredPostsLimit: 3,
  relatedPostsLimit: 3,
  categories: ["All", "Fitness", "Diet", "Wellness"],
  defaultCategory: "All"
};

// API Configuration (for future use)
export const API_CONFIG = {
  // When you move to a backend API, configure here
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  timeout: 10000,
  endpoints: {
    blogs: "/blogs",
    contact: "/contact",
    newsletter: "/newsletter"
  }
};

// Navigation Links
export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/blog", label: "Blog" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" }
];

// Feature Flags (for gradual feature rollout)
export const FEATURES = {
  enableNewsletter: false,
  enableSearch: true,
  enableComments: false,
  enableDarkMode: false
};
