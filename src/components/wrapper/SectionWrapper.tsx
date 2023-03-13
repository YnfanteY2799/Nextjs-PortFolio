import { ReactElement } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/utils";

export interface SWProps {
  Component?: Function;
  id?: string;
}

export default function SectionWrapper({ Component, id }: SWProps): Function {
  return function HOC(): ReactElement {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 px-6 py-10 mx-auto sm:px-16 sm:py-16 max-w-7xl"
      >
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        {Component !== undefined && <Component />}
      </motion.section>
    );
  };
}
