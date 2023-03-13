import { ReactElement } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TextVariants, sectionSubText, sectionHeadText } from "@/utils/utils";
import { ExperienceCard } from "@/components/ui/cards";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import "react-vertical-timeline-component/style.min.css";

function Experience(): ReactElement {
  return (
    <>
      <motion.div variants={TextVariants}>
        <p className={sectionSubText}>Intro</p>
        <h2 className={sectionHeadText}>Resume.</h2>
      </motion.div>
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
