import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExperienceCard } from '@/components/ExperienceCard';
import type { ExperienceItem } from '@/data';

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
  title?: string;
  id?: string;
}

export function ExperienceTimeline({
  experiences,
  title = 'Experience',
  id,
}: ExperienceTimelineProps) {
  return (
    <Section id={id} background="navy" border>
      <div className="max-w-4xl mx-auto">
        <SectionHeading color="navy">{title}</SectionHeading>

        <div className="space-y-8">
          {experiences.map((job) => (
            <ExperienceCard key={job.startYear + job.company} job={job} />
          ))}
        </div>
      </div>
    </Section>
  );
}
