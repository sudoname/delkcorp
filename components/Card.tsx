import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]',
        hover && 'transition-all duration-300 hover:border-accent-blue/50 hover:shadow-lg hover:shadow-accent-blue/5 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg glass backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
