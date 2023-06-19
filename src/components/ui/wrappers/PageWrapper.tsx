import { motion } from "framer-motion";
import { handleChangeTheme, springIn } from "@/utils";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import type { ReactElement } from "react";
import type { IPageWrapperProps, TTheme } from "@/types";

export default function PageWrapper({
  children,
  Theme,
  ChangeTheme,
  animated = false,
  socials = [],
  external = false,
}: IPageWrapperProps): ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        Theme={Theme}
        external={external}
        ChangeTheme={() => handleChangeTheme(Theme as TTheme, ChangeTheme)}
      />
      <motion.main {...(animated ? springIn : {})} data-theme={Theme}>
        {children}
      </motion.main>
      <Footer Theme={Theme} socials={socials} />
    </div>
  );
}
