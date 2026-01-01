'use client';

import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function CTABand({ title, subtitle, primaryCTA, secondaryCTA }: CTABandProps) {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-cyan/10"></div>
      <div className="absolute inset-0 grid-overlay opacity-30"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--color-text))]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-[rgb(var(--color-text-muted))] mb-8">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} size="lg">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="secondary" size="lg">
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
