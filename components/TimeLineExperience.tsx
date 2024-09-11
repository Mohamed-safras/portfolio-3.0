import Image from "next/image";
import { Timeline } from "./ui/Timeline";

export function TimelineExperience({
  handleAnimation,
}: {
  handleAnimation: (animationName?: string) => void;
}) {
  const data = [
    {
      title: "2024",
      animationName: "victory",
      content: (
        <div>
          <h3 className="text-sm font-semibold mb-1 md:text-base lg:text-lg">
            Acentura Inc
          </h3>
          <div className="flex flex-col md:flex-row">
            <p className="text-xs mb-1 md:text-sm lg:text-base">
              Software Engineer
            </p>
            <p className="text-xs text-neutral-500 mb-1 md:ml-2 md:text-sm lg:text-base">
              ( 2024 - Present )
            </p>
          </div>

          <div className=" mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
              task handeled
            </p>
          </div>

          <div className=" mb-8">special movments</div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      animationName: "clapping",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-15 md:h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-15 md:h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      animationName: "salute",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-15 md:h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-15 md:h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} handleAnimation={handleAnimation} />;
}
