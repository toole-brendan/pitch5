import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from './use-mobile';

type Size = {
  width: number;
  height: number;
};

type ScalingOptions = {
  minScale?: number;
  maxScale?: number;
  mode?: 'fit' | 'fill' | 'stretch' | 'none';
};

/**
 * A hook that handles dynamic content scaling for slides on desktop
 * On desktop: Automatically scales content to fit in viewport without scrolling
 * On mobile: Does nothing (mobile devices should allow scrolling)
 */
export function useSlideScaling(options: ScalingOptions = {}) {
  const {
    minScale = 0.35, // Lowered minScale to allow more aggressive scaling
    maxScale = 1.0, 
    mode = 'fit'
  } = options;
  
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentSize, setContentSize] = useState<Size | null>(null);
  const [containerSize, setContainerSize] = useState<Size | null>(null);

  useEffect(() => {
    if (isMobile || !contentRef.current || mode === 'none') {
      setScale(1);
      return;
    }

    const calculateScale = () => {
      const content = contentRef.current;
      if (!content) return;

      // Get the parent container dimensions
      const container = content.parentElement;
      if (!container) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Store for potential use in positioning calculations
      setContainerSize({
        width: containerWidth,
        height: containerHeight
      });

      // Reset any previous transformations to get true content size
      content.style.transform = 'none';
      
      // Get content dimensions
      const contentWidth = content.scrollWidth;
      const contentHeight = content.scrollHeight;
      
      // Store for potential use in positioning calculations
      setContentSize({
        width: contentWidth,
        height: contentHeight
      });

      // Calculate scales for width and height separately
      const scaleX = containerWidth / contentWidth;
      const scaleY = containerHeight / contentHeight;
      
      // Determine the final scale based on the mode
      let newScale = 1;
      
      switch (mode) {
        case 'fit':
          // Use the smaller scale to ensure content fits completely
          newScale = Math.min(scaleX, scaleY);
          break;
        case 'fill':
          // Use the larger scale to fill the container
          newScale = Math.max(scaleX, scaleY);
          break;
        case 'stretch':
          // Apply different scales to x and y axes (not implemented in the component)
          // This would require separate scaleX and scaleY state variables
          newScale = scaleX; // Default to scaleX for simplicity
          break;
        default:
          newScale = 1;
      }
      
      // Apply min/max constraints
      newScale = Math.max(minScale, Math.min(newScale, maxScale));
      
      setScale(newScale);
    };

    // Calculate on mount and when window resizes
    calculateScale();
    
    const handleResize = () => {
      calculateScale();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, minScale, maxScale, mode]);

  return { contentRef, scale, isMobile, contentSize, containerSize };
}
