import { ReactElement } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils";
import type { SWProps } from "@/types/ComponentProps";

export default function SectionWrapper({ id, children }: SWProps): ReactElement {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative z-0 px-6 py-10 mx-auto max-w-7xl sm:px-16 sm:py-16"
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
}
