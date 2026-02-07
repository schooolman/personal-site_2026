import type { ExperienceItem } from '@/data';

interface ExperienceCardProps {
  job: ExperienceItem;
}

export function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="border-l-4 border-chicago-green pl-6">
      <div className="flex flex-wrap items-baseline gap-2 mb-1">
        <h3 className="text-xl font-semibold text-chicago-navy">
          {job.title}
        </h3>
      </div>
      <p className="text-chicago-blue font-medium mb-1">
        {job.company} &middot; {job.location}
      </p>
      <p className="text-sm text-chicago-charcoal/60 mb-3">
        {job.startYear} &ndash; {job.endYear}
      </p>
      <ul className="space-y-1.5 text-chicago-charcoal/80">
        {job.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed">
            <span className="text-chicago-green mt-1 shrink-0">&bull;</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
