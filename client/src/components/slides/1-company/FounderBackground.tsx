import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { User, Briefcase, GraduationCap, Award, Lightbulb, Target } from 'lucide-react';
import { modernColors, modernTypography, ModernDivider } from '@/components/modern/ModernSlideStyles';

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.1),
      duration: 0.4
    }
  })
};

const FounderBackground = () => {
  return (
    <Slide 
      title="Founder Background"
      subtitle="Military logistics meets financial expertise"
      variant="default" // Changed to default for better control of spacing
      alignment="left"
      accent="#333333" // Matching other slides
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1"> {/* Reduced top margin */}
        {/* Left column - Founder Profile */}
        <div className="space-y-5"> {/* Reduced from space-y-8 */}
          <motion.div 
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-4 bg-white shadow-sm rounded-sm p-5 border border-gray-200"
          >
            <div className="flex items-center gap-5"> {/* Reduced from gap-8 */}
              <div className="w-16 h-16 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-gray-800 mb-1">
                  Brendan T. Toole
                </h2>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  FOUNDER & CEO
                </p>
              </div>
            </div>
            
            <div className="space-y-0"> {/* Removed space-y-1 and pt-4 */}
              <div className="flex gap-3 items-center py-2 border-t border-gray-100">
                <Briefcase className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Research Analyst, Point72 Asset Management</span>
              </div>
              
              <div className="flex gap-3 items-center py-2 border-t border-gray-100">
                <Award className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Platoon Leader, 101st Airborne Division</span>
              </div>
              
              <div className="flex gap-3 items-center py-2 border-t border-gray-100">
                <GraduationCap className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600 text-sm">Princeton University, Economics A.B.</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-full">Finance Expert</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-full">Military Leadership</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded-full">Princeton Economics</span>
            </div>
          </motion.div>
        </div>

        {/* Right column - Vision & Journey */}
        <div className="space-y-5"> {/* Reduced from space-y-8 */}
          <motion.div 
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-5 border border-gray-200"
          >
            <div className="bg-gray-50 text-gray-600 text-xs tracking-[0.2em] font-mono uppercase py-1 px-2 border border-gray-200 inline-block mb-3">
              VISION
            </div>
            
            <div className="space-y-4"> {/* Reduced from space-y-6 */}
              <div className="flex items-start gap-3">
                <Lightbulb className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Building a blockchain-powered inventory and supply chain management solution that streamlines property tracking and transfers.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  HandReceipt represents the convergence of military-grade validation adapted for commercial markets.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-5 border border-gray-200"
          >
            <div className="bg-gray-50 text-gray-600 text-xs tracking-[0.2em] font-mono uppercase py-1 px-2 border border-gray-200 inline-block mb-3">
              ORIGIN STORY
            </div>
            
            <div className="grid grid-cols-1 gap-4"> {/* Changed from 2 cols to 1 col for better space usage */}
              <div className="border-l-2 border-gray-200 pl-3">
                <h4 className="text-gray-800 font-medium mb-1">
                  Military Experience
                </h4>
                <p className="text-sm text-gray-600">
                  As a Platoon Leader in the 101st Airborne Division, I witnessed the inefficiencies of paper-based supply tracking systems.
                </p>
              </div>

              <div className="border-l-2 border-gray-200 pl-3">
                <h4 className="text-gray-800 font-medium mb-1">
                  Financial Insight
                </h4>
                <p className="text-sm text-gray-600">
                  At Point72, I analyzed supply chain dynamics across multiple sectors, recognizing a market opportunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default FounderBackground;
