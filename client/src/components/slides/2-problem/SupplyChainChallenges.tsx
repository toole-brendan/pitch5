import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { AlertTriangle, Clock, Database, FileWarning, ShieldX, AlertCircle, FileSearch, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { modernColors, modernTypography, fadeInUpVariants, ModernCard, ModernIconWrapper } from '@/components/modern/ModernSlideStyles';

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
      icon: <FileWarning className="w-5 h-5" />,
      title: "Paper-Based Accountability",
      description: "Hand receipts and equipment tracking rely on physical paperwork prone to loss"
    },
    {
      icon: <ShieldX className="w-5 h-5" />,
      title: "Verification Gaps",
      description: "Limited ability to verify equipment origin and maintenance history"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Antiquated Systems",
      description: "Legacy database systems lack interoperability, creating information silos"
    }
  ];

  // Commercial challenges
  const commercialChallenges = [
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Counterfeiting & Fraud",
      description: "Counterfeit products create significant financial and reputational damage"
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Lack of Transparency",
      description: "Limited visibility into supply chain origins and handling"
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "Compliance Challenges",
      description: "Difficulty proving regulatory compliance across global supply chains"
    }
  ];

  // Modern Challenge Card component
  const ChallengeCard = ({ icon, title, description, index }: any) => (
    <motion.div 
      custom={index}
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-5"
    >
      <ModernIconWrapper>
        {icon}
      </ModernIconWrapper>
      <div>
        <h3 className="text-gray-900 font-light text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-500 font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <Slide
      title="Supply Chain Challenges"
      subtitle="Current pain points driving the need for blockchain solutions"
      variant="twocolumn" // Changed from split to twocolumn for more modern look
    >
      {/* Left Column - Military Challenges */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-8">
          <h3 className={modernTypography.sectionTitle}>Military Sector</h3>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>
        
        <div className="space-y-8">
          {militaryChallenges.map((challenge, index) => (
            <ChallengeCard 
              key={index}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          custom={4}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="pt-6 mt-6 border-t border-gray-50"
        >
          <ModernCard className="p-4">
            <div className="flex items-center justify-between">
              <span className={modernTypography.sectionTitle}>Annual Inventory Loss</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extralight text-gray-900">$1.2B+</span>
                <button 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => openCitation('inventory-loss')}
                >
                  <Info size={14} />
                </button>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </div>

      {/* Right Column - Commercial Challenges */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-8">
          <h3 className={modernTypography.sectionTitle}>Commercial Sector</h3>
          <div className="h-px flex-1 bg-gray-100"></div>
        </div>
        
        <div className="space-y-8">
          {commercialChallenges.map((challenge, index) => (
            <ChallengeCard 
              key={index}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.description}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          custom={4}
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="pt-6 mt-6 border-t border-gray-50"
        >
          <ModernCard className="p-4">
            <div className="flex items-center justify-between">
              <span className={modernTypography.sectionTitle}>Estimated Global Impact</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extralight text-gray-900">$950B+</span>
                <button 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => openCitation('global-impact')}
                >
                  <Info size={14} />
                </button>
              </div>
            </div>
          </ModernCard>
        </motion.div>
      </div>

      {/* Citation Dialog */}
      <Dialog open={citationDialogOpen} onOpenChange={setCitationDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Citation</DialogTitle>
            <DialogDescription>
              Source information for this statistic
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-md text-sm font-light">
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