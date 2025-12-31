/**
 * =====================================================
 * Loading Skeleton Component
 * =====================================================
 *
 * Provides a placeholder UI while content is loading.
 * Improves perceived performance and user experience.
 *
 * Usage:
 *   <LoadingSkeleton type="card" count={3} />
 *   <LoadingSkeleton type="text" />
 */

export default function LoadingSkeleton({ type = "card", count = 1 }) {
  // Blog Card Skeleton
  const CardSkeleton = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 animate-pulse">
      <div className="h-56 bg-gray-200"></div>
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );

  // Text Skeleton
  const TextSkeleton = () => (
    <div className="animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-11/12"></div>
      <div className="h-4 bg-gray-200 rounded w-10/12"></div>
      <div className="h-4 bg-gray-200 rounded w-9/12"></div>
    </div>
  );

  // Page Skeleton
  const PageSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-96 bg-gray-200 rounded-b-3xl mb-8"></div>
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return Array(count).fill(0).map((_, i) => <CardSkeleton key={i} />);
      case "text":
        return <TextSkeleton />;
      case "page":
        return <PageSkeleton />;
      default:
        return <CardSkeleton />;
    }
  };

  return (
    <div className={type === "card" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-10" : ""}>
      {renderSkeleton()}
    </div>
  );
}
