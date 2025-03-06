'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

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

const timelineMilestones = [
  { date: 'Q3 2023', title: 'Initial Concept Development' },
  { date: 'Q4 2023', title: 'Frontend Architecture Complete' },
  { date: 'Q1 2024', title: 'Backend Systems Development' },
  { date: 'Present', title: 'Blockchain Integration In Progress', current: true }
];

const DevelopmentProgress: React.FC = () => {
  return (
    <Slide title="Development Progress">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Development Milestones */}
          <div className="md:col-span-6">
            <motion.div variants={itemVariants}>
              <div className="bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">&gt;</span>
                  DEVELOPMENT MILESTONES_
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-sm font-sans text-gray-600">Frontend Development: 100% Complete</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-blue-500 rounded-full border-t-transparent animate-spin" />
                    <p className="text-sm font-sans text-gray-600">Backend Systems: 85% Complete</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-blue-500 rounded-full border-t-transparent animate-spin" />
                    <p className="text-sm font-sans text-gray-600">Blockchain Integration: 70% Complete</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Technical Validation */}
          <div className="md:col-span-6">
            <motion.div variants={itemVariants}>
              <div className="bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">&gt;</span>
                  TECHNICAL VALIDATION_
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="text-sm font-semibold text-gray-900">Proof-of-Concept Completed</h4>
                    </div>
                    <p className="text-xs text-gray-600 pl-8">
                      Successfully tested core blockchain tracking functionality with simulated supply chain data
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="text-sm font-semibold text-gray-900">Architecture Review</h4>
                    </div>
                    <p className="text-xs text-gray-600 pl-8">
                      System design validated by third-party security consultants
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Development Timeline */}
          <div className="md:col-span-12">
            <motion.div variants={itemVariants}>
              <div className="bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-600">&gt;</span>
                  DEVELOPMENT TIMELINE_
                </h3>
                
                <div className="relative mt-8">
                  {timelineMilestones.map((milestone, index) => (
                    <div key={index} className="flex mb-8 last:mb-0">
                      <div className="w-32 flex-shrink-0 text-right pr-8">
                        <span className={cn(
                          "text-xs font-mono",
                          milestone.current ? "text-blue-600 font-bold" : "text-gray-500"
                        )}>
                          {milestone.date}
                        </span>
                      </div>
                      
                      <div className="relative flex items-center">
                        <div className={cn(
                          "w-3 h-3 rounded-full z-10",
                          milestone.current ? "bg-blue-600" : "bg-gray-400"
                        )} />
                        
                        {index < timelineMilestones.length - 1 && (
                          <div className="absolute top-1/2 left-1.5 w-px h-20 -translate-y-1/2 bg-gray-200" />
                        )}
                      </div>
                      
                      <div className="flex-1 pl-6">
                        <p className={cn(
                          "text-sm font-sans",
                          milestone.current ? "text-gray-900 font-semibold" : "text-gray-600"
                        )}>
                          {milestone.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default DevelopmentProgress;
