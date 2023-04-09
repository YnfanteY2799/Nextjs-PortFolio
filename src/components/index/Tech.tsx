import { ReactElement } from "react";
import { BallCanvas } from "@/components/canvas";
import { SectionHead, SectionWrapper } from "@/components";

export default function TechStack({ stacks }: { stacks?: any[] }): ReactElement {
  return (
    <SectionWrapper>
      <SectionHead Head="Stacks" />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {(stacks ?? []).map(({ icon, name }, i) => (
          <div className="w-28 h-28" key={name + "ball #" + i}>
            <BallCanvas icon={icon} />
            <p className="text-center">{name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
