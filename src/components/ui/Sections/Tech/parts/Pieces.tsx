import { IconSetter, TechsCard } from "@/components";
import Link from "next/link";

import type { ReactElement } from "react";
import type { ITechPieceProps } from "@/types";

export default function TechPiece({ title = [], techs = [] }: ITechPieceProps): ReactElement {
  return (
    <div>
      <div className="mt-4 text-sm breadcrumbs">
        <ul>
          {title.map((x, idx) => (
            <li key={idx}>
              <Link href="/Web" className="flex gap-2">
                <IconSetter icon={x} size={15} />
                {x}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2">
        {techs.map((x, idx) => (
          <TechsCard {...x} key={idx} />
        ))}
      </div>
    </div>
  );
}
