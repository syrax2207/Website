import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

export type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-coffee text-cream hover:bg-espresso focus-visible:ring-coffee active:bg-espresso/90 border border-transparent shadow-xs',
  secondary:
    'bg-oat text-espresso hover:bg-[#EAE0D0] focus-visible:ring-coffee active:bg-[#E2D6C3] border border-transparent',
  outline:
    'bg-transparent text-coffee border border-coffee/60 hover:bg-coffee hover:text-cream hover:border-coffee focus-visible:ring-coffee active:bg-espresso active:border-espresso',
  ghost:
    'bg-transparent text-coffee hover:bg-oat/60 hover:text-espresso focus-visible:ring-coffee active:bg-oat/90 border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5 rounded-lg min-h-[36px] gap-1.5',
  md: 'text-sm px-4.5 py-2.5 rounded-xl min-h-[44px] gap-2 font-medium',
  lg: 'text-base px-6 py-3.5 rounded-xl min-h-[48px] gap-2.5 font-medium',
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      className = '',
      ...restProps
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-sans tracking-tight leading-none cursor-pointer select-none',
      'transition-colors duration-150 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconContent = icon && (
      <span className="inline-flex shrink-0 items-center justify-center" aria-hidden="true">
        {icon}
      </span>
    );

    if (restProps.href !== undefined) {
      const { href, ...anchorProps } = restProps;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...anchorProps}
        >
          {icon && iconPosition === 'left' && iconContent}
          <span>{children}</span>
          {icon && iconPosition === 'right' && iconContent}
        </a>
      );
    }

    const { type = 'button', ...buttonProps } = restProps as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={baseClasses}
        {...buttonProps}
      >
        {icon && iconPosition === 'left' && iconContent}
        <span>{children}</span>
        {icon && iconPosition === 'right' && iconContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
