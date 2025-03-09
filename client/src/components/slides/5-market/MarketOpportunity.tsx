import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  PieChart, 
  TrendingUp, 
  Target, 
  RefreshCw, 
  BarChart3, 
  Users, 
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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

// Citation data structure
const citations = [
  {
    id: 'tam-blockchain',
    text: 'Global Blockchain in Supply Chain Market 2023-2030, Grand View Research (2023): "The global blockchain in supply chain market size was valued at $93.16 billion in 2022 and is expected to expand at a compound annual growth rate (CAGR) of 45.8% from 2023 to 2030."',
    link: 'https://www.grandviewresearch.com/industry-analysis/blockchain-supply-chain-market'
  },
  {
    id: 'defense-sam',
    text: 'Military Logistics Market Report, Fortune Business Insights (2023): "The global military logistics market is projected to grow from $339.56 billion in 2022 to $476.87 billion by 2029, at a CAGR of 5.0% during the forecast period."',
    link: 'https://www.fortunebusinessinsights.com/military-logistics-market-106362'
  },
  {
    id: 'commercial-sam',
    text: 'Supply Chain Management Market Size, MarketsandMarkets (2023): "The global supply chain management market size is expected to grow from $28.9 billion in 2023 to $45.2 billion by 2028, at a CAGR of 9.4% during the forecast period."',
    link: 'https://www.marketsandmarkets.com/Market-Reports/supply-chain-management-market-190997554.html'
  },
  {
    id: 'som-defense',
    text: 'U.S. Defense Logistics Market, Mordor Intelligence (2023): "The U.S. defense logistics market is expected to register a CAGR of over 2.5% during the forecast period (2023-2028), with a significant portion allocated to modernization initiatives."',
    link: 'https://www.mordorintelligence.com/industry-reports/united-states-defense-logistics-market'
  }
];

const MarketOpportunity: React.FC = () => {
  const [citationDialogOpen, setCitationDialogOpen] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState<string | null>(null);

  const openCitation = (id: string) => {
    setSelectedCitation(id);
    setCitationDialogOpen(true);
  };

  const getCitationInfo = (id: string) => {
    return citations.find(c => c.id === id) || { text: '', link: '' };
  };

  return (
    <Slide
      title="Market Opportunity"
      subtitle="TAM, SAM, and SOM analysis for blockchain-powered supply chain verification"
      fullWidth={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Market Size Analysis */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MARKET SIZE ANALYSIS
              </span>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              {/* TAM */}
              <motion.div
                variants={itemVariants}
                className="p-3 bg-gray-50 rounded-sm border-l-4 border-l-violet-400 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-violet-100 p-1.5 rounded-full">
                    <PieChart className="w-4 h-4 text-violet-600" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">TAM</h3>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-2xl font-bold text-violet-600">$120B</p>
                  <button 
                    className="text-violet-600 hover:text-violet-800 transition-colors"
                    onClick={() => openCitation('tam-blockchain')}
                  >
                    <BookOpen size={14} />
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-1">Total Addressable Market</p>
                <p className="text-xs text-gray-500 leading-tight">
                  Global blockchain supply chain market
                </p>
              </motion.div>
              
              {/* SAM */}
              <motion.div
                variants={itemVariants}
                className="p-3 bg-gray-50 rounded-sm border-l-4 border-l-violet-400 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-violet-100 p-1.5 rounded-full">
                    <TrendingUp className="w-4 h-4 text-violet-600" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">SAM</h3>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-2xl font-bold text-violet-600">$32B</p>
                  <div className="flex space-x-1">
                    <button 
                      className="text-violet-600 hover:text-violet-800 transition-colors"
                      onClick={() => openCitation('defense-sam')}
                    >
                      <BookOpen size={14} />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-1">Serviceable Available Market</p>
                <p className="text-xs text-gray-500 leading-tight">
                  U.S. defense & enterprise solutions
                </p>
              </motion.div>
              
              {/* SOM */}
              <motion.div
                variants={itemVariants}
                className="p-3 bg-gray-50 rounded-sm border-l-4 border-l-violet-400 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-violet-100 p-1.5 rounded-full">
                    <Target className="w-4 h-4 text-violet-600" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">SOM</h3>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-2xl font-bold text-violet-600">$750M</p>
                  <button 
                    className="text-violet-600 hover:text-violet-800 transition-colors"
                    onClick={() => openCitation('som-defense')}
                  >
                    <BookOpen size={14} />
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-1">Serviceable Obtainable Market</p>
                <p className="text-xs text-gray-500 leading-tight">
                  Initial defense & contractor focus
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Defense Market */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                DEFENSE MARKET
              </span>
            </div>
            
            <div className="mt-4 space-y-4">
              <div className="bg-blue-50 p-4 rounded-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-blue-800">Market Share (40%)</span>
                  <span className="font-semibold text-blue-800">$48B</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-500 h-3 rounded-full shadow-inner"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Defense CAGR: <span className="font-semibold text-violet-600">5.0%</span></span>
                  <span>2023-2028</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Target Customers</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-8">
                  <li>• U.S. Army, Navy, Air Force, Marines units</li>
                  <li>• Defense Logistics Agency</li>
                  <li>• Military contractors and suppliers</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <RefreshCw className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Market Dynamics</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-8">
                  <li>• New DOGE 8% budget cut requirements</li>
                  <li>• $1.2B+ annual inventory loss pain point</li>
                  <li>• Audit compliance mandates by 2028</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Commercial Market */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                COMMERCIAL MARKET
              </span>
            </div>
            
            <div className="mt-4 space-y-4">
              <div className="bg-orange-50 p-4 rounded-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-orange-800">Market Share (60%)</span>
                  <span className="font-semibold text-orange-800">$72B</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-orange-500 h-3 rounded-full shadow-inner"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Commercial CAGR: <span className="font-semibold text-violet-600">9.4%</span></span>
                  <span>2023-2028</span>
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Target Industries</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-8">
                  <li>• Aerospace and automotive manufacturing</li>
                  <li>• Pharmaceutical supply chains</li>
                  <li>• Electronics and high-value components</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 className="w-5 h-5 text-violet-600" />
                  <h3 className="text-base font-medium text-gray-900">Growth Drivers</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-8">
                  <li>• 60-90 day payment delays in current chains</li>
                  <li>• $950B+ annual inventory inaccuracy costs</li>
                  <li>• 85% still using manual processes</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Target Segments and Market Entry Strategy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible" 
            className="bg-white shadow-sm rounded-sm p-6 relative"
          >
            <div className="absolute -top-3 left-10">
              <span className="bg-violet-600 text-white text-xs tracking-widest font-mono py-1 px-3 border border-violet-500">
                MARKET ENTRY STRATEGY
              </span>
            </div>
            
            <div className="mt-4 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded-sm border-l-2 border-l-blue-400 shadow-sm">
                  <h4 className="text-sm font-medium text-blue-800 mb-2">Defense Focus</h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>DoD units with DOGE mandates</span>
                    </li>
                    <li className="text-xs text-gray-700 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Tier 1 defense contractors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-3 rounded-sm border-l-2 border-l-orange-400 shadow-sm">
                  <h4 className="text-sm font-medium text-orange-800 mb-2">Commercial Expansion</h4>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-700 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Aerospace supply chains</span>
                    </li>
                    <li className="text-xs text-gray-700 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>Pharmaceutical tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            
              <div>
                <p className="text-sm text-gray-700 mb-4">
                  Our initial focus leverages the founder's military expertise to enter Defense logistics, building credibility and security validation as we expand into the higher-growth commercial market.
                </p>
                
                <div className="flex items-center gap-2 justify-between w-full">
                  <div className="text-center flex-1">
                    <div className="bg-blue-50 border border-blue-200 rounded-sm shadow-sm flex items-center justify-center py-2 mb-1">
                      <span className="text-violet-700 font-medium text-xs">Phase 1</span>
                    </div>
                    <p className="text-xs text-gray-600">Defense Pilots</p>
                  </div>
                  
                  <div className="w-8 h-[2px] bg-violet-300 flex-shrink-0"></div>
                  
                  <div className="text-center flex-1">
                    <div className="bg-violet-50 border border-violet-200 rounded-sm shadow-sm flex items-center justify-center py-2 mb-1">
                      <span className="text-violet-700 font-medium text-xs">Phase 2</span>
                    </div>
                    <p className="text-xs text-gray-600">Defense Scale</p>
                  </div>
                  
                  <div className="w-8 h-[2px] bg-violet-300 flex-shrink-0"></div>
                  
                  <div className="text-center flex-1">
                    <div className="bg-orange-50 border border-orange-200 rounded-sm shadow-sm flex items-center justify-center py-2 mb-1">
                      <span className="text-violet-700 font-medium text-xs">Phase 3</span>
                    </div>
                    <p className="text-xs text-gray-600">Commercial</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Citation Dialog */}
      <Dialog open={citationDialogOpen} onOpenChange={setCitationDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Citation</DialogTitle>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-sm">
            {selectedCitation && getCitationInfo(selectedCitation).text}
          </div>
          {selectedCitation && getCitationInfo(selectedCitation).link && (
            <div className="flex items-center gap-2 text-sm text-violet-600">
              <ExternalLink size={14} />
              <a 
                href={getCitationInfo(selectedCitation).link} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View Source
              </a>
            </div>
          )}
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

export default MarketOpportunity;
