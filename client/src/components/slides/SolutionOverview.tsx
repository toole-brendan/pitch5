'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, ArrowRight, Smartphone, Database, GitMerge, CreditCard } from 'lucide-react';

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
    <Slide title="Solution Overview" subtitle="Blockchain-secured supply chain verification with dual-market application">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 h-full">
        {/* Mobile App Mockup */}
        <div className="md:col-span-4 relative flex flex-col items-center justify-center">
          <motion.div
            variants={metricsVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-2 -right-2 md:-top-5 md:-right-5 z-10 bg-white border border-purple-200 shadow-sm p-2 md:p-4"
          >
            <div className="space-y-1 md:space-y-3">
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-mono text-purple-600 mr-1 md:mr-2">60-90</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-600">Days reduced_</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-mono text-purple-600 mr-1 md:mr-2">100%</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-600">Digital tracking_</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-mono text-purple-600 mr-1 md:mr-2">Real-time</span>
                <span className="text-[10px] md:text-xs uppercase tracking-wide text-gray-600">Visibility_</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[180px] md:max-w-[230px] h-[300px] md:h-[400px] bg-white p-2 md:p-3 border border-gray-300 relative shadow-md"
          >
            <div className="w-full h-full bg-white border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-purple-100 border-b border-purple-200 text-purple-800 px-2 py-2 md:px-4 md:py-3 flex justify-between items-center font-mono text-xs md:text-sm">
                <span>HANDRECEIPT_</span>
                <span>v1.2</span>
              </div>

              <div className="flex-1 p-2 md:p-4 space-y-3 md:space-y-4">
                <div className="section-header text-[10px] md:text-xs">INVENTORY_MANAGEMENT</div>

                <div className="bg-gray-50 border border-gray-200 h-20 md:h-32 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 border border-gray-300 p-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 md:h-2 bg-gray-200 mb-1 md:mb-2 ${i === 4 ? 'w-2/5' : 'w-full'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-2 md:p-4">
                  <div className="relative w-full h-1 md:h-2 bg-gray-200 mb-1 md:mb-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-4/5 bg-purple-600" />
                  </div>
                  <p className="text-xs font-mono text-purple-600 text-center">VERIFICATION: 80%_</p>
                </div>

                <button className="w-full bg-purple-100 border border-purple-300 py-1 px-2 md:py-2 md:px-4 text-purple-800 font-mono text-xs hover:bg-purple-200">
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
            className="space-y-4 md:space-y-6"
          >
            <div className="section-header mb-1 md:mb-2">MULTI-DOMAIN SOLUTION</div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-900">Secure verification across domains</h2>

            {/* Process Steps */}
            <div className="relative mt-4 md:mt-8">
              <div className="absolute top-6 md:top-8 left-[10%] w-[80%] h-[1px] bg-gray-200" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 relative z-10">
                {[
                  { step: 1, icon: <Smartphone size={16} />, label: "QR Scan" },
                  { step: 2, icon: <Database size={16} />, label: "Blockchain" },
                  { step: 3, icon: <GitMerge size={16} />, label: "Smart Contract" },
                  { step: 4, icon: <CreditCard size={16} />, label: "Settlement" }
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center font-mono text-base rounded-full">
                      {item.icon}
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4">
              {[
                {
                  title: "Military Application",
                  description: "Secure property tracking",
                  items: [
                    "QR-code digital transfers",
                    "Blockchain-secured records",
                    "Paper process digitization"
                  ]
                },
                {
                  title: "Commercial Integration",
                  description: "Enterprise compatibility",
                  items: [
                    "Existing scan infrastructure",
                    "ERP/WMS integration",
                    "Enterprise software APIs"
                  ]
                },
                {
                  title: "Smart Contracts",
                  description: "Customizable payments",
                  items: [
                    "Inventory-based triggers",
                    "Sales level conditions",
                    "Shell token payments"
                  ]
                },
                {
                  title: "Supply Chain Finance",
                  description: "Payment solutions",
                  items: [
                    "Immediate settlement",
                    "Working capital options",
                    "Reduced payment cycles"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-3 md:p-4 relative shadow-sm text-sm">
                  <div className="absolute -top-2 left-4 md:-top-3 md:left-6">
                    <span className="bg-white text-gray-900 text-[10px] md:text-xs tracking-widest font-mono py-0.5 px-2 md:py-1 md:px-3 border border-gray-200 shadow-sm">
                      {index === 0 || index === 1 ? 'DOMAIN' : 'FUNCTION'}
                    </span>
                  </div>
                  <div className="mt-3 mb-2">
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 flex items-center justify-center border border-gray-200 mr-2 bg-gray-50">
                        {index === 0 && <Database size={14} className="text-purple-600" />}
                        {index === 1 && <Smartphone size={14} className="text-purple-600" />}
                        {index === 2 && <GitMerge size={14} className="text-purple-600" />}
                        {index === 3 && <CreditCard size={14} className="text-purple-600" />}
                      </div>
                      <h3 className="font-medium text-sm md:text-base text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 ml-8">{feature.description}</p>
                  </div>
                  <div className="h-[1px] bg-gray-200 w-full my-2"></div>
                  <ul className="space-y-1">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-600 mr-1"><ArrowRight size={12} /></span>
                        <span className="text-xs text-gray-700">{item}</span>
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