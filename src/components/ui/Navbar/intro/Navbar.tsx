import { ReactElement, useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import NavList from "./NavList";
import Link from "next/link";
import Image from "next/image";
import Header from "../../head/Head";
import { DownloadButton } from "../../buttons";

export type SelectionListNode = { id: string; title: string };

export interface IntroNavbarProps {
  sectionList: Array<SelectionListNode>;
}

export default function Navbar({ sectionList }: IntroNavbarProps): ReactElement {
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
    const closeOnClickOut = (e: MouseEvent) => {
      if (
        isToggle &&
        mobileNavbarRef.current &&
        !mobileNavbarRef.current.contains(e.target as Node)
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
      <nav className="flex fixed top-0 z-20 items-center px-6 py-5 w-full sm:px-16 bg-primary">
        <div className="flex justify-between items-center mx-auto w-full max-w-7xl">
          <Link href="/" className="flex gap-2 items-center" onClick={handleActive}>
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
          <NavList active={active} handleActive={handleActive} list={sectionList} />
          {/* <DownloadButton className="" /> */}

          <div className="flex flex-1 justify-end items-center sm:hidden">
            <Image
              src="/menu.svg"
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
              ref={mobileNavbarRef}
            >
              <NavList
                active={active}
                handleActive={handleActive}
                list={[{ title: "XD" }]}
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
