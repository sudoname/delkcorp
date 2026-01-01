import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  className?: string;
}

export function Metric({ icon: Icon, title, description, className }: MetricProps) {
  return (
    <div className={cn('flex flex-col items-center text-center p-6', className)}>
      {Icon && (
        <div className="mb-4 p-3 rounded-lg bg-accent-blue/10 text-accent-blue">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2 text-[rgb(var(--color-text))]">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-[rgb(var(--color-text-muted))]">
          {description}
        </p>
      )}
    </div>
  );
}
