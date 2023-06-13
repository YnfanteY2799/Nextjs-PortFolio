import { motion } from "framer-motion";
import { springIn } from "@/utils";
import Head from "next/head";
import Navbar from "../navbar/Navbar";

import type { ReactElement } from "react";
import type { IPageWrapperProps } from "@/types";

export default function PageWrapper({
  children,
  Theme,
  ChangeTheme,
  animated = false,
}: IPageWrapperProps): ReactElement {
  function handleChangeTheme() {
    Theme === "night" ? ChangeTheme("cupcake") : ChangeTheme("night");
  }

  return (
    <>
      {/* <motion.main {...(animated ? springIn : {})} data-theme={Theme}> */}
        <Navbar Theme={Theme} ChangeTheme={handleChangeTheme} />
        {children}
      {/* </motion.main> */}
    </>
  );
}
