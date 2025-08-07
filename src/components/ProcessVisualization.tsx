import { useEffect, useState, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Target, Database, Search, Brain, Mail, Calendar, Zap, Shield, CheckCircle, ArrowRight, Users, TrendingUp, Eye, MessageSquare, Workflow, BarChart3, Globe, User, Building, FileText, Send, Activity, Maximize2, Minimize2, X, Settings, Plus, Sparkles, Cpu, Linkedin, Play, Pause, RotateCcw, Monitor, Smartphone, Tablet, Code, Layers, Filter, Zap as Lightning, Radar, Network, Atom, Binary, CircuitBoard, Info, ChevronDown, ChevronUp, Star, Flame, Rocket, Gauge, Wifi, Server, Cloud, Lock, Unlock, Timer, Crosshair, Microscope, Beaker, Lightbulb, Fingerprint, Scan, Radar as RadarIcon, Satellite, Waves, HeartPulse as Pulse, Zap as ZapIcon } from 'lucide-react';

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
    buyingSignals: ["Budget approved", "Actively hiring"],
    confidence: 94,
    lastSeen: "2 hours ago",
    engagement: "High",
    priority: "Hot Lead"
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
    buyingSignals: ["Fresh funding", "Growth targets"],
    confidence: 89,
    lastSeen: "1 hour ago",
    engagement: "Very High",
    priority: "Ultra Hot"
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
    buyingSignals: ["Actively searching", "Budget allocated"],
    confidence: 91,
    lastSeen: "30 minutes ago",
    engagement: "High",
    priority: "Hot Lead"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Director of Marketing",
    company: "GrowthCorp",
    recentActivity: "Expanding marketing team",
    companySize: "100-500",
    industry: "Marketing Tech",
    location: "Seattle, WA",
    avatar: "👨‍💻",
    linkedinActivity: "Posted about lead generation challenges",
    painPoints: ["Lead quality issues", "High CAC"],
    buyingSignals: ["Evaluating solutions", "Q1 budget available"],
    confidence: 87,
    lastSeen: "4 hours ago",
    engagement: "Medium",
    priority: "Warm Lead"
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
    replyRate: 24,
    sentiment: "Positive",
    wordCount: 127,
    readTime: "45s",
    cta: "15-minute demo",
    followUpScheduled: true
  },
  {
    id: 2,
    subject: "Congrats on the Series A! 🎉",
    preview: "Hi Marcus, congratulations on ScaleUp's $5M Series A! As you scale, you'll need efficient lead generation...",
    personalization: "Mentioned your recent funding round",
    tone: "Celebratory and consultative",
    valueProp: "Automated prospect research",
    openRate: 82,
    replyRate: 31,
    sentiment: "Very Positive",
    wordCount: 134,
    readTime: "48s",
    cta: "Strategy call",
    followUpScheduled: true
  },
  {
    id: 3,
    subject: "Your hiring post caught my attention",
    preview: "Hi Emily, I saw your post about hiring sales talent. Finding the right people is tough, but what if you could 10x their productivity?",
    personalization: "Referenced your hiring announcement",
    tone: "Empathetic and helpful",
    valueProp: "10x sales productivity boost",
    openRate: 75,
    replyRate: 28,
    sentiment: "Positive",
    wordCount: 119,
    readTime: "42s",
    cta: "Quick chat",
    followUpScheduled: false
  },
  {
    id: 4,
    subject: "Lead generation challenges at GrowthCorp?",
    preview: "Hi David, your recent post about lead quality resonated with me. We've helped marketing teams like yours improve lead quality by 3x...",
    personalization: "Referenced LinkedIn post about lead challenges",
    tone: "Understanding and solution-focused",
    valueProp: "3x better lead quality",
    openRate: 71,
    replyRate: 19,
    sentiment: "Neutral-Positive",
    wordCount: 142,
    readTime: "51s",
    cta: "Case study review",
    followUpScheduled: true
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
  aiAccuracy: 96.4,
  deliveryRate: 98.7,
  spamScore: 0.2,
  domainReputation: 95,
  engagementScore: 8.7
};

// Enhanced process stages with more interactive elements
const processStages = [
  {
    id: 1,
    title: "AI Intelligence Gathering",
    subtitle: "Neural Prospect Research Engine",
    description: "Our advanced AI system performs deep reconnaissance across 50+ data sources to build comprehensive prospect profiles with surgical precision",
    icon: Radar,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-600/5",
    position: { x: 100, y: 100 },
    features: [
      { icon: Linkedin, label: "LinkedIn Deep Scan", status: "active", description: "Analyzes posts, connections, and activity patterns" },
      { icon: Globe, label: "Company Intelligence", status: "active", description: "Scrapes company news, funding, and growth signals" },
      { icon: Activity, label: "Social Signal Analysis", status: "processing", description: "Monitors social media engagement and sentiment" },
      { icon: BarChart3, label: "Market Intelligence", status: "queued", description: "Competitive analysis and industry trends" },
      { icon: Satellite, label: "Intent Data Mining", status: "active", description: "Identifies buying intent signals across the web" },
      { icon: Fingerprint, label: "Behavioral Profiling", status: "processing", description: "Creates detailed behavioral and preference profiles" }
    ],
    metrics: {
    },
    tools: [
      { name: "Neural Network", status: "online", load: 67 },
      { name: "Data Pipeline", status: "active", load: 89 },
      { name: "ML Classifier", status: "learning", load: 45 },
      { name: "Intent Engine", status: "scanning", load: 78 }
    ]
  },
  {
    id: 2,
    title: "Quantum Content Generation",
    subtitle: "Hyper-Personalization AI Engine",
    description: "Advanced language models powered by GPT-4 and proprietary algorithms craft contextually perfect emails that resonate with each prospect's unique situation",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/5",
    position: { x: 500, y: 80 },
    features: [
      { icon: Cpu, label: "GPT-4 Turbo Processing", status: "active", description: "Advanced language understanding and generation" },
      { icon: Sparkles, label: "Personalization Engine", status: "active", description: "Creates unique angles for each prospect" },
      { icon: FileText, label: "Content Synthesis", status: "active", description: "Combines research into compelling narratives" },
      { icon: Filter, label: "Quality Assurance", status: "processing", description: "Multi-layer content validation and optimization" },
      { icon: Beaker, label: "A/B Test Generator", status: "active", description: "Creates multiple variations for testing" },
      { icon: Lightbulb, label: "Creative Ideation", status: "processing", description: "Generates unique value propositions" }
    ],
    metrics: {
      emailsGenerated: 1247,
      personalizationScore: 94,
      qualityScore: 98,
      avgTime: "0.9s per email",
      uniqueness: "99.7%",
      readability: "Grade 8"
    },
    aiModels: [
    ]
  },
  {
    id: 3,
    title: "Precision Delivery Matrix",
    subtitle: "Smart Campaign Orchestration",
    description: "Intelligent delivery system with advanced timing optimization, deliverability protection, and real-time performance monitoring ensures maximum inbox placement and response rates",
    icon: Lightning,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/10 to-emerald-600/5",
    position: { x: 900, y: 120 },
    features: [
      { icon: Send, label: "Smart Send Timing", status: "active", description: "AI-optimized send times for each prospect" },
      { icon: Shield, label: "Deliverability Shield", status: "active", description: "Advanced spam protection and reputation management" },
      { icon: Calendar, label: "Follow-up Automation", status: "active", description: "Intelligent sequence management and timing" },
      { icon: TrendingUp, label: "Performance Analytics", status: "monitoring", description: "Real-time campaign optimization" },
      { icon: Waves, label: "Engagement Tracking", status: "active", description: "Monitors opens, clicks, and responses" },
      { icon: Lock, label: "Compliance Engine", status: "active", description: "Ensures GDPR, CAN-SPAM compliance" }
    ],
    metrics: {
      deliveryRate: 98.7,
      openRate: 73,
      replyRate: 23,
      callsBooked: 47,
      spamScore: 0.2,
      reputation: 95
    },
    infrastructure: [
    ]
  }
];

// Floating particles for background animation
const FloatingParticle = ({ delay = 0, size = 4, color = "primary", duration = 4 }) => (
  <motion.div
    className={`absolute w-${size} h-${size} bg-${color}/30 rounded-full blur-sm`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.8, 0],
      scale: [0, 1.5, 0],
      x: [0, Math.random() * 400 - 200],
      y: [0, Math.random() * 400 - 200]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 3,
      ease: "easeInOut"
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }}
  />
);

// Neural network connection lines with enhanced animations
const ConnectionLine = ({ from, to, active = false, delay = 0, intensity = 1 }) => {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <motion.path
        d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${from.y - 100} ${to.x} ${to.y}`}
        stroke={active ? "url(#activeGradient)" : "url(#inactiveGradient)"}
        strokeWidth={active ? 4 : 2}
        fill="none"
        strokeDasharray="15,10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: active ? 0.9 * intensity : 0.3,
          strokeDashoffset: active ? [0, -30] : 0
        }}
        transition={{ 
          pathLength: { duration: 2.5, delay, ease: "easeInOut" },
          strokeDashoffset: { duration: 4, repeat: Infinity, ease: "linear" },
          opacity: { duration: 1, ease: "easeInOut" }
        }}
      />
      <defs>
        <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--muted-foreground))" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// Enhanced tooltip component
const InteractiveTooltip = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute z-50 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg shadow-xl whitespace-nowrap ${
              position === "top" ? "bottom-full mb-2" : "top-full mt-2"
            } left-1/2 transform -translate-x-1/2`}
          >
            {content}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 ${
              position === "top" ? "top-full -mt-1" : "bottom-full -mb-1"
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced stage card component with more interactivity
const ProcessStageCard = ({ stage, isActive, isVisible, onActivate, index }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentProspect, setCurrentProspect] = useState(0);
  const [currentEmail, setCurrentEmail] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive && isVisible) {
      controls.start("active");
      
      // Cycle through prospects for stage 1
      if (stage.id === 1) {
        const interval = setInterval(() => {
          setCurrentProspect(prev => (prev + 1) % mockProspects.length);
        }, 4000);
        return () => clearInterval(interval);
      }
      
      // Cycle through emails for stage 2
      if (stage.id === 2) {
        const interval = setInterval(() => {
          setCurrentEmail(prev => (prev + 1) % mockEmails.length);
        }, 5000);
        return () => clearInterval(interval);
      }
    }
  }, [isActive, isVisible, controls, stage.id]);

  const cardVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 20,
      filter: "blur(2px)",
      rotateX: 5
    },
    active: {
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0
    }
  };

  const Icon = stage.icon;

  return (
    <motion.div
      className="relative group cursor-pointer perspective-1000"
      variants={cardVariants}
      animate={controls}
      initial="inactive"
      onClick={onActivate}
      onHoverStart={() => !isActive && controls.start("active")}
      onHoverEnd={() => !isActive && controls.start("inactive")}
      style={{ 
        zIndex: isActive ? 10 : 5,
      }}
    >
      {/* Enhanced background with multiple layers */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stage.bgGradient} rounded-3xl animate-morphing-blob opacity-60`} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl" />
      
      {/* Neural network background with enhanced patterns */}
      <div className="neural-network-bg rounded-3xl opacity-20" />
      
      {/* Main card with fixed dimensions */}
      <div className="process-card relative p-8 rounded-3xl transition-all duration-700 stable-container h-full">
        {/* Enhanced header with more interactive elements */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <InteractiveTooltip content={`${stage.title} - Click to explore`}>
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stage.color} text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3`}>
                <Icon className="w-8 h-8" />
              </div>
            </InteractiveTooltip>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{stage.title}</h3>
              <p className="text-muted-foreground font-medium">{stage.subtitle}</p>
            </div>
          </div>
          
          {/* Enhanced status indicator with pulse animation */}
          <div className="flex items-center space-x-3">
            <InteractiveTooltip content={isActive ? 'System Active' : 'System Standby'}>
              <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50' : 'bg-gray-300'} transition-all duration-300`} />
            </InteractiveTooltip>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(!showDetails);
              }}
              className="p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-110"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Enhanced description with expandable content */}
        <div className="mb-8">
          <p className="text-foreground/80 leading-relaxed">{stage.description}</p>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-background/30 rounded-xl border border-border/30"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-primary">Processing Speed:</span>
                  <span className="ml-2">{stage.metrics.speed}</span>
                </div>
                <div>
                  <span className="font-semibold text-primary">Accuracy:</span>
                  <span className="ml-2">{stage.metrics.accuracy}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Enhanced features grid with better interactivity */}
        <div className="grid grid-cols-2 gap-3 mb-8 max-h-48">
          {stage.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <InteractiveTooltip key={feature.label} content={feature.description}>
                <motion.div
                  className="flex items-center space-x-3 p-3 rounded-xl bg-background/50 border border-border/50 transition-all duration-300 hover:bg-background/80 hover:border-primary/30 hover:scale-105 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  onHoverStart={() => setHoveredFeature(feature.label)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FeatureIcon className={`w-5 h-5 transition-all duration-300 ${
                    feature.status === 'active' ? 'text-green-500' :
                    feature.status === 'processing' ? 'text-yellow-500 animate-pulse' :
                    feature.status === 'monitoring' ? 'text-blue-500' :
                    feature.status === 'scanning' ? 'text-purple-500 animate-bounce' :
                    feature.status === 'learning' ? 'text-orange-500' :
                    'text-gray-400'
                  }`} />
                  <span className="text-sm font-medium flex-1">{feature.label}</span>
                  {feature.status === 'active' && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  )}
                  {feature.status === 'processing' && (
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                  )}
                </motion.div>
              </InteractiveTooltip>
            );
          })}
        </div>

        {/* Dynamic content section with fixed height */}
        <div className="flex-1 min-h-0">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6 h-full"
              >
                {/* Stage 1: Enhanced Prospect Research */}
                {stage.id === 1 && (
                  <div className="space-y-4 h-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <Database className="w-5 h-5 text-primary" />
                        <span>Live Prospect Analysis</span>
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-green-600 font-medium">SCANNING</span>
                      </div>
                    </div>
                    
                    <motion.div
                      key={currentProspect}
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl animate-bounce-subtle">{mockProspects[currentProspect].avatar}</div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h5 className="font-bold text-lg text-gray-900">{mockProspects[currentProspect].name}</h5>
                            <p className="text-gray-600">{mockProspects[currentProspect].title} at {mockProspects[currentProspect].company}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Activity className="w-4 h-4 text-green-500" />
                                <span className="font-medium">Recent Activity:</span>
                              </div>
                              <p className="text-gray-700 ml-6">{mockProspects[currentProspect].linkedinActivity}</p>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Target className="w-4 h-4 text-blue-500" />
                                <span className="font-medium">Confidence Score:</span>
                              </div>
                              <div className="ml-6">
                                <div className="flex items-center space-x-2">
                                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div 
                                      className="h-full bg-green-500"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${mockProspects[currentProspect].confidence}%` }}
                                      transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                  </div>
                                  <span className="text-green-600 font-bold">{mockProspects[currentProspect].confidence}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {mockProspects[currentProspect].buyingSignals.map((signal, idx) => (
                              <motion.span 
                                key={idx} 
                                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium border border-green-200"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                              >
                                {signal}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced metrics display */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(stage.metrics).slice(0, 6).map(([key, value], idx) => (
                        <InteractiveTooltip key={key} content={`${key.replace(/([A-Z])/g, ' $1')}: ${value}`}>
                          <motion.div 
                            className="text-center p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 cursor-pointer hover:scale-105"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                          >
                            <div className="text-xl font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </motion.div>
                        </InteractiveTooltip>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stage 2: Enhanced Email Generation */}
                {stage.id === 2 && (
                  <div className="space-y-4 h-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                        <span>AI Email Generation</span>
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-purple-500 animate-spin" />
                        <span className="text-xs text-purple-600 font-medium">GENERATING</span>
                      </div>
                    </div>
                    
                    <motion.div
                      key={currentEmail}
                      initial={{ opacity: 0, rotateY: 90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-purple-600 font-medium">Subject Line:</div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-xs text-gray-600">Quality Score: {mockEmails[currentEmail].openRate}%</span>
                          </div>
                        </div>
                        <div className="font-semibold text-gray-900">{mockEmails[currentEmail].subject}</div>
                        
                        <div>
                          <div className="text-sm text-purple-600 font-medium mb-1">Preview:</div>
                          <div className="text-sm leading-relaxed text-gray-700 bg-white/50 p-3 rounded-lg">
                            {mockEmails[currentEmail].preview}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-700">Tone:</span>
                            <span className="ml-2 text-gray-600">{mockEmails[currentEmail].tone}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Read Time:</span>
                            <span className="ml-2 text-gray-600">{mockEmails[currentEmail].readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                          <div className="flex space-x-4 text-sm">
                            <InteractiveTooltip content="Predicted open rate based on AI analysis">
                              <span className="flex items-center space-x-1 cursor-help">
                                <Eye className="w-4 h-4 text-blue-500" />
                                <span>{mockEmails[currentEmail].openRate}% open</span>
                              </span>
                            </InteractiveTooltip>
                            <InteractiveTooltip content="Predicted reply rate based on personalization">
                              <span className="flex items-center space-x-1 cursor-help">
                                <MessageSquare className="w-4 h-4 text-green-500" />
                                <span>{mockEmails[currentEmail].replyRate}% reply</span>
                              </span>
                            </InteractiveTooltip>
                          </div>
                          <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {mockEmails[currentEmail].valueProp}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* AI Models Status */}
                    <div className="grid grid-cols-2 gap-3">
                      {stage.aiModels?.slice(0, 4).map((model, idx) => (
                        <InteractiveTooltip key={model.name} content={`${model.name} - ${model.tokens} tokens processed`}>
                          <motion.div 
                            className="p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 cursor-pointer hover:scale-105"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{model.name}</span>
                              <div className={`w-2 h-2 rounded-full ${
                                model.status === 'active' ? 'bg-green-500 animate-pulse' :
                                model.status === 'training' ? 'bg-yellow-500 animate-ping' :
                                'bg-gray-400'
                              }`} />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Efficiency: {model.efficiency}%
                            </div>
                          </motion.div>
                        </InteractiveTooltip>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stage 3: Enhanced Campaign Results */}
                {stage.id === 3 && (
                  <div className="space-y-4 h-full">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span>Campaign Performance</span>
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Pulse className="w-4 h-4 text-green-500 animate-pulse" />
                        <span className="text-xs text-green-600 font-medium">LIVE</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-lg">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {[
                            { label: "Delivery Rate", value: stage.metrics.deliveryRate, color: "green" },
                            { label: "Open Rate", value: stage.metrics.openRate, color: "blue" }
                          ].map((metric, idx) => (
                            <div key={metric.label}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">{metric.label}</span>
                                <InteractiveTooltip content={`Industry average: ${metric.label === 'Delivery Rate' ? '85%' : '22%'}`}>
                                  <span className={`text-sm font-bold text-${metric.color}-600 cursor-help`}>
                                    {metric.value}%
                                  </span>
                                </InteractiveTooltip>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div 
                                  className={`bg-${metric.color}-500 h-3 rounded-full shadow-lg`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ duration: 2, delay: 0.5 + (idx * 0.3), ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-4">
                          {[
                            { label: "Reply Rate", value: stage.metrics.replyRate, color: "purple" },
                            { label: "Spam Score", value: stage.metrics.spamScore, color: "red", invert: true }
                          ].map((metric, idx) => (
                            <div key={metric.label}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">{metric.label}</span>
                                <InteractiveTooltip content={`${metric.invert ? 'Lower is better' : 'Higher is better'}`}>
                                  <span className={`text-sm font-bold text-${metric.color}-600 cursor-help`}>
                                    {metric.value}{metric.invert ? '' : '%'}
                                  </span>
                                </InteractiveTooltip>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div 
                                  className={`bg-${metric.color}-500 h-3 rounded-full shadow-lg`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.invert ? (1 - metric.value) * 100 : metric.value}%` }}
                                  transition={{ duration: 2, delay: 1 + (idx * 0.3), ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          ))}
                          
                          <motion.div 
                            className="text-center p-4 bg-white rounded-lg border border-green-300 shadow-lg"
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
                          >
                            <div className="text-3xl font-bold text-green-600">{stage.metrics.callsBooked}</div>
                            <div className="text-sm text-muted-foreground">Calls Booked</div>
                            <div className="text-xs text-green-600 mt-1">+12% this week</div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Infrastructure Status */}
                    <div className="grid grid-cols-2 gap-3">
                      {stage.infrastructure?.map((infra, idx) => (
                        <InteractiveTooltip key={infra.name} content={`${infra.name} - Uptime: ${infra.uptime}`}>
                          <motion.div 
                            className="p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 cursor-pointer hover:scale-105"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{infra.name}</span>
                              <div className={`w-2 h-2 rounded-full ${
                                infra.status === 'optimal' ? 'bg-green-500' :
                                infra.status === 'active' ? 'bg-blue-500' :
                                infra.status === 'processing' ? 'bg-yellow-500 animate-pulse' :
                                'bg-purple-500'
                              }`} />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Load: {infra.load}%
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                              <div 
                                className="bg-blue-500 h-1 rounded-full transition-all duration-1000"
                                style={{ width: `${infra.load}%` }}
                              />
                            </div>
                          </motion.div>
                        </InteractiveTooltip>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced floating particles around active stage */}
      {isActive && (
        <>
          {[...Array(12)].map((_, i) => (
            <FloatingParticle 
              key={i} 
              delay={i * 0.3} 
              size={Math.random() > 0.7 ? 3 : 2}
              duration={4 + Math.random() * 2}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

// Main component with enhanced features
export const ProcessVisualization = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState('desktop');
  const [showMetrics, setShowMetrics] = useState(true);
  const [intensity, setIntensity] = useState(1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-progress through stages with enhanced timing
  useEffect(() => {
    if (!inView || !isPlaying) return;

    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % processStages.length);
    }, 10000); // Increased duration for better UX

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
    <div 
      ref={ref} 
      className="relative bg-gradient-to-br from-background via-muted/5 to-accent/5"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Animated grid with better performance */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-foreground/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: i * 0.005, duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced floating orbs with better animations */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: inView ? [0.3, 0.7, 0.3] : 0,
              scale: inView ? [1, 1.3, 1] : 0,
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Enhanced connection lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          from={connection.from}
          to={connection.to}
          active={connection.active}
          delay={index * 0.5}
          intensity={intensity}
        />
      ))}

      {/* Main content with fixed container */}
      <div className="relative z-10 container mx-auto px-4 py-12 h-full">
        {/* Enhanced header */}
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

        {/* Enhanced control panel */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-6 bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-lg">
            <InteractiveTooltip content={isPlaying ? 'Pause automation' : 'Resume automation'}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium transition-all hover:bg-primary/90 hover:scale-105"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </InteractiveTooltip>
            
            <div className="flex items-center space-x-2">
              {processStages.map((_, index) => (
                <InteractiveTooltip key={index} content={`Stage ${index + 1}: ${processStages[index].title}`}>
                  <button
                    onClick={() => setActiveStage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStage === index 
                        ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
                    }`}
                  />
                </InteractiveTooltip>
              ))}
            </div>

            <InteractiveTooltip content="Toggle performance metrics">
              <button
                onClick={() => setShowMetrics(!showMetrics)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  showMetrics ? 'bg-primary text-primary-foreground' : 'bg-background/50 hover:bg-background/80'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
              </button>
            </InteractiveTooltip>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Monitor className="w-4 h-4" />
              <span className="capitalize">{viewMode}</span>
            </div>
          </div>
        </motion.div>

        {/* Process stages with fixed grid */}
        <div 
          className={`grid gap-8 ${
            viewMode === 'mobile' ? 'grid-cols-1' : 
            viewMode === 'tablet' ? 'grid-cols-2' : 
            'grid-cols-3'
          }`}
        >
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
      </div>
    </div>
  );
};