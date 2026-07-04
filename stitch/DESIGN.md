---
name: High-Density Utility System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 1.5rem
  gutter: 1rem
  component-gap-sm: 0.5rem
  component-gap-md: 1rem
  density-tight: 0.25rem
---

## Brand & Style

This design system is built for Scoped Review Pulse Three, focusing on high-density information architecture and rapid-fire utility. The personality is strictly professional, functional, and unobtrusive, acting as a transparent layer between the user and their data. 

The aesthetic draws from **Modern Corporate Minimalism** with a focus on systematic precision. It prioritizes clarity over decoration, using a neutral foundation to ensure that status indicators and data visualizations remain the primary focal points. The UI should feel like a high-performance tool—reliable, fast, and dense—evoking a sense of control and systematic efficiency for power users managing complex review cycles.

## Colors

The palette is anchored by a deep slate primary for text and high-contrast elements, paired with a utility blue for primary actions. The background uses a very cool, light gray to reduce eye strain during long sessions while maintaining a clean "utility" feel.

- **Primary:** Deep Slate (#0F172A) for maximum legibility and structural elements.
- **Secondary:** Interactive Blue (#3B82F6) for primary buttons and active states.
- **Neutrals:** A scale of Grays from Slate-50 to Slate-700 to define borders, secondary text, and iconography.
- **Status Colors:** High-chroma Green, Amber, and Red are reserved strictly for system feedback, alerts, and health indicators to ensure they "pop" against the neutral backdrop.

## Typography

This design system utilizes **Inter** across all levels for its exceptional legibility at small sizes and its neutral, systematic character. 

The type hierarchy is compressed to support high-density layouts. We use a "Small-Scale" approach where the base body size is 14px, and 13px is used for secondary data tables. Headlines are kept tight and bold to provide clear section anchoring without consuming excessive vertical space. Numeric data should ideally utilize Inter’s tabular lining features to ensure columns of figures align perfectly in dashboard views.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Global containers are fluid to maximize screen real estate on ultra-wide monitors, while internal dashboard "tiles" operate on a rigid 4px baseline grid.

- **Desktop:** 12-column grid with 16px (1rem) gutters. Content lives within modular "cards" or "tiles."
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 12px gutters.

Spacing is intentionally "tight but balanced." We use internal tile padding of 16px, but nested elements (like list items or form fields) use 8px or 4px gaps to maintain a high-density utility feel. Information-heavy tables should use a condensed row height (32px - 40px) to maximize the amount of data visible above the fold.

## Elevation & Depth

This design system uses **Low-Contrast Outlines** and **Tonal Layers** rather than heavy shadows to convey depth. This keeps the interface feeling "flat" and efficient.

- **Level 0 (Background):** Slate-50 (#F8FAFC).
- **Level 1 (Cards/Tiles):** White (#FFFFFF) with a 1px border in Slate-200. No shadow.
- **Level 2 (Dropdowns/Modals):** White with a 1px border and a very subtle, tight ambient shadow (0px 4px 6px -1px rgba(0,0,0,0.1)) to provide focus.
- **Active State:** Elements being dragged or interacted with receive a subtle blue tint in their border rather than an increased shadow.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the high-density grid, making the UI feel modern and refined without appearing overly "bubbly" or consumer-grade.

- **Small Components (Buttons, Inputs, Badges):** 4px radius.
- **Large Components (Cards, Modals):** 8px radius (rounded-lg).
- **Status Dots:** 100% (Fully circular).

## Components

### Buttons
Buttons are compact with 4px radii. Primary buttons use Slate-900 or Blue-600. Secondary buttons use a white fill with a Slate-200 border. Content should be centered with a 12px horizontal padding for "Dense" variants.

### Dashboard Tiles
The primary container. White background, 1px Slate-200 border, 16px padding. Titles should be `label-xs` (uppercase) to clearly categorize the data within.

### Data Tables
Rows use a subtle hover state (#F1F5F9). Borders are horizontal only (Slate-100). "Status" columns use small, circular indicators (8px) next to `body-sm` text.

### Form Inputs
Inputs have a 1px border. On focus, the border changes to Blue-500 with a 2px soft blue "glow" (outline-offset). Labels always sit above the input in `label-md` weight.

### Chips & Badges
Used for status and filtering. These are non-rounded (or 4px) and use a light tinted background of the status color (e.g., Success Green at 10% opacity) with high-contrast text for maximum readability.