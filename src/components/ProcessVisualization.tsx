import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Target, Database, Search, Brain, Mail, Calendar, Zap, Shield, CheckCircle, ArrowRight, Users, TrendingUp, Eye, MessageSquare, Workflow, BarChart3, Globe, User, Building, FileText, Send, Activity, Maximize2, Minimize2, X, Settings, Plus, Sparkles, Cpu, Play, Pause, RotateCcw, Monitor, Smartphone, Tablet, Code, Layers, Filter, Network, Atom, Binary, CircuitBoard, Info, ChevronDown, ChevronUp, Star, Flame, Rocket, Gauge, Wifi, Server, Cloud, Lock, Unlock, Timer, Crosshair, Microscope, Beaker, Lightbulb, Fingerprint, Scan, Satellite, Waves } from 'lucide-react';

// Enhanced mock data with more realistic content
const mockProspects = [
  {
    id: 1,
    name: "Laura Mitchell",
    title: "Operations Director",
    company: "Mitchell Manufacturing",
    recentActivity: "Posted about delayed supplier payments",
    companySize: "50-200",
    industry: "Manufacturing",
    location: "Melbourne, AU",
    avatar: "🏭",
    linkedinActivity: "Discussed cash flow challenges in production",
    painPoints: ["Supplier delays", "Cash flow bottlenecks"],
    buyingSignals: ["Exploring cost optimisation", "Actively networking"],
    confidence: 92,
    lastSeen: "1 hour ago",
    engagement: "High",
    priority: "Hot Lead"
  },
  {
    id: 2,
    name: "Sophie Allen",
    title: "Creative Director",
    company: "Allen & Gray Interiors",
    recentActivity: "Launched new showroom",
    companySize: "10-50",
    industry: "Interior Design",
    location: "Sydney, AU",
    avatar: "🎨",
    linkedinActivity: "Shared event photos and thanked guests",
    painPoints: ["Need high-value project leads", "Limited networking bandwidth"],
    buyingSignals: ["New location launch", "Active on social media"],
    confidence: 90,
    lastSeen: "3 hours ago",
    engagement: "Very High",
    priority: "Ultra Hot"
  },
  {
    id: 3,
    name: "David Harper",
    title: "Managing Director",
    company: "Harper & Co Real Estate",
    recentActivity: "Posting about market demand in Bayside",
    companySize: "5-20",
    industry: "Real Estate",
    location: "Brisbane, AU",
    avatar: "🏡",
    linkedinActivity: "Commenting on property trends",
    painPoints: ["Low off-market deal flow", "High competition"],
    buyingSignals: ["Discussing market growth", "Highlighting recent sales"],
    confidence: 88,
    lastSeen: "45 minutes ago",
    engagement: "High",
    priority: "Hot Lead"
  },
  {
    id: 4,
    name: "Olivia Bennett",
    title: "Founder",
    company: "Bennett Recruitment",
    recentActivity: "Posted about shortage of data engineers",
    companySize: "20-50",
    industry: "Recruitment",
    location: "London, UK",
    avatar: "💼",
    linkedinActivity: "Sharing hiring market insights",
    painPoints: ["Hard-to-fill tech roles", "Need more retained contracts"],
    buyingSignals: ["Posting niche role shortages", "Engaging with hiring managers"],
    confidence: 85,
    lastSeen: "2 hours ago",
    engagement: "Medium-High",
    priority: "Warm Lead"
  }
];

const mockEmails = [
  {
    id: 1,
    subject: "Idea for smoothing production cash flow",
    preview: "Hi Laura, I saw your post about supplier delays. We've been helping manufacturers unlock 15–25% more working capital...",
    personalization: "Referenced LinkedIn post on supplier payment delays",
    tone: "Professional and consultative",
    valueProp: "Free up 15–25% working capital",
    openRate: 80,
    replyRate: 27,
    sentiment: "Positive",
    wordCount: 168,
    readTime: "55s",
    cta: "15-minute chat",
    followUpScheduled: true
  },
  {
    id: 2,
    subject: "Your new showroom looks incredible",
    preview: "Hi Sophie, loved the design in your new space. We help boutique studios connect directly with property developers...",
    personalization: "Referenced recent showroom launch",
    tone: "Complimentary and opportunity-focused",
    valueProp: "Direct access to 10–15 developer partners",
    openRate: 84,
    replyRate: 32,
    sentiment: "Very Positive",
    wordCount: 172,
    readTime: "58s",
    cta: "Send example messages",
    followUpScheduled: true
  },
  {
    id: 3,
    subject: "Winning more off-market listings in Bayside",
    preview: "Hi David, I noticed your post on market demand. We've been helping agencies secure exclusives before listings go public...",
    personalization: "Referenced posts on Bayside market demand",
    tone: "Strategic and results-driven",
    valueProp: "Book 12 valuations in 3 weeks",
    openRate: 78,
    replyRate: 26,
    sentiment: "Positive",
    wordCount: 165,
    readTime: "56s",
    cta: "Walk through strategy",
    followUpScheduled: false
  },
  {
    id: 4,
    subject: "Filling niche tech roles faster",
    preview: "Hi Olivia, your post about the data engineer shortage resonated. We help agencies connect with hiring managers before they post roles...",
    personalization: "Referenced post on data engineer shortage",
    tone: "Insightful and solution-focused",
    valueProp: "3 retained contracts in 30 days",
    openRate: 76,
    replyRate: 25,
    sentiment: "Positive",
    wordCount: 169,
    readTime: "57s",
    cta: "Share campaign examples",
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
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    features: [
      { icon: Globe, label: "LinkedIn Deep Scan", status: "active", description: "Analyzes posts, connections, and activity patterns" },
      { icon: Building, label: "Company Intelligence", status: "active", description: "Scrapes company news, funding, and growth signals" },
      { icon: Activity, label: "Social Signal Analysis", status: "processing", description: "Monitors social media engagement and sentiment" },
      { icon: BarChart3, label: "Market Intelligence", status: "queued", description: "Competitive analysis and industry trends" },
      { icon: Satellite, label: "Intent Data Mining", status: "active", description: "Identifies buying intent signals across the web" },
      { icon: Fingerprint, label: "Behavioral Profiling", status: "processing", description: "Creates detailed behavioral and preference profiles" }
    ],
    metrics: {
    }
  },
  {
    id: 2,
    title: "Quantum Content Generation",
    subtitle: "Hyper-Personalization AI Engine",
    description: "Advanced language models powered by GPT-4 and proprietary algorithms craft contextually perfect emails that resonate with each prospect's unique situation",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
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
    }
  },
  {
    id: 3,
    title: "Precision Delivery Matrix",
    subtitle: "Smart Campaign Orchestration",
    description: "Intelligent delivery system with advanced timing optimization, deliverability protection, and real-time performance monitoring ensures maximum inbox placement and response rates",
    icon: Send,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    features: [
      { icon: Timer, label: "Smart Send Timing", status: "active", description: "AI-optimized send times for each prospect" },
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
    }
  }
];

// Enhanced stage card component with more interactivity
const ProcessStageCard = ({ stage, isActive, isVisible, onActivate, index }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
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
    } else {
      controls.start("inactive");
    }
  }, [isActive, isVisible, controls, stage.id]);

  const cardVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      y: 20,
      filter: "blur(1px)"
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
      style={{ 
        zIndex: isActive ? 10 : 5,
      }}
    >
      {/* Enhanced background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${stage.bgGradient} rounded-3xl opacity-80`} />
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl" />
      
      {/* Main card container */}
      <div className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-700 min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${stage.color} text-white shadow-lg transform transition-all duration-300`}>
                <Icon className="w-8 h-8" />
              </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
              <p className="text-gray-600 font-medium">{stage.subtitle}</p>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/50' : 'bg-gray-300'} transition-all duration-300`} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(!showDetails);
              }}
              className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 relative">
          <p className="text-gray-700 leading-relaxed">{stage.description}</p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {stage.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <div key={feature.label} className="relative">
                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 border border-white/30 transition-all duration-300 hover:bg-white/80 hover:border-blue-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    <FeatureIcon className={`w-5 h-5 transition-all duration-300 ${
                      feature.status === 'active' ? 'text-green-500' :
                      feature.status === 'processing' ? 'text-yellow-500 animate-pulse' :
                      feature.status === 'monitoring' ? 'text-blue-500' :
                      feature.status === 'scanning' ? 'text-purple-500' :
                      feature.status === 'learning' ? 'text-orange-500' :
                      'text-gray-400'
                    }`} />
                    <span className="text-sm font-medium flex-1 text-gray-700">{feature.label}</span>
                    {feature.status === 'active' && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    )}
                    {feature.status === 'processing' && (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                    )}
                  </motion.div>
              </div>
            );
          })}
        </div>

        {/* Dynamic content section */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Stage 1: Prospect Research */}
                {stage.id === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <Database className="w-5 h-5 text-blue-500" />
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
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-lg"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{mockProspects[currentProspect].avatar}</div>
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

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(stage.metrics).slice(0, 3).map(([key, value], idx) => (
                        <div key={key}>
                           <motion.div 
                            className="text-center p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05, duration: 0.3 }}
                          >
                            <div className="text-xl font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Stage 2: Email Generation */}
                {stage.id === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
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
                      className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 shadow-lg"
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
                  </div>
                )}

                {/* Stage 3: Campaign Results */}
                {stage.id === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span>Campaign Performance</span>
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                        <span className="text-xs text-green-600 font-medium">LIVE</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-lg">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          {[  // First two metrics
                            { label: "Delivery Rate", value: stage.metrics.deliveryRate, color: "green" },
                            { label: "Open Rate", value: stage.metrics.openRate, color: "blue" }
                          ].map((metric, idx) => (
                            <div key={metric.label}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">{metric.label}</span>
                                  <span className={`text-sm font-bold text-${metric.color}-600`}>
                                    {metric.value}%
                                  </span>
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
                          {[  // Next two metrics
                            { label: "Reply Rate", value: stage.metrics.replyRate, color: "purple" },
                            { label: "Spam Score", value: stage.metrics.spamScore, color: "red", invert: true }
                          ].map((metric, idx) => (
                            <div key={metric.label}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">{metric.label}</span>
                                  <span className={`text-sm font-bold text-${metric.color}-600`}>
                                    {metric.value}{metric.invert ? '' : '%'}
                                  </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div 
                                  className={`bg-${metric.color}-500 h-3 rounded-full shadow-lg`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.invert ? (1 - metric.value / 100) * 100 : metric.value}%` }}  // normalize invert metric properly
                                  transition={{ duration: 2, delay: 0.5 + ((idx + 2) * 0.3), ease: "easeOut" }}  // delay continues after first two
                                />
                              </div>
                            </div>
                          ))}

                          <div style={{ position: 'relative', left: '-165px' }}>
                            <motion.div 
                              className="text-center p-4 bg-white rounded-lg border border-green-300 shadow-lg"
                              style={{ width: "310px" }}
                              initial={{ scale: 0, rotate: -10 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.6, delay: 2, ease: "easeOut" }}
                            >
                              <div className="text-3xl font-bold text-green-600">{stage.metrics.callsBooked}</div>
                              <div className="text-sm text-gray-600">Calls Booked</div>
                              <div className="text-xs text-green-600 mt-1">+12% this week</div>
                            </motion.div>
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
      </div>
    </motion.div>
  );
};

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
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
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
    { from: { x: 400, y: 300 }, to: { x: 500, y: 280 }, active: activeStage >= 1 },
    { from: { x: 800, y: 280 }, to: { x: 900, y: 320 }, active: activeStage >= 2 }
  ];

  return (
    <div 
      ref={ref} 
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-gray-400/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: i * 0.002, duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: inView ? [0.3, 0.8, 0.3] : 0,
              scale: inView ? [1, 1.5, 1] : 0,
              x: [0, Math.random() * 400 - 200, 0],
              y: [0, Math.random() * 400 - 200, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Enhanced floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: inView ? [0.3, 0.6, 0.3] : 0,
              scale: inView ? [1, 1.2, 1] : 0,
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
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
          intensity={intensity}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Enhanced header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How Our <span className="text-blue-600">AI System</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our sophisticated AI pipeline transform raw prospect data into 
            <span className="font-semibold text-gray-900"> booked sales calls</span> through 
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
          <div className="flex items-center space-x-6 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl p-4 shadow-lg">
            
            {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium transition-all hover:bg-blue-700 shadow-md"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

            {/* Stage Dots */}
            <div className="flex items-center space-x-2">
              {processStages.map((_, index) => (
                  <button
                    onClick={() => setActiveStage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStage === index 
                        ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-600/50' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
              ))}
            </div>

            {/* Metrics Toggle */}
              <button
                onClick={() => setShowMetrics(!showMetrics)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  showMetrics ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
              </button>

            {/* View Mode Indicator */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Monitor className="w-4 h-4" />
              <span className="capitalize">{viewMode}</span>
            </div>
          </div>
        </motion.div>

        {/* Process stages */}
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