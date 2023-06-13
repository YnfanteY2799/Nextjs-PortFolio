import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { SectionHeader, SectionWrapper, ExperienceCard } from "@/components";
import { fadeIn } from "@/utils";

import "react-vertical-timeline-component/style.min.css";

import type { ReactElement } from "react";
import type { ExperienceSectionProps, TTheme } from "@/types";

export default function TimeLine({ experience = [], theme }: ExperienceSectionProps): ReactElement {
  return (
    <SectionWrapper id="Exp">
      <SectionHeader Head="I've Worked at :  " SubHead="My experience" />
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col mt-20">
        <VerticalTimeline animate={true}>
          {experience.reverse().map((xp, i) => (
            <ExperienceCard key={i} {...xp} theme={theme as TTheme} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </SectionWrapper>
  );
}
