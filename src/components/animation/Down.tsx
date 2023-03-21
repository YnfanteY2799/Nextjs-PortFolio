import { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedDown(): ReactElement {
  return (
    <div className="flex absolute bottom-36 justify-center items-end w-full xs:bottom-10">
      <a href="#About">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <Image src={"/down_arrow.svg"} alt={"Arrow"} width={90} height={90} />
        </motion.div>
      </a>
    </div>
  );
}
