/**
 * =====================================================
 * BlogCard Component
 * =====================================================
 *
 * Reusable blog card component with multiple variants.
 * Now includes React Router Link for proper navigation.
 *
 * Props:
 *  - image: Blog post image URL
 *  - title: Blog post title
 *  - description: Short excerpt
 *  - slug: URL-friendly identifier for routing
 *  - category: Post category (optional)
 *  - readingTime: Estimated reading time (optional)
 *  - variant: "default" | "large" | "compact"
 */

import { Link } from "react-router-dom";

export default function BlogCard({
  image,
  title,
  description,
  slug,
  category,
  readingTime,
  variant = "default"
}) {
  // Define variant-specific styles
  const variantStyles = {
    large: {
      container: "h-full",
      imageHeight: "h-80 md:h-96",
      padding: "p-8",
      titleSize: "text-2xl md:text-3xl",
      descriptionSize: "text-base",
      layout: "flex-col"
    },
    compact: {
      container: "h-full",
      imageHeight: "h-32",
      padding: "p-0",
      titleSize: "text-lg",
      descriptionSize: "text-sm",
      layout: "flex-row"
    },
    default: {
      container: "h-full",
      imageHeight: "h-48 md:h-56",
      padding: "p-5",
      titleSize: "text-xl",
      descriptionSize: "text-sm",
      layout: "flex-col"
    }
  };

  const styles = variantStyles[variant];

  // Compact variant uses horizontal layout
  if (variant === "compact") {
    return (
      <Link
        to={`/blog/${slug}`}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 cursor-pointer flex items-center gap-4 p-4 h-full transform hover:-translate-y-1 hover:scale-[1.02]"
      >
        {/* Image - Left Side */}
        <div className="relative w-32 h-32 shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 space-y-2">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
          {readingTime && (
            <p className="text-xs text-gray-500">{readingTime}</p>
          )}
        </div>
      </Link>
    );
  }

  // Large and default variants use vertical layout
  return (
    <Link
      to={`/blog/${slug}`}
      className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 cursor-pointer block transform hover:-translate-y-2 ${styles.container}`}
    >
      {/* Image */}
      <div className={`relative w-full ${styles.imageHeight} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`${styles.padding} space-y-3`}>
        {/* Meta Info */}
        {readingTime && (
          <p className="text-xs text-gray-500 font-medium">{readingTime}</p>
        )}

        <h3 className={`font-bold ${styles.titleSize} text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-snug line-clamp-2`}>
          {title}
        </h3>
        <p className={`text-gray-600 ${styles.descriptionSize} leading-relaxed line-clamp-3`}>
          {description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 group-hover:border-emerald-200 transition-colors">
          <span className="inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
            Read Article
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
