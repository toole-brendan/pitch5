# Implementing the PitchDeck4 Styling Guide

This document provides instructions for applying the standardized styling guide to all slide components in the PitchDeck4 project.

## Getting Started

We've created several resources to help standardize styles across the pitch deck:

1. `client/src/styles/styleUtils.ts` - Contains standardized styling utilities
2. New reusable UI components in `client/src/components/ui/`:
   - `SectionHeader.tsx` - For consistent section headers
   - `Card.tsx` - For card components with consistent styling
   - `ListItem.tsx` - For standardized list items
   - `MetricDisplay.tsx` - For metric/statistic displays
   - `IconContainer.tsx` - For circular icon containers

## How to Apply the Styling Guide

Follow these steps to update existing slide components:

### Step 1: Import Styling Utilities

In each slide component, import the style utilities:

```tsx
import styles from '@/styles/styleUtils';
```

### Step 2: Replace Hard-coded Classes with Style Utilities

Replace Tailwind class strings with our standardized style utilities:

**Before:**
```tsx
<div className="text-xs font-medium tracking-widest text-indigo-500 uppercase mb-6">
  Section Title
</div>
```

**After:**
```tsx
<div className={styles.sectionHeaderStyles.primary}>
  Section Title
</div>
```

Or better yet, use the new reusable components:

```tsx
<SectionHeader text="Section Title" color="primary" />
```

### Step 3: Replace Common Components

Replace common patterns with the new reusable components:

**Before:**
```tsx
<div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
  <div className="flex items-center mb-4">
    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
      <span className="text-indigo-600 font-medium">{icon}</span>
    </div>
    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
  </div>
  <p className="text-gray-600">{description}</p>
</div>
```

**After:**
```tsx
<Card>
  <div className="flex items-center mb-4">
    <IconContainer 
      icon={icon} 
      color="indigo" 
      size="medium" 
      className="mr-3" 
    />
    <h3 className={styles.cx(styles.fontSizes.h5, styles.fontWeights.medium, styles.textColors.primary)}>
      {title}
    </h3>
  </div>
  <p className={styles.textColors.secondary}>{description}</p>
</Card>
```

### Step 4: Use the `cx` Helper for Class Combinations

When you need to combine multiple class strings, use the `cx` helper:

**Before:**
```tsx
<h1 className="text-5xl font-light text-gray-900 mb-3">Title</h1>
```

**After:**
```tsx
<h1 className={styles.cx(
  styles.fontSizes.h1, 
  styles.fontWeights.light, 
  styles.textColors.primary, 
  styles.spacing.marginBottom.xs
)}>
  Title
</h1>
```

## Examples by Component Type

### Card Components

```tsx
// With the Card component
<Card variant="standard" className="mb-4">
  {/* Card content */}
</Card>

// Borderless variant
<Card variant="borderless">
  {/* Card content */}
</Card>
```

### List Items

```tsx
<ul className="space-y-4">
  <ListItem text="Item 1" />
  <ListItem text="Item 2" />
  <ListItem text="Item 3" />
</ul>
```

### Metrics Display

```tsx
<MetricDisplay 
  value="$120B" 
  label="Total Addressable Market" 
  color="indigo"
/>
```

### Grid Layouts

```tsx
<div className={styles.grids.threeCol}>
  {/* Three column content */}
</div>
```

### Section Headers

```tsx
<SectionHeader text="Market Opportunity" color="purple" />
```

## Color Usage Guidelines

Follow these semantic color guidelines:

- **Indigo** - Primary accent color, used for general elements
- **Purple** - Secondary accent color, often used for business/revenue elements
- **Blue** - Used for defense-related content
- **Green** - Used for commercial-related content
- **Orange** - Tertiary accent for additional emphasis

## Typography Guidelines

- Use `font-light` for main headings
- Use `font-medium` for sub-headings and emphasized text
- Use appropriate text size classes for hierarchy:
  - `h1` for slide titles
  - `h4` or `h5` for section titles
  - `body` or `bodySmall` for regular text

## Responsive Design

Remember that the styling guide follows a mobile-first approach:

```tsx
<div className={styles.cx(
  'text-sm', // Mobile size
  'md:text-base' // Desktop size
)}>
  Responsive text
</div>
```

## Troubleshooting

If you're having trouble with style conflicts, check:

1. Component specificity - more specific selectors might be overriding your styles
2. Order of classes - later classes override earlier ones in Tailwind
3. Custom style extensions - check for any project-specific style extensions

For any questions about implementing the style guide, contact the design team. 