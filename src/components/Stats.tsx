import React from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import { CountUpAnimation } from './CountUpAnimation'; // make sure this is imported

const stats = [
  { number: "194K+", label: "Average Leads Generated" },
  { number: "3K+", label: "Average Calls Created" },
  { number: "62%", label: "Average Open Rate" },
  { number: "41%", label: "Average Reply Rate" }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Can You Expect From <span className="underline-animation">Countwave</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of sales teams generating qualified leads and booking more calls with AI
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
              <div className="text-center group transform transition-all duration-300 hover:scale-110">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUpAnimation 
                    end={parseInt(stat.number)} 
                    suffix={stat.number.replace(/[0-9]/g, '')} 
                    duration={2000 + index * 200}
                  />
                </div>
                <div className="text-purple-100 font-medium transition-colors duration-300 group-hover:text-white">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
