import { motion } from "framer-motion";
import { SectionHeader, SectionWrapper } from "@/components";
import { expDefaults, fadeIn } from "@/utils";
import TechPiece from "./parts/Pieces";

import type { ReactElement } from "react";
import type { ITechSectionProps } from "@/types";

export default function Tech({ techs = expDefaults }: ITechSectionProps): ReactElement {
  return (
    <SectionWrapper id="Tech">
      <SectionHeader Head="My TechStacks :" SubHead="These are the stacks i've used "/>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full mt-4">
        {techs.map((x, idx) => (
          <TechPiece {...x} key={idx} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
