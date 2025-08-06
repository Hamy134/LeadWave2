import React from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface CallToActionProps {
  onBookCall: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onBookCall }) => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-600/10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <ScrollAnimation animation="slideUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to <span className="text-blue-400 underline-animation">10x Your Lead Generation</span>
            <span className="block">
              and Book More Calls?
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={200}>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time on manual outreach. Let our <span className="font-semibold text-white underline-animation">AI-powered system</span> generate qualified leads and book calls while you sleep.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={onBookCall}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Calendar className="w-6 h-6 text-blue-600" />
              Book Your Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={600}>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Setup in under 24 hours",
              "ROI guarantee or money back", 
              "Dedicated success manager"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};