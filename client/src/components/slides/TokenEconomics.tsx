'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  Coins, 
  Lock, 
  BarChart3, 
  Shield, 
  Server,
  ArrowUpDown,
  Users,
  Layers
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const TokenEconomics: React.FC = () => {
  return (
    <Slide title="SHELL TOKEN (SHL) ECONOMICS_">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Token Utility Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-white border border-blue-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              TOKEN UTILITY_
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <ArrowUpDown className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Transaction Medium</p>
                  <p className="text-sm text-gray-600">Facilitates payments between retailers and suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <Server className="w-5 h-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Smart Contract Fuel</p>
                  <p className="text-sm text-gray-600">Powers conditional inventory-based payments</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <Shield className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Data Verification</p>
                  <p className="text-sm text-gray-600">Validates supply chain events</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Governance Rights</p>
                  <p className="text-sm text-gray-600">Token-weighted voting on protocol updates</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="col-span-1 bg-white border border-blue-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
              TRANSACTION FEES_
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-mono mb-2">BASE FEE DISTRIBUTION</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Burned</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Validators</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Development</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-green-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Tiers */}
        <motion.div
          variants={cardVariants}
          className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            SERVICE TIERS_
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                name: "Basic Tier",
                tokens: "0-99K",
                features: [
                  "Real-time inventory tracking",
                  "Standard payment terms",
                  "Basic analytics"
                ],
                color: "blue"
              },
              {
                name: "Premium Tier",
                tokens: "100K+",
                features: [
                  "15% faster payments",
                  "Advanced analytics",
                  "Priority support"
                ],
                color: "purple"
              },
              {
                name: "Enterprise Tier",
                tokens: "500K+",
                features: [
                  "Custom smart contracts",
                  "Integration support",
                  "Dedicated account manager"
                ],
                color: "green"
              },
              {
                name: "Institutional Tier",
                tokens: "1M+",
                features: [
                  "Banking integration",
                  "Custom financing",
                  "White-glove service"
                ],
                color: "orange"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l-4 border-${tier.color}-600 bg-${tier.color}-50/80 p-4 rounded-r-lg`}
              >
                <h4 className="font-mono text-base font-semibold mb-1">{tier.name}</h4>
                <p className="text-sm font-mono text-blue-600 mb-3">{tier.tokens} SHL</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="mr-2 text-gray-400">{">"}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Staking Requirements */}
        <motion.div
          variants={cardVariants}
          className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            STAKING REQUIREMENTS_
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "Suppliers",
                requirement: "10,000 tokens or 1% of monthly volume",
                color: "blue"
              },
              {
                role: "Retailers",
                requirement: "50,000 tokens or 2% of monthly volume",
                color: "purple"
              },
              {
                role: "Financial Institutions",
                requirement: "100,000 tokens or 3% of loan portfolio",
                color: "green"
              }
            ].map((stake, index) => (
              <div
                key={index}
                className={`p-4 bg-${stake.color}-50 rounded-lg border border-${stake.color}-200`}
              >
                <p className="font-mono text-sm mb-2">{stake.role}</p>
                <p className="text-sm text-gray-600">{stake.requirement}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default TokenEconomics;
