import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
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
          {experiences.map((job, index) => (
            <ScrollReveal key={job.startYear + job.company} delay={index * 150}>
              <ExperienceCard job={job} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
