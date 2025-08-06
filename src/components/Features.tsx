import React from 'react';
import { Users, TrendingUp, Zap, Clock } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const features = [
  {
    icon: Users,
    title: "Qualified Lead Generation",
    description: "Advanced prospect scraping finds your ideal customers and increases booked calls through deep research and targeting."
  },
  {
    icon: TrendingUp,
    title: "Higher Email Performance",
    description: "Achieve 3x better open rates and 5x more replies with hyper-personalized emails that resonate with your prospects."
  },
  {
    icon: Zap,
    title: "Fully Automated System",
    description: "Set it and forget it. Our AI handles research, writing, sending, and follow-ups while you focus on closing deals."
  },
  {
    icon: Clock,
    title: "Save Time & Money",
    description: "Replace expensive SDR teams and time-consuming manual outreach with our cost-effective AI solution."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600 underline-animation">LeadGen AI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your <span className="font-semibold text-gray-900 underline-animation">top-of-funnel</span> with AI that delivers qualified leads and booked calls on autopilot.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};