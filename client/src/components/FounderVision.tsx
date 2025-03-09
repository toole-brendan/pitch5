'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { User, Briefcase, GraduationCap, Award, Lightbulb, History, Target } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const FounderVision = () => {
  return (
    <Slide>
      <div className="absolute top-4 md:top-10 left-4 md:left-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs text-gray-600 uppercase tracking-[0.2em]"
        >
          FOUNDER & VISION
        </motion.div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-10 md:mt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Founder Profile */}
          <div className="md:col-span-4">
            <motion.div 
              className="enterprise-card p-4 md:p-6"
              variants={cardVariants}
              custom={0}
            >
              <div className="section-header mb-4">LEADERSHIP</div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-purple-200 bg-purple-50 flex items-center justify-center text-gray-800">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-medium text-gray-900">
                    Brendan T. Toole
                  </h2>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">
                    FOUNDER & CEO
                  </p>
                </div>
              </div>

              <div className="divider my-3"></div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="badge badge-purple text-xs">
                  Finance Expert
                </span>
                <span className="badge badge-green text-xs">
                  Military Leadership
                </span>
                <span className="badge badge-amber text-xs">
                  Princeton Economics
                </span>
              </div>

              <div className="section-header mb-2 mt-4">CREDENTIALS</div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">
                    Research Analyst, Point72 Asset Management
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">
                    Platoon Leader, 101st Airborne Division
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">
                    Princeton University, Economics A.B.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Journey */}
          <div className="md:col-span-8 space-y-4">
            <motion.div 
              className="enterprise-card p-4 md:p-6"
              variants={cardVariants}
              custom={1}
            >
              <div className="absolute -top-3 left-4 md:left-10">
                <span className="bg-white text-gray-900 text-xs tracking-widest font-mono py-1 px-3 border border-gray-200 shadow-sm">
                  VISION
                </span>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">
                    Building a blockchain-powered inventory and supply chain management solution that streamlines property tracking and transfers, bridging military precision with commercial agility.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">
                    HandReceipt represents the convergence of military-grade validation adapted for commercial markets, offering immediate payment settlement through Shell token integration.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="enterprise-card p-4 md:p-6"
              variants={cardVariants}
              custom={2}
            >
              <div className="section-header mb-4">FOUNDER'S JOURNEY</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="border-l-2 border-purple-500 pl-3">
                  <h4 className="text-gray-900 font-medium text-base mb-1">
                    Financial Expertise
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700">
                    At Point72, analyzed healthcare supply chain dynamics and developed targeted sector analyses for investment opportunities.
                  </p>
                </div>

                <div className="border-l-2 border-green-500 pl-3">
                  <h4 className="text-gray-900 font-medium text-base mb-1">
                    Military Leadership
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700">
                    As a Platoon Leader in the 101st Airborne Division, experienced firsthand the critical importance of supply chain reliability.
                  </p>
                </div>

                <div className="border-l-2 border-amber-500 pl-3">
                  <h4 className="text-gray-900 font-medium text-base mb-1">
                    Technology Integration
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700">
                    Leveraging AI experience from finance background to automate routine supply chain tasks and enhance operational quality.
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-3">
                  <h4 className="text-gray-900 font-medium text-base mb-1">
                    Academic Foundation
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700">
                    Economics research at Princeton comparing innovation between China and OECD countries provided global supply chain insights.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="enterprise-card p-4 md:p-6"
              variants={cardVariants}
              custom={3}
            >
              <div className="section-header mb-3">MARKET OPPORTUNITY</div>

              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="border border-gray-200 bg-gray-50 p-3">
                  <p className="data-value text-xl md:text-2xl">60-90</p>
                  <p className="text-xs text-gray-700">
                    Days payment delay in supply chains
                  </p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-3">
                  <p className="data-value text-xl md:text-2xl">$950B</p>
                  <p className="text-xs text-gray-700">
                    Annual inventory inaccuracy cost
                  </p>
                </div>

                <div className="border border-gray-200 bg-gray-50 p-3">
                  <p className="data-value text-xl md:text-2xl">85%</p>
                  <p className="text-xs text-gray-700">
                    Still use manual processes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FounderVision;