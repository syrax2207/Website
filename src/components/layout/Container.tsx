import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'normal' | 'narrow' | 'wide' | 'full';
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
  narrow: 'max-w-4xl',
  normal: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'normal',
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
