/**
 * =====================================================
 * Related Posts Component
 * =====================================================
 *
 * Shows 3 related blog posts based on:
 * 1. Same category (primary)
 * 2. Shared tags (secondary)
 * 3. Recent posts (fallback)
 *
 * Increases session time and reduces bounce rate
 */

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RelatedPosts({ currentPost, allPosts }) {
  // Get related posts
  const getRelatedPosts = () => {
    // Filter out current post
    const otherPosts = allPosts.filter(post => post.id !== currentPost.id);

    // Score each post based on relevance
    const scoredPosts = otherPosts.map(post => {
      let score = 0;

      // Same category = +10 points
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Shared tags = +1 point per tag
      const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      score += sharedTags.length;

      return { ...post, score };
    });

    // Sort by score (descending), then by date (recent first)
    scoredPosts.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.publishedDate) - new Date(a.publishedDate);
    });

    // Return top 3
    return scoredPosts.slice(0, 3);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) return null;

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">You Might Also Like</h2>
          <p className="text-gray-600 text-sm mt-1">Continue your wellness journey</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
                  {post.category}
                </span>
              </div>

              {/* Index Badge (1, 2, 3) */}
              <div className="absolute top-3 right-3">
                <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              {/* Reading Time */}
              <p className="text-xs text-gray-500 font-medium">{post.readingTime}</p>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-snug line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center pt-2 border-t border-gray-100 group-hover:border-emerald-200 transition-colors">
                <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Explore All Articles</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
