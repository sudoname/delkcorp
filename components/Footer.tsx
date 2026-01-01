'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [contactInfo, setContactInfo] = useState({
    email: 'contact@delkcorp.com',
    phone: '+1 (234) 567-890',
    linkedin: '#',
  });

  useEffect(() => {
    fetch('/api/contact-info')
      .then((res) => res.json())
      .then((data) => {
        setContactInfo({
          email: data.email || contactInfo.email,
          phone: data.phone || contactInfo.phone,
          linkedin: data.linkedin || contactInfo.linkedin,
        });
      })
      .catch((error) => console.error('Failed to fetch contact info:', error));
  }, []);

  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4 text-[rgb(var(--color-text))]">
              DELKCORP
            </h3>
            <p className="text-sm text-[rgb(var(--color-text-muted))]">
              Execute growth. Align teams. Unlock value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--color-text))] text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--color-text))] text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#sales" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Sales & Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Sales Training
                </Link>
              </li>
              <li>
                <Link href="/services#procurement" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Procurement
                </Link>
              </li>
              <li>
                <Link href="/services#property" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[rgb(var(--color-text))] text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-muted))]">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent-blue transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-muted))]">
                <Phone className="h-4 w-4" />
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="hover:text-accent-blue transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[rgb(var(--color-text-muted))]">
                <Linkedin className="h-4 w-4" />
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgb(var(--color-border))]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[rgb(var(--color-text-muted))]">
              &copy; {currentYear} Delkcorp LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-[rgb(var(--color-text-muted))] hover:text-accent-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-[rgb(var(--color-text-muted))]">
              Built with ❤️ by <a href="https://khaninnovations.com" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:text-accent-cyan transition-colors">Khan Innovations</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
