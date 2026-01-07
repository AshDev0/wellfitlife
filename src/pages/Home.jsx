import Hero from '../components/Hero';
import CategoryHighlights from '../components/CategoryHighlights';
import FeaturedArticles from '../components/FeaturedArticles';
import TrendingPosts from '../components/TrendingPosts';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import BackToTop from '../components/common/BackToTop';
import OrganizationSchema from '../components/OrganizationSchema';
import WebsiteSchema from '../components/WebsiteSchema';
import blogPosts from '../data/posts';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema for SEO */}
      <OrganizationSchema />
      <WebsiteSchema />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Hero Section */}
      <Hero />

      {/* Trending Posts Section - NEW! */}
      <TrendingPosts posts={blogPosts} />

      {/* Category Highlights Section */}
      <CategoryHighlights />

      {/* Featured Articles Section */}
      <FeaturedArticles />

      {/* CTA Section - Meal Plan Download */}
      <CTASection />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
