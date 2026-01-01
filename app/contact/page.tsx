'use client';

import { useEffect, useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/Button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    email: 'contact@delkcorp.com',
    phone: '+1 (234) 567-890',
    location: 'Global',
  });

  useEffect(() => {
    fetch('/api/contact-info')
      .then((res) => res.json())
      .then((data) => {
        setContactInfo({
          email: data.email || contactInfo.email,
          phone: data.phone || contactInfo.phone,
          location: data.location || contactInfo.location,
        });
      })
      .catch((error) => console.error('Failed to fetch contact info:', error));
  }, []);

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to improve execution and commercial performance? Let's start a conversation."
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text))]">
                  Let's Discuss Your Needs
                </h2>
                <p className="text-lg text-[rgb(var(--color-text-muted))] mb-6">
                  Whether you need sales transformation, procurement enablement, or operational improvement, we're here to help.
                </p>
                <p className="text-[rgb(var(--color-text-muted))]">
                  Fill out the form or reach out directly. We typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/10">
                    <Mail className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-muted))] mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-[rgb(var(--color-text))] hover:text-accent-blue transition-colors font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/10">
                    <Phone className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-muted))] mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                      className="text-[rgb(var(--color-text))] hover:text-accent-blue transition-colors font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/10">
                    <MapPin className="h-5 w-5 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-[rgb(var(--color-text-muted))] mb-1">
                      Global Presence
                    </p>
                    <p className="text-[rgb(var(--color-text))] font-medium">
                      {contactInfo.location}
                    </p>
                    <p className="text-sm text-[rgb(var(--color-text-muted))] mt-1">
                      Remote & on-site engagements
                    </p>
                  </div>
                </div>
              </div>

              {/* Book a Call CTA */}
              <div className="pt-6 border-t border-[rgb(var(--color-border))]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent-warm/10">
                    <Calendar className="h-5 w-5 text-accent-warm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[rgb(var(--color-text))] mb-1">
                      Prefer to Schedule Directly?
                    </h3>
                    <p className="text-sm text-[rgb(var(--color-text-muted))] mb-3">
                      Book a 30-minute discovery call to discuss your needs.
                    </p>
                    <Button
                      href="#"
                      variant="secondary"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Calendar link would open here. Please integrate with your preferred scheduling tool (Calendly, Cal.com, etc.)');
                      }}
                    >
                      Book a Call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden border border-[rgb(var(--color-border))]">
                <div className="aspect-video bg-[rgb(var(--color-surface))] flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-[rgb(var(--color-text-muted))] mx-auto mb-4" />
                    <p className="text-[rgb(var(--color-text-muted))]">
                      Global Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-[rgb(var(--color-surface))] rounded-lg p-8 border border-[rgb(var(--color-border))]">
              <h3 className="text-2xl font-bold mb-6 text-[rgb(var(--color-text))]">
                Send us a Message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Additional Info Banner */}
      <Section className="bg-[rgb(var(--color-surface))] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[rgb(var(--color-text))]">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  step: '1',
                  title: 'We Review Your Inquiry',
                  description: 'Our team reviews your message and identifies the right expertise for your needs.'
                },
                {
                  step: '2',
                  title: 'Discovery Conversation',
                  description: 'We schedule a call to understand your challenges, goals, and current state.'
                },
                {
                  step: '3',
                  title: 'Tailored Proposal',
                  description: 'If there\'s a fit, we develop a specific engagement proposal with scope and approach.'
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[rgb(var(--color-text))] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--color-text-muted))]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
