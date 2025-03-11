import React from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/core/Slide';
import { 
  ExternalLink, 
  MessageSquare, 
  Building2, 
  Shield, 
  TrendingUp, 
  Coins,
  Calendar,
  Check,
  ArrowRight,
  Zap,
  Lock,
  Network,
  Database,
  CircuitBoard,
  Layers
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5 
    }
  })
};

// Component for competitor bubble in positioning chart
interface CompetitorBubbleProps {
  name: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const CompetitorBubble: React.FC<CompetitorBubbleProps> = ({ name, x, y, size, color }) => {
  // Map color names to Tailwind colors
  const colorMap: Record<string, string> = {
    'indigo': 'bg-indigo-500 text-white',
    'blue': 'bg-blue-500 text-white',
    'red': 'bg-red-400 text-white',
    'green': 'bg-green-500 text-white',
    'yellow': 'bg-yellow-400 text-gray-800',
    'purple': 'bg-purple-500 text-white',
  };
  
  const bubbleStyle = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}%`,
    height: `${size}%`,
    transform: 'translate(-50%, -50%)',
  };
  
  return (
    <div 
      className={`absolute rounded-full flex items-center justify-center text-xs font-medium ${colorMap[color]} shadow-sm`}
      style={bubbleStyle}
    >
      {name}
    </div>
  );
};

// Component for advantage items
interface AdvantageItemProps {
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ title, description }) => {
  return (
    <li className="flex items-start">
      <span className="text-green-500 mt-1 mr-3">✓</span>
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
};

// Component for competitor cards
interface CompetitorCardProps {
  name: string;
  limitation: string;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ name, limitation }) => {
  return (
    <div className="border-t border-gray-100 pt-4">
      <h3 className="text-sm font-medium text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-500">{limitation}</p>
    </div>
  );
};

// Component for comparison table rows
interface ComparisonRowProps {
  feature: string;
  values: string[];
}

const ComparisonRow: React.FC<ComparisonRowProps> = ({ feature, values }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">{values[0]}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{values[1]}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{values[2]}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{values[3]}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{values[4]}</td>
    </tr>
  );
};

const CompetitiveLandscape: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-3">Competitive Landscape</h1>
          <p className="text-xl text-gray-500 font-light">Analysis against enterprise ERP systems and blockchain solutions</p>
        </div>
        
        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Market Positioning Chart */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Market Positioning</span>
            </div>
            <div className="relative border border-gray-100 rounded-lg aspect-square flex items-center justify-center p-2">
              {/* X and Y Axis Labels */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 transform rotate-90 text-xs text-gray-400">
                Defense Compliance
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-xs text-gray-400">
                Blockchain Capability
              </div>
              
              {/* Quadrant Labels */}
              <div className="absolute top-6 left-6 text-xs text-gray-300">Traditional ERP Systems</div>
              <div className="absolute top-6 right-6 text-xs text-gray-300">Blockchain Platforms</div>
              <div className="absolute bottom-6 left-6 text-xs text-gray-300">Defense Solutions</div>
              <div className="absolute bottom-6 right-6 text-xs text-gray-300">Integrated Solutions</div>
              
              {/* Chart Grid Lines */}
              <div className="absolute inset-0 border-b border-gray-100"></div>
              <div className="absolute inset-0 border-r border-gray-100"></div>
              
              {/* Positioning Bubbles */}
              <CompetitorBubble name="HandReceipt" x={75} y={25} size={14} color="indigo" />
              <CompetitorBubble name="SAP Ariba" x={35} y={45} size={10} color="blue" />
              <CompetitorBubble name="Oracle SCM" x={45} y={65} size={10} color="red" />
              <CompetitorBubble name="MS Dynamics" x={30} y={35} size={9} color="green" />
              <CompetitorBubble name="NetSuite" x={70} y={65} size={9} color="yellow" />
              <CompetitorBubble name="IBM Blockchain" x={65} y={30} size={9} color="purple" />
            </div>
          </div>
          
          {/* Our Advantages */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Our Advantages</span>
            </div>
            <ul className="space-y-6">
              <AdvantageItem 
                title="Military-Grade Security" 
                description="Defense-level encryption and access controls brought to commercial applications" 
              />
              <AdvantageItem 
                title="Built-in Oracle System" 
                description="Direct integration between physical supply chain events and blockchain validation" 
              />
              <AdvantageItem 
                title="Shell Token Settlement" 
                description="Immediate payment settlement eliminating 60-90 day delays in traditional supply chains" 
              />
              <AdvantageItem 
                title="Cross-Domain Support" 
                description="Seamless operation across both defense and commercial environments" 
              />
            </ul>
          </div>
        </div>
        
        {/* Competitor Limitations Section */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">Competitor Limitations</span>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <CompetitorCard 
              name="SAP Ariba" 
              limitation="Average $2M+ implementation cost" 
            />
            <CompetitorCard 
              name="Oracle SCM" 
              limitation="High cost of ownership, limited blockchain integration" 
            />
            <CompetitorCard 
              name="MS Dynamics" 
              limitation="Limited supply chain verification features" 
            />
            <CompetitorCard 
              name="NetSuite SCM" 
              limitation="Limited military/defense capabilities" 
            />
          </div>
        </div>
        
        {/* ERP Comparison Table */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">ERP Systems Comparison</span>
          </div>
          <div className="overflow-hidden border border-gray-100 rounded-lg">
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider">HandReceipt</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SAP Ariba</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oracle SCM</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MS Dynamics</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NetSuite</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                <ComparisonRow 
                  feature="Implementation Cost" 
                  values={['$200K-$50K', '$2M+', '$1.5M+', '$750K+', '$500K+']} 
                />
                <ComparisonRow 
                  feature="Implementation Time" 
                  values={['3-6 months', '12-18 months', '12-24 months', '6-12 months', '6-10 months']} 
                />
                <ComparisonRow 
                  feature="Blockchain Security" 
                  values={['Native', 'Limited', 'Third-party', 'None', 'None']} 
                />
                <ComparisonRow 
                  feature="Payment Settlement" 
                  values={['Immediate', 'Traditional', 'Traditional', 'Traditional', 'Traditional']} 
                />
                <ComparisonRow 
                  feature="Defense Compatibility" 
                  values={['Native', 'Moderate', 'Moderate', 'Limited', 'Limited']} 
                />
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Footer / Slide Number */}
        <div className="mt-16 text-right text-gray-300 text-sm">
          <span>7 / 18</span>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveLandscape;
