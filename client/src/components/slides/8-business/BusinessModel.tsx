import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  Check, 
  Building2, 
  Settings, 
  RefreshCcw, 
  Truck, 
  Sword, 
  Flag, 
  Factory,
  ChevronRight,
  DollarSign,
  BarChart3,
  PieChart,
  Zap,
  Shield
} from 'lucide-react';

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
    <Slide 
      title="Business Model & Pricing Strategy" 
      subtitle="Multi-stream monetization approach with market-specific value propositions"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col space-y-6"
      >
        {/* Revenue Streams */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              REVENUE STREAMS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-2">
            {/* Revenue Mix Chart */}
            <div className="md:col-span-5">
              <h3 className="text-base font-medium mb-3">Revenue Mix Evolution</h3>
              <div className="flex items-center space-x-6">
                {/* Year 2 Pie Chart - Aligning with financial projections */}
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-600 mb-2">Year 2</p>
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-violet-100"></div>
                    <div className="absolute inset-0 rounded-full bg-violet-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 60% 100%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-violet-300" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 60%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PieChart className="h-6 w-6 text-violet-700" />
                    </div>
                  </div>
                </div>
                
                {/* Year 4 Pie Chart - Aligning with financial projections and breakeven */}
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-600 mb-2">Year 4</p>
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-violet-100"></div>
                    <div className="absolute inset-0 rounded-full bg-violet-500" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 90% 0%, 100% 40%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-violet-300" style={{ clipPath: 'polygon(50% 50%, 100% 40%, 100% 90%, 70% 100%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-violet-400" style={{ clipPath: 'polygon(50% 50%, 70% 100%, 30% 100%, 0% 70%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 rounded-full bg-violet-200" style={{ clipPath: 'polygon(50% 50%, 0% 70%, 0% 20%, 50% 0%, 50% 50%)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PieChart className="h-6 w-6 text-violet-700" />
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-2">
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-violet-500 mr-2"></div>
                    <span>Subscription Licenses</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-violet-300 mr-2"></div>
                    <span>Transaction Fees</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-violet-400 mr-2"></div>
                    <span>Data Analytics</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-violet-200 mr-2"></div>
                    <span>API Access</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Revenue Streams */}
            <div className="md:col-span-7">
              <h3 className="text-base font-medium mb-3">Multiple Revenue Sources</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    title: "Subscription Licenses",
                    description: "Tiered annual contracts for defense and commercial clients",
                    icon: <Building2 className="w-4 h-4 text-violet-600" />
                  },
                  {
                    title: "Transaction Fees",
                    description: "0.1-0.5% fee per transaction processed through the platform",
                    icon: <DollarSign className="w-4 h-4 text-violet-600" />
                  },
                  {
                    title: "Data Analytics Package",
                    description: "Premium insights and supply chain intelligence",
                    icon: <BarChart3 className="w-4 h-4 text-violet-600" />
                  },
                  {
                    title: "API Access Tiers",
                    description: "Developer access for custom integrations and extensions",
                    icon: <Settings className="w-4 h-4 text-violet-600" />
                  }
                ].map((stream, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-sm">
                    <div className="flex-shrink-0 mt-0.5">{stream.icon}</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{stream.title}</p>
                      <p className="text-xs text-gray-600">{stream.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Market-Specific Value Props */}
        <motion.div 
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              MARKET-SPECIFIC ROI
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
            {[
              {
                market: "Defense",
                icon: <Shield className="w-5 h-5 text-violet-600" />,
                roi: "8.7x",
                benefit: "Reduced inventory loss",
                impact: "$1.2B+ opportunity",
                payback: "12 months"
              },
              {
                market: "Logistics",
                icon: <Truck className="w-5 h-5 text-violet-600" />,
                roi: "6.2x",
                benefit: "Working capital efficiency",
                impact: "60-90 day reduction",
                payback: "18 months"
              },
              {
                market: "Manufacturing",
                icon: <Factory className="w-5 h-5 text-violet-600" />,
                roi: "4.5x",
                benefit: "Compliance cost reduction",
                impact: "35% reduction",
                payback: "24 months"
              },
              {
                market: "Maintenance",
                icon: <RefreshCcw className="w-5 h-5 text-violet-600" />,
                roi: "5.8x",
                benefit: "Part authenticity verification",
                impact: "47% faster verification",
                payback: "18 months"
              }
            ].map((market, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="bg-gray-50 p-4 rounded-sm border-l-2 border-l-violet-400"
              >
                <div className="flex items-center gap-2 mb-3">
                  {market.icon}
                  <h4 className="font-medium">{market.market}</h4>
                </div>
                
                <div className="mb-2">
                  <p className="text-xs text-gray-600">ROI</p>
                  <p className="text-xl font-medium text-violet-600">{market.roi}</p>
                </div>
                
                <div className="mb-1">
                  <p className="text-xs text-gray-600">{market.benefit}</p>
                  <p className="text-sm font-medium">{market.impact}</p>
                </div>
                
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                  <Zap className="w-3 h-3 text-violet-600" />
                  <span>Payback: {market.payback}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Service Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Defense Tier */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm border border-gray-200"
          >
            <div className="bg-violet-50 p-4 border-b border-gray-200 flex items-center">
              <Sword className="text-violet-600 mr-2" />
              <h4 className="font-medium">Defense Tier</h4>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <p className="text-2xl font-medium text-violet-600 mb-1">$250K - $1M</p>
                <p className="text-sm text-gray-600">Annual license</p>
                <p className="text-xs text-gray-500">Based on scale and customization</p>
              </div>
              
              <div className="divider"></div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Enterprise-grade deployment</p>
                    <p className="text-sm text-gray-600">Full security compliance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Custom integrations</p>
                    <p className="text-sm text-gray-600">Works with existing systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Dedicated support team</p>
                    <p className="text-sm text-gray-600">24/7 mission-critical support</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Commercial Tier */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm border border-gray-200"
          >
            <div className="bg-violet-50 p-4 border-b border-gray-200 flex items-center">
              <Building2 className="text-violet-600 mr-2" />
              <h4 className="font-medium">Commercial Enterprise</h4>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <p className="text-2xl font-medium text-violet-600 mb-1">$75K - $150K</p>
                <p className="text-sm text-gray-600">Annual license</p>
                <p className="text-xs text-gray-500">Per business unit/facility</p>
              </div>
              
              <div className="divider"></div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Full platform capabilities</p>
                    <p className="text-sm text-gray-600">Customizable dashboard</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">ERP integration suite</p>
                    <p className="text-sm text-gray-600">Works with existing systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-violet-600 w-5 h-5 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">Priority support</p>
                    <p className="text-sm text-gray-600">Business hours + emergency</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Transaction Economics */}
          <motion.div
            variants={itemVariants}
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                TRANSACTION ECONOMICS
              </span>
            </div>
            
            <div className="space-y-4 mt-1">
              <div>
                <p className="font-medium mb-1 text-center">Payment Processing Cost</p>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-sm mb-1">
                  <span className="text-sm">Traditional</span>
                  <span className="text-sm font-medium">2.5-3.5%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-violet-50 rounded-sm">
                  <span className="text-sm">Shell Token</span>
                  <span className="text-sm font-medium text-violet-700">0.1-0.5%</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-sm">
                <p className="text-sm font-medium mb-2">Sample $100K Transaction</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Traditional Cost:</span>
                    <span>$2,500-3,500</span>
                  </div>
                  <div className="flex justify-between text-xs font-medium text-violet-700">
                    <span>Shell Token Cost:</span>
                    <span>$100-500</span>
                  </div>
                  <div className="flex justify-between text-xs text-violet-700 pt-1 border-t border-gray-200 mt-1">
                    <span>Savings:</span>
                    <span>80-96%</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Network Benefits</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-700">
                      Value increases with transaction volume
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-700">
                      Staking rewards for validators
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-700">
                      Immediate settlement (vs. 60-90 days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Unit Economics */}
        <motion.div
          variants={itemVariants}
          className="bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              UNIT ECONOMICS
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-2">
            {/* CAC by Channel */}
            <div className="md:col-span-6">
              <h3 className="text-sm font-medium mb-3">Customer Acquisition Cost</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Defense Direct Sales</span>
                    <span className="text-sm font-medium">$60-75K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Defense Partnerships</span>
                    <span className="text-sm font-medium">$25-40K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Commercial Direct</span>
                    <span className="text-sm font-medium">$50-65K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Commercial Partnerships</span>
                    <span className="text-sm font-medium">$30-45K</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* LTV and Growth */}
            <div className="md:col-span-6">
              <h3 className="text-sm font-medium mb-3">Customer Lifetime Value</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-xs text-gray-600 mb-1">AVG. LTV</p>
                  <p className="text-xl font-medium text-violet-600">$400K-750K</p>
                  <p className="text-xs text-gray-600">5-year contract value</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-xs text-gray-600 mb-1">LTV:CAC RATIO</p>
                  <p className="text-xl font-medium text-violet-600">10:1</p>
                  <p className="text-xs text-gray-600">Target at scale</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-xs text-gray-600 mb-1">GROSS MARGIN</p>
                  <p className="text-xl font-medium text-violet-600">80-85%</p>
                  <p className="text-xs text-gray-600">Software revenue</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-sm">
                  <p className="text-xs text-gray-600 mb-1">NET RETENTION</p>
                  <p className="text-xl font-medium text-violet-600">120%</p>
                  <p className="text-xs text-gray-600">Annual expansion</p>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-violet-50 rounded-sm">
                <p className="text-sm font-medium mb-2">Land & Expand Strategy</p>
                <div className="flex items-center">
                  <div className="text-center px-3">
                    <div className="w-16 h-10 bg-violet-100 border border-violet-300 flex items-center justify-center rounded-sm mb-1">
                      <span className="text-xs font-medium">Pilot</span>
                    </div>
                    <p className="text-xs text-violet-700">$100K</p>
                  </div>
                  
                  <ChevronRight className="h-4 w-4 text-violet-400" />
                  
                  <div className="text-center px-3">
                    <div className="w-16 h-10 bg-violet-200 border border-violet-300 flex items-center justify-center rounded-sm mb-1">
                      <span className="text-xs font-medium">Division</span>
                    </div>
                    <p className="text-xs text-violet-700">$250K</p>
                  </div>
                  
                  <ChevronRight className="h-4 w-4 text-violet-400" />
                  
                  <div className="text-center px-3">
                    <div className="w-16 h-10 bg-violet-300 border border-violet-400 flex items-center justify-center rounded-sm mb-1">
                      <span className="text-xs font-medium">Enterprise</span>
                    </div>
                    <p className="text-xs text-violet-700">$1M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default BusinessModel;
