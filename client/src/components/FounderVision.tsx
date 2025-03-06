'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FounderVision: React.FC = () => {
  return (
    <Slide title="Founder & Vision">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Founder Profile */}
          <div className="md:col-span-5">
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 p-6 text-center"
            >
              <motion.div
                variants={avatarVariants}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-4 border-blue-600 overflow-hidden"
              >
                <img
                  src="/michael-adams.jpg"
                  alt="Michael Adams"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <h2 className="text-xl font-semibold mb-1">
                Michael Adams
              </h2>

              <p className="text-sm font-mono uppercase tracking-[0.2em] text-blue-600 mb-6">
                FOUNDER & CEO_
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200">
                  Military Veteran
                </span>
                <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200">
                  Supply Chain Expert
                </span>
              </div>

              <div className="text-left">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                  BACKGROUND_
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600">→</span>
                    <p className="text-sm text-gray-600">
                      MBA, Harvard Business School
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600">→</span>
                    <p className="text-sm text-gray-600">
                      BS, Computer Science, MIT
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-600">→</span>
                    <p className="text-sm text-gray-600">
                      Supply Chain Analyst, Point72
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-600">→</span>
                    <p className="text-sm text-gray-600">
                      US Army, 7 years of service
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vision & Journey */}
          <div className="md:col-span-7 space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                THE VISION_
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Empowering defense and commercial organizations with intelligent inventory management that reduces manual work while enhancing accuracy, efficiency, and compliance.
              </p>
              <p className="text-sm text-gray-600">
                At HandReceipt, we're building technology that solves the real-world challenges I experienced firsthand during my military service and subsequent work in commercial supply chains. Our platform represents the convergence of military precision and commercial agility.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                FOUNDER'S JOURNEY_
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
                  <h4 className="font-sans text-base font-semibold mb-2">
                    Military Experience
                  </h4>
                  <p className="text-sm text-gray-600">
                    As a logistics officer in the US Army, I managed equipment worth over $50M and witnessed firsthand the challenges of inventory tracking in high-pressure environments.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 bg-green-50 p-4">
                  <h4 className="font-sans text-base font-semibold mb-2">
                    Commercial Insight
                  </h4>
                  <p className="text-sm text-gray-600">
                    At Point72, I analyzed dozens of supply chain companies, identifying inefficiencies and market opportunities that traditional solutions were failing to address.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 bg-orange-50 p-4">
                  <h4 className="font-sans text-base font-semibold mb-2">
                    Technical Foundation
                  </h4>
                  <p className="text-sm text-gray-600">
                    My computer science background from MIT provided the technical foundation to envision a modern solution leveraging computer vision and machine learning.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 bg-purple-50 p-4">
                  <h4 className="font-sans text-base font-semibold mb-2">
                    The HandReceipt Idea
                  </h4>
                  <p className="text-sm text-gray-600">
                    The idea for HandReceipt came from observing the gap between military accountability requirements and the inadequate tools available for tracking in dynamic environments.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white border border-gray-200 p-6"
            >
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                WHY NOW?_
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">85%</p>
                  <p className="text-sm text-gray-600">
                    of organizations still use manual inventory processes
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600 mb-2">$950B</p>
                  <p className="text-sm text-gray-600">
                    annual cost of inventory inaccuracies
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">97%</p>
                  <p className="text-sm text-gray-600">
                    of defense contractors need better tracking
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
