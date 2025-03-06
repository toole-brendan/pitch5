'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Motion variants from the style guide
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const marketSideVariants = {
  hidden: (custom: string) => ({
    opacity: 0,
    x: custom === 'defense' ? -30 : 30
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.1
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

const MarketOpportunity: React.FC = () => {
  return (
    <Slide title="Market Opportunity">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-hidden">
          {/* Defense Side */}
          <motion.div
            custom="defense"
            variants={marketSideVariants}
            className="h-full flex flex-col"
          >
            <div className="bg-white border border-blue-200 p-6 flex flex-col relative shadow-lg h-full">
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-transparent absolute top-0 left-0" />
              
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-blue-600 mb-6 before:content-['//']">
                Defense Market
              </h3>

              <motion.div variants={itemVariants} className="w-full">
                <div className="bg-gray-50 p-6 mb-4 border-l border-gray-200">
                  <span className="block text-2xl font-mono text-blue-600 mb-1">$25-35B</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    Global Defense Property Management Market
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <div className="bg-white p-4 border-l border-gray-200">
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                      Serviceable Units
                    </span>
                    <span className="block text-xl font-mono text-blue-600 mb-1">1,800+</span>
                    <span className="text-xs text-gray-600">Company-level units in US military alone</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="bg-white p-4 border-l border-gray-200">
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                      Revenue Potential
                    </span>
                    <span className="block text-xl font-mono text-blue-600 mb-1">$300-500M</span>
                    <span className="text-xs text-gray-600">Annual revenue within 5 years</span>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-4">
                <div className="border border-gray-200 p-4">
                  <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                    Target Organizations
                  </span>
                  <div className="flex flex-wrap -m-1">
                    {["US Army", "US Navy", "US Marines", "US Air Force", "National Guard", "Defense Contractors"].map((org) => (
                      <span key={org} className="bg-gray-50 text-xs font-mono px-3 py-1 m-1 rounded">
                        {org}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="flex-1">
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                  Growth Drivers
                </span>
                
                {[
                  "CMMC 2.0 compliance requirements driving modernization",
                  "Congressional mandate for improved accountability",
                  "Military-wide digital transformation initiatives"
                ].map((driver) => (
                  <div key={driver} className="flex items-start gap-4 mb-3">
                    <div className="w-2 h-2 bg-blue-400 mt-2 flex-shrink-0" />
                    <p className="text-sm font-sans text-gray-600">{driver}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Commercial Side */}
          <motion.div
            custom="commercial"
            variants={marketSideVariants}
            className="h-full flex flex-col"
          >
            <div className="bg-white border border-orange-200 p-6 flex flex-col relative shadow-lg h-full">
              <div className="h-1 w-full bg-gradient-to-r from-orange-600 to-transparent absolute top-0 left-0" />
              
              <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-orange-600 mb-6 before:content-['//']">
                Commercial Market
              </h3>

              <motion.div variants={itemVariants} className="w-full">
                <div className="bg-gray-50 p-6 mb-4 border-l border-gray-200">
                  <span className="block text-2xl font-mono text-orange-600 mb-1">$70-85B</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    Global Supply Chain Verification Market
                  </span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <motion.div variants={itemVariants}>
                  <div className="bg-white p-4 border-l border-gray-200">
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                      Initial Target
                    </span>
                    <span className="block text-xl font-mono text-orange-600 mb-1">10,000+</span>
                    <span className="text-xs text-gray-600">SMBs in manufacturing & logistics</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="bg-white p-4 border-l border-gray-200">
                    <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                      Revenue Potential
                    </span>
                    <span className="block text-xl font-mono text-orange-600 mb-1">$800M-1.2B</span>
                    <span className="text-xs text-gray-600">Annual revenue within 5 years</span>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mb-4">
                <div className="border border-gray-200 p-4">
                  <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                    Target Industries
                  </span>
                  <div className="flex flex-wrap -m-1">
                    {["Manufacturing", "Pharmaceutical", "Automotive", "Logistics", "Aerospace", "Electronics"].map((industry) => (
                      <span key={industry} className="bg-gray-50 text-xs font-mono px-3 py-1 m-1 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="flex-1">
                <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-3 before:content-['$'] before:mr-2">
                  Growth Drivers
                </span>
                
                {[
                  "40% growth in supply chain security concerns post-COVID",
                  "Increased focus on supply chain resilience",
                  "Rising demand for end-to-end visibility"
                ].map((driver) => (
                  <div key={driver} className="flex items-start gap-4 mb-3">
                    <div className="w-2 h-2 bg-orange-400 mt-2 flex-shrink-0" />
                    <p className="text-sm font-sans text-gray-600">{driver}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default MarketOpportunity;
