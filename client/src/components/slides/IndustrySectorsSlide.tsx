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
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const IndustrySectorsSlide: React.FC = () => {
  return (
    <Slide 
      title="Our build companies are tackling hard problems across a range of industry sectors"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full w-full"
      >
        {/* Main content */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="vc-paragraph mb-12">
            Build companies are part of a broader 8VC context, including portfolio companies and advisors
          </p>
        </motion.div>
        
        {/* Horizontal divider */}
        <motion.div variants={itemVariants} className="vc-horizontal-divider" />
        
        {/* Industry sectors */}
        <div className="flex flex-col mt-4">
          <motion.div 
            variants={itemVariants} 
            className="industry-sector industry-sector-highlight"
          >
            GOVTECH/DEFENSE
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="industry-sector"
          >
            LOGISTICS-IT
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="industry-sector"
          >
            LIFE SCIENCES
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="industry-sector"
          >
            FINANCIAL SERVICES
          </motion.div>
        </div>
        
        {/* Dot grid pattern in the right side */}
        <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full">
          <div className="w-full h-full grid grid-cols-12 grid-rows-20">
            {[...Array(240)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default IndustrySectorsSlide;