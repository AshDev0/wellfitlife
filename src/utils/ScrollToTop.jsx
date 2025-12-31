/**
 * =====================================================
 * ScrollToTop Component
 * =====================================================
 *
 * Automatically scrolls to top of page on route change.
 * Essential for good UX in single-page applications.
 *
 * Usage: Place inside <Router> in App.jsx
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" for smooth scrolling
    });
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
