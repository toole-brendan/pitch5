import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { Check, Activity } from 'lucide-react';
import { ModernSectionHeader } from '@/components/modern/ModernSlideStyles';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + (i * 0.1),
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + (i * 0.15),
      duration: 0.4
    }
  })
};

// Define TypeScript interfaces for component props
interface MarketCardProps {
  type: 'TAM' | 'SAM' | 'SOM';
  value: string;
  description: string;
  subtext: string;
}

interface ListItemProps {
  text: string;
}

interface PhaseCardProps {
  number: string;
  title: string;
  features: string[];
}

// Component for market cards
const MarketCard: React.FC<MarketCardProps> = ({ type, value, description, subtext }) => {
  return (
    <div className="border-l-2 border-gray-200 pl-3">
      <div className="flex items-baseline mb-2">
        <div className="text-sm font-medium mr-2 text-gray-600">{type}</div>
        <div className="text-2xl font-medium text-gray-800">{value}</div>
      </div>
      <div className="text-sm text-gray-800 mb-1">{description}</div>
      <div className="text-xs text-gray-500">{subtext}</div>
    </div>
  );
};

// Component for list items
const ListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <span className="text-gray-500 mr-2 mt-1"><Check size={12} /></span>
      <span className="text-gray-600 text-sm">{text}</span>
    </li>
  );
};

// Component for phase cards
const PhaseCard: React.FC<PhaseCardProps> = ({ number, title, features }) => {
  return (
    <div className="bg-white shadow-sm rounded-sm p-4 border border-gray-200">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mr-2">
          <span className="text-gray-700 text-xs font-medium">{number}</span>
        </div>
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
      </div>
      {features.length > 0 && (
        <ul className="space-y-1">
          {features.map((feature: string, index: number) => (
            <li key={index} className="text-xs text-gray-600 flex items-start">
              <span className="text-gray-400 mr-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Market share display component
const MarketShare: React.FC<{
  label: string;
  value: string;
  percentage: number;
  cagr: string;
}> = ({ label, value, percentage, cagr }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline mb-2">
        <div className="text-gray-600 text-sm">{label} ({percentage}%)</div>
        <div className="text-lg font-medium text-gray-800">{value}</div>
      </div>
      <div className="w-full bg-gray-100 rounded-sm h-2 overflow-hidden">
        <div 
          className="bg-gray-600 h-2 rounded-sm" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-500 mt-1 text-right">CAGR: {cagr} (2023-2028)</div>
    </div>
  );
};

const MarketOpportunitySlide: React.FC = () => {
  return (
    <Slide
      title="Market Opportunity"
      subtitle="TAM, SAM, and SOM analysis for blockchain-powered supply chain verification"
      variant="default"
      accent="#333333"
      slideNumber="12 / 18"
    >
      <div className="max-w-5xl mx-auto">
        {/* Market Size Analysis */}
        <motion.div
          variants={fadeIn}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 mb-4">
            <ModernSectionHeader dark className="mb-4">
              MARKET SIZE ANALYSIS
            </ModernSectionHeader>
            
            <div className="grid md:grid-cols-3 gap-5">
              <MarketCard 
                type="TAM"
                value="$120B" 
                description="Total Addressable Market"
                subtext="Global blockchain supply chain market"
              />
              <MarketCard 
                type="SAM"
                value="$32B" 
                description="Serviceable Available Market"
                subtext="U.S. defense & enterprise solutions"
              />
              <MarketCard 
                type="SOM"
                value="$750M" 
                description="Serviceable Obtainable Market"
                subtext="Initial defense & contractor focus"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {/* Defense Market */}
          <motion.div
            variants={fadeIn}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 h-full">
              <ModernSectionHeader className="mb-3">
                DEFENSE MARKET
              </ModernSectionHeader>
              
              <MarketShare
                label="Market Share"
                value="$48B"
                percentage={40}
                cagr="5.0%"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 border-b border-gray-100 pb-1">Target Customers</h3>
                  <ul className="space-y-1">
                    <ListItem text="U.S. Army, Navy, Air Force, Marines units" />
                    <ListItem text="Defense Logistics Agency" />
                    <ListItem text="Military contractors and suppliers" />
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 border-b border-gray-100 pb-1">Market Dynamics</h3>
                  <ul className="space-y-1">
                    <ListItem text="New DOGE 8% budget cut requirements" />
                    <ListItem text="$1.2B+ annual inventory loss pain point" />
                    <ListItem text="Audit compliance mandates by 2028" />
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Commercial Market */}
          <motion.div
            variants={fadeIn}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200 h-full">
              <ModernSectionHeader className="mb-3">
                COMMERCIAL MARKET
              </ModernSectionHeader>
              
              <MarketShare
                label="Market Share"
                value="$72B"
                percentage={60}
                cagr="9.4%"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 border-b border-gray-100 pb-1">Target Industries</h3>
                  <ul className="space-y-1">
                    <ListItem text="Aerospace and automotive manufacturing" />
                    <ListItem text="Pharmaceutical supply chains" />
                    <ListItem text="Electronics and high-value components" />
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 border-b border-gray-100 pb-1">Growth Drivers</h3>
                  <ul className="space-y-1">
                    <ListItem text="60-90 day payment delays in current chains" />
                    <ListItem text="$950B+ annual inventory inaccuracy costs" />
                    <ListItem text="85% still using manual processes" />
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Market Entry Strategy */}
        <motion.div
          variants={fadeIn}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white shadow-sm rounded-sm p-5 border border-gray-200">
            <ModernSectionHeader dark className="mb-4">
              MARKET ENTRY STRATEGY
            </ModernSectionHeader>
            
            <p className="text-sm text-gray-600 mb-4">
              Our initial focus leverages the founder's military expertise to enter Defense logistics, building credibility 
              and security validation as we expand into the higher-growth commercial market.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <PhaseCard 
                number="1"
                title="Defense Pilots" 
                features={[
                  "DoD units with DOGE mandates",
                  "Tier 1 defense contractors"
                ]}
              />
              <PhaseCard 
                number="2"
                title="Defense Scale" 
                features={[
                  "Expand across military branches",
                  "Add unit-level tracking"
                ]}
              />
              <PhaseCard 
                number="3"
                title="Commercial" 
                features={[
                  "Aerospace supply chains",
                  "Pharmaceutical tracking"
                ]}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
};

export default MarketOpportunitySlide;
