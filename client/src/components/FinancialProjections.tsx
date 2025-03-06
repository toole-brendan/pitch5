'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";

// Motion variants remain unchanged
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

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const FinancialProjections: React.FC = () => {
  const financialData = [
    { 
      year: 'Year 1', 
      revenue: '175K', 
      customers: '2-3', 
      expenses: '1.2M', 
      cashflow: '-1.0M',
      tokenStaking: '10K'
    },
    { 
      year: 'Year 2', 
      revenue: '1.2M', 
      customers: '5-8', 
      expenses: '1.9M', 
      cashflow: '-700K',
      tokenStaking: '50K'
    },
    { 
      year: 'Year 3', 
      revenue: '4.2M', 
      customers: '15-20', 
      expenses: '3.2M', 
      cashflow: '1.0M',
      tokenStaking: '100K'
    },
    { 
      year: 'Year 4', 
      revenue: '9.6M', 
      customers: '28-35', 
      expenses: '6.5M', 
      cashflow: '3.1M',
      tokenStaking: '500K'
    },
    { 
      year: 'Year 5', 
      revenue: '18.5M', 
      customers: '45-55', 
      expenses: '12.0M', 
      cashflow: '6.5M',
      tokenStaking: '1M'
    }
  ];

  const fundAllocation = [
    { name: 'Engineering & Product', percent: 55, amount: '1.21M' },
    { name: 'Sales & Marketing', percent: 25, amount: '550K' },
    { name: 'Operations', percent: 15, amount: '330K' },
    { name: 'Legal & Compliance', percent: 5, amount: '110K' }
  ];

  return (
    <Slide title="Financial Projections">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Financial Overview Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
            FIVE-YEAR PROJECTIONS & TOKEN METRICS_
          </h3>

          <p className="text-sm text-gray-600 mb-6 font-mono">
            Financial forecast with token economy integration
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left text-xs font-mono uppercase tracking-wider text-gray-500"></th>
                  {financialData.map((data, index) => (
                    <th key={index} className="p-3 text-center text-xs font-mono uppercase tracking-wider text-gray-500">
                      {data.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-xs font-mono text-gray-500 flex items-center">
                    <span className="text-blue-600 mr-2">$</span>
                    REVENUE
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-3 text-center font-semibold text-blue-600">
                      ${data.revenue}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-xs font-mono text-gray-500 flex items-center">
                    <span className="text-orange-600 mr-2">👥</span>
                    CUSTOMERS
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-3 text-center">
                      {data.customers}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-xs font-mono text-gray-500 flex items-center">
                    <span className="text-purple-600 mr-2">🔐</span>
                    TOKEN STAKING
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-3 text-center text-purple-600 font-semibold">
                      {data.tokenStaking} SHL
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-xs font-mono text-gray-500 flex items-center">
                    <span className="text-red-600 mr-2">↑</span>
                    EXPENSES
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-3 text-center text-red-600 font-semibold">
                      ${data.expenses}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-xs font-mono text-gray-500 flex items-center">
                    <span className="text-green-600 mr-2">↔</span>
                    NET CASH FLOW
                  </td>
                  {financialData.map((data, index) => (
                    <td key={index} className="p-3 text-center">
                      <span className={cn(
                        "font-semibold",
                        data.cashflow.includes('-') ? "text-red-600" : "text-green-600"
                      )}>
                        ${data.cashflow}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Metrics and Token Economics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Metrics */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
              TOKEN ECONOMICS_
            </h3>

            <p className="text-sm text-gray-600 mb-6 font-mono">
              Shell Token (SHL) utility metrics
            </p>

            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="text-xs font-mono text-gray-500 mb-1">BASE TRANSACTION FEE</p>
                <p className="text-xl font-bold">0.1%</p>
                <p className="text-xs text-gray-600">Per transaction value</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white border-l-4 border-orange-600 p-4 shadow-sm">
                <p className="text-xs font-mono text-gray-500 mb-1">FEE BURN RATE</p>
                <p className="text-xl font-bold">40%</p>
                <p className="text-xs text-gray-600">Of transaction fees</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white border-l-4 border-purple-600 p-4 shadow-sm">
                <p className="text-xs font-mono text-gray-500 mb-1">VALIDATOR SHARE</p>
                <p className="text-xl font-bold">30%</p>
                <p className="text-xs text-gray-600">Of transaction fees</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white border-l-4 border-green-600 p-4 shadow-sm">
                <p className="text-xs font-mono text-gray-500 mb-1">DEVELOPMENT FUND</p>
                <p className="text-xl font-bold">30%</p>
                <p className="text-xs text-gray-600">Of transaction fees</p>
              </motion.div>
            </div>
          </div>

          {/* Use of Funds */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
              STAKING REQUIREMENTS_
            </h3>

            <p className="text-sm text-gray-600 mb-6 font-mono">
              Minimum token holdings by participant type
            </p>

            <div className="space-y-4">
              {[
                { name: 'Suppliers', percent: 25, amount: '10,000 SHL' },
                { name: 'Retailers', percent: 50, amount: '50,000 SHL' },
                { name: 'Financial Institutions', percent: 100, amount: '100,000 SHL' }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono">{item.name}</span>
                    <span className="text-sm font-semibold">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      variants={barVariants}
                      className={cn(
                        "h-full rounded-full",
                        index === 0 ? "bg-blue-600" :
                        index === 1 ? "bg-orange-600" :
                        "bg-purple-600"
                      )}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default FinancialProjections;