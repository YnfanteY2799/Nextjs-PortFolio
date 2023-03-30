import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BdropProps } from "@/types/ComponentProps";

export default function Backdrop({ children, click }: BdropProps): ReactElement {
  return (
    <motion.div
      className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center bg-[#000000e1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={click}
    >
      {children && children}
    </motion.div>
  );
}
