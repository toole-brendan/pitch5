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

const CompetitiveLandscape: React.FC = () => {
  // Enhanced competitor list with blockchain-specific companies
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
      id: "vechain", 
      name: "VeChain", 
      x: 0.7, 
      y: 0.3, 
      key_disadvantages: [
        "Requires third-party oracles for verification",
        "No military or defense applications",
        "Limited integration with legacy ERP systems",
        "Complex token economics for enterprises"
      ],
      color: "bg-green-500"
    },
    { 
      id: "origintrail", 
      name: "OriginTrail", 
      x: 0.65, 
      y: 0.45, 
      key_disadvantages: [
        "No specialized defense compliance features",
        "Requires external oracles for supply chain data",
        "Higher transaction costs due to public chain",
        "Weaker hardware integration capabilities"
      ],
      color: "bg-orange-500"
    },
    { 
      id: "morpheus", 
      name: "Morpheus.Network", 
      x: 0.55, 
      y: 0.35, 
      key_disadvantages: [
        "Less military-grade security features",
        "More focused on documentation than hardware",
        "More complex implementation timeline",
        "Requires third-party oracle solutions"
      ],
      color: "bg-teal-500"
    },
    { 
      id: "northropGrumman", 
      name: "Northrop Grumman", 
      x: 0.25, 
      y: 0.75, 
      key_disadvantages: [
        "GCSS-Army is defense-only, no commercial applications",
        "SAP-based system without blockchain integration",
        "Limited mobile functionality in the field",
        "No payment settlement capabilities"
      ],
      color: "bg-yellow-500"
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
      color: "bg-red-500"
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

  // Consensus mechanism comparison
  const consensusMechanisms = [
    {
      name: "HandReceipt DPoSC",
      description: "Delegated Proof of Supply Chain - optimized for trade and logistics",
      speed: "3-5 seconds",
      energy: "Very Low",
      scalability: "High",
      security: "Military-grade"
    },
    {
      name: "Ethereum PoS",
      description: "Proof of Stake - general purpose consensus",
      speed: "12-15 seconds",
      energy: "Low",
      scalability: "Medium",
      security: "High"
    },
    {
      name: "VeChain PoA",
      description: "Proof of Authority - centralized authority nodes",
      speed: "10 seconds",
      energy: "Low",
      scalability: "Medium",
      security: "Medium-High"
    },
    {
      name: "Hyperledger PBFT",
      description: "Practical Byzantine Fault Tolerance - permissioned setup",
      speed: "1-3 seconds",
      energy: "Low",
      scalability: "Limited",
      security: "High"
    }
  ];

  // Oracle system comparison
  const oracleComparison = [
    {
      feature: "Data Source",
      handreceipt: "Direct from HandReceipt app",
      competitors: "Third-party oracles (Chainlink)"
    },
    {
      feature: "Verification Speed",
      handreceipt: "Immediate (same transaction)",
      competitors: "Multiple block confirmations"
    },
    {
      feature: "Implementation",
      handreceipt: "Native integration",
      competitors: "Additional integration required"
    },
    {
      feature: "Cost",
      handreceipt: "Included in platform",
      competitors: "Additional oracle fees"
    }
  ];

  return (
    <Slide 
      title="Competitive Landscape"
      subtitle="Comprehensive analysis of blockchain and enterprise supply chain competitors"
    >      
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Competition Matrix - Expanded */}
          <div className="md:col-span-7">
            <motion.div 
              variants={slideUp}
              custom={1}
              className="bg-white shadow-sm rounded-sm relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  MARKET POSITIONING
                </span>
              </div>
              
              <div className="p-6 pt-8 relative">
                <div className="relative w-full h-[350px] border-l-2 border-b-2 border-gray-300">
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
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-medium">
                    BLOCKCHAIN CAPABILITY →
                  </span>
                  <span className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-600 font-medium">
                    DEFENSE COMPLIANCE →
                  </span>
                  
                  {/* Quadrant Labels */}
                  <span className="absolute top-[15%] left-[15%] text-xs text-gray-400 opacity-70">
                    TRADITIONAL ERP
                  </span>
                  <span className="absolute top-[15%] right-[10%] text-xs text-gray-400 opacity-70 text-right">
                    COMMERCIAL BLOCKCHAIN
                  </span>
                  <span className="absolute bottom-[10%] left-[15%] text-xs text-gray-400 opacity-70">
                    DEFENSE-ONLY
                  </span>
                  <span className="absolute bottom-[10%] right-[10%] text-xs text-gray-400 opacity-70 text-right">
                    INTEGRATED SOLUTION
                  </span>
                  
                  {/* Competitors */}
                  {competitors.map((competitor, index) => (
                    <motion.div
                      key={competitor.id}
                      variants={slideUp}
                      custom={index + 3}
                      whileHover={{ scale: 1.05 }}
                      className={`absolute ${competitor.color} ${competitor.id === 'handreceipt' ? 'w-[90px] h-[90px] border-4 border-white' : 'w-20 h-20'} rounded-full flex items-center justify-center text-center text-white font-medium text-sm shadow-sm p-2 leading-tight z-10`}
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
              </div>
            </motion.div>
          </div>
          
          {/* Our Advantages */}
          <div className="md:col-span-5 space-y-6">
            <motion.div
              variants={slideUp}
              custom={2}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  OUR ADVANTAGES
                </span>
              </div>
              
              <div className="space-y-3 mt-6">
                {competitors.find(c => c.id === 'handreceipt')?.key_advantages?.map((advantage, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    custom={index + 5}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={slideUp}
              custom={9}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  COMPETITOR LIMITATIONS
                </span>
              </div>
              
              <div className="space-y-4 mt-6">
                {competitors.filter(c => c.id !== 'handreceipt').slice(0, 4).map((competitor, index) => (
                  <div key={competitor.id} className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-3 h-3 rounded-full ${competitor.color}`} />
                      <h4 className="font-medium text-sm">
                        {competitor.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-5">
                      {competitor.key_disadvantages?.[0]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* New Section: Built-in Oracle Advantage */}
          <div className="md:col-span-12">
            <motion.div 
              variants={slideUp}
              custom={10}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  ORACLE ADVANTAGE
                </span>
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <CircuitBoard className="w-8 h-8 text-violet-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Built-in Oracle Integration</h3>
                      <p className="text-gray-600 mt-2">
                        Unlike competitors who rely on third-party oracle services, HandReceipt's built-in oracle creates a seamless connection between physical world events and blockchain validation. This eliminates an entire layer of complexity and potential security vulnerabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full min-w-[400px] text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-2 font-medium text-gray-600">Feature</th>
                          <th className="text-center p-2 font-medium text-violet-600">HandReceipt</th>
                          <th className="text-center p-2 font-medium text-gray-600">Competitors</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oracleComparison.map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-2 font-medium">{row.feature}</td>
                            <td className="p-2 text-center bg-violet-50 text-violet-700 font-medium">{row.handreceipt}</td>
                            <td className="p-2 text-center">{row.competitors}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-gray-50 p-4 rounded-sm w-full">
                      <h4 className="text-base font-medium text-center mb-4">Oracle Integration Flow</h4>
                      
                      {/* Visual Comparison Diagram */}
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-violet-700 text-center mb-3">HandReceipt Approach</h5>
                          <div className="flex flex-col items-center">
                            <div className="bg-violet-100 border border-violet-200 rounded-md p-2 w-full text-center text-xs text-violet-800">
                              QR Scan in HandReceipt App
                            </div>
                            <div className="h-5 w-px bg-violet-300"></div>
                            <ArrowRight className="text-violet-400 h-4 w-4" />
                            <div className="h-5 w-px bg-violet-300"></div>
                            <ArrowRight className="text-violet-400 h-4 w-4" />
                            <div className="h-5 w-px bg-violet-300"></div>
                            <ArrowRight className="text-violet-400 h-4 w-4" />
                            <div className="h-5 w-px bg-violet-300"></div>
                            <div className="bg-violet-300 border border-violet-400 rounded-md p-2 w-full text-center text-xs text-violet-800">
                              Payment Settlement
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-700 text-center mb-3">Competitor Approach</h5>
                          <div className="flex flex-col items-center">
                            <div className="bg-gray-100 border border-gray-200 rounded-md p-2 w-full text-center text-xs text-gray-700">
                              Scan in 3rd Party System
                            </div>
                            <div className="h-5 w-px bg-gray-300"></div>
                            <ArrowRight className="text-gray-400 h-4 w-4" />
                            <div className="h-5 w-px bg-gray-300"></div>
                            <div className="bg-gray-100 border border-gray-200 rounded-md p-2 w-full text-center text-xs text-gray-700">
                              API Call to Oracle Service
                            </div>
                            <div className="h-5 w-px bg-gray-300"></div>
                            <ArrowRight className="text-gray-400 h-4 w-4" />
                            <div className="h-5 w-px bg-gray-300"></div>
                            <div className="bg-gray-100 border border-gray-200 rounded-md p-2 w-full text-center text-xs text-gray-700">
                              Blockchain Transaction
                            </div>
                            <div className="h-5 w-px bg-gray-300"></div>
                            <ArrowRight className="text-gray-400 h-4 w-4" />
                            <div className="h-5 w-px bg-gray-300"></div>
                            <div className="bg-gray-100 border border-gray-200 rounded-md p-2 w-full text-center text-xs text-gray-700">
                              Payment Settlement
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* New Section: Consensus Mechanism Comparison */}
          <div className="md:col-span-6">
            <motion.div 
              variants={slideUp}
              custom={11}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  CONSENSUS COMPARISON
                </span>
              </div>
              
              <div className="mt-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px] text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-2 font-medium text-gray-600">Consensus</th>
                        <th className="text-left p-2 font-medium text-gray-600">Description</th>
                        <th className="text-center p-2 font-medium text-gray-600">Speed</th>
                        <th className="text-center p-2 font-medium text-gray-600">Energy</th>
                        <th className="text-center p-2 font-medium text-gray-600">Security</th>
                      </tr>
                    </thead>
                    <tbody>
                      {consensusMechanisms.map((mechanism, index) => (
                        <tr key={index} className={mechanism.name.includes('HandReceipt') ? 'bg-violet-50' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
                          <td className={`p-2 font-medium ${mechanism.name.includes('HandReceipt') ? 'text-violet-700' : ''}`}>{mechanism.name}</td>
                          <td className="p-2 text-gray-600">{mechanism.description}</td>
                          <td className="p-2 text-center">{mechanism.speed}</td>
                          <td className="p-2 text-center">{mechanism.energy}</td>
                          <td className="p-2 text-center">{mechanism.security}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Key Differentiators */}
          <div className="md:col-span-6">
            <motion.div
              variants={slideUp}
              custom={12}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  KEY DIFFERENTIATORS
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6">
                {differentiators.map((diff, index) => (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    custom={index + 13}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-sm border-l-2 border-l-violet-300"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {diff.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-1">{diff.title}</h4>
                      <p className="text-sm text-gray-600">
                        {diff.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompetitiveLandscape;
