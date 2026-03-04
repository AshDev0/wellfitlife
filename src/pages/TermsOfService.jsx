/**
 * =====================================================
 * WellFitLife - Terms of Service Page
 * =====================================================
 *
 * Required for Google AdSense application.
 * Covers: acceptable use, IP, disclaimers, liability.
 */

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  const lastUpdated = "March 4, 2026";
  const siteEmail = "contact@wellfitlife.in";
  const siteUrl = "https://wellfitlife.in";

  return (
    <div className="bg-white text-[#1E293B]">
      <Helmet>
        <title>Terms of Service | WellFitLife</title>
        <meta
          name="description"
          content="Read WellFitLife's Terms of Service to understand the rules and guidelines for using our website."
        />
        <link rel="canonical" href={`${siteUrl}/terms-of-service`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* ================= PAGE HEADER ================= */}
      <section className="relative text-center pt-28 pb-16 overflow-hidden">
        <div className="absolute -top-32 left-0 w-md h-112 bg-emerald-600/20 blur-[150px]"></div>
        <div className="absolute -bottom-20 right-0 w-100 h-100 bg-cyan-500/20 blur-[150px]"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold relative z-10">
          Terms of <span className="text-emerald-600">Service</span>
        </h1>
        <p className="text-gray-500 mt-3 relative z-10 text-sm">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">

        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>WellFitLife</strong> (<a href={siteUrl} className="text-emerald-600 hover:underline">{siteUrl}</a>).
            By accessing or using our website, you agree to be bound by these Terms of Service.
            Please read them carefully. If you do not agree with any part of these terms,
            please do not use our website.
          </p>
        </div>

        <TosSection number="1" title="Acceptance of Terms">
          <p>
            By visiting WellFitLife, you confirm that you are at least 13 years old and agree to comply
            with these Terms of Service. We reserve the right to update these terms at any time. Continued
            use of the website after changes constitutes acceptance of the updated terms.
          </p>
        </TosSection>

        <TosSection number="2" title="Use of Website">
          <p>You may use WellFitLife for personal, non-commercial purposes only. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>Copy, reproduce, or republish any content from this website without written permission</li>
            <li>Use our content for commercial purposes without explicit authorisation</li>
            <li>Attempt to gain unauthorised access to any part of our website or servers</li>
            <li>Use automated tools (bots, scrapers) to collect data from our website</li>
            <li>Post or transmit any harmful, offensive, or unlawful content</li>
            <li>Engage in any activity that disrupts the normal functioning of the website</li>
          </ul>
        </TosSection>

        <TosSection number="3" title="Intellectual Property">
          <p>
            All content on WellFitLife — including articles, blog posts, images, graphics, logos, and
            website design — is the intellectual property of WellFitLife and is protected by applicable
            copyright and intellectual property laws.
          </p>
          <p className="mt-3">
            You may share links to our content and quote brief excerpts for non-commercial purposes,
            provided you give clear credit to WellFitLife and include a link back to the original article.
            Full reproduction of our articles without permission is strictly prohibited.
          </p>
        </TosSection>

        <TosSection number="4" title="Medical & Health Disclaimer">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-900 leading-relaxed">
              The content published on WellFitLife is for <strong>informational and educational purposes only</strong>.
              It is <strong>not</strong> intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <ul className="mt-3 space-y-2 text-amber-800">
              <li>• Always seek the advice of your physician or qualified health provider before starting any diet,
                exercise programme, or supplement</li>
              <li>• Never disregard professional medical advice because of something you read on this website</li>
              <li>• Individual results vary — content on this site does not guarantee specific outcomes</li>
              <li>• If you have a pre-existing medical condition (diabetes, thyroid, PCOS, heart disease, etc.),
                consult your doctor before making any lifestyle changes</li>
            </ul>
            <p className="mt-3 text-amber-800">
              WellFitLife is not responsible for any health decisions made based on information from this website.
            </p>
          </div>
        </TosSection>

        <TosSection number="5" title="Accuracy of Information">
          <p>
            We make every effort to ensure the information on WellFitLife is accurate, up to date, and based
            on credible sources. However, health and fitness science evolves rapidly. We cannot guarantee
            that all content is completely accurate, complete, or current at all times.
          </p>
          <p className="mt-3">
            If you notice any inaccurate information, please contact us at{" "}
            <a href={`mailto:${siteEmail}`} className="text-emerald-600 hover:underline">
              {siteEmail}
            </a>{" "}
            and we will review it promptly.
          </p>
        </TosSection>

        <TosSection number="6" title="Third-Party Links">
          <p>
            Our website may contain links to external websites for reference or additional reading.
            These links are provided for convenience only. WellFitLife does not endorse, control, or take
            responsibility for the content, privacy policies, or practices of any third-party websites.
            We encourage you to review the terms and privacy policies of any external site you visit.
          </p>
        </TosSection>

        <TosSection number="7" title="Advertising & Affiliate Links">
          <p>
            WellFitLife may display advertisements through third-party advertising networks including
            Google AdSense. These advertisers may use cookies to serve relevant ads based on your browsing
            activity. We are not responsible for the content of any advertisement.
          </p>
          <p className="mt-3">
            Some articles may contain affiliate links — if you purchase a product through such a link,
            we may earn a small commission at no extra cost to you. All affiliate relationships will be
            disclosed where applicable.
          </p>
        </TosSection>

        <TosSection number="8" title="Limitation of Liability">
          <p>
            To the fullest extent permitted by law, WellFitLife and its operators shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
            <li>Any direct, indirect, incidental, or consequential damages arising from your use of the website</li>
            <li>Any health outcomes resulting from following advice on this website</li>
            <li>Any loss of data, revenue, or profits resulting from use or inability to use the website</li>
            <li>Any errors, inaccuracies, or omissions in the content</li>
          </ul>
        </TosSection>

        <TosSection number="9" title="User-Submitted Content">
          <p>
            If you submit any content to us (via contact form, newsletter, or any other method), you grant
            WellFitLife a non-exclusive, royalty-free licence to use, reproduce, and publish that content
            for operational purposes. You represent that you own the rights to any content you submit and
            that it does not violate any third-party rights.
          </p>
        </TosSection>

        <TosSection number="10" title="Privacy">
          <p>
            Your use of WellFitLife is also governed by our{" "}
            <Link to="/privacy-policy" className="text-emerald-600 hover:underline font-medium">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms of Service by reference. Please review it to
            understand how we collect and use your information.
          </p>
        </TosSection>

        <TosSection number="11" title="Governing Law">
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of India,
            including the Information Technology Act, 2000. Any disputes arising from use of this website
            shall be subject to the jurisdiction of courts in India.
          </p>
        </TosSection>

        <TosSection number="12" title="Changes to These Terms">
          <p>
            We may update these Terms of Service from time to time. When changes are made, we will update
            the "Last updated" date at the top of this page. Your continued use of the website after any
            changes constitutes acceptance of the new terms.
          </p>
        </TosSection>

        <TosSection number="13" title="Contact Us">
          <p>
            If you have any questions about these Terms of Service, please contact us:
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
        </TosSection>

      </section>
    </div>
  );
}

function TosSection({ number, title, children }) {
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
