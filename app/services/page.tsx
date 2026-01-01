'use client';

import { PublicLayout } from '@/components/PublicLayout';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { CTABand } from '@/components/CTABand';
import { Card } from '@/components/Card';
import { useState, useEffect } from 'react';
import { TrendingUp, Users, ShoppingCart, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'sales',
    icon: TrendingUp,
    title: 'Global Sales & Marketing Consulting',
    overview: 'Transform commercial performance through structured go-to-market strategies, revenue optimization, and sales process excellence.',
    capabilities: [
      'Go-to-market strategy and positioning',
      'Revenue growth planning and pipeline improvement',
      'Sales process optimization and performance rhythm',
      'Commercial execution frameworks and operating cadence',
      'Market segmentation and account planning',
      'Sales analytics and forecasting systems'
    ],
    engagement: [
      'Assess current commercial capability and performance gaps',
      'Design tailored go-to-market framework and sales process',
      'Implement systems, train teams, and drive adoption'
    ],
    idealFor: [
      'Technology companies scaling into new markets',
      'Organizations seeking pipeline predictability',
      'Teams needing structured sales methodology'
    ]
  },
  {
    id: 'training',
    icon: Users,
    title: 'Sales Training & Methodology',
    overview: 'Build sales capability through comprehensive enablement programs, methodology development, and leadership coaching.',
    capabilities: [
      'Sales enablement programs and playbooks',
      'Methodology development and rollout',
      'Sales leadership coaching',
      'Onboarding systems and performance improvement',
      'Deal coaching and opportunity management',
      'Sales competency frameworks'
    ],
    engagement: [
      'Evaluate sales team capabilities and skill gaps',
      'Develop custom methodology and training curriculum',
      'Deploy training, coach leaders, and measure impact'
    ],
    idealFor: [
      'Teams transitioning to consultative selling',
      'Organizations onboarding new sales talent',
      'Companies standardizing sales execution'
    ]
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    title: 'Global Procurement (Technology & Oil/Gas)',
    overview: 'Strengthen procurement performance through strategy, supplier engagement, and stakeholder alignment—especially in complex technology and oil & gas environments.',
    capabilities: [
      'Procurement strategy and enablement',
      'Supplier engagement and commercial alignment',
      'Stakeholder communication and procurement marketing',
      'Category support and sourcing execution',
      'Contract negotiation and vendor management',
      'Procurement process optimization'
    ],
    engagement: [
      'Analyze procurement maturity and stakeholder landscape',
      'Build procurement framework and supplier strategy',
      'Execute sourcing initiatives and measure performance'
    ],
    idealFor: [
      'Oil & gas operators managing complex supply chains',
      'Technology companies scaling procurement function',
      'Organizations improving supplier relationships'
    ]
  },
  {
    id: 'property',
    icon: Building2,
    title: 'Real Estate Property Management',
    overview: 'Optimize asset performance through disciplined property operations, tenant coordination, and long-term value management.',
    capabilities: [
      'Property operations and oversight',
      'Asset performance optimization and reporting',
      'Tenant coordination and service delivery',
      'Long-term value management and operational improvement',
      'Maintenance planning and execution',
      'Financial performance tracking'
    ],
    engagement: [
      'Evaluate current asset operations and performance',
      'Design operational improvements and management systems',
      'Implement processes, coordinate stakeholders, track value'
    ],
    idealFor: [
      'Investors seeking operational excellence',
      'Property owners optimizing asset performance',
      'Organizations managing multi-property portfolios'
    ]
  }
];

export default function Services() {
  const [activeSection, setActiveSection] = useState('sales');

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PublicLayout>
      <PageHeader
        title="Services"
        subtitle="Four pillars of consulting excellence, each delivering measurable commercial performance improvement through structured strategy and hands-on implementation."
      />

      <Section className="lg:pt-0">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sticky Navigation - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-2">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === service.id
                      ? 'bg-accent-blue/10 text-accent-blue border-l-2 border-accent-blue'
                      : 'text-[rgb(var(--color-text-muted))] hover:text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-surface))]'
                  }`}
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Service Sections */}
          <div className="lg:col-span-3 space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2 }}
                className="scroll-mt-24"
              >
                <Card>
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 text-accent-blue mb-4" />
                    <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--color-text))]">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[rgb(var(--color-text-muted))]">
                      {service.overview}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Capabilities */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--color-text))]">
                        Core Capabilities
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent-blue mt-0.5 flex-shrink-0" />
                            <span className="text-[rgb(var(--color-text-muted))]">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typical Engagement */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--color-text))]">
                        Typical Engagement
                      </h3>
                      <div className="space-y-3">
                        {service.engagement.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold text-sm">
                              {i + 1}
                            </div>
                            <p className="text-[rgb(var(--color-text-muted))] pt-1">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[rgb(var(--color-text))]">
                        Ideal For
                      </h3>
                      <ul className="space-y-2">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent-blue mt-1">→</span>
                            <span className="text-[rgb(var(--color-text-muted))]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Let's discuss your specific needs"
        subtitle="Every organization is different. We tailor our approach to your context, challenges, and goals."
        primaryCTA={{
          text: 'Schedule a Conversation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Learn About Us',
          href: '/about'
        }}
      />
    </PublicLayout>
  );
}
