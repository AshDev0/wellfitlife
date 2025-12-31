/* =====================================================
   WellFitLife - Contact Page
   TEMPORARILY HIDDEN - Coming Soon Page
===================================================== */

export default function Contact() {
  return (
    <div className="bg-white text-[#1E293B] min-h-screen flex items-center justify-center">

      {/* Coming Soon Message */}
      <div className="max-w-2xl mx-auto px-6 text-center py-20">
        <div className="mb-8">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We're setting up our contact system to serve you better!
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our contact form is currently under development. In the meantime, feel free to connect with us through our blog content or check back soon!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blog"
            className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Explore Blog
          </a>
          <a
            href="/"
            className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
