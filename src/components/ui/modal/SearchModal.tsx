import { X } from "lucide-react";
import { motion } from "framer-motion";
import { ReactPortalWrapper, ComboBox } from "@/components";
import { useDispatchOnKey } from "@/hooks";

import type { SearchModalProps } from "@/types";
import type { ReactElement, MouseEventHandler } from "react";

export default function SearchModal(props: SearchModalProps): ReactElement | null {
  // Props
  const { isOpen, theme, handleClose } = props;

  // Close on Esc key down
  useDispatchOnKey({ pressedKey: "Escape", callback: () => isOpen && handleClose() });

  return isOpen ? (
    <ReactPortalWrapper wrapperId="Modal">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-40 w-screen h-screen opacity-50 bg-neutral-800"
      />

      <dialog id="my_modal_2" className="modal" open data-theme={theme}>
        <div className="modal-box">
          <h3 className="flex justify-between text-lg font-bold">
            Search !
            <button onClick={handleClose as MouseEventHandler}>
              <X />
            </button>
          </h3>
          <div className="py-4">
            <ComboBox />
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default" onClick={handleClose as MouseEventHandler}>
            close
          </button>
        </form>
      </dialog>
    </ReactPortalWrapper>
  ) : null;
}
