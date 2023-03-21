import { motion } from "framer-motion";
import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import { sectionHeadText, sectionSubText, TextVariants } from "@/utils/utils";
import type { InitialPartProps } from "@/types/ComponentProps";

export default function Head({ Head, SubHead, MoreDetails }: InitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className={sectionSubText}>{SubHead}</p>
        <h2 className={sectionHeadText + "z-0"}>
          {Head}
          {MoreDetails !== undefined && (
            <Link href={MoreDetails} className="z-0">
              <Image src="/right_arrow.svg" alt={MoreDetails} width={60} height={60} />
            </Link>
          )}
        </h2>
    </motion.div>
  );
}
