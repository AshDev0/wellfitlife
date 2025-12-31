/**
 * =====================================================
 * WellFitLife - Blog Listing Page
 * =====================================================
 *
 * Dynamic blog listing with:
 * - Category filtering
 * - Search functionality (with 500ms debouncing)
 * - Pagination (9 posts per page)
 * - Responsive grid layout
 * - Loading states
 * - Error handling
 */

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "../components/blog/BlogCard";
import { useBlogPosts } from "../hooks/useBlog";
import { getAllCategories } from "../data/posts";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tagFromUrl = searchParams.get("tag");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(tagFromUrl || "");
  const [debouncedSearch, setDebouncedSearch] = useState(tagFromUrl || "");
  const [currentPage, setCurrentPage] = useState(1);

  // Handle tag parameter from URL
  useEffect(() => {
    if (tagFromUrl) {
      setSearchQuery(tagFromUrl);
      setDebouncedSearch(tagFromUrl);
      // Clear the URL parameter after setting the search
      setSearchParams({});
    }
  }, [tagFromUrl, setSearchParams]);

  const POSTS_PER_PAGE = 9; // 3 rows × 3 columns grid

  const { posts: categoryPosts, loading, error } = useBlogPosts(selectedCategory);
  const categories = getAllCategories();

  // Debounce search query for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter posts by search query
  const filterPostsBySearch = (posts, query) => {
    if (!query.trim()) return posts;

    const searchLower = query.toLowerCase();
    return posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchLower);
      const excerptMatch = post.excerpt.toLowerCase().includes(searchLower);
      const tagsMatch = post.tags?.some(tag =>
        tag.toLowerCase().includes(searchLower)
      );
      return titleMatch || excerptMatch || tagsMatch;
    });
  };

  // Apply search filter on category-filtered posts
  const filteredPosts = filterPostsBySearch(categoryPosts, debouncedSearch);

  // Reset to page 1 when filters change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, debouncedSearch]);

  // Pagination calculations
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-white text-[#1E293B]">

      {/* ================= PAGE HEADER ================= */}
      <section className="relative text-center pt-28 pb-20 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute -top-32 left-0 w-md h-112 bg-emerald-600/30 blur-[150px]"></div>
        <div className="absolute -bottom-20 right-0 w-100 h-100 bg-cyan-500/30 blur-[150px]"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold relative z-10">
          WellFitLife <span className="text-emerald-600">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4 relative z-10">
          Explore fitness guides, diet tips & healthy living articles curated for your wellness journey.
        </p>

        {/* Search Bar - Functional */}
        <div className="max-w-md mx-auto mt-10 relative z-10">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-full border focus:ring-2 focus:ring-emerald-600 bg-gray-50 outline-none shadow-sm"
          />
          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 mt-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                ? "bg-emerald-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-red-600 font-medium">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && currentPosts.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                description={post.excerpt}
                slug={post.slug}
                category={post.category}
                readingTime={post.readingTime}
              />
            ))}
          </div>
        )}

        {/* No Posts Found */}
        {!loading && !error && currentPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              {debouncedSearch
                ? `No results found for "${debouncedSearch}"`
                : "No blog posts found in this category."}
            </p>
            {debouncedSearch && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
              >
                Clear Search
              </button>
            )}
          </div>
        )}

        {/* ================= PAGINATION ================= */}
        {!loading && !error && filteredPosts.length > POSTS_PER_PAGE && (
          <div className="flex flex-col items-center gap-6 mt-16">

            {/* Page Info */}
            <p className="text-gray-600 text-sm">
              Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, totalPosts)} of {totalPosts} posts
            </p>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2 flex-wrap justify-center">

              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ← Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === pageNum
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Next →
              </button>

            </div>
          </div>
        )}

      </section>

    </div>
  );
}
