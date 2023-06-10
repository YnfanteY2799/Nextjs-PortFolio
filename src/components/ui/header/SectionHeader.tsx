import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { TextVariants, sectionHeadText, sectionSubText } from "@/utils";
import Link from "next/link";

import type { ReactElement } from "react";
import type { IInitialPartProps } from "@/types";

export default function Head({ Head, SubHead, MoreDetails }: IInitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className={sectionSubText}>{SubHead}</p>
      <div className="flex flex-row">
        <h2 className={sectionHeadText}>
          {Head}
          {MoreDetails !== undefined && (
            <Link href={MoreDetails} className="flex pl-[15px] pt-2">
              <MoveRight width={60} height={40}/>
            </Link>
          )}
        </h2>
      </div>
    </motion.div>
  );
}
