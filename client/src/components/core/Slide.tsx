import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SlideContent from './SlideContent';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
  fullWidth?: boolean;
};

const Slide: React.FC<SlideProps> = ({ title, subtitle, children, withGridBackground = false, fullWidth = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`
      w-full 
      ${withGridBackground ? 'bg-grid-pattern' : 'bg-gray-100'} 
      ${isMobile ? 'min-h-screen' : 'h-screen overflow-hidden'}
    `}>
      <div className={`${!fullWidth ? 'container mx-auto max-w-7xl' : 'px-6'} ${isMobile ? '' : 'h-full flex flex-col'}`}>
        {/* Content area with VC styling */}
        <div className={`vc-slide-container ${isMobile ? '' : 'flex-1'}`}>
          {/* Title area */}
          {title && (
            <div className="mb-6">
              <h2 className="vc-slide-header">{title}</h2>
              {subtitle && <p className="vc-slide-subheader">{subtitle}</p>}
              {!subtitle && <div className="vc-horizontal-divider mt-4 mb-8" />}
            </div>
          )}
          
          {/* Content area - flexible and scaled */}
          <div className={`${isMobile ? '' : 'flex-1'}`}>
            <SlideContent>
              {children}
            </SlideContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
