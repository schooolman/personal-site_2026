import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'navy' | 'cream' | 'green';
  id?: string;
  className?: string;
}

export function Section({
  children,
  background = 'navy',
  id,
  className = '',
}: SectionProps) {
  const baseStyles = 'py-20 px-4 sm:px-6 lg:px-8';

  const backgroundStyles = {
    navy: 'bg-chicago-navy',
    cream: 'bg-chicago-cream',
    green: 'bg-chicago-green',
  };

  const combinedClassName = `${baseStyles} ${backgroundStyles[background]} ${className}`.trim();

  return (
    <section id={id} className={combinedClassName}>
      {children}
    </section>
  );
}
