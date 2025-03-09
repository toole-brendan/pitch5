'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  Shield, 
  Server,
  ArrowUpDown,
  Users
} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const TokenEconomics: React.FC = () => {
  return (
    <Slide title="Shell Token (SHL) Economics">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {/* Token Utility Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            variants={cardVariants}
            className="col-span-1 md:col-span-2 bg-white border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-2">
              TOKEN UTILITY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 p-2 md:p-3 bg-blue-50 rounded-lg">
                <ArrowUpDown className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-0.5">Transaction Medium</p>
                  <p className="text-xs text-gray-600">Facilitates payments between retailers and suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 md:p-3 bg-purple-50 rounded-lg">
                <Server className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-0.5">Smart Contract Fuel</p>
                  <p className="text-xs text-gray-600">Powers conditional inventory-based payments</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 md:p-3 bg-green-50 rounded-lg">
                <Shield className="w-4 h-4 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-0.5">Data Verification</p>
                  <p className="text-xs text-gray-600">Validates supply chain events</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 md:p-3 bg-orange-50 rounded-lg">
                <Users className="w-4 h-4 text-orange-600 mt-0.5" />
                <div>
                  <p className="font-medium text-sm mb-0.5">Governance Rights</p>
                  <p className="text-xs text-gray-600">Token-weighted voting on protocol updates</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="col-span-1 bg-white border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-2">
              TRANSACTION FEES
            </h3>
            <div className="space-y-2">
              <div className="p-2 md:p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-mono mb-2">BASE FEE DISTRIBUTION</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-0.5">
                      <span>Burned</span>
                      <span className="font-semibold">40%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '40%' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-0.5">
                      <span>Validators</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-full bg-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-0.5">
                      <span>Development</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
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
          className="bg-white border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm"
        >
          <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-2">
            SERVICE TIERS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                name: "Basic",
                tokens: "0-99K",
                features: [
                  "Inventory tracking",
                  "Standard payments",
                  "Basic analytics"
                ],
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                textColor: "text-blue-600"
              },
              {
                name: "Premium",
                tokens: "100K+",
                features: [
                  "Faster payments",
                  "Advanced analytics",
                  "Priority support"
                ],
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                textColor: "text-purple-600"
              },
              {
                name: "Enterprise",
                tokens: "500K+",
                features: [
                  "Custom contracts",
                  "Integration APIs",
                  "Account manager"
                ],
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                textColor: "text-green-600"
              },
              {
                name: "Institutional",
                tokens: "1M+",
                features: [
                  "Banking integration",
                  "Custom financing",
                  "White-glove service"
                ],
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
                textColor: "text-orange-600"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${tier.bgColor} border ${tier.borderColor} p-2 md:p-3 rounded-lg`}
              >
                <h4 className="font-mono text-sm font-semibold">{tier.name}</h4>
                <p className={`text-xs font-mono ${tier.textColor} mb-1.5`}>{tier.tokens} SHL</p>
                <ul className="space-y-1">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <span className="mr-1 text-gray-400">•</span>
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
          className="bg-white border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm"
        >
          <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-500 mb-2">
            STAKING REQUIREMENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              {
                role: "Suppliers",
                requirement: "10,000 tokens or 1% of monthly volume",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                role: "Retailers",
                requirement: "50,000 tokens or 2% of monthly volume",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              },
              {
                role: "Financial Institutions",
                requirement: "100,000 tokens or 3% of loan portfolio",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              }
            ].map((stake, index) => (
              <div
                key={index}
                className={`p-2 md:p-3 ${stake.bgColor} rounded-lg border ${stake.borderColor}`}
              >
                <p className="font-mono text-xs font-medium mb-1">{stake.role}</p>
                <p className="text-xs text-gray-600">{stake.requirement}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default TokenEconomics;