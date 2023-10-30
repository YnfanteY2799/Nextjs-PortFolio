import { useEffect, useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { cleanAndFilter, handleChangeTheme, navbarOptions, springIn } from "@/utils";
import { SearchModal, Navbar, Footer } from "@/components";
import { useShortCut } from "@/hooks";

import type { IPageWrapperProps, T_Theme, T_NavItem } from "@/types";

export default function PageWrapper(props: IPageWrapperProps): ReactElement {
  // Props
  const { children, Theme, ChangeTheme, animated = false, external = false } = props;

  // State
  const [navbarOTPS, setNavbarOPTS] = useState<T_NavItem[]>(navbarOptions);
  const [searchModal, setSearchModal] = useState<boolean>(false);

  // Fn's
  function handleThemeChange(): void {
    handleChangeTheme(Theme as T_Theme, ChangeTheme);
  }

  function keyPressing() {
    setSearchModal(!searchModal);
  }

  // Short Cut
  useShortCut({ keys: ["q"], callback: keyPressing, shft: true });

  useEffect(() => {
    if (external) setNavbarOPTS((x) => cleanAndFilter(x));
    else setNavbarOPTS(navbarOptions);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" data-theme={Theme}>
      <Navbar Theme={Theme} ChangeTheme={handleThemeChange} options={navbarOTPS} />
      <motion.main {...(animated ? springIn : {})} data-theme={Theme}>
        {children}
      </motion.main>
      <Footer Theme={Theme} options={navbarOTPS} />
      <SearchModal isOpen={searchModal} theme={Theme} handleClose={keyPressing} />
    </div>
  );
}
