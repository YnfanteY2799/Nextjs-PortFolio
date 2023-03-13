import { ReactElement, useState, MouseEvent } from "react";
import NavList from "./NavList";
import Link from "next/link";
import Image from "next/image";
import Header from "../head/Head";

export default function Navbar(): ReactElement {
  const [active, setActive] = useState("" as string);
  const [isToggle, setToggle] = useState(false as boolean);

  function handleActive(
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent> | string
  ): void {
    typeof e === "string" ? setActive(e) : setActive("");
    window.scrollTo(0, 0);
  }

  function toggle(): void {
    setToggle(!isToggle);
  }

  return (
    <>
      <Header />
      <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2" onClick={handleActive}>
            <Image
              src="/logo.svg"
              alt="logo"
              className="w-9 h-9 object-contain"
              width={0}
              height={0}
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              <span className="sm:block hidden"> YJ &nbsp;| FullStack Developer</span>
            </p>
          </Link>

          <NavList active={active} handleActive={handleActive} list={[]} />

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src="/next.svg"
              width={0}
              height={0}
              alt="menu"
              onClick={toggle}
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            />
            <div
              className={`${
                isToggle ? "flex" : "hidden"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <NavList
                active={active}
                handleActive={handleActive}
                list={[]}
                flex={true}
                handleToggle={toggle}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
