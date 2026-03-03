/**
 * =====================================================
 * WellFitLife - Privacy Policy Page
 * =====================================================
 *
 * Required for:
 * - Google AdSense application
 * - GDPR / Indian IT Act compliance
 * - Building user trust
 *
 * Covers:
 * - Data collection (Analytics, Newsletter)
 * - Cookies (including AdSense ready)
 * - Third-party services (Google Analytics)
 * - Medical disclaimer
 * - User rights
 */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const lastUpdated = "March 3, 2026";
  const siteEmail = "contact@wellfitlife.in";
  const siteUrl = "https://wellfitlife.in";

  return (
    <div className="bg-white text-[#1E293B]">
      <Helmet>
        <title>Privacy Policy | WellFitLife</title>
        <meta
          name="description"
          content="Read WellFitLife's Privacy Policy to understand how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href={`${siteUrl}/privacy-policy`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* ================= PAGE HEADER ================= */}
      <section className="relative text-center pt-28 pb-16 overflow-hidden">
        <div className="absolute -top-32 left-0 w-md h-112 bg-emerald-600/20 blur-[150px]"></div>
        <div className="absolute -bottom-20 right-0 w-100 h-100 bg-cyan-500/20 blur-[150px]"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold relative z-10">
          Privacy <span className="text-emerald-600">Policy</span>
        </h1>
        <p className="text-gray-500 mt-3 relative z-10 text-sm">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">

        {/* Intro */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>WellFitLife</strong> (<a href={siteUrl} className="text-emerald-600 hover:underline">{siteUrl}</a>).
            Your privacy matters to us. This Privacy Policy explains what information we collect when you visit our website,
            how we use it, and your rights regarding that information. By using our website, you agree to the practices
            described in this policy.
          </p>
        </div>

        {/* Section 1 */}
        <PolicySection number="1" title="Information We Collect">
          <p>We collect two types of information:</p>

          <h3 className="font-semibold text-lg mt-4 mb-2">a) Information You Provide Voluntarily</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Email address</strong> — when you subscribe to our newsletter or contact us via our contact form.
              We use this solely to send you health, fitness, and wellness content you requested.
            </li>
            <li>
              <strong>Name</strong> — optionally provided in the contact form.
            </li>
            <li>
              <strong>Message content</strong> — when you send us a message through the Contact page.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mt-4 mb-2">b) Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Usage data</strong> — pages visited, time spent on pages, referral source, browser type, and
              device type. This is collected through Google Analytics.
            </li>
            <li>
              <strong>IP address</strong> — collected automatically by web servers and analytics tools. We do not store
              or use IP addresses to identify individuals.
            </li>
            <li>
              <strong>Cookies</strong> — small text files stored on your device. See Section 4 for details.
            </li>
          </ul>
        </PolicySection>

        {/* Section 2 */}
        <PolicySection number="2" title="How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>To send our newsletter with fitness tips, diet plans, and wellness articles (only if you subscribed)</li>
            <li>To respond to your messages sent via the Contact page</li>
            <li>To analyse website traffic and understand how visitors use our site (via Google Analytics)</li>
            <li>To improve our content, user experience, and website performance</li>
            <li>To display relevant advertisements (via Google AdSense, once enabled)</li>
          </ul>
          <p className="mt-4 text-gray-600">
            We <strong>never sell, rent, or share</strong> your personal information with third parties for their
            marketing purposes.
          </p>
        </PolicySection>

        {/* Section 3 */}
        <PolicySection number="3" title="Newsletter & Email Communication">
          <p>
            If you subscribe to our newsletter, we collect your email address to send you our weekly wellness content.
            You can <strong>unsubscribe at any time</strong> by clicking the unsubscribe link at the bottom of any
            email we send. After unsubscribing, we will remove your email from our mailing list within 7 business days.
          </p>
          <p className="mt-3">
            We use a third-party email service provider to manage our newsletter. Your email may be stored on their
            servers subject to their privacy policies.
          </p>
        </PolicySection>

        {/* Section 4 */}
        <PolicySection number="4" title="Cookies Policy">
          <p>
            We use cookies to improve your browsing experience. Cookies are small files placed on your device by your
            browser. Here is how we use them:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Cookie Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Purpose</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-700">Analytics Cookies</td>
                  <td className="px-4 py-3 text-gray-600">Track page views and user behaviour anonymously</td>
                  <td className="px-4 py-3 text-gray-600">Google Analytics</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Preference Cookies</td>
                  <td className="px-4 py-3 text-gray-600">Remember your newsletter popup status</td>
                  <td className="px-4 py-3 text-gray-600">WellFitLife (localStorage)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">Advertising Cookies</td>
                  <td className="px-4 py-3 text-gray-600">Display personalised ads (when AdSense is active)</td>
                  <td className="px-4 py-3 text-gray-600">Google AdSense</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-gray-600">
            You can control or disable cookies through your browser settings. Note that disabling cookies may affect
            some functionality of our website.
          </p>
        </PolicySection>

        {/* Section 5 */}
        <PolicySection number="5" title="Google Analytics">
          <p>
            We use <strong>Google Analytics</strong> to understand how visitors interact with our website. Google
            Analytics collects data such as pages visited, session duration, and approximate geographic location.
            This data is <strong>anonymised</strong> and does not personally identify you.
          </p>
          <p className="mt-3">
            You can opt out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
          <p className="mt-3">
            Google's privacy policy is available at:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              policies.google.com/privacy
            </a>
          </p>
        </PolicySection>

        {/* Section 6 */}
        <PolicySection number="6" title="Third-Party Links">
          <p>
            Our blog posts may contain links to external websites for reference or additional reading. These websites
            have their own privacy policies, and we have <strong>no control over</strong> their content or practices.
            We recommend reviewing the privacy policy of any external site you visit.
          </p>
        </PolicySection>

        {/* Section 7 */}
        <PolicySection number="7" title="Data Security">
          <p>
            We take reasonable precautions to protect the information you share with us. Our website is served over
            HTTPS (SSL encryption). However, no method of internet transmission is 100% secure. We cannot guarantee
            absolute security of data transmitted to our website.
          </p>
        </PolicySection>

        {/* Section 8 */}
        <PolicySection number="8" title="Children's Privacy">
          <p>
            WellFitLife is not directed at children under the age of 13. We do not knowingly collect personal
            information from children. If you are a parent or guardian and believe your child has provided us with
            personal information, please contact us at{" "}
            <a href={`mailto:${siteEmail}`} className="text-emerald-600 hover:underline">
              {siteEmail}
            </a>{" "}
            and we will delete that information promptly.
          </p>
        </PolicySection>

        {/* Section 9 */}
        <PolicySection number="9" title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Correction</strong> — request correction of inaccurate data</li>
            <li><strong>Deletion</strong> — request deletion of your personal data</li>
            <li><strong>Unsubscribe</strong> — opt out of our newsletter at any time</li>
          </ul>
          <p className="mt-4 text-gray-600">
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${siteEmail}`} className="text-emerald-600 hover:underline">
              {siteEmail}
            </a>
            . We will respond within 30 days.
          </p>
        </PolicySection>

        {/* Section 10 - Medical Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-8">
          <h2 className="text-xl font-bold text-amber-800 mb-3">
            10. Medical Disclaimer
          </h2>
          <p className="text-amber-900 leading-relaxed">
            The content on WellFitLife is provided for <strong>informational and educational purposes only</strong>.
            It is not intended as medical advice and should not replace consultation with a qualified healthcare
            professional. Always consult your doctor, dietitian, or fitness expert before starting any new diet,
            exercise programme, or supplement regimen, especially if you have a pre-existing medical condition.
          </p>
          <p className="mt-3 text-amber-800">
            WellFitLife is not responsible for any health decisions made based on the content published on this website.
          </p>
        </div>

        {/* Section 11 */}
        <PolicySection number="11" title="Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
            reasons. When we do, we will update the "Last updated" date at the top of this page. We encourage you
            to review this page periodically.
          </p>
        </PolicySection>

        {/* Section 12 */}
        <PolicySection number="12" title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy or how we handle your data, please contact us:
          </p>
          <div className="mt-4 bg-gray-50 rounded-xl p-5 text-gray-700 space-y-2">
            <p><strong>Website:</strong> WellFitLife</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteEmail}`} className="text-emerald-600 hover:underline">
                {siteEmail}
              </a>
            </p>
            <p>
              <strong>Contact Form:</strong>{" "}
              <Link to="/contact" className="text-emerald-600 hover:underline">
                wellfitlife.in/contact
              </Link>
            </p>
          </div>
        </PolicySection>

      </section>
    </div>
  );
}

/* Reusable section component */
function PolicySection({ number, title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#1E293B] mb-4 flex items-start gap-2">
        <span className="text-emerald-600">{number}.</span>
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
