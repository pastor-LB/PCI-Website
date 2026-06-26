import type { LucideIcon } from "lucide-react";

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function StoryTimeline({ milestones }: { milestones: TimelineMilestone[] }) {
  return (
    <ol className="relative border-l-2 border-brand-gold/40 pl-6 sm:mx-auto sm:max-w-3xl">
      {milestones.map((milestone) => {
        const Icon = milestone.icon;
        return (
          <li key={milestone.year} className="mb-10 ml-2">
            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-brand-gold bg-white" />
            <div className="flex items-center gap-2">
              {Icon ? <Icon className="h-5 w-5 text-brand-gold" aria-hidden="true" /> : null}
              <span className="font-heading text-xl font-bold text-brand-purple">
                {milestone.year}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-semibold text-brand-charcoal">{milestone.title}</h3>
            <p className="mt-1 text-sm text-brand-gray">{milestone.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
