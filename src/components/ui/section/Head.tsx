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
      <div className="flex flex-row">
        <h2 className={sectionHeadText + "z-0"}>
          {Head}
          {MoreDetails !== undefined && (
            <Link href={MoreDetails}>
              <Image src="/right_arrow.svg" alt={MoreDetails} width={40} height={40} />
            </Link>
          )}
        </h2>
      </div>
    </motion.div>
  );
}
