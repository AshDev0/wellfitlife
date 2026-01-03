/**
 * =====================================================
 * Sticky Newsletter Bar Component
 * =====================================================
 *
 * Bottom sticky bar that appears after user scrolls
 * High conversion rate for blog readers
 * Can be dismissed and won't show again for 7 days
 */

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function StickyNewsletterBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Check if user dismissed it in last 7 days
    const dismissedTime = localStorage.getItem('newsletterBarDismissed');
    if (dismissedTime) {
      const daysSinceDismissed = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        setIsDismissed(true);
        return;
      }
    }

    // Show bar after scrolling 20% of page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 20) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('newsletterBarDismissed', Date.now().toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY
        },
        body: JSON.stringify({
          email: email,
          listIds: [2],
          updateEnabled: true,
          attributes: {
            SOURCE: 'Sticky_Newsletter_Bar'
          }
        })
      });

      if (response.ok || response.status === 204) {
        setSubmitStatus('success');
        setEmail('');

        // Track with Google Analytics
        if (window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: 'sticky_bar',
            value: 1
          });
        }

        // Auto-dismiss after success
        setTimeout(() => {
          handleDismiss();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">

            {/* Left: Icon + Message */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <div className="hidden sm:flex w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm sm:text-base truncate">
                  🎁 Get Your FREE 7-Day Meal Plan
                </p>
                <p className="text-white/90 text-xs hidden sm:block">
                  Join 5,000+ subscribers • 2 new tips every week
                </p>
              </div>
            </div>

            {/* Center: Email Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3 flex-shrink-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-44 sm:w-64 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-900 bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/80 disabled:opacity-50 shadow-xl"
              />
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="px-5 sm:px-7 py-2.5 bg-white text-emerald-600 font-bold text-sm rounded-xl hover:bg-emerald-50 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 whitespace-nowrap shadow-xl"
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? '✓ Sent!' : 'Get Free Plan'}
              </button>
            </form>

            {/* Right: Close Button */}
            <button
              onClick={handleDismiss}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'error' && (
            <p className="text-white text-xs mt-2 text-center">
              Please enter a valid email address
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
