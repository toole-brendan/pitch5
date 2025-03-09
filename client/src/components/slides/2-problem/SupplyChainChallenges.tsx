import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { AlertTriangle, Clock, Database, FileWarning, ShieldX, AlertCircle, FileSearch, BookOpen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const sectionVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Citation data structure
const citations = [
  {
    id: 'inventory-loss',
    text: 'Government Accountability Office, "DOD Financial Management: Ongoing Challenges in Implementing the Financial Improvement and Audit Remediation Plan" (GAO-22-105062)'
  },
  {
    id: 'global-impact',
    text: 'IHL Group, "Retail\'s $1.1 Trillion Inventory Distortion Problem" (2022)'
  },
  {
    id: 'payment-delays',
    text: 'McKinsey & Company, "Supply Chain Finance: The emergence of a new competitive landscape" (2023)'
  },
  {
    id: 'manual-processes',
    text: 'Deloitte, "Digital Supply Networks: Transform Your Supply Chain and Create Competitive Advantage" (2022)'
  }
];

const SupplyChainChallenges: React.FC = () => {
  const [citationDialogOpen, setCitationDialogOpen] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);

  const openCitation = (id: string) => {
    setSelectedCitation(id);
    setCitationDialogOpen(true);
  };

  const getCitationText = (id: string) => {
    return citations.find(c => c.id === id)?.text || '';
  };

  // Military challenges
  const militaryChallenges = [
    {
      icon: <FileWarning className="w-6 h-6 text-violet-600" />,
      title: "Paper-Based Accountability",
      description: "Hand receipts and equipment tracking still rely on physical paperwork that is prone to loss, damage, and tampering."
    },
    {
      icon: <ShieldX className="w-6 h-6 text-violet-600" />,
      title: "Verification Gaps",
      description: "Limited ability to verify equipment origin, maintenance history, and transfer of responsibility between units."
    },
    {
      icon: <Database className="w-6 h-6 text-violet-600" />,
      title: "Antiquated Systems",
      description: "Legacy database systems lack interoperability, creating information silos and redundancy across units."
    }
  ];

  // Commercial challenges
  const commercialChallenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-violet-600" />,
      title: "Counterfeiting & Fraud",
      description: "Counterfeit products and unauthorized distribution channels create significant financial and reputational damage."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-violet-600" />,
      title: "Lack of Transparency",
      description: "Limited visibility into supply chain origins and handling, particularly for multi-tier supplier networks."
    },
    {
      icon: <FileSearch className="w-6 h-6 text-violet-600" />,
      title: "Compliance Challenges",
      description: "Difficulty proving regulatory compliance and ethical sourcing across complex global supply chains."
    }
  ];

  return (
    <Slide
      title="Supply Chain Challenges"
      subtitle="Current pain points driving the need for blockchain solutions"
    >      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Military Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="bg-white shadow-sm rounded-sm p-6 relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  MILITARY
                </span>
              </div>
              
              <div className="mt-6">
                <ul className="space-y-6">
                  {militaryChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-base font-medium mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider"></div>

              <div className="flex items-center justify-between">
                <span className="vc-category">
                  ANNUAL INVENTORY LOSS
                </span>
                <div className="flex items-center gap-2">
                  <span className="data-value">
                    $1.2B+
                  </span>
                  <button 
                    className="text-violet-600 hover:text-violet-800 transition-colors"
                    onClick={() => openCitation('inventory-loss')}
                  >
                    <BookOpen size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commercial Challenges Section */}
          <motion.div variants={sectionVariants}>
            <div className="bg-white shadow-sm rounded-sm p-6 relative">
              <div className="absolute -top-3 left-10">
                <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                  COMMERCIAL
                </span>
              </div>
              
              <div className="mt-6">
                <ul className="space-y-6">
                  {commercialChallenges.map((item, index) => (
                    <motion.li 
                      key={index} 
                      custom={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-base font-medium mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="divider"></div>

              <div className="flex items-center justify-between">
                <span className="vc-category">
                  ESTIMATED GLOBAL IMPACT
                </span>
                <div className="flex items-center gap-2">
                  <span className="data-value">
                    $950B+
                  </span>
                  <button 
                    className="text-violet-600 hover:text-violet-800 transition-colors"
                    onClick={() => openCitation('global-impact')}
                  >
                    <BookOpen size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Industry Facts with Citations */}
        <motion.div
          variants={sectionVariants}
          className="mt-8 bg-white shadow-sm rounded-sm p-6 relative"
        >
          <div className="absolute -top-3 left-10">
            <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
              INDUSTRY STATISTICS
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} custom={3} className="flex items-center justify-between p-4 bg-gray-50 rounded-sm">
              <div>
                <h4 className="text-base font-medium text-gray-900">Payment Delays</h4>
                <p className="text-sm text-gray-600">Average payment terms in supply chains</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="data-value text-xl">60-90 days</span>
                <button 
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  onClick={() => openCitation('payment-delays')}
                >
                  <BookOpen size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} custom={4} className="flex items-center justify-between p-4 bg-gray-50 rounded-sm">
              <div>
                <h4 className="text-base font-medium text-gray-900">Manual Processes</h4>
                <p className="text-sm text-gray-600">Businesses still using manual supply chain processes</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="data-value text-xl">85%</span>
                <button 
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  onClick={() => openCitation('manual-processes')}
                >
                  <BookOpen size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Citation Dialog */}
      <Dialog open={citationDialogOpen} onOpenChange={setCitationDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Citation</DialogTitle>
            <DialogDescription>
              Source information for this statistic
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-sm">
            {selectedCitation && getCitationText(selectedCitation)}
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </Slide>
  );
};

export default SupplyChainChallenges;
