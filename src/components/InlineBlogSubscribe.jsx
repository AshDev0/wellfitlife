/**
 * =====================================================
 * Inline Blog Subscribe Component
 * =====================================================
 *
 * Appears in the middle of blog posts
 * Collects emails without interrupting reading
 * Integrates with Brevo API
 */

import { useState } from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function InlineBlogSubscribe() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
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
            FIRSTNAME: firstName || 'Friend',
            SIGNUP_SOURCE: 'blog-inline'
          },
          listIds: [parseInt(import.meta.env.VITE_BREVO_LIST_ID)],
          updateEnabled: true
        })
      });

      const data = await response.json();

      if (response.ok || response.status === 204) {
        setStatus('success');
        setEmail('');
        setFirstName('');

        // Track with Google Analytics
        if (window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'blog-inline'
          });
        }
      } else if (response.status === 400 && data.message?.includes('already exists')) {
        setStatus('success');
        setErrorMessage('You are already subscribed!');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="my-12 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-8 md:p-10 rounded-2xl border-2 border-emerald-200 shadow-lg">
      <div className="max-w-2xl mx-auto">
        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-3">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {errorMessage || "Welcome to WellFitLife!"}
            </h3>
            <p className="text-gray-600">
              {errorMessage || "Check your inbox for a welcome email!"}
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="flex justify-center items-center gap-2 mb-3">
                <Sparkles className="text-emerald-600" size={28} />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Want More Tips Like This?
                </h3>
                <Sparkles className="text-emerald-600" size={28} />
              </div>
              <p className="text-gray-700 text-lg">
                Join 1000+ readers getting weekly fitness, diet, and wellness tips + FREE meal plan
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="First Name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  disabled={status === 'loading'}
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
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
              No spam, ever. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
