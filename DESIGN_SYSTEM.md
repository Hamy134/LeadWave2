# Countwave AI Design System Documentation

## Overview
This document outlines the design standards implemented across the Countwave AI website to ensure consistency, accessibility, and optimal user experience.

## Color Palette

### Primary Colors
- **Primary Blue**: `hsl(217, 91%, 60%)` - Main brand color for CTAs and highlights
- **Primary Light**: `hsl(217, 91%, 75%)` - Lighter variant for gradients
- **Primary Dark**: `hsl(217, 91%, 45%)` - Darker variant for hover states

### Secondary Colors
- **Background**: `hsl(0, 0%, 100%)` - Main background
- **Foreground**: `hsl(220, 26%, 14%)` - Primary text color
- **Muted**: `hsl(220, 14%, 96%)` - Subtle backgrounds
- **Border**: `hsl(220, 13%, 91%)` - Borders and dividers

### Semantic Colors
- **Success**: `hsl(142, 71%, 45%)` - Success states and positive metrics
- **Destructive**: `hsl(0, 84%, 60%)` - Error states and warnings

## Typography

### Font Hierarchy
- **H1**: 4xl-6xl (responsive), font-bold, tight line-height
- **H2**: 3xl-4xl (responsive), font-bold, tight line-height  
- **H3**: 2xl-3xl (responsive), font-semibold, tight line-height
- **H4**: xl-2xl (responsive), font-semibold, normal line-height
- **Body**: base size, normal line-height (1.5), relaxed for paragraphs (1.75)

### Font Weights
- **Bold**: 700 - Headlines and emphasis
- **Semibold**: 600 - Subheadings and important text
- **Medium**: 500 - Labels and secondary emphasis
- **Normal**: 400 - Body text

## Spacing System

### Base Unit: 8px
- **XS**: 4px (0.25rem)
- **SM**: 8px (0.5rem)
- **MD**: 16px (1rem)
- **LG**: 24px (1.5rem)
- **XL**: 32px (2rem)
- **2XL**: 48px (3rem)
- **3XL**: 64px (4rem)

## Component Standards

### Buttons

#### Primary Button (.btn-primary)
- Background: Primary blue with gradient
- Text: White
- Padding: 16px 32px
- Border radius: 12px
- Shadow: Glow effect
- Hover: Scale 1.02, darker background
- Focus: Ring with primary color

#### Secondary Button (.btn-secondary)
- Background: Secondary gray
- Text: Secondary foreground
- Border: 1px solid border color
- Same padding and radius as primary
- Hover: Scale 1.02, subtle shadow

#### Ghost Button (.btn-ghost)
- Background: Transparent
- Text: Foreground color
- Padding: 8px 24px
- Hover: Muted background, scale 1.02

### Cards

#### Glass Card (.glass-card)
- Background: Semi-transparent white (80% opacity)
- Backdrop blur: 16px
- Border: White with 20% opacity
- Shadow: Large shadow for depth

#### Process Card (.process-card)
- Background: White with 95% opacity
- Backdrop blur: 20px
- Border: White with 20% opacity
- Complex shadow system for depth
- Hover: Translate up 8px, enhanced shadow

### Interactive Elements

#### Tooltips
- Background: Dark gray (#1f2937)
- Text: White
- Padding: 12px 16px
- Border radius: 8px
- Arrow pointer included
- Fixed positioning to prevent viewport cutoff
- Z-index: 50 for proper layering

#### Progress Bars
- Height: 12px
- Background: Light gray
- Fill: Colored based on context
- Animation: 1.5s ease-out duration
- Border radius: Full (pill shape)

## Responsive Breakpoints

### Mobile First Approach
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Mobile Optimizations
- Touch targets: Minimum 44px x 44px
- Increased padding on buttons
- Simplified layouts
- Larger text sizes for readability
- Full-width buttons on mobile

## Animation Standards

### Timing Functions
- **Fast**: 0.15s cubic-bezier(0.4, 0, 0.2, 1)
- **Normal**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Slow**: 0.5s cubic-bezier(0.4, 0, 0.2, 1)

### Common Animations
- **Hover Scale**: 1.02 for subtle lift
- **Button Hover**: 1.05 for more emphasis
- **Fade In**: Opacity 0 to 1 with slight Y translation
- **Slide Up**: Y translation with opacity change
- **Progress Fill**: Width animation with easing

## Accessibility Standards

### Focus States
- All interactive elements have visible focus rings
- Focus rings use primary color with 30% opacity
- 4px ring offset for clarity

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Interactive elements have sufficient contrast
- Hover states maintain accessibility

### Touch Targets
- Minimum 44px x 44px for mobile
- Adequate spacing between interactive elements
- Clear visual feedback for all interactions

## Performance Optimizations

### CSS Optimizations
- GPU acceleration for animations (translateZ(0))
- Contain property for layout stability
- Will-change property for animated elements
- Reduced motion support for accessibility

### Layout Stability
- Stable containers to prevent layout shifts
- Consistent aspect ratios for images
- Proper sizing for dynamic content areas

## Implementation Guidelines

### Class Naming
- Use semantic class names (.btn-primary vs .blue-button)
- Follow BEM methodology where appropriate
- Utility classes for common patterns

### Component Structure
- Consistent prop interfaces
- Proper TypeScript typing
- Reusable component patterns
- Clear separation of concerns

### Code Organization
- Styles organized by component
- Shared utilities in base layer
- Component-specific styles in components layer
- Utilities layer for helper classes

## Quality Assurance Checklist

### Visual Consistency
- [ ] All buttons follow button standards
- [ ] Typography hierarchy is consistent
- [ ] Spacing follows 8px grid system
- [ ] Colors match design system palette

### Responsive Design
- [ ] Mobile layouts are touch-friendly
- [ ] Content reflows properly at all breakpoints
- [ ] Images and media are responsive
- [ ] Navigation works on all devices

### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible and consistent
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader compatibility verified

### Performance
- [ ] Animations are smooth and performant
- [ ] No layout shifts during loading
- [ ] Images are optimized
- [ ] CSS is minified and optimized

This design system ensures consistency across the Countwave AI website while maintaining flexibility for future enhancements and maintaining optimal user experience across all devices and use cases.