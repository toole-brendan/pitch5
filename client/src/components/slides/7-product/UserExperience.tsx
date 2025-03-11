import React from 'react';

// Component for a workflow step
interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="h-8 w-8 rounded-full border border-indigo-200 flex items-center justify-center text-indigo-500 text-sm">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

// Component for feature list items
interface FeatureListItemProps {
  text: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ text }) => {
  return (
    <li className="flex items-start">
      <span className="text-gray-300 mr-3 text-sm">—</span>
      <span className="text-gray-600">{text}</span>
    </li>
  );
};

// Component for tab buttons
interface TabButtonProps {
  active: boolean;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, label }) => {
  return (
    <button className={`px-4 py-2 text-sm ${active ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}>
      {label}
    </button>
  );
};

// Component for inventory items
interface InventoryItemProps {
  name: string;
  sn: string;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ name, sn }) => {
  return (
    <div className="bg-white bg-opacity-10 rounded p-2 mb-2 flex justify-between items-center">
      <div>
        <div className="text-sm">{name}</div>
        <div className="text-xs opacity-70">SN: {sn}</div>
      </div>
      <div className="h-3 w-3 rounded-full bg-green-400"></div>
    </div>
  );
};

const UserExperience: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-3">User Experience</h1>
          <p className="text-xl text-gray-500 font-light">Intuitive interfaces for defense and commercial applications</p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Workflow Section */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">User Workflow</span>
            </div>
            
            <div className="space-y-8">
              <WorkflowStep 
                number="1" 
                title="Scan" 
                description="User scans QR code with mobile app" 
              />
              <WorkflowStep 
                number="2" 
                title="Verify" 
                description="Blockchain verification confirms authenticity" 
              />
              <WorkflowStep 
                number="3" 
                title="Transfer" 
                description="Securely transfer ownership with digital signatures" 
              />
              <WorkflowStep 
                number="4" 
                title="Record" 
                description="Transaction recorded permanently on blockchain" 
              />
            </div>
          </div>
          
          {/* Mobile Interface Preview */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-medium tracking-widest text-indigo-500 uppercase">Interface Design</span>
            </div>
            <div className="border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="mb-4 border-b border-gray-100 pb-2">
                <div className="flex space-x-2">
                  <TabButton active={true} label="Defense App" />
                  <TabButton active={false} label="Commercial App" />
                </div>
              </div>
              
              <div className="bg-indigo-600 text-white p-4 rounded-lg mb-4">
                <div className="flex justify-between mb-4 items-center">
                  <div>
                    <div className="font-medium">HandReceipt</div>
                    <div className="text-xs opacity-75">DEFENSE</div>
                  </div>
                  <div className="text-xs">v1.0</div>
                </div>
                <div className="uppercase text-xs tracking-wider mb-3 opacity-70">Inventory</div>
                <InventoryItem name="M4 Carbine" sn="935827" />
                <InventoryItem name="NVG-7" sn="5371938" />
                <div className="mt-6">
                  <button className="w-full bg-indigo-700 text-white py-2 rounded-md text-sm">
                    Verify Equipment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* UX Features Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Defense UX */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Defense UX</span>
            </div>
            <ul className="space-y-4">
              <FeatureListItem text="Simplicity First: Designed for field conditions with minimal training" />
              <FeatureListItem text="Offline Mode: Functions without connectivity" />
              <FeatureListItem text="CAC Integration: Secure authentication using military ID cards" />
              <FeatureListItem text="Ruggedized Interface: High contrast and readable in all conditions" />
            </ul>
          </div>
          
          {/* Commercial UX */}
          <div>
            <div className="mb-6">
              <span className="text-xs font-medium tracking-widest text-green-500 uppercase">Commercial UX</span>
            </div>
            <ul className="space-y-4">
              <FeatureListItem text="Payment Dashboard: Real-time visibility of payment status" />
              <FeatureListItem text="Shell Integration: One-click payment processing" />
              <FeatureListItem text="Multi-user Roles: Customizable permissions for team members" />
              <FeatureListItem text="API Connections: Seamless integration with ERP and WMS" />
            </ul>
          </div>
        </div>
        
        {/* Footer / Slide Number */}
        <div className="mt-16 text-right text-gray-300 text-sm">
          <span>10 / 18</span>
        </div>
      </div>
    </div>
  );
};

export default UserExperience; 