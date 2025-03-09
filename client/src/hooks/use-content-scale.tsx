import { useState, useEffect, useRef } from 'react';

interface ScaledViewportProps {
  containerRef: React.RefObject<HTMLDivElement>;
  containerStyle: React.CSSProperties;
  scale: number;
}

/**
 * Custom hook that implements a virtual viewport that scales
 * to fit any physical viewport size.
 * 
 * The hook creates a container with fixed dimensions (1280x800 by default)
 * and scales it to fit the current viewport size while maintaining aspect ratio.
 * 
 * @param designWidth - Fixed design width (default: 1280px)
 * @param designHeight - Fixed design height (default: 800px)
 * @returns Object with containerRef, containerStyle and scale
 */
export function useContentScale(
  designWidth: number = 1280,
  designHeight: number = 800
): ScaledViewportProps {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scaleParams, setScaleParams] = useState({
    scale: 1,
    translateX: '0px',
    translateY: '0px',
  });

  useEffect(() => {
    function updateScaleAndPosition() {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate scale needed to fit design dimensions in viewport
      const scaleX = viewportWidth / designWidth;
      const scaleY = viewportHeight / designHeight;
      
      // Use the smaller scale to ensure everything fits
      const scale = Math.min(scaleX, scaleY);
      
      // Calculate centering position
      const scaledWidth = designWidth * scale;
      const scaledHeight = designHeight * scale;
      const translateX = `${Math.max(0, (viewportWidth - scaledWidth) / 2)}px`;
      const translateY = `${Math.max(0, (viewportHeight - scaledHeight) / 2)}px`;
      
      // Update state
      setScaleParams({ scale, translateX, translateY });
    }
    
    // Calculate on mount and window resize
    updateScaleAndPosition();
    window.addEventListener('resize', updateScaleAndPosition);
    
    return () => {
      window.removeEventListener('resize', updateScaleAndPosition);
    };
  }, [designWidth, designHeight]);

  // Create container style with fixed dimensions that gets scaled
  const containerStyle: React.CSSProperties = {
    width: `${designWidth}px`,
    height: `${designHeight}px`,
    transform: `scale(${scaleParams.scale})`,
    transformOrigin: 'top left',
    position: 'absolute',
    top: scaleParams.translateY,
    left: scaleParams.translateX,
  };

  return {
    containerRef,
    containerStyle,
    scale: scaleParams.scale
  };
}