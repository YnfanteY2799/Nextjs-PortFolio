import { useState, useLayoutEffect, type ReactElement } from "react";
import { createPortal } from "react-dom";

import type { PortalProps } from "@/types";

function createWrapperAndAppendToBody(wrapperId: string): HTMLDivElement | null {
  if (!document) return null;
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

export default function ReactPortal({ children, wrapperId }: PortalProps): ReactElement | null {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element!);

    return () => {
      if (element !== null) {
        if (systemCreated && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
}
