import { useEffect, useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  Target, 
  Database, 
  Search, 
  Brain, 
  Mail, 
  Calendar,
  Zap,
  Shield,
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
  Activity,
  Maximize2,
  Minimize2,
  X,
  Settings,
  Plus,
  Sparkles,
  Cpu,
  Linkedin,
  Play,
  Pause,
  RotateCcw,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  Layers,
  Filter,
  Zap as Lightning,
  Radar,
  Network,
  Atom,
  Binary,
  CircuitBoard
} from 'lucide-react';

// Enhanced mock data with more realistic content
const mockProspects = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "TechFlow Inc",
    recentActivity: "Posted about scaling sales team",
    companySize: "50-200",
    industry: "SaaS",
    location: "San Francisco, CA",
    avatar: "👩‍💼",
    linkedinActivity: "Hiring 5 new SDRs this quarter",
    painPoints: ["Manual outreach scaling", "Low response rates"],
    buyingSignals: ["Budget approved", "Actively hiring"]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Head of Growth",
    company: "ScaleUp Solutions",
    recentActivity: "Company raised $5M Series A",
    companySize: "20-50",
    industry: "FinTech",
    location: "Austin, TX",
    avatar: "👨‍💼",
    linkedinActivity: "Celebrating funding milestone",
    painPoints: ["Need to scale quickly", "Limited resources"],
    buyingSignals: ["Fresh funding", "Growth targets"]
  },
  {
    id: 3,
    name: "Emily Watson",
    title: "CEO & Founder",
    company: "StartupXYZ",
    recentActivity: "Hiring for sales positions",
    companySize: "5-20",
    industry: "E-commerce",
    location: "New York, NY",
    avatar: "👩‍💻",
    linkedinActivity: "Looking for sales automation tools",
    painPoints: ["Time-consuming manual work", "Inconsistent results"],
    buyingSignals: ["Actively searching", "Budget allocated"]
  }
];

const mockEmails = [
  {
    id: 1,
    subject: "Scaling your sales team at TechFlow?",
    preview: "Hi Sarah, I noticed you're expanding your sales team at TechFlow. We've helped similar SaaS companies reduce SDR ramp time by 60%...",
    personalization: "Based on your recent LinkedIn post about hiring SDRs",
    tone: "Professional but friendly",
    valueProp: "60% faster SDR ramp time",
    openRate: 78,
    replyRate: 24
  },
  {
    id: 2,
    subject: "Congrats on the Series A! 🎉",
    preview: "Hi Marcus, congratulations on ScaleUp's $5M Series A! As you scale, you'll need efficient lead generation...",
    personalization: "Mentioned your recent funding round",
    tone: "Celebratory and consultative",
    valueProp: "Automated prospect research",
    openRate: 82,
    replyRate: 31
  },
  {
    id: 3,
    subject: "Your hiring post caught my attention",
    preview: "Hi Emily, I saw your post about hiring sales talent. Finding the right people is tough, but what if you could 10x their productivity?",
    personalization: "Referenced your hiring announcement",
    tone: "Empathetic and helpful",
    valueProp: "10x sales productivity boost",
    openRate: 75,
    replyRate: 28
  }
];

const mockMetrics = {
  emailsSent: 1247,
  openRate: 73,
  replyRate: 23,
  callsBooked: 47,
  conversionRate: 3.8,
  avgResponseTime: "2.3 hours",
  prospectsScrapped: 15420,
  dataPoints: 847,
  aiAccuracy: 96.4
};

// Process stages with enhanced data
const processStages = [
  {
    id: 1,
    title: "Intelligence Gathering",
    subtitle: "AI-Powered Prospect Research",
    description: "Our AI system scrapes and analyzes thousands of data points to build comprehensive prospect profiles",
    icon: Radar,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-600/5",
    position: { x: 100, y: 100 },
    features: [
      { icon: Linkedin, label: "LinkedIn Analysis", status: "active" },
      { icon: Globe, label: "Company Research", status: "active" },
      { icon: Activity, label: "Social Signals", status: "processing" },
      { icon: BarChart3, label: "Market Intelligence", status: "queued" }
    ],
    metrics: {
      sources: 12,
      dataPoints: 847,
      accuracy: 96.4,
      speed: "2.3s per prospect"
    }
  },
  {
    id: 2,
    title: "Neural Processing",
    subtitle: "AI Content Generation Engine",
    description: "Advanced language models craft hyper-personalized emails that resonate with each prospect's unique situation",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/5",
    position: { x: 500, y: 80 },
    features: [
      { icon: Cpu, label: "GPT-4 Processing", status: "active" },
      { icon: Sparkles, label: "Personalization AI", status: "active" },
      { icon: FileText, label: "Content Generation", status: "active" },
      { icon: Filter, label: "Quality Filtering", status: "processing" }
    ],
    metrics: {
      emailsGenerated: 1247,
      personalizationScore: 94,
      qualityScore: 98,
      avgTime: "1.8s per email"
    }
  },
  {
    id: 3,
    title: "Precision Delivery",
    subtitle: "Smart Campaign Execution",
    description: "Intelligent sending patterns and deliverability optimization ensure your emails reach the inbox and drive responses",
    icon: Lightning,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/5",
    position: { x: 900, y: 120 },
    features: [
      { icon: Send, label: "Smart Sending", status: "active" },
      { icon: Shield, label: "Deliverability", status: "active" },
      { icon: Calendar, label: "Follow-up Automation", status: "active" },
      { icon: TrendingUp, label: "Performance Tracking", status: "monitoring" }
    ],
    metrics: {
      deliveryRate: 98.7,
      openRate: 73,
      replyRate: 23,
      callsBooked: 47
    }
  }
];

// Floating particles for background animation
const FloatingParticle = ({ delay = 0, size = 4, color = "primary" }) => (
  <motion.div
    className={`absolute w-${size} h-${size} bg-${color}/20 rounded-full`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 200 - 100],
      y: [0, Math.random() * 200 - 100]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

// Neural network connection lines
const ConnectionLine = ({ from, to, active = false, delay = 0 }) => {
  const pathRef = useRef(null);
  
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <motion.path
        ref={pathRef}
        d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${from.y - 100} ${to.x} ${to.y}`}
        stroke={active ? "url(#activeGradient)" : "url(#inactiveGradient)"}
        strokeWidth="3"
        fill="none"
        strokeDasharray="10,5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: active ? 0.8 : 0.3,
          strokeDashoffset: active ? [0, -20] : 0
        }}
        transition={{ 
          pathLength: { duration: 2, delay },
          strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
        }}
      />
      <defs>
        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// Enhanced stage card component
const ProcessStageCard = ({ stage, isActive, isVisible, onActivate, index }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [currentProspect, setCurrentProspect] = useState(0);
  const [currentEmail, setCurrentEmail] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive && isVisible) {
      controls.start("active");
      
      // Cycle through prospects for stage 1
      if (stage.id === 1) {
        const interval = setInterval(() => {
          setCurrentProspect(prev => (prev + 1) % mockProspects.length);
        }, 3000);
        return () => clearInterval(interval);
      }
      
      // Cycle through emails for stage 2
      if (stage.id === 2) {
        const interval = setInterval(() => {
          setCurrentEmail(prev => (prev + 1) % mockEmails.length);
        }, 4000);
        return () => clearInterval(interval);
      }
    }
  }, [isActive, isVisible, controls, stage.id]);

  const cardVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 20,
      filter: "blur(2px)"
    },
    active: {
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    }
  };

  const Icon = stage.icon;

  return (
    <motion.div
      className="relative group cursor-pointer"
      variants={cardVariants}
      animate={controls}
      initial="inactive"
      onClick={onActivate}
      onHoverStart={() => !isActive && controls.start("active")}
      onHoverEnd={() => !isActive && controls.start("inactive")}
      style={{ zIndex: isActive ? 10 : 5 }}
    >
      {/* Background morphing blob */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stage.bgGradient} rounded-3xl animate-morphing-blob opacity-50`} />
      
      {/* Neural network background */}
      <div className="neural-network-bg rounded-3xl" />
      
      {/* Main card */}
      <div className="process-card relative p-8 rounded-3xl transition-all duration-500 stable-container">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${stage.color} text-white shadow-lg`}>
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{stage.title}</h3>
              <p className="text-muted-foreground font-medium">{stage.subtitle}</p>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
            <span className="text-sm font-medium text-muted-foreground">
              {isActive ? 'Active' : 'Standby'}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80 mb-8 leading-relaxed">{stage.description}</p>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stage.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                className="flex items-center space-x-3 p-3 rounded-xl bg-background/50 border border-border/50 transition-all duration-300 hover:bg-background/80 hover:border-primary/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ delay: idx * 0.1 }}
                onHoverStart={() => setHoveredFeature(feature.label)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <FeatureIcon className={`w-5 h-5 ${
                  feature.status === 'active' ? 'text-green-500' :
                  feature.status === 'processing' ? 'text-yellow-500' :
                  feature.status === 'monitoring' ? 'text-blue-500' :
                  'text-gray-400'
                }`} />
                <span className="text-sm font-medium">{feature.label}</span>
                {feature.status === 'active' && (
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic content based on stage */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6"
            >
              {/* Stage 1: Prospect Research */}
              {stage.id === 1 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center space-x-2">
                    <Database className="w-5 h-5 text-primary" />
                    <span>Live Prospect Analysis</span>
                  </h4>
                  
                  <motion.div
                    key={currentProspect}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{mockProspects[currentProspect].avatar}</div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg">{mockProspects[currentProspect].name}</h5>
                        <p className="text-muted-foreground">{mockProspects[currentProspect].title} at {mockProspects[currentProspect].company}</p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Activity className="w-4 h-4 text-green-500" />
                            <span>{mockProspects[currentProspect].linkedinActivity}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {mockProspects[currentProspect].buyingSignals.map((signal, idx) => (
                              <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                {signal}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(stage.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage 2: Email Generation */}
              {stage.id === 2 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span>AI Email Generation</span>
                  </h4>
                  
                  <motion.div
                    key={currentEmail}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200"
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Subject Line:</div>
                        <div className="font-semibold">{mockEmails[currentEmail].subject}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Preview:</div>
                        <div className="text-sm leading-relaxed">{mockEmails[currentEmail].preview}</div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                        <div className="flex space-x-4 text-sm">
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4 text-blue-500" />
                            <span>{mockEmails[currentEmail].openRate}% open</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageSquare className="w-4 h-4 text-green-500" />
                            <span>{mockEmails[currentEmail].replyRate}% reply</span>
                          </span>
                        </div>
                        <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {mockEmails[currentEmail].valueProp}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Generation metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(stage.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stage 3: Campaign Results */}
              {stage.id === 3 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span>Campaign Performance</span>
                  </h4>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Delivery Rate</span>
                            <span className="text-sm font-bold text-green-600">{stage.metrics.deliveryRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-green-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${stage.metrics.deliveryRate}%` }}
                              transition={{ duration: 2, delay: 0.5 }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Open Rate</span>
                            <span className="text-sm font-bold text-blue-600">{stage.metrics.openRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-blue-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${stage.metrics.openRate}%` }}
                              transition={{ duration: 2, delay: 1 }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Reply Rate</span>
                            <span className="text-sm font-bold text-purple-600">{stage.metrics.replyRate}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div 
                              className="bg-purple-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${stage.metrics.replyRate}%` }}
                              transition={{ duration: 2, delay: 1.5 }}
                            />
                          </div>
                        </div>
                        
                        <div className="text-center p-3 bg-white rounded-lg border border-green-300">
                          <div className="text-3xl font-bold text-green-600">{stage.metrics.callsBooked}</div>
                          <div className="text-sm text-muted-foreground">Calls Booked</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles around active stage */}
      {isActive && (
        <>
          {[...Array(8)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} size={Math.random() > 0.5 ? 2 : 3} />
          ))}
        </>
      )}
    </motion.div>
  );
};

// Main component
export const ProcessVisualization = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('desktop'); // desktop, tablet, mobile
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-progress through stages
  useEffect(() => {
    if (!inView || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % processStages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [inView, isPlaying]);

  // Responsive view detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setViewMode('mobile');
      else if (width < 1024) setViewMode('tablet');
      else setViewMode('desktop');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const connections = [
    { from: { x: 400, y: 200 }, to: { x: 500, y: 180 }, active: activeStage >= 1 },
    { from: { x: 800, y: 180 }, to: { x: 900, y: 220 }, active: activeStage >= 2 }
  ];

  return (
    <div ref={ref} className="relative min-h-screen bg-gradient-to-br from-background via-muted/5 to-accent/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-foreground/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: i * 0.01, duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Floating orbs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: inView ? [0.3, 0.6, 0.3] : 0,
              scale: inView ? [1, 1.2, 1] : 0,
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Connection lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          from={connection.from}
          to={connection.to}
          active={connection.active}
          delay={index * 0.5}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How Our <span className="text-primary">AI System</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch our sophisticated AI pipeline transform raw prospect data into 
            <span className="font-semibold text-foreground"> booked sales calls</span> through 
            intelligent automation and personalization.
          </p>
        </motion.div>

        {/* Control panel */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-6 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-lg">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium transition-all hover:bg-primary/90"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {processStages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStage === index 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Monitor className="w-4 h-4" />
              <span className="capitalize">{viewMode}</span>
            </div>
          </div>
        </motion.div>

        {/* Process stages */}
        <div className={`grid gap-8 ${
          viewMode === 'mobile' ? 'grid-cols-1' : 
          viewMode === 'tablet' ? 'grid-cols-2' : 
          'grid-cols-3'
        }`}>
          {processStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 50,
                scale: inView ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.2),
                type: "spring",
                stiffness: 100
              }}
            >
              <ProcessStageCard
                stage={stage}
                isActive={activeStage === index}
                isVisible={inView}
                onActivate={() => setActiveStage(index)}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom metrics */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Prospects Analyzed", value: "15,420+", icon: Users },
              { label: "Emails Generated", value: "1,247", icon: Mail },
              { label: "Average Accuracy", value: "96.4%", icon: Target },
              { label: "Calls Booked", value: "47", icon: Calendar }
            ].map((metric, index) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                  transition={{ delay: 1.8 + (index * 0.1) }}
                >
                  <MetricIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Performance indicator */}

    </div>
  );
};