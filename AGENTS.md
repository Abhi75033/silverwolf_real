## Project Summary
Silver Wolf Technologies is a technology services firm specializing in web development, finance consulting, creative design, mobile applications, and AI-driven solutions. The project is a professional portfolio and service platform showcasing their team and expertise.

## Tech Stack
- Frontend: React (Vite), TypeScript, Tailwind CSS
- UI Components: Radix UI, Shadcn UI
- Animations: Framer Motion
- Icons: Lucide React
- Routing: React Router
- Runtime: Bun/Node.js

## Architecture
- `src/components/sections/`: Contains the main sections of the website (Hero, Team, Services, etc.)
- `src/components/ui/`: Reusable UI components (buttons, cards, badges)
- `src/pages/`: Page-level components (Index, Team tab, etc.)
- `src/lib/`: Utility functions and library configurations

## User Preferences
- Team section should show a grid in the "Team" tab and a carousel on the home page.
- Team carousel should auto-slide every 2 seconds.
- Team section title should be "Team Members" instead of "Meet Our Experts".

## Project Guidelines
- Minimize 'use client' directives (though this is a Vite project, not Next.js, the general principle of clean component structure applies).
- Use `framer-motion` for smooth, high-impact animations.
- Maintain a consistent "tech/futuristic" aesthetic with gradients and dark mode themes.

## Common Patterns
- Team members are defined in a central array within `src/components/sections/Team.tsx`.
- Sections use `motion.div` for entry animations.
