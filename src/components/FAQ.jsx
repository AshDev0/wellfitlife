/**
 * =====================================================
 * FAQ Section Component
 * =====================================================
 *
 * Accordion-style FAQ section for Home page
 * Features expandable questions with smooth animations
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Can I lose weight without going to the gym?",
    answer: "Absolutely! Weight loss primarily depends on creating a calorie deficit through proper diet. Home workouts, walking, and staying active throughout the day can be just as effective. Our blog covers simple home workout routines and diet plans that don't require any gym equipment."
  },
  {
    question: "What kind of diet is best for fat loss?",
    answer: "A balanced, calorie-controlled diet rich in protein, complex carbs, and healthy fats works best. We focus on Indian meal plans using home ingredients - dal, rice, roti, vegetables, eggs, chicken, and paneer. The key is portion control and consistency, not extreme restrictions."
  },
  {
    question: "How long will it take to see results?",
    answer: "Most people start noticing changes within 2-4 weeks of consistent effort. However, sustainable fat loss happens at 0.5-1 kg per week. Remember, fitness is a journey, not a race. Focus on building healthy habits that last a lifetime."
  },
  {
    question: "Do I need to take supplements or protein powder?",
    answer: "Not necessarily! You can meet all your nutritional needs through whole foods. Supplements are optional and should only be considered if you struggle to meet protein requirements through diet alone. We recommend focusing on real food first."
  },
  {
    question: "Can beginners follow your workout and diet advice?",
    answer: "Yes! All our content is beginner-friendly. We explain everything in simple terms, provide step-by-step guidance, and focus on sustainable habits. Whether you're just starting out or have some experience, our blog has something for everyone."
  },
  {
    question: "Is this only for weight loss or muscle gain too?",
    answer: "We cover both! While many articles focus on fat loss and healthy living, we also provide guidance on building muscle, gaining strength, and improving overall fitness. Our approach is holistic - focusing on complete wellness, not just one goal."
  },
  {
    question: "Are the meal plans suitable for vegetarians?",
    answer: "Absolutely! Most of our meal ideas include both vegetarian and non-vegetarian options. Indian cuisine offers incredible variety for vegetarians with dal, paneer, tofu, chickpeas, and more. We ensure all diet plans are inclusive and flexible."
  },
  {
    question: "How can I stay motivated on my fitness journey?",
    answer: "Set realistic goals, track your progress, celebrate small wins, and remember why you started. Consistency beats perfection. Our blog provides not just workout and diet tips, but also mindset strategies to keep you motivated throughout your journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers! Here are some common questions about fitness, diet, and wellness.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore Our Blog
          </a>
        </div>

      </div>
    </section>
  );
}
