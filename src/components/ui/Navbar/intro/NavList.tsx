import { ReactElement } from "react";
import Link from "next/link";
import type { NavlistProps } from "@/types/ComponentProps";

export default function NavList({
  list,
  active,
  handleActive,
  flex,
  handleToggle,
  lastPart,
}: NavlistProps): ReactElement {
  return (
    <ul
      className={`list-none ${
        flex
          ? "flex flex-col gap-4 justify-end items-start"
          : "hidden flex-row gap-10 sm:flex"
      } `}
    >
      {list.map(({ id, title }) => (
        <li
          key={id}
          className={`${active === title ? "text-white" : "text-secondary"} ${
            flex
              ? "font-poppins font-medium cursor-pointer text-[16px]"
              : "hover:text-white text-[18px] font-medium cursor-pointer pt-[3px]"
          }`}
          onClick={() => {
            handleActive(title);
            handleToggle !== undefined && handleToggle();
          }}
        >
          <Link href={id}>{title}</Link>
        </li>
      ))}
      {lastPart && <li>{lastPart}</li>}
    </ul>
  );
}
