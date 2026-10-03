import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  as: Component = 'h2',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 sm:mb-12 ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-coffee mb-2.5 block">
          {eyebrow}
        </span>
      )}
      <Component className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-espresso leading-tight">
        {title}
      </Component>
      {subtitle && (
        <p
          className={`font-sans text-base sm:text-lg text-espresso/80 leading-relaxed mt-3 max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
