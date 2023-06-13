import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils";
import Image from "next/image";

import type { ReactElement } from "react";
import type { IServiceCardProps } from "@/types";

export default function ServiceCard({ title, icon, i, click }: IServiceCardProps): ReactElement {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * (i ?? 1), 0.75)}
        className="w-full bg-primary p-[1px] rounded-[20px] card"
      >
        <motion.div
          animate={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-base-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={`/doodle/${icon}.svg`}
            alt={title}
            className="object-contain w-auto h-auto"
            width={120}
            height={120}
          />
          <h3
            className="text-[20px] font-bold text-center hover:cursor-pointer hover:underline"
            onClick={() => click(title)}
          >
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}
