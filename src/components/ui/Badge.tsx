import React from 'react';

export type BadgeVariant = 'default' | 'sage' | 'espresso' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-oat text-coffee border border-coffee/15',
  sage: 'bg-sage/20 text-[#3C4A34] border border-sage/30',
  espresso: 'bg-espresso text-cream border border-espresso',
  outline: 'bg-transparent text-coffee border border-coffee/35',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full font-medium tracking-wide',
  md: 'text-xs px-3 py-1 rounded-full font-semibold tracking-wider',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans uppercase leading-none select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
