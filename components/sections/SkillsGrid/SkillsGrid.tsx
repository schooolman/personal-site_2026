import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBadge } from '@/components/ui/SkillBadge';

interface SkillsGridProps {
  skills: string[];
  title?: string;
}

export function SkillsGrid({ skills, title = 'Skills & Technologies' }: SkillsGridProps) {
  return (
    <Section background="green" border className="dot-pattern">
      <div className="max-w-4xl mx-auto">
        <SectionHeading color="cream">{title}</SectionHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-stagger">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Section>
  );
}
