import React from 'react';
import { useSlideScaling } from '@/hooks/use-slide-scaling';

interface SlideContentProps {
  children: React.ReactNode;
  /**
   * The ideal height for the content on desktop
   * Default is the viewport height minus a small margin (48px)
   */
  targetHeight?: number;
  
  /**
   * Whether to disable scaling (will revert to scrollable behavior on all devices)
   */
  disableScaling?: boolean;
  
  /**
   * Additional class names to apply to the content wrapper
   */
  className?: string;
}

/**
 * A component that wraps slide content and automatically scales it
 * to fit within the viewport on desktop without scrolling.
 * On mobile, content remains normal size and scrollable.
 */
export const SlideContent: React.FC<SlideContentProps> = ({ 
  children, 
  targetHeight,
  disableScaling = false,
  className = '',
}) => {
  const { scale, contentRef, isMobile } = useSlideScaling({
    targetHeight,
    disableScaling,
  });

  return (
    <div className={`relative ${isMobile ? 'overflow-y-auto' : 'overflow-hidden'}`}>
      <div
        ref={contentRef}
        className={`origin-top ${className}`}
        style={{
          transform: !isMobile ? `scale(${scale})` : 'none',
          // When scaled down, we need to increase the wrapper width
          // to ensure the content still spans the full width
          width: !isMobile && scale < 1 ? `${(1 / scale) * 100}%` : '100%',
          // When on desktop and scaled, center horizontally
          marginLeft: !isMobile && scale < 1 ? `${((1 - scale) / (1 / scale) / 2) * 100}%` : '0',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideContent;