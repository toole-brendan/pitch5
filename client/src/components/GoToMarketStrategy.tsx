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

const GoToMarketStrategy = () => {
  const timelineItems = [
    // Based on ShellToken.md Phase 1-4 timeline
    { quarter: 'Q4 2025', event: 'Launch HandReceipt with 2-3 defense customers' },
    { quarter: 'Q1 2026', event: 'First commercial pilot deployment' },
    { quarter: 'Q2 2026', event: 'Integrate financial institutions for supply chain financing' },
    { quarter: 'Q3 2026', event: 'Open network to broader retail ecosystem' }
  ];

  return (
    <Slide title="Go-to-Market Strategy">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full overflow-hidden space-y-8"
      >
        {/* Phased Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <motion.div
            variants={cardVariants}
            custom={1}
            className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 1: PILOT NETWORK_
            </h3>
            <div className="space-y-4">
              <p className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                Initial Defense Sector Focus
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <ExternalLink className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Launch with 2-3 major defense customers
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <MessageSquare className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Implement core Shell token functionality
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Shield className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Establish HandReceipt-WMS integration
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            variants={cardVariants}
            custom={2}
            className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 2: ECOSYSTEM EXPANSION_
            </h3>
            <div className="space-y-4">
              <p className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                Financial Integration & Growth
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <Building2 className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Add financial institutions for supply chain financing
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Shield className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Implement dynamic payment terms
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <MessageSquare className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Expand HandReceipt capabilities
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            variants={cardVariants}
            custom={3}
            className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              PHASE 3: FULL ECOSYSTEM_
            </h3>
            <div className="space-y-4">
              <p className="font-sans text-base text-gray-900 font-semibold tracking-wide">
                Scale & Development
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <TrendingUp className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Open network to broader retail ecosystem
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Coins className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Add third-party developers platform
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <Building2 className="h-4 w-4 text-orange-400 mt-0.5" />
                  <span className="text-xs text-gray-600 leading-relaxed font-sans">
                    Integrate with traditional banking systems
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          variants={cardVariants}
          custom={4}
          className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
            TIMELINE_
          </h3>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-4 w-4 rounded-full bg-orange-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-mono text-orange-700">{item.quarter}</p>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          variants={cardVariants}
          custom={5}
          className="bg-white border border-orange-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-orange-400"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
            TARGET STRATEGIC PARTNERSHIPS_
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "ERP Providers",
                description: "SAP, NetSuite, Oracle, Microsoft Dynamics"
              },
              {
                title: "Defense Contractors",
                description: "Tier 1 DOD suppliers"
              },
              {
                title: "WMS Providers",
                description: "Manhattan Associates, JDA Software"
              },
              {
                title: "Financial Services",
                description: "Supply chain financing providers"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-orange-50 border border-orange-200 p-4 transition-all duration-300 hover:bg-white hover:border-orange-400"
              >
                <h4 className="font-mono text-sm font-medium text-orange-700 text-center mb-2">
                  {partner.title}
                </h4>
                <p className="text-xs text-gray-600 text-center font-sans">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default GoToMarketStrategy;