import { useEffect, useState, useRef, useLayoutEffect } from 'react';
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
  
  // Use layoutEffect to calculate scale before browser paint
  // This helps prevent flickering and ensures content is properly scaled immediately
  useLayoutEffect(() => {
    if (isMobile || !contentRef.current) return;
    
    const calculateScale = () => {
      const content = contentRef.current;
      if (!content) return;
      
      // Reset any existing transform to get accurate measurements
      content.style.transform = 'none';
      
      // Get the actual viewport height minus some padding for header/margins
      const viewportHeight = window.innerHeight - 120;
      
      // Get the content's natural height
      const contentHeight = content.scrollHeight;
      
      // Calculate the scale needed to fit content in the viewport
      // Use a more aggressive scale factor to ensure it fits
      if (contentHeight > viewportHeight) {
        const newScale = Math.min(0.95, viewportHeight / contentHeight);
        setScale(newScale);
      } else {
        setScale(1);
      }
    };
    
    // Calculate scale immediately
    calculateScale();
    
    // Recalculate on window resize
    const handleResize = () => {
      requestAnimationFrame(calculateScale);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Set up a mutation observer to detect content changes
    const observer = new MutationObserver(() => {
      requestAnimationFrame(calculateScale);
    });
    
    observer.observe(contentRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isMobile]);
  
  return { contentRef, scale };
}