import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Shield, Zap, Award, Lock, TrendingUp, BarChart3, Gift, Banknote } from 'lucide-react';

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
  // Specific named competitors with detailed disadvantages
  const competitors = [
    { 
      id: "handreceipt", 
      name: "HandReceipt", 
      x: 0.85, 
      y: 0.85, 
      key_advantages: [
        "Military-grade security adapted for commercial use",
        "Immediate payment settlement via Shell tokens",
        "Mobile-first experience with QR code scanning",
        "Both defense and commercial applications"
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
        "Requires dedicated IT management",
        "No blockchain security or digital currency"
      ],
      color: "bg-blue-500"
    },
    { 
      id: "vechain", 
      name: "VeChain", 
      x: 0.7, 
      y: 0.3, 
      key_disadvantages: [
        "No military or defense applications",
        "Limited integration with legacy ERP systems",
        "Complex token economics for enterprises",
        "Lacks specialized defense compliance features"
      ],
      color: "bg-green-500"
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

  // Enhanced, more specific differentiators
  const differentiators = [
    {
      title: "Dual-Market Solution",
      description: "Only platform offering both defense and commercial applications with shared infrastructure",
      icon: <Shield className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Military Compliance",
      description: "Built to DoD specifications with CAC integration and NIST 800-53 controls",
      icon: <Lock className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Token Economics",
      description: "Proprietary Shell token (SHL) enables immediate payment settlement and supply chain finance",
      icon: <Banknote className="w-5 h-5 text-violet-600" />
    },
    {
      title: "Implementation Speed",
      description: "90-day deployment vs industry average of 12-18 months for ERP solutions",
      icon: <Zap className="w-5 h-5 text-violet-600" />
    }
  ];

  // ROI comparison metrics
  const roiMetrics = [
    {
      metric: "Implementation Cost",
      handreceipt: "$75K-150K",
      competitor: "$2M-5M",
      icon: <BarChart3 className="w-5 h-5 text-violet-600" />
    },
    {
      metric: "Time to Deploy",
      handreceipt: "90 days",
      competitor: "12-18 months",
      icon: <TrendingUp className="w-5 h-5 text-violet-600" />
    },
    {
      metric: "Payment Processing",
      handreceipt: "Immediate",
      competitor: "60-90 days",
      icon: <Gift className="w-5 h-5 text-violet-600" />
    }
  ];

  return (
    <Slide 
      title="Competitive Landscape"
      subtitle="Market positioning against established players in both defense and commercial sectors"
    >      
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Competition Matrix */}
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
                    GENERIC SOLUTIONS
                  </span>
                  <span className="absolute top-[15%] right-[10%] text-xs text-gray-400 opacity-70 text-right">
                    BLOCKCHAIN-ONLY
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
                {competitors.filter(c => c.id !== 'handreceipt').map((competitor, index) => (
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
          
          {/* ROI Metrics Comparison - New Section */}
          <div className="md:col-span-6">
            <motion.div 
              variants={slideUp}
              custom={10}
              className="bg-white shadow-sm rounded-sm p-6 relative"
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  ROI COMPARISON
                </span>
              </div>
              
              <div className="mt-6 space-y-4">
                {roiMetrics.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-1">
                      {item.icon}
                    </div>
                    <div className="col-span-3 text-sm text-gray-700">
                      {item.metric}
                    </div>
                    <div className="col-span-4 p-2 bg-violet-50 border border-violet-100 text-sm font-medium text-violet-700 text-center">
                      {item.handreceipt}
                    </div>
                    <div className="col-span-4 p-2 bg-gray-50 border border-gray-100 text-sm text-gray-500 text-center">
                      {item.competitor}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Key Differentiators */}
          <div className="md:col-span-6">
            <motion.div
              variants={slideUp}
              custom={11}
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
                    custom={index + 12}
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
