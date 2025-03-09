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

const headerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

const FundAnnouncement: React.FC = () => {
  return (
    <Slide>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full w-full pt-16"
      >
        {/* Date and category */}
        <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-12">
          <div className="vc-date">NEWS</div>
          <div className="text-gray-400">—</div>
          <div className="text-gray-400 uppercase tracking-wide text-sm">MAR 4, 2025</div>
        </motion.div>
        
        {/* Announcement headline */}
        <motion.h1 
          variants={headerVariants}
          className="vc-announcement mb-6"
        >
          Announcing 8VC Fund VI
        </motion.h1>
        
        {/* Announcement description */}
        <motion.div variants={itemVariants} className="italic-subheading mb-16 max-w-3xl">
          We are proud to announce 8VC Fund VI, with $998 million in new LP capital.
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default FundAnnouncement;