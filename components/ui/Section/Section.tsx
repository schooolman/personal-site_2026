import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'navy' | 'cream' | 'green';
  border?: boolean;
  id?: string;
  className?: string;
}

export function Section({
  children,
  background = 'navy',
  border = false,
  id,
  className = '',
}: SectionProps) {
  const baseStyles = 'py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8';

  const backgroundStyles = {
    navy: 'bg-black',
    cream: 'bg-black',
    green: 'bg-gradient-to-r from-black via-electric-blue/10 to-black',
  };

  const borderStyles = border ? 'border-t-4 border-white' : '';

  const combinedClassName = `${baseStyles} ${backgroundStyles[background]} ${borderStyles} ${className}`.trim();

  return (
    <section id={id} className={combinedClassName}>
      {children}
    </section>
  );
}
