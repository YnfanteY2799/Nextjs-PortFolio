import { ReactElement, useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import NavList from "./NavList";
import Link from "next/link";
import Image from "next/image";
import Header from "../../head/Head";
import { DownloadButton } from "../../buttons";
import type { SelectionListNode } from "@/types/ComponentProps";

const List: Array<SelectionListNode> = [
  { title: "About", id: "/About" },
  { title: "Projects", id: "/Projects" },
];

export default function Navbar(): ReactElement {
  const [active, setActive] = useState("" as string);
  const [isToggle, setToggle] = useState(false as boolean);
  const mobileNavbarRef = useRef<HTMLDivElement>(null);

  function handleActive(e: ReactMouseEvent | string): void {
    typeof e === "string" ? setActive(e) : setActive("");
    window.scrollTo(0, 0);
  }

  function toggle(): void {
    setToggle(!isToggle);
  }

  useEffect(() => {
    const closeOnClickOut = ({ target }: MouseEvent) => {
      if (
        isToggle &&
        mobileNavbarRef.current &&
        !mobileNavbarRef.current.contains(target as Node)
      ) {
        toggle();
      }
    };

    document.addEventListener("mousedown", closeOnClickOut);

    return () => document.removeEventListener("mousedown", closeOnClickOut);
  }, []);

  return (
    <>
      <Header />
      <nav className="fixed top-0 z-20 flex items-center w-full px-6 py-5 sm:px-16 bg-primary">
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
          <Link href="/" className="flex items-center gap-2" onClick={handleActive}>
            <Image
              src="/logo-no-background.svg"
              alt="logo"
              className="object-contain w-16 h-16"
              width={16}
              height={16}
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              <span className="hidden sm:block">| FullStack Developer</span>
            </p>
          </Link>
          <NavList
            active={active}
            handleActive={handleActive}
            list={List}
            lastPart={<DownloadButton />}
          />

          <div className="flex items-center justify-end flex-1 sm:hidden" ref={mobileNavbarRef}>
            <Image
              src={isToggle ? "/icons/close.svg" : "/icons/menu.svg"}
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
                list={List}
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
