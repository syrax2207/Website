import React from 'react';
import { Coffee, Heart } from 'lucide-react';
import { Container } from './Container';
import { NAV_ITEMS } from './Navbar';
import { businessData } from '../../data/business';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-espresso text-cream py-14 sm:py-16 border-t border-coffee/30">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/15">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-coffee flex items-center justify-center text-cream">
                <Coffee className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-cream block leading-tight">
                  {businessData.name}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-oat/70 block">
                  Artisanal Coffee &amp; Bakery
                </span>
              </div>
            </div>

            <p className="font-serif text-sm italic text-oat/90 max-w-sm">
              "{businessData.tagline}"
            </p>

            <p className="font-sans text-xs text-oat/70 leading-relaxed max-w-sm">
              Single-origin pour-overs, handcrafted espresso drinks, and slow-fermented morning pastries baked fresh each day.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-cream">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5" aria-label="Footer navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-oat/80 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-xs inline-block"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Hours & Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-semibold text-cream">
              Hours &amp; Inquiries
            </h4>
            <div className="space-y-1.5 font-sans text-xs text-oat/80">
              {businessData.schedule.map((slot) => (
                <div key={slot.days} className="flex justify-between max-w-xs">
                  <span className="text-oat/70">{slot.days}:</span>
                  <span className="text-cream font-medium">{slot.hours}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-cream/10 space-y-1 font-sans text-xs text-oat/70">
              <p>Email: <span className="text-cream">{businessData.contact.email}</span></p>
              <p className="text-[11px] text-oat/50 italic pt-1">
                * Location and contact details pending verified grand opening.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-oat/60 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-oat/50">
            <span>Crafted with care for neighbourhood mornings</span>
            <Heart className="w-3.5 h-3.5 text-sage fill-sage" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </footer>
  );
};
