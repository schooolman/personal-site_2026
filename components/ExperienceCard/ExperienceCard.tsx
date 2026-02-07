import type { ExperienceItem } from '@/data';

interface ExperienceCardProps {
  job: ExperienceItem;
}

export function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <div className="border-2 sm:border-4 border-white bg-black p-4 sm:p-6 hover:border-electric-blue transition-all duration-300">
      <div className="border-l-2 sm:border-l-4 border-neon-lime pl-3 sm:pl-4">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="text-xl font-bold text-white">
            {job.title}
          </h3>
        </div>
        <p className="text-neon-lime font-bold mb-1">
          {job.company} &middot; {job.location}
        </p>
        <p className="text-sm text-white/60 mb-3">
          {job.startYear} &ndash; {job.endYear}
        </p>
        <ul className="space-y-2 text-white/90">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="text-neon-lime text-lg mt-0.5 shrink-0">&rarr;</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
