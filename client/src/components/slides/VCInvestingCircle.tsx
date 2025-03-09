import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants for smooth entry
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

const circleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const VCInvestingCircle: React.FC = () => {
  return (
    <Slide
      title="Investing at the Frontiers of Technology"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center h-full w-full"
      >
        {/* Introduction text */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mb-12">
          <p className="vc-paragraph">
            We partner with entrepreneurs and technologists who are building 
            the future through creative applications of advanced technology
          </p>
        </motion.div>
        
        {/* Circular investing model */}
        <motion.div 
          variants={circleVariants}
          className="relative flex items-center justify-center w-[500px] h-[500px]"
        >
          {/* Outer circle */}
          <div className="absolute w-full h-full rounded-full border-2 border-gray-200 flex items-center justify-center">
            {/* Middle circle */}
            <div className="w-3/4 h-3/4 rounded-full border-2 border-gray-300 flex items-center justify-center">
              {/* Inner circle */}
              <div className="w-2/4 h-2/4 rounded-full bg-violet-600/10 border-2 border-violet-400 flex items-center justify-center">
                <span className="text-violet-700 font-semibold">CORE</span>
              </div>
            </div>
          </div>
          
          {/* Quadrant labels */}
          <motion.div variants={itemVariants} className="absolute top-10 text-center">
            <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-sm">
              EARLY STAGE
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="absolute right-10 text-center">
            <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-sm">
              GROWTH
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="absolute bottom-10 text-center">
            <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-sm">
              PUBLIC
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="absolute left-10 text-center">
            <div className="bg-white py-1 px-3 rounded-full text-sm font-medium shadow-sm">
              LIQUID
            </div>
          </motion.div>
        </motion.div>
        
        {/* Footer note */}
        <motion.div variants={itemVariants} className="text-center mt-12 text-sm text-gray-500">
          Investing across the full spectrum of technology markets
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default VCInvestingCircle;