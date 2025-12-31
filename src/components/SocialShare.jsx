/**
 * =====================================================
 * Social Share Buttons Component
 * =====================================================
 *
 * Provides share buttons for blog posts
 * Supports: WhatsApp, Twitter, Facebook, Copy Link
 */

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { FaWhatsapp, FaTwitter, FaFacebook, FaLink } from 'react-icons/fa';

export default function SocialShare({ url, title, description }) {
  const [copied, setCopied] = useState(false);

  // Encode URL and text for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  // Share URLs
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  // Copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
          <Share2 size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
      </div>

      <p className="text-gray-600 text-sm mb-6">
        Found this helpful? Share it with your friends and family!
      </p>

      <div className="flex flex-wrap gap-3">
        {/* WhatsApp */}
        <a
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <FaWhatsapp size={20} />
          <span className="text-sm">WhatsApp</span>
        </a>

        {/* Twitter */}
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#1DA1F2] hover:bg-[#1A8CD8] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <FaTwitter size={20} />
          <span className="text-sm">Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-[#1877F2] hover:bg-[#145DBF] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <FaFacebook size={20} />
          <span className="text-sm">Facebook</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
            copied
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
        >
          {copied ? <Check size={20} /> : <FaLink size={20} />}
          <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
}
