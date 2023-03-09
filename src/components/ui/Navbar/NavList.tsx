import { ReactElement } from "react";

export interface NavlistProps {
  list: Array<any>;
  active: string;
  handleActive: Function;
  flex?: boolean;
  handleToggle?: Function;
}

export default function NavList({
  list,
  active,
  handleActive,
  flex,
  handleToggle,
}: NavlistProps): ReactElement {
  return (
    <ul
      className={`list-none ${
        flex
          ? "flex justify-end items-start flex-col gap-4"
          : "hidden sm:flex flex-row gap-10"
      } `}
    >
      {list.map(({ id, title }) => (
        <li
          key={id}
          className={`${active === title ? "text-white" : "text-secondary"} ${
            flex
              ? "font-poppins font-medium cursor-pointer text-[16px]"
              : "hover:text-white text-[18px] font-medium cursor-pointer"
          }`}
          onClick={() => {
            handleActive(title);
            handleToggle !== undefined && handleToggle();
          }}
        >
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
    </ul>
  );
}
