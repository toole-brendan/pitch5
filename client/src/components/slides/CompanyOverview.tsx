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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const underlineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const valueVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.8
    }
  }
};

const CompanyOverview: React.FC = () => {
  return (
    <Slide withGridBackground={true}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center h-full w-full"
      >
        <div className="absolute top-4 md:top-10 left-4 md:left-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs text-gray-600 uppercase tracking-[0.2em]"
          >
            PRESENTATION
          </motion.div>
        </div>
      
        <motion.div className="z-10 flex flex-col items-center text-center mt-12 md:mt-16 lg:mt-20 mb-6 md:mb-8">
          <motion.div 
            className="section-header mb-2 md:mb-4"
            variants={itemVariants}
          >
            BLOCKCHAIN-POWERED SUPPLY CHAIN
          </motion.div>
          
          <motion.div
            variants={logoVariants}
            className="w-[180px] md:w-[220px] h-[50px] md:h-[70px] bg-white border border-purple-200 mb-4 md:mb-6 flex items-center justify-center text-gray-900 font-bold tracking-wider relative shadow-sm"
          >
            <span className="absolute left-3 text-purple-600 opacity-70 font-mono">&gt;</span>
            <span className="font-serif tracking-widest">HANDRECEIPT</span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.75rem,5vw,3rem)] font-medium text-gray-900 mb-1 md:mb-2 leading-tight uppercase tracking-wider"
          >
            SECURE SUPPLY VERIFICATION
          </motion.h1>
          
          <motion.div
            variants={underlineVariants}
            className="w-24 md:w-30 h-[1px] bg-purple-600 my-4 md:my-6 mx-auto"
          />
          
          <motion.h2
            variants={itemVariants}
            className="text-base md:text-xl font-medium text-gray-700 max-w-[80%] md:max-w-[70%] mx-auto"
          >
            Military-grade validation adapted for commercial markets
          </motion.h2>
        </motion.div>
        
        <div className="flex-1 z-10 flex flex-col justify-center items-center w-full max-w-4xl mx-auto">
          <motion.div
            variants={valueVariants}
            className="enterprise-card relative w-full"
          >
            <div className="absolute -top-3 left-4 md:left-10">
              <span className="bg-white text-gray-900 text-xs tracking-widest font-mono py-1 px-3 border border-gray-200 shadow-sm">
                CORE PROPOSITION
              </span>
            </div>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mt-4 md:mt-6">
              HandReceipt delivers dual-market supply chain verification for{' '}
              <span className="text-purple-700">MILITARY</span> and{' '}
              <span className="text-purple-700">COMMERCIAL</span> applications, providing tamper-proof inventory management with cryptographic authentication.
            </p>
            
            <div className="divider my-3 md:my-6"></div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-6">
              <div className="text-center">
                <p className="data-value text-xl md:text-2xl lg:text-3xl">60-90</p>
                <p className="text-xs md:text-sm text-gray-600">
                  Days payment delay in current supply chains
                </p>
              </div>
              
              <div className="text-center">
                <p className="data-value text-xl md:text-2xl lg:text-3xl">$950B</p>
                <p className="text-xs md:text-sm text-gray-600">
                  Annual cost of inventory inaccuracies
                </p>
              </div>
              
              <div className="text-center">
                <p className="data-value text-xl md:text-2xl lg:text-3xl">85%</p>
                <p className="text-xs md:text-sm text-gray-600">
                  Still use manual inventory processes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompanyOverview;
