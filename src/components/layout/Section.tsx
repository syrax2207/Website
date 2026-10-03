import React from 'react';

export type SectionBackground = 'cream' | 'oat' | 'espresso' | 'white';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const bgClasses: Record<SectionBackground, string> = {
  cream: 'bg-cream text-espresso',
  oat: 'bg-oat/45 text-espresso border-y border-oat/70',
  espresso: 'bg-espresso text-cream',
  white: 'bg-white text-espresso border-y border-oat/40',
};

export const Section: React.FC<SectionProps> = ({
  background = 'cream',
  children,
  className = '',
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 lg:py-24 transition-colors ${bgClasses[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
