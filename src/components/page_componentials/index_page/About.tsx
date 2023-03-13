import { ReactElement } from "react";
import { motion } from "framer-motion";
import { TextVariants, sectionSubText, sectionHeadText, fadeIn } from "@/utils/utils";
import { SectionWrapper } from "@/components/wrapper";
import { ServiceCard } from "@/components/ui/cards";

function About(): ReactElement {


  return (
    <>
      <motion.div variants={TextVariants}>
        <p className={sectionSubText}>Intro</p>
        <h2 className={sectionHeadText}>Resume.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {[].map((s: any, i) => (
          <ServiceCard key={i} index={i} {...s} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper({ Component: About, id: "about" });
