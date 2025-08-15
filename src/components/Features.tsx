import React from 'react';
import { Users, TrendingUp, Zap, Clock } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const features = [
  {
    icon: Users,
    title: "Qualified Lead Generation",
    description:
      "Scale outreach without losing quality. Prospect scraping finds your ideal customers and boosts booked calls through deep research and targeting."
  },
  {
    icon: TrendingUp,
    title: "Higher Email Performance",
    description:
      "Get 3× better open rates and 5× more replies with hyper-personalized emails that resonate and show real attention to detail."
  },
  {
    icon: Zap,
    title: "Fully Automated Outreach",
    description:
      "Spend almost no time writing cold emails. Our AI handles research, writing, sending, and follow-ups so you can focus on closing."
  },
  {
    icon: Clock,
    title: "Increased Efficiency",
    description:
      "We streamline processes with AI, cutting manual effort, speeding decisions, and freeing you to focus on high-value work. More done, less hassle."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Added max-width & responsive padding for breathing room */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600 underline-animation">Countwave AI</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your <span className="font-semibold text-gray-900 underline-animation">top-of-funnel</span> with AI that delivers qualified leads and booked calls on autopilot.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
              <div
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg 
                border border-gray-100 touch-target transition-all duration-500 
                hover:-translate-y-2 hover:rotate-1 hover:shadow-blue-200 hover:shadow-2xl
                hover:scale-105 transform"
              >
                <div
                  className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6
                  transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110
                  animate-bounce-subtle"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
