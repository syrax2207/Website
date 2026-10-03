import React from 'react';
import { Coffee, Croissant, Users, Sparkles, Heart } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { CAFE_IMAGES } from '../../data/images';
import { businessData } from '../../data/business';

export const About: React.FC = () => {
  return (
    <Section id="story" background="cream" className="scroll-mt-20 border-b border-oat/70">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Brand Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge
              variant="default"
              size="md"
              icon={<Heart className="w-3.5 h-3.5" />}
              className="mb-4"
            >
              Our Philosophy &amp; Concept
            </Badge>

            <SectionHeading
              eyebrow="Our Story"
              title="A Neighbourhood Haven for Coffee &amp; Bakes"
              subtitle="Founded with a simple conviction: the best mornings start with unhurried moments, honest craft, and genuine human warmth."
              className="mb-6"
            />

            <div className="space-y-4 font-sans text-base sm:text-lg text-espresso/80 leading-relaxed mb-8">
              <p>
                {businessData.name} was envisioned by <strong className="text-espresso font-semibold">{businessData.owner}</strong> as an artisanal neighbourhood gathering spot where specialty coffee and daily scratch baking meet under one welcoming roof.
              </p>
              <p>
                We believe a great café is more than just a place to grab caffeine on the run. It is a warm third space—a sanctuary for early-morning commuters seeking a perfect flat white, remote workers seeking a comfortable sunlit corner, and neighbours coming together for unhurried weekend conversations.
              </p>
              <p>
                There are no shortcuts in our kitchen or at our brew bar. From sourcing ethical, single-origin lots to fermenting sourdough pastries through the night, our focus remains steadfastly on quality, honesty, and hospitality.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4 border-t border-oat/80">
              <div className="p-4.5 rounded-2xl bg-oat/45 border border-oat hover:border-coffee/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Coffee className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Honest Beans
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  Single-origin lots and calibrated espresso extracted to highlight natural notes.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-oat/45 border border-oat hover:border-coffee/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Croissant className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Fresh Bakes
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  Slow-fermented sourdough croissants, scones, and pastries baked each dawn.
                </p>
              </div>

              <div className="p-4.5 rounded-2xl bg-oat/45 border border-oat hover:border-coffee/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-coffee/10 text-coffee flex items-center justify-center mb-3">
                  <Users className="w-4.5 h-4.5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-espresso mb-1">
                  Warm Conversations
                </h3>
                <p className="font-sans text-xs text-espresso/70 leading-relaxed">
                  A tranquil, inclusive space welcoming neighbours, workers, and friends.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Warm decorative backdrop frame */}
              <div
                className="absolute -inset-3.5 sm:-inset-4 bg-oat rounded-3xl rotate-1 -z-10 shadow-xs"
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

              {/* Editorial Quote Card */}
              <div className="mt-5 p-5 rounded-2xl bg-oat/70 border border-oat text-center shadow-2xs">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-coffee mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Neighbourhood Ethos</span>
                </div>
                <p className="font-serif italic text-base text-espresso/90">
                  "{businessData.tagline}"
                </p>
                <span className="block font-sans text-[11px] text-espresso/60 mt-2">
                  Photo by {CAFE_IMAGES.story.photographer} (Unsplash)
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
