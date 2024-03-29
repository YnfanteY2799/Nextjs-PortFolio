import { Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import type { NavbarProps } from "@/types";
import type { ReactElement } from "react";

export default function Navbar({
  Theme = "night",
  ChangeTheme,
  options = [],
}: NavbarProps): ReactElement {
  return (
    <div className="sticky px-10 navbar bg-base-200 border-b-primary" data-theme={Theme}>
      <div className="navbar-start">
        <Link href="/" className="text-xl normal-case btn btn-ghost">
          <Image
            src="/logo-no-background.svg"
            alt="Page Logo"
            className="object-fill w-10 h-10"
            width={10}
            height={10}
          />
          <span>| DEV</span>
        </Link>
      </div>

      <div className="hidden navbar-end lg:flex">
        <ul className="gap-2 menu menu-horizontal">
          {options.map(({ to, title, section }, idx) => (
            <li key={idx}>
              <p>
                {section ? (
                  <a href={`#${to}`}>
                    {title}
                  </a>
                ) : (
                  <Link href={to}>
                    {title}
                  </Link>
                )}
              </p>
            </li>
          ))}
          <li key={options.length + 1}>
            <p>
              <button onClick={() => ChangeTheme && ChangeTheme()}>
                {Theme === "night" ? <Moon size={25} /> : <Sun size={25} />}
              </button>
            </p>
          </li>
        </ul>
      </div>

      <div className="flex lg:hidden navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost ">
            <Menu />
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
          >
            {options.map(({ to, title, section }, idx) => (
              <li key={idx}>
                {section ? (
                  <a href={`#${to}`}>{title}</a>
                ) : (
                  <Link href={to} className="w-full">
                    {title}
                  </Link>
                )}
              </li>
            ))}
            <li key={options.length + 1}>
              <button onClick={() => ChangeTheme && ChangeTheme()} className="justify-between">
                {Theme}
                {Theme === "night" ? <Moon /> : <Sun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
