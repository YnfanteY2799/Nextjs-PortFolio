import { motion } from "framer-motion";
import { staggerContainer } from "@/utils";

import type { ReactElement } from "react";
import type { ISectionWrapperProps } from "@/types";

export default function SectionWrapper(props: ISectionWrapperProps): ReactElement {
  return (
    <motion.section
      {...props}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative px-6 py-10 mx-auto max-w-7xl sm:px-16 sm:py-16"
    />
  );
}
