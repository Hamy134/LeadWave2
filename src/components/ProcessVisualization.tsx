import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Database, 
  Search, 
  Brain, 
  Mail, 
  Calendar,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: "Understand the Objective",
    description: "Define your ideal customer profile and campaign goals",
    icon: Target,
    color: "text-blue-500",
    details: [
      "Target: SaaS Founders",
      "Goal: Book 10 calls/week", 
      "ICP: 2-20 person teams"
    ],
    visual: "strategy"
  },
  {
    id: 2,
    title: "Collect Leads",
    description: "Gather prospect data from multiple sources",
    icon: Database,
    color: "text-green-500",
    details: [
      "LinkedIn prospects",
      "Apollo database",
      "Company websites",
      "Social media signals"
    ],
    visual: "data-flow"
  },
  {
    id: 3,
    title: "Research Prospects",
    description: "AI analyzes each prospect for personalization opportunities",
    icon: Search,
    color: "text-purple-500",
    details: [
      "Recent activity analysis",
      "Company news & events",
      "Pain point identification",
      "Timing signals"
    ],
    visual: "research"
  },
  {
    id: 4,
    title: "Generate Personalized Emails",
    description: "AI crafts unique, relevant messages for each prospect",
    icon: Brain,
    color: "text-orange-500",
    details: [
      "Context-aware messaging",
      "Industry-specific language",
      "Personalized pain points",
      "Relevant case studies"
    ],
    visual: "generation"
  },
  {
    id: 5,
    title: "Launch & Track Campaign",
    description: "Deploy emails and monitor performance in real-time",
    icon: Mail,
    color: "text-red-500",
    details: [
      "Automated sending",
      "A/B testing",
      "Performance tracking",
      "Response monitoring"
    ],
    visual: "launch"
  },
  {
    id: 6,
    title: "Book Qualified Calls",
    description: "Convert responses into scheduled meetings",
    icon: Calendar,
    color: "text-indigo-500",
    details: [
      "Response qualification",
      "Calendar integration",
      "Meeting scheduling",
      "Follow-up automation"
    ],
    visual: "conversion"
  }
];

export const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      // Auto-progress through steps
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  const renderStepVisual = (step: typeof processSteps[0], isActive: boolean) => {
    const Icon = step.icon;
    
    return (
      <motion.div
        className={`process-step ${isActive ? 'active' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ delay: step.id * 0.2 }}
      >
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 ${isActive ? 'animate-bounce-subtle' : ''}`}>
            <Icon className={`w-8 h-8 ${step.color} ${isActive ? 'animate-glow-pulse' : ''}`} />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted-foreground mb-4">{step.description}</p>
            
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  {step.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground/80">{detail}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Connection Arrow */}
        {step.id < processSteps.length && (
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: (step.id * 0.2) + 0.5 }}
          >
            <ArrowRight className="w-6 h-6 text-primary rotate-90" />
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div ref={ref} className="relative">
      {/* Background Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 800">
          <motion.path
            d="M200 50 Q150 150 200 250 Q250 350 200 450 Q150 550 200 650 Q250 750 200 800"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isVisible ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Process Steps */}
      <div className="relative z-10 space-y-12">
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {renderStepVisual(step, activeStep === index)}
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {processSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeStep === index 
                ? 'bg-primary scale-125' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Success Metrics Overlay */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="glass-card p-6 text-center">
          <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
          <div className="text-2xl font-bold text-success">73%</div>
          <div className="text-sm text-muted-foreground">Average Open Rate</div>
        </div>
        
        <div className="glass-card p-6 text-center">
          <Users className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary">2.5M+</div>
          <div className="text-sm text-muted-foreground">Leads Generated</div>
        </div>
        
        <div className="glass-card p-6 text-center">
          <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-500">15K+</div>
          <div className="text-sm text-muted-foreground">Calls Booked</div>
        </div>
      </motion.div>
    </div>
  );
};