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
  TrendingUp,
  Eye,
  MessageSquare,
  Workflow,
  BarChart3,
  Globe,
  User,
  Building,
  FileText,
  Send,
  Activity
} from 'lucide-react';

const workflowStages = [
  {
    id: 1,
    title: "Understand the Objective",
    subtitle: "Mission Control",
    description: "Define strategy, goals, and ideal customer profile",
    icon: Target,
    color: "hsl(var(--primary))",
    bgGradient: "from-primary/20 to-primary/5",
    type: "foundation",
    details: [
      { label: "Target", value: "SaaS Founders", icon: Users },
      { label: "Goal", value: "Book 10 calls/week", icon: TrendingUp },
      { label: "ICP", value: "2-20 person teams", icon: Building }
    ]
  },
  {
    id: 2,
    title: "Build the Model",
    subtitle: "Intelligence Engine",
    description: "Multi-stage AI system for data collection and personalization",
    icon: Brain,
    color: "hsl(var(--accent))",
    bgGradient: "from-accent/20 to-accent/5",
    type: "process",
    subStages: [
      {
        id: "2.1",
        title: "Collect Leads",
        description: "Scrape and aggregate prospect data from multiple sources",
        icon: Database,
        color: "text-green-500",
        sources: [
          { name: "LinkedIn", icon: Users, active: true },
          { name: "Apollo", icon: Globe, active: true },
          { name: "Websites", icon: Globe, active: false },
          { name: "Social Media", icon: MessageSquare, active: false }
        ]
      },
      {
        id: "2.2", 
        title: "Research Prospects",
        description: "AI analyzes profiles and identifies personalization angles",
        icon: Search,
        color: "text-purple-500",
        insights: [
          "Posted about hiring SDRs last week",
          "Company raised $2M Series A",
          "Pain point: Manual outreach scaling",
          "Best contact time: Tuesday 10AM"
        ]
      },
      {
        id: "2.3",
        title: "Personalize Emails", 
        description: "Generate hyper-personalized cold emails",
        icon: FileText,
        color: "text-orange-500",
        emails: [
          "Saw you're scaling your SDR team...",
          "Congrats on the Series A! Growing pains with outreach?",
          "Your recent post about manual processes resonated..."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Launch Campaign & Book Calls",
    subtitle: "Conversion Engine", 
    description: "Deploy campaigns and convert responses to qualified meetings",
    icon: Zap,
    color: "hsl(var(--success))",
    bgGradient: "from-success/20 to-success/5",
    type: "outcome",
    metrics: [
      { label: "Emails Sent", value: "1,247", icon: Send },
      { label: "Open Rate", value: "73%", icon: Eye },
      { label: "Reply Rate", value: "23%", icon: MessageSquare },
      { label: "Calls Booked", value: "47", icon: Calendar }
    ]
  }
];

export const ProcessVisualization = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeSubStage, setActiveSubStage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      
      // Auto-progress through stages
      const stageInterval = setInterval(() => {
        setActiveStage((prev) => {
          const next = (prev + 1) % workflowStages.length;
          if (next === 1) { // Reset sub-stage when returning to stage 2
            setActiveSubStage(0);
          }
          return next;
        });
      }, 4000);

      // Auto-progress through sub-stages when in stage 2
      const subStageInterval = setInterval(() => {
        if (activeStage === 1) { // Build the Model stage
          setActiveSubStage((prev) => (prev + 1) % 3);
        }
      }, 2000);
      
      return () => {
        clearInterval(stageInterval);
        clearInterval(subStageInterval);
      };
    }
  }, [inView, activeStage]);

  const renderFoundationStage = (stage: typeof workflowStages[0], isActive: boolean) => {
    const Icon = stage.icon;
    
    return (
      <motion.div
        className={`relative group cursor-pointer`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? (isActive ? 1.05 : 1) : 0.9,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onHoverStart={() => setHoveredStage(stage.id)}
        onHoverEnd={() => setHoveredStage(null)}
        onClick={() => setActiveStage(0)}
      >
        {/* Mission Control Core */}
        <div className={`
          relative p-8 rounded-3xl bg-gradient-to-br ${stage.bgGradient} 
          border-2 transition-all duration-500
          ${isActive ? 'border-primary shadow-2xl shadow-primary/20 animate-pulse-subtle' : 'border-primary/20'}
          ${hoveredStage === stage.id ? 'shadow-glow transform scale-102' : ''}
        `}>
          <div className="text-center space-y-6">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-2xl
              bg-gradient-to-br from-primary to-primary/80 text-white
              ${isActive ? 'animate-glow-pulse shadow-lg shadow-primary/50' : ''}
            `}>
              <Icon className="w-10 h-10" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{stage.subtitle}</p>
              <p className="text-muted-foreground">{stage.description}</p>
            </div>

            {/* Strategy Details */}
            <AnimatePresence>
              {isActive && stage.details && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  {stage.details.map((detail, index) => {
                    const DetailIcon = detail.icon;
                    return (
                      <motion.div
                        key={detail.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-4 text-center group hover:shadow-glow transition-all duration-300"
                      >
                        <DetailIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-xs font-semibold text-primary">{detail.label}</div>
                        <div className="text-sm text-foreground">{detail.value}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Connection Flow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent" />
          <ArrowRight className="w-6 h-6 text-primary rotate-90 -mt-2" />
        </motion.div>
      </motion.div>
    );
  };

  const renderProcessStage = (stage: typeof workflowStages[1], isActive: boolean) => {
    const Icon = stage.icon;
    
    return (
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : 50,
          scale: isActive ? 1.02 : 1
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onHoverStart={() => setHoveredStage(stage.id)}
        onHoverEnd={() => setHoveredStage(null)}
        onClick={() => setActiveStage(1)}
      >
        {/* Intelligence Engine Core */}
        <div className={`
          relative p-8 rounded-3xl bg-gradient-to-br ${stage.bgGradient}
          border-2 transition-all duration-500
          ${isActive ? 'border-accent shadow-2xl shadow-accent/20' : 'border-accent/20'}
          ${hoveredStage === stage.id ? 'shadow-glow transform scale-102' : ''}
        `}>
          <div className="text-center mb-8">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-2xl
              bg-gradient-to-br from-accent to-accent/80 text-white
              ${isActive ? 'animate-glow-pulse shadow-lg shadow-accent/50' : ''}
            `}>
              <Icon className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold mt-4 mb-2">{stage.title}</h3>
            <p className="text-sm text-accent font-semibold mb-3">{stage.subtitle}</p>
            <p className="text-muted-foreground">{stage.description}</p>
          </div>

          {/* Sub-stages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stage.subStages?.map((subStage, index) => {
              const SubIcon = subStage.icon;
              const isSubActive = isActive && activeSubStage === index;
              
              return (
                <motion.div
                  key={subStage.id}
                  className={`
                    relative p-6 rounded-2xl glass-card cursor-pointer
                    transition-all duration-500 group
                    ${isSubActive ? 'shadow-glow border-2 border-primary/50 scale-105' : 'hover:shadow-md hover:scale-102'}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ delay: 0.6 + (index * 0.2) }}
                  onClick={() => setActiveSubStage(index)}
                >
                  <div className="text-center space-y-4">
                    <div className={`
                      inline-flex items-center justify-center w-12 h-12 rounded-xl
                      bg-gradient-to-br from-primary/20 to-primary/10
                      ${isSubActive ? 'animate-bounce-subtle bg-primary text-white' : ''}
                    `}>
                      <SubIcon className={`w-6 h-6 ${isSubActive ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-lg mb-2">{subStage.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{subStage.description}</p>
                    </div>

                    {/* Dynamic Content */}
                    <AnimatePresence mode="wait">
                      {isSubActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3"
                        >
                          {/* Sources for Collect Leads */}
                          {subStage.sources && (
                            <div className="space-y-2">
                              {subStage.sources.map((source, idx) => {
                                const SourceIcon = source.icon;
                                return (
                                  <motion.div
                                    key={source.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`
                                      flex items-center space-x-2 p-2 rounded-lg
                                      ${source.active ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}
                                    `}
                                  >
                                    <SourceIcon className="w-4 h-4" />
                                    <span className="text-sm">{source.name}</span>
                                    {source.active && <Activity className="w-3 h-3 animate-pulse" />}
                                  </motion.div>
                                );
                              })}
                            </div>
                          )}

                          {/* Insights for Research */}
                          {subStage.insights && (
                            <div className="space-y-2">
                              {subStage.insights.map((insight, idx) => (
                                <motion.div
                                  key={insight}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.15 }}
                                  className="p-2 bg-primary/5 rounded-lg text-xs text-foreground/80 border-l-2 border-primary"
                                >
                                  "{insight}"
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {/* Emails for Personalization */}
                          {subStage.emails && (
                            <div className="space-y-2">
                              {subStage.emails.map((email, idx) => (
                                <motion.div
                                  key={email}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.2 }}
                                  className="p-3 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-lg text-sm border border-orange-500/20"
                                >
                                  <FileText className="w-4 h-4 text-orange-500 mb-1" />
                                  "{email}"
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Connection Flow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
          <ArrowRight className="w-6 h-6 text-accent rotate-90 -mt-2" />
        </motion.div>
      </motion.div>
    );
  };

  const renderOutcomeStage = (stage: typeof workflowStages[2], isActive: boolean) => {
    const Icon = stage.icon;
    
    return (
      <motion.div
        className="relative group cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? (isActive ? 1.05 : 1) : 0.9,
        }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onHoverStart={() => setHoveredStage(stage.id)}
        onHoverEnd={() => setHoveredStage(null)}
        onClick={() => setActiveStage(2)}
      >
        {/* Conversion Engine */}
        <div className={`
          relative p-8 rounded-3xl bg-gradient-to-br ${stage.bgGradient}
          border-2 transition-all duration-500
          ${isActive ? 'border-success shadow-2xl shadow-success/20 animate-pulse-subtle' : 'border-success/20'}
          ${hoveredStage === stage.id ? 'shadow-glow transform scale-102' : ''}
        `}>
          <div className="text-center space-y-6">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-2xl
              bg-gradient-to-br from-success to-success/80 text-white
              ${isActive ? 'animate-glow-pulse shadow-lg shadow-success/50' : ''}
            `}>
              <Icon className="w-10 h-10" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
              <p className="text-sm text-success font-semibold mb-3">{stage.subtitle}</p>
              <p className="text-muted-foreground">{stage.description}</p>
            </div>

            {/* Live Metrics */}
            <AnimatePresence>
              {isActive && stage.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4"
                >
                  {stage.metrics.map((metric, index) => {
                    const MetricIcon = metric.icon;
                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-4 text-center group hover:shadow-glow transition-all duration-300"
                      >
                        <MetricIcon className="w-6 h-6 text-success mx-auto mb-2" />
                        <div className="text-xl font-bold text-success">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={ref} className="relative min-h-screen py-20">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
          {/* Animated Connection Lines */}
          <motion.path
            d="M600 100 Q300 200 600 300 Q900 400 600 500 Q300 600 600 700"
            stroke="url(#workflowGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 0.6 : 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Neural Network Nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + (i * 80)}
              cy={150 + Math.sin(i) * 100}
              r="4"
              fill="hsl(var(--primary))"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 0.4 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
          
          <defs>
            <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Workflow Container */}
      <div className="relative z-10 container mx-auto px-4 space-y-32">
        {/* Stage 1: Foundation */}
        {renderFoundationStage(workflowStages[0], activeStage === 0)}
        
        {/* Stage 2: Process Engine */}
        {renderProcessStage(workflowStages[1], activeStage === 1)}
        
        {/* Stage 3: Outcome Engine */}
        {renderOutcomeStage(workflowStages[2], activeStage === 2)}
      </div>

      {/* Stage Navigation */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
        transition={{ delay: 1.5 }}
      >
        {workflowStages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => setActiveStage(index)}
            className={`
              block w-4 h-4 rounded-full transition-all duration-300
              ${activeStage === index 
                ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
              }
            `}
            title={stage.title}
          />
        ))}
      </motion.div>
    </div>
  );
};