/**
 * =====================================================
 * Main Layout Component
 * =====================================================
 *
 * This component wraps all pages with common UI elements:
 * - Navbar (sticky header)
 * - Main content area (using Outlet for nested routes)
 * - Footer
 *
 * Using React Router's <Outlet /> allows child routes to
 * render within this layout automatically.
 */

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Area - Child routes render here */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
