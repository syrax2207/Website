import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { CAFE_IMAGES } from '../../data/images';

export const Showcase: React.FC = () => {
  return (
    <Section id="showcase" background="cream" className="scroll-mt-20">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow="Visual Journal"
          title="Moments &amp; Daily Craft"
          subtitle="A glimpse into our morning atmosphere, specialty brewing methods, and artisanal bakery creations."
        />

        {/* Editorial Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAFE_IMAGES.showcase.map((item) => (
            <figure
              key={item.id}
              className="group flex flex-col bg-white/70 rounded-2xl overflow-hidden border border-oat hover:border-coffee/30 hover:shadow-sm transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-oat/40">
                <img
                  src={item.url}
                  alt={item.alt}
                  width={600}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-cream/90 backdrop-blur-xs text-coffee px-2.5 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase border border-oat/70 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-coffee" aria-hidden="true" />
                  <span>Craft</span>
                </div>
              </div>

              <figcaption className="p-4 flex-1 flex flex-col justify-between">
                <p className="font-serif text-sm font-semibold text-espresso mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-[11px] text-espresso/60 pt-2 border-t border-oat/60 font-sans">
                  <span>Photo: {item.photographer}</span>
                  <span className="italic">Unsplash</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Editorial Transparency Note */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-espresso/65 leading-relaxed bg-oat/50 py-3 px-5 rounded-xl border border-oat inline-flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-coffee shrink-0" aria-hidden="true" />
            <span>
              Editorial imagery illustrative of our coffee and bakery craft. Official venue photography will debut at our grand opening.
            </span>
          </p>
        </div>
      </Container>
    </Section>
  );
};
