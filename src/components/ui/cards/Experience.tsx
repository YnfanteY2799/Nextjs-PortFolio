import { ReactElement } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export interface ExperienceCardProps {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points: string[];
}

export default function ExperienceCard({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: ExperienceCardProps): ReactElement {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img src={icon} alt={company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">{company_name}</p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {points.map((reason, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {reason}
          </li>
        ))}
      </ul>
      <p className="text-secondary text-[16px] font-semibold m-0">{date}</p>
    </VerticalTimelineElement>
  );
}
