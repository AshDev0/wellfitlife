/**
 * =====================================================
 * 404 - Page Not Found
 * =====================================================
 *
 * Displays when user navigates to a non-existent route.
 * Includes helpful links to guide users back to the site.
 */

import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-emerald-600/20 select-none">
            404
          </h1>
          <div className="relative -mt-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 bg-white text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-md"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might want to visit:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/blog" className="text-cyan-500 hover:underline font-medium">
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-cyan-500 hover:underline font-medium">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-cyan-500 hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
