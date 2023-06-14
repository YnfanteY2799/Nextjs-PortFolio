import { X } from "lucide-react";

import type { ModalProps } from "@/types";
import type { ReactElement } from "react";

export default function ContactModal({ dialogRef, close, accept }: ModalProps): ReactElement {
  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <div className="flex justify-between text-lg font-bold">
          <p>Hello!</p>
          <button onClick={close}>
            <X />
          </button>
        </div>

        <div className="py-4">Press ESC key or click the button below to close</div>

        <div className="modal-action">
          <button className="btn btn-success" onClick={accept}>
            Ok
          </button>
          <button className="btn btn-error" onClick={close}>
            Close
          </button>
        </div>
        <div className="modal-backdrop" />
      </div>
    </dialog>
  );
}
