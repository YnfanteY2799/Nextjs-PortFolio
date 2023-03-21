import { motion } from "framer-motion";
import { ReactElement } from "react";
import Link from "next/link";
import type { InitialPartProps } from "@/types/ComponentProps";
import { sectionHeadText, sectionSubText, TextVariants } from "@/utils/utils";

export default function Head({ Head, SubHead, MoreDetails }: InitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className={sectionSubText}>{SubHead}</p>
      <h2 className={sectionHeadText}>
        {Head} {MoreDetails !== undefined && <Link href={MoreDetails}>{"->"}</Link>}
      </h2>
    </motion.div>
  );
}
