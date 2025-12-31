import React from 'react';
import { Dumbbell, Apple, Heart } from 'lucide-react';

const CategoryHighlights = () => {
  const categories = [
    {
      id: 1,
      Icon: Dumbbell,
      title: "Fitness Routines",
      description: "Effective workouts tailored for all fitness levels",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      id: 2,
      Icon: Apple,
      title: "Diet Plans",
      description: "Personalized meal plans and expert nutrition guidance",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-600"
    },
    {
      id: 3,
      Icon: Heart,
      title: "Wellness Lifestyle",
      description: "Mindfulness practices for holistic well-being",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover comprehensive programs designed to transform your health journey
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const { Icon } = category;

            return (
              <div
                key={category.id}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative bg-white rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md border border-gray-100 flex items-center gap-6">

                  {/* Icon Container - Left Side */}
                  <div className="shrink-0">
                    <div className={`${category.iconBg} w-16 h-16 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
