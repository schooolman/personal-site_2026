import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 rounded text-sm font-medium transition-colors';

  const variantStyles = {
    primary: 'bg-chicago-green text-chicago-cream hover:bg-chicago-green/90',
    secondary: 'border border-chicago-sage/40 text-chicago-sage hover:border-chicago-sage hover:text-chicago-cream',
    outline: 'bg-chicago-navy text-chicago-cream hover:bg-chicago-navy/90',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
