import React from 'react';
import SlideContent from './SlideContent';
import { useIsMobile } from '@/hooks/use-mobile';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
  /**
   * Whether to disable auto-scaling on desktop
   */
  disableScaling?: boolean;
};

const Slide: React.FC<SlideProps> = ({ 
  title, 
  subtitle, 
  children, 
  withGridBackground = false,
  disableScaling = false
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`relative min-h-screen w-full p-6 md:p-12 ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'} ${!isMobile ? 'flex flex-col' : ''}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Main content */}
      <div className={`container mx-auto max-w-7xl relative z-10 ${!isMobile ? 'flex-1 flex flex-col' : ''}`}>
        {title && (
          <div className={`${!isMobile ? 'flex-shrink-0' : 'mb-8'}`}>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-24 bg-purple-600 mt-4" />
          </div>
        )}
        
        {/* Use SlideContent for scalable slide content */}
        <SlideContent 
          disableScaling={disableScaling} 
          className={`${title ? 'mt-8' : ''} ${!isMobile ? 'flex-1' : ''}`}
        >
          {children}
        </SlideContent>
      </div>
    </div>
  );
};

export default Slide;