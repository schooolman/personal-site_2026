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
  const baseStyles = 'inline-block px-5 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105';

  const variantStyles = {
    primary: 'bg-neon-lime text-black hover:bg-electric-blue hover:text-white border-2 border-transparent',
    secondary: 'bg-black border-2 border-white text-white hover:bg-electric-blue hover:border-electric-blue',
    outline: 'bg-transparent border-2 border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-black',
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
