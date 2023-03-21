import { ReactElement } from "react";
import Image from "next/image";
import { TagProp } from "@/types/ComponentProps";

export default function Tags({ icon, color, children, upper, cn }: TagProp): ReactElement {
  const baseTag = "inline-flex items-center px-3 py-1 text-xs font-bold rounded-full ";

  function getColor() {
    switch (color) {
      case "BLUE":
        return "text-blue-700 bg-blue-200";
      case "GREEN":
        return "text-green-700 bg-green-200";
      case "ORANGE":
        return "text-orange-700 bg-orange-200";
      case "RED":
        return "text-red-700 bg-red-200";
      case "GRAY":
        return "text-gray-700 bg-white";
    }
  }

  return (
    <div className={baseTag + getColor() + `${upper ? " uppercase" : ""} leading-sm ` + cn}>
      <Image
        src={icon ?? ""}
        className="mr-2 feather feather-bell-off"
        alt={icon ?? ""}
        width={10}
        height={10}
      />
      {children}
    </div>
  );
}
