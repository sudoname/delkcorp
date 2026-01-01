# Delkcorp LLC - Premium Consulting Website

A futuristic, premium consulting website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Blending Anduril's precision aesthetics with Palantir's editorial clarity.

## 🎨 Design Philosophy

**Aesthetic Target:** Anduril + Palantir Blend
- **Anduril influence:** Dark, minimal, crisp geometry, high-contrast, subtle gridlines, precision UI, restrained glow accents
- **Palantir influence:** Editorial layout, strong typographic hierarchy, clear storytelling, enterprise credibility

**Result:** Modern consulting firm with defense-tech/enterprise polish—futuristic, trustworthy, and readable.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body) + Space Grotesk (display)

## 📦 Installation

```bash
# Navigate to project directory
cd delcorp

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
delcorp/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Accordion.tsx         # Accordion/FAQ component
│   ├── Button.tsx            # Button variants
│   ├── Card.tsx              # Card & GlassCard
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── CTABand.tsx           # Call-to-action banner
│   ├── Footer.tsx            # Global footer
│   ├── Metric.tsx            # Metric display component
│   ├── Navbar.tsx            # Sticky navigation
│   ├── PageHeader.tsx        # Page header component
│   ├── Section.tsx           # Section wrapper
│   └── ThemeProvider.tsx     # Dark/light theme toggle
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore file
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎯 Pages

### Home (`/`)
- Hero section with animated gradient mesh
- Trust band with credibility statements
- Services preview (4 pillars)
- Operator mindset section
- Outcomes metrics
- Engagement model (4-phase)
- Case teasers (3 anonymized scenarios)
- Final CTA band

### Services (`/services`)
- 4 detailed service sections with sticky navigation
- Each service includes: overview, capabilities, typical engagement, ideal for
- Bottom CTA

### About (`/about`)
- Mission and operator mindset
- How we work (4-phase detailed)
- Core values (Pragmatic, Global, Execution-Driven)
- Leadership structure placeholder
- FAQ section (5 items)

### Contact (`/contact`)
- Split layout: info (left) + form (right)
- Contact details (email, phone, location)
- "Book a Call" button (placeholder link)
- Contact form with validation
- "What happens next" section

## 🎨 Design System

### Colors

**Dark Mode (Default):**
- Background: `#0a0a0b`
- Surface: `#131316`
- Surface Elevated: `#1a1a1f`
- Border: `#27272a`
- Border Light: `#3f3f46`

**Accent Colors:**
- Blue: `#3b82f6` (primary interactive)
- Cyan: `#06b6d4` (secondary accent)
- Warm: `#f59e0b` (CTAs)

### Typography

- **Body:** Inter (300, 400, 500, 600, 700)
- **Display:** Space Grotesk (400, 500, 600, 700)

**Scale:**
- Display: 5xl-7xl (48px-72px)
- Headings: 2xl-4xl (24px-48px)
- Body: base-xl (16px-20px)
- Small: sm-xs (12px-14px)

### Components

All components support dark/light theme and include:
- Reduced motion support
- Keyboard navigation
- Focus states
- ARIA labels where needed

## ⚙️ Customization

### Update Contact Information

Edit `components/Footer.tsx` and `app/contact/page.tsx`:

```tsx
// Footer.tsx
<a href="mailto:YOUR_EMAIL@domain.com">
  YOUR_EMAIL@domain.com
</a>

<a href="tel:+YOUR_PHONE">
  +YOUR_PHONE
</a>

// Contact page
const emailAddress = "YOUR_EMAIL@domain.com";
const phoneNumber = "+YOUR_PHONE";
```

### Update "Book a Call" Link

Edit all instances of Book a Call button:

```tsx
// Replace placeholder # with your calendar link
<Button href="https://calendly.com/YOUR_LINK">
  Book a Call
</Button>
```

Recommended calendar tools:
- [Calendly](https://calendly.com)
- [Cal.com](https://cal.com)
- [SavvyCal](https://savvycal.com)

### Update Copy

All copy is directly in component files. Key locations:
- **Home page:** `app/page.tsx`
- **Services:** `app/services/page.tsx` (services array)
- **About:** `app/about/page.tsx` (FAQ items, values)
- **Contact:** `app/contact/page.tsx`

### Theme Toggle

Users can toggle dark/light mode via navbar. Preference is saved to localStorage.

Default theme: **Dark mode**

To change default, edit `components/ThemeProvider.tsx`:

```tsx
const [theme, setTheme] = useState<Theme>('light'); // Change to 'light'
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect via [Vercel Dashboard](https://vercel.com).

### Other Platforms

- **Netlify:** `npm run build` → deploy `/dist`
- **AWS Amplify:** Connect Git repo
- **Cloudflare Pages:** Connect Git repo
- **Self-hosted:** `npm run build && npm start`

## 🔧 Performance

- Lighthouse score target: 95+
- No heavy libraries (Framer Motion is tree-shakeable)
- Optimized fonts with `font-display: swap`
- Images: Use Next.js `<Image>` component when adding
- Lazy loading: Components use `viewport` for scroll animations

## ♿ Accessibility

- WCAG AA contrast ratios
- Keyboard navigation support
- Focus states on all interactive elements
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels on icon-only buttons

## 📝 License

Copyright © 2024 Delkcorp LLC. All rights reserved.

## 🛠️ Development Notes

### Adding New Services

Edit `app/services/page.tsx` and add to `services` array:

```tsx
{
  id: 'new-service',
  icon: YourIcon,
  title: 'Service Title',
  overview: 'Brief description...',
  capabilities: ['Item 1', 'Item 2'],
  engagement: ['Step 1', 'Step 2'],
  idealFor: ['Target 1', 'Target 2']
}
```

### Adding FAQ Items

Edit `app/about/page.tsx` and add to `faqItems` array:

```tsx
{
  question: 'Your question?',
  answer: 'Your detailed answer...'
}
```

### Custom Animations

All animations use Framer Motion. Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📞 Support

For questions or issues, contact: **contact@delkcorp.com**

---

Built with precision. Executed with discipline. 🎯
