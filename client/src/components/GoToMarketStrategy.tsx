'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { ExternalLink, MessageSquare, Building2, Shield, TrendingUp, Coins } from 'lucide-react';

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

const GoToMarketStrategy = () => {
  const timelineItems = [
    { quarter: 'Q3 2025', event: 'Complete beta deployments' },
    { quarter: 'Q4 2025', event: 'First commercial deployment' },
    { quarter: 'Q2 2026', event: 'Series A funding round' }
  ];

  return (
    <Slide title="GO-TO-MARKET STRATEGY_">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Phased Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 1: MONTHS 1-6_
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Pilot with 2-3 defense customers</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Initial deployment in controlled environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Gather user feedback and improve product</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Security validation with defense clients</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 2: MONTHS 7-12_
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Initial commercial pilot, expand defense presence</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">First commercial deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Expand defense sector deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Refine product based on market feedback</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 3: MONTHS 12-18_
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Scale to 5-8 total deployments, prepare for Series A</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Demonstrate market traction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Series A fundraising based on validated metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Expand sales and implementation teams</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
            TIMELINE_
          </h3>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-4 w-4 rounded-full bg-blue-600 mt-1" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-mono font-medium text-blue-600">{item.quarter}</p>
                  <p className="text-sm text-gray-600">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-lg"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
            TARGET STRATEGIC PARTNERSHIPS_
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "Defense Contractors",
                description: "Targeting Tier 1 suppliers to DOD"
              },
              {
                title: "Technology Integrators",
                description: "Cloud service providers and ERP system integrators"
              },
              {
                title: "Logistics Companies",
                description: "Global supply chain management providers"
              },
              {
                title: "Industry Associations",
                description: "Building credibility through industry partnerships"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-blue-50/80 backdrop-blur-sm border border-blue-200 p-4 rounded-lg"
              >
                <h4 className="font-mono text-sm font-semibold text-center mb-2">{partner.title}</h4>
                <p className="text-xs text-gray-600 text-center">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default GoToMarketStrategy;