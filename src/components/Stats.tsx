import React from 'react';
import { ScrollAnimation } from './ScrollAnimation';

const stats = [
  { number: "2.5M+", label: "Qualified Leads Generated" },
  { number: "15K+", label: "Booked Calls Created" },
  { number: "73%", label: "Average Open Rate" },
  { number: "3x", label: "Increase in Conversions" }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results That <span className="underline-animation">Drive Revenue</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of sales teams generating qualified leads and booking more calls with AI
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};