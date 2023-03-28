import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingMenuProps } from "@/types/ComponentProps";
import { selectedFloatingSection, nonSelectedFloatingSection, slideIn } from "@/utils/utils";

export default function Floating({ sections }: FloatingMenuProps): ReactElement {
  const [lastClicked, setLastClicked] = useState(0 as number);
  const [isOpen, setIsOpen] = useState(true as boolean);

  function handleShowFloat(): void {
    setIsOpen(!isOpen);
  }

  function handleSectionClick(id: number) {
    setLastClicked(id);
    handleShowFloat();
  }

  return (
    <motion.nav
      variants={slideIn("left", "tween", 0.2, 1)}
      className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
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
        <button onClick={handleShowFloat}>
          <Image src="./menu.svg" alt={"menu"} width={20} height={20} />
        </button>
      )}
    </motion.nav>
  );
}
