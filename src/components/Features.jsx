// src/components/Features.jsx
import { Dumbbell, Apple, Brain, TrendingUp, Heart, Users, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dumbbell size={40} />,
      title: "Workout Plans",
      description: "Customized routines for all fitness levels - from beginner to advanced",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Apple size={40} />,
      title: "Nutrition Guide",
      description: "Healthy meal plans, recipes, and diet tips for your goals",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Brain size={40} />,
      title: "Mental Wellness",
      description: "Meditation, stress management, and mindfulness practices",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Track Progress",
      description: "BMI calculator, calorie counter, and fitness trackers",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Heart size={40} />,
      title: "Heart Health",
      description: "Cardio workouts and heart-healthy lifestyle tips",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Users size={40} />,
      title: "Community",
      description: "Join our fitness community and share your journey",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for
              <span className="text-emerald-600"> Complete Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources to help you achieve your health and fitness goals
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-primary-green font-semibold group-hover:gap-2 transition-all">
                Learn More 
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;