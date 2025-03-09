import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

interface UseSlideScalingProps {
  /**
   * The ideal height that the content should fit within when on desktop
   * This will be used to calculate the scaling factor
   */
  targetHeight?: number;
  
  /**
   * Whether to disable scaling entirely
   */
  disableScaling?: boolean;
}

/**
 * A hook that calculates how much a slide's content should be scaled
 * to fit within the viewport on desktop without scrolling
 */
export function useSlideScaling(props?: UseSlideScalingProps) {
  const { 
    targetHeight = window.innerHeight - 48, // Default target height (viewport minus a small margin)
    disableScaling = false 
  } = props || {};
  
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (disableScaling || isMobile || !contentRef.current) {
      setScale(1);
      return;
    }

    const calculateScale = () => {
      const content = contentRef.current;
      if (!content) return;
      
      // Get the actual content height (before any scaling is applied)
      const actualHeight = content.scrollHeight;
      setContentHeight(actualHeight);
      
      // Only scale down, never scale up
      if (actualHeight <= targetHeight) {
        setScale(1);
        return;
      }
      
      // Calculate the scale factor needed to fit content in viewport
      const scaleFactor = targetHeight / actualHeight;
      setScale(scaleFactor);
    };

    // Calculate initial scale
    calculateScale();

    // Recalculate on window resize
    const handleResize = () => {
      calculateScale();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, disableScaling, targetHeight, contentRef.current?.scrollHeight]);

  return {
    scale,
    contentRef,
    contentHeight,
    isMobile,
  };
}