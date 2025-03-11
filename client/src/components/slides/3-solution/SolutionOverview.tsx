import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, ArrowRight, Smartphone, Database, GitMerge, CreditCard, Clock, Globe, Shield, Zap, AlertCircle, TrendingUp } from 'lucide-react';
import { 
  modernColors, 
  modernTypography, 
  ModernBadge, 
  ModernCard,
  ModernSectionHeader
} from '@/components/modern/ModernSlideStyles';
import { StatCard } from '@/components/core/Slide';

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
      <div className="w-14 h-14 mx-auto mb-3 bg-gray-50 text-gray-500 rounded-full flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-wider text-gray-600 font-medium mb-1">{label}</p>
      <p className="text-xs text-gray-500 max-w-[120px] mx-auto">{description}</p>
    </motion.div>
  </div>
);

const SolutionOverview: React.FC = () => {
  return (
    <Slide 
      title="HandReceipt Solution" // Shortened title
      subtitle="Blockchain-secured supply chain verification with dual-market application"
      variant="feature" // Using the enhanced feature variant
      accent="#333333" // Using a dark gray accent color
    >
      {/* First child: Mobile App - Image Component (left side in feature layout) - REDUCED SIZE */}
      <div className="relative mt-0 pt-0">
        <motion.div
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[200px] h-[340px] bg-white p-2 border border-gray-200 shadow-md rounded-sm relative"
        >
          <div className="w-full h-full bg-white border border-gray-100 overflow-hidden flex flex-col rounded-sm">
            <div className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
              <span className="font-medium">HandReceipt</span>
              <span className="text-xs font-mono">v1.2</span>
            </div>

            <div className="flex-1 p-4 space-y-6">
          <ModernSectionHeader>
            MULTI-DOMAIN SOLUTION
          </ModernSectionHeader>

              <div className="bg-gray-50 border border-gray-200 rounded-sm h-40 flex items-center justify-center">
                <div className="w-4/5 h-4/5 p-3 relative">
                  {/* QR code mock */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 border-2 border-gray-800 p-2">
                      <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_4px)]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                <div className="relative w-full h-2 bg-gray-200 mb-2 overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gray-800"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </div>
                <p className="text-sm text-gray-700 text-center font-medium">VERIFICATION: 80%</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-800 text-white rounded-sm py-2 px-4 font-medium text-sm shadow-sm"
              >
                SCAN ITEM
              </motion.button>
            </div>
          </div>
          
          {/* Highlight badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.7
              }
            }}
            className="absolute -bottom-4 -right-4 bg-gray-800 text-white text-xs py-1 px-3 rounded-sm shadow-lg"
          >
            <div className="font-mono tracking-wider">SECURE</div>
          </motion.div>

          {/* Performance Metrics - REMOVED for space */}
        </motion.div>
      </div>

      {/* Second child: Features Section (right side in feature layout) */}
      <div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <ModernSectionHeader>
            MULTI-DOMAIN SOLUTION
          </ModernSectionHeader>
          <h2 className="text-lg font-medium text-gray-900 mt-1">Secure verification across military and commercial domains</h2>

          {/* Process Steps - EVEN MORE COMPACT */}
          <div className="relative mt-3 mb-4">
            {/* Connecting line */}
            <div className="absolute top-[28px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
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

          {/* Features Grid - ULTRA COMPACT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
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
                className="bg-white shadow-sm rounded-sm p-6 relative border border-gray-200 hover:border-gray-300 transition-colors duration-300"
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
                  <ModernSectionHeader dark>
                    {feature.badge}
                  </ModernSectionHeader>
                </div>
                <div className="mt-3 mb-1">
                  <div className="flex items-center mb-1">
                    <div className="mr-3 text-gray-600">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-lg text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">{feature.description}</p>
                </div>
                <div className="w-full h-[1px] bg-gray-200 my-4" />
                <ul className="space-y-2">
                  {/* Only showing first 3 items for space */}
                  {feature.items.slice(0, 3).map((item, i) => (
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
                      <span className="text-gray-600 mr-2"><Check size={14} /></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Comparative Metrics - REDUCED TO 2 COLUMNS */}
          <div className="mt-6">
            <div className="bg-white shadow-sm rounded-sm p-5 relative border border-gray-200">
              <div className="absolute -top-3 left-10">
                <ModernSectionHeader dark>
                  KEY METRICS
                </ModernSectionHeader>
              </div>
              
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Reduced to only 2 metrics */}
                  {[
                    {
                      value: "60-90%",
                      label: "Processing time",
                      trend: 40
                    },
                    {
                      value: "99.8%",
                      label: "Accuracy",
                      trend: 58
                    }
                  ].map((stat, i) => (
                    <StatCard
                      key={i}
                      value={stat.value}
                      label={stat.label}
                      trend={stat.trend}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default SolutionOverview;
