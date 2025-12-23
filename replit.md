# Portfolio Website

## Overview
A modern personal portfolio website for Rocky Chowdhury with a sleek dark theme, built with React, Vite, and Tailwind CSS with DaisyUI components. Features smooth animations, glassmorphism effects, and a professional tech aesthetic.

## Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Slider**: Keen Slider

## Design Features
- **Dark Theme**: Navy and charcoal backgrounds (#0F172A, #1E293B)
- **Accent Colors**: Cyan (#00D9FF) with glowing effects
- **Glassmorphism**: Frosted glass card effects with backdrop blur
- **Gradient Backgrounds**: Dark linear gradients with radial glow overlays
- **Responsive**: Fully responsive design with tailored breakpoints

## Project Structure
```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── common/      # Shared components (Navbar, Footer, BG wrappers)
│   ├── Contact/     # Contact section
│   ├── Education/   # Education section
│   ├── HeroSection/ # Hero section
│   ├── Journey/     # Timeline/journey section
│   ├── Projects/    # Projects showcase with glassmorphism cards
│   ├── Services/    # Services section
│   └── Stacks/      # Tech stacks section
├── hooks/           # Custom React hooks
├── App.jsx          # Main app component
├── index.css        # Global styles with dark theme
└── main.jsx         # Entry point
```

## Color Palette
- **Primary Dark**: #0F172A (darkBg)
- **Secondary Dark**: #1E293B (darkCard)
- **Text**: #F1F5F9 (darkText)
- **Accent**: #00D9FF (cyan glow)
- **Highlight**: #0DB8EC (brighter cyan)
- **Gold Accent**: #FBBF24 (optional warm accent)

## Key Styling Classes
- `.card-glass`: Glassmorphism cards with backdrop blur and glow on hover
- `.texture-overlay`: Background with gradient and glow effects
- `.glow-text`: Text with cyan glow shadow
- `shadow-glow`: Glow shadow effect (0 0 20px rgba(0, 217, 255, 0.3))

## Development
- Run with `npm run dev` (starts on port 5000 with hot reload)
- Build with `npm run build` (outputs to dist/)

## Deployment
- Configured as static site deployment
- Build command: `npm run build`
- Public directory: `dist`

## Recent Updates
- Converted light theme to dark navy/charcoal theme
- Updated color palette with cyan accents (#00D9FF)
- Added glassmorphism card effects
- Implemented glow effects on interactive elements
- Removed image backgrounds in favor of gradient overlays
- Enhanced visual hierarchy with accent colors
