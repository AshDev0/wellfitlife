import Hero from '../components/Hero';
import CategoryHighlights from '../components/CategoryHighlights';
import FeaturedArticles from '../components/FeaturedArticles';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

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
