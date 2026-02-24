/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;

{
  "name": "cullinan-jets",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.14.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.4.0"
  }
}

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;

# Cullinan Jets — Private Aviation Website

A premium, minimalist website for a private jet charter company built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

![Bordeaux + White luxury aesthetic](https://img.shields.io/badge/style-luxury%20minimalist-5A0F1A)

## Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/cullinan-jets.git
cd cullinan-jets

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
cullinan-jets/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + custom styles
│   │   ├── layout.tsx         # Root layout + metadata
│   │   └── page.tsx           # Main page (assembles all sections)
│   ├── components/
│   │   ├── Header.tsx         # Sticky nav with mobile menu
│   │   ├── Hero.tsx           # Full-screen hero section
│   │   ├── ValueProps.tsx     # Trust/value proposition cards
│   │   ├── Services.tsx       # Service offerings grid
│   │   ├── FleetSection.tsx   # Fleet explorer with filter
│   │   ├── FleetModal.tsx     # Fleet detail modal with specs
│   │   ├── SafetySection.tsx  # Safety accordion
│   │   ├── Membership.tsx     # Membership tiers
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   ├── FAQ.tsx            # FAQ accordion
│   │   ├── Contact.tsx        # Contact CTA section
│   │   ├── Footer.tsx         # Site footer
│   │   ├── QuoteModal.tsx     # Quote request form modal
│   │   ├── FloatingCTA.tsx    # Mobile floating button
│   │   └── Separator.tsx      # Decorative section divider
│   └── data/
│       └── fleet.ts           # ✏️ EDIT THIS — all fleet & content data
├── tailwind.config.ts         # Bordeaux color palette + fonts
├── package.json
└── README.md
```

## How to Edit Fleet Data

All fleet categories, aircraft models, testimonials, FAQs, membership tiers, and safety items are in a single file:

**`src/data/fleet.ts`**

### Add a new aircraft to a category:

```ts
// Find the category in fleetData array and add to its aircraft array:
aircraft: [
  { model: "Gulfstream G650ER", pax: "13–16", range: "7,500 nm" },
  { model: "Your New Aircraft", pax: "10–12", range: "5,000 nm" }, // ← add here
],
```

### Add a new fleet category:

```ts
{
  slug: "your-slug",
  category: "Your Category Name",
  tagline: "Short tagline here.",
  overview: "Longer description...",
  passengers: "X–Y",
  range: "X,000–Y,000 nm",
  baggage: "XX cu ft",
  cabinNotes: "Cabin description...",
  aircraft: [
    { model: "Aircraft Model", pax: "X", range: "X,000 nm" },
  ],
},
```

## Branding

| Token       | Value      | Usage                    |
|-------------|------------|--------------------------|
| Bordeaux    | `#5A0F1A`  | Primary accent, buttons  |
| Off-white   | `#FAFAF8`  | Page background          |
| Cream       | `#F5F3EF`  | Alternating sections     |
| Near-black  | `#121212`  | Body text                |
| Warm grey   | `#8A8378`  | Muted / secondary text   |

**Fonts:** Cormorant Garamond (headings/logo) + Montserrat (body) — loaded from Google Fonts.

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or any platform that supports Next.js (Netlify, Railway, Docker, etc.)

## License

MIT

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          DEFAULT: "#5A0F1A",
          light: "#7A2030",
          dark: "#3D0F15",
        },
        offwhite: "#FAFAF8",
        cream: "#F5F3EF",
        warmgrey: "#C4BEB5",
        muted: "#8A8378",
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Montserrat", "Helvetica Neue", "sans-serif"],
        logo: ["Cormorant Garamond", "Didot", "Georgia", "serif"],
      },
      letterSpacing: {
        logo: "0.35em",
        micro: "0.25em",
        nav: "0.18em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
