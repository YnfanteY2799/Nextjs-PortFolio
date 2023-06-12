import { motion } from "framer-motion";
import { IconSetter, TechsCard } from "@/components";
import Link from "next/link";

import type { ReactElement } from "react";
import type { ITechPieceProps } from "@/types";

export default function TechPiece({ titles = [], techs = [] }: ITechPieceProps): ReactElement {
  return (
    <div>
      <div className="mt-4 text-sm breadcrumbs">
        <ul>
          {titles.map((title, idx) => (
            <li key={idx}>
              <Link href="/Web" className="flex gap-2">
                <IconSetter icon={title} size={15} />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ">
        {techs.map((x, idx) => (
          <TechsCard {...x} key={idx} />
        ))}
      </div>
    </div>
  );
}
