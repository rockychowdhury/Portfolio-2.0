# Modern Developer Portfolio

## Overview
A modern, professional developer portfolio website for Rocky Chowdhury with dark theme, scroll animations, glassmorphism effects, and comprehensive feature set for showcasing full-stack development expertise.

## Key Features
✅ **Dark Theme**: Professional navy & charcoal backgrounds with cyan accents
✅ **Scroll Animations**: Smooth scroll-triggered animations on all sections using Framer Motion + Intersection Observer
✅ **Statistics Section**: "By The Numbers" showcasing 50+ projects, 3+ years experience, 15+ technologies, 100+ clients
✅ **Glassmorphism Design**: Modern frosted glass cards with backdrop blur effects
✅ **Responsive Grid**: Auto-responsive layouts for projects, services, and education
✅ **Interactive Elements**: Hover animations, rotating icons, bouncing elements
✅ **Full Stack Section**: Journey timeline showing progression from foundation to full-stack expertise
✅ **Services Section**: Full Stack, Frontend, and Backend development services with animated icons
✅ **Projects Showcase**: Featured projects with tech stack badges and live/GitHub links
✅ **Contact & Call-to-Action**: Multiple contact points and CTAs throughout

## Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion + React Intersection Observer
- **Icons**: Lucide React
- **Slider**: Keen Slider (for tech stack carousel)
- **Toasts**: React Toastify (for user feedback)

## Project Structure
```
src/
├── components/
│   ├── common/               # Shared components
│   │   ├── ScrollAnimationWrapper.jsx  # Reusable scroll animation component
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PrimaryBG.jsx
│   │   ├── SecondaryBg.jsx
│   │   └── InvertedSecondaryBg.jsx
│   ├── HeroSection/          # Hero with animated profile
│   ├── Projects/             # Projects grid with scroll animations
│   ├── Services/             # Service cards with hover animations
│   ├── Stacks/               # Tech stack carousel
│   ├── Journey/              # Experience timeline
│   ├── Statistics/           # "By The Numbers" section (NEW)
│   ├── Education/            # Education section
│   ├── Contact/              # Contact form
│   └── hooks/
│       └── useIcons.jsx      # Custom hook for tech icons
├── assets/                   # Images and static files
├── App.jsx
├── index.css
└── main.jsx
```

## Color Palette
- **Primary Dark**: #0F172A (darkBg) - Main background
- **Secondary Dark**: #1E293B (darkCard) - Card backgrounds
- **Text**: #F1F5F9 (darkText) - Primary text
- **Accent**: #00D9FF (cyan) - Interactive elements
- **Highlight**: #0DB8EC - Brighter accent for CTAs
- **Gold Accent**: #FBBF24 - Alternative warm accent

## Scroll Animation Features
### ScrollAnimationWrapper Component
A reusable wrapper that triggers animations on scroll with multiple direction options:
- `direction="up"`: Slide up with fade-in
- `direction="down"`: Slide down with fade-in
- `direction="left"`: Slide left with fade-in
- `direction="right"`: Slide right with fade-in
- `direction="scale"`: Scale up with fade-in

### Implemented Animations
1. **Hero Section**: Staggered animations with bouncing name badge
2. **Projects**: Cascading card animations on scroll
3. **Services**: Rotating icons with card slide-up animations
4. **Statistics**: Counter animations with rotating icons
5. **Stack Items**: Individual slide animations
6. **All Sections**: Smooth fade-in on scroll

## Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 5000)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Deployment
- **Type**: Static site deployment
- **Build**: `npm run build`
- **Output**: `dist/` directory
- **Server Config**: Vite configured for all hosts with port 5000

## Key CSS Classes
- `.card-glass`: Glassmorphic cards with glow
- `.texture-overlay`: Background with gradients
- `.glow-text`: Text with cyan glow shadow
- `shadow-glow`: Cyan glow effect
- `bg-dark-gradient`: Primary dark gradient
- `bg-dark-gradient-alt`: Alternative dark gradient
- `bg-glow-gradient`: Radial glow overlay

## Recent Enhancements (Session 2)
- Created ScrollAnimationWrapper component for reusable scroll animations
- Added Statistics/Metrics section showing key achievements
- Integrated Framer Motion scroll animations across all major sections
- Updated Services section with animated icons and cards
- Enhanced HeroSection with staggered animations and interactive elements
- Added react-intersection-observer for efficient scroll detection
- Improved accessibility with semantic HTML and ARIA labels
- Updated color consistency across all components

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Performance Optimizations
- Lazy loading of images
- Code splitting with Vite
- Smooth scroll behavior
- Optimized animations with GPU acceleration
- Efficient re-renders with React hooks
