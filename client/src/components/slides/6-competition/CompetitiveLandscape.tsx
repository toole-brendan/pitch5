import React from 'react';
import { motion } from 'framer-motion';
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
  ArrowRight,
  Zap,
  Lock,
  Network,
  Database,
  CircuitBoard,
  Layers
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5 
    }
  })
};

const CompetitiveLandscape = () => {
  // Updated competitor list with more focus on ERP systems
  const competitors = [
    { 
      id: "handreceipt", 
      name: "HandReceipt", 
      x: 0.85, 
      y: 0.85, 
      key_advantages: [
        "Military-grade security adapted for commercial use",
        "Built-in oracle for direct supply chain verification",
        "Immediate payment settlement via Shell tokens",
        "Cross-domain support for defense and commercial"
      ],
      color: "bg-violet-600"
    },
    { 
      id: "sap", 
      name: "SAP Ariba", 
      x: 0.2, 
      y: 0.3, 
      key_disadvantages: [
        "Average $2M+ implementation cost",
        "12-18 month deployment timeline",
        "No blockchain security or digital currency",
        "Not optimized for defense applications"
      ],
      color: "bg-blue-500"
    },
    { 
      id: "oracle", 
      name: "Oracle SCM", 
      x: 0.25, 
      y: 0.4, 
      key_disadvantages: [
        "High cost of ownership",
        "Complex implementation process",
        "Limited blockchain integration",
        "Rigid architecture for defense-specific needs"
      ],
      color: "bg-red-500"
    },
    { 
      id: "microsoft", 
      name: "MS Dynamics 365", 
      x: 0.3, 
      y: 0.25, 
      key_disadvantages: [
        "Limited supply chain verification features",
        "No native payment settlement capabilities",
        "Requires third-party blockchain integration",
        "Minimal defense sector customization"
      ],
      color: "bg-green-500"
    },
    { 
      id: "netsuite", 
      name: "NetSuite SCM", 
      x: 0.35, 
      y: 0.2, 
      key_disadvantages: [
        "Limited military/defense capabilities",
        "No native blockchain verification",
        "Requires extensive customization",
        "No integrated payment solution"
      ],
      color: "bg-yellow-500"
    },
    { 
      id: "gcssArmy", 
      name: "GCSS-Army (NG)", 
      x: 0.25, 
      y: 0.75, 
      key_disadvantages: [
        "Defense-only, no commercial applications",
        "Limited blockchain security features", 
        "Minimal integration with commercial systems",
        "Lacks payment settlement capabilities"
      ],
      color: "bg-blue-700"
    },
    { 
      id: "ibm", 
      name: "IBM Blockchain", 
      x: 0.6, 
      y: 0.55, 
      key_disadvantages: [
        "Requires expensive Hyperledger consultants",
        "No specialized military compliance features",
        "No native token for payment settlement",
        "Over-engineered for most applications"
      ],
      color: "bg-purple-500"
    }
  ];

  // Comparison data for ERP systems
  const comparisonData = [
    {
      feature: "Implementation Cost",
      handreceipt: "$200K-500K",
      sap: "$2M+",
      oracle: "$1.5M+",
      microsoft: "$750K+",
      netsuite: "$500K+"
    },
    {
      feature: "Implementation Time",
      handreceipt: "3-6 months",
      sap: "12-18 months",
      oracle: "12-24 months",
      microsoft: "6-12 months",
      netsuite: "6-10 months"
    },
    {
      feature: "Blockchain Security",
      handreceipt: "Native",
      sap: "Limited",
      oracle: "Third-party",
      microsoft: "None",
      netsuite: "None"
    },
    {
      feature: "Payment Settlement",
      handreceipt: "Immediate",
      sap: "Traditional",
      oracle: "Traditional",
      microsoft: "Traditional",
      netsuite: "Traditional"
    },
    {
      feature: "Defense Compatibility",
      handreceipt: "Native",
      sap: "Moderate",
      oracle: "Moderate",
      microsoft: "Limited",
      netsuite: "Limited"
    }
  ];

  // Enhanced differentiators with blockchain-specific advantages
  const differentiators = [
    {
      title: "Built-in Oracle System",
      description: "Direct integration between physical supply chain events and blockchain validation without third-party oracles",
      icon: <CircuitBoard className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Military-Grade Security",
      description: "Defense-level encryption and access controls brought to commercial applications",
      icon: <Lock className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Delegated Proof of Supply Chain",
      description: "Proprietary consensus mechanism optimized for trade operations and supply chain validation",
      icon: <Layers className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Shell Token Settlement",
      description: "Immediate payment settlement eliminating 60-90 day delays in traditional supply chains",
      icon: <Coins className="w-5 h-5 text-violet-600" />
    }
  ];

  return (
    <Slide 
      title="Competitive Landscape"
      subtitle="Analysis against enterprise ERP systems and blockchain solutions"
      fullWidth={true}
    >      
      {/* More horizontal, less vertical layout */}
      <div className="flex flex-col space-y-4">
        {/* Row 1: Market Positioning + ERP Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Market Positioning Matrix (3 columns) */}
          <motion.div 
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-white shadow-sm rounded-sm relative p-4 lg:col-span-3"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MARKET POSITIONING
              </span>
            </div>
            
            <div className="relative w-full h-[280px] border-l-2 border-b-2 border-gray-300 mt-4">
              {/* Grid Lines */}
              <div className="absolute inset-0">
                {[25, 50, 75].map((pos) => (
                  <React.Fragment key={pos}>
                    <div className="absolute w-full h-px bg-gray-200" style={{ top: `${pos}%` }} />
                    <div className="absolute h-full w-px bg-gray-200" style={{ left: `${pos}%` }} />
                  </React.Fragment>
                ))}
              </div>
              
              {/* Axis Labels */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-600 font-medium">
                BLOCKCHAIN CAPABILITY →
              </span>
              <span className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-600 font-medium">
                DEFENSE COMPLIANCE →
              </span>
              
              {/* Quadrant Labels */}
              <span className="absolute top-[15%] left-[15%] text-[10px] text-gray-400 opacity-70">
                TRADITIONAL ERP SYSTEMS
              </span>
              <span className="absolute top-[15%] right-[10%] text-[10px] text-gray-400 opacity-70 text-right">
                BLOCKCHAIN PLATFORMS
              </span>
              <span className="absolute bottom-[10%] left-[15%] text-[10px] text-gray-400 opacity-70">
                DEFENSE-SPECIFIC SOLUTIONS
              </span>
              <span className="absolute bottom-[10%] right-[10%] text-[10px] text-gray-400 opacity-70 text-right">
                INTEGRATED SOLUTION
              </span>
              
              {/* Competitors */}
              {competitors.map((competitor, index) => (
                <motion.div
                  key={competitor.id}
                  variants={slideUp}
                  custom={index + 3}
                  whileHover={{ scale: 1.05 }}
                  className={`absolute ${competitor.color} ${competitor.id === 'handreceipt' ? 'w-16 h-16 border-2 border-white' : 'w-14 h-14'} rounded-full flex items-center justify-center text-center text-white font-medium text-xs shadow-sm p-1 leading-tight z-10`}
                  style={{
                    top: `${(1 - competitor.y) * 100}%`,
                    left: `${competitor.x * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {competitor.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Our Advantages (2 columns) */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="bg-white shadow-sm rounded-sm p-4 relative lg:col-span-2"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                OUR ADVANTAGES
              </span>
            </div>
            
            <div className="mt-4">
              {competitors.find(c => c.id === 'handreceipt')?.key_advantages?.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  custom={index + 5}
                  className="flex items-center gap-2 mb-2"
                >
                  <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2: Oracle Integration + Competitor Limitations + Key Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Oracle Advantage */}
          <motion.div 
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="bg-white shadow-sm rounded-sm p-4 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                ORACLE ADVANTAGE
              </span>
            </div>
            
            <div className="mt-3">
              <div className="flex items-start gap-2 mb-2">
                <CircuitBoard className="w-5 h-5 text-violet-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Built-in Oracle Integration</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-tight">
                    Unlike competitors who rely on third-party oracle services, HandReceipt's built-in oracle creates a seamless connection between physical world events and blockchain validation.
                  </p>
                </div>
              </div>
              
              {/* Visual Oracle Flow */}
              <div className="bg-gray-50 p-3 rounded-sm mt-2">
                <h4 className="text-xs font-medium text-center mb-2">Oracle Integration Flow</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-xs font-medium text-violet-700 text-center mb-2">HandReceipt</h5>
                    <div className="flex flex-col items-center">
                      <div className="bg-violet-100 border border-violet-200 rounded-md p-1.5 w-full text-center text-xs text-violet-800">
                        QR Scan in HandReceipt
                      </div>
                      <div className="h-3 w-px bg-violet-300"></div>
                      <ArrowRight className="text-violet-400 h-3 w-3" />
                      <div className="h-3 w-px bg-violet-300"></div>
                      <div className="bg-violet-300 border border-violet-400 rounded-md p-1.5 w-full text-center text-xs text-violet-800">
                        Payment Settlement
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-xs font-medium text-gray-700 text-center mb-2">Competitors</h5>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-100 border border-gray-200 rounded-md p-1.5 w-full text-center text-xs text-gray-700">
                        3rd Party System
                      </div>
                      <div className="h-3 w-px bg-gray-300"></div>
                      <ArrowRight className="text-gray-400 h-3 w-3" />
                      <div className="h-3 w-px bg-gray-300"></div>
                      <div className="bg-gray-100 border border-gray-200 rounded-md p-1.5 w-full text-center text-xs text-gray-700">
                        Oracle Service
                      </div>
                      <div className="h-3 w-px bg-gray-300"></div>
                      <ArrowRight className="text-gray-400 h-3 w-3" />
                      <div className="h-3 w-px bg-gray-300"></div>
                      <div className="bg-gray-100 border border-gray-200 rounded-md p-1.5 w-full text-center text-xs text-gray-700">
                        Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Competitor Limitations */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="bg-white shadow-sm rounded-sm p-4 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                COMPETITOR LIMITATIONS
              </span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 gap-y-2">
              {competitors.filter(c => c.id !== 'handreceipt').slice(0, 4).map((competitor, index) => (
                <div key={competitor.id} className="flex items-start gap-2">
                  <div className={`w-3 h-3 rounded-full ${competitor.color} mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-medium text-xs">
                      {competitor.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-tight">
                      {competitor.key_disadvantages?.[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="bg-white shadow-sm rounded-sm p-4 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                KEY DIFFERENTIATORS
              </span>
            </div>
            
            <div className="mt-4 space-y-2">
              {differentiators.slice(0, 4).map((diff, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  custom={index + 7}
                  className="flex items-start gap-2 p-2 bg-gray-50 rounded-sm border-l-2 border-l-violet-300"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {diff.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-900">{diff.title}</h4>
                    <p className="text-xs text-gray-600 leading-tight">
                      {diff.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 3: ERP Comparison Table */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="bg-white shadow-sm rounded-sm p-4 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              ERP SYSTEMS COMPARISON
            </span>
          </div>
          
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 text-xs font-medium text-gray-600">Feature</th>
                  <th className="text-center p-2 text-xs font-medium text-violet-700">HandReceipt</th>
                  <th className="text-center p-2 text-xs font-medium text-gray-600">SAP Ariba</th>
                  <th className="text-center p-2 text-xs font-medium text-gray-600">Oracle SCM</th>
                  <th className="text-center p-2 text-xs font-medium text-gray-600">MS Dynamics</th>
                  <th className="text-center p-2 text-xs font-medium text-gray-600">NetSuite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2 text-xs font-medium">{row.feature}</td>
                    <td className="p-2 text-center bg-violet-50 text-violet-700 text-xs font-medium">{row.handreceipt}</td>
                    <td className="p-2 text-center text-xs">{row.sap}</td>
                    <td className="p-2 text-center text-xs">{row.oracle}</td>
                    <td className="p-2 text-center text-xs">{row.microsoft}</td>
                    <td className="p-2 text-center text-xs">{row.netsuite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default CompetitiveLandscape;
