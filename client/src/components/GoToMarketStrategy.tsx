'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Building2, Shield, TrendingUp, Coins } from 'lucide-react';

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

const cardVariants = {
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

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const GoToMarketStrategy: React.FC = () => {
  const timelineItems = [
    { quarter: 'Q3 2025', event: 'Complete beta deployments' },
    { quarter: 'Q4 2025', event: 'First commercial deployment' },
    { quarter: 'Q2 2026', event: 'Series A funding round' }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-mono text-2xl font-bold tracking-tight">
            GO-TO-MARKET STRATEGY_
          </h1>
          <p className="font-mono text-muted-foreground">
            Methodical market entry and growth strategy
          </p>
        </div>

        {/* Phased Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">
              Phase 1 (Months 1-6)
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Pilot with 2-3 defense customers</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <span>Initial deployment in controlled environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>Gather user feedback and improve product</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Security validation with defense clients</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">
              Phase 2 (Months 7-12)
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Initial commercial pilot, expand defense presence</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>First commercial deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Expand defense sector deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>Refine product based on market feedback</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="font-mono text-lg font-semibold text-primary mb-4">
              Phase 3 (Months 12-18)
            </h3>
            <div className="space-y-4">
              <p className="font-medium">Scale to 5-8 total deployments, prepare for Series A</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Demonstrate market traction</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-primary" />
                  <span>Series A fundraising based on validated metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>Expand sales and implementation teams</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          variants={timelineVariants}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <h3 className="font-mono text-xl font-semibold mb-4">TIMELINE_</h3>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-4 w-4 rounded-full bg-primary mt-1" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-mono font-medium text-primary">{item.quarter}</p>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div 
          variants={cardVariants}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <h3 className="font-mono text-xl font-semibold mb-4">TARGET STRATEGIC PARTNERSHIPS_</h3>
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
                variants={cardVariants}
                className="rounded-lg border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-center mb-2">{partner.title}</h4>
                <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoToMarketStrategy;