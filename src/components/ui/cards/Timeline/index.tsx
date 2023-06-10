import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";

import type { ReactElement } from "react";
import type { ExperienceCardProps } from "@/types";

export default function ExperienceCard(props: ExperienceCardProps): ReactElement {
  // Props
  const { title, company_name, icon, iconBg, date, points, theme } = props;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: theme === "luxury" ? "#171618" : "#fff"}}
      contentArrowStyle={{ borderRight: "7px solid blue" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={`/company/${icon}.svg`}
            alt={company_name || ""}
            className="w-[60%] h-[60%] object-contain"
            width={5}
            height={5}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{title}</h3>
        <p className=" text-[16px] font-semibold m-0">{company_name}</p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {points.map((reason, i) => (
          <li key={`experience-point-${i}`} className="text-[14px] pl-1 tracking-wider">
            {reason}
          </li>
        ))}
      </ul>
      <p className="text-[16px] font-semibold m-0">{date}</p>
    </VerticalTimelineElement>
  );
}
