# Spokkn Marketing - Design System

## 🎨 Design Overview

This document outlines the design system, components, and visual language used in the Spokkn marketing website.

## Color Palette

### Primary Colors
- **Primary**: `hsl(214, 100%, 34%)` - Deep blue
- **Primary Foreground**: `hsl(0, 0%, 100%)` - White
- **Accent**: `hsl(207, 90%, 58%)` - Bright sky blue
- **Accent Foreground**: `hsl(0, 0%, 100%)` - White

### Background Colors
- **Background**: `hsl(90, 11%, 96%)` - Off-white
- **Foreground**: `hsl(0, 0%, 7%)` - Near black
- **Card**: `hsl(0, 0%, 100%)` - Pure white
- **Card Foreground**: `hsl(0, 0%, 7%)` - Near black

### Secondary Colors
- **Secondary**: `hsl(216, 33%, 96%)` - Light blue-gray
- **Secondary Foreground**: `hsl(0, 0%, 7%)` - Near black
- **Muted**: `hsl(216, 20%, 93%)` - Soft gray
- **Muted Foreground**: `hsl(216, 10%, 47%)` - Medium gray

### Brand Colors
- **Sky Brand**: `hsl(207, 90%, 58%)` - Sky blue
- **Sky Light**: `hsl(207, 90%, 94%)` - Light sky
- **Blue Light**: `hsl(214, 100%, 96%)` - Pale blue
- **Lavender**: `hsl(214, 60%, 92%)` - Soft lavender

### Utility Colors
- **Border**: `hsl(216, 20%, 91%)` - Light border
- **Input**: `hsl(216, 20%, 91%)` - Input border
- **Ring**: `hsl(214, 100%, 34%)` - Focus ring
- **Destructive**: `hsl(0, 72%, 51%)` - Error red

### Gradients
- **Brand Gradient**: `linear-gradient(hsl(207, 90%, 58%) 100%)`
- **Brand Hover**: `linear-gradient(135deg, hsl(214, 100%, 29%) 0%, hsl(207, 90%, 53%) 100%)`
- **Text Gradient**: `linear-gradient(90deg, hsl(214, 100%, 34%) 0%, hsl(207, 90%, 58%) 100%)`

## Typography

- **Font Family**: System font stack with fallbacks
- **Headings**: Bold, extrabold weights
- **Body**: Regular, medium weights
- **Sizes**: Responsive scaling (xs → sm → base → lg → xl)

## Component Library

### GridCollage
Interactive grid showcasing platform features with:
- Live activity indicators
- Animated typing text
- User avatars and status
- Activity badges
- Audio visualizations

**Key Features:**
- Responsive 2-4 column grid
- Gradient backgrounds with overlay patterns
- Motion animations using Framer Motion
- Real-time typing simulation

### Animations

**Typing Effect:**
- Cycles through conversation phrases
- 60ms character typing speed
- 30ms deletion speed
- 1.5s pause between phrases

**Motion:**
- Fade-in on scroll
- Staggered entrance animations
- Pulse effects for live indicators

## Design Patterns

### Cards
- Rounded corners (2xl = 1rem)
- Gradient backgrounds
- Border overlays
- Backdrop blur effects
- Aspect ratios: square or auto

### Badges
- Pill-shaped (rounded-full)
- Semi-transparent backgrounds
- Small text (xs)
- Icon + text combinations

### Gradients
- `from-primary to-accent`
- `from-primary/5 via-transparent to-accent/5`
- Directional: `to-br` (bottom-right)

## Spacing System

- **Gap**: 3-4 units between grid items
- **Padding**: 4 units for cards
- **Container**: Responsive max-width

## Responsive Breakpoints

- **Mobile**: Base (2 columns)
- **Tablet**: sm (4 columns)
- **Desktop**: md, lg (enhanced spacing)

## Icons

Using `lucide-react`:
- Mic
- MessageCircle
- AudioLines

## Assets

- `hero-person.jpg`: Featured user image

## Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Design Principles

1. **Activity-First**: Showcase real learning activities
2. **Motion**: Subtle animations for engagement
3. **Clarity**: Clear visual hierarchy
4. **Responsive**: Mobile-first approach
5. **Modern**: Gradients, blur effects, smooth transitions
