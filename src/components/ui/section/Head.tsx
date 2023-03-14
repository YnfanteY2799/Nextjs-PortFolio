import { InitialPartProps } from "@/types/Sections";
import { sectionHeadText, sectionSubText, TextVariants } from "@/utils/utils";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export default function Head({ Head, SubHead }: InitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className={sectionSubText}>{SubHead}</p>
      <h2 className={sectionHeadText}>{Head}</h2>
    </motion.div>
  );
}
