import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  Smartphone, 
  FileText, 
  Shield, 
  Zap, 
  Check, 
  ChevronRight, 
  Building, 
  Warehouse, 
  Scan, 
  ArrowRight,
  Users,
  Sparkles,
  ClipboardCheck,
  Clock,
  ArrowLeftRight
} from 'lucide-react';

// Animation variants
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

const stepVariants = {
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

const phoneVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const appItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.1 * custom
    }
  })
};

// New animations for enhanced interactivity
const pulseVariant = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const UserExperience: React.FC = () => {
  // State for interactive tabs
  const [activeTab, setActiveTab] = useState<'defense' | 'commercial'>('defense');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  // Interactive workflow steps
  const workflowSteps = [
    {
      step: 1,
      title: "Scan",
      description: "User scans QR code with the HandReceipt mobile app",
      icon: <Scan className="w-5 h-5 text-violet-600" />,
      content: "The scanning process is designed to be simple and intuitive. Military personnel in the field or warehouse workers can quickly scan a QR code attached to equipment or inventory."
    },
    {
      step: 2,
      title: "Verify",
      description: "Blockchain verification confirms authenticity",
      icon: <Shield className="w-5 h-5 text-violet-600" />,
      content: "Once scanned, the item is verified against the blockchain ledger. This step ensures that the item is legitimate and provides immediate access to its entire history."
    },
    {
      step: 3,
      title: "Transfer",
      description: "Securely transfer ownership with digital signatures",
      icon: <ArrowLeftRight className="w-5 h-5 text-violet-600" />,
      content: "The transferring party initiates the transfer request, and the receiving party gets a notification to accept. Both parties digitally sign to confirm, creating a tamper-proof record."
    },
    {
      step: 4,
      title: "Record",
      description: "Transaction recorded permanently on blockchain",
      icon: <ClipboardCheck className="w-5 h-5 text-violet-600" />,
      content: "The completed transaction is recorded on the blockchain, providing an immutable record. For commercial users, this step can also trigger automatic payment through Shell tokens."
    }
  ];

  return (
    <Slide 
      title="User Experience"
      subtitle="Intuitive interfaces for defense and commercial applications"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* Interactive Mobile Interface Mockups */}
        <div className="md:col-span-4">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MOBILE INTERFACES
              </span>
            </div>
            
            {/* Interactive Interface Selector */}
            <div className="mt-4 mb-6 flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('defense')}
                className={`py-2 px-4 text-xs font-medium transition-colors ${
                  activeTab === 'defense' 
                    ? 'text-violet-600 border-b-2 border-violet-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                DEFENSE APP
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`py-2 px-4 text-xs font-medium transition-colors ${
                  activeTab === 'commercial' 
                    ? 'text-violet-600 border-b-2 border-violet-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                COMMERCIAL APP
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Defense Mobile Interface */}
                <motion.div 
                  variants={phoneVariants}
                  animate={activeTab === 'defense' ? 'visible' : 'hidden'}
                  className={`w-[220px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md ${
                    activeTab === 'defense' ? 'relative z-20' : 'absolute -left-20 top-10 z-0'
                  } transform ${activeTab === 'defense' ? 'rotate-0' : '-rotate-6'}`}
                >
                  <div className="w-full h-[380px] bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
                    <div className="bg-violet-800 text-white px-4 py-3 flex justify-between items-center">
                      <div>
                        <span className="font-medium">HandReceipt</span>
                        <p className="text-xs opacity-75">DEFENSE</p>
                      </div>
                      <span className="text-xs">v1.0</span>
                    </div>

                    <div className="flex-1 p-3 space-y-3">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">INVENTORY</div>

                      <motion.div 
                        variants={pulseVariant}
                        initial="initial"
                        animate="pulse"
                        className="bg-violet-50 border border-violet-200 rounded-sm p-2 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-medium">M4 Carbine</div>
                          <div className="text-xs text-gray-500">SN: 9358627</div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </motion.div>

                      <div className="bg-gray-50 border border-gray-200 rounded-sm p-2 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium">NVG-7</div>
                          <div className="text-xs text-gray-500">SN: 5571938</div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="mt-4 p-3">
                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">ACTIONS</div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                            <Scan className="w-4 h-4 text-violet-700 mb-1" />
                            <div className="text-xs text-violet-700 font-medium">Scan QR</div>
                          </div>
                          <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                            <ArrowLeftRight className="w-4 h-4 text-violet-700 mb-1" />
                            <div className="text-xs text-violet-700 font-medium">Transfer</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 bg-violet-800 text-white border border-violet-700 rounded-sm p-2">
                        <div className="text-xs text-center font-medium">VERIFY EQUIPMENT</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Commercial Mobile Interface */}
                <motion.div 
                  variants={phoneVariants}
                  animate={activeTab === 'commercial' ? 'visible' : 'hidden'}
                  className={`w-[220px] bg-gray-100 p-3 border border-gray-300 shadow-md rounded-md ${
                    activeTab === 'commercial' ? 'relative z-20' : 'absolute left-20 top-10 z-0'
                  } transform ${activeTab === 'commercial' ? 'rotate-0' : 'rotate-6'}`}
                >
                  <div className="w-full h-[380px] bg-white border border-gray-200 overflow-hidden flex flex-col rounded-sm">
                    <div className="bg-violet-600 text-white px-4 py-3 flex justify-between items-center">
                      <div>
                        <span className="font-medium">HandReceipt</span>
                        <p className="text-xs opacity-75">COMMERCIAL</p>
                      </div>
                      <span className="text-xs">v1.0</span>
                    </div>

                    <div className="flex-1 p-3 space-y-3">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">DASHBOARD</div>

                      <div className="grid grid-cols-2 gap-2">
                        <motion.div 
                          variants={pulseVariant}
                          initial="initial"
                          animate="pulse"
                          className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center"
                        >
                          <Scan className="w-4 h-4 text-violet-700 mb-1" />
                          <div className="text-xs text-violet-700 font-medium">Scan Item</div>
                        </motion.div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <Shield className="w-4 h-4 text-violet-700 mb-1" />
                          <div className="text-xs text-violet-700 font-medium">Verify</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <ArrowLeftRight className="w-4 h-4 text-violet-700 mb-1" />
                          <div className="text-xs text-violet-700 font-medium">Transfer</div>
                        </div>
                        <div className="bg-violet-50 border border-violet-200 p-2 rounded-sm flex flex-col items-center justify-center">
                          <Zap className="w-4 h-4 text-violet-700 mb-1" />
                          <div className="text-xs text-violet-700 font-medium">Pay</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">RECENT ACTIVITY</div>
                        <div className="bg-violet-50 border border-violet-200 rounded-sm p-2 mb-2">
                          <p className="text-xs font-medium">Payment Received: $1,283.50</p>
                          <p className="text-xs text-gray-500">2 min ago • SKU-12355</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-sm p-2 mb-2">
                          <p className="text-xs">Received: Shipping Container</p>
                          <p className="text-xs text-gray-500">12 min ago • ID: SC-39281</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-sm p-2">
                          <p className="text-xs">Verified: Product Batch</p>
                          <p className="text-xs text-gray-500">35 min ago • Batch: PB-1928</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive User Workflows */}
        <div className="md:col-span-8">
          <div className="bg-white shadow-sm rounded-sm p-6 relative">
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                USER WORKFLOW
              </span>
            </div>
            
            <div className="mt-6 mb-6">
              <div className="relative pb-6">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
                
                <div className="grid grid-cols-4 gap-2 relative z-10">
                  {workflowSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <motion.div
                        variants={stepVariants}
                        custom={index + 1}
                        onClick={() => setActiveWorkflowStep(index)}
                        className={`w-10 h-10 ${activeWorkflowStep === index 
                          ? 'bg-violet-600 text-white' 
                          : 'bg-white text-violet-700'} 
                          border border-violet-600 rounded-full flex items-center justify-center mb-3 
                          font-medium cursor-pointer transition-colors duration-300 hover:bg-violet-50`}
                      >
                        {step.step}
                      </motion.div>
                      <h4 className="text-sm font-medium text-center">
                        {step.title}
                      </h4>
                      <p className="text-xs text-center text-gray-600 mt-1">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Interactive workflow details */}
            <motion.div 
              key={activeWorkflowStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-violet-50 border border-violet-200 p-4 rounded-sm mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {workflowSteps[activeWorkflowStep].icon}
                </div>
                <div>
                  <h3 className="text-base font-medium text-violet-800 mb-2">
                    Step {workflowSteps[activeWorkflowStep].step}: {workflowSteps[activeWorkflowStep].title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {workflowSteps[activeWorkflowStep].content}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {/* Defense User Experience */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-violet-600" />
                  <h4 className="text-base font-medium text-gray-900">Defense UX</h4>
                </div>
                
                <ul className="space-y-2 ml-8">
                  <motion.li
                    variants={appItemVariants} 
                    custom={1}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Simplicity First:</span> Designed for field conditions with minimal training required
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={2}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Offline Mode:</span> Functions without connectivity and syncs when network is available
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={3}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">CAC Integration:</span> Secure authentication using military ID cards
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={4}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Ruggedized Interface:</span> High contrast and readable in all conditions
                    </p>
                  </motion.li>

                  <motion.li
                    variants={appItemVariants} 
                    custom={5}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Multi-level Visibility:</span> Unit leaders can view their entire inventory at a glance
                    </p>
                  </motion.li>
                </ul>
              </motion.div>
              
              {/* Commercial User Experience */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-4 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-5 h-5 text-violet-600" />
                  <h4 className="text-base font-medium text-gray-900">Commercial UX</h4>
                </div>
                
                <ul className="space-y-2 ml-8">
                  <motion.li
                    variants={appItemVariants} 
                    custom={1}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Payment Dashboard:</span> Real-time visibility of payment status and history
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={2}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Shell Integration:</span> One-click payment processing using Shell tokens
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={3}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Multi-user Roles:</span> Customizable permissions for different team members
                    </p>
                  </motion.li>
                  
                  <motion.li
                    variants={appItemVariants} 
                    custom={4}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">API Connections:</span> Seamless integration with existing ERP and WMS systems
                    </p>
                  </motion.li>

                  <motion.li
                    variants={appItemVariants} 
                    custom={5}
                    className="relative ml-4"
                  >
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Analytics Dashboard:</span> Business intelligence tools for supply chain visibility
                    </p>
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* User Benefits Comparison */}
            <motion.div
              variants={itemVariants}
              className="mt-6 bg-white border border-gray-200 rounded-sm p-4"
            >
              <h4 className="text-sm font-mono uppercase tracking-widest text-violet-600 mb-4">KEY UX IMPROVEMENTS</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium mb-1">Time Savings</h5>
                    <p className="text-xs text-gray-600">85% reduction in processing time compared to paper-based systems</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium mb-1">Adoption Rate</h5>
                    <p className="text-xs text-gray-600">93% user satisfaction in pilot program with minimal training</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium mb-1">Error Reduction</h5>
                    <p className="text-xs text-gray-600">99.7% accuracy in tracking and transfers with blockchain verification</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-medium mb-1">Payment Speed</h5>
                    <p className="text-xs text-gray-600">Instant settlement vs. 30-90 days for traditional payments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default UserExperience; 