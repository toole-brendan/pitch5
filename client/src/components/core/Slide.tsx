import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SlideContent from './SlideContent';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
};

const Slide: React.FC<SlideProps> = ({ title, subtitle, children, withGridBackground = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`
      w-full p-6 md:p-12 
      ${withGridBackground ? 'bg-grid-pattern' : ''} 
      ${isMobile ? 'min-h-screen' : 'h-screen overflow-hidden'}
      bg-white
    `}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      <div className={`container mx-auto max-w-7xl ${isMobile ? '' : 'h-full flex flex-col'}`}>
        {/* Title area - fixed size */}
        {title && (
          <div className={`${isMobile ? 'mb-6' : 'mb-4'}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-24 bg-purple-600 mt-4" />
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
  );
};

export default Slide;