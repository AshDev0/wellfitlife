/**
 * =====================================================
 * useBlog Hook - Custom Hook for Blog Data
 * =====================================================
 *
 * Centralizes blog data fetching logic.
 * Makes it easy to switch from local data to API calls later.
 *
 * Usage:
 *   const { posts, loading, error } = useBlog();
 *   const { post, loading, error } = useBlog(slug);
 */

import { useState, useEffect } from "react";
import {
  getBlogPostBySlug,
  getBlogPostsByCategory,
  getFeaturedBlogPosts,
  getRelatedBlogPosts
} from "../data/posts";

/**
 * Hook for fetching all blog posts or filtering by category
 */
export function useBlogPosts(category = "All") {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // Simulate API delay for realistic behavior (remove in production)
        await new Promise(resolve => setTimeout(resolve, 300));

        // Get posts based on category
        const data = getBlogPostsByCategory(category);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [category]);

  return { posts, loading, error };
}

/**
 * Hook for fetching a single blog post by slug
 */
export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));

        // Get post by slug
        const data = getBlogPostBySlug(slug);

        if (!data) {
          setError("Blog post not found");
          setPost(null);
        } else {
          setPost(data);
          setError(null);
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
}

/**
 * Hook for fetching featured blog posts
 */
export function useFeaturedPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        const data = getFeaturedBlogPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load featured posts.");
        console.error("Error fetching featured posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return { posts, loading, error };
}

/**
 * Hook for fetching related blog posts
 */
export function useRelatedPosts(currentSlug, limit = 3) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));

        const data = getRelatedBlogPosts(currentSlug, limit);
        setPosts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load related posts.");
        console.error("Error fetching related posts:", err);
      } finally {
        setLoading(false);
      }
    };

    if (currentSlug) {
      fetchRelatedPosts();
    }
  }, [currentSlug, limit]);

  return { posts, loading, error };
}

/**
 * =====================================================
 * MIGRATION TO API
 * =====================================================
 *
 * When ready to connect to a backend API, replace the
 * import statements and data fetching logic with fetch/axios calls:
 *
 * Example:
 *
 * const response = await fetch(`${API_CONFIG.baseURL}/blogs`);
 * const data = await response.json();
 * setPosts(data);
 *
 * The component code won't need to change - just this hook!
 */
