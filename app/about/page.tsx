'use client';

import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Card, GlassCard } from '@/components/Card';
import { CTABand } from '@/components/CTABand';
import { Accordion } from '@/components/Accordion';
import { motion } from 'framer-motion';
import { Target, Globe, Zap, CheckCircle2 } from 'lucide-react';

const faqItems = [
  {
    question: 'What industries do you serve?',
    answer: 'We primarily serve technology companies and oil & gas organizations, with deep experience in complex commercial environments. Our operator mindset and real estate asset management background inform our approach across all sectors.'
  },
  {
    question: 'What does a typical engagement look like?',
    answer: 'Most engagements follow our four-phase approach: Discovery (assess current state), Design (develop solutions), Execute (implement hands-on), and Optimize (measure and refine). Timeline varies based on scope, typically ranging from 8-24 weeks for full implementations.'
  },
  {
    question: 'Do you work globally?',
    answer: 'Yes. We maintain a global orientation and have experience across multiple regions. Our team can work remotely or on-site depending on engagement needs, and we are comfortable navigating different cultural and business contexts.'
  },
  {
    question: 'How do you ensure confidentiality?',
    answer: 'Client confidentiality is paramount. We maintain strict information security protocols, sign NDAs as standard practice, and never disclose client names or specific engagement details without explicit permission. All case examples are anonymized.'
  },
  {
    question: 'What makes Delkcorp different from other consulting firms?',
    answer: 'Our operator mindset sets us apart. We bring real-world asset operations and property management discipline to commercial consulting. This means we focus on execution, systems, and measurable outcomes—not just strategy documents. We do the work alongside you.'
  }
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Delkcorp"
        subtitle="A global consulting firm built on operator discipline, execution focus, and pragmatic commercial improvement."
      />

      {/* Mission & Operator Mindset */}
      <Section grid>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
              Mission: Execute, Don't Just Advise
            </h2>
            <div className="space-y-4 text-lg text-[rgb(var(--color-text-muted))]">
              <p>
                Delkcorp LLC helps organizations execute—faster. We modernize commercial operations, elevate sales capability, strengthen procurement performance, and manage real assets with an operator's discipline.
              </p>
              <p>
                Unlike traditional consulting firms that deliver strategies and leave, we roll up our sleeves and implement alongside you. Our operator mindset—honed through real estate asset management—brings pragmatic execution focus to every engagement.
              </p>
              <p>
                We believe results come from systems, discipline, and hands-on work. Theory without execution creates no value. That's why we measure success by the improvements you sustain after we're gone.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>
              <h3 className="text-xl font-semibold mb-6 text-[rgb(var(--color-text))]">
                The Operator Lens
              </h3>
              <p className="text-[rgb(var(--color-text-muted))] mb-6">
                Our consulting approach is informed by real-world property operations. Managing physical assets requires systems, accountability, and measurable outcomes. We apply that same discipline to your commercial challenges.
              </p>
              <ul className="space-y-3">
                {[
                  'No generic frameworks—tailored solutions',
                  'Implementation focus, not just strategy',
                  'Measurable KPIs and performance tracking',
                  'Stakeholder alignment as priority',
                  'Long-term sustainability over quick fixes'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <span className="text-[rgb(var(--color-text))]">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* How We Work */}
      <Section className="bg-[rgb(var(--color-surface))]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--color-text))]">
            How We Work
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            A structured, four-phase methodology ensuring sustainable improvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              phase: 'Discovery',
              description: 'We start by understanding your current state through stakeholder interviews, data analysis, and process observation. This isn\'t surface-level assessment—we dig into the details, identify root causes, and build a clear picture of opportunities.',
              deliverables: ['Current state assessment', 'Stakeholder map', 'Gap analysis', 'Prioritized opportunity list']
            },
            {
              phase: 'Design',
              description: 'Based on discovery insights, we develop tailored solutions: new processes, methodologies, frameworks, and systems. Every design is specific to your context, constraints, and goals. We don\'t apply generic templates.',
              deliverables: ['Solution design', 'Implementation roadmap', 'Success metrics', 'Change management plan']
            },
            {
              phase: 'Execute',
              description: 'This is where we differ from traditional consulting. We implement hands-on: build systems, train teams, run pilots, and drive adoption. We work alongside your people, ensuring the solution sticks beyond our engagement.',
              deliverables: ['Systems deployed', 'Teams trained', 'Processes adopted', 'Performance tracking live']
            },
            {
              phase: 'Optimize',
              description: 'Post-implementation, we measure performance against targets, gather feedback, and refine approaches. The goal is sustainable improvement—systems your team can own and evolve independently.',
              deliverables: ['Performance reports', 'Optimization recommendations', 'Knowledge transfer', 'Handover documentation']
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent-blue">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[rgb(var(--color-text))]">
                    {item.phase}
                  </h3>
                </div>
                <p className="text-[rgb(var(--color-text-muted))] mb-4">
                  {item.description}
                </p>
                <div className="border-t border-[rgb(var(--color-border))] pt-4">
                  <p className="text-xs uppercase tracking-wider text-[rgb(var(--color-text-muted))] mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1">
                    {item.deliverables.map((deliverable, j) => (
                      <li key={j} className="text-sm text-[rgb(var(--color-text-muted))] flex items-start gap-2">
                        <span className="text-accent-blue">→</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section grid>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[rgb(var(--color-text))]">
            Our Values
          </h2>
          <p className="text-lg text-[rgb(var(--color-text-muted))] max-w-2xl mx-auto">
            Three principles that guide every engagement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Pragmatic',
              description: 'We prioritize what works over what\'s elegant. Solutions must fit your reality—your team, culture, constraints, and capabilities. We avoid theoretical perfection in favor of practical improvement.'
            },
            {
              icon: Globe,
              title: 'Global',
              description: 'Our perspective is global, but our approach is local. We understand different markets, cultural contexts, and business environments. We adapt our methods to where you operate.'
            },
            {
              icon: Zap,
              title: 'Execution-Driven',
              description: 'Execution is everything. We measure success by implementation, not presentations. If it doesn\'t get deployed, adopted, and sustained, it didn\'t create value. We stay until it works.'
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <value.icon className="h-12 w-12 text-accent-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[rgb(var(--color-text))]">
                  {value.title}
                </h3>
                <p className="text-[rgb(var(--color-text-muted))]">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Leadership Structure */}
      <Section className="bg-[rgb(var(--color-surface))]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[rgb(var(--color-text))]">
              Leadership
            </h2>
            <p className="text-lg text-[rgb(var(--color-text-muted))] mb-8">
              Delkcorp is led by experienced operators and consultants with deep domain expertise across technology, oil & gas, and real estate sectors. Our team combines strategic advisory experience with hands-on operational backgrounds.
            </p>
            <GlassCard>
              <div className="space-y-6">
                <div className="pb-6 border-b border-[rgb(var(--color-border))]">
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-text))]">
                    Principal Consultants
                  </h3>
                  <p className="text-[rgb(var(--color-text-muted))]">
                    Seasoned professionals with 15+ years experience across sales transformation, procurement excellence, and property operations management.
                  </p>
                </div>
                <div className="pb-6 border-b border-[rgb(var(--color-border))]">
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-text))]">
                    Subject Matter Experts
                  </h3>
                  <p className="text-[rgb(var(--color-text-muted))]">
                    Specialized practitioners in sales methodology, procurement strategy, and asset management systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--color-text))]">
                    Delivery Team
                  </h3>
                  <p className="text-[rgb(var(--color-text-muted))]">
                    Implementation specialists who work hands-on with client teams to deploy solutions and drive adoption.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section grid>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[rgb(var(--color-text))]">
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
          </motion.div>
        </div>
      </Section>

      <CTABand
        title="Let's talk about your challenges"
        subtitle="Every organization has unique needs. We'd like to understand yours."
        primaryCTA={{
          text: 'Schedule a Call',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'View Services',
          href: '/services'
        }}
      />
    </>
  );
}
