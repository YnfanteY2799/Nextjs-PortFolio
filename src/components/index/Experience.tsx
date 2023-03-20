import { ReactElement } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "@/components/ui/cards";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { SectionHead } from "@/components/ui";
import "react-vertical-timeline-component/style.min.css";

function Experience(): ReactElement {
  return (
    <>
      <SectionHead Head="I've Worked on :  " />
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {[].map((xp: any, i) => (
            <ExperienceCard key={i} {...xp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper({ Component: Experience, id: "work" });
