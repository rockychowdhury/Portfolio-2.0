# Modern Developer Portfolio — Rocky Chowdhury

## Overview
A modern, professional developer portfolio with dark theme, real-time API integrations, scroll animations, and a comprehensive activity dashboard. Built with React, Vite, and Tailwind CSS.

## Live API Integrations

### Coding Activity Dashboard (`src/components/CodingActivity/`)
Fetches real-time data from multiple platforms via `src/services/codingAPIs.js`:

| Platform | API Endpoint | Data Shown |
|----------|-------------|-----------|
| **GitHub** | `api.github.com/users/rockychowdhury` | Repos, Stars, Followers, Languages, Commits |
| **Codeforces** | `codeforces.com/api/user.*` | Rating, Rank, Problems Solved, Tag Analysis, Rating History |
| **LeetCode** | `leetcode-stats-api.herokuapp.com/Rocky20809` | Easy/Medium/Hard solved, Ranking, Acceptance Rate |
| **WakaTime** | `wakatime.com/api/v1/users/current/stats` | Coding hours, Languages, Projects (requires API key) |

### Profile Identifiers
- **GitHub**: `rockychowdhury`
- **Codeforces**: `__Cipher__` (Rating: 990, Max: 1213)
- **LeetCode**: `Rocky20809` (106 problems solved)
- **CodeChef**: `rocky20809`

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|---------|
| `VITE_WAKATIME_API_KEY` | WakaTime API key for coding stats | Optional |
| `VITE_WAKATIME_USERNAME` | WakaTime username (default: Rocky20809) | Optional |

To set up WakaTime:
1. Get your API key from https://wakatime.com/settings/api-key
2. Add `VITE_WAKATIME_API_KEY=your_key` to `.env`

## Tech Stack
- **Frontend**: React 18 with Vite 6
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion + React Intersection Observer
- **Charts**: Recharts (for rating history, language distribution, donut charts)
- **Icons**: Lucide React
- **Slider**: Keen Slider (tech stack carousel)
- **Notifications**: React Toastify

## Project Structure
```
src/
├── services/
│   └── codingAPIs.js         # All external API fetch functions
├── hooks/
│   └── useCodingStats.js     # Custom hook for parallel API fetching
├── components/
│   ├── CodingActivity/       # NEW: Full activity dashboard
│   │   ├── CodingActivity.jsx        # Main section with tabs
│   │   ├── PlatformCards.jsx         # Platform summary cards row
│   │   ├── LeetCodeSection.jsx       # LeetCode stats + donut chart
│   │   ├── CodeforcesSection.jsx     # CF stats + rating line chart
│   │   ├── GithubSection.jsx         # GitHub stats + language bar chart
│   │   ├── WakatimeSection.jsx       # WakaTime stats or setup prompt
│   │   ├── ActivityCalendar.jsx      # Heatmap calendar component
│   │   └── LoadingCard.jsx           # Skeleton loading cards
│   ├── common/
│   │   ├── ScrollAnimationWrapper.jsx  # Reusable scroll animation wrapper
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PrimaryBG.jsx
│   │   ├── SecondaryBg.jsx
│   │   └── InvertedSecondaryBg.jsx
│   ├── HeroSection/          # Animated hero with profile
│   ├── Stacks/               # Categorized tech skills grid
│   │   ├── Stacks.jsx        # Main section
│   │   ├── SkillCard.jsx     # Individual skill card with proficiency bar
│   │   └── SkillsData.js     # Skills organized by category
│   ├── Journey/              # Timeline-based experience
│   ├── Statistics/           # By-the-numbers metrics
│   ├── Services/             # Service offerings
│   ├── Projects/             # Featured projects
│   ├── Education/            # Academic background
│   └── Contact/              # CTA with email/LinkedIn buttons
```

## Design System

### Colors
- `darkBg`: `#0F172A` — Main background
- `darkCard`: `#1E293B` — Card backgrounds
- `darkText`: `#F1F5F9` — Primary text
- `accent`: `#00D9FF` — Cyan accents, interactive elements
- `highlight`: `#0DB8EC` — Brighter accent variant

### Key CSS Classes
- `.card-glass`: Glassmorphic card with backdrop blur and glow border
- `.shadow-glow`: Cyan glow effect (0 0 20px rgba(0, 217, 255, 0.3))
- `.animate-shimmer`: Loading skeleton shimmer animation
- `bg-dark-gradient`: Primary dark diagonal gradient
- `bg-glow-gradient`: Radial glow overlay

### Section Layout (top → bottom)
1. Hero (animated, dark gradient)
2. Tech Stacks (categorized grid with proficiency bars)
3. Journey (experience timeline)
4. Statistics (metrics cards)
5. **Coding Activity** (API dashboard: Codeforces, LeetCode, GitHub, WakaTime)
6. Services (service offering cards)
7. Featured Projects
8. Education
9. Contact CTA
10. Footer

## Development
```bash
npm install          # Install all dependencies
npm run dev          # Dev server on port 5000 (host: 0.0.0.0)
npm run build        # Production build → dist/
npm run preview      # Preview production build
```

## Deployment
- **Type**: Static site
- **Build**: `npm run build`
- **Output**: `dist/` directory
- **Port**: 5000 (configured in vite.config.js)
- **Hosts**: All hosts allowed (required for Replit proxy)
