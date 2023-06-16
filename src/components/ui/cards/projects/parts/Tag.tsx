import { IconSetter } from "@/components";

import type { ReactElement } from "react";
import type { ITagProp, T_Color } from "@/types";

export default function Tag({ children, icon, color, cn }: ITagProp): ReactElement {
  function getColor(color: T_Color) {
    switch (color) {
      case "BLUE":
        return " badge-info ";
      case "GREEN":
        return " badge-success ";
      case "ORANGE":
        return " badge-warning ";
      case "RED":
        return " badge-error ";
      case "PINK":
        return " badge-accent ";
      case "GRAY":
        return " badge-neutral ";
      default:
        return "  ";
    }
  }

  return (
    <div
      className={
        "gap-2 badge hover:underline hover:cursor-pointer " + getColor(color as T_Color) + cn
      }
    >
      <IconSetter icon={icon} size={16} />
      {children}
    </div>
  );
}
