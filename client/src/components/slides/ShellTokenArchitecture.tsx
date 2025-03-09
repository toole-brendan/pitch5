'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { ShieldCheck, Layers, Code, Wallet, Settings, Network, Lock, Database, CircuitBoard, Cpu } from 'lucide-react';

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const ShellTokenArchitecture: React.FC = () => {
  // Architecture components for the visualization
  const architectureComponents = [
    {
      title: "Core Blockchain",
      icon: <Layers className="h-5 w-5 text-amber-600" />,
      description: "DPoSC consensus with 21-30 validators and 3-5 second block times",
      details: [
        "PBFT-inspired finality mechanism",
        "Full, validator, and light nodes",
        "UTXO-based transaction model"
      ]
    },
    {
      title: "Token Economics",
      icon: <Wallet className="h-5 w-5 text-amber-600" />,
      description: "Fixed supply of 100M tokens with 8 decimal places",
      details: [
        "Minimal transaction fees",
        "Validator rewards from fees",
        "Supply chain incentives"
      ]
    },
    {
      title: "Smart Contracts",
      icon: <Code className="h-5 w-5 text-amber-600" />,
      description: "Custom VM optimized for supply chain operations",
      details: [
        "Payment and escrow contracts",
        "Service level agreements",
        "Multi-party trade contracts"
      ]
    },
    {
      title: "HandReceipt Integration",
      icon: <Database className="h-5 w-5 text-amber-600" />,
      description: "Cross-chain communication protocol",
      details: [
        "Event verification bridge",
        "State synchronization",
        "Standardized data exchange"
      ]
    },
    {
      title: "Wallet Infrastructure",
      icon: <ShieldCheck className="h-5 w-5 text-amber-600" />,
      description: "Multi-signature corporate wallets with role-based access",
      details: [
        "Batch operations",
        "Scheduled payments",
        "ERP system integration"
      ]
    },
    {
      title: "Governance System",
      icon: <Settings className="h-5 w-5 text-amber-600" />,
      description: "On-chain weighted voting system based on stake",
      details: [
        "Parameter governance",
        "Proposal mechanism",
        "Automated implementation"
      ]
    }
  ];

  return (
    <Slide title="Appendix: Shell Token Architecture">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        <div className="grid grid-cols-1 gap-6">
          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-2">
            <h2 className="text-xl font-semibold font-mono uppercase tracking-wider">
              TECHNICAL FOUNDATION_
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-mono">
              Supply chain-oriented cryptocurrency for automated payments
            </p>
          </motion.div>

          {/* Architecture Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {architectureComponents.map((component, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                custom={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center mb-3">
                  {component.icon}
                  <h3 className="ml-2 text-lg font-mono font-semibold">{component.title}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{component.description}</p>
                <ul className="space-y-1">
                  {component.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-xs">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="font-mono text-gray-600 dark:text-gray-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Innovations */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 bg-gradient-to-r from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 border border-amber-100 dark:border-gray-700 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold font-mono uppercase tracking-wider text-amber-700 dark:text-amber-500 mb-2">
              Unique Technical Innovations_
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start">
                <Cpu className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                <p className="text-sm">Supply Chain Verification Proofs</p>
              </div>
              <div className="flex items-start">
                <Network className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                <p className="text-sm">Delegated Proof of Supply Chain Consensus</p>
              </div>
              <div className="flex items-start">
                <CircuitBoard className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                <p className="text-sm">Conditional Payment Channels</p>
              </div>
              <div className="flex items-start">
                <Lock className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                <p className="text-sm">Cross-Chain Verification Protocol</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default ShellTokenArchitecture;