interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = '' }: SkillBadgeProps) {
  const baseStyles = 'bg-black border-2 sm:border-4 border-white px-3 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm text-white font-bold text-center hover:bg-electric-blue hover:border-electric-blue transition-all duration-300 transform hover:scale-105';

  return (
    <div className={`${baseStyles} ${className}`.trim()}>
      {label}
    </div>
  );
}
