'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Mail, Calendar, ArrowRight, TrendingUp, Sword } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

const CallToAction: React.FC = () => {
  return (
    <Slide title="Join Us in Building the Future">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col justify-center"
      >
        {/* Investment Opportunity */}
        <motion.div
          variants={itemVariants}
          className="p-8 mb-8 rounded-lg border border-gray-200 shadow-lg relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -top-5 -right-5 opacity-5 z-0"
          >
            <TrendingUp className="w-72 h-72 text-blue-600" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold font-mono leading-tight mb-6"
              >
                $2.2M Seed Round
                <span className="block text-blue-600">Now Open_</span>
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-6 max-w-lg"
              >
                HandReceipt is revolutionizing inventory and asset tracking for defense and commercial applications. Our patent-pending computer vision technology enables a dramatic reduction in manual work while enhancing accuracy and compliance.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <h3 className="font-semibold font-mono mb-4">KEY INVESTMENT HIGHLIGHTS_</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    "$175K ARR Year 1 Target",
                    "Defense Tech Partnerships",
                    "75-85% Gross Margins",
                    "24+ Month Runway"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-purple-600' : index === 2 ? 'bg-cyan-600' : 'bg-green-600'} mr-3`} />
                      <p className="text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
                
                <motion.button 
                  variants={buttonVariants}
                  whileHover="hover"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                >
                  Request Investor Deck
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h3 className="font-semibold font-mono mb-4">SEED ROUND DETAILS_</h3>
                
                <hr className="mb-4" />
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Target Raise", value: "$2.2 Million" },
                    { label: "Instrument", value: "SAFE" },
                    { label: "Valuation Cap", value: "$10.5 Million" },
                    { label: "Min Investment", value: "$100,000" }
                  ].map((detail, index) => (
                    <div key={index}>
                      <p className="text-sm text-gray-600 mb-1">{detail.label}</p>
                      <p className="text-lg font-semibold">{detail.value}</p>
                    </div>
                  ))}
                </div>
                
                <hr className="my-4" />
                
                <h3 className="font-semibold font-mono mb-4">CURRENT INVESTORS_</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { name: "Techstars", color: "blue" },
                    { name: "Defense Innovation Fund", color: "purple" },
                    { name: "Angel Syndicate", color: "green" }
                  ].map((investor, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-semibold bg-${investor.color}-100 text-${investor.color}-600`}
                    >
                      {investor.name}
                    </span>
                  ))}
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-2">Committed So Far</p>
                  <div className="relative mb-2">
                    <div className="h-2.5 w-full bg-gray-100 rounded-full" />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '35%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="absolute top-0 left-0 h-2.5 bg-blue-600 rounded-full"
                    />
                  </div>
                  <p className="text-xl font-bold">$770K / $2.2M</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -top-8 -right-8 z-0"
            >
              <Sword className="w-48 h-48 text-blue-600" />
            </motion.div>
            
            <div className="p-6 relative z-10">
              <h3 className="font-semibold font-mono mb-4">NEXT STEPS_</h3>
              
              <p className="text-gray-600 mb-4">
                Interested in learning more about HandReceipt's growth trajectory?
              </p>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">We're currently offering:</p>
                
                <ul className="space-y-2 pl-2 mb-4">
                  {[
                    "In-depth investor presentation",
                    "Product demonstrations",
                    "Access to technical validation data",
                    "Meetings with key technical team members"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                className="w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                Schedule an Investor Call
                <Calendar className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            <div className="p-6">
              <h3 className="font-semibold font-mono mb-4">CONTACT US_</h3>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  Ready to join us on our mission to revolutionize inventory management for defense and commercial industries?
                </p>
                
                <div className="space-y-4 mb-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">Michael Adams, CEO</p>
                    <p className="font-semibold">michael@handreceipt.com</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">Investor Relations</p>
                    <p className="font-semibold">invest@handreceipt.com</p>
                  </div>
                </div>
              </div>
              
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                Email Us Now
                <Mail className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default CallToAction;
