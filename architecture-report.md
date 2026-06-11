# Project Structure Audit

## Framework
- React 19 + TypeScript + Vite

## Pages
- Single Page Application (SPA) driven by App.tsx which maps out all sections.

## Components (`src/components/`)
- `Navbar.tsx`: Floating navigation, active section tracking, mobile responsive.
- `Hero.tsx`: Landing section with typing effect, social links, profile image.
- `About.tsx`: Personal background, educational details, core focus cards.
- `Projects.tsx`: Grid of portfolio projects with github/demo links.
- `Certifications.tsx`: Grid of certifications, includes Lightbox modal for images.
- `Contact.tsx`: Formspree integrated contact form with copy-to-clipboard email utility.
- `Footer.tsx`: Navigation links, social links, copyright.
- `BrandIcons.tsx`: SVG definitions for brand icons (GitHub, LinkedIn).
- `ErrorBoundary.tsx`: React error boundary handling application crashes gracefully.

## State Management / Hooks
- React standard hooks (`useState`, `useEffect`).
- Used for scroll position tracking, mouse follower, typing effect, mobile menu toggles, and form state.

## Routing
- Hash-based internal routing (e.g., `#home`, `#about`) with smooth scrolling, managed manually via `window.scrollTo`. No external router (like React Router) is utilized.

## Config Files
- `vite.config.ts`: Vite setup with React plugin and Tailwind.
- `package.json`: Dependencies and scripts.
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`: TypeScript configurations.
- `eslint.config.js`: ESLint configuration.
- `_vercel.json` / `netlify.toml`: Deployment configurations.
