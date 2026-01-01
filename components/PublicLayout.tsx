import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Analytics } from './Analytics';

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Analytics />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
