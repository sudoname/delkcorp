# Delkcorp Design System

## 🎨 Visual Identity

### Brand Positioning
**Aesthetic:** Anduril + Palantir Blend
- Precision, restraint, technical excellence
- Dark, minimal, futuristic yet trustworthy
- Enterprise-grade polish with operator discipline

### Brand Personality
- **Confident** but not arrogant
- **Technical** but accessible
- **Premium** but pragmatic
- **Global** but grounded

---

## 🌈 Color Palette

### Dark Theme (Primary)

**Base Colors:**
```
Background:         #0a0a0b  (rgb(10, 10, 11))
Surface:            #131316  (rgb(19, 19, 22))
Surface Elevated:   #1a1a1f  (rgb(26, 26, 31))
Border:             #27272a  (rgb(39, 39, 42))
Border Light:       #3f3f46  (rgb(63, 63, 70))
```

**Text Colors:**
```
Primary Text:       #f9fafb  (rgb(249, 250, 251))
Muted Text:         #9ca3af  (rgb(156, 163, 175))
```

### Light Theme (Optional)

**Base Colors:**
```
Background:         #ffffff  (rgb(255, 255, 255))
Surface:            #f8f9fa  (rgb(248, 249, 250))
Surface Elevated:   #f1f3f5  (rgb(241, 243, 245))
Border:             #e5e7eb  (rgb(229, 231, 235))
Border Light:       #d1d5db  (rgb(209, 213, 219))
```

**Text Colors:**
```
Primary Text:       #111827  (rgb(17, 24, 39))
Muted Text:         #6b7280  (rgb(107, 114, 128))
```

### Accent Colors

**Primary Accent (Blue):**
```
Main:               #3b82f6  (rgb(59, 130, 246))
Usage:              Links, interactive elements, highlights
```

**Secondary Accent (Cyan):**
```
Main:               #06b6d4  (rgb(6, 182, 212))
Usage:              Gradients, secondary highlights
```

**Warm Accent (Amber):**
```
Main:               #f59e0b  (rgb(245, 158, 11))
Usage:              Primary CTAs only
```

### Semantic Colors

**Success:**  `#10b981` (Green)
**Warning:**  `#f59e0b` (Amber)
**Error:**    `#ef4444` (Red)
**Info:**     `#3b82f6` (Blue)

---

## ✍️ Typography

### Font Families

**Body Font:** Inter
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
Weights: 300, 400, 500, 600, 700
```

**Display Font:** Space Grotesk
```css
font-family: 'Space Grotesk', system-ui, sans-serif;
Weights: 400, 500, 600, 700
Usage: Headlines, section titles
```

### Type Scale

**Display (Space Grotesk):**
```
7xl:  72px / 1.0    (Hero headlines)
6xl:  60px / 1.0    (Page titles)
5xl:  48px / 1.1    (Major sections)
4xl:  36px / 1.1    (Section headers)
3xl:  30px / 1.2    (Subsections)
2xl:  24px / 1.3    (Card titles)
```

**Body (Inter):**
```
xl:   20px / 1.6    (Lead paragraphs)
lg:   18px / 1.6    (Large body)
base: 16px / 1.6    (Standard body)
sm:   14px / 1.5    (Small text)
xs:   12px / 1.4    (Fine print)
```

### Text Styles

**Uppercase Labels:**
```
font-size: 12px
letter-spacing: 0.1em
text-transform: uppercase
font-weight: 500
```

**Gradient Text:**
```css
.text-gradient {
  background: linear-gradient(to right, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 📐 Spacing System

**Base Unit:** 4px

**Scale:**
```
1:  4px
2:  8px
3:  12px
4:  16px
5:  20px
6:  24px
8:  32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
32: 128px
```

**Section Padding:**
```
Mobile:   py-16  (64px)
Tablet:   py-24  (96px)
Desktop:  py-32  (128px)
```

**Container:**
```
max-width: 1280px (7xl)
padding-x: 24px mobile, 32px tablet, 48px desktop
```

---

## 🎯 Components

### Buttons

**Primary (Warm CTA):**
```css
background: #f59e0b
color: white
shadow: lg with amber glow
hover: brightness(90%), shadow-xl
```

**Secondary:**
```css
background: white/10 (dark) or white/5
border: 1px solid border color
color: text color
hover: white/20 background
```

**Ghost:**
```css
background: transparent
color: text color
hover: white/10 background
```

**Sizes:**
```
sm:  px-4 py-2 text-sm
md:  px-6 py-3 text-base
lg:  px-8 py-4 text-lg
```

### Cards

**Standard Card:**
```css
padding: 24px
border: 1px solid border color
background: surface color
border-radius: 8px
```

**Glass Card:**
```css
backdrop-filter: blur(24px)
background: white/5
border: 1px solid white/10
border-radius: 8px
```

**Hover State:**
```css
transition: all 300ms
hover: {
  border-color: blue/50
  box-shadow: 0 20px 25px blue/5
  transform: translateY(-4px)
}
```

### Inputs

**Text Input / Textarea:**
```css
padding: 12px 16px
border: 1px solid border color
background: surface color
border-radius: 8px
focus: ring-2 ring-blue/50, ring-offset-2
```

**Select:**
```css
Same as text input
Includes dropdown arrow
```

---

## ✨ Effects

### Grid Overlay
```css
background-image:
  linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

### Noise Texture
```css
/* Very subtle SVG noise filter */
opacity: 0.03
```

### Glass Effect
```css
backdrop-filter: blur(24px)
background: white/5
border: 1px solid white/10
```

### Hairline Divider
```css
height: 1px
background: linear-gradient(
  to right,
  transparent,
  border-color,
  transparent
)
```

---

## 🎬 Animations

### Duration
```
Fast:    200ms  (micro-interactions)
Normal:  300ms  (hover states)
Slow:    600ms  (page transitions)
```

### Easing
```
ease-out:  Entering elements
ease-in:   Exiting elements
ease:      General transitions
```

### Patterns

**Fade In:**
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

**Slide Up:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Stagger Children:**
```tsx
transition={{ delay: index * 0.1 }}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔍 Focus States

**All Interactive Elements:**
```css
focus: {
  outline: none
  ring: 2px blue/50
  ring-offset: 2px background color
}
```

---

## 📱 Responsive Breakpoints

```
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Small laptops)
xl:  1280px  (Desktops)
2xl: 1536px  (Large screens)
```

### Mobile-First Approach
```
Base styles:    Mobile (< 640px)
sm: and up:     Tablet adjustments
md: and up:     Desktop adjustments
lg: and up:     Wide desktop
```

---

## ♿ Accessibility

### Contrast Ratios (WCAG AA)
```
Normal Text:  4.5:1 minimum
Large Text:   3:1 minimum
UI Elements:  3:1 minimum
```

### Focus Management
- Visible focus indicators on all interactive elements
- Skip to content link (optional)
- Keyboard navigation support
- Focus trap in modals/drawers

### Semantic HTML
```html
<header>   Navigation
<main>     Primary content
<section>  Content sections
<article>  Independent content
<aside>    Supplementary content
<footer>   Site footer
```

### ARIA Labels
```html
<button aria-label="Toggle theme">
  <Sun className="h-5 w-5" />
</button>
```

---

## 🎯 Layout Principles

### Whitespace
- Generous whitespace = premium feel
- Minimum 64px between major sections (mobile)
- Minimum 96px between major sections (desktop)

### Alignment
- Everything on 4px grid
- Text left-aligned (not centered) except hero/CTAs
- Cards align to baseline grid

### Hierarchy
1. **Hero/Display** (largest, boldest)
2. **Section Headers** (Space Grotesk, large)
3. **Subsections** (Space Grotesk, medium)
4. **Body** (Inter, readable)
5. **Meta** (uppercase labels, small)

### Information Density
- Keep it minimal
- One primary message per section
- Break complex info into smaller cards
- Use progressive disclosure (accordions)

---

## 🚀 Performance Guidelines

### Animations
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Add `will-change` sparingly for heavy animations

### Images
- Use Next.js `<Image>` component
- Lazy load below-fold images
- Provide width/height to prevent layout shift
- Use WebP format where supported

### Fonts
- Preload critical fonts
- Use `font-display: swap`
- Subset fonts if possible

---

## 📋 Component Checklist

When creating new components, ensure:

- [ ] Dark + Light theme support
- [ ] Responsive (mobile-first)
- [ ] Keyboard accessible
- [ ] Focus states visible
- [ ] Reduced motion support
- [ ] TypeScript types
- [ ] Proper semantic HTML
- [ ] ARIA labels where needed
- [ ] Hover states
- [ ] Loading states (if applicable)

---

## 🎨 Brand Voice

### Tone
- **Confident** - We know what we're doing
- **Direct** - No fluff or buzzwords
- **Professional** - But not stuffy
- **Action-oriented** - Execute, improve, deliver

### Language
- Use active voice: "We execute" not "Execution is provided"
- Be specific: "3-week discovery" not "Brief assessment"
- Avoid jargon: "Sales process" not "Revenue enablement framework"
- Short sentences preferred
- Results over features

### Copy Patterns

**Headlines:**
```
Action Verb + Outcome
"Execute growth. Align teams. Unlock value."
```

**Descriptions:**
```
What + How + Why
"Transform sales [what] through structured processes [how] to drive predictable revenue [why]."
```

**CTAs:**
```
Clear action + Benefit/Outcome
"Schedule a Call" (not "Contact Us")
"Book Discovery Call" (not "Get in Touch")
```

---

Built with precision. Executed with discipline. 🎯
