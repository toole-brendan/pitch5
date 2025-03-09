import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  Clock, 
  Zap, 
  TrendingUp, 
  Shield, 
  Wallet, 
  BarChart3, 
  Calendar,
  AlertTriangle,
  FileText,
  CreditCard,
  Lock,
  Globe,
  ArrowRight,
  Asterisk,
  CircleDollarSign,
  FileSearch,
  ClipboardCheck,
  Building,
  Bitcoin,
  ChevronsUp,
  Check
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const WhyNow: React.FC = () => {
  // Enhanced timing factors with DOGE initiative, defense spending cuts, and crypto regulation
  const timingFactors = [
    {
      title: "DOGE Initiative",
      icon: <CircleDollarSign className="h-5 w-5 text-violet-600" />,
      description: "Trump's Department of Government Efficiency mandates modernizing federal technology",
      stat: "$68B",
      statLabel: "Annual defense cuts targeted",
      key: "doge"
    },
    {
      title: "Crypto Regulation Clarity",
      icon: <Bitcoin className="h-5 w-5 text-violet-600" />,
      description: "New regulatory framework making the US the 'crypto capital of the planet'",
      stat: "180",
      statLabel: "Days to create framework",
      key: "crypto"
    },
    {
      title: "Stablecoin Framework",
      icon: <Wallet className="h-5 w-5 text-violet-600" />,
      description: "Clear regulatory structure for stablecoins under Trump's crypto working group",
      stat: "$249B",
      statLabel: "Stablecoin market cap",
      key: "stablecoin"
    },
    {
      title: "DoD Audit Mandate",
      icon: <FileSearch className="h-5 w-5 text-violet-600" />,
      description: "Defense Secretary Hegseth demanding clean financial audit by 2028",
      stat: "8%",
      statLabel: "Annual defense budget reduction",
      key: "audit"
    },
    {
      title: "Streamlined Procurement",
      icon: <Building className="h-5 w-5 text-violet-600" />,
      description: "DOGE initiatives opening procurement to innovative defense solutions",
      stat: "2025",
      statLabel: "Implementation deadline",
      key: "procurement"
    },
    {
      title: "Supply Chain Crisis",
      icon: <AlertTriangle className="h-5 w-5 text-violet-600" />,
      description: "Post-pandemic inventory verification failures at all-time high",
      stat: "$1.1T",
      statLabel: "Annual inventory distortion",
      key: "supply"
    }
  ];

  // Market catalyst events timeline - updated with crypto events
  const catalystEvents = [
    {
      date: "Q2 2024",
      event: "Bitcoin surpasses $100,000",
      description: "Crypto market gains momentum ahead of expected regulatory clarity",
      completed: true
    },
    {
      date: "Jan 20, 2025",
      event: "DOGE Initiative Launched",
      description: "Trump establishes Department of Government Efficiency led by Elon Musk",
      completed: true,
      highlight: true
    },
    {
      date: "Jan 23, 2025",
      event: "Crypto Executive Order",
      description: "Working group established to create clear framework for digital assets",
      completed: true,
      highlight: true
    },
    {
      date: "Feb 2025",
      event: "DoD 8% Budget Cut Directive",
      description: "Defense Secretary orders significant spending reductions while maintaining capabilities",
      completed: true,
      highlight: true
    },
    {
      date: "March 2025",
      event: "SEC 'Crypto 2.0' Task Force",
      description: "New regulatory approach focusing on clarity rather than enforcement",
      completed: false
    },
    {
      date: "July 2025",
      event: "Crypto Framework Deadline",
      description: "180-day mandate for comprehensive digital asset regulations",
      completed: false
    }
  ];

  // Dual columns of opportunity factors - defense and crypto
  const opportunityColumns = [
    {
      title: "Defense Modernization",
      items: [
        "Procurement Overhaul: Streamlining acquisition process",
        "Audit Requirements: Clean financial audit mandate", 
        "Cost Reduction: 8% annual budget cuts ($68B/year)",
        "Tech Focus: Maintain capabilities with fewer resources"
      ]
    },
    {
      title: "Crypto Transformation",
      items: [
        "Regulatory Clarity: Ending 'regulation by enforcement'",
        "Pro-Crypto Leadership: New SEC and CFTC appointments",
        "Stablecoin Framework: Priority focus for working group",
        "Institutional Adoption: Major banks entering crypto space"
      ]
    }
  ];

  return (
    <Slide 
      title="Why Now" 
      subtitle="Trump administration policies create perfect opportunity for HandReceipt"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Trump Policy Convergence */}
        <motion.div
          variants={cardVariants}
          custom={0}
          className="bg-white shadow-sm rounded-sm p-6 relative mb-6"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              DUAL POLICY CONVERGENCE
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <div className="md:col-span-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Two major Trump administration initiatives have created a
                <span className="text-violet-600 font-bold"> historic window of opportunity</span> for HandReceipt:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-violet-50 border-l-4 border-violet-400 p-3">
                  <h3 className="flex items-center gap-2 font-medium text-violet-800">
                    <Shield className="h-5 w-5 text-violet-600" />
                    Defense Efficiency Mandate
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    DOGE initiative and 8% defense cuts ($68B/year) require DoD to modernize technology while reducing costs, creating urgent demand for efficiency solutions.
                  </p>
                </div>
                
                <div className="bg-violet-50 border-l-4 border-violet-400 p-3">
                  <h3 className="flex items-center gap-2 font-medium text-violet-800">
                    <Bitcoin className="h-5 w-5 text-violet-600" />
                    Crypto Regulatory Clarity
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">
                    Executive Order establishing clear frameworks for cryptocurrencies and stablecoins, with a mandate to make the US the "crypto capital of the planet."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-violet-50 border border-violet-200 rounded-sm p-4 h-full flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-violet-800 font-medium mb-2">Convergence Timeline</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-violet-600" />
                    <p className="text-3xl font-bold text-violet-700">12-18</p>
                  </div>
                  <p className="text-sm text-violet-600">months to capitalize on both initiatives</p>
                  
                  <div className="mt-4 pt-4 border-t border-violet-200">
                    <p className="text-xs text-violet-700">
                      HandReceipt's defense-grade blockchain + Shell token is the <span className="font-bold">perfect solution</span> for both mandates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Opportunity Grid - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunityColumns.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              variants={cardVariants}
              custom={colIndex + 1}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <h3 className="font-medium text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="bg-violet-100 text-violet-600 rounded-full p-1 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Market Catalyst Timeline with DOGE and Crypto */}
        <motion.div
          variants={cardVariants}
          custom={3}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              KEY CATALYSTS TIMELINE
            </span>
          </div>
          
          <div className="mt-6 relative">
            {/* Timeline Line */}
            <div className="absolute left-[150px] top-8 bottom-8 w-0.5 bg-gray-200 md:block hidden"></div>
            
            <div className="space-y-6 md:space-y-0">
              {catalystEvents.map((event, index) => (
                <div key={index} className="relative md:flex md:items-start mb-6 md:mb-0">
                  {/* Date Column */}
                  <div className="w-[150px] flex-shrink-0 mb-2 md:mb-0">
                    <div className="font-medium text-gray-900">{event.date}</div>
                  </div>
                  
                  {/* Timeline Marker */}
                  <div className="absolute left-[145.5px] top-1.5 hidden md:block">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ${event.highlight ? 'bg-violet-600' : (event.completed ? 'bg-violet-100 border border-violet-300' : 'bg-gray-100 border border-gray-300')}`}>
                      <div className={`h-2 w-2 rounded-full ${event.highlight ? 'bg-white' : (event.completed ? 'bg-violet-500' : 'bg-gray-400')}`}></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:pl-8 ${event.highlight ? 'bg-violet-50 p-3 border border-violet-200' : ''}`}>
                    <h4 className={`font-medium ${event.highlight ? 'text-violet-800' : 'text-gray-900'}`}>{event.event}</h4>
                    <p className={`text-sm mt-1 ${event.highlight ? 'text-violet-600' : 'text-gray-600'}`}>{event.description}</p>
                    {event.date === "Jan 23, 2025" && (
                      <div className="flex items-center gap-2 mt-2">
                        <Asterisk className="h-4 w-4 text-violet-600" />
                        <p className="text-xs text-violet-700 font-medium">We are here - perfect timing for HandReceipt + Shell token</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timing Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {timingFactors.map((factor, index) => (
            <motion.div 
              key={factor.key}
              variants={cardVariants}
              custom={index + 4}
              className={`p-4 bg-white shadow-sm rounded-sm ${factor.key === 'crypto' || factor.key === 'stablecoin' ? 'border-l-2 border-l-violet-400' : ''}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 p-2 bg-violet-50 rounded-full">
                  {factor.icon}
                </div>
                <h3 className="text-base font-medium text-gray-900">{factor.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {factor.description}
              </p>
              <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center">
                <motion.div 
                  className="text-xl font-bold text-violet-600"
                >
                  {factor.stat}
                </motion.div>
                <div className="text-xs text-gray-500">{factor.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* HandReceipt Position Statement */}
        <motion.div
          variants={cardVariants}
          custom={10}
          className="bg-violet-50 p-4 border border-violet-200 rounded-sm"
        >
          <div className="flex gap-3 items-center">
            <ChevronsUp className="w-6 h-6 text-violet-700 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-violet-800">HandReceipt + Shell Token: The Perfect Solution for Both Mandates</h3>
              <p className="text-sm text-violet-700 mt-1">
                Our military-grade blockchain solution with integrated Shell token directly addresses both Trump administration initiatives: defense efficiency through inventory optimization and crypto advancement through stablecoin payments—precisely when both are national priorities.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default WhyNow; 