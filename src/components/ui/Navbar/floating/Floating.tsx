import { ReactElement, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FloatingMenuProps } from "@/types/ComponentProps";
import { selectedFloatingSection, nonSelectedFloatingSection } from "@/utils/utils";

export default function Floating({ sections }: FloatingMenuProps): ReactElement {
  const [lastClicked, setLastClicked] = useState(0 as number);
  const [isOpen, setIsOpen] = useState(false as boolean);
  const floatingRef = useRef<HTMLElement>(null);

  function handleShowFloat(): void {
    setIsOpen(!isOpen);
  }

  function handleSectionClick(id: number) {
    setLastClicked(id);
    handleShowFloat();
  }

  useEffect(() => {
    const checkIfClickedOutside = ({ target }: MouseEvent) => {
      if (isOpen && floatingRef.current && !floatingRef.current.contains(target as Node)) {
        handleShowFloat();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isOpen]);

  return (
    <nav
      className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-4 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
      ref={floatingRef}
    >
      {isOpen ? (
        (sections ?? []).map(({ id, name, img }, ind) => (
          <>
            <a
              href={`#${id}`}
              className={lastClicked === ind ? selectedFloatingSection : nonSelectedFloatingSection}
              onClick={() => handleSectionClick(ind)}
            >
              <Image src={`/icons/${img}.svg`} alt="Contact" width={25} height={25} />

              <small className="text-xs font-medium text-center"> {name} </small>
            </a>
            {ind !== (sections?.length ?? 0) - 1 && <hr className="dark:border-gray-700/60" />}
          </>
        ))
      ) : (
        <button onClick={handleShowFloat} className="flex flex-col items-center justify-center">
          <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
        </button>
      )}
    </nav>
  );
}
