// HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from "../../public/images/hero-fitness-girl.webp";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none hidden md:block">
        <div className="absolute top-10 left-20 text-[200px] text-emerald-400">💪</div>
        <div className="absolute bottom-20 left-40 text-[150px] text-teal-400">🏋️</div>
        <div className="absolute top-40 right-[45%] text-[180px] text-cyan-400 rotate-12">⚖️</div>
      </div>

      {/* Mobile Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60 md:hidden pointer-events-none"></div>

      {/* Hero Background Image - Right Side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-full lg:w-3/5 xl:w-1/2 bg-contain bg-no-repeat pointer-events-none opacity-40 md:opacity-100"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'right bottom',
        }}
      >
        {/* Subtle Gradient Blend on Left Edge */}
        <div className="absolute inset-y-0 left-0 w-full md:w-32 lg:w-48 bg-gradient-to-r from-emerald-50 via-teal-50/80 to-transparent"></div>

        {/* Sparkle Elements - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-24 right-20 lg:right-24 w-3 h-3 bg-white rounded-full shadow-lg opacity-80 animate-pulse"></div>
        <div className="hidden md:block absolute top-36 right-36 lg:right-44 w-2 h-2 bg-emerald-300 rounded-full shadow-md opacity-70 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="hidden md:block absolute top-44 right-24 lg:right-28 w-2.5 h-2.5 bg-white rounded-full shadow-lg opacity-80 animate-pulse" style={{animationDelay: '0.4s'}}></div>
        <div className="hidden md:block absolute bottom-[40%] right-12 lg:right-16 w-2 h-2 bg-teal-300 rounded-full shadow-md opacity-60 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center min-h-[100vh] md:min-h-[calc(100vh-5rem)] py-20 md:py-16 lg:py-0">
        <div className="w-full lg:w-1/2 xl:w-2/5 z-10 text-center md:text-left">

          {/* Main Heading - Improved mobile sizing */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-5 md:mb-6 lg:mb-8">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Body & Mind</span>
          </h1>

          {/* Description - Better mobile readability */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 md:mb-10 font-medium">
            Achieve a healthier lifestyle with expert fitness tips, easy workouts, and balanced diets tailored for you.
          </p>

          {/* CTA Buttons - Improved mobile styling */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate('/blog')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-base font-bold rounded-xl shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => navigate('/blog')}
              className="w-full sm:w-auto px-8 py-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 text-base font-bold rounded-xl shadow-lg border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              Explore Blogs
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration - Smooth Transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,50 C360,80 720,80 1080,50 C1260,35 1440,20 1440,20 L1440,100 L0,100 Z" 
            fill="white" 
            fillOpacity="0.9"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;