'use client';

import { Button } from '@/components/Button';
import { Card, GlassCard } from '@/components/Card';
import { Section } from '@/components/Section';
import { CTABand } from '@/components/CTABand';
import { Metric } from '@/components/Metric';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  Building2,
  Target,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute inset-0 noise opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-cyan/10"></div>

        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <Shield className="h-4 w-4 text-accent-blue" />
              <span className="text-sm uppercase tracking-wider text-[rgb(var(--color-text-muted))]">
                Operator Mindset
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[rgb(var(--color-text))]">
              Execute growth.<br />
              Align teams.<br />
              <span className="text-gradient">Unlock value.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-muted))] mb-12 max-w-3xl mx-auto leading-relaxed">
              Delkcorp is a global consulting firm improving commercial performance through structured strategy and hands-on implementation—especially in technology and oil & gas environments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" size="lg">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Book a Call
              </Button>
            </div>

            {/* Tagline */}
            <p className="mt-12 text-sm uppercase tracking-widest text-[rgb(var(--color-text-muted))]">
              Operator mindset · Consulting precision · Results over theory
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Band */}
      <Section className="bg-[rgb(var(--color-surface))] py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            'Execution-first consulting',
            'Commercial operating systems',
            'Sales + procurement alignment',
            'Operator mindset from real assets',
            'Global orientation',
            'Results over theory'
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-wider text-[rgb(var(--color-text-muted))]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section id="services" grid>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--color-text))]">
            Our Services
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            Four pillars of consulting excellence, delivered with operator discipline
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Global Sales & Marketing Consulting',
              description: 'Go-to-market strategy, revenue growth planning, sales process optimization, and commercial execution frameworks.',
              href: '/services#sales'
            },
            {
              icon: Users,
              title: 'Sales Training & Methodology',
              description: 'Sales enablement programs, methodology development, leadership coaching, and performance improvement systems.',
              href: '/services#training'
            },
            {
              icon: ShoppingCart,
              title: 'Global Procurement',
              description: 'Procurement strategy, supplier engagement, stakeholder alignment, and category support for technology & oil/gas.',
              href: '/services#procurement'
            },
            {
              icon: Building2,
              title: 'Real Estate Property Management',
              description: 'Property operations, asset performance optimization, tenant coordination, and long-term value management.',
              href: '/services#property'
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hover className="h-full">
                <service.icon className="h-10 w-10 text-accent-blue mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[rgb(var(--color-text))]">
                  {service.title}
                </h3>
                <p className="text-[rgb(var(--color-text-muted))] mb-4">
                  {service.description}
                </p>
                <a href={service.href} className="text-accent-blue hover:text-accent-cyan transition-colors inline-flex items-center gap-2 text-sm font-medium">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Operator Mindset Section */}
      <Section className="bg-[rgb(var(--color-surface))]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
              Operator Mindset
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-muted))] mb-6">
              Our consulting approach is informed by real-world asset operations and property management experience. This operator lens brings pragmatic discipline to every engagement.
            </p>
            <p className="text-lg text-[rgb(var(--color-text-muted))]">
              We don't just advise—we execute alongside you, applying the same rigor and accountability we use managing physical assets to your commercial operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="text-xl font-semibold mb-6 text-[rgb(var(--color-text))]">
                Core Principles
              </h3>
              <ul className="space-y-4">
                {[
                  'Execution over theory',
                  'Measurable outcomes first',
                  'Systems-driven approach',
                  'Stakeholder alignment',
                  'Long-term value creation',
                  'Operational discipline'
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span className="text-[rgb(var(--color-text))]">{principle}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Outcomes Section */}
      <Section grid>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--color-text))]">
            Outcomes We Drive
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            Tangible improvements in commercial performance and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Metric
            icon={Target}
            title="Pipeline Predictability"
            description="Structured forecasting and deal management"
          />
          <Metric
            icon={Zap}
            title="Cycle-Time Reduction"
            description="Faster decision-making and execution"
          />
          <Metric
            icon={TrendingUp}
            title="Execution Cadence"
            description="Consistent delivery rhythm"
          />
          <Metric
            icon={Users}
            title="Supplier Alignment"
            description="Better stakeholder coordination"
          />
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            'Stronger revenue execution and sales discipline',
            'Better pipeline performance and predictable growth',
            'Procurement programs that align stakeholders and suppliers',
            'Operational efficiency and long-term value creation in real estate assets'
          ].map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="h-6 w-6 text-accent-blue mt-0.5 flex-shrink-0" />
              <p className="text-lg text-[rgb(var(--color-text))]">{outcome}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Engagement Model */}
      <Section className="bg-[rgb(var(--color-surface))]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--color-text))]">
            How We Engage
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            A structured, four-phase approach to sustainable improvement
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              number: '01',
              title: 'Discovery',
              description: 'Understand current state, challenges, and opportunities through stakeholder engagement and data analysis.'
            },
            {
              number: '02',
              title: 'Design',
              description: 'Develop tailored solutions, frameworks, and implementation roadmaps aligned with your goals.'
            },
            {
              number: '03',
              title: 'Execute',
              description: 'Deploy solutions hands-on, build capabilities, and drive adoption across the organization.'
            },
            {
              number: '04',
              title: 'Optimize',
              description: 'Measure performance, refine approaches, and ensure sustainable long-term value.'
            }
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative">
                <div className="text-6xl font-bold text-accent-blue/20 mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[rgb(var(--color-text))]">
                  {phase.title}
                </h3>
                <p className="text-[rgb(var(--color-text-muted))]">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Case Teasers */}
      <Section grid>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--color-text))]">
            Selected Engagements
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            Real challenges. Practical solutions. Measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              challenge: 'Go-to-market reset for a multi-region tech provider',
              approach: 'Redesigned commercial structure, built new sales methodology, implemented performance management system.',
              outcome: 'Stronger pipeline discipline, improved forecast accuracy, faster sales cycles.'
            },
            {
              challenge: 'Procurement enablement for complex stakeholder environments',
              approach: 'Developed procurement framework, aligned internal stakeholders, improved supplier engagement process.',
              outcome: 'Better category visibility, enhanced stakeholder communication, streamlined sourcing.'
            },
            {
              challenge: 'Operational uplift for a real estate asset portfolio',
              approach: 'Implemented asset management system, optimized maintenance processes, improved tenant coordination.',
              outcome: 'Reduced operational costs, better asset performance tracking, higher tenant satisfaction.'
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-accent-blue mb-2">
                      Challenge
                    </h4>
                    <p className="text-[rgb(var(--color-text))] font-semibold">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-accent-blue mb-2">
                      Approach
                    </h4>
                    <p className="text-[rgb(var(--color-text-muted))] text-sm">
                      {project.approach}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-accent-blue mb-2">
                      Outcome
                    </h4>
                    <p className="text-[rgb(var(--color-text-muted))] text-sm">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <CTABand
        title="Ready to improve execution and performance?"
        subtitle="Let's discuss how we can help your organization execute better."
        primaryCTA={{
          text: 'Book a Call',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Explore Services',
          href: '/services'
        }}
      />
    </>
  );
}
