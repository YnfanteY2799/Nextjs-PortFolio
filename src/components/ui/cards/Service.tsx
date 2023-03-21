import { ReactElement } from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import Image from "next/image";
import { fadeIn } from "@/utils/utils";

export interface ServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

export default function ServiceCard({ title, icon, index }: ServiceCardProps): ReactElement {
  console.log("Icon is : ", icon);

  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
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
          {/* <Image src={icon} alt={title} className="object-contain" width={16} height={16}/> */}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}
