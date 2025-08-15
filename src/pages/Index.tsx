import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Target,
  Zap,
  TrendingUp,
  Users,
  Calendar,
  Mail,
  Shield,
  Clock,
  Plus
} from 'lucide-react';
import { ScrollAnimatedSection } from '../components/ScrollAnimatedSection';
import { EmailExampleCycler } from '../components/EmailExampleCycler';
import { ProcessVisualization } from '../components/ProcessVisualization';
import { CountUpAnimation } from '../components/CountUpAnimation';
import { CalComButton } from '../components/CalComButton';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FAQ } from '../components/FAQ';
import { CallToAction } from '@/components/CallToAction';
import { Features } from '@/components/Features';
import { Stats } from '../components/Stats';
import { Infrastructure } from '@/components/infrastructureFeatures';

const benefits = [
  {
    icon: Target,
    title: "Deep Prospect Research",
    description: "AI analyzes LinkedIn profiles, company news, and social signals to find perfect personalization angles."
  },
  {
    icon: TrendingUp,
    title: "Higher Open & Reply Rates", 
    description: "Achieve 73% open rates and 23% reply rates with hyper-personalized, relevant messaging."
  },
  {
    icon: Zap,
    title: "Fully Automated Outreach",
    description: "From research to email generation to sending - everything runs on autopilot while you focus on closing deals."
  },
  {
    icon: Clock,
    title: "10x Faster Than Manual",
    description: "Generate 100 personalized emails in the time it takes to write 1 manually. Scale without hiring."
  },
  {
    icon: Shield,
    title: "Spam-Proof & Compliant",
    description: "Built-in deliverability optimization and compliance features keep your emails in the inbox."
  },
  {
    icon: Users,
    title: "Top-of-Funnel Optimization",
    description: "Focus on qualified prospects who are actually likely to buy, not just anyone with an email address."
  }
];

const stats = [
  { number: 194010, suffix: '+', label: 'Average Leads Generated' },
  { number: 3045, suffix: '+', label: ' Average Calls Booked' },
  { number: 62, suffix: '%', label: 'Average Open Rate' },
  { number: 41, suffix: '%', label: 'Average Reply Rate' }
];


const faqs = [
  {
    question: "Can I test emails before sending them?",
    answer: "Yes! Our platform includes email preview, A/B testing capabilities, and deliverability checks before any emails are sent to your prospects."
  },
  {
    question: "How do you ensure emails don't end up in spam?",
    answer: "We use advanced deliverability optimization including domain warming, content analysis, sending pattern optimization, and compliance with all major email providers' guidelines."
  },
  {
    question: "What are the daily sending limits?",
    answer: "Sending limits depend on your domain age and reputation. New domains start at 50-100 emails/day, while established domains can send 500+ emails/day safely."
  },
  {
    question: "How accurate is the prospect research?",
    answer: "Our AI research achieves 95%+ accuracy by cross-referencing multiple data sources including LinkedIn, company websites, news articles, and social media activity."
  },
  {
    question: "Do you integrate with my existing mailbox?",
    answer: "Yes, we integrate with Gmail, Outlook, and most major email providers. We can also set up dedicated sending domains for your campaigns."
  },
  {
    question: "How do you handle replies and follow-ups?",
    answer: "All replies are routed to your inbox with context. Our system can also automatically schedule follow-ups and manage conversation threads."
  },
  {
    question: "Is this actually personalized or just template-based?",
    answer: "Each email is genuinely personalized using AI research. No templates - every message is crafted specifically for that prospect based on their unique context and situation."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4" />
                  <span>AI-Powered Lead Generation</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Generate <span className="text-blue-600 underline-animation">Qualified Leads</span>
                  <span className="block">with Hyper-Personalized</span>
                  <span className="text-blue-600 block">Cold Emails</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  Our <span className="font-semibold text-gray-900 scroll-underline underline-animation">fully automated AI system</span> scrapes deep prospect data, crafts hyper-personalized emails, and delivers them at scale to <span className="font-semibold text-gray-900 scroll-underline underline-animation">boost your booked calls</span> and revenue.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CalComButton
                  variant="primary"
                  onClick={() =>
                    window.open(
                      "https://cal.com/hamish-countwave/30min?overlayCalendar=true",
                      "_blank"
                    )
                  }
                  className="btn-primary touch-target"
                >
                  Book Your Strategy Call
                </CalComButton>
              </div>
            </motion.div>

            {/* Email Example Cycler */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-lg min-h-[550px] flex items-center">
                <EmailExampleCycler />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <section className="py-16 md:py-20">
        <Infrastructure/>
      </section>


      {/* Process Section - Full Screen */}
      <section>
        <ProcessVisualization />
      </section>

      {/* FAQ Section */}
      <ScrollAnimatedSection className="py-16 md:py-20 bg-muted/30 stable-container">
            <FAQ />
      </ScrollAnimatedSection>

      <Stats/>
      <Features/>
      <CallToAction onBookCall={() => window.open('https://cal.com/hamish-countwave/30min?overlayCalendar=true', '_blank')} />

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ transform: 'translateZ(0)' }}
      >
        <CalComButton 
          className="btn-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3 touch-target"
          onClick={() => window.open('https://cal.com/hamish-countwave/30min?overlayCalendar=true', '_blank')}
        >
          Book Call
        </CalComButton>

      </motion.div>
    </div>
  );
};

export default Index;