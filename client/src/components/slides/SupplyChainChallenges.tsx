'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { AlertTriangle, Clock, Database, FileWarning, ShieldX, AlertCircle, BarChart, FileSearch } from 'lucide-react';

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
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const SupplyChainChallenges: React.FC = () => {
  // Military challenges
  const militaryChallenges = [
    {
      icon: <FileWarning className="w-6 h-6 text-purple-400" />,
      title: "Paper-Based Accountability",
      description: "Hand receipts and equipment tracking still rely on physical paperwork that is prone to loss, damage, and tampering."
    },
    {
      icon: <ShieldX className="w-6 h-6 text-purple-400" />,
      title: "Verification Gaps",
      description: "Limited ability to verify equipment origin, maintenance history, and transfer of responsibility between units."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Antiquated Systems",
      description: "Legacy database systems lack interoperability, creating information silos and redundancy across units."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Auditing Complexity",
      description: "Time-intensive property accountability inspections with limited transparency for higher command visibility."
    }
  ];

  // Commercial challenges
  const commercialChallenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-400" />,
      title: "Counterfeiting & Fraud",
      description: "Counterfeit products and unauthorized distribution channels create significant financial and reputational damage."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-amber-400" />,
      title: "Lack of Transparency",
      description: "Limited visibility into supply chain origins and handling, particularly for multi-tier supplier networks."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-amber-400" />,
      title: "Compliance Challenges",
      description: "Difficulty proving regulatory compliance and ethical sourcing across complex global supply chains."
    },
    {
      icon: <BarChart className="w-6 h-6 text-amber-400" />,
      title: "Inventory Accountability",
      description: "Difficult to trace product lifecycle from raw materials to end-user, leading to costly recalls and disputes."
    }
  ];

  return (
    <Slide>
      <div className="absolute top-10 left-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs text-white/50 uppercase tracking-[0.2em]"
        >
          INDUSTRY CHALLENGES
        </motion.div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-20"
      >
        <div className="mb-12 max-w-3xl">
          <motion.h1 
            variants={sectionVariants}
            className="text-3xl font-light text-white mb-4"
          >
            Supply Chain Challenges
          </motion.h1>
          <motion.p 
            variants={sectionVariants}
            className="text-gray-400"
          >
            Current pain points driving the need for HandReceipt's blockchain solution in defense and commercial sectors
          </motion.p>
          <motion.div
            variants={sectionVariants}
            className="h-[1px] w-24 bg-purple-600 mt-6"
          />
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Military Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="enterprise-card relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-black text-white text-xs tracking-widest font-mono py-1 px-3 border border-purple-800">
                  MILITARY
                </span>
              </div>
              
              <div className="mt-6">
                <ul className="space-y-6">
                  {militaryChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white text-base font-light mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider"></div>

              <div className="flex items-center justify-between">
                <span className="section-header">
                  ANNUAL INVENTORY LOSS
                </span>
                <span className="data-value">
                  $1.2B+
                </span>
              </div>
            </div>
          </motion.div>

          {/* Commercial Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="enterprise-card relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-black text-white text-xs tracking-widest font-mono py-1 px-3 border border-amber-800">
                  COMMERCIAL
                </span>
              </div>
              
              <div className="mt-6">
                <ul className="space-y-6">
                  {commercialChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white text-base font-light mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider"></div>

              <div className="flex items-center justify-between">
                <span className="section-header">
                  ESTIMATED GLOBAL IMPACT
                </span>
                <span className="data-value">
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
