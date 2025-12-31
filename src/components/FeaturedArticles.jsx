import BlogCard from "./blog/BlogCard";
import { useBlogPosts } from "../hooks/useBlog";

export default function FeaturedArticles() {
  const { posts, loading } = useBlogPosts("All");

  // If loading or no posts, show loading state
  if (loading || posts.length === 0) {
    return (
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  // Sort posts by date (latest first) and get top 5
  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  const latestPosts = sortedPosts.slice(0, 5);

  // Latest post (most recent) goes to left side as large card
  const featuredBlog = latestPosts[0];
  // Remaining 4 posts go to right side
  const sideBlogs = latestPosts.slice(1, 5);

  return (
    <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 lg:mb-20 animate-fade-in">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Featured <span className="text-emerald-600">Articles</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore expert workouts, nutrition tips, and wellness guides crafted to help you live a balanced and healthy lifestyle
        </p>
      </div>

      {/* Main Layout: Large Card Left + 4 Cards Right (2x2 Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Side - Large Featured Card */}
          <div className="animate-slide-up" style={{ animationDelay: '0ms' }}>
            <BlogCard
              image={featuredBlog.image}
              title={featuredBlog.title}
              description={featuredBlog.excerpt}
              slug={featuredBlog.slug}
              category={featuredBlog.category}
              readingTime={featuredBlog.readingTime}
              variant="large"
            />
          </div>

          {/* Right Side - 4 Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sideBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  description={blog.excerpt}
                  slug={blog.slug}
                  category={blog.category}
                  readingTime={blog.readingTime}
                  variant="default"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
