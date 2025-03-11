import React from 'react';

// Component for revenue stream cards
interface RevenueCardProps {
  letter: string;
  title: string;
  description: string;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ letter, title, description }) => {
  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
          <span className="text-purple-600 font-medium">{letter}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

// Component for ROI cards
interface ROICardProps {
  industry: string;
  roi: string;
}

const ROICard: React.FC<ROICardProps> = ({ industry, roi }) => {
  return (
    <div className="border-l-2 border-purple-100 pl-4 py-2">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 font-medium">{industry}</h3>
        <span className="text-xl font-medium text-purple-600">{roi} ROI</span>
      </div>
    </div>
  );
};

// Component for pricing items
interface PricingItemProps {
  text: string;
}

const PricingItem: React.FC<PricingItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <span className="text-gray-300 mr-3 text-sm">—</span>
      <span className="text-gray-600">{text}</span>
    </li>
  );
};

// Component for metric cards
interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => {
  return (
    <div className="bg-gray-50 p-3 rounded">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-medium text-purple-600">{value}</p>
    </div>
  );
};

const BusinessModel: React.FC = () => {
  return (
    <div className="bg-white h-screen p-6 md:p-8 font-sans overflow-y-auto md:overflow-hidden">
      <div className="max-w-5xl mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-1 md:mb-3">Business Model & Pricing Strategy</h1>
          <p className="text-sm md:text-base lg:text-xl text-gray-500 font-light">Multi-stream monetization with market-specific value propositions</p>
        </div>
        
        {/* Revenue Streams Section */}
        <div className="mb-6 md:mb-8 flex-shrink-0">
          <div className="mb-2 md:mb-4">
            <span className="text-xs font-medium tracking-widest text-purple-400 uppercase">Revenue Streams</span>
          </div>
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            <RevenueCard 
              letter="S"
              title="Subscription Licenses" 
              description=""
            />
            <RevenueCard 
              letter="T"
              title="Transaction Fees" 
              description="0.1-0.5% vs traditional 2.5-3.5%"
            />
            <RevenueCard 
              letter="D"
              title="Data Analytics Package" 
              description=""
            />
            <RevenueCard 
              letter="A"
              title="API Access Tiers" 
              description=""
            />
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 flex-grow">
          {/* Market-Specific ROI */}
          <div>
            <div className="mb-2 md:mb-4">
              <span className="text-xs font-medium tracking-widest text-purple-500 uppercase">Market-Specific ROI</span>
            </div>
            <div className="space-y-3 md:space-y-4">
              <ROICard industry="Defense" roi="9.7x" />
              <ROICard industry="Logistics" roi="6.2x" />
              <ROICard industry="Manufacturing" roi="4.5x" />
            </div>
          </div>
          
          {/* Unit Economics */}
          <div>
            <div className="mb-2 md:mb-4">
              <span className="text-xs font-medium tracking-widest text-purple-500 uppercase">Unit Economics</span>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2">Pricing Tiers:</h3>
              <ul className="space-y-2">
                <PricingItem text="Defense: $250K - $1M" />
                <PricingItem text="Commercial: $75K - $150K" />
              </ul>
            </div>
            
            <div className="mt-3 md:mt-4">
              <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 md:mb-3">Key Performance Metrics:</h3>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <MetricCard label="LTV:CAC Ratio" value="10:1" />
                <MetricCard label="Gross Margin" value="80-85%" />
                <MetricCard label="Net Retention" value="120%" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer / Slide Number */}
        <div className="mt-auto text-right text-gray-300 text-xs md:text-sm pb-1">
          <span>11 / 18</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
