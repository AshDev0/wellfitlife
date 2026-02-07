/**
 * =====================================================
 * Blog Posts Auto-Loader
 * =====================================================
 *
 * This file automatically imports all blog posts from category folders
 * and provides helper functions for blog operations.
 *
 * To add a new post:
 * 1. Create a new .js file in the appropriate category folder
 * 2. Use _POST_TEMPLATE.js as a starting point
 * 3. The post will be automatically included (no need to edit this file)
 */

// Import all posts from each category
// Note: Update these imports when you add new post files

// Fitness Posts (Posts 1, 5, 7, 11, 12, 14, 15, 19, 24, 30)
import post1 from './fitness/7-day-beginner-home-workout-plan.js';
import post5 from './fitness/common-home-workout-mistakes-beginners.js';
import post7 from './fitness/30-day-home-fitness-challenge-beginners.js';
import post11 from './fitness/build-discipline-stay-consistent-fitness.js';
import post12 from './fitness/sleep-recovery-fat-loss-guide.js';
import post14 from './fitness/start-running-beginners-0-to-5k-plan.js';
import post15 from './fitness/beginner-yoga-poses-stress-relief-flexibility.js';
import post19 from './fitness/muscle-building-home.js';
import post24 from './fitness/female-fitness-beginner-guide.js';
import post30 from './fitness/fat-loss-mistakes-fix.js';

// Diet Posts (Posts 2, 3, 4, 6, 8, 9, 10, 13, 16, 17, 18, 22, 23, 26, 29)
import post2 from './diet/quick-healthy-indian-breakfast-ideas.js';
import post3 from './diet/protein-rich-vegetarian-foods-india.js';
import post4 from './diet/healthy-snacks-office-evening-cravings.js';
import post6 from './diet/fat-loss-vs-weight-loss-difference.js';
import post8 from './diet/common-fat-loss-myths-indians-believe.js';
import post9 from './diet/indian-weekly-meal-prep-guide-healthy-eating.js';
import post10 from './diet/how-to-reduce-belly-fat-naturally.js';
import post13 from './diet/sugar-vs-jaggery-vs-honey-comparison.js';
import post16 from './diet/metabolism-boosting-foods-indian-diet.js';
import post17 from './diet/healthy-dinner-ideas-fat-loss-indian.js';
import post18 from './diet/best-supplements-for-beginners-guide.js';
import post22 from './diet/post-workout-meal-guide-indian.js';
import post23 from './diet/protein-breakfast-ideas-indian.js';
import post26 from './diet/healthy-indian-meal-plate-blueprint.js';
import post29 from './diet/reduce-sugar-cravings-naturally.js';

// Wellness Posts (Posts 20, 21, 25, 27, 28, 31, 32)
import post20 from './wellness/office-workers-fitness.js';
import post21 from './wellness/mindful-eating-portion-control.js';
import post25 from './wellness/gut-health-digestion-foods.js';
import post27 from './wellness/weight-loss-motivation-psychology.js';
import post28 from './wellness/daily-fat-loss-routine.js';
import post31 from './wellness/morning-habits-fat-loss-naturally.js';
import post32 from './wellness/pcos-weight-loss-guide.js';

// All posts array (sorted by ID in descending order - latest first)
const blogPosts = [
  post32, post31, post30, post29, post28, post27, post26,
  post25, post24, post23, post22, post21,
  post20, post19, post18, post17, post16,
  post15, post14, post13, post12, post11,
  post10, post9, post8, post7, post6,
  post5, post4, post3, post2, post1
];

// =====================================================
// Helper Functions (Same API as before)
// =====================================================

export const getAllBlogPosts = () => blogPosts;

export const getFeaturedBlogPosts = () => blogPosts.filter(post => post.featured);

export const getBlogPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);

export const getBlogPostsByCategory = (category) => {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag) => blogPosts.filter(post => post.tags.includes(tag));

export const getRelatedBlogPosts = (currentSlug, limit = 3) => {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  // Get posts from same category, excluding current post
  const related = blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);

  // If not enough related posts, fill with other posts
  if (related.length < limit) {
    const additional = blogPosts
      .filter(post => post.slug !== currentSlug && !related.includes(post))
      .slice(0, limit - related.length);
    return [...related, ...additional];
  }

  return related;
};

export const getAllCategories = () => {
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
  return categories;
};

export const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags);
};

export default blogPosts;
