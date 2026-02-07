import { Helmet } from 'react-helmet-async';
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
      {/* SEO Meta Tags */}
      <Helmet>
        <title>WellFitLife - Fitness, Diet & Wellness Tips for Healthy Living</title>
        <meta name="description" content="Your trusted companion for fitness, nutrition, and wellness. Get expert workout tips, balanced Indian diet plans, and healthy lifestyle guidance. Start your transformation today!" />
        <meta name="keywords" content="fitness tips, indian diet plan, home workout, weight loss tips, healthy lifestyle, wellness guide, beginner fitness india" />
        <link rel="canonical" href="https://wellfitlife.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wellfitlife.in/" />
        <meta property="og:title" content="WellFitLife - Fitness, Diet & Wellness Tips for Healthy Living" />
        <meta property="og:description" content="Your trusted companion for fitness, nutrition, and wellness. Get expert tips and guidance for a healthier lifestyle." />
        <meta property="og:image" content="https://wellfitlife.in/images/hero-fitness-girl.webp" />
        <meta property="og:site_name" content="WellFitLife" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WellFitLife - Fitness, Diet & Wellness Tips" />
        <meta name="twitter:description" content="Your trusted companion for fitness, nutrition, and wellness." />
        <meta name="twitter:image" content="https://wellfitlife.in/images/hero-fitness-girl.webp" />
      </Helmet>

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
