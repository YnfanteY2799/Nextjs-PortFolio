import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BdropProps } from "@/types/ComponentProps";

export default function Backdrop({ children, click }: BdropProps): ReactElement {
  return (
    <motion.div
      className="flex overflow-y-hidden absolute top-0 left-0 justify-center items-center w-full h-full bg-[#000000e1] opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={click}
    >
      {children && children}
    </motion.div>
  );
}
