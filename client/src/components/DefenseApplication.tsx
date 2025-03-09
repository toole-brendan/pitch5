'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";
import { Shield, FileText, Lock } from 'lucide-react';

// Motion variants
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

const cardVariants = {
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

const MotionDiv = motion.div;

const DefenseApplication: React.FC = () => {
  return (
    <Slide title="Defense Application">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full"
      >
        <div className="flex items-center gap-1 mb-8">
          <span className="bg-blue-50 text-blue-800 px-6 py-2.5 font-mono font-medium text-base border border-blue-200">
            MILITARY
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[calc(100%-48px)]">
          {/* Left Column: Key Features */}
          <div className="md:col-span-5">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-700 mb-6">
              KEY CAPABILITIES_
            </h2>
            
            <div className="grid gap-6 h-[calc(100%-40px)]">
              {[
                { 
                  num: 1, 
                  title: "Digital Hand Receipts", 
                  description: "Replace paper forms with blockchain-backed digital records",
                  icon: <FileText className="w-5 h-5 text-blue-700" />,
                  points: [
                    "Eliminate lost paperwork, reducing property loss by 80%",
                    "Tamper-proof signatures authenticated through DoD credentials"
                  ]
                },
                { 
                  num: 2, 
                  title: "Inventory Accountability", 
                  description: "Complete audit trail with immutable record-keeping",
                  icon: <Shield className="w-5 h-5 text-blue-700" />,
                  points: [
                    "Real-time property status visibility across command levels",
                    "Reduce inventory time by 75% with QR code scanning"
                  ]
                },
                { 
                  num: 3, 
                  title: "Security & Compliance", 
                  description: "Military-grade security standards with full compliance",
                  icon: <Lock className="w-5 h-5 text-blue-700" />,
                  points: [
                    "FedRAMP, IL4 & IL5 compliant platform",
                    "End-to-end encryption with zero-knowledge proofs"
                  ]
                }
              ].map((item, index) => (
                <MotionDiv
                  key={item.num}
                  variants={cardVariants}
                  custom={index + 1}
                >
                  <div className="bg-white border border-blue-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 text-blue-700 border border-blue-200 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-base font-semibold tracking-wide text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span className="text-xs font-mono text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          {/* Right Column: Field Applications */}
          <div className="md:col-span-7">
            <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-700 mb-6">
              FIELD APPLICATIONS_
            </h2>
            
            {[
              {
                title: 'FORWARD DEPLOYMENT INVENTORY MANAGEMENT',
                description: 'Streamlines equipment tracking for units in combat zones with limited connectivity through:',
                points: [
                  'Offline-capable mobile app with sync mechanism',
                  'Secure transfer of responsibility during relief-in-place',
                  'Reduced equipment loss rate by 87% in field tests'
                ]
              },
              {
                title: 'READINESS REPORTING & ACCOUNTABILITY',
                description: 'Enhances unit readiness with automated status reporting:',
                points: [
                  'Real-time equipment status tracking across all echelons',
                  'Automated GCSS-Army integration for maintenance data',
                  '92% reduction in administrative overhead for readiness reporting'
                ]
              },
              {
                title: 'SUPPLY CHAIN SECURITY',
                description: 'Ensures equipment authenticity and origin verification:',
                points: [
                  'Cryptographic verification of equipment provenance',
                  'Counterfeit detection for critical parts and components',
                  'Tamper-evident supply chain with audit capabilities'
                ]
              }
            ].map((section, index) => (
              <MotionDiv
                key={section.title}
                variants={cardVariants}
                custom={index + 4}
                className="mb-6 last:mb-0"
              >
                <div className="bg-blue-50 border border-blue-200 p-6 border-l-4 border-l-blue-600">
                  <h3 className="font-mono font-semibold text-blue-700 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold">&gt;</span>
                        <span className="text-xs font-mono text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
    </Slide>
  );
};

export default DefenseApplication;
