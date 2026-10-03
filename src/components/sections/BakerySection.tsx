import React from 'react';
import { ArrowRight, Croissant, Sparkles, Clock } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { menuItems } from '../../data/menu';
import { CAFE_IMAGES } from '../../data/images';

export const BakerySection: React.FC = () => {
  const bakeryBites = menuItems.filter((item) => item.category === 'Bites');

  return (
    <Section id="bakery" background="oat" className="scroll-mt-20 border-b border-oat/80">
      <Container size="wide">
        {/* Intro Split: Editorial Photo & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge
              variant="default"
              size="md"
              icon={<Croissant className="w-3.5 h-3.5" />}
              className="mb-4 bg-cream text-coffee"
            >
              Morning Bakery Ovens
            </Badge>

            <SectionHeading
              eyebrow="Our Bakery"
              title="Handmade Bakes &amp; Sourdough Pastries"
              subtitle="Before dawn each morning, our bakery comes alive with the aroma of slow-fermented sourdough pastries, golden laminated croissants, and freshly baked morning treats."
              className="mb-6"
            />

            <p className="font-sans text-base sm:text-lg text-espresso/80 leading-relaxed mb-6">
              Every morning batch is prepared with honest patience and traditional technique. From sweet fruit scones to warm cinnamon brioche and nourishing avocado sourdough toast, our bakery selection is designed to perfectly accompany your morning cup.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-espresso/70 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream border border-oat">
                <Clock className="w-3.5 h-3.5 text-coffee" />
                Baked Fresh Daily from 7:00 AM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream border border-oat">
                <Sparkles className="w-3.5 h-3.5 text-sage" />
                Slow-Fermented Doughs
              </span>
            </div>

            <Button
              variant="primary"
              size="md"
              href="#menu"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              View All Bakery Items
            </Button>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3.5 bg-cream rounded-3xl rotate-1 -z-10 shadow-xs"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-2xl border border-oat shadow-md aspect-[4/3] sm:aspect-[5/4] bg-cream">
                <img
                  src={CAFE_IMAGES.bakeryHero.url}
                  alt={CAFE_IMAGES.bakeryHero.alt}
                  width={800}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Bakery Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-coffee/15 pb-3">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso">
              Daily Bakery Selection
            </h3>
            <span className="font-sans text-xs uppercase tracking-wider text-coffee font-semibold">
              5 Fresh Bakes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {bakeryBites.map((item) => (
              <a
                key={item.id}
                href="#menu"
                className="group bg-cream rounded-2xl overflow-hidden border border-oat hover:border-coffee/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full bg-oat/50 overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image.url}
                        alt={item.image.alt}
                        width={640}
                        height={440}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold tracking-wide bg-cream/90 text-coffee shadow-2xs">
                        Bake
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-serif text-base font-bold text-espresso group-hover:text-coffee transition-colors leading-snug mb-1.5">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-espresso/70 line-clamp-2 leading-relaxed">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-oat/60 flex items-center justify-between text-xs text-coffee font-medium">
                  <span className="font-sans text-[11px] text-espresso/50 italic">
                    Fresh Daily
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-150">
                    Explore
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
