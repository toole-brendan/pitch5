import React from 'react';
import Slide from '@/components/core/Slide';

// Component for cost category items
const CostCard = ({ title, amount }: { title: string; amount: string }) => {
  return (
    <div className="border-t border-gray-100 pt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-purple-700 font-medium">{amount}</p>
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

// Component for runway scenario
const RunwayScenario = ({ name, months, progressWidth, progressColor }: { name: string, months: string, progressWidth: string, progressColor: string }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-600">{name}</span>
        <span className="text-purple-700 font-medium">{months}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded relative">
        <div className={`absolute h-full ${progressWidth} ${progressColor} rounded`}></div>
      </div>
    </div>
  );
};

const OperationalCosts: React.FC = () => {
  const slideContent = (
    <>
      {/* Monthly Operating Costs */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-xs font-medium tracking-widest text-purple-500 uppercase">Monthly Operating Costs</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CostCard 
            title="Infrastructure" 
            amount="$1,200-1,800/mo"
          />
          <CostCard 
            title="Development" 
            amount="$9,000-12,000/mo"
          />
          <CostCard 
            title="Operations" 
            amount="$4,800-7,700/mo"
          />
        </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Burn Rate & Runway */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Burn Rate & Runway</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Total Monthly Burn</span>
              <span className="text-purple-700 font-medium">$15,000-21,500</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Seed Funding</span>
              <span className="text-purple-700 font-medium">$750,000</span>
            </div>
          </div>
          
          <RunwayScenario 
            name="Best Case"
            months="15 months"
            progressWidth="w-4/5"
            progressColor="bg-green-500"
          />
          <RunwayScenario 
            name="Expected Case"
            months="12 months"
            progressWidth="w-2/3"
            progressColor="bg-blue-500"
          />
          <RunwayScenario 
            name="Conservative Case"
            months="10 months"
            progressWidth="w-1/2"
            progressColor="bg-yellow-500"
          />
        </div>
        
        {/* Capital Efficiency */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-green-500 uppercase">Capital Efficiency</span>
          </div>
          <ul className="space-y-4">
            <FeatureListItem text="Technical founder leading development (55% of budget to product)" />
            <FeatureListItem text="Scalable cloud infrastructure with costs that grow with usage" />
            <FeatureListItem text="Targeted customer acquisition from military and finance networks" />
            <FeatureListItem text="Founder investment of time and capital in initial development" />
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <Slide 
      title="Operational Costs" 
      subtitle="Blockchain infrastructure and development expenses with 12-month runway"
      slideNumber="8 / 18"
    >
      {slideContent}
    </Slide>
  );
};

export default OperationalCosts;