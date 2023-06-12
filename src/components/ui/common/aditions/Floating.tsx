import { Fragment, ReactElement, useEffect, useRef, useState } from "react";
import { selectedFloatingSection, nonSelectedFloatingSection } from "@/utils";
import { IconSetter } from "@/components";

import type { IFloatingMenuProps } from "@/types";

export default function Floating({ sections = [] }: IFloatingMenuProps): ReactElement {
  // State
  const [lastClicked, setLastClicked] = useState(0 as number);
  const [isOpen, setIsOpen] = useState(false as boolean);
  const floatingRef = useRef<HTMLElement>(null);

  function handleShowFloat(): void {
    setIsOpen(!isOpen);
  }

  function handleSelectionClick(id: number) {
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

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="hidden z-20 lg:flex shrink-0 grow-0 justify-around gap-4 border-t bg-transparent p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-4 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
      ref={floatingRef}
    >
      {isOpen ? (
        sections.map(({ id, name, img }, ind) => (
          <Fragment key={ind}>
            <a
              href={`#${id}`}
              className={lastClicked === ind ? selectedFloatingSection : nonSelectedFloatingSection}
              onClick={() => handleSelectionClick(ind)}
            >
              <IconSetter size={25} icon={img} />
              <small className="text-xs font-medium text-center"> {name} </small>
            </a>
            {ind !== sections.length - 1 && <hr />}
          </Fragment>
        ))
      ) : (
        <button onClick={handleShowFloat} className="flex flex-col items-center justify-center">
          <IconSetter icon="Menu" size={30} />
        </button>
      )}
    </nav>
  );
}
