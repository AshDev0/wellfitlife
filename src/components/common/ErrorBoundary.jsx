/**
 * =====================================================
 * Error Boundary Component
 * =====================================================
 *
 * Catches JavaScript errors anywhere in the component tree
 * and displays a fallback UI instead of crashing the app.
 *
 * Usage: Wrap components that might error
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */

import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service (Sentry, LogRocket, etc.)
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center px-6">
          <div className="max-w-xl w-full text-center bg-white p-10 rounded-2xl shadow-xl">
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-2">
                We encountered an unexpected error. Don't worry, it's not your fault.
              </p>
              {import.meta.env.DEV && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-red-600 font-medium">
                    Error Details (Development Mode)
                  </summary>
                  <pre className="mt-2 p-4 bg-red-50 rounded-lg text-xs overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all shadow-lg"
              >
                Reload Page
              </button>
              <Link
                to="/"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-all"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
