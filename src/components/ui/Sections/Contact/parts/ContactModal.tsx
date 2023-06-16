import { Modal } from "@/components";

import type { IContactModalProps } from "@/types";
import type { ReactElement } from "react";

export default function ContactModal({
  isOpen,
  handleClose,
  email = "",
}: IContactModalProps): ReactElement | null {
  return isOpen ? (
    <Modal isOpen={isOpen} tittle="Contact Info" handleClose={handleClose}>
      <p className="text-center">
        The email you entered &nbsp;<strong className="underline">{email}</strong>&nbsp; will get
        messaged soon from a bot, this is a confirmation that i received you'r message <br/> 
        i'll be reaching you asap!
      </p>
    </Modal>
  ) : null;
}
