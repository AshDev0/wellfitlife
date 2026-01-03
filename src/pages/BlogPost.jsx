/**
 * =====================================================
 * Single Blog Post Page
 * =====================================================
 *
 * Dynamic blog post page that:
 * - Fetches post by slug from URL params
 * - Displays full blog content
 * - Shows related posts
 * - Handles 404 for invalid slugs
 * - Includes loading and error states
 */

import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import SocialShare from "../components/SocialShare";
import RelatedPosts from "../components/RelatedPosts";
import ReadingProgressBar from "../components/common/ReadingProgressBar";
import BackToTop from "../components/common/BackToTop";
import InlineBlogSubscribe from "../components/InlineBlogSubscribe";
import { useBlogPost, useRelatedPosts } from "../hooks/useBlog";
import blogPosts from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useBlogPost(slug);
  const { posts: relatedPosts } = useRelatedPosts(slug, 3);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-[#22C55E] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  // Error State - Post Not Found
  if (error || !post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-white text-[#1E293B]">
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Back to Top Button */}
      <BackToTop />

      {/* ================= BREADCRUMBS ================ */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* ================= HERO BANNER ================ */}
      <section className="relative overflow-hidden text-center pt-28 pb-20">

        {/* Glow Background */}
        <div className="absolute -top-32 left-0 w-md h-112 bg-emerald-600/30 blur-[150px]"></div>
        <div className="absolute -bottom-20 right-0 w-100 h-100 bg-cyan-500/30 blur-[150px]"></div>

        {/* Category Badge */}
        <div className="mb-4 relative z-10">
          <span className="inline-block px-4 py-2 bg-emerald-600/10 text-emerald-600 font-semibold rounded-full text-sm">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 relative z-10 leading-tight max-w-4xl mx-auto px-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative z-10 px-6 leading-relaxed">
          {post.excerpt}
        </p>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 leading-relaxed">

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
          <span>Published: {new Date(post.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span className="text-emerald-600 font-medium cursor-pointer hover:underline">
            {post.category}
          </span>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => navigate(`/blog?tag=${tag}`)}
                className="px-3 py-1 bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-700 text-xs font-medium rounded-full transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#1E293B] prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-emerald-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ================= SOCIAL SHARE BUTTONS ================= */}
        <div className="mt-12">
          <SocialShare
            url={`https://wellfitlife.in/blog/${post.slug}`}
            title={post.title}
            description={post.excerpt}
          />
        </div>
      </div>

      {/* ================= NEWSLETTER SUBSCRIBE (INLINE) ================= */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <InlineBlogSubscribe />
      </div>

      {/* ================= AUTHOR BOX ================= */}
      {post.author && (
        <section className="max-w-4xl mx-auto px-6 pb-14">
          <div className="p-8 bg-gray-50 rounded-3xl border shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-28 h-28 rounded-full object-contain border-4 border-white shadow-md"
            />
            <div>
              <h3 className="font-bold text-xl">Author: {post.author.name}</h3>
              <p className="text-gray-600">{post.author.bio}</p>
            </div>
          </div>
        </section>
      )}

      {/* ================= RELATED POSTS - ENHANCED ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <RelatedPosts currentPost={post} allPosts={blogPosts} />
      </div>

    </div>
  );
}
