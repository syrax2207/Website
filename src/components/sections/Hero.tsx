import React from 'react';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CAFE_IMAGES } from '../../data/images';
import { businessData } from '../../data/business';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-cream pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-oat/70 overflow-hidden scroll-mt-20"
      aria-label="Welcome to Bean & Bite"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Badge
              variant="default"
              size="md"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              className="mb-5 shadow-xs"
            >
              Artisanal Coffee &amp; Bakery
            </Badge>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso leading-[1.12] mb-5">
              Good Coffee. Fresh Bites. Better Mornings.
            </h1>

            <p className="font-serif text-lg sm:text-xl text-coffee italic mb-4">
              "{businessData.tagline}"
            </p>

            <p className="font-sans text-base sm:text-lg text-espresso/80 leading-relaxed max-w-xl mb-8">
              A neighbourhood gathering spot specialising in single-origin pour-over coffees,
              handcrafted espresso drinks, and freshly baked sourdough pastries and cakes each morning.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#menu"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore Our Menu
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#story"
                className="w-full sm:w-auto"
              >
                Our Story
              </Button>
            </div>

            {/* Small Trust / Atmosphere Markers */}
            <div className="mt-10 pt-6 border-t border-oat/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-espresso/70 font-sans">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage" aria-hidden="true" />
                <span>Single-origin pour-overs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-coffee" aria-hidden="true" />
                <span>Slow-fermented bakes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sage" aria-hidden="true" />
                <span>Neighbourhood atmosphere</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative warm backdrop shape */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-oat rounded-3xl -rotate-1 -z-10"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="overflow-hidden rounded-2xl border border-oat/80 shadow-md aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] bg-oat/40">
                <img
                  src={CAFE_IMAGES.hero.url}
                  alt={CAFE_IMAGES.hero.alt}
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-cream/95 backdrop-blur-xs border border-oat p-3.5 sm:p-4 rounded-2xl shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-oat flex items-center justify-center text-coffee">
                  <Coffee className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-serif text-xs sm:text-sm font-bold text-espresso block leading-tight">
                    Fresh Bakes Daily
                  </span>
                  <span className="font-sans text-[11px] text-espresso/70 block">
                    Served from 7:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
