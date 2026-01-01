import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  grid?: boolean;
}

export function Section({ children, className, id, grid = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding relative',
        grid && 'grid-overlay',
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
