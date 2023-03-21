import { ReactElement } from "react";
import { motion } from "framer-motion";
import "@/styles/animations.module.css";

export default function AnimatedDown(): ReactElement {
  return (
    <div className="flex absolute bottom-32 justify-center items-end w-full xs:bottom-10">
      <a href="#About">
        {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"> */}
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mb-1 w-3 h-3 bg-secondary"
        />
        {/* </div> */}
      </a>
    </div>
  );
}
