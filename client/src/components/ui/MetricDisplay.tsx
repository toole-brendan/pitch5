import React from 'react';
import styles from '@/styles/styleUtils';

interface MetricDisplayProps {
  value: string;
  label: string;
  color?: 'indigo' | 'purple' | 'blue' | 'green';
  className?: string;
}

/**
 * MetricDisplay component
 * 
 * A standardized component for displaying metrics/statistics
 * that follows the styling guide.
 */
const MetricDisplay: React.FC<MetricDisplayProps> = ({ 
  value,
  label,
  color = 'indigo',
  className = ''
}) => {
  // Map color to the appropriate text color class
  const colorClass = colorMap[color];
  
  return (
    <div className={styles.cx('flex items-baseline', className)}>
      <span className={styles.cx(styles.fontSizes.metric, styles.fontWeights.medium, colorClass, 'mr-2')}>
        {value}
      </span>
      <span className={styles.cx(styles.fontSizes.label, styles.textColors.muted)}>
        {label}
      </span>
    </div>
  );
};

// Map color props to Tailwind classes
const colorMap = {
  indigo: styles.textColors.indigo,
  purple: styles.textColors.purple,
  blue: styles.textColors.blue,
  green: styles.textColors.green,
};

export default MetricDisplay; 