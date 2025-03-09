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
  const slideRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  // Handle automatic content scaling
  useEffect(() => {
    const calculateScale = () => {
      if (!contentRef.current || !slideRef.current) return;
      
      // Check if mobile first
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Don't scale on mobile - just let it scroll
      if (mobile) {
        setScale(1);
        return;
      }
      
      // Reset transform to measure true dimensions
      contentRef.current.style.transform = '';
      
      // Get viewport dimensions
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      // Get content dimensions
      const contentHeight = contentRef.current.scrollHeight;
      const contentWidth = contentRef.current.scrollWidth;
      
      // Get header height if it exists
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight + 20 : 0;
      
      // Calculate available space
      const availableHeight = viewportHeight - headerHeight - 40; // 40px for padding
      const availableWidth = slideRef.current.clientWidth - 40; // Subtract padding
      
      // Calculate scales based on both dimensions
      const scaleHeight = availableHeight / contentHeight;
      const scaleWidth = availableWidth / contentWidth;
      
      // Use the smaller scale to ensure everything fits
      const newScale = Math.min(scaleHeight, scaleWidth, 1);
      
      // Set minimum scale to prevent too much shrinking
      setScale(Math.max(newScale, 0.5));
    };
    
    // Initial calculation with a delay to ensure content is rendered
    const timer = setTimeout(calculateScale, 100);
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateScale);
    
    // Setup mutation observer to detect content changes
    const observer = new MutationObserver(() => {
      // Use timeout to batch mutation events and prevent too many recalculations
      setTimeout(calculateScale, 50);
    });
    
    if (contentRef.current) {
      observer.observe(contentRef.current, { 
        childList: true, 
        subtree: true,
        attributes: true,
        characterData: true
      });
    }
    
    // Set up another delayed calculation for dynamic content or images
    const secondTimer = setTimeout(calculateScale, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
      window.removeEventListener('resize', calculateScale);
      observer.disconnect();
    };
  }, [title, subtitle]);
  
  return (
    <div 
      ref={slideRef}
      className={`relative w-full h-screen flex flex-col ${withGridBackground ? 'bg-grid-pattern' : 'bg-white'}`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-transparent pointer-events-none" />
      
      {/* Main content container */}
      <div className="container mx-auto max-w-7xl relative z-10 p-4 md:p-8 h-full 
                      flex flex-col overflow-hidden">
        {/* Header section */}
        {title && (
          <div ref={headerRef} className="slide-header mb-4 md:mb-5 flex-shrink-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-1 md:mb-2">{title}</h2>
            {subtitle && <p className="text-sm md:text-base text-gray-600 max-w-2xl">{subtitle}</p>}
            <div className="h-[1px] w-16 md:w-24 bg-purple-600 mt-2 md:mt-4" />
          </div>
        )}
        
        {/* Scalable content section */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div 
            ref={contentRef}
            className="w-full"
            style={{
              transform: isMobile ? 'none' : `scale(${scale})`,
              transformOrigin: 'center', 
              height: isMobile ? 'auto' : `${100 / scale}%`,
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