import { useState, useRef, useLayoutEffect } from 'react';
import { useIsMobile } from './use-mobile';

/**
 * A hook that handles dynamic content scaling for slides on desktop
 * On desktop: Automatically scales content to fit in viewport without scrolling
 * On mobile: Does nothing (mobile devices should allow scrolling)
 */
export function useSlideScaling() {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Use layout effect to calculate scale before browser paint to avoid flicker
  useLayoutEffect(() => {
    if (isMobile) return; // Don't scale on mobile
    
    const calculateScale = () => {
      const content = contentRef.current;
      if (!content) return;
      
      // Reset transform to get accurate measurement
      content.style.transform = 'none';
      
      // Calculate available height (viewport minus header/padding)
      // We're using a more generous padding to ensure content fits
      const availableHeight = window.innerHeight - 180;
      
      // Get natural content height
      const naturalHeight = content.scrollHeight;
      setContentHeight(naturalHeight);
      
      // Calculate scale - never scale up, only down
      if (naturalHeight > availableHeight) {
        // Scale content to fit available height, with a small safety margin
        const newScale = (availableHeight / naturalHeight) * 0.95;
        setScale(newScale);
      } else {
        // Content fits naturally, no scaling needed
        setScale(1);
      }
    };
    
    // Slight delay to ensure content is fully rendered before measuring
    const timer = setTimeout(() => {
      calculateScale();
    }, 50);
    
    // Handle window resize
    const handleResize = () => {
      clearTimeout(timer);
      setTimeout(calculateScale, 50);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  return { 
    contentRef, 
    scale,
    contentHeight,
    isMobile
  };
}