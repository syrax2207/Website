import React from 'react';
import { Coffee, Croissant, Users } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { CAFE_IMAGES } from '../../data/images';
import { businessData } from '../../data/business';

export const About: React.FC = () => {
  return (
    <Section id="story" background="cream" className="scroll-mt-20">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Warm decorative backdrop frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-oat rounded-3xl rotate-1 -z-10"
                aria-hidden="true"
              />

              {/* Main Photo Frame */}
              <div className="overflow-hidden rounded-2xl border border-oat shadow-md aspect-[4/5] bg-oat/50">
                <img
                  src={CAFE_IMAGES.story.url}
                  alt={CAFE_IMAGES.story.alt}
                  width={600}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Editorial Quote Tag */}
              <div className="mt-4 p-4 rounded-xl bg-oat/70 border border-oat text-center">
                <p className="font-serif italic text-sm text-espresso/80">
                  "Baked fresh before dawn, brewed with honest care."
                </p>
                <span className="block font-sans text-[11px] text-coffee uppercase tracking-wider mt-1 font-semibold">
                  Photo by {CAFE_IMAGES.story.photographer} (Unsplash)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Philosophy & Story */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <SectionHeading
              eyebrow="Our Story &amp; Philosophy"
              title="A Neighbourhood Haven for Coffee &amp; Bakes"
              subtitle={businessData.concept}
            />

            <div className="space-y-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed mb-8">
              <p>
                Founded by <strong className="text-espresso font-semibold">{businessData.owner}</strong>,{' '}
                {businessData.name} was envisioned as an artisanal neighbourhood gathering spot.
                We believe that the best mornings start with unhurried moments—where genuine craft
                meets the simple joy of sharing a warm table.
              </p>
              <p>
                From hand-selected, single-origin beans extracted to highlight their natural flavour profiles,
                to slow-fermented morning pastries baked fresh each day, our focus remains on honesty,
                simplicity, and craftsmanship.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 border-t border-oat/80">
              <div className="p-4 rounded-xl bg-oat/50 border border-oat/80">
                <div className="w-8 h-8 rounded-lg bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Coffee className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Honest Beans
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  Single-origin pour-overs and calibrated espresso drinks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-oat/50 border border-oat/80">
                <div className="w-8 h-8 rounded-lg bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Croissant className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Fresh Bakes
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  Artisanal sourdough croissants, scones, and morning pastries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-oat/50 border border-oat/80">
                <div className="w-8 h-8 rounded-lg bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Warm Space
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  A tranquil, welcoming atmosphere for work or conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
