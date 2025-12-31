/**
 * =====================================================
 * Main App Component - Production-Grade Routing
 * =====================================================
 *
 * This is the root component that sets up:
 * - React Router with nested routes
 * - Layout wrapper with Navbar/Footer
 * - ScrollToTop behavior
 * - 404 error handling
 *
 * ROUTING STRUCTURE:
 * / (Layout wrapper)
 *   ├── / (Home)
 *   ├── /blog (Blog listing)
 *   ├── /blog/:slug (Individual blog post)
 *   ├── /about (About page)
 *   ├── /contact (Contact page)
 *   └── * (404 Not Found)
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./utils/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* ScrollToTop on route change */}
      <ScrollToTop />

      <Routes>
        {/* Layout wrapper for all pages */}
        <Route element={<Layout />}>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
