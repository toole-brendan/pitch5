'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { x: -15, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const SupplyChainChallenges: React.FC = () => {
  return (
    <Slide title="Supply Chain Challenges" subtitle="Current pain points in military and commercial sectors">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          {/* Military Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="relative h-full p-6 bg-gray-50 border border-gray-200 shadow-lg rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-mono font-bold rounded">
                  MILITARY
                </span>
                <h2 className="text-lg font-bold">
                  Defense Supply Verification Issues
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    title: "Paper-Based Accountability",
                    description: "Hand receipts and equipment tracking still rely on physical paperwork that is prone to loss, damage, and tampering."
                  },
                  {
                    title: "Verification Gaps",
                    description: "Limited ability to verify equipment origin, maintenance history, and transfer of responsibility between units."
                  },
                  {
                    title: "Antiquated Systems",
                    description: "Legacy database systems lack interoperability, creating information silos and redundancy across units."
                  },
                  {
                    title: "Auditing Complexity",
                    description: "Time-intensive property accountability inspections with limited transparency for higher command visibility."
                  }
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 text-blue-600 font-bold font-mono">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-blue-600 font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">
                  ANNUAL INVENTORY LOSS
                </span>
                <span className="text-xl font-bold text-blue-600">
                  $1.2B+
                </span>
              </div>
            </div>
          </motion.div>

          {/* Commercial Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="relative h-full p-6 bg-gray-50 border border-gray-200 shadow-lg rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-600 text-white text-xs font-mono font-bold rounded">
                  COMMERCIAL
                </span>
                <h2 className="text-lg font-bold">
                  Business Supply Chain Inefficiencies
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    title: "Counterfeiting & Fraud",
                    description: "Counterfeit products and unauthorized distribution channels create significant financial and reputational damage."
                  },
                  {
                    title: "Lack of Transparency",
                    description: "Limited visibility into supply chain origins and handling, particularly for multi-tier supplier networks."
                  },
                  {
                    title: "Compliance Challenges",
                    description: "Difficulty proving regulatory compliance and ethical sourcing across complex global supply chains."
                  },
                  {
                    title: "Inventory Accountability",
                    description: "Difficult to trace product lifecycle from raw materials to end-user, leading to costly recalls and disputes."
                  }
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 text-orange-600 font-bold font-mono">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-mono text-sm text-orange-600 font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">
                  ESTIMATED GLOBAL IMPACT
                </span>
                <span className="text-xl font-bold text-orange-600">
                  $500B+
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default SupplyChainChallenges;
