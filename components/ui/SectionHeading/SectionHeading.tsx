import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  color?: 'navy' | 'cream' | 'lime' | 'blue';
  className?: string;
}

export function SectionHeading({
  children,
  level = 'h2',
  align = 'left',
  color = 'navy',
  className = '',
}: SectionHeadingProps) {
  const baseStyles = 'text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 tracking-tight leading-tight uppercase';

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  const colorStyles = {
    navy: 'text-white',
    cream: 'text-neon-lime',
    lime: 'text-neon-lime',
    blue: 'text-electric-blue',
  };

  const combinedClassName = `${baseStyles} ${alignStyles[align]} ${colorStyles[color]} ${className}`.trim();

  const Tag = level;

  return <Tag className={combinedClassName}>{children}</Tag>;
}
