import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { StatCard } from '@/components/core/Slide';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.15),
      duration: 0.4
    }
  })
};

const CompanyOverview: React.FC = () => {
  return (
    <Slide 
      title="HandReceipt" 
      subtitle="Blockchain-powered supply chain verification"
      variant="default"
      accent="#333333" // Using same accent color for consistency
    >
      <div className="max-w-5xl mx-auto">
        {/* Company Introduction */}
        <motion.div
          variants={fadeIn}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 mb-4">
            <div className="bg-gray-50 text-gray-600 text-xs tracking-[0.2em] font-mono uppercase py-1 px-2 border border-gray-200 inline-block mb-3">
              COMPANY MISSION
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-[180px] h-[60px] bg-gray-800 border border-gray-700 flex items-center justify-center text-white font-medium tracking-wider shrink-0">
                <span className="font-mono tracking-widest">HANDRECEIPT</span>
              </div>
              
              <div>
                <h2 className="text-xl font-medium text-gray-800 mb-2">Secure Supply Verification</h2>
                <p className="text-sm text-gray-600">
                  HandReceipt delivers dual-market supply chain verification for <span className="font-medium">MILITARY</span> and <span className="font-medium">COMMERCIAL</span> applications, providing tamper-proof inventory management with cryptographic authentication.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Core Metrics */}
        <motion.div
          variants={fadeIn}
          custom={1}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <div className="bg-gray-800 text-white text-xs tracking-widest font-mono py-1 px-3 inline-block mb-4 shadow-sm">
              MARKET OPPORTUNITY
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
                <h3 className="text-3xl font-medium text-gray-800">60-90</h3>
                <p className="text-sm text-gray-600">Days payment delay in current supply chains</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
                <h3 className="text-3xl font-medium text-gray-800">$950B</h3>
                <p className="text-sm text-gray-600">Annual cost of inventory inaccuracies</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
                <h3 className="text-3xl font-medium text-gray-800">85%</h3>
                <p className="text-sm text-gray-600">Still use manual inventory processes</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Value Proposition */}
        <motion.div
          variants={fadeIn}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <div className="bg-gray-800 text-white text-xs tracking-widest font-mono py-1 px-3 inline-block mb-4 shadow-sm">
              CORE PROPOSITION
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 border-l-2 border-gray-200 pl-3">
                <h3 className="font-medium text-gray-800 mb-1">Military-Grade Validation</h3>
                <p className="text-sm text-gray-600">
                  Zero-knowledge proof verification with DOD-compliant authentication protocols.
                </p>
              </div>
              
              <div className="flex-1 border-l-2 border-gray-200 pl-3">
                <h3 className="font-medium text-gray-800 mb-1">Blockchain Security</h3>
                <p className="text-sm text-gray-600">
                  Immutable ledger technology ensures tamper-proof record keeping and verification.
                </p>
              </div>
              
              <div className="flex-1 border-l-2 border-gray-200 pl-3">
                <h3 className="font-medium text-gray-800 mb-1">Dual Market Strategy</h3>
                <p className="text-sm text-gray-600">
                  Single platform serving both defense and commercial sectors with shared technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default CompanyOverview;
