import React from 'react';
import Slide from '@/components/core/Slide';
import styles from '@/styles/styleUtils';
import SectionHeader from '@/components/ui/SectionHeader';
import ListItem from '@/components/ui/ListItem';
import MetricDisplay from '@/components/ui/MetricDisplay';
import IconContainer from '@/components/ui/IconContainer';

/**
 * Example slide component demonstrating the refactored styling approach
 * based on the styling guide.
 * 
 * This shows both the before (commented code) and after (active code)
 * to illustrate the changes.
 */
const RefactoredExample: React.FC = () => {
  return (
    <Slide
      title="Refactored Example" 
      subtitle="Demonstrating the application of the styling guide"
      slideNumber="1 / 1"
    >
      {/* Section Title - BEFORE
      <div className="mb-8">
        <span className="text-xs font-medium tracking-widest text-purple-500 uppercase">Market Analysis</span>
      </div>
      */}
      
      {/* Section Title - AFTER */}
      <SectionHeader text="Market Analysis" color="purple" />
      
      {/* Card Grid - BEFORE
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-baseline mb-2">
            <div className="text-sm font-medium mr-2 text-purple-600">TAM</div>
            <div className="text-3xl font-medium text-purple-600">$120B</div>
          </div>
          <div className="text-sm text-gray-800 mb-1">Total Addressable Market</div>
          <div className="text-xs text-gray-500">Global blockchain supply chain market</div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-baseline mb-2">
            <div className="text-sm font-medium mr-2 text-blue-600">SAM</div>
            <div className="text-3xl font-medium text-blue-600">$32B</div>
          </div>
          <div className="text-sm text-gray-800 mb-1">Serviceable Available Market</div>
          <div className="text-xs text-gray-500">U.S. defense & enterprise solutions</div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-baseline mb-2">
            <div className="text-sm font-medium mr-2 text-green-600">SOM</div>
            <div className="text-3xl font-medium text-green-600">$750M</div>
          </div>
          <div className="text-sm text-gray-800 mb-1">Serviceable Obtainable Market</div>
          <div className="text-xs text-gray-500">Initial defense & contractor focus</div>
        </div>
      </div>
      */}
      
      {/* Card Grid - AFTER */}
      <div className={styles.cx(styles.grids.threeCol, styles.spacing.marginBottom.lg)}>
        <MarketCard 
          type="TAM"
          value="$120B" 
          description="Total Addressable Market"
          subtext="Global blockchain supply chain market"
          color="purple"
        />
        
        <MarketCard 
          type="SAM"
          value="$32B" 
          description="Serviceable Available Market"
          subtext="U.S. defense & enterprise solutions"
          color="blue"
        />
        
        <MarketCard 
          type="SOM"
          value="$750M" 
          description="Serviceable Obtainable Market"
          subtext="Initial defense & contractor focus"
          color="green"
        />
      </div>
      
      {/* Two Column Layout - BEFORE
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-blue-500 uppercase">Defense Market</span>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Target Customers</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-sm">—</span>
                <span className="text-gray-600 text-sm">U.S. Army, Navy, Air Force, Marines units</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-sm">—</span>
                <span className="text-gray-600 text-sm">Defense Logistics Agency</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <span className="text-xs font-medium tracking-widest text-green-500 uppercase">Commercial Market</span>
          </div>
          
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Target Industries</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-sm">—</span>
                <span className="text-gray-600 text-sm">Aerospace and automotive manufacturing</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-3 text-sm">—</span>
                <span className="text-gray-600 text-sm">Pharmaceutical supply chains</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      */}
      
      {/* Two Column Layout - AFTER */}
      <div className={styles.cx(styles.grids.twoCol, styles.spacing.marginBottom.lg)}>
        <div>
          <SectionHeader text="Defense Market" color="blue" />
          
          <div className={styles.spacing.marginBottom.md}>
            <h3 className={styles.cx(
              styles.fontSizes.body, 
              styles.fontWeights.medium, 
              styles.textColors.primary, 
              styles.spacing.marginBottom.xs
            )}>
              Target Customers
            </h3>
            <ul className="space-y-2">
              <ListItem text="U.S. Army, Navy, Air Force, Marines units" />
              <ListItem text="Defense Logistics Agency" />
            </ul>
          </div>
        </div>
        
        <div>
          <SectionHeader text="Commercial Market" color="green" />
          
          <div className={styles.spacing.marginBottom.md}>
            <h3 className={styles.cx(
              styles.fontSizes.body, 
              styles.fontWeights.medium, 
              styles.textColors.primary, 
              styles.spacing.marginBottom.xs
            )}>
              Target Industries
            </h3>
            <ul className="space-y-2">
              <ListItem text="Aerospace and automotive manufacturing" />
              <ListItem text="Pharmaceutical supply chains" />
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
};

// Reusable component using the styling system
interface MarketCardProps {
  type: string;
  value: string;
  description: string;
  subtext: string;
  color: 'purple' | 'blue' | 'green';
}

const MarketCard: React.FC<MarketCardProps> = ({ 
  type, 
  value, 
  description, 
  subtext, 
  color 
}) => {
  const textColor = colorMap[color];
  
  return (
    <div className={styles.cardStyles.borderlessWithTopBorder}>
      <div className="flex items-baseline mb-2">
        <div className={styles.cx('text-sm font-medium mr-2', textColor)}>{type}</div>
        <div className={styles.cx(styles.fontSizes.metric, styles.fontWeights.medium, textColor)}>{value}</div>
      </div>
      <div className={styles.cx(styles.fontSizes.bodySmall, 'text-gray-800 mb-1')}>{description}</div>
      <div className={styles.cx(styles.fontSizes.label, styles.textColors.muted)}>{subtext}</div>
    </div>
  );
};

// Color mapping
const colorMap = {
  purple: styles.textColors.purple,
  blue: styles.textColors.blue,
  green: styles.textColors.green,
};

export default RefactoredExample; 