# Delkcorp Customization Guide

Quick reference for customizing the Delkcorp website for your needs.

## 🔧 Essential Customizations

### 1. Contact Information

**Email Address**
Update in these files:
- `components/Footer.tsx` (line ~53)
- `app/contact/page.tsx` (line ~53)

```tsx
// Change from:
contact@delkcorp.com

// To:
your-email@yourdomain.com
```

**Phone Number**
Update in these files:
- `components/Footer.tsx` (line ~60)
- `app/contact/page.tsx` (line ~65)

```tsx
// Change from:
+1 (234) 567-890

// To:
+1 (XXX) XXX-XXXX
```

**LinkedIn URL**
Update in:
- `components/Footer.tsx` (line ~67)

```tsx
// Change href="#" to your actual LinkedIn URL:
href="https://linkedin.com/company/your-company"
```

---

### 2. "Book a Call" Calendar Link

**Where to Update:**
Search for "Book a Call" button instances:
- `app/page.tsx` (Hero section)
- `app/contact/page.tsx` (Calendar CTA)
- All CTABand components

```tsx
// Current (placeholder):
<Button href="#" ...>

// Update to your calendar tool:
<Button href="https://calendly.com/YOUR_LINK" ...>
```

**Recommended Calendar Tools:**
- [Calendly](https://calendly.com) - Popular, easy to use
- [Cal.com](https://cal.com) - Open source alternative
- [SavvyCal](https://savvycal.com) - Premium features

---

### 3. Company Name & Branding

**Logo/Brand Name**
Update in:
- `components/Navbar.tsx` (line ~46)
- `components/Footer.tsx` (line ~13)
- `app/layout.tsx` (metadata)

```tsx
// Navbar
<Link href="/" ...>
  DELKCORP  // Change to YOUR COMPANY
</Link>

// Footer
<h3 ...>
  DELKCORP  // Change to YOUR COMPANY
</h3>
```

**Metadata (SEO)**
Update in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'YOUR COMPANY - Tagline',
  description: 'Your company description...',
  openGraph: {
    title: 'YOUR COMPANY',
    description: 'Your description...',
    siteName: 'YOUR COMPANY',
  },
  // ... update other fields
};
```

---

### 4. Domain & Deployment

**Update Links**
After deploying, update:
- Social sharing URLs in metadata
- Any internal references to domain
- Sitemap (if generated)

**Environment Variables (if needed)**
Create `.env.local` for sensitive data:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics (optional)
```

---

## ✏️ Content Customization

### Home Page Copy

Edit `app/page.tsx`:

**Hero Headline** (line ~59-64)
```tsx
<h1 ...>
  Your headline here<br />
  Second line<br />
  <span className="text-gradient">Highlighted</span>
</h1>
```

**Subheadline** (line ~67-71)
```tsx
<p ...>
  Your company description and value proposition...
</p>
```

**Trust Band** (line ~91-102)
Update the 6 credibility statements to match your brand.

---

### Services

Edit `app/services/page.tsx`:

Update the `services` array (starting line ~13) with your actual services:

```tsx
const services = [
  {
    id: 'your-service-1',
    icon: YourIcon,  // Import from lucide-react
    title: 'Your Service Name',
    overview: 'Service description...',
    capabilities: [
      'Capability 1',
      'Capability 2',
      // ...
    ],
    engagement: [
      'Step 1',
      'Step 2',
      'Step 3'
    ],
    idealFor: [
      'Target audience 1',
      'Target audience 2',
      'Target audience 3'
    ]
  },
  // Add more services...
];
```

---

### About Page

Edit `app/about/page.tsx`:

**Mission Statement** (line ~39-56)
Update the three paragraphs describing your mission.

**Values** (line ~144-171)
Update the 3 values cards:
```tsx
{
  icon: YourIcon,
  title: 'Value Name',
  description: 'Value description...'
}
```

**FAQ Items** (line ~13-32)
Update questions and answers:
```tsx
const faqItems = [
  {
    question: 'Your question?',
    answer: 'Your detailed answer...'
  },
  // Add more FAQs...
];
```

---

### Contact Form

The form in `components/ContactForm.tsx` currently simulates submission.

**To Connect Real Form:**

Option 1: **Email Service (Simple)**
```tsx
// Install: npm install @sendgrid/mail
// Or use: Resend, Postmark, AWS SES

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  // Handle response...
};
```

Option 2: **Form Service (No Backend)**
- [Formspree](https://formspree.io)
- [Formspark](https://formspark.io)
- [Web3Forms](https://web3forms.com)

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* Your form fields */}
</form>
```

Option 3: **Create API Route**
Create `app/api/contact/route.ts`:

```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Send email, save to DB, etc.

  return NextResponse.json({ success: true });
}
```

---

## 🎨 Visual Customization

### Colors

Edit `tailwind.config.ts`:

```tsx
colors: {
  accent: {
    blue: '#3b82f6',   // Change to your brand blue
    cyan: '#06b6d4',   // Change to your brand cyan
    warm: '#f59e0b',   // Change to your CTA color
  },
}
```

Test colors at: [Coolors](https://coolors.co) or [Paletton](https://paletton.com)

### Fonts

Current: Inter (body) + Space Grotesk (display)

To change, edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Then update `tailwind.config.ts`:

```tsx
fontFamily: {
  sans: ['YOUR BODY FONT', 'system-ui', 'sans-serif'],
  display: ['YOUR DISPLAY FONT', 'system-ui', 'sans-serif'],
}
```

### Logo

To add an actual logo image:

1. Place logo in `public/` folder
2. Update Navbar:

```tsx
import Image from 'next/image';

<Link href="/" className="flex items-center">
  <Image
    src="/logo.svg"
    alt="Company Logo"
    width={140}
    height={40}
  />
</Link>
```

---

## 📊 Analytics

### Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Plausible Analytics (Privacy-Friendly)

Add to `app/layout.tsx`:

```tsx
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🚀 Performance Tips

### Images
- Use Next.js `<Image>` component
- Optimize images before upload (TinyPNG, Squoosh)
- Use WebP format

### Fonts
- Already optimized with `font-display: swap`
- Consider font subsetting for production

### Lazy Loading
- Components already use `viewport` for scroll animations
- Heavy components can be lazy-loaded:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

---

## 🔐 Security

### Environment Variables

Never commit sensitive data. Use `.env.local`:

```bash
# .env.local (git ignored)
SENDGRID_API_KEY=your_key_here
DATABASE_URL=your_database_url
```

Access in code:
```tsx
const apiKey = process.env.SENDGRID_API_KEY;
```

### Headers

Add security headers in `next.config.js`:

```js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};
```

---

## ✅ Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Connect calendar booking link
- [ ] Set up contact form backend
- [ ] Update company name and branding
- [ ] Customize all copy (Home, Services, About)
- [ ] Update FAQ items
- [ ] Add real logo (if applicable)
- [ ] Configure analytics
- [ ] Test on mobile devices
- [ ] Test all forms
- [ ] Test dark/light theme toggle
- [ ] Check all links work
- [ ] Review SEO metadata
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Test site speed (Lighthouse)
- [ ] Check accessibility (WAVE, axe)

---

## 📞 Need Help?

For complex customizations, consider:
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion)

---

Happy customizing! 🚀
