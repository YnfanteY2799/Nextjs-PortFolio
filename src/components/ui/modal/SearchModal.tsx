import { useEffect, type ReactElement, type MouseEventHandler, EventHandler } from "react";
import { motion } from "framer-motion";
import { ReactPortalWrapper } from "@/components";

import type { SearchModalProps } from "@/types";

export default function SearchModal(props: SearchModalProps): ReactElement | null {
  // Props
  const { isOpen, theme, handleClose } = props;

  // Close on Esc key down
  useEffect(() => {
    function closeOnESC({ key }: KeyboardEvent) {
      key === "Escape" ? handleClose() : null;
    }
    document.body.addEventListener("keydown", closeOnESC, { passive: true });
    return (): void => {
      document.body.removeEventListener("keydown", closeOnESC);
    };
  }, [handleClose]);

  return isOpen ? (
    <ReactPortalWrapper wrapperId="Modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-40 w-screen h-screen opacity-50 bg-neutral-800"
      />
      <dialog id="my_modal_2" className="modal" open data-theme={theme}>
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default" onClick={handleClose as MouseEventHandler}>
            close
          </button>
        </form>
      </dialog>
    </ReactPortalWrapper>
  ) : null;
}
