import { Link } from "react-router-dom";
import logo from "../../assets/logos/footer_logo.webp"; // Update if different path
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SITE_CONFIG } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">

      {/* Soft background gradient glow */}
      <div className="absolute -top-24 left-0 w-100 h-100 bg-emerald-500/20 blur-[140px]"></div>
      <div className="absolute bottom-0 -right-10 w-95 h-95 bg-cyan-500/20 blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 relative z-10">

        {/* Column 1 — Brand */}
        <div className="col-span-1">
          <img src={logo} alt="WellFitLife Logo" className="w-36 mb-5 opacity-95 mix-blend-color" />
          <p className="text-gray-300 leading-relaxed max-w-xs">
            Your companion for fitness, nutrition and wellness — 
            helping you build a healthy lifestyle, one step at a time.
          </p>

          {/* Social Icons - TEMPORARILY HIDDEN */}
          {/* Will be enabled once social media accounts are set up */}
          {false && (
          <div className="flex gap-4 mt-6">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition-all cursor-pointer"
            >
              <FaInstagram size={18}/>
            </a>
            <a
              href={SITE_CONFIG.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition-all cursor-pointer"
            >
              <FaYoutube size={18}/>
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition-all cursor-pointer"
            >
              <FaFacebookF size={18}/>
            </a>
            <a
              href={SITE_CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-emerald-600 transition-all cursor-pointer"
            >
              <FaTwitter size={18}/>
            </a>
          </div>
          )}
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-emerald-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-emerald-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-emerald-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-emerald-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 — Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/blog" className="hover:text-emerald-400 transition">
                Fitness Workouts
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-emerald-400 transition">
                Diet & Nutrition
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-emerald-400 transition">
                Wellness & Yoga
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-emerald-400 transition">
                Healthy Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 — Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Join Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Get weekly tips, diet plans & workout guides directly to your inbox.
          </p>

          <div className="flex items-stretch bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 bg-transparent px-4 py-3 outline-none text-gray-200 placeholder-gray-400 focus:outline-none min-w-0"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 font-semibold text-sm transition-all duration-300 whitespace-nowrap shrink-0">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-14 text-center text-gray-400 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} <span className="text-white">WellFitLife</span>. All Rights Reserved.
      </div>

    </footer>
  );
}
