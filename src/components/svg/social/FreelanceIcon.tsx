import type { ReactElement } from "react";
import type { IGenericIconSvg } from "@/types";

export default function FreelanceIcon({ size = 24 }: IGenericIconSvg): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374l-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76l4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548l3.643-3.57l1.13-6.652l-4.439-.228Z"
      />
    </svg>
  );
}
