import { ReactElement } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../wrapper";
import { fadeIn } from "@/utils/utils";
import { SectionHead } from "../ui";
import { ProjectsCard } from "../ui/cards";
import { WorksProps } from "@/types/ComponentProps";

export default function Works({ id, projects }: WorksProps): ReactElement {
  console.log(projects);

  return (
    <SectionWrapper id={id}>
      <SectionHead />
      <div className="w-full w-flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7 mt-20">
        {(projects ?? []).map((p, i) => (
          <ProjectsCard index={i} key={`project-${i}`} {...p} />
        ))}
      </div>
    </SectionWrapper>
  );
}
