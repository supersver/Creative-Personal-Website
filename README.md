# ✨ Creative Personal Website

A kinetic personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Motion for React**.  
The design direction is expressive and editorial: bold typography, blocky visual language, scroll-aware movement, magnetic links, animated cards, and a playful hero composition. 🚀

## 🛠 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React icons

## 📁 Project Structure

- `app/page.tsx` composes the homepage.
- `app/layout.tsx` defines metadata and the root document shell.
- `app/globals.css` contains global styling, layout utilities, and visual tokens.
- `components/home/HomePage.tsx` owns page-level Motion setup such as scroll progress and cursor motion.
- `components/home/sections/` contains separate homepage sections:
  - `Hero.tsx`
  - `Ticker.tsx`
  - `Projects.tsx`
  - `Experience.tsx`
  - `Workflow.tsx`
  - `Contact.tsx`
- `components/home/types.ts` defines TypeScript types for projects.
- `components/home/ui/` contains shared UI and animation helpers:
  - `MagneticLink.tsx`
  - `Reveal.tsx`
  - `TiltCard.tsx`

## 🎬 Animation Details

The site uses Motion for React as the main interaction and animation layer:

- Spring-based scroll progress indicator
- Cursor-following motion value
- Hero entrance sequencing
- Scroll-linked hero parallax
- Magnetic link hover/tap interactions
- In-view reveal animations
- Motion-driven project card tilt
- Animated ticker and contact marquee
- Floating hero poster and stickers

CSS is used for base styling, layout, colors, typography, and decorative visual effects. 🎨

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
