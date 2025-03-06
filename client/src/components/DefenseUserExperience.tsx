'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";

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

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const DefenseUserExperience: React.FC = () => {
  return (
    <Slide title="Defense User Experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-8"
      >
        {/* Left Column: Phone Mockup */}
        <div className="md:col-span-5">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-8">
            MOBILE INTERFACE_
          </h3>

          <motion.div 
            variants={phoneVariants}
            className="relative w-full"
          >
            <div className="w-full bg-blue-50 rounded-[2rem] p-3 shadow-lg border border-blue-200">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h4 className="font-mono text-base font-semibold">
                    HANDRECEIPT_
                  </h4>
                  <p className="text-xs text-blue-100">
                    DEFENSE
                  </p>
                </div>

                <div className="p-6">
                  <h5 className="font-mono text-sm font-semibold mb-6">
                    CURRENT INVENTORY
                  </h5>

                  <div className="space-y-4">
                    {[
                      { id: 'MIL-1001', name: 'Radio Component', qty: 5, status: 'In Stock' },
                      { id: 'MIL-1002', name: 'Weapon System Part', qty: 10, status: 'Deployed' },
                      { id: 'MIL-1003', name: 'Aircraft Component', qty: 15, status: 'In Stock' },
                      { id: 'MIL-1004', name: 'Tactical Gear', qty: 20, status: 'Deployed' }
                    ].map((item) => (
                      <motion.div 
                        key={item.id}
                        variants={itemVariants}
                        className="flex items-center border-b border-gray-100 py-4 last:border-0"
                      >
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                          <span className="font-mono text-xs text-blue-700 font-semibold">
                            {item.id}
                          </span>
                        </div>

                        <div className="flex-1">
                          <h6 className="font-sans text-sm font-semibold text-gray-900">
                            {item.name}
                          </h6>
                          <p className="text-xs text-gray-500">
                            Qty: {item.qty} • Status: {item.status}
                          </p>
                        </div>

                        <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                          →
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      className="bg-blue-600 text-white font-mono text-xs uppercase py-2 px-6 rounded-lg transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      SCAN NEW ITEM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Features */}
        <div className="md:col-span-7">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-8">
            DEFENSE-GRADE FEATURES_
          </h3>

          <p className="text-sm text-gray-600 mb-8 font-sans">
            Specialized tools for military logistics and equipment management
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'SECURE AUTHENTICATION',
                description: 'Multi-factor authentication with biometrics and CAC integration',
                icon: '🔐'
              },
              {
                title: 'OFFLINE CAPABILITY',
                description: 'Full functionality in disconnected environments with secure sync',
                icon: '📶'
              },
              {
                title: 'ITEM CUSTODY CHAIN',
                description: 'Complete history of all equipment transfers with digital signatures',
                icon: '📱'
              },
              {
                title: 'TACTICAL DEPLOYMENT',
                description: 'Field-ready interface optimized for quick updates in operations',
                icon: '🛡️'
              },
              {
                title: 'ENCRYPTED DATA',
                description: 'AES-256 encryption for all data at rest and in transit',
                icon: '🔒'
              },
              {
                title: 'MISSION READINESS',
                description: 'Real-time equipment status reports with critical alerts',
                icon: '🚨'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "p-6 bg-blue-50 border border-blue-200 group",
                  "transition-all duration-300 hover:bg-white hover:border-blue-400",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                )}
              >
                <div className="flex items-center mb-4"> 
                  <span className="text-2xl mr-4">{feature.icon}</span>
                  <h4 className="font-mono text-sm text-gray-900 tracking-wide group-hover:text-blue-700">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default DefenseUserExperience;