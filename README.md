# Futuristic Portfolio - Next.js

A cutting-edge, futuristic portfolio website inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/), built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Futuristic Design** - Dark theme with neon accents and particle effects
- 🎨 **Advanced Animations** - Smooth transitions powered by Framer Motion
- 📱 **Responsive** - Mobile-first design with sidebar navigation
- ⚡ **Performance** - Optimized with Next.js 14 and React 18
- 🎯 **Modern Stack** - TypeScript, Tailwind CSS, Framer Motion
- 🌟 **Interactive Elements** - Particle background, hover effects, and scroll animations

## Design Inspiration

This portfolio is inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/), featuring:
- Sidebar navigation with active section indicators
- Numbered section headers
- Timeline-style experience section
- Clean, minimal typography
- Smooth scroll animations
- Dark theme with accent colors

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Project Structure

```
majeed/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main page
├── components/
│   ├── Sidebar.tsx       # Left sidebar navigation
│   ├── MobileNav.tsx     # Mobile navigation menu
│   ├── ParticleBackground.tsx  # Animated particle background
│   ├── Hero.tsx          # Hero section with typing effect
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience timeline
│   ├── Education.tsx     # Education cards
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Inter Font](https://fonts.google.com/specimen/Inter) - Primary font
- [Fira Code](https://fonts.google.com/specimen/Fira+Code) - Monospace font

## Customization

### Colors

Edit the colors in `tailwind.config.js`:

```javascript
colors: {
  'bg-dark': '#0a0e27',
  'text-primary': '#ccd6f6',
  accent: {
    400: '#64ffda',
  },
  primary: {
    400: '#a855f7',
  },
}
```

### Content

- Update personal information in `components/Hero.tsx`
- Modify experience history in `components/Experience.tsx`
- Edit education details in `components/Education.tsx`
- Update about section in `components/About.tsx`

### Particle Effects

Customize the particle background in `components/ParticleBackground.tsx`:
- Adjust `particleCount` for more/fewer particles
- Modify particle colors and sizes
- Change connection distance threshold

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This portfolio is ready to deploy on:
- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://www.netlify.com/)
- Any platform supporting Next.js

## Features Breakdown

### Hero Section
- Animated typing effect for roles
- Smooth fade-in animations
- Gradient text effects
- Call-to-action buttons with hover effects

### Navigation
- Fixed sidebar with active section indicators
- Mobile hamburger menu
- Smooth scroll to sections
- Social links integration

### Experience Section
- Timeline layout with numbered markers
- Hover effects on job cards
- Technology tags
- Responsive design

### Particle Background
- Canvas-based particle system
- Connecting lines between nearby particles
- Smooth animations
- Performance optimized

## License

© 2024 Abdulmajeed Hussaini Modibbo. All rights reserved.

---

Built with ❤️ using Next.js and inspired by [Brittany Chiang](https://brittanychiang.com/)# portfolio
