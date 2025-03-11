import React from 'react';
import { useSlideScaling } from '@/hooks/use-slide-scaling';

type SlideContentProps = {
  children: React.ReactNode;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  scaleMode?: 'fit' | 'fill' | 'stretch' | 'none';
  minScale?: number;
  maxScale?: number;
};

/**
 * SlideContent - A wrapper for slide content that handles responsive behavior
 * On mobile: Content can scroll naturally
 * On desktop: Content is scaled to fit within the viewport without scrolling
 */
const SlideContent: React.FC<SlideContentProps> = ({ 
  children, 
  className = '',
  alignment = 'left',
  scaleMode = 'fit',
  minScale = 0.4,
  maxScale = 1.0
}) => {
  const { contentRef, scale, isMobile, contentSize, containerSize } = useSlideScaling({
    minScale,
    maxScale,
    mode: scaleMode
  });
  
  // Determine horizontal alignment based on the alignment prop
  let alignmentClass = '';
  let originX = 'center';
  
  switch(alignment) {
    case 'left':
      alignmentClass = 'justify-start';
      originX = 'left';
      break;
    case 'right':
      alignmentClass = 'justify-end';
      originX = 'right';
      break;
    case 'center':
    default:
      alignmentClass = 'justify-center';
      originX = 'center';
      break;
  }
  
  // Calculate the horizontal position based on content and container sizes
  // This helps prevent content shifting when scaled
  let translateX = '0';
  if (!isMobile && contentSize && containerSize && scaleMode === 'fit') {
    const scaledWidth = contentSize.width * scale;
    
    if (alignment === 'center') {
      // Center alignment - no need for translation, handled by justify-center
      translateX = '0';
    } else if (alignment === 'right') {
      // Right alignment - shift content to maintain right edge position
      const rightShift = (containerSize.width - scaledWidth);
      translateX = `${rightShift}px`;
    }
    // For left alignment, no translation needed
  }
  
  return (
    <div 
      className={`
        ${isMobile ? '' : `h-full flex items-center ${alignmentClass}`} 
        ${className} 
        relative
      `}
    >
      {/* Container that scales the content */}
      <div 
        ref={contentRef}
        style={{
          transform: !isMobile 
            ? `scale(${scale}) translateX(${translateX})` 
            : 'none',
          transformOrigin: `${originX} top`,
          // Avoid any layout shift by ensuring width is consistent
          width: '100%'
        }}
        className={`
          ${isMobile ? '' : 'transition-transform duration-300'}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideContent;

// Enhanced useSlideScaling hook implementation
// This is a suggestion to modify your existing hook with these improvements
// Replace your current hook with this implementation

/*
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

export function useSlideScaling(options: ScalingOptions = {}) {
  const {
    minScale = 0.4,
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
*/