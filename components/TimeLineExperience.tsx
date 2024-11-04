import { Timeline } from "./ui/Timeline";

import Link from "next/link";
import { PortableText } from "next-sanity";
import { PortableTextAdapter } from "./PortableTextEditor";
import { Expericene } from "@/interface/experience";

export function TimelineExperience({
  experience,
  handleAnimation,
}: {
  experience: Expericene[];
  handleAnimation: (animationName?: string) => void;
}) {
  const timelineEntries = experience.map(
    (
      {
        task_handled,
        role,
        workplace_name,
        start_date,
        end_date,
        workplace_logo,
        year,
        work_place_link,
        techstacks,
      },
      id
    ) => {
      const timelineEntry = {
        title: year,
        animationName: "victory",
        task_handled,
        workplace_logo,
        content: (
          <div>
            <h3 className="text-sm font-semibold mb-1 md:text-sm lg:text-base">
              {role}
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between">
              <Link
                href={`${work_place_link}`}
                className="text-xs text-purple mb-1 md:text-sm"
                target="_blank"
              >
                <p>{workplace_name}</p>
              </Link>
              <p className="text-xs text-neutral-500 mb-1 md:ml-2 md:text-sm">
                {start_date} - {end_date}
              </p>
            </div>

            <div className="mb-8 text-sm">
              <PortableText
                value={experience[id]?.task_handled}
                components={PortableTextAdapter}
              />
            </div>
            <div className="w-full flex flex-row flex-wrap gap-1">
              {techstacks.map((techstack, id) => (
                <div
                  key={id}
                  className="w-fit rounded-2xl bg-zinc-700  px-2.5 py-1.5 border border-transparent text-xs text-slate-200 transition-all shadow-sm"
                >
                  {techstack}
                </div>
              ))}
            </div>
          </div>
        ),
      };

      return timelineEntry;
    }
  );

  return <Timeline data={timelineEntries} handleAnimation={handleAnimation} />;
}
