import { ReactElement, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Backdrop } from "../index";
import { dropIn } from "@/utils";
import { AnimatedModalProps } from "@/types/ComponentProps";

export default function AnimatedModal({ open, action }: AnimatedModalProps): ReactElement {
  function preventProg(e: MouseEvent): void {
    e.stopPropagation();
  }

  return (
    <Backdrop click={action}>
      <motion.div
        onClick={preventProg}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>Hello thre</p>
        <button onClick={action}>Close</button>
      </motion.div>
    </Backdrop>
  );
}
