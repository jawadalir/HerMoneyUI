# HerMoney Landing Page

A modern, conversion-focused landing page for a financial education and media brand supporting women in building money confidence.

## Project Overview

This project is a single-page React app built with Vite and Tailwind CSS.  
The experience is designed as a blend of:

- lifestyle brand aesthetics
- practical financial education
- supportive community onboarding

The page focuses on clear messaging, emotional trust, and easy next steps rather than technical finance language.

## Main Features

- Multi-language toggle (NL / EN / TR / FR) with shared page logic
- Sticky navigation with clear section flow
- Conversion-first sections:
  - Hero
  - Problem
  - Solution
  - Social Proof
  - Programs
  - Quick Tips
  - How It Works
  - Community
  - Final CTA
  - Footer + newsletter signup
- Card-based UI with soft lavender/beige palette
- Scroll-triggered reveal animations (`fade-right`, `fade-up`)
- Mobile-responsive layout
- Local brand imagery integrated from the `img/` folder

## Tech Stack

- React 19
- TypeScript
- Vite 5
- Tailwind CSS 3

## Folder Notes

- `src/App.tsx`: main page structure, content, and language toggle logic
- `src/index.css`: global styles, theme utilities, and animations
- `img/`: local visual assets used on the page

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Deploy (Vercel)

This Vite app is ready for Vercel deployment:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

## Content & Design Intent

The copy is intentionally short and relatable (social-media style) to reduce overwhelm and improve conversions.  
Design choices prioritize trust, warmth, and clarity:

- soft rounded cards
- generous spacing
- friendly visual hierarchy
- one consistent primary CTA across the page
