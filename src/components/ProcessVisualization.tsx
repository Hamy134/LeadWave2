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
  RotateCcw
} from 'lucide-react';

// Mock data for realistic content
const mockProspects = [
  {
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "TechFlow Inc",
    recentActivity: "Posted about scaling sales team",
    companySize: "50-200",
    industry: "SaaS",
    location: "San Francisco, CA",
    avatar: "👩‍💼"
  },
  {
    name: "Marcus Rodriguez",
    title: "Head of Growth",
    company: "ScaleUp Solutions",
    recentActivity: "Company raised $5M Series A",
    companySize: "20-50",
    industry: "FinTech",
    location: "Austin, TX",
    avatar: "👨‍💼"
  },
  {
    name: "Emily Watson",
    title: "CEO & Founder",
    company: "StartupXYZ",
    recentActivity: "Hiring for sales positions",
    companySize: "5-20",
    industry: "E-commerce",
    location: "New York, NY",
    avatar: "👩‍💻"
  }
];

const mockEmails = [
  {
    subject: "Scaling your sales team?",
    preview: "Hi Sarah, I noticed you're expanding your sales team at TechFlow. We've helped similar SaaS companies...",
    personalization: "Based on your recent post about hiring SDRs",
    tone: "Professional but friendly",
    valueProp: "10x faster lead generation"
  },
  {
    subject: "Congrats on the Series A!",
    preview: "Hi Marcus, congratulations on the $5M raise! As you scale ScaleUp Solutions, you'll need...",
    personalization: "Mentioned your recent funding round",
    tone: "Celebratory and consultative",
    valueProp: "Automated prospect research"
  },
  {
    subject: "Your hiring post caught my attention",
    preview: "Hi Emily, I saw your post about hiring sales talent. Finding the right people is tough, but...",
    personalization: "Referenced your hiring announcement",
    tone: "Empathetic and helpful",
    valueProp: "AI-powered lead qualification"
  }
];

const mockMetrics = {
  emailsSent: 1247,
  openRate: 73,
  replyRate: 23,
  callsBooked: 47,
  conversionRate: 3.8,
  avgResponseTime: "2.3 hours"
};

export const ProcessVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeSubStage, setActiveSubStage] = useState<number>(0);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [expandedWindow, setExpandedWindow] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEmailIndex, setCurrentEmailIndex] = useState(0);
  const [secretClicks, setSecretClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      // Auto-progress through stages
      const interval = setInterval(() => {
        if (isPlaying) {
          setActiveStage((prev) => (prev + 1) % 3);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [inView, isPlaying]);

  // Auto-cycle through emails
  useEffect(() => {
    const emailInterval = setInterval(() => {
      if (activeStage === 2 && isPlaying) {
        setCurrentEmailIndex((prev) => (prev + 1) % mockEmails.length);
      }
    }, 3000);
    return () => clearInterval(emailInterval);
  }, [activeStage, isPlaying]);

  // Secret easter egg
  const handleSecretClick = () => {
    setSecretClicks(prev => {
      const newCount = prev + 1;
      if (newCount >= 7) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 4000);
        return 0;
      }
      return newCount;
    });
  };

  const stages = [
    {
      id: 1,
      title: "Mission Control",
      subtitle: "Understand the Objective",
      description: "Define your ideal customer profile, goals, and outreach strategy",
      icon: Target,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/50",
      glowColor: "shadow-blue-500/30",
      position: { x: 50, y: 50 },
      size: { width: 400, height: 300 },
      content: {
        type: "foundation",
        data: {
          target: "SaaS Founders",
          goal: "10 calls/week",
          icp: "2-20 person teams",
          budget: "$50-200K ARR",
          industry: "B2B SaaS",
          location: "US/Canada"
        }
      }
    },
    {
      id: 2,
      title: "Intelligence Engine",
      subtitle: "Build the Model",
      description: "Multi-stage AI system for data collection and personalization",
      icon: Brain,
      color: "from-purple-500/20 to-indigo-600/10",
      borderColor: "border-purple-500/50",
      glowColor: "shadow-purple-500/30",
      position: { x: 500, y: 30 },
      size: { width: 500, height: 400 },
      content: {
        type: "process",
        subStages: [
          {
            id: "2.1",
            title: "Collect Leads",
            description: "Scrape and aggregate prospect data from multiple sources",
            icon: Database,
            color: "text-green-500",
            sources: ["LinkedIn", "Apollo", "Company Websites", "Social Media"],
            activeSources: ["LinkedIn", "Apollo"],
            data: mockProspects
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
            emails: mockEmails
          }
        ]
      }
    },
    {
      id: 3,
      title: "Conversion Engine",
      subtitle: "Launch & Book Calls",
      description: "Deploy campaigns and convert responses to qualified meetings",
      icon: Zap,
      color: "from-green-500/20 to-emerald-600/10",
      borderColor: "border-green-500/50",
      glowColor: "shadow-green-500/30",
      position: { x: 1050, y: 50 },
      size: { width: 400, height: 300 },
      content: {
        type: "outcome",
        metrics: mockMetrics
      }
    }
  ];

  const connections = [
    { 
      from: { x: 450, y: 200 }, 
      to: { x: 500, y: 230 }, 
      color: "hsl(var(--primary))",
      stage: 0
    },
    { 
      from: { x: 1000, y: 230 }, 
      to: { x: 1050, y: 200 }, 
      color: "hsl(var(--accent))",
      stage: 1
    }
  ];

  const floatingElements = [
    { id: "f1", icon: Sparkles, pos: { x: 200, y: 100 }, delay: 0, stage: 0 },
    { id: "f2", icon: MessageSquare, pos: { x: 700, y: 80 }, delay: 1, stage: 1 },
    { id: "f3", icon: Activity, pos: { x: 1200, y: 120 }, delay: 2, stage: 2 },
    { id: "f4", icon: BarChart3, pos: { x: 150, y: 400 }, delay: 0.5, stage: 0 },
    { id: "f5", icon: Globe, pos: { x: 1000, y: 450 }, delay: 1.5, stage: 2 },
    { id: "f6", icon: Users, pos: { x: 600, y: 450 }, delay: 1, stage: 1 },
    { id: "f7", icon: TrendingUp, pos: { x: 300, y: 200 }, delay: 0.8, stage: 0 },
    { id: "f8", icon: Calendar, pos: { x: 1100, y: 300 }, delay: 2.2, stage: 2 }
  ];

  const renderMacOSWindow = (stage: typeof stages[0], isActive: boolean) => {
    const Icon = stage.icon;
    const isExpanded = expandedWindow === stage.id;
    
    return (
      <motion.div
        key={stage.id}
        className="absolute cursor-pointer"
        style={{ 
          left: stage.position.x,
          top: stage.position.y,
          width: isExpanded ? stage.size.width * 1.5 : stage.size.width,
          height: isExpanded ? stage.size.height * 1.5 : stage.size.height,
          zIndex: isExpanded ? 50 : 10
        }}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? (isActive ? 1.05 : 1) : 0.8,
          y: isVisible ? 0 : 50
        }}
        transition={{ delay: 0.5 + stage.id * 0.3, duration: 0.8 }}
        onHoverStart={() => setHoveredElement(`stage-${stage.id}`)}
        onHoverEnd={() => setHoveredElement(null)}
        onClick={() => {
          setActiveStage(stage.id - 1);
          setExpandedWindow(isExpanded ? null : stage.id);
        }}
      >
        {/* Window frame */}
        <div className={`
          relative w-full h-full rounded-2xl glass-card
          bg-gradient-to-br ${stage.color}
          border-2 transition-all duration-500
          ${isActive ? `${stage.borderColor} ${stage.glowColor} shadow-2xl` : 'border-border/50'}
          ${hoveredElement === `stage-${stage.id}` ? 'shadow-glow transform scale-102' : ''}
          ${isExpanded ? 'shadow-2xl' : ''}
        `}>
          {/* macOS title bar */}
          <div className="flex items-center justify-between p-4 border-b border-border/20">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div 
                  className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSecretClick();
                  }}
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Icon className="w-5 h-5 text-foreground/80" />
                <span className="font-semibold text-sm">{stage.title}</span>
                {isActive && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                className="p-1 hover:bg-muted/50 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Minimize2 className="w-3 h-3" />
              </button>
              <button 
                className="p-1 hover:bg-muted/50 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Maximize2 className="w-3 h-3" />
              </button>
              <button 
                className="p-1 hover:bg-muted/50 rounded transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Window content */}
          <div className="p-4 space-y-4 overflow-hidden">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-1">{stage.subtitle}</h3>
              <div className={`
                w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary/80 
                flex items-center justify-center mb-3
                ${isActive ? 'animate-pulse shadow-lg shadow-primary/50' : ''}
              `}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </div>

            {/* Stage-specific content */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {stage.content.type === 'foundation' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(stage.content.data).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            className="p-3 rounded-lg bg-background/30 border border-border/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-sm font-medium">{value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {stage.content.type === 'process' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">AI Processing Pipeline</h4>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsPlaying(!isPlaying);
                            }}
                            className="p-1 hover:bg-muted/50 rounded transition-colors"
                          >
                            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSubStage((prev) => (prev + 1) % 3);
                            }}
                            className="p-1 hover:bg-muted/50 rounded transition-colors"
                          >
                            <RotateCcw className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {stage.content.subStages.map((subStage, index) => {
                          const SubIcon = subStage.icon;
                          const isSubActive = activeSubStage === index;
                          
                          return (
                            <motion.div
                              key={subStage.id}
                              className={`
                                relative p-3 rounded-lg glass-card cursor-pointer
                                transition-all duration-300 group
                                ${isSubActive ? 'shadow-glow border-2 border-primary/50 scale-105' : 'hover:shadow-md hover:scale-102'}
                              `}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + (index * 0.2) }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubStage(index);
                              }}
                            >
                              <div className="text-center space-y-2">
                                <div className={`
                                  inline-flex items-center justify-center w-8 h-8 rounded-lg
                                  bg-gradient-to-br from-primary/20 to-primary/10
                                  ${isSubActive ? 'animate-bounce-subtle bg-primary text-white' : ''}
                                `}>
                                  <SubIcon className={`w-4 h-4 ${isSubActive ? 'text-white' : 'text-primary'}`} />
                                </div>
                                
                                <div>
                                  <h5 className="font-bold text-xs">{subStage.title}</h5>
                                  <p className="text-[10px] text-muted-foreground">{subStage.description}</p>
                                </div>

                                {/* Dynamic content for active sub-stage */}
                                <AnimatePresence mode="wait">
                                  {isSubActive && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="space-y-2"
                                    >
                                      {/* Sources for Collect Leads */}
                                      {subStage.sources && (
                                        <div className="space-y-1">
                                          {subStage.sources.map((source, idx) => (
                                            <motion.div
                                              key={source}
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: idx * 0.1 }}
                                              className={`
                                                flex items-center space-x-1 p-1 rounded text-[10px]
                                                ${subStage.activeSources?.includes(source) 
                                                  ? 'bg-success/10 text-success' 
                                                  : 'bg-muted/50 text-muted-foreground'
                                                }
                                              `}
                                            >
                                              <Globe className="w-3 h-3" />
                                              <span>{source}</span>
                                              {subStage.activeSources?.includes(source) && (
                                                <Activity className="w-2 h-2 animate-pulse" />
                                              )}
                                            </motion.div>
                                          ))}
                                        </div>
                                      )}

                                      {/* Insights for Research */}
                                      {subStage.insights && (
                                        <div className="space-y-1">
                                          {subStage.insights.slice(0, 2).map((insight, idx) => (
                                            <motion.div
                                              key={insight}
                                              initial={{ opacity: 0, scale: 0.95 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ delay: idx * 0.15 }}
                                              className="p-1 bg-primary/5 rounded text-[9px] text-foreground/80 border-l border-primary"
                                            >
                                              "{insight}"
                                            </motion.div>
                                          ))}
                                        </div>
                                      )}

                                      {/* Emails for Personalization */}
                                      {subStage.emails && (
                                        <div className="space-y-1">
                                          <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-2 bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded text-[9px] border border-orange-500/20"
                                          >
                                            <FileText className="w-3 h-3 text-orange-500 mb-1" />
                                            "{subStage.emails[currentEmailIndex]?.preview.slice(0, 50)}..."
                                          </motion.div>
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
                  )}

                  {stage.content.type === 'outcome' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(stage.content.metrics).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            className="p-3 rounded-lg bg-background/30 border border-border/20 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="text-lg font-bold text-success">
                              {typeof value === 'number' ? value.toLocaleString() : value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Live activity feed */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs">Live Activity</h5>
                        <div className="space-y-1">
                          {[
                            "📧 Email sent to Sarah Chen",
                            "📱 Reply received from Marcus",
                            "📅 Call booked with Emily",
                            "📊 Open rate: 73%"
                          ].map((activity, index) => (
                            <motion.div
                              key={activity}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              className="text-[10px] text-muted-foreground flex items-center space-x-1"
                            >
                              <div className="w-1 h-1 rounded-full bg-success animate-pulse" />
                              <span>{activity}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-muted/5 to-accent/5">
      {/* macOS-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
          {[...Array(192)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-foreground/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: i * 0.005, duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {floatingElements.map((element) => {
        const Icon = element.icon;
        const isActive = activeStage === element.stage;
        
        return (
          <motion.div
            key={element.id}
            className="absolute pointer-events-none"
            style={{ left: element.pos.x, top: element.pos.y }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: isVisible ? (isActive ? 0.8 : 0.4) : 0, 
              scale: isVisible ? (isActive ? 1.2 : 1) : 0,
              rotate: 0,
              y: isVisible ? [0, -15, 0] : 0
            }}
            transition={{ 
              delay: element.delay,
              duration: 1.5,
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          >
            <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-primary/40'}`} />
          </motion.div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => (
          <motion.path
            key={index}
            d={`M ${connection.from.x} ${connection.from.y} Q ${(connection.from.x + connection.to.x) / 2} ${connection.from.y - 80} ${connection.to.x} ${connection.to.y}`}
            stroke={connection.color}
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isVisible ? 1 : 0, 
              opacity: isVisible ? (activeStage >= connection.stage ? 0.8 : 0.3) : 0 
            }}
            transition={{ delay: 1 + index * 0.5, duration: 2 }}
          />
        ))}
      </svg>

      {/* Main windows */}
      {stages.map((stage) => renderMacOSWindow(stage, activeStage === stage.id - 1))}

      {/* Control panel */}
      <motion.div
        className="absolute bottom-6 left-6 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ delay: 2 }}
      >
        <div className="glass-card p-4 rounded-xl border border-border/20 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setActiveStage(0)}
                className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              {stages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStage(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${activeStage === index 
                      ? 'bg-primary scale-125 shadow-lg shadow-primary/50' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Easter egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
          >
            <div className="glass-card p-4 rounded-xl border-2 border-primary/50 shadow-glow">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-primary animate-spin" />
                <span className="font-bold text-primary">AI Override Activated!</span>
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">You found the secret!</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive tooltip */}
      <AnimatePresence>
        {hoveredElement && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="glass-card px-4 py-2 rounded-full border border-primary/20">
              <span className="text-sm font-medium">
                {hoveredElement.includes('stage-1') ? 'Mission Control' :
                 hoveredElement.includes('stage-2') ? 'Intelligence Engine' :
                 hoveredElement.includes('stage-3') ? 'Conversion Engine' : 'System Component'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};