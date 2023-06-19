import { useEffect, type ReactElement } from "react";
import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components";
import { ProjectsDefaults as Def, fadeIn } from "@/utils";
import { ProjectsCard } from "@/components";

import type { IProjectsSectionProps } from "@/types";

export default function ProjectsSection({ projects = Def }: IProjectsSectionProps): ReactElement {
  useEffect(() => {
    const interval = setInterval(() => {
      const containerScroll = document.getElementById("scrollable");
      if (containerScroll !== null) {
        containerScroll.scrollLeft += 400;
        containerScroll.scrollTop
        
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="Projects">
      <SectionHeader Head="Projects" SubHead="I've been building" />
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col mt-5">
        <div className="w-full w-flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-[17px] max-w-3xl leading-[30px]"
          >
            Here is a brief showcase of my expertise as a JavaScript Full-stack Developer. Explore
            diverse web development projects reflecting proficiency in frontend, backend
            integration, database management, and problem-solving. Witness the fusion of creativity,
            technical expertise, and attention to detail, delivering high-quality, user-centric
            solutions. From e-commerce websites to task management apps and blogging platforms,
            experience the innovative and impactful work of a Full-stack JavaScript Developer.
          </motion.p>
        </div>

        <div id="scrollable" className="pt-4 carousel rounded-box">
          {projects.map((x, idx) => (
            <div className="px-4 carousel-item" key={idx}>
              <ProjectsCard {...x} />
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
