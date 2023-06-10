import { IconSetter } from "@/components";

import type { ITechCardsProps } from "@/types";
import type { ReactElement } from "react";

export default function TechCards({ icon, title, experience }: ITechCardsProps): ReactElement {
  return (
    <div className="card card-side bg-base-100">
      <figure>
        <IconSetter icon={icon} size={60}/>
      </figure>
      <div className="card-body">
        <h2 className="underline card-title hover:cursor-pointer w-[50%]">{title}</h2>
        <p>{experience}</p>
      </div>
    </div>
  );
}
