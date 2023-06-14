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
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo-no-background.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YJ | Porfolio </title>
      </Head>
      <Navbar Theme={Theme} ChangeTheme={handleChangeTheme} />
      <motion.main {...(animated ? springIn : {})} data-theme={Theme}>
        {children}
      </motion.main>
    </>
  );
}
