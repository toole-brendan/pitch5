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

const IndustrySectors: React.FC = () => {
  return (
    <Slide title="Our build companies are tackling hard problems across a range of industry sectors">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full w-full"
      >
        {/* Subtitle section */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="vc-paragraph mb-8">
            Build companies are part of a broader 8VC context, including portfolio companies and advisors
          </p>
        </motion.div>
        
        {/* Horizontal divider */}
        <motion.div variants={itemVariants} className="vc-horizontal-divider" />
        
        {/* Industry sectors with dot pattern on right */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-4 relative">
          <div className="col-span-3">
            {/* Industry sectors list */}
            <motion.div variants={itemVariants} className="industry-sector industry-sector-highlight">
              GOVTECH / DEFENSE
            </motion.div>
            
            <motion.div variants={itemVariants} className="industry-sector">
              LOGISTICS·IT
            </motion.div>
            
            <motion.div variants={itemVariants} className="industry-sector">
              LIFE SCIENCES
            </motion.div>
            
            <motion.div variants={itemVariants} className="industry-sector">
              FINANCIAL SERVICES
            </motion.div>
          </div>
          
          {/* Dot pattern container (visible on desktop) */}
          <div className="hidden md:block relative h-full">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-4">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default IndustrySectors;