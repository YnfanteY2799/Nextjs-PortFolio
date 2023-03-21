import { ReactElement } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "@/components/ui/cards";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { SectionHead } from "@/components/ui";
import type { ExpProps } from "@/types/ComponentProps";
import "react-vertical-timeline-component/style.min.css";

export default function Experience({ experiences }: ExpProps): ReactElement {
  return (
    <SectionWrapper id="work">
      <SectionHead Head="I've Worked on/at :  " SubHead="My experience" />
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {(experiences ?? []).map((xp: any, i) => (
            <ExperienceCard key={i} {...xp} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
}
