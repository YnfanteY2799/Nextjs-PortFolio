import { X } from "lucide-react";
import { type ReactElement, useEffect, MouseEventHandler } from "react";
import { ReactPortalWrapper } from "@/components";

import type { ModalProps } from "@/types";

export default function Modal({
  isOpen,
  handleClose,
  children,
  tittle = "Modal",
}: ModalProps): ReactElement | null {
  const close = handleClose as MouseEventHandler;

  // Close on Esc key down
  useEffect(() => {
    function closeOnESC({ key }: KeyboardEvent) {
      key === "Escape" ? handleClose() : null;
    }
    document.body.addEventListener("keydown", closeOnESC);
    return (): void => {
      document.body.removeEventListener("keydown", closeOnESC);
    };
  }, [handleClose]);

  // Disable Scroll on Modal Open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return isOpen ? (
    <ReactPortalWrapper wrapperId="portal-wrapper">
      <div className="fixed top-0 left-0 z-40 w-screen h-screen opacity-50 bg-neutral-800" />
      <dialog open id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="flex justify-between pb-2">
            <h3 className="font-bold btn btn-ghost btn-sm">{tittle}</h3>
            <button onClick={close} className="btn btn-ghost btn-sm">
              <X />
            </button>
          </div>
          {children}
          <div className="pt-2">
            <button className="w-full btn btn-outline btn-success btn-sm" onClick={close}>
              Ok
            </button>
          </div>
        </div>
        <div onClick={close} className="cursor-default modal-backdrop" />
      </dialog>
    </ReactPortalWrapper>
  ) : null;
}
