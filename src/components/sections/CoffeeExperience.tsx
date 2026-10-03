import React from 'react';
import { Coffee, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CAFE_IMAGES } from '../../data/images';

export const CoffeeExperience: React.FC = () => {
  return (
    <Section id="coffee" background="cream" className="scroll-mt-20 border-b border-oat/70">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative Accent Background Box */}
              <div
                className="absolute -inset-4 bg-oat rounded-3xl -rotate-1.5 -z-10 shadow-xs"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="overflow-hidden rounded-2xl border border-oat/90 shadow-md aspect-[4/3] sm:aspect-[16/11] bg-oat/40">
                <img
                  src={CAFE_IMAGES.coffeeExperience.url}
                  alt={CAFE_IMAGES.coffeeExperience.alt}
                  width={900}
                  height={620}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Tag */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-cream/95 backdrop-blur-xs border border-oat p-4 rounded-2xl shadow-sm max-w-xs flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-coffee text-cream flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-serif text-sm font-bold text-espresso block leading-tight">
                    Calibrated Daily
                  </span>
                  <span className="font-sans text-xs text-espresso/70 block mt-0.5">
                    Extracted to highlight natural tasting notes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Badge
              variant="default"
              size="md"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              className="mb-4"
            >
              Specialty Coffee Bar
            </Badge>

            <SectionHeading
              eyebrow="The Coffee Experience"
              title="Single-Origin Pour-Overs &amp; Handcrafted Espresso"
              subtitle="We believe great coffee is an invitation to pause, appreciate the craft, and enjoy genuine conversations."
              className="mb-6"
            />

            <div className="space-y-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed mb-8">
              <p>
                Behind our espresso bar, coffee is approached with care and intention. Each morning begins by calibrating grind sizes, water temperatures, and extraction times to respect the natural characteristics of every roast.
              </p>
              <p>
                Whether you prefer the crisp clarity of a manual pour-over or the rich harmony of a velvety oat latte, our drink menu is crafted to deliver honest flavour and a welcoming café ritual.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 pt-4 border-t border-oat">
              <div className="flex items-center gap-3 text-sm text-espresso/85 font-sans">
                <div className="w-5 h-5 rounded-full bg-sage/20 text-[#3C4A34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Single-origin pour-overs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-espresso/85 font-sans">
                <div className="w-5 h-5 rounded-full bg-sage/20 text-[#3C4A34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Handcrafted espresso drinks</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-espresso/85 font-sans">
                <div className="w-5 h-5 rounded-full bg-sage/20 text-[#3C4A34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Silky micro-foam latte art</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-espresso/85 font-sans">
                <div className="w-5 h-5 rounded-full bg-sage/20 text-[#3C4A34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Slow-steeped cold brews</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="primary"
              size="lg"
              href="#menu"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Explore Coffee Menu
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
