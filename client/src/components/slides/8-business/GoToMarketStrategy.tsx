import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  ExternalLink, 
  MessageSquare, 
  Building2, 
  Shield, 
  TrendingUp, 
  Coins,
  Calendar,
  Check,
  Globe,
  Zap,
  Briefcase,
  BarChart3,
  Network,
  Target,
  Users,
  PieChart,
  ChevronDown,
  ChevronUp,
  FileText,
  ArrowRight,
  CircleDollarSign,
  Building,
  Handshake,
  Star
} from 'lucide-react';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const pulseVariant = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const arrowMotion = {
  initial: { x: 0 },
  animate: {
    x: [0, 5, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const GoToMarketStrategy = () => {
  // State for interactive elements
  const [activePhase, setActivePhase] = useState(1);
  const [expandedKPI, setExpandedKPI] = useState<number | null>(null);
  
  const timelineItems = [
    // Timeline updated to reflect current date: March 2025 (early Q2 2025)
    { quarter: 'Q2 2025', event: 'Launch HandReceipt with 2-3 defense customers', icon: <Shield size={18} /> },
    { quarter: 'Q3 2025', event: 'First commercial pilot deployment', icon: <Building2 size={18} /> },
    { quarter: 'Q4 2025', event: 'Integrate financial institutions for supply chain financing', icon: <Briefcase size={18} /> },
    { quarter: 'Q1 2026', event: 'Open network to broader retail ecosystem', icon: <Globe size={18} /> }
  ];
  
  // Expanded KPI data with metrics
  const kpiData = [
    {
      title: "Customer Acquisition",
      icon: <Users size={20} className="text-violet-600" />,
      target: "15-20 enterprise clients in Year 1",
      metrics: [
        { label: "Defense client target", value: "3-5 contracts" },
        { label: "Commercial pilot conversion", value: "70%" },
        { label: "Customer acquisition cost", value: "$85K-120K" },
      ]
    },
    {
      title: "Platform Adoption",
      icon: <TrendingUp size={20} className="text-violet-600" />,
      target: "500K transactions in Year 1",
      metrics: [
        { label: "Monthly active users", value: "5K by EOY1" },
        { label: "Avg. transactions per client", value: "450/month" },
        { label: "Integration completion rate", value: "90% in 45 days" },
      ]
    },
    {
      title: "Revenue Growth",
      icon: <CircleDollarSign size={20} className="text-violet-600" />,
      target: "$4.8M ARR by end of Year 2",
      metrics: [
        { label: "Transaction fee revenue", value: "$1.2M in Year 1" },
        { label: "Subscription revenue", value: "$3.2M in Year 2" },
        { label: "Avg. contract value growth", value: "35% YoY" },
      ]
    },
    {
      title: "Market Expansion",
      icon: <Globe size={20} className="text-violet-600" />,
      target: "3 industry verticals by Year 2",
      metrics: [
        { label: "Defense market penetration", value: "8% by Year 2" },
        { label: "Commercial expansion rate", value: "2 verticals/year" },
        { label: "International market entry", value: "Q4 Year 2" },
      ]
    }
  ];
  
  // Phase details for interactive view - updated timeline
  const phaseDetails = [
    {
      phase: 1,
      title: "Defense Beachhead",
      timeline: "Q2 2025 - Q4 2025",
      focus: "Establish proven track record with defense clients",
      description: "Initially targeting military logistics units to solve critical property tracking problems. This approach provides credibility, recurring revenue, and validates our blockchain architecture.",
      kpis: ["3-5 defense contracts", "85% user satisfaction", "$1.2M in initial ARR"]
    },
    {
      phase: 2,
      title: "Commercial Expansion",
      timeline: "Q1 2026 - Q3 2026",
      focus: "Enter commercial supply chain market with validated solution",
      description: "Leverage defense success to enter manufacturing and logistics verticals, focusing on inventory management challenges and payment acceleration through Shell tokens.",
      kpis: ["12-15 commercial clients", "500K monthly transactions", "$3.5M in Year 2 ARR"]
    },
    {
      phase: 3,
      title: "Platform Ecosystem",
      timeline: "Q4 2026 - Q2 2027",
      focus: "Open platform to developers and financial partners",
      description: "Transform into a full ecosystem by integrating with financial institutions, enabling third-party developers, and connecting with wider retail markets.",
      kpis: ["30+ enterprise clients", "$12M in Year 3 ARR", "15 integrated partners"]
    }
  ];

  return (
    <Slide 
      title="Go-to-Market Strategy" 
      subtitle="Multi-phase approach to platform and token ecosystem growth"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-6"
      >
        {/* Interactive Phased Approach */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              PHASED APPROACH
            </span>
          </div>
          
          <div className="mt-6">
            {/* Phase selector tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {phaseDetails.map((phase) => (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(phase.phase)}
                  className={`py-2 px-4 text-sm font-medium transition-colors ${
                    activePhase === phase.phase 
                      ? 'text-violet-600 border-b-2 border-violet-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Phase {phase.phase}: {phase.title}
                </button>
              ))}
            </div>
            
            {/* Phase content display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                {/* Phase details */}
                <div className="md:col-span-7">
                  <div className="bg-gray-50 p-5 rounded-sm h-full">
                    <div className="flex items-center gap-3 mb-4">
                      {activePhase === 1 ? (
                        <Shield className="w-6 h-6 text-violet-600" />
                      ) : activePhase === 2 ? (
                        <Building className="w-6 h-6 text-violet-600" />
                      ) : (
                        <Globe className="w-6 h-6 text-violet-600" />
                      )}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {phaseDetails[activePhase-1].title}
                        </h3>
                        <p className="text-sm text-violet-600">
                          {phaseDetails[activePhase-1].timeline}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">STRATEGIC FOCUS</p>
                      <p className="text-sm text-gray-800">
                        {phaseDetails[activePhase-1].focus}
                      </p>
                    </div>
                    
                    <div className="mb-5">
                      <p className="text-sm text-gray-700">
                        {phaseDetails[activePhase-1].description}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">KEY TARGETS</p>
                      <div className="space-y-2">
                        {phaseDetails[activePhase-1].kpis.map((kpi, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-violet-500" />
                            <p className="text-sm text-gray-700">{kpi}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phase visualization */}
                <div className="md:col-span-5">
                  <div className="bg-gray-50 p-5 rounded-sm h-full flex flex-col justify-between">
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-gray-700">PHASE {activePhase} FOCUS</p>
                      <div className="h-[160px] mt-3 relative">
                        {activePhase === 1 && (
                          <div className="flex flex-col items-center justify-center h-full">
                            <Shield className="w-16 h-16 text-violet-600 mb-3" />
                            <div className="text-xs text-gray-600 bg-violet-100 px-2 py-1 rounded-sm">
                              Defense Market Entry
                            </div>
                            <motion.div
                              variants={arrowMotion}
                              initial="initial"
                              animate="animate"
                              className="flex items-center mt-4 text-violet-600"
                            >
                              <div className="h-0.5 w-8 bg-violet-600"></div>
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </div>
                        )}
                        
                        {activePhase === 2 && (
                          <div className="flex items-center justify-center h-full">
                            <div className="flex flex-col items-center opacity-50 mr-6">
                              <Shield className="w-10 h-10 text-violet-600 mb-2" />
                              <div className="text-[10px] text-gray-600 bg-violet-100 px-1.5 py-0.5 rounded-sm">
                                Defense
                              </div>
                            </div>
                            <motion.div
                              variants={arrowMotion}
                              initial="initial"
                              animate="animate"
                              className="mr-4"
                            >
                              <ArrowRight className="w-4 h-4 text-violet-600" />
                            </motion.div>
                            <div className="flex flex-col items-center">
                              <Building className="w-16 h-16 text-violet-600 mb-3" />
                              <div className="text-xs text-gray-600 bg-violet-100 px-2 py-1 rounded-sm">
                                Commercial Expansion
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activePhase === 3 && (
                          <div className="flex items-center justify-center h-full">
                            <div className="flex flex-col items-center opacity-30 mr-3">
                              <Shield className="w-8 h-8 text-violet-600 mb-1" />
                              <div className="text-[8px] text-gray-600 bg-violet-100 px-1 py-0.5 rounded-sm">
                                Defense
                              </div>
                            </div>
                            <motion.div
                              variants={arrowMotion}
                              initial="initial"
                              animate="animate"
                              className="mr-2 opacity-30"
                            >
                              <ArrowRight className="w-3 h-3 text-violet-600" />
                            </motion.div>
                            <div className="flex flex-col items-center opacity-50 mr-3">
                              <Building className="w-10 h-10 text-violet-600 mb-2" />
                              <div className="text-[10px] text-gray-600 bg-violet-100 px-1.5 py-0.5 rounded-sm">
                                Commercial
                              </div>
                            </div>
                            <motion.div
                              variants={arrowMotion}
                              initial="initial"
                              animate="animate"
                              className="mr-2"
                            >
                              <ArrowRight className="w-3 h-3 text-violet-600" />
                            </motion.div>
                            <div className="flex flex-col items-center">
                              <Globe className="w-16 h-16 text-violet-600 mb-3" />
                              <div className="text-xs text-gray-600 bg-violet-100 px-2 py-1 rounded-sm">
                                Full Ecosystem
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs text-gray-600 mb-2">REVENUE PROJECTION</p>
                      <div className="flex items-end space-x-2">
                        <div className="bg-violet-100 h-10 w-6 rounded-t-sm relative group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-violet-700 text-white text-xs py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Year 1: $1.2M
                          </div>
                        </div>
                        <div className={`bg-violet-300 h-16 w-6 rounded-t-sm relative group ${activePhase < 2 ? 'opacity-40' : ''}`}>
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-violet-700 text-white text-xs py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Year 2: $4.8M
                          </div>
                        </div>
                        <div className={`bg-violet-500 h-28 w-6 rounded-t-sm relative group ${activePhase < 3 ? 'opacity-40' : ''}`}>
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-violet-700 text-white text-xs py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Year 3: $12M
                          </div>
                        </div>
                        <div className={`bg-violet-700 h-44 w-6 rounded-t-sm relative group ${activePhase < 3 ? 'opacity-30' : 'opacity-60'}`}>
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-violet-700 text-white text-xs py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            Year 4: $28M
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              EXECUTION TIMELINE
            </span>
          </div>
          
          <div className="mt-6 relative">
            {/* Progress bar indicator */}
            <div className="hidden md:block absolute left-[100px] top-4 bottom-4 w-0.5 bg-violet-100"></div>
            <div className="hidden md:block absolute left-[100px] top-4 w-0.5 bg-violet-500" style={{ height: '25%' }}></div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative md:pl-[120px]"
                >
                  {/* Timeline marker for desktop */}
                  <motion.div 
                    variants={index === 0 ? pulseVariant : undefined}
                    initial={index === 0 ? "initial" : undefined}
                    animate={index === 0 ? "pulse" : undefined}
                    className={`hidden md:flex absolute left-[92px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full 
                      ${index === 0 ? 'bg-violet-100 border-2 border-violet-500' : 'bg-white border-2 border-violet-300'} 
                      items-center justify-center text-violet-600 z-10`}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Quarter label for desktop */}
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[85px] text-right">
                    <p className="text-sm font-medium text-violet-600">{item.quarter}</p>
                  </div>
                  
                  {/* Event card */}
                  <div className={`${index === 0 ? 'bg-violet-50 border border-violet-200' : 'bg-gray-50'} p-4 rounded-sm`}>
                    {/* Quarter label for mobile */}
                    <div className="md:hidden flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-violet-600" />
                      <p className="text-sm font-medium text-violet-600">{item.quarter}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="md:hidden">{item.icon}</div>
                      <p className="text-sm text-gray-700">{item.event}</p>
                    </div>
                    
                    {index === 0 && (
                      <div className="mt-2 text-xs text-violet-700 flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        <span>Current focus</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Performance Indicators (KPIs) */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              KEY PERFORMANCE INDICATORS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {kpiData.map((kpi, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gray-50 p-4 rounded-sm border ${expandedKPI === index ? 'border-violet-300' : 'border-gray-200'} 
                  transition-colors duration-300 cursor-pointer`}
                onClick={() => setExpandedKPI(expandedKPI === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {kpi.icon}
                    <h3 className="text-sm font-medium">{kpi.title}</h3>
                  </div>
                  {expandedKPI === index ? (
                    <ChevronUp size={16} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-500" />
                  )}
                </div>
                
                <p className="text-xs text-gray-600 mt-2">{kpi.target}</p>
                
                <AnimatePresence>
                  {expandedKPI === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
                        {kpi.metrics.map((metric, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <p className="text-xs text-gray-600">{metric.label}</p>
                            <p className="text-xs font-medium">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              TARGET STRATEGIC PARTNERSHIPS
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                title: "ERP Providers",
                description: "SAP, NetSuite, Oracle",
                icon: <BarChart3 size={18} />,
                timing: "Q3 2025"
              },
              {
                title: "Defense Contractors",
                description: "Tier 1 DOD suppliers",
                icon: <Shield size={18} />,
                timing: "Q2 2025"
              },
              {
                title: "WMS Providers",
                description: "Manhattan, JDA Software",
                icon: <Briefcase size={18} />,
                timing: "Q4 2025"
              },
              {
                title: "Financial Services",
                description: "Supply chain financing",
                icon: <Coins size={18} />,
                timing: "Q1 2026"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
                    {partner.icon}
                  </div>
                  <h3 className="text-sm font-medium">{partner.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{partner.description}</p>
                <div className="flex items-center text-xs">
                  <Calendar size={12} className="text-violet-500 mr-1" />
                  <span className="text-violet-700">{partner.timing}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-5 bg-violet-50 p-3 rounded-sm border border-violet-200">
            <div className="flex items-start gap-2">
              <Handshake className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-violet-800 mb-1">Partnership Strategy</h4>
                <p className="text-xs text-gray-700">
                  Strategic partnerships will accelerate market entry and ecosystem growth. Key partners provide both integration points and sales channels, with a focus on partners that can influence enterprise buying decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default GoToMarketStrategy;