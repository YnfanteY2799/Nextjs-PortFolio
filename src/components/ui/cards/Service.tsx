import { ReactElement, MouseEvent, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { fadeIn } from "@/utils";

export interface ServiceCardProps {
  title: string;
  icon: string;
  i: number;
  handleOnClick: MouseEventHandler;
}

export default function ServiceCard({
  title,
  icon,
  i,
  handleOnClick,
}: ServiceCardProps): ReactElement {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        onClick={handleOnClick}
        variants={fadeIn("right", "spring", 0.5 * i, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          animate={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={`/doodle/${icon}.svg`}
            alt={title}
            className="object-contain"
            width={120}
            height={120}
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}
