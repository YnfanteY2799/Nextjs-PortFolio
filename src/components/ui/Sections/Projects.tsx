import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components";
import { ProjectsDefaults as Def, fadeIn } from "@/utils";
import { ProjectsCard } from "../cards";

import type { ReactElement } from "react";
import type { IProjectsSectionProps } from "@/types";

export default function ProjectsSection({ projects = Def }: IProjectsSectionProps): ReactElement {
  return (
    <SectionWrapper id="Projects">
      <SectionHeader Head="Projects" SubHead="I've been building" />
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col mt-5">
        <div className="w-full w-flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[17px] max-w-3xl leading-[30px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </motion.p>
        </div>
        <div className="flex flex-wrap mt-20 gap-7">
          {projects.map((x, idx) => (
            <ProjectsCard {...x} key={idx} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
