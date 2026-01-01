/**
 * =====================================================
 * Newsletter Popup Component
 * =====================================================
 *
 * Features:
 * - Shows after 10 seconds on first visit
 * - Collects email and first name
 * - Integrates with Brevo API
 * - Local storage to prevent repeated popups
 * - Success/Error states
 * - Mobile responsive
 */

import { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if user has already seen popup
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    const lastSeenDate = localStorage.getItem('newsletter-popup-date');

    // Show popup again after 7 days
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const shouldShowAgain = lastSeenDate && parseInt(lastSeenDate) < sevenDaysAgo;

    if (!hasSeenPopup || shouldShowAgain) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
    localStorage.setItem('newsletter-popup-date', Date.now().toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Brevo API endpoint
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            FIRSTNAME: firstName || 'Friend'
          },
          listIds: [parseInt(import.meta.env.VITE_BREVO_LIST_ID)],
          updateEnabled: true // Update if already exists
        })
      });

      const data = await response.json();

      // Success cases: 201 (created) or 204 (already exists but updated)
      if (response.ok || response.status === 204) {
        setStatus('success');

        // Track with Google Analytics
        if (window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'popup'
          });
        }

        // Close popup after 3 seconds
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
      // Handle "already exists" case
      else if (response.status === 400 && data.message?.includes('already exists')) {
        setStatus('success');
        setErrorMessage('You are already subscribed!');
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
      else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-slideUp">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Content */}
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {errorMessage || "You're In!"}
            </h3>
            <p className="text-gray-600">
              {errorMessage ? 'Great to have you with us!' : 'Check your email for your FREE meal plan and weekly fitness tips!'}
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-full">
                  <Gift className="text-emerald-600" size={40} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your FREE Meal Plan
              </h3>
              <p className="text-gray-600">
                7-Day Indian Fat Loss Meal Plan + Weekly Fitness Tips
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6 space-y-2">
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Scientifically-backed meal plans</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Weekly workout tips & motivation</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Indian recipes & diet guides</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    <span>Get Free Meal Plan</span>
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  {errorMessage}
                </p>
              )}
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
