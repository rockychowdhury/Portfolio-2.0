# Portfolio Website

## Overview
A personal portfolio website for Rocky Chowdhury, built with React, Vite, and Tailwind CSS with DaisyUI components.

## Tech Stack
- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Slider**: Keen Slider

## Project Structure
```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── common/      # Shared components (Navbar, Footer, etc.)
│   ├── Contact/     # Contact section
│   ├── Education/   # Education section
│   ├── HeroSection/ # Hero section
│   ├── Journey/     # Timeline/journey section
│   ├── Projects/    # Projects showcase
│   ├── Services/    # Services section
│   └── Stacks/      # Tech stacks section
├── hooks/           # Custom React hooks
├── App.jsx          # Main app component
├── index.css        # Global styles
└── main.jsx         # Entry point
```

## Development
- Run with `npm run dev` (starts on port 5000)
- Build with `npm run build` (outputs to dist/)

## Deployment
- Configured as static site deployment
- Build command: `npm run build`
- Public directory: `dist`
