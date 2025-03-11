# PitchDeck4 Styling Guide

This document describes the styling patterns used across the pitch deck components in the project.

## Color Scheme

### Text Colors
- Primary text: `text-gray-900` (headings, important content)
- Secondary text: `text-gray-600`, `text-gray-500` (body text, descriptions)
- Muted text: `text-gray-300`, `text-gray-400` (secondary elements, slide numbers)
- Accent colors:
  - Indigo: `text-indigo-500`, `text-indigo-600` (primary accent)
  - Purple: `text-purple-500`, `text-purple-600` (secondary accent)
  - Blue: `text-blue-500`, `text-blue-600` (defense-related content)
  - Green: `text-green-500`, `text-green-600` (commercial-related content)
  - Orange: `text-orange-500`, `text-orange-600` (tertiary accent)

### Background Colors
- Primary background: `bg-white`
- Secondary background: `bg-gray-50`
- Accent backgrounds:
  - `bg-indigo-100`, `bg-indigo-500` (primary)
  - `bg-purple-100`, `bg-purple-500` (secondary)
  - `bg-blue-100`, `bg-blue-500` (defense)
  - `bg-green-100`, `bg-green-500` (commercial)
  - `bg-orange-100`, `bg-orange-500` (tertiary)

## Typography

### Font Family
- Base font: `font-sans` (applied to slide containers)

### Font Weights
- Light: `font-light` (main headings, subtitles)
- Regular: Default weight (body text)
- Medium: `font-medium` (sub-headings, emphasized text)

### Font Sizes
- Headings:
  - Main titles: `text-3xl`, `text-4xl`, `text-5xl`
  - Section titles: `text-lg`, `text-xl`
  - Card titles: `text-base`, `text-lg`
- Body text:
  - Standard: `text-sm`, `text-base`
  - Small: `text-xs` (labels, categories)
- Metrics/Numbers: `text-2xl`, `text-3xl` (emphasized statistics)

### Text Transformations
- Uppercase: `uppercase` (section labels, categories)
- Tracking: `tracking-widest` (section labels)

## Layout

### Container Structure
- Slide container: `min-h-screen p-8 font-sans`
- Content wrapper: `max-w-5xl mx-auto`
- Responsive design with `md:` breakpoint prefixes

### Grid Systems
- Two-column layout: `grid md:grid-cols-2 gap-12`
- Three-column layout: `grid md:grid-cols-3 gap-6`
- Four-column layout: `grid md:grid-cols-4 gap-8`

### Spacing
- Vertical spacing between sections: `mb-6`, `mb-8`, `mb-12`, `mb-16`
- Component internal spacing: `p-4`, `p-6`, `p-8`
- Flex item spacing: `gap-4`, `gap-6`, `gap-8`

## Component Patterns

### Cards
- Standard card:
```css
border border-gray-100 rounded-lg p-6 bg-white shadow-sm
```

- Borderless card with top border:
```css
border-t border-gray-100 pt-6
```

### Section Headers
- Labeled sections:
```css
text-xs font-medium tracking-widest text-indigo-500 uppercase
```

### Icons and Avatars
- Circle icon containers:
```css
w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center
```

### Lists
- Standard list items:
```css
flex items-start with text-gray-300 mr-3 text-sm dash
```

### Tables
- Table styling:
```css
min-w-full divide-y divide-gray-100
```
- Table headers:
```css
px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
```

### Progress Bars
- Base bar:
```css
w-full bg-gray-100 rounded-full h-2
```
- Filled portion:
```css
bg-blue-500 h-2 rounded-full w-2/5
```

## Interactive Elements

### Buttons
- Tab buttons:
```css
px-4 py-2 text-sm font-medium rounded-md
```
- Active state:
```css
bg-indigo-50 text-indigo-600
```
- Inactive state:
```css
text-gray-500 hover:text-gray-700
```

### Charts and Visualizations
- Positioning chart:
```css
relative border border-gray-100 rounded-lg aspect-square
```
- Competitor bubbles use absolute positioning with percentage-based coordinates

## Responsive Design

- Mobile-first approach with media query breakpoints:
  - `md:` for tablet and desktop adjustments
  - Responsive font sizes: `text-sm md:text-base lg:text-xl`
  - Responsive spacing: `mb-6 md:mb-8`
  - Responsive layouts: `grid-cols-1 md:grid-cols-3`

## Common Component Types

1. **Card Components**:
   - `InitiativeCard`, `MarketCard`, `CompetitorCard`, `RevenueCard`, `FeatureCard`
   - Generally consist of an icon/letter, title, and description
   
2. **List Item Components**:
   - `FeatureListItem`, `ListItem`, `PricingItem`
   - Consistently styled with a dash or bullet and text
   
3. **Metric Display Components**:
   - `StatCard`, `MetricCard`, `ROICard`
   - Display key metrics with labels
   
4. **Timeline Components**:
   - `Milestone`, `WorkflowStep`
   - Show sequential information with visual indicators

5. **Comparison Components**:
   - `ComparisonRow`, `CompetitorBubble`
   - Used for competitive analysis 