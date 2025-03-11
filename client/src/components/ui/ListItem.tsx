import React from 'react';
import styles from '@/styles/styleUtils';

interface ListItemProps {
  text: string;
  className?: string;
}

/**
 * ListItem component
 * 
 * A standardized list item with dash/bullet styling
 * that follows the styling guide.
 */
const ListItem: React.FC<ListItemProps> = ({ 
  text, 
  className = '' 
}) => {
  return (
    <li className={styles.cx(styles.listItemStyles.standard, className)}>
      <span className={styles.listItemStyles.dashIcon}>—</span>
      <span className={styles.textColors.secondary}>{text}</span>
    </li>
  );
};

export default ListItem; 