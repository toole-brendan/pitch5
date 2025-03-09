import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

// Animation variants for smooth entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const VCInvestingCircle: React.FC = () => {
  return (
    <Slide 
      title="The virtuous circle of" 
      subtitle="investing and building"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col h-full w-full"
      >
        {/* Main content */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="vc-paragraph">
            Through the investment process, we often identify whitespaces and internal theses where there are 
            opportunities to remedy an important part of the world.
          </p>
        </motion.div>
        
        {/* Horizontal divider */}
        <motion.div variants={itemVariants} className="vc-horizontal-divider" />
        
        {/* Two column content */}
        <div className="vc-two-column mt-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="vc-paragraph">
              We gain exposure through our work to determine the optimal approach to add value, often by
              tackling messy, legacy technical systems in industries paralyzed by their scale. The Build
              program creates a powerful channel for BVC to act on these ideas, partnering with ambitious
              entrepreneurs and engineers, and creating positive feedback loops as we build sustainable businesses.
              BVC Build companies are either initially driven by these internal theses or our Entrepreneurs-in-
              Residence, who join BVC with a problem, technology, or vertical in mind.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="vc-paragraph">
              BVC Founder and serial entrepreneur Joe Lonsdale is personally involved with each of the BVC Build
              companies, helping to craft their theses and guide strategy. Partners across the firm work directly
              with our founders in the Build process to give our companies unfair advantages.
            </p>
            
            <div className="mt-20 text-right">
              <p className="italic-subheading text-2xl">We are</p>
              <h3 className="vc-slide-header mt-2">Founders</h3>
            </div>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="vc-horizontal-divider mt-8" />
      </motion.div>
    </Slide>
  );
};

export default VCInvestingCircle;