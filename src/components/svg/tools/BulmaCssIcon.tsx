import type { ReactElement } from "react";
import type { IGenericIconSvg } from "@/types";

export default function BulmaCssIcon({ size = 24, className }: IGenericIconSvg): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 373" className={className}>
      <path
        fill="#00D1B2"
        d="M0 256L23.273 93.091L116.364 0l116.363 116.364l-69.818 69.818L256 279.273l-139.636 93.091z"
      />
    </svg>
  );
}
