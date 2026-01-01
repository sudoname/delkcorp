'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[rgb(var(--color-text))]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-muted))] max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
