import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Delkcorp LLC - Execute Growth. Align Teams. Unlock Value.',
  description: 'Delkcorp is a global consulting firm improving commercial performance through structured strategy and hands-on implementation—especially in technology and oil & gas environments.',
  openGraph: {
    title: 'Delkcorp LLC - Global Consulting Firm',
    description: 'Execute growth. Align teams. Unlock value. Operator mindset. Consulting precision. Results over theory.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Delkcorp LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delkcorp LLC - Global Consulting Firm',
    description: 'Execute growth. Align teams. Unlock value.',
  },
  keywords: ['consulting', 'sales consulting', 'procurement', 'property management', 'technology consulting', 'oil and gas'],
  authors: [{ name: 'Delkcorp LLC' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
