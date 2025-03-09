import React, { useState, useEffect, useRef } from 'react';
import { useContentScale } from '@/hooks/use-content-scale';

type SlideProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  withGridBackground?: boolean;
};

const Slide: React.FC<SlideProps> = ({ 
  title, 
  subtitle, 
  children, 
  withGridBackground = false 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use our viewport scaling system
  const { containerRef, containerStyle, scale } = useContentScale();
  
  if (isMobile) {
    // On mobile, we don't scale but allow scrolling
    return (
      <div className={`w-full min-h-screen ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto relative z-10 p-4 pb-10">
          {/* Header section */}
          {title && (
            <div className="slide-header mb-5">
              <h2 className="text-xl font-medium text-gray-900 mb-1">{title}</h2>
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
              <div className="h-[1px] w-16 bg-purple-600 mt-2" />
            </div>
          )}
          
          {/* Content */}
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    );
  }
  
  // On desktop, apply our scaling technique
  return (
    <div className={`w-full h-screen overflow-hidden ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Scaled container */}
      <div ref={containerRef} style={containerStyle}>
        {/* Content container */}
        <div className="p-8 h-full flex flex-col">
          {/* Header section */}
          {title && (
            <div className="slide-header mb-6">
              <h2 className="text-3xl font-medium text-gray-900 mb-2">{title}</h2>
              {subtitle && <p className="text-base text-gray-600 max-w-3xl">{subtitle}</p>}
              <div className="h-[1px] w-24 bg-purple-600 mt-4" />
            </div>
          )}
          
          {/* Main content */}
          <div className="flex-1 overflow-visible">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;