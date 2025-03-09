import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants for smooth entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const FundAnnouncementSlide: React.FC = () => {
  return (
    <Slide>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full w-full py-12"
      >
        {/* News category and date */}
        <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-8">
          <div className="vc-date">NEWS</div>
          <div className="text-sm text-gray-400">—</div>
          <div className="text-sm text-gray-400">MAR 4, 2025</div>
        </motion.div>
        
        {/* Main announcement */}
        <motion.h1 
          variants={itemVariants} 
          className="vc-announcement text-6xl md:text-7xl mb-6"
        >
          Announcing 8VC Fund VI
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          variants={itemVariants} 
          className="italic-subheading text-xl md:text-2xl max-w-2xl"
        >
          We are proud to announce 8VC Fund VI, with $998 million in new LP capital.
        </motion.p>
      </motion.div>
    </Slide>
  );
};

export default FundAnnouncementSlide;