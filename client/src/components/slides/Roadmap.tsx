'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { CheckCircle, School, Users, TrendingUp, Rocket } from 'lucide-react';

// Motion variants from style guide
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const milestones = [
  {
    title: "Seed Round & MVP Build (Q2 2025)",
    description: "Close $2.2M seed round and finalize the core product MVP for initial deployments",
    icon: <CheckCircle className="w-5 h-5" />,
    objectives: [
      "Complete $2.2M seed funding with strategic investors",
      "Finalize core computer vision technology for pilot deployments",
      "Establish initial defense sector partnerships (2-3 pilots)",
      "Build core engineering team (7-9 engineers)"
    ],
    metrics: {
      team: "10-12 team members",
      arr: "$0",
      burn: "$95-110K monthly",
      runway: "24+ months"
    }
  },
  {
    title: "Commercial Validation (Q3-Q4 2025)",
    description: "Launch pilot programs with defense and commercial customers to validate the technology",
    icon: <School className="w-5 h-5" />,
    objectives: [
      "Deploy to 2-3 defense sector customers",
      "Launch 2 commercial pilot programs",
      "Initial case studies and ROI documentation",
      "Complete security compliance and certification process"
    ],
    metrics: {
      team: "14-16 team members",
      arr: "$175K",
      burn: "$110-130K monthly",
      runway: "16-18 months"
    }
  },
  {
    title: "Market Expansion (Q1-Q2 2026)",
    description: "Convert pilot customers to paying contracts and expand market presence",
    icon: <Users className="w-5 h-5" />,
    objectives: [
      "Establish sales team for both defense and commercial sectors",
      "Convert 75% of pilot customers to paying contracts",
      "Expand to 5-8 total customers",
      "Develop strategic partnerships for market expansion"
    ],
    metrics: {
      team: "18-20 team members",
      arr: "$1.2M",
      burn: "$130-160K monthly",
      runway: "10-12 months"
    }
  }
];

const Roadmap: React.FC = () => {
  return (
    <Slide title="Seed to Series A Roadmap">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="h-full flex flex-col overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-hidden">
          {/* Main Roadmap Timeline */}
          <motion.div variants={itemVariants} className="h-full flex flex-col">
            <div className="bg-white border border-gray-200 p-6 flex flex-col relative shadow-lg h-full">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 before:content-['//']">
                EXECUTION PLAN_
              </h3>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-8 before:bottom-0 before:w-[2px] before:bg-gray-100 last:before:hidden">
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-base font-mono text-gray-900">{milestone.title}</h4>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                      
                      <div className="bg-gray-50 p-4 rounded border border-gray-200">
                        <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-2">Objectives:</span>
                        <ul className="space-y-2">
                          {milestone.objectives.map((objective, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-blue-400 mt-2 flex-shrink-0" />
                              <p className="text-sm text-gray-600">{objective}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(milestone.metrics).map(([key, value], i) => (
                          <div key={i} className="bg-white p-3 border border-gray-200 rounded">
                            <span className="block text-xs font-mono uppercase tracking-wider text-gray-600 mb-1">
                              {key === 'team' ? 'Team Size' : 
                               key === 'arr' ? 'ARR' : 
                               key === 'burn' ? 'Monthly Burn' : 'Runway'}
                            </span>
                            <span className="text-sm font-semibold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Success Criteria and Use of Funds */}
          <motion.div variants={itemVariants} className="h-full flex flex-col space-y-6">
            {/* Success Criteria */}
            <div className="bg-white border border-gray-200 p-6 shadow-lg">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 before:content-['//']">
                SERIES A SUCCESS CRITERIA_
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-blue-200 bg-blue-50 rounded">
                  <span className="block text-2xl font-mono text-blue-600 mb-1">$4M+</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    Annual Recurring Revenue
                  </span>
                </div>
                
                <div className="p-4 border border-orange-200 bg-orange-50 rounded">
                  <span className="block text-2xl font-mono text-orange-600 mb-1">15-20</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    Enterprise Customers
                  </span>
                </div>
                
                <div className="p-4 border border-green-200 bg-green-50 rounded">
                  <span className="block text-2xl font-mono text-green-600 mb-1">80%+</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    Gross Margin
                  </span>
                </div>
                
                <div className="p-4 border border-purple-200 bg-purple-50 rounded">
                  <span className="block text-2xl font-mono text-purple-600 mb-1">125%+</span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-600">
                    YoY Growth Rate
                  </span>
                </div>
              </div>
            </div>
            
            {/* Use of Funds */}
            <div className="bg-white border border-gray-200 p-6 shadow-lg flex-grow">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-gray-900 mb-6 before:content-['//']">
                SERIES A USE OF FUNDS_
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "Engineering & Product", percentage: 45, color: "blue" },
                  { name: "Sales & Marketing", percentage: 35, color: "orange" },
                  { name: "International Expansion", percentage: 15, color: "green" },
                  { name: "Operations & G&A", percentage: 5, color: "purple" }
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-mono text-gray-600">{item.name}</span>
                      <span className="text-sm font-mono text-gray-900">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-${item.color}-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Slide>
  );
};

export default Roadmap;
