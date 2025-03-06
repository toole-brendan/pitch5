'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, DollarSign, Building2, Settings, RefreshCcw, Truck, Sword, Flag, Factory } from 'lucide-react';

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

const BusinessModel: React.FC = () => {  
  return (
    <Slide title="Business Model">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col"
      >
        {/* Revenue Streams */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold font-mono uppercase tracking-wider mb-1">
            PRICING STRATEGY_
          </h3>
          
          <p className="text-sm text-gray-600 font-mono mb-6">
            Subscription-based model with tiered pricing for different markets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Defense Tier */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-blue-50 p-4 border-b border-gray-200 flex items-center">
                <Sword className="text-blue-600 mr-2" />
                <h4 className="font-mono font-semibold">Defense</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold mb-1">$250K - $1M</p>
                  <p className="text-sm text-gray-600">Annual license per deployment</p>
                  <p className="text-xs text-gray-500">Based on scale and customization</p>
                </div>
                
                <hr className="my-4" />
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Enterprise-grade deployment</p>
                      <p className="text-sm text-gray-600">Full security compliance</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Custom integrations</p>
                      <p className="text-sm text-gray-600">Works with existing systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Dedicated support team</p>
                      <p className="text-sm text-gray-600">24/7 mission-critical support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Enterprise Tier */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-purple-50 p-4 border-b border-gray-200 flex items-center">
                <Building2 className="text-purple-600 mr-2" />
                <h4 className="font-mono font-semibold">Commercial Enterprise</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold mb-1">$75K - $150K</p>
                  <p className="text-sm text-gray-600">Annual license</p>
                  <p className="text-xs text-gray-500">Per business unit/facility</p>
                </div>
                
                <hr className="my-4" />
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-purple-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Full platform capabilities</p>
                      <p className="text-sm text-gray-600">Customizable dashboard</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-purple-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">ERP integration suite</p>
                      <p className="text-sm text-gray-600">Works with existing systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-purple-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Priority support</p>
                      <p className="text-sm text-gray-600">Business hours + emergency support</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Additional Services */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-cyan-50 p-4 border-b border-gray-200 flex items-center">
                <Settings className="text-cyan-600 mr-2" />
                <h4 className="font-mono font-semibold">Additional Services</h4>
              </div>
              <div className="p-4">
                <div className="text-center mb-4">
                  <p className="text-2xl font-bold mb-1">$25K - $150K</p>
                  <p className="text-sm text-gray-600">Additional service fees</p>
                  <p className="text-xs text-gray-500">Implementation & consulting services</p>
                </div>
                
                <hr className="my-4" />
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-cyan-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Implementation services</p>
                      <p className="text-sm text-gray-600">Customized onboarding</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cyan-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Custom development</p>
                      <p className="text-sm text-gray-600">Specialized integrations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-cyan-600 w-5 h-5 mt-0.5 mr-2" />
                    <div>
                      <p className="font-semibold">Training & certification</p>
                      <p className="text-sm text-gray-600">User and admin training</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Target Markets & Unit Economics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Target Markets */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg border border-gray-200 shadow-md"
          >
            <h3 className="text-xl font-semibold font-mono uppercase tracking-wider mb-1">
              TARGET MARKETS_
            </h3>
            
            <p className="text-sm text-gray-600 font-mono mb-6">
              Initial market focus prioritizing high-value inventory environments
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Defense",
                  description: "Military logistics units, defense contractors, and base operations",
                  icon: Flag,
                  color: "blue"
                },
                {
                  title: "Manufacturing",
                  description: "Precision manufacturing, electronics, aerospace parts production",
                  icon: Factory,
                  color: "purple"
                },
                {
                  title: "Logistics",
                  description: "3PL providers, warehousing operations, distribution centers",
                  icon: Truck,
                  color: "cyan"
                },
                {
                  title: "Maintenance",
                  description: "Aviation MRO, industrial equipment maintenance, facility management",
                  icon: RefreshCcw,
                  color: "orange"
                }
              ].map((market, index) => (
                <div key={index} className="p-4 rounded-lg border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center mb-2">
                    <market.icon className={`text-${market.color}-600 w-5 h-5 mr-2`} />
                    <h4 className="font-semibold">{market.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{market.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Unit Economics */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg border border-gray-200 shadow-md"
          >
            <h3 className="text-xl font-semibold font-mono uppercase tracking-wider mb-1">
              UNIT ECONOMICS_
            </h3>
            
            <p className="text-sm text-gray-600 font-mono mb-6">
              Favorable economics driven by software margins and recurring revenue
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg border border-blue-200 border-l-4 border-l-blue-500">
                <p className="text-xs font-mono text-gray-600 mb-1">CUSTOMER ACQUISITION</p>
                <p className="text-xl font-bold">$50K - $75K</p>
                <p className="text-sm text-gray-600">CAC for defense & enterprise</p>
              </div>
              
              <div className="p-4 rounded-lg border border-purple-200 border-l-4 border-l-purple-500">
                <p className="text-xs font-mono text-gray-600 mb-1">CUSTOMER LIFETIME VALUE</p>
                <p className="text-xl font-bold">$750K - $3M</p>
                <p className="text-sm text-gray-600">5-year contract value</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "GROSS MARGIN",
                  value: "85%",
                  description: "Software revenue",
                  color: "blue"
                },
                {
                  label: "SERVICES MARGIN",
                  value: "65%",
                  description: "Implementation & consulting",
                  color: "purple"
                },
                {
                  label: "LTV:CAC RATIO",
                  value: "10:1",
                  description: "Target ratio at scale",
                  color: "cyan"
                },
                {
                  label: "NET RETENTION",
                  value: "120%",
                  description: "Projected annual retention",
                  color: "orange"
                }
              ].map((metric, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-xs font-mono text-gray-600 mb-1">{metric.label}</p>
                  <p className={`text-xl font-bold text-${metric.color}-600`}>{metric.value}</p>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default BusinessModel;
