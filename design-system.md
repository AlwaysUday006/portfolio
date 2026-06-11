# Design System Audit

## Color Palette
### Base/Neutral Colors (Slate)
- Primary 50 to 950 scale (e.g., `#f8fafc` to `#020617`)
- Dark Backgrounds: `--color-bg-dark: #07070a`, `--color-surface-dark: #0e0e14`
- Light Backgrounds: `--color-bg-light: #fafafa`, `--color-surface-light: #ffffff`

### Accent Colors
- Emerald: `#10b981`
- Cyan: `#06b6d4`
- Blue: `#3b82f6`

## Typography
### Font Families
- Serif: `"Instrument Serif", Georgia, serif`
- Sans-serif: `"Plus Jakarta Sans", "Inter", system-ui, sans-serif`

### Gradients
- `.text-gradient`: Linear gradient (135deg, `#ffffff` 0%, `#94a3b8` 100%)
- `.accent-gradient`: Linear gradient (135deg, `#06b6d4` 0%, `#3b82f6` 100%)

## Spacing & Borders
- Border Radii: Highly rounded corners utilized (e.g., `rounded-2xl`, `rounded-full`).
- Glassmorphism: Background `rgba(14, 14, 20, 0.65)`, Backdrop filter blur `16px`, Border `1px solid rgba(255, 255, 255, 0.04)`.

## Animation Styles
- Framer Motion used extensively for:
  - Scroll reveals
  - Staggered children transitions
  - Hover scaling (`scale-105`, `scale-110`)
- Custom CSS Keyframes:
  - `--animate-pulse-slow` (pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite)
  - `--animate-glow` (glow-pulse 3s ease-in-out infinite)

## UI Components
- Glassmorphic Cards (Projects, Certifications)
- Premium Buttons (`.btn-premium` with sweep effect)
- Floating Sticky Navbar with active indicator
- Custom scrollbar styled with track `#07070a` and thumb `#1e293b`.
- Ambient Mouse Follower Ring
