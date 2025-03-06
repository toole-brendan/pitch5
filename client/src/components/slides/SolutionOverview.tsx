'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, School, Users, TrendingUp, BarChart } from 'lucide-react';

// Motion variants
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

const phoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const metricsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

const SolutionOverview: React.FC = () => {
  return (
    <Slide title="Solution Overview">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        {/* Mobile App Mockup */}
        <div className="md:col-span-4 relative flex flex-col items-center justify-center">
          <motion.div
            variants={metricsVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-5 -right-5 z-10 bg-white border border-gray-200 border-l-4 border-l-blue-500 p-4 shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-2xl font-mono text-blue-600 mr-2">75%</span>
                <span className="text-xs text-gray-600">Faster verification_</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-mono text-blue-600 mr-2">90%</span>
                <span className="text-xs text-gray-600">Less paperwork_</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-mono text-blue-600 mr-2">99.5%</span>
                <span className="text-xs text-gray-600">Inventory accuracy_</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[280px] h-[500px] bg-gray-100 rounded-3xl p-3 shadow-xl border border-blue-500 relative"
          >
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center font-mono">
                <span>HANDRECEIPT_</span>
                <span>v1.2</span>
              </div>
              
              <div className="flex-1 p-4 space-y-4">
                <h3 className="font-mono font-semibold">INVENTORY_MANAGEMENT</h3>
                
                <div className="h-40 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 border border-gray-300 p-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 bg-gray-200 mb-2 ${i === 4 ? 'w-2/5' : 'w-full'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <div className="relative w-full h-2 bg-gray-200 mb-2 overflow-hidden rounded">
                    <div className="absolute top-0 left-0 h-full w-4/5 bg-blue-500" />
                  </div>
                  <p className="text-sm font-mono text-blue-600 text-center">VERIFICATION: 80%_</p>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded font-mono">
                  SCAN_ITEM
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <div className="md:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h2 className="text-2xl font-mono text-gray-900">BLOCKCHAIN-POWERED PROCESS_</h2>
            
            {/* Process Steps */}
            <div className="relative">
              <div className="absolute top-8 left-[10%] w-[80%] h-0.5 bg-gray-200" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                  { step: 1, label: "QR Scanning" },
                  { step: 2, label: "Blockchain Verification" },
                  { step: 3, label: "Digital Signature" },
                  { step: 4, label: "Record Storage" }
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-blue-600 text-white flex items-center justify-center font-mono text-lg rounded">
                      {item.step}
                    </div>
                    <p className="text-sm font-mono text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Blockchain Technology",
                  description: "Secure, immutable record-keeping system",
                  items: [
                    "Private blockchain for military security",
                    "Public blockchain for commercial transparency",
                    "Smart contract capabilities"
                  ]
                },
                {
                  title: "Secure Digital Records",
                  description: "Tamper-proof documentation and tracking",
                  items: [
                    "Digital signatures with biometric verification",
                    "Real-time tracking and updates",
                    "Historical audit trail"
                  ]
                },
                {
                  title: "Simple Mobile Interface",
                  description: "Intuitive scanning and verification",
                  items: [
                    "Standard mobile device compatibility",
                    "No specialized hardware required",
                    "Works offline with sync capability"
                  ]
                },
                {
                  title: "Reduced Manual Work",
                  description: "Streamlined operations and reporting",
                  items: [
                    "90% reduction in manual documentation",
                    "Automated compliance reporting",
                    "Error rates reduced to under 0.5%"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center font-mono text-sm mr-2">
                      {index + 1}
                    </div>
                    <h3 className="font-mono text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-2">{'>'}</span>
                        <span className="text-sm font-mono text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolutionOverview;
