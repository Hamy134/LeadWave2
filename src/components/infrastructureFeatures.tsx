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
    <div className="container-responsive">
      <ScrollAnimation animation="slideUp">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Our Infrastructure</h2>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {infrastructureFeatures.map(({ icon: Icon, title, description }) => (
          <ScrollAnimation key={title} animation="slideUp" delay={50}>
            <div
              className="flex flex-col bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm
                group cursor-pointer text-center
                hover:shadow-xl hover:scale-[1.05] hover:ring-4 hover:ring-blue-300/50
                transition-transform transition-shadow duration-300
                min-h-[240px] md:min-h-[260px] touch-target"
            >
              <div
                className="mx-auto mb-6 w-16 h-16 rounded-full bg-white bg-opacity-30 backdrop-blur-md
                  shadow-lg flex items-center justify-center
                  transition-transform duration-700 ease-in-out
                  group-hover:rotate-12 group-hover:scale-110"
              >
                <Icon className="text-blue-600 w-8 h-8 drop-shadow-md" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 flex-grow leading-relaxed">{description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  </section>
);
