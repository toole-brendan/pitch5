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
      staggerChildren: 0.1,
      delayChildren: 0.3
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

const stepVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const phoneVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const appItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

const CommercialUserExperience: React.FC = () => {
  return (
    <Slide title="Commercial User Experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-blue-600 text-white px-4 py-1.5 text-base font-mono font-medium rounded">
            RETAIL
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Phone Mockup */}
          <div>
            <h3 className="text-lg font-semibold font-mono uppercase tracking-wider mb-4">
              MOBILE INTERFACE_
            </h3>
            
            <motion.div 
              variants={phoneVariants}
              className="max-w-[350px] mx-auto relative"
            >
              <div className="bg-gray-200 rounded-[2rem] p-3 shadow-lg border border-blue-600">
                <div className="bg-gray-100 rounded-2xl overflow-hidden relative min-h-[600px]">
                  <div className="bg-blue-600 text-white p-4 flex justify-between items-center font-mono">
                    <div>
                      <p className="font-semibold text-lg">HANDRECEIPT_</p>
                      <p className="text-xs opacity-75">RETAIL</p>
                    </div>
                    <p className="text-xs opacity-75">v2.1.0</p>
                  </div>
                  
                  <div className="p-4">
                    <motion.div 
                      variants={itemVariants}
                      className="bg-white rounded-lg p-4 mb-4 border border-gray-200"
                    >
                      <h4 className="font-semibold text-sm font-mono text-blue-600 mb-2">
                        RECENT SHIPMENTS_
                      </h4>
                      
                      {[
                        { id: "A12345", status: "VERIFIED" },
                        { id: "B67890", status: "IN TRANSIT" },
                        { id: "C45678", status: "PENDING" }
                      ].map((shipment, index) => (
                        <motion.div
                          key={shipment.id}
                          variants={appItemVariants}
                          custom={index + 1}
                          className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200 flex justify-between font-mono text-sm"
                        >
                          <span>Order #{shipment.id}</span>
                          <span className="font-semibold text-blue-600">{shipment.status}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      variants={itemVariants}
                      className="bg-white rounded-lg p-4 mb-4 border border-gray-200"
                    >
                      <h4 className="font-semibold text-sm font-mono text-blue-600 mb-2">
                        INVENTORY STATUS_
                      </h4>
                      
                      {[
                        { category: "Men's Apparel", level: "94%" },
                        { category: "Women's Footwear", level: "76%" }
                      ].map((item, index) => (
                        <motion.div
                          key={item.category}
                          variants={appItemVariants}
                          custom={index + 4}
                          className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200 flex justify-between font-mono text-sm"
                        >
                          <span>{item.category}</span>
                          <span className="font-semibold text-blue-600">{item.level}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg font-mono hover:bg-blue-700 transition-colors"
                    >
                      SCAN PRODUCT
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: User Workflow */}
          <div>
            <h3 className="text-lg font-semibold font-mono uppercase tracking-wider mb-4">
              USER WORKFLOW_
            </h3>
            
            <div className="relative py-8">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200"></div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                {[
                  {
                    step: "1",
                    title: "SCAN",
                    description: "Scan product QR code with smartphone app"
                  },
                  {
                    step: "2",
                    title: "VERIFY",
                    description: "Blockchain verification confirms authenticity"
                  },
                  {
                    step: "3",
                    title: "UPDATE",
                    description: "Inventory systems automatically updated"
                  },
                  {
                    step: "4",
                    title: "ANALYZE",
                    description: "Supply chain analytics and reporting"
                  }
                ].map((step, index) => (
                  <div key={step.step} className="flex flex-col items-center">
                    <motion.div
                      variants={stepVariants}
                      custom={index + 1}
                      className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mb-4 relative font-bold font-mono text-blue-600"
                    >
                      <div className="absolute -inset-2 border border-dashed border-blue-600 rounded-full opacity-50"></div>
                      {step.step}
                    </motion.div>
                    <h4 className="text-sm font-semibold text-center font-mono">
                      {step.title}
                    </h4>
                    <p className="text-xs text-center text-gray-600 mt-1 font-mono">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "RETAIL MANAGERS_",
                  initial: "R",
                  benefits: [
                    "Reduce inventory shrinkage by 43%",
                    "Process shipments 2.5x faster",
                    "Real-time stock visibility across locations"
                  ]
                },
                {
                  title: "WAREHOUSE STAFF_",
                  initial: "W",
                  benefits: [
                    "Reduce manual data entry by 87%",
                    "Batch process large shipments with accuracy"
                  ]
                }
              ].map((role, index) => (
                <motion.div
                  key={role.title}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl font-mono">
                      {role.initial}
                    </div>
                    <h4 className="font-semibold text-lg font-mono text-blue-600">
                      {role.title}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {role.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="flex items-start gap-2 font-mono text-sm text-gray-600"
                      >
                        <span className="text-blue-600">&gt;</span>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CommercialUserExperience;
