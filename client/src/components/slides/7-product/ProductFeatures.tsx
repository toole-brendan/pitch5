import React from 'react';
import Slide from '@/components/core/Slide';

// Component for feature cards in the core capabilities section
const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border-t border-gray-100 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

// Component for feature list items
const FeatureListItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start">
      <span className="text-gray-300 mr-3 text-sm">—</span>
      <span className="text-gray-600">{text}</span>
    </li>
  );
};

const ProductFeatures: React.FC = () => {
  const slideContent = (
    <>
      {/* Core Capabilities Section */}
      <div className="mb-16">
        <div className="mb-8">
          <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">Core Capabilities</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Secure Verification" 
            description="Immutable blockchain records with tamper-proof history"
          />
          <FeatureCard 
            title="Mobile-First" 
            description="Simple QR scanning interface with offline capability"
          />
          <FeatureCard 
            title="Smart Automation" 
            description="Trigger payments and workflows based on supply chain events"
          />
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Defense Value */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Defense Value</span>
          </div>
          <ul className="space-y-4">
            <FeatureListItem text="Military-grade security with CMMC 2.0 compliance" />
            <FeatureListItem text="Tactical equipment tracking from warehouse to field deployment" />
            <FeatureListItem text="Eliminates paper-based processes with digital chain of custody" />
          </ul>
        </div>
        
        {/* Commercial Value */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-green-500 uppercase">Commercial Value</span>
          </div>
          <ul className="space-y-4">
            <FeatureListItem text="70% reduction in cash conversion cycle" />
            <FeatureListItem text="Seamless integration with existing enterprise systems" />
            <FeatureListItem text="Immediate settlement using Shell Token payments" />
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <Slide 
      title="Product Features" 
      subtitle="Blockchain-powered supply chain solution for defense and commercial sectors"
      slideNumber="9 / 18"
    >
      {slideContent}
    </Slide>
  );
};

export default ProductFeatures; 