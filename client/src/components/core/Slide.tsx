import React, { useState, useEffect, useRef } from 'react';

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  // Handle automatic content scaling
  useEffect(() => {
    const calculateScale = () => {
      if (!contentRef.current) return;
      
      // Check if mobile first
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Don't scale on mobile - just let it scroll
      if (mobile) {
        setScale(1);
        return;
      }
      
      // Reset transform to measure true height
      contentRef.current.style.transform = '';
      
      // Get natural content dimensions
      const contentHeight = contentRef.current.scrollHeight;
      
      // Available space calculation
      const headerHeight = title ? (subtitle ? 100 : 70) : 0;
      const availableHeight = window.innerHeight - headerHeight - 40; // Account for padding
      
      // Calculate required scale to fit
      if (contentHeight > availableHeight) {
        const newScale = Math.max(0.65, availableHeight / contentHeight);
        setScale(newScale);
      } else {
        setScale(1); // No scaling needed if content fits
      }
    };
    
    // Initial calculation after a small delay to ensure content is rendered
    const timer = setTimeout(calculateScale, 50);
    
    // Set up resize handler
    window.addEventListener('resize', calculateScale);
    
    // Setup mutation observer to detect content changes
    const observer = new MutationObserver(calculateScale);
    
    if (contentRef.current) {
      observer.observe(contentRef.current, { 
        childList: true, 
        subtree: true,
        attributes: true,
        characterData: true
      });
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateScale);
      observer.disconnect();
    };
  }, [title, subtitle]);
  
  return (
    <div className={`relative w-full h-screen flex flex-col ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Main content container */}
      <div className="container mx-auto max-w-7xl relative z-10 p-4 md:p-8 h-full 
                      flex flex-col overflow-hidden">
        {/* Header section */}
        {title && (
          <div className="slide-header mb-4 md:mb-5 flex-shrink-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-1 md:mb-2">{title}</h2>
            {subtitle && <p className="text-sm md:text-base text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-16 md:w-24 bg-purple-600 mt-2 md:mt-4" />
          </div>
        )}
        
        {/* Scalable content section */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div 
            ref={contentRef}
            className="w-full origin-top md:origin-center"
            style={{
              transform: isMobile ? 'none' : `scale(${scale})`,
              transformOrigin: 'top center',
              maxHeight: isMobile ? 'none' : `${100 / scale}%`,
              overflowY: isMobile ? 'auto' : 'visible'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;