import { useNavigate } from 'react-router-dom';
import mealImg from "../../public/images/ctaSection.webp"; // Update if using another image

export default function MealPlanCTA() {
  const navigate = useNavigate();

  const handleDownload = () => {
    // For now, navigate to blog page
    // Later: Can add actual PDF download or email signup modal
    navigate('/blog');
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-cyan-50">

      {/* Decorative blur blobs for premium feel */}
      <div className="absolute -top-20 -left-10 w-87 h-87 bg-emerald-500/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-10 w-87 h-87 bg-cyan-500/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">

          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Discover <span className="text-emerald-600">Healthy Meal</span> Ideas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Explore our blog for simple and tasty Indian meal ideas designed for fat-loss, energy, and better digestion —
            beginner-friendly + easy to cook using home ingredients.
          </p>

          <ul className="text-gray-700 space-y-2 text-base">
            <li>✔ Veg + Non-veg variations</li>
            <li>✔ Daily calorie-balanced meals</li>
            <li>✔ Grocery list + meal prep guide</li>
          </ul>

          <button
            onClick={handleDownload}
            className="mt-4 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Explore Meal Ideas in Blog
          </button>

          {/* Future Upgrade: Email Input */}
          {/* <div className="flex gap-3 mt-4">
              <input className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#22C55E]" placeholder="Enter your email"/>
              <button className="px-6 py-3 bg-[#22C55E] text-white rounded-full font-semibold hover:bg-[#1AA24E]">Get Plan</button>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-black/10 border border-white/40">
            <img 
              src={mealImg}
              alt="Meal Prep"
              className="w-85 md:w-107 lg:w-130 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
