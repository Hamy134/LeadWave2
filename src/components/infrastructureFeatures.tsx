import React from "react";
import { Mail, Repeat, CheckCircle, BarChart2 } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const infrastructureFeatures = [
  {
    icon: Mail,
    title: "Automated Inbox Warmup",
    description: "Smartly warms new mailboxes to boost your sender reputation fast.",
  },
  {
    icon: Repeat,
    title: "Mailbox Pooling",
    description: "Effortlessly manage up to 100 mailboxes in one unified campaign.",
  },
  {
    icon: CheckCircle,
    title: "Real-Time Email Validation",
    description: "Instantly weed out invalid addresses to keep bounce rates low.",
  },
  {
    icon: BarChart2,
    title: "Deliverability Insights",
    description: "Continuous feedback to keep your emails landing in inboxes.",
  },
];

export const Infrastructure: React.FC = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <ScrollAnimation animation="slideUp">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          Our Infrastructure
        </h2>
      </ScrollAnimation>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {infrastructureFeatures.map(({ icon: Icon, title, description }, index) => (
          <ScrollAnimation key={title} animation="slideUp" delay={index * 100}>
            <div
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg 
              border border-gray-100 min-h-[260px] flex flex-col items-start
              transition-all duration-500 hover:-translate-y-2 hover:rotate-1
              hover:shadow-blue-200 hover:shadow-2xl hover:scale-105 transform"
            >
              <div
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center
                mb-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110
                animate-glow-pulse"
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);
