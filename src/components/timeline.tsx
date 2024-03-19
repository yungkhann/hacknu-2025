"use client";
import { ITimelineData, TimelineData } from "@/consts/timeline";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Timeline = () => {
  const router = useRouter();
  return (
    <div>
      {TimelineData.map((item: ITimelineData, index: number) => {
        return (
          <div
            key={index}
            className="p-6 cursor-pointer last:cursor-default border-t-[1px] last:border-b-[1px] border-[#282828] transition"
          >
            {item.map ? (
              <div
                onClick={() => {
                  item.link && router.push(item.link);
                }}
              >
                <div className="flex flex-col gap-y-10 md:flex-row justify-between">
                  <div className="flex flex-col gap-y-10">
                    <p className="font-Helloviteca text-2xl leading-none md:text-[40px] lg:text-[56px] pt-4">
                      {item.question}
                    </p>
                    <Button
                      variant={"outlinedHacknu"}
                      className="relative"
                      size={"xlg"}
                    >
                      Show on map
                    </Button>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 md:text-right">
                    <p className="font-NeueMachina text-[40px] leading-[1.1] font-light text-primary-green -tracking-[3px] md:text-[72px] md:-tracking-[7px] lg:text-[98px]">
                      {item.answer}
                    </p>
                    <p className="font-NeueMachina text-xl font-normal">
                      Astana, KZ
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col gap-y-10 md:gap-y-0 md:items-center md:justify-between md:flex-row"
                onClick={() => {
                  item.link && router.push(item.link);
                }}
              >
                <p className="font-Helloviteca text-2xl leading-none md:text-[40px] lg:text-[56px] pt-4">
                  {item.question}
                </p>
                <p className="font-NeueMachina text-[40px] leading-[1.1] font-light text-primary-green -tracking-[3px] md:text-[72px] md:-tracking-[7px] lg:text-[98px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
