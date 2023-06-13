import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { TextVariants} from "@/utils";
import Link from "next/link";

import type { ReactElement } from "react";
import type { IInitialPartProps } from "@/types";

export default function Head({ Head, SubHead, MoreDetails }: IInitialPartProps): ReactElement {
  return (
    <motion.div variants={TextVariants}>
      <p className="sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider font-local">{SubHead}</p>
      <div className="flex flex-row">
        <h2 className="font-black md:text-[60px] sm:text-[50px] text-[30px] text-5xl z-0 flex font-local">
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
