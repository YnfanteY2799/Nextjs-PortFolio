import { ReactElement } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "@/components/ui/cards";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { SectionHead } from "@/components";
import type { ExpProps } from "@/types/ComponentProps";
import "react-vertical-timeline-component/style.min.css";

export default function Experience({ experiences }: ExpProps): ReactElement {
  return (
    <SectionWrapper id="Exp">
      <SectionHead Head="I've Worked at :  " SubHead="My experience" />
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {(experiences ?? []).map((xp, i) => (
            <ExperienceCard key={i} {...xp} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
}
