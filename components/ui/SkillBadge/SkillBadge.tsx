interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className = '' }: SkillBadgeProps) {
  const baseStyles = 'bg-chicago-navy border border-chicago-sage/20 rounded px-4 py-3 text-sm text-chicago-cream/90 text-center hover:border-chicago-sage/50 transition-colors';

  return (
    <div className={`${baseStyles} ${className}`.trim()}>
      {label}
    </div>
  );
}
