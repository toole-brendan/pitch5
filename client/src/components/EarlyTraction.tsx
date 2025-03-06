'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';

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

const cardVariants = {
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

const EarlyTraction: React.FC = () => {
  // Timeline milestones data
  const milestones = [
    {
      date: "Q3 2021",
      color: "military",
      index: 1,
      title: "MILITARY PILOT PROJECT_",
      description: "Initiated pilot with Fort Liberty logistics battalion. Deployed initial version focused on sensitive item tracking and maintenance management with blockchain verification.",
      metrics: [
        { label: "USERS", value: "350+", color: "military" },
        { label: "ITEMS TRACKED", value: "15,000", color: "military" }
      ]
    },
    {
      date: "Q1 2022",
      color: "commercial",
      index: 2,
      title: "FIRST COMMERCIAL CLIENT_",
      description: "Secured first enterprise customer - national retail chain with 3 distribution centers. System deployed for high-value inventory tracking and supplier verification.",
      metrics: [
        { label: "LOCATIONS", value: "3", color: "commercial" },
        { label: "INVENTORY VALUE", value: "$12M", color: "commercial" }
      ]
    },
    {
      date: "Q4 2022",
      color: "military",
      index: 3,
      title: "DOD CONTRACT AWARD_",
      description: "Secured $1.8M contract to deploy HandReceipt across three Army brigades. System now used for daily operations including weapons accountability, vehicle maintenance tracking, and supply chain management.",
      metrics: [
        { label: "CONTRACT VALUE", value: "$1.8M", color: "military" },
        { label: "PERSONNEL REACH", value: "8,500+", color: "military" }
      ]
    },
    {
      date: "Q2 2023",
      color: "commercial",
      index: 4,
      title: "COMMERCIAL EXPANSION_",
      description: "Expanded to 7 commercial clients including two Fortune 500 retailers and a major automotive parts distributor. Launched Shell Token payment system for accelerated supplier payments with integrated inventory verification.",
      metrics: [
        { label: "ACTIVE CLIENTS", value: "7", color: "commercial" },
        { label: "ARR GROWTH", value: "+185%", color: "commercial" }
      ]
    }
  ];

  return (
    <Slide title="Early Traction">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {/* Key Metrics Section */}
        <div className="mb-12">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
            KEY METRICS_
          </h3>
          
          <p className="text-sm text-gray-600 mb-6 font-mono">
            Growth and adoption since founding in 2021
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 p-6 rounded-lg">
              <p className="text-2xl font-bold text-orange-600 mb-2">12</p>
              <p className="text-sm text-gray-600">Active Enterprise Clients</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 p-6 rounded-lg">
              <p className="text-2xl font-bold text-blue-600 mb-2">$3.2M</p>
              <p className="text-sm text-gray-600">Defense Contracts</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 p-6 rounded-lg">
              <p className="text-2xl font-bold text-orange-600 mb-2">185%</p>
              <p className="text-sm text-gray-600">YoY Revenue Growth</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white border border-gray-200 p-6 rounded-lg">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-2">10M+</p>
              <p className="text-sm text-gray-600">Items Tracked Monthly</p>
            </motion.div>
          </div>
        </div>
        
        {/* Timeline Section */}
        <div className="mb-12">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
            GROWTH TIMELINE_
          </h3>
          
          <p className="text-sm text-gray-600 mb-6 font-mono">
            Major milestones in our company history
          </p>
          
          <div className="relative pl-8">
            {/* Timeline vertical line */}
            <div className="absolute top-0 left-3 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline marker */}
                <div className={`absolute -left-5 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold font-mono ${
                  milestone.color === 'military' ? 'bg-blue-600' : 'bg-orange-600'
                }`}>
                  {milestone.index}
                </div>
                
                {/* Milestone card */}
                <div className={`bg-white border p-6 rounded-lg ${
                  milestone.color === 'military' ? 'border-blue-200' : 'border-orange-200'
                }`}>
                  {/* Date badge */}
                  <div className="inline-block bg-gray-50 px-3 py-1 text-xs font-mono font-semibold text-gray-600 border border-gray-200 rounded-full mb-4">
                    {milestone.date}
                  </div>
                  
                  <h4 className={`text-sm font-mono font-semibold mb-3 ${
                    milestone.color === 'military' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {milestone.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {milestone.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {milestone.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded ${
                          metric.color === 'military' ? 'bg-blue-50' : 'bg-orange-50'
                        }`}
                      >
                        <p className="text-xs font-mono font-semibold text-gray-500 mb-1">
                          {metric.label}
                        </p>
                        <p className={`text-lg font-bold ${
                          metric.color === 'military' ? 'text-blue-600' : 'text-orange-600'
                        }`}>
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Clients Section */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
            SELECT CLIENTS_
          </h3>
          
          <p className="text-sm text-gray-600 mb-6 font-mono">
            Current deployments across defense and commercial sectors
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "U.S. ARMY", color: "military" },
              { name: "DEFENSE LOGISTICS AGENCY", color: "military" },
              { name: "GLOBAL RETAIL CORP", color: "commercial" },
              { name: "LUXURY BRANDS INC", color: "commercial" },
              { name: "10TH MOUNTAIN DIV", color: "military" },
              { name: "FORT LIBERTY", color: "military" },
              { name: "AUTOPARTS DIRECT", color: "commercial" },
              { name: "TECHSUPPLY CO", color: "commercial" }
            ].map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`h-24 flex items-center justify-center text-center p-4 rounded-lg border ${
                  client.color === 'military'
                    ? 'bg-blue-50 border-blue-200 text-blue-600'
                    : 'bg-orange-50 border-orange-200 text-orange-600'
                }`}
              >
                <p className="text-xs font-mono font-semibold">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default EarlyTraction;
