import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-ring rounded-md disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent-warm hover:bg-accent-warm/90 text-white shadow-lg shadow-accent-warm/20 hover:shadow-xl hover:shadow-accent-warm/30',
    secondary: 'bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-[rgb(var(--color-text))] border border-[rgb(var(--color-border))]',
    ghost: 'text-[rgb(var(--color-text))] hover:bg-white/10 dark:hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
