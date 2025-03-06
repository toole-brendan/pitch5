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
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
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
        <motion.div className="z-10 flex flex-col items-center text-center mt-8 mb-4">
          <motion.div
            variants={logoVariants}
            className="w-[220px] h-[70px] bg-blue-600 border border-blue-600 mb-4 flex items-center justify-center text-white font-bold tracking-wider relative overflow-hidden shadow-lg shadow-blue-500/50 before:content-['>>'_] before:absolute before:left-4 before:text-white/70"
          >
            HANDRECEIPT
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight font-mono uppercase tracking-wider"
          >
            SECURE SUPPLY VERIFICATION
          </motion.h1>
          
          <motion.div
            variants={underlineVariants}
            className="w-30 h-[3px] bg-blue-600 my-6 mx-auto relative before:content-[''] before:absolute before:w-10 before:h-[3px] before:bg-blue-400 before:right-[-20px] before:top-0"
          />
          
          <motion.h2
            variants={itemVariants}
            className="text-[clamp(1.2rem,3vw,1.8rem)] font-medium text-gray-600 dark:text-gray-300 max-w-[70%] mx-auto font-mono"
          >
            Military-grade validation adapted for commercial markets
          </motion.h2>
        </motion.div>
        
        <div className="flex-grow z-10 flex flex-col justify-center items-center w-full">
          <motion.div
            variants={valueVariants}
            className="p-6 md:p-8 bg-white dark:bg-gray-800 border-l-4 border-blue-600 max-w-[80%] shadow-lg relative before:content-['//_'] before:absolute before:left-[-25px] before:top-1/2 before:-translate-y-1/2 before:text-blue-600 before:font-mono before:text-sm"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
              HandReceipt delivers dual-market supply chain verification for{' '}
              <span className="text-blue-600 font-medium">MILITARY</span> and{' '}
              <span className="text-blue-600 font-medium">COMMERCIAL</span> applications, providing tamper-proof inventory management with cryptographic authentication.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CompanyOverview;
