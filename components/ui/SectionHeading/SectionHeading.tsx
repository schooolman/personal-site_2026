import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  color?: 'navy' | 'cream';
  className?: string;
}

export function SectionHeading({
  children,
  level = 'h2',
  align = 'left',
  color = 'navy',
  className = '',
}: SectionHeadingProps) {
  const baseStyles = 'text-3xl sm:text-4xl font-bold mb-12';

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  const colorStyles = {
    navy: 'text-chicago-navy',
    cream: 'text-chicago-cream',
  };

  const combinedClassName = `${baseStyles} ${alignStyles[align]} ${colorStyles[color]} ${className}`.trim();

  const Tag = level;

  return <Tag className={combinedClassName}>{children}</Tag>;
}
