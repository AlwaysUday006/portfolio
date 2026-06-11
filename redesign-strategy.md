# Redesign Strategy & Preparation

## 1. Outdated Sections
- **Education Status**: "2nd Year" is hardcoded and will quickly become outdated. This should be dynamic based on the current date, or simply state graduation year.
- **Hardcoded Dates**: Certification dates (e.g. "June 12, 2025") indicate future/predicted dates that need validation or dynamic updating.

## 2. Duplicate Content
- **Social Links**: Redundant links in the Hero, Contact, and Footer sections. These could be unified into a sticky social sidebar or integrated smoothly into a persistent global footer to reduce visual clutter.
- **Email**: Repeated multiple times in text.

## 3. Missing Modern Portfolio Features
- **Resume/CV Download**: There is no direct button to view or download a PDF resume.
- **Theme Toggle**: Only a dark mode exists. Modern portfolios typically offer a Dark/Light toggle.
- **Case Studies**: Projects link to GitHub and a Demo, but there are no dedicated project pages or modal popups detailing the *problem, solution, and tech stack* in depth.
- **Testimonials / References**: No section for peer or mentor recommendations.
- **Blog / Technical Articles**: Missing a section to showcase writing or technical knowledge.

## 4. UI/UX Improvement Opportunities
- **Image Loading**: Basic `loading="lazy"` is used. Implementing a blur-up skeleton loader or using modern `<picture>` elements would improve perceived performance.
- **Form UX**: The contact form lacks real-time inline validation (e.g., regex checking for email format before submit).
- **Certificate Lightbox**: The lightbox is functional but lacks a "Next/Prev" carousel functionality for easy browsing.
- **Navigation**: The mobile menu takes up the whole screen; a sleeker slide-out drawer might feel more modern.

## 5. Performance Issues
- **Animation Overhead**: Extensive use of large blur elements (`blur-[120px]`, `blur-[160px]`) and `animate-pulse` might cause GPU rendering lag on low-end mobile devices.
- **Bundle Size**: `framer-motion` is fully imported. Could benefit from lazy-loading motion components or using `m` and `LazyMotion`.

## 6. Accessibility Issues
- **Contrast Ratios**: Some text colors (`text-slate-500` or `text-slate-600` on `#050508`) might fail WCAG AAA contrast ratio requirements.
- **Focus Management**: While `focus-visible:outline-cyan-500` is used, the form validation doesn't automatically move focus to error messages for screen readers.
- **Image Alts**: Images have basic alt text, but some background decorative images might be announced to screen readers. Should use `aria-hidden="true"` for purely decorative elements.
