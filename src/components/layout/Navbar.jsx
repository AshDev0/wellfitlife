import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logos/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="WellFitLife Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/blog"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Read Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slideDown">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="block py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-2 rounded transition-colors"
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className="block py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-2 rounded transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className="block py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-2 rounded transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="block py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-2 rounded transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className="block mt-4 bg-emerald-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
