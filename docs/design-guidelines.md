# IT Outsourcing Company - Design Guidelines

## Design Concept: "Precision Engineering"

A bold, technical aesthetic that conveys precision, reliability, and cutting-edge capability. The design draws inspiration from architectural blueprints, circuit board patterns, and high-end engineering firms.

---

## Color Palette

### Primary Colors
```
--color-ink: #0D0D0F          // Near-black, primary text
--color-paper: #FAFAF9        // Warm off-white background
--color-accent: #E8FF47       // Electric lime - distinctive accent
--color-accent-dark: #C4D93D  // Darker lime for hover states
```

### Secondary Colors
```
--color-slate-900: #1A1A1E    // Dark backgrounds
--color-slate-800: #2D2D33    // Cards on dark
--color-slate-700: #3D3D44    // Borders on dark
--color-slate-400: #9CA3AF    // Muted text
--color-slate-300: #D1D5DB    // Light borders
--color-slate-100: #F3F4F6    // Light backgrounds
```

### Accent Variations
```
--color-fintech: #00D4AA      // Teal for FinTech
--color-proptech: #FF6B35     // Orange for PropTech
--color-cloud: #3B82F6        // Blue for Cloud
--color-ai: #A855F7           // Purple for AI
```

### Rationale
- **Electric Lime (#E8FF47)**: Bold, unexpected accent that breaks from typical blue/purple tech palettes. Conveys innovation and energy.
- **Near-black ink on warm paper**: Creates sophisticated contrast while avoiding harsh black-on-white.
- **Industry-specific accents**: Allow visual differentiation across expertise areas.

---

## Typography

### Font Stack
```css
--font-display: 'Space Grotesk', system-ui, sans-serif;
--font-body: 'DM Sans', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale (Desktop)
```
--text-hero: 5.5rem / 1.0      // 88px - Hero headlines
--text-h1: 4rem / 1.1          // 64px - Page titles
--text-h2: 2.5rem / 1.2        // 40px - Section titles
--text-h3: 1.75rem / 1.3       // 28px - Subsections
--text-h4: 1.25rem / 1.4       // 20px - Card titles
--text-body: 1.125rem / 1.6    // 18px - Body text
--text-small: 0.875rem / 1.5   // 14px - Captions
--text-xs: 0.75rem / 1.5       // 12px - Labels
```

### Type Scale (Mobile)
```
--text-hero: 2.75rem / 1.1     // 44px
--text-h1: 2.25rem / 1.15      // 36px
--text-h2: 1.75rem / 1.2       // 28px
--text-h3: 1.375rem / 1.3      // 22px
--text-h4: 1.125rem / 1.4      // 18px
--text-body: 1rem / 1.6        // 16px
```

### Typography Treatments
- **Headlines**: Space Grotesk, bold (700), tracking -0.02em
- **Body**: DM Sans, regular (400), tracking 0
- **Labels/Tags**: Space Grotesk, medium (500), uppercase, tracking 0.1em
- **Code/Tech**: JetBrains Mono, regular (400)

---

## Spacing System

### Base Unit: 4px
```
--space-1: 0.25rem   // 4px
--space-2: 0.5rem    // 8px
--space-3: 0.75rem   // 12px
--space-4: 1rem      // 16px
--space-5: 1.25rem   // 20px
--space-6: 1.5rem    // 24px
--space-8: 2rem      // 32px
--space-10: 2.5rem   // 40px
--space-12: 3rem     // 48px
--space-16: 4rem     // 64px
--space-20: 5rem     // 80px
--space-24: 6rem     // 96px
--space-32: 8rem     // 128px
```

### Section Spacing
- Desktop: 120px-160px between major sections
- Mobile: 64px-80px between major sections

---

## Layout Grid

### Desktop (1440px container)
- 12-column grid
- Column gap: 24px
- Margin: 80px sides
- Max content width: 1280px

### Tablet (768px-1024px)
- 8-column grid
- Column gap: 20px
- Margin: 40px sides

### Mobile (320px-767px)
- 4-column grid
- Column gap: 16px
- Margin: 20px sides

---

## Visual Elements

### Border Radius
```
--radius-none: 0
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-2xl: 24px
--radius-full: 9999px
```

### Shadows
```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 12px rgba(0,0,0,0.06);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.08);
--shadow-xl: 0 24px 48px rgba(0,0,0,0.12);
```

### Distinctive Elements
1. **Grid Overlay**: Subtle blueprint-style grid pattern on backgrounds
2. **Accent Lines**: Thin lime accent lines as visual connectors
3. **Number Markers**: Large, bold numbers for process steps
4. **Tech Tags**: Monospace pill badges for technologies
5. **Dot Grid Pattern**: Subtle dot matrix pattern for texture

---

## Component Patterns

### Buttons
- **Primary**: Black bg, white text, lime border on hover
- **Secondary**: Transparent, black border, lime fill on hover
- **Ghost**: Text only, underline on hover
- Height: 48px (desktop), 44px (mobile)
- Padding: 24px horizontal
- Border-radius: 4px
- Font: Space Grotesk, 500, 14px uppercase

### Cards
- Background: #FAFAF9 or #1A1A1E
- Border: 1px solid with subtle opacity
- Padding: 32px
- Border-radius: 12px
- Hover: Subtle lift + accent border

### Navigation
- Fixed header with backdrop blur
- Logo left, nav center, CTA right
- Mobile: Full-screen overlay menu

---

## Micro-Interactions

### Timing
```
--duration-fast: 150ms
--duration-base: 250ms
--duration-slow: 400ms
--duration-slower: 600ms
```

### Easing
```
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Hover Effects
- Buttons: Scale 1.02, background color shift
- Cards: translateY(-4px), shadow increase
- Links: Underline animation left-to-right
- Images: Subtle scale 1.05

### Scroll Animations
- Fade-up entrance: 30px travel, 600ms duration
- Stagger: 100ms delay between elements
- Trigger: When 20% in viewport

---

## Accessibility

### Contrast Ratios
- Text on light: #0D0D0F on #FAFAF9 = 18.7:1 (AAA)
- Text on dark: #FAFAF9 on #1A1A1E = 13.2:1 (AAA)
- Accent text: Avoid lime on white (use on dark only)

### Focus States
- Visible 2px offset outline in lime
- Never remove focus indicators

### Motion
- Respect prefers-reduced-motion
- Provide static alternatives

---

## Brand Voice in Design

### Visual Tone
- **Confident**: Bold typography, decisive layouts
- **Technical**: Grid systems, precise spacing, monospace accents
- **Innovative**: Unexpected color choices, modern interactions
- **Trustworthy**: Clean composition, professional imagery
- **Global**: Neutral imagery, international appeal

### Imagery Style
- High contrast photography
- Technical/architectural subjects
- Abstract geometric patterns
- No generic stock photos of handshakes or smiling headsets

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1440px
```

---

## Dark Mode

The site uses a dark-by-default approach for the hero and alternate sections, creating visual rhythm:
- Hero: Dark (#0D0D0F)
- Services: Light (#FAFAF9)
- Industries: Dark
- Tech Stack: Light
- Process: Dark
- Case Studies: Light
- Team: Dark
- Contact: Light with dark CTA

---

## File Organization

```
src/
  app/
    page.tsx          // Main page component
    globals.css       // Global styles + CSS variables
    layout.tsx        // Root layout
  components/
    Header.tsx
    Hero.tsx
    Services.tsx
    Industries.tsx
    TechStack.tsx
    Process.tsx
    CaseStudies.tsx
    Team.tsx
    Contact.tsx
    Footer.tsx
```
