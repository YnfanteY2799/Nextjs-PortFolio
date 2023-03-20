import { ReactElement } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/wrapper";
import { ServiceCard } from "@/components/ui/cards";
import { SectionsProps } from "@/types/Sections";
import { fadeIn } from "@/utils/utils";
import { SectionHead } from "@/components/ui";

function About({ Text, cardsInfo }: SectionsProps): ReactElement {
  return (
    <>
      <SectionHead Head="About Me" SubHead="Intro"/>
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
    </>
  );
}

export default SectionWrapper({ Component: About, id: "about" });
