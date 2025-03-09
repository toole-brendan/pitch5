import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * Custom hook to dynamically scale content to fit viewport.
 * 
 * @param minScale - The minimum scale factor (default: 0.5)
 * @param maxScale - The maximum scale factor (default: 1)
 * @param targetHeight - Target height in viewport units (default: 90)
 * @returns An object with scale factor and ref to attach to the content container
 */
export function useContentScale(
  minScale: number = 0.5,
  maxScale: number = 1,
  targetHeight: number = 90
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  
  // Calculate scale factor
  const calculateScale = useCallback(() => {
    if (!contentRef.current) return;
    
    const element = contentRef.current;
    
    // Reset any existing transform to measure true height
    element.style.transform = 'none';
    
    // Get the natural content height and width
    const origHeight = element.scrollHeight;
    
    // Calculate available viewport space (accounting for header and padding)
    let availableHeight = window.innerHeight;
    
    // If we're inside a slide with title, reduce available height
    const slideHeader = document.querySelector('.slide-header');
    if (slideHeader) {
      availableHeight -= slideHeader.clientHeight;
    }
    
    // Account for container padding
    availableHeight -= 80; // Approximate padding top + bottom
    
    // Target height as percentage of available height
    const viewportHeight = availableHeight * (targetHeight / 100);
    
    // Calculate the scale factor
    let newScale = 1;
    
    // Only scale down if content is too large
    if (origHeight > viewportHeight) {
      newScale = Math.max(minScale, viewportHeight / origHeight);
    }
    
    // Clamp to max scale
    newScale = Math.min(maxScale, newScale);
    
    // Apply the calculated scale
    setScale(newScale);
    
    // Don't leave content with no transform
    element.style.transform = `scale(${newScale})`;
  }, [minScale, maxScale, targetHeight]);

  // Initialize on mount
  useEffect(() => {
    setIsMounted(true);
    
    // Initial calculation needs a slight delay to ensure content has rendered
    const timer = setTimeout(() => {
      calculateScale();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Set up resize observer to detect content changes
  useEffect(() => {
    if (!contentRef.current || !isMounted) return;
    
    // Recalculate on any content size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });

    resizeObserver.observe(contentRef.current);
    
    // Also recalculate on window resize
    window.addEventListener('resize', calculateScale);
    
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
      window.removeEventListener('resize', calculateScale);
    };
  }, [isMounted, calculateScale]);

  return { scale, contentRef };
}