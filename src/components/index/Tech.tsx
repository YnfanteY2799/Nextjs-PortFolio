import { ReactElement } from "react";
import { SectionWrapper } from "@/components/wrapper";
import { BallCanvas } from "@/components/canvas";
import { SectionHead } from "../index";

export default function TechStack({ stacks }: { stacks?: any[] }): ReactElement {
  return (
    <SectionWrapper>
      <SectionHead Head="Stacks" />
      <div className="flex flex-row flex-wrap gap-10 justify-center">
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
