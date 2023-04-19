import { ReactElement } from "react";
import { motion } from "framer-motion";
import { SectionWrapper, SectionHead } from "@/components";
import { ServiceCard } from "@/components/ui/cards";
import { fadeIn } from "@/utils";
import type { SectionsProps } from "@/types/ComponentProps";

export default function About({ Text, cardsInfo }: SectionsProps): ReactElement {
  return (
    <SectionWrapper id="About">
      <SectionHead Head="About Me" SubHead="Intro" MoreDetails="/About" />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {Text}
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {(cardsInfo ?? []).map((s: any, i) => (
          <ServiceCard key={i} index={i} {...s} />
        ))}
      </div>
    </SectionWrapper>
  );
}
