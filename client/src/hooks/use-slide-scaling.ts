import { useEffect, useState, useRef } from 'react';
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
  
  useEffect(() => {
    if (isMobile || !contentRef.current) return;
    
    const handleResize = () => {
      const content = contentRef.current;
      if (!content) return;
      
      // Reset scale to measure true size
      content.style.transform = 'scale(1)';
      
      const viewportHeight = window.innerHeight - 100; // Allow for some padding
      const contentHeight = content.scrollHeight;
      
      if (contentHeight > viewportHeight) {
        const newScale = viewportHeight / contentHeight;
        setScale(newScale);
        content.style.transform = `scale(${newScale})`;
      } else {
        setScale(1);
        content.style.transform = 'scale(1)';
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  return { contentRef, scale };
}