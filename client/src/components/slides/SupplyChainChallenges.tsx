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
      icon: <FileWarning className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      title: "Paper-Based Accountability",
      description: "Hand receipts and equipment tracking still rely on physical paperwork prone to loss and tampering."
    },
    {
      icon: <ShieldX className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      title: "Verification Gaps",
      description: "Limited ability to verify equipment origin, maintenance history, and transfer of responsibility."
    },
    {
      icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      title: "Antiquated Systems",
      description: "Legacy systems lack interoperability, creating information silos and redundancy across units."
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />,
      title: "Auditing Complexity",
      description: "Time-intensive inspections with limited transparency for higher command visibility."
    }
  ];

  // Commercial challenges
  const commercialChallenges = [
    {
      icon: <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "Counterfeiting & Fraud",
      description: "Counterfeit products and unauthorized distribution channels create financial damage."
    },
    {
      icon: <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "Lack of Transparency",
      description: "Limited visibility into supply chain origins, particularly for multi-tier supplier networks."
    },
    {
      icon: <FileSearch className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "Compliance Challenges",
      description: "Difficulty proving regulatory compliance and ethical sourcing across global supply chains."
    },
    {
      icon: <BarChart className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />,
      title: "Inventory Accountability",
      description: "Difficult to trace product lifecycle from raw materials to end-user, leading to disputes."
    }
  ];

  return (
    <Slide>
      <div className="absolute top-4 md:top-10 left-4 md:left-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs text-gray-600 uppercase tracking-[0.2em]"
        >
          INDUSTRY CHALLENGES
        </motion.div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 md:mt-16"
      >
        <div className="mb-6 md:mb-10 max-w-3xl">
          <motion.h1 
            variants={sectionVariants}
            className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 md:mb-4"
          >
            Supply Chain Challenges
          </motion.h1>
          <motion.p 
            variants={sectionVariants}
            className="text-sm md:text-base text-gray-600"
          >
            Current pain points driving the need for HandReceipt's blockchain solution
          </motion.p>
          <motion.div
            variants={sectionVariants}
            className="h-[1px] w-16 md:w-24 bg-purple-600 mt-3 md:mt-4"
          />
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Military Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="enterprise-card relative p-4 md:p-6">
              <div className="absolute -top-3 left-4 md:left-10">
                <span className="bg-white text-gray-900 text-xs tracking-widest font-mono py-1 px-3 border border-purple-200 shadow-sm">
                  MILITARY
                </span>
              </div>
              
              <div className="mt-4">
                <ul className="space-y-3 md:space-y-4">
                  {militaryChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-sm md:text-base font-medium mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider my-3"></div>

              <div className="flex items-center justify-between">
                <span className="section-header text-[10px] md:text-xs">
                  ANNUAL INVENTORY LOSS
                </span>
                <span className="data-value text-lg md:text-xl lg:text-2xl">
                  $1.2B+
                </span>
              </div>
            </div>
          </motion.div>

          {/* Commercial Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="enterprise-card relative p-4 md:p-6">
              <div className="absolute -top-3 left-4 md:left-10">
                <span className="bg-white text-gray-900 text-xs tracking-widest font-mono py-1 px-3 border border-amber-200 shadow-sm">
                  COMMERCIAL
                </span>
              </div>
              
              <div className="mt-4">
                <ul className="space-y-3 md:space-y-4">
                  {commercialChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-sm md:text-base font-medium mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider my-3"></div>

              <div className="flex items-center justify-between">
                <span className="section-header text-[10px] md:text-xs">
                  ESTIMATED GLOBAL IMPACT
                </span>
                <span className="data-value text-lg md:text-xl lg:text-2xl">
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
