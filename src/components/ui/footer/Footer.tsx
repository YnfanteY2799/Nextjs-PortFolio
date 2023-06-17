import Link from "next/link";

import { navbarOptions } from "@/utils";

import type { FooterProps } from "@/types";
import type { ReactElement } from "react";
import { IconSetter } from "@/components";

export default function Footer({ Theme, socials = [] }: FooterProps): ReactElement {
  return (
    <footer
      className="p-10 mt-auto rounded footer footer-center bg-base-200 text-base-content"
      data-theme={Theme}
    >
      <div className="grid grid-flow-col gap-4">
        {navbarOptions.map(({ title, to, section }, idx) =>
          section ? (
            <a href={`#${to}`} key={idx}>
              {title}
            </a>
          ) : (
            <Link href={to} className="w-full" key={idx}>
              {title}
            </Link>
          )
        )}
      </div>
        <div className="grid grid-cols-5">
          {socials.map(({ icon, link }, idx) => (
            <a
              href={link}
              key={idx}
              rel="noopener noreferrer"
              target="_blank"
              className="btn "
            >
              <IconSetter icon={icon} />
            </a>
          ))}
        </div>
      <div><p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p></div>
    </footer>
  );
}
