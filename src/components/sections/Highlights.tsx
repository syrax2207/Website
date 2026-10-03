import React from 'react';
import { Coffee, Cookie, Sun } from 'lucide-react';
import { Container } from '../layout/Container';

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HIGHLIGHTS: readonly HighlightItem[] = [
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Quality Coffee',
    description:
      'Single-origin pour-overs and carefully calibrated espresso drinks crafted to highlight natural tasting notes.',
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    title: 'Freshly Baked',
    description:
      'Handmade sourdough croissants, delicate scones, and morning pastries baked fresh each day.',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'A Welcoming Space',
    description:
      'Warm natural light, comfortable seating, and an uncluttered neighbourhood atmosphere for work or conversation.',
  },
] as const;

export const Highlights: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 bg-cream border-b border-oat/70"
      aria-label="Core café experiences"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="bg-cream rounded-2xl p-6 sm:p-7 border border-oat hover:border-coffee/30 hover:shadow-xs transition-all duration-200 flex flex-col items-start"
            >
              <div
                className="w-12 h-12 rounded-xl bg-oat flex items-center justify-center text-coffee mb-5 shrink-0"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-espresso mb-2.5">
                {item.title}
              </h2>

              <p className="font-sans text-sm sm:text-base text-espresso/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
