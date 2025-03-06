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
      staggerChildren: 0.1
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

const CommercialSolution: React.FC = () => {
  return (
    <Slide title="Commercial Solution Showcase">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 md:gap-6 lg:gap-8 h-full overflow-auto"
      >
        {/* Feature Cards Section */}
        <motion.div variants={containerVariants} className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold font-mono uppercase tracking-wider mb-1">
            PLATFORM ADVANTAGES_
          </h3>
          
          <p className="text-gray-600 mb-6">
            Core capabilities of the HandReceipt commercial platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "1",
                title: "End-to-End Visibility",
                description: "Track parts, components, and products across your entire supply chain in real-time, with full history and provenance data for every item."
              },
              {
                number: "2",
                title: "Inventory Optimization",
                description: "Reduce stockouts and excess inventory with ML-driven forecasting and automated reordering based on real consumption data."
              },
              {
                number: "3",
                title: "Blockchain Verification",
                description: "Immutable record-keeping ensures data integrity and supports compliance requirements with automated verification and audit trails."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded text-white flex items-center justify-center font-mono text-xl font-bold">
                    {feature.number}
                  </div>
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Metrics Section */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold font-mono uppercase tracking-wider mb-1">
            BUSINESS IMPACT_
          </h3>
          
          <p className="text-gray-600 mb-6">
            Average improvements reported by early commercial adopters
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "30%", label: "Reduced Inventory Costs" },
              { value: "40%", label: "Faster Order Fulfillment" },
              { value: "55%", label: "Less Manual Data Entry" },
              { value: "90%", label: "Fewer Counterfeit Parts" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-gray-50 border border-gray-200"
              >
                <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialSolution;
