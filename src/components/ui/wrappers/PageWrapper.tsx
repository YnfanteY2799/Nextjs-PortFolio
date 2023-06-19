import { useEffect, type ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { handleChangeTheme, navbarOptions, springIn } from "@/utils";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import type { IPageWrapperProps, TTheme } from "@/types";

export default function PageWrapper({
  children,
  Theme,
  ChangeTheme,
  animated = false,
  external = false,
}: IPageWrapperProps): ReactElement {
  const [navbarOTPS, setNavbarOPTS] = useState(navbarOptions);

  useEffect(() => {
    if (external) setNavbarOPTS((x) => x.map((xs) => ({ ...xs, section: false })));
    else setNavbarOPTS(navbarOptions);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        Theme={Theme}
        ChangeTheme={() => handleChangeTheme(Theme as TTheme, ChangeTheme)}
        options={navbarOTPS}
      />
      <motion.main {...(animated ? springIn : {})} data-theme={Theme}>
        {children}
      </motion.main>
      <Footer Theme={Theme} options={navbarOTPS} />
    </div>
  );
}
