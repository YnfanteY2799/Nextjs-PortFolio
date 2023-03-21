import { motion } from "framer-motion";
import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import type { InitialPartProps } from "@/types/ComponentProps";
import { sectionHeadText, sectionSubText, TextVariants } from "@/utils/utils";

export default function Head({ Head, SubHead, MoreDetails }: InitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className={sectionSubText}>{SubHead}</p>
      <h2 className={sectionHeadText + 'flex'}>
        {Head}
        {MoreDetails !== undefined && (
          <Link href={MoreDetails}>
            <Image src={"/undraw_arrow.svg"} alt={"Arrow"} width={60} height={60}/>
          </Link>
        )}
      </h2>
    </motion.div>
  );
}
