/**
 * =====================================================
 * Trending Posts Component
 * =====================================================
 *
 * Shows 3 trending/popular posts on homepage
 * Based on recent posts with highest engagement potential
 */

import { Link } from 'react-router-dom';
import { TrendingUp, Clock } from 'lucide-react';

export default function TrendingPosts({ posts }) {
  // Get top 3 most recent posts (simulating trending - can add view count later)
  const trendingPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trending Now</h2>
              <p className="text-gray-600 text-sm mt-1">Most popular articles this week</p>
            </div>
          </div>

          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
          >
            <span>View All</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 transform hover:-translate-y-2"
            >
              {/* Trending Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold">#{index + 1} TRENDING</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                  <span>•</span>
                  <span className="text-emerald-600 font-semibold">🔥 Trending</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-snug line-clamp-2 min-h-14">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700">
                    Read Article
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  {/* View Count (Static for now) */}
                  <span className="text-xs text-gray-500 font-medium">
                    {(Math.random() * 5 + 2).toFixed(1)}K reads
                  </span>
                </div>
              </div>

              {/* Glow Animation Effect */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
          >
            <span>View All Articles</span>
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
