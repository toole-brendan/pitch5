import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  ShieldCheck, 
  Layers, 
  Code, 
  Wallet, 
  Settings, 
  Network, 
  Lock, 
  Database, 
  CircuitBoard, 
  Cpu, 
  Check, 
  Clock,
  RefreshCw,
  FilterX,
  ExternalLink,
  ArrowRight
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

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + (custom * 0.1),
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

const ShellTokenArchitecture: React.FC = () => {
  // Core Architecture Components
  const architectureComponents = [
    {
      title: "Consensus Protocol",
      icon: <Layers className="h-5 w-5 text-violet-600" />,
      description: "Delegated Proof of Supply Chain (DPoSC) with 21-30 validators",
      details: [
        "3-5 second block times with PBFT-inspired finality",
        "Validators weighted by supply chain activity volume",
        "Energy-efficient alternative to Proof of Work"
      ]
    },
    {
      title: "HandReceipt Oracle Integration",
      icon: <CircuitBoard className="h-5 w-5 text-violet-600" />,
      description: "Built-in oracle that securely triggers smart contracts from physical world events",
      details: [
        "Direct integration with HandReceipt supply chain system",
        "Eliminates need for external oracles like Chainlink",
        "Military-grade verification of physical goods receipt"
      ],
      highlight: true
    },
    {
      title: "Smart Contract Engine",
      icon: <Code className="h-5 w-5 text-violet-600" />,
      description: "Supply chain-specific VM with specialized contract templates",
      details: [
        "Payment, escrow, and SLA contract libraries",
        "Deterministic execution with formal verification",
        "Gas-free execution for verified participants"
      ]
    },
    {
      title: "Security Framework",
      icon: <Lock className="h-5 w-5 text-violet-600" />,
      description: "Defense-grade security for commercial applications",
      details: [
        "NIST 800-53 compliant controls and encryption",
        "Multi-signature requirements for high-value transfers",
        "Auditability with selective disclosure mechanisms"
      ]
    }
  ];
  
  // Comparison with other blockchain platforms
  const comparisonData = [
    {
      feature: "Transaction Confirmation",
      shell: "3-5 seconds",
      ethereum: "1+ minutes",
      hyperledger: "1+ seconds"
    },
    {
      feature: "Supply Chain Integration",
      shell: "Native built-in oracle",
      ethereum: "Requires Chainlink",
      hyperledger: "Custom integration needed"
    },
    {
      feature: "Compliance",
      shell: "NIST 800-53, CMMC",
      ethereum: "Limited",
      hyperledger: "Framework only"
    },
    {
      feature: "Payment Settlement",
      shell: "Immediate via SHL token",
      ethereum: "Possible but complex",
      hyperledger: "No native token"
    }
  ];

  // Implementation timeline
  const implementationTimeline = [
    {
      quarter: "Q1 2025",
      milestone: "Foundation Layer Development",
      details: "Core blockchain implementation with supply chain primitives",
      completed: false
    },
    {
      quarter: "Q2 2025",
      milestone: "HandReceipt Oracle Integration",
      details: "Deploy built-in oracle connecting physical world to smart contracts",
      completed: false,
      highlight: true
    },
    {
      quarter: "Q3 2025",
      milestone: "Security Audit & Optimization",
      details: "External security audit and performance optimization",
      completed: false
    },
    {
      quarter: "Q4 2025",
      milestone: "Mainnet Launch",
      details: "Public mainnet with initial validator set and commercial applications",
      completed: false
    }
  ];

  return (
    <Slide 
      title="Shell Token Architecture" 
      subtitle="Technical foundation for secure supply chain transactions with built-in oracle capabilities"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Architectural Innovation */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              KEY INNOVATION
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
            <div className="col-span-8">
              <div className="flex items-start gap-4">
                <CircuitBoard className="w-8 h-8 text-violet-600 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Built-in Oracle: The Integration Advantage</h3>
                  <p className="text-gray-600 mt-2">
                    Unlike other blockchain solutions that rely on external oracles (like Chainlink) to connect real-world 
                    events to blockchain actions, Shell tokens leverage HandReceipt's built-in oracle system. This direct 
                    integration creates a seamless bridge between physical supply chain events (scanning, delivery, inspection) 
                    and automated financial settlements via smart contracts.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-violet-50 p-3 rounded-sm border-l-2 border-violet-400">
                      <h4 className="font-medium text-violet-900">Traditional Approach</h4>
                      <p className="text-sm text-violet-700 mt-1">
                        Multiple systems with manual verification and external oracles creating security vulnerabilities
                      </p>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-sm border-l-2 border-violet-400">
                      <h4 className="font-medium text-violet-900">HandReceipt + Shell Approach</h4>
                      <p className="text-sm text-violet-700 mt-1">
                        Single integrated system with built-in oracle that cryptographically verifies and executes transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="bg-gray-50 p-4 rounded-sm h-full flex flex-col justify-center">
                <h4 className="text-base font-medium text-center mb-4">Oracle Integration Flow</h4>
                
                {/* Simple Flow Diagram */}
                <div className="flex flex-col items-center">
                  <div className="bg-violet-100 border border-violet-200 rounded-md p-3 w-full text-center text-sm text-violet-800">
                    QR Scan in HandReceipt App
                  </div>
                  <div className="h-6 w-px bg-violet-300"></div>
                  <ArrowRight className="text-violet-400" />
                  <div className="h-6 w-px bg-violet-300"></div>
                  <div className="bg-violet-200 border border-violet-300 rounded-md p-3 w-full text-center text-sm text-violet-800">
                    Built-in Oracle Verification
                  </div>
                  <div className="h-6 w-px bg-violet-300"></div>
                  <ArrowRight className="text-violet-400" />
                  <div className="h-6 w-px bg-violet-300"></div>
                  <div className="bg-violet-300 border border-violet-400 rounded-md p-3 w-full text-center text-sm text-violet-800">
                    Smart Contract Execution
                  </div>
                  <div className="h-6 w-px bg-violet-300"></div>
                  <ArrowRight className="text-violet-400" />
                  <div className="h-6 w-px bg-violet-300"></div>
                  <div className="bg-violet-500 border border-violet-600 rounded-md p-3 w-full text-center text-sm text-white">
                    Immediate Shell Token Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Architecture Components */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              BLOCKCHAIN ARCHITECTURE
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {architectureComponents.map((component, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                custom={index}
                className={`p-4 ${component.highlight ? 'bg-violet-50 border border-violet-200' : 'bg-gray-50'} rounded-sm`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0">
                    {component.icon}
                  </div>
                  <h3 className={`text-base font-medium ${component.highlight ? 'text-violet-900' : 'text-gray-900'}`}>
                    {component.title}
                  </h3>
                </div>
                <p className={`text-sm mb-3 ${component.highlight ? 'text-violet-700' : 'text-gray-600'}`}>
                  {component.description}
                </p>
                <ul className="space-y-2">
                  {component.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${component.highlight ? 'text-violet-600' : 'text-violet-600'}`} />
                      <span className={component.highlight ? 'text-violet-700' : 'text-gray-700'}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Blockchain Comparison */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              COMPETITIVE COMPARISON
            </span>
          </div>
          
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b border-gray-200 font-medium text-gray-700">Feature</th>
                    <th className="text-center p-3 border-b border-gray-200 font-medium text-violet-700">Shell (SHL)</th>
                    <th className="text-center p-3 border-b border-gray-200 font-medium text-gray-700">Ethereum</th>
                    <th className="text-center p-3 border-b border-gray-200 font-medium text-gray-700">Hyperledger Fabric</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3 border-b border-gray-200 font-medium">{row.feature}</td>
                      <td className="p-3 border-b border-gray-200 text-center bg-violet-50 text-violet-700 font-medium">{row.shell}</td>
                      <td className="p-3 border-b border-gray-200 text-center">{row.ethereum}</td>
                      <td className="p-3 border-b border-gray-200 text-center">{row.hyperledger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="bg-white shadow-sm rounded-sm p-6 relative">
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              IMPLEMENTATION ROADMAP
            </span>
          </div>
          
          <div className="mt-6 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[100px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-4">
              {implementationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  custom={index}
                  className="relative pl-[120px]"
                >
                  {/* Quarter indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 text-right">
                    <span className="text-sm font-medium text-gray-700">{item.quarter}</span>
                  </div>
                  
                  {/* Timeline node */}
                  <div className={`absolute left-[97px] top-1/2 -translate-y-1/2 z-10 h-7 w-7 rounded-full flex items-center justify-center ${item.highlight ? 'bg-violet-100' : 'bg-gray-100'} border-2 ${item.highlight ? 'border-violet-400' : 'border-gray-300'}`}>
                    {item.completed ? 
                      <Check className={`h-4 w-4 ${item.highlight ? 'text-violet-600' : 'text-gray-500'}`} /> : 
                      <Clock className={`h-4 w-4 ${item.highlight ? 'text-violet-600' : 'text-gray-500'}`} />
                    }
                  </div>
                  
                  {/* Content */}
                  <div className={`p-4 rounded-sm ${item.highlight ? 'bg-violet-50 border-violet-200' : 'bg-gray-50'} border`}>
                    <h4 className={`font-medium ${item.highlight ? 'text-violet-900' : 'text-gray-900'}`}>{item.milestone}</h4>
                    <p className={`text-sm mt-1 ${item.highlight ? 'text-violet-700' : 'text-gray-600'}`}>{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default ShellTokenArchitecture;