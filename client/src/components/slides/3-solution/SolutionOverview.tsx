import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, ArrowRight, Smartphone, Database, GitMerge, CreditCard, Clock, Globe, Shield, Zap, AlertCircle, TrendingUp } from 'lucide-react';

// Motion variants
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

const phoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const metricsVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.7
    }
  }
};

// Helper component for the process steps
const ProcessStep = ({ icon, label, step, description }: { icon: React.ReactNode, label: string, step: number, description: string }) => (
  <div className="text-center relative">
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          delay: 0.3 + (step * 0.15),
          duration: 0.5 
        } 
      }}
      className="flex flex-col items-center"
    >
      <div className="w-14 h-14 mx-auto mb-3 bg-violet-50 border border-violet-200 text-violet-600 rounded-full flex items-center justify-center text-lg shadow-sm">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-1">{label}</p>
      <p className="text-xs text-gray-500 max-w-[120px] mx-auto">{description}</p>
    </motion.div>
  </div>
);

const SolutionOverview: React.FC = () => {
  return (
    <Slide 
      title="HandReceipt Solution Overview" 
      subtitle="Blockchain-secured supply chain verification with dual-market application"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
        {/* Mobile App Side (Left) */}
        <div className="md:col-span-4 relative flex flex-col items-center justify-center">
          {/* Performance Metrics */}
          <motion.div
            variants={metricsVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-5 -right-5 z-10 bg-white shadow-md p-4 rounded-sm border border-gray-200"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-violet-600 mr-2" />
                <span className="text-xl font-medium text-violet-600 mr-2">60-90</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Days reduced</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-violet-600 mr-2" />
                <span className="text-xl font-medium text-violet-600 mr-2">100%</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Digital tracking</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 text-violet-600 mr-2" />
                <span className="text-xl font-medium text-violet-600 mr-2">Real-time</span>
                <span className="text-xs uppercase tracking-wide text-gray-600">Visibility</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile App */}
          <motion.div
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[280px] h-[480px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md relative"
          >
            <div className="w-full h-full bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
              <div className="bg-violet-600 text-white px-4 py-3 flex justify-between items-center">
                <span className="font-medium">HandReceipt</span>
                <span className="text-xs font-mono">v1.2</span>
              </div>

              <div className="flex-1 p-4 space-y-6">
                <div className="bg-violet-50 text-violet-600 text-xs tracking-[0.2em] font-mono uppercase py-1 px-3 border border-violet-200 inline-block">
                  INVENTORY MANAGEMENT
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm h-40 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 p-3 relative">
                    {/* QR code mock */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border-2 border-violet-800 p-2">
                        <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_4px)]"></div>
                      </div>
                    </div>
                    
                    {/* Removed scanning effect animation as requested */}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                  <div className="relative w-full h-2 bg-gray-200 mb-2 overflow-hidden rounded-full">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-violet-600"
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </div>
                  <p className="text-sm text-violet-600 text-center font-medium">VERIFICATION: 80%</p>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-violet-600 text-white rounded-sm py-2 px-4 font-medium text-sm shadow-sm"
                >
                  SCAN ITEM
                </motion.button>
              </div>
            </div>
            
            {/* Highlight badge */}
            <motion.div
              variants={highlightVariants}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-4 -right-4 bg-violet-600 text-white text-xs py-1 px-3 rounded-sm shadow-lg"
            >
              <div className="font-mono tracking-wider">SECURE</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section (Right) */}
        <div className="md:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="bg-violet-50 text-violet-600 text-xs tracking-[0.2em] font-mono uppercase py-1 px-3 border border-violet-200 inline-block mb-2">
              MULTI-DOMAIN SOLUTION
            </div>
            <h2 className="text-xl font-medium text-gray-900">Secure verification across military and commercial domains</h2>

            {/* Process Steps */}
            <div className="relative mt-8 mb-10">
              {/* Connecting line */}
              <div className="absolute top-[28px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <ProcessStep 
                  icon={<Smartphone size={20} />}
                  label="QR Scan"
                  step={1}
                  description="Scan item code with mobile app"
                />
                <ProcessStep 
                  icon={<Database size={20} />}
                  label="Blockchain Record"
                  step={2}
                  description="Encrypted data on immutable ledger"
                />
                <ProcessStep 
                  icon={<GitMerge size={20} />}
                  label="Smart Contract"
                  step={3}
                  description="Automated verification process"
                />
                <ProcessStep 
                  icon={<CreditCard size={20} />}
                  label="Settlement"
                  step={4}
                  description="Instant payment on verification"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Military Application",
                  description: "Secure property tracking and transfers",
                  icon: <Shield size={20} />,
                  badge: "MILITARY",
                  items: [
                    "QR-code based digital transfers",
                    "Zero-knowledge proof verification",
                    "Blockchain-secured records",
                    "Paper process digitization"
                  ]
                },
                {
                  title: "Commercial Integration",
                  description: "Enterprise system compatibility",
                  icon: <Zap size={20} />,
                  badge: "COMMERCIAL",
                  items: [
                    "Existing scanning infrastructure",
                    "ERP/WMS API integration",
                    "Shell token payments",
                    "Immediate settlement"
                  ]
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white shadow-sm rounded-sm p-6 relative border border-gray-200 hover:border-violet-200 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      delay: 0.8 + (index * 0.2),
                      duration: 0.5,
                      ease: "easeOut"
                    } 
                  }}
                >
                  <div className="absolute -top-3 left-10">
                    <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500 shadow-sm">
                      {feature.badge}
                    </span>
                  </div>
                  <div className="mt-6 mb-3">
                    <div className="flex items-center mb-2">
                      <div className="mr-3 text-violet-600">
                        {feature.icon}
                      </div>
                      <h3 className="font-medium text-lg text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">{feature.description}</p>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200 my-4" />
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0, 
                          transition: { 
                            delay: 1.0 + (i * 0.1) + (index * 0.2),
                            duration: 0.3
                          } 
                        }}
                      >
                        <span className="text-violet-600 mr-2"><Check size={14} /></span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Comparative Metrics */}
            <motion.div 
              className="mt-8 bg-white shadow-sm rounded-sm p-6 relative border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  delay: 1.5,
                  duration: 0.6 
                } 
              }}
            >
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500 shadow-sm">
                  VALUE PROPOSITION
                </span>
              </div>
              
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Clock size={18} />,
                      metric: "60-90%",
                      label: "Reduced processing time",
                      description: "vs. traditional methods"
                    },
                    {
                      icon: <AlertCircle size={18} />,
                      metric: "99.8%",
                      label: "Inventory accuracy",
                      description: "vs. industry avg. of 63%"
                    },
                    {
                      icon: <TrendingUp size={18} />,
                      metric: "35%",
                      label: "Working capital freed",
                      description: "through faster payments"
                    },
                    {
                      icon: <Database size={18} />,
                      metric: "100%",
                      label: "Auditability",
                      description: "immutable records"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="text-center p-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        transition: { 
                          delay: 1.7 + (i * 0.1),
                          duration: 0.4 
                        } 
                      }}
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-full bg-violet-50 text-violet-600">
                          {item.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-semibold text-violet-600">{item.metric}</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-gray-700 mb-1">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
};

export default SolutionOverview;