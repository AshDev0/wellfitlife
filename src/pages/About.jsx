/* =====================================================
   WellFitLife - About Page
   Premium UI | Consistent Branding | SEO Friendly
===================================================== */

import { Helmet } from "react-helmet-async";
import hero from "../../public/images/hero-fitness-girl.webp";          // Yoga wellness image from your pack
import founderImg from "../../public/images/hero-fitness-girl.webp"; // Add your photo or placeholder

export default function About() {
  return (
    <div className="bg-white text-[#1E293B]">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About WellFitLife - Our Story, Mission & Vision</title>
        <meta name="description" content="Learn about WellFitLife - a wellness initiative helping everyday people stay fit with simple workouts, balanced Indian food habits, and a healthy mindset." />
        <meta name="keywords" content="about wellfitlife, fitness blog india, wellness initiative, healthy lifestyle mission" />
        <link rel="canonical" href="https://wellfitlife.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wellfitlife.in/about" />
        <meta property="og:title" content="About WellFitLife - Our Story, Mission & Vision" />
        <meta property="og:description" content="A wellness initiative built for everyday people — helping you stay fit with simple workouts, balanced food habits, and a healthy mindset." />
        <meta property="og:image" content="https://wellfitlife.in/images/hero-fitness-girl.webp" />
        <meta property="og:site_name" content="WellFitLife" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About WellFitLife" />
        <meta name="twitter:description" content="A wellness initiative for everyday people." />
      </Helmet>

      {/* =============== HERO SECTION =============== */}
      <section className="relative overflow-hidden text-center pt-28 pb-24">
        
        {/* Glow Background */}
        <div className="absolute -top-32 left-0 w-md h-112 bg-emerald-600/30 blur-[150px]"></div>
        <div className="absolute -bottom-20 right-0 w-100 h-100 bg-cyan-500/30 blur-[150px]"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold relative z-10">
          About <span className="text-emerald-600">WellFitLife</span>
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto relative z-10">
          A wellness initiative built for everyday people — helping you stay fit with simple workouts,
          balanced food habits, and a healthy mindset.
        </p>
      </section>


      {/* =============== STORY SECTION =============== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Our Story — Why We Started
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Not everyone needs a strict gym routine or complicated diet. Many of us just want to feel
            energetic, eat better, and move our bodies without stress. WellFitLife was created to
            make fitness <span className="font-semibold text-emerald-600">simple, practical, and enjoyable.</span>
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            We believe real transformation happens through habits — small actions every day.
            Our goal is to guide beginners with home workouts, natural meals, and mindfulness practices
            that fit into a normal lifestyle.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-white/30">
          <img src={hero} alt="Wellness Yoga" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent"></div>
        </div>
      </section>


      {/* =============== VALUES SECTION =============== */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center space-y-14">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Vision • Mission • Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-emerald-600">Vision</h3>
              <p className="mt-3 text-gray-600">
                Make fitness accessible, enjoyable & sustainable for everyone.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-cyan-500">Mission</h3>
              <p className="mt-3 text-gray-600">
                Provide simple workouts, balanced diet plans & mindful living guidance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#1E293B]">Values</h3>
              <p className="mt-3 text-gray-600">
                Consistency • Balance • Progress — not perfection.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =============== WHY WE ARE DIFFERENT =============== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center space-y-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            What Makes WellFitLife Different?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <FeatureCard 
              title="Beginner Friendly Approach"
              desc="No complicated plans. Easy routines anyone can follow."
            />

            <FeatureCard 
              title="Focus on Indian Nutrition"
              desc="Real meal ideas, affordable ingredients, no fancy rules."
            />

            <FeatureCard 
              title="Mind + Body + Lifestyle"
              desc="Fitness isn’t just workouts — it’s sleep, habits & mindset."
            />
          </div>
        </div>
      </section>


      {/* =============== FOUNDER SECTION =============== */}
      <section className="hidden py-24 bg-linear-to-br from-emerald-600/10 via-white to-cyan-500/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

          <img
            src={founderImg}
            className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg border-4 border-white"
          />

          <h2 className="text-3xl md:text-4xl font-bold">Meet the Founder</h2>
          <p className="text-xl font-semibold text-emerald-600">Ashwani Gupta</p>

          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            A Senior Developer & fitness enthusiast who believes a healthy body creates a sharper mind.
            WellFitLife was started with the purpose of sharing real, simple & practical fitness 
            knowledge for people like us — those who want to live better, not perfect.
          </p>
        </div>
      </section>


      {/* =============== CTA SECTION =============== */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-lg mx-auto">
          Explore beginner workouts, meal plans & wellness blogs crafted to help you grow step by step.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">Read Blogs</button>
          <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-500/10 transition">Get Meal Plan</button>
        </div>
      </section>
    </div>
  );
}


/* SMALL REUSABLE CARD COMPONENT */
function FeatureCard({ title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
