/**
 * =====================================================
 * POST TEMPLATE - Copy this to create new blog posts
 * =====================================================
 *
 * Instructions:
 * 1. Copy this file to appropriate category folder (fitness/diet/wellness)
 * 2. Rename file to post slug (e.g., my-new-post.js)
 * 3. Fill in all required fields
 * 4. Update ID to next available number
 * 5. Save and test
 */

import hero1 from "../../../public/images/hero-fitness-girl.webp";
import logo from "../../assets/logos/logo.webp";

export default {
  id: "XX", // Update to next available ID
  title: "Your Blog Post Title Here",
  slug: "your-blog-post-slug-here",
  excerpt: "A short 1-2 sentence description of your post (120-150 characters ideal for SEO).",
  content: `
    <div class="space-y-8">
      <section class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-500">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Your introduction paragraph here...
        </p>
      </section>

      <section class="bg-yellow-50 p-6 rounded-xl mb-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Section Title</h2>
        <p class="text-gray-700 mb-3">Your content here...</p>
        <ul class="space-y-2 text-gray-700 ml-4">
          <li>• Bullet point 1</li>
          <li>• Bullet point 2</li>
        </ul>
      </section>

      <!-- Add more sections as needed -->

      <section class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          Your conclusion here...
        </p>
        <p class="font-bold text-green-700 text-lg">Inspiring closing statement.</p>
      </section>
    </div>
  `,
  image: hero1, // Change to specific image if available
  author: {
    name: "WellFitLife",
    avatar: logo,
    bio: "Your trusted companion for fitness, nutrition, and wellness guidance."
  },
  publishedDate: "2025-12-30", // Format: YYYY-MM-DD
  category: "Fitness", // Options: Fitness, Diet, Wellness
  readingTime: "8 min read", // Estimate based on word count
  tags: ["tag1", "tag2", "tag3", "tag4", "tag5"], // 3-5 tags, lowercase with hyphens
  featured: false, // Set to true for featured posts
  metaDescription: "SEO meta description (150-160 characters max) - appears in Google search results.",
  metaKeywords: "keyword1, keyword2, keyword3, keyword4" // Comma-separated SEO keywords
};
