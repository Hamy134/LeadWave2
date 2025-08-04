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
import heroImage from '../assets/hero-bg.jpg';
import processImage from '../assets/process-visual.jpg';

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
  { number: 2500000, suffix: '+', label: 'Leads Generated' },
  { number: 15000, suffix: '+', label: 'Calls Booked' },
  { number: 73, suffix: '%', label: 'Average Open Rate' },
  { number: 23, suffix: '%', label: 'Average Reply Rate' }
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AI Email Generation"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4" />
                  <span>AI-Powered Lead Generation</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Generate 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Qualified Leads</span>
                  <br />
                  with Hyper-Personalized Cold Emails
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our AI researches your prospects, crafts personalized emails that actually get responses, 
                  and books qualified calls on autopilot. Scale your outreach 10x without hiring.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CalComButton variant="primary">
                  Book Your Strategy Call
                </CalComButton>
                <button className="btn-secondary">
                  <span>Watch Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="stat-number">
                    <CountUpAnimation end={2500} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Companies Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="stat-number">
                    <CountUpAnimation end={73} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Average Open Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Email Example Cycler */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <EmailExampleCycler />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">
                  <CountUpAnimation 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + (index * 200)}
                  />
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Benefits Section */}
      <ScrollAnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose AI-Powered 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Cold Email Generation?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop sending generic emails that get ignored. Start generating personalized messages 
              that prospects actually want to respond to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="glass-card p-8 group hover:shadow-glow transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Process Section */}
      <ScrollAnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How Our AI 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Generates Results</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              From understanding your goals to booking qualified calls - here's how our 
              AI-powered system transforms your lead generation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <img 
                src={processImage} 
                alt="Process Visualization"
                className="w-full max-w-4xl object-contain"
              />
            </div>
            <ProcessVisualization />
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* CTA Section */}
      <ScrollAnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to 10x Your Lead Generation?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join 2,500+ companies using AI to generate more qualified leads, 
                  book more calls, and close more deals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalComButton variant="primary">
                  Book Your Free Strategy Call
                </CalComButton>
                <button className="btn-secondary">
                  <Mail className="w-4 h-4" />
                  <span>See Live Demo</span>
                </button>
              </div>

              <div className="text-sm text-muted-foreground">
                ✅ No setup fees • ✅ 30-day money-back guarantee • ✅ Setup in under 24 hours
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* FAQ Section */}
      <ScrollAnimatedSection className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about AI-powered cold email generation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <Plus className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Start Generating Qualified Leads Today
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Book a 30-minute strategy call and we'll show you exactly how to 
                implement AI-powered lead generation for your business.
              </p>
            </div>

            <CalComButton className="bg-white text-primary hover:bg-white/90">
              Book Your Strategy Call Now
            </CalComButton>

            <div className="text-white/80 text-sm">
              🚀 Most clients see results within their first week
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <CalComButton className="shadow-2xl pulse-glow">
          Book Call
        </CalComButton>
      </motion.div>
    </div>
  );
};

export default Index;