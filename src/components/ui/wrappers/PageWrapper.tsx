import { useEffect, type ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { cleanAndFilter, handleChangeTheme, navbarOptions, springIn } from "@/utils";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import type { IPageWrapperProps, TTheme, T_NavItem } from "@/types";

export default function PageWrapper({
  children,
  Theme,
  ChangeTheme,
  animated = false,
  external = false,
}: IPageWrapperProps): ReactElement {

  // State
  const [navbarOTPS, setNavbarOPTS] = useState(navbarOptions as Array<T_NavItem>);

  // Fn's
  function handleThemeChange(): void {
    handleChangeTheme(Theme as TTheme, ChangeTheme);
  }

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
    </div>
  );
}
