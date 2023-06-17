import { motion } from "framer-motion";
import { springIn } from "@/utils";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import type { ReactElement } from "react";
import type { IPageWrapperProps } from "@/types";

export default function PageWrapper({
  children,
  Theme,
  ChangeTheme,
  animated = false,
  socials = []
}: IPageWrapperProps): ReactElement {
  // Functions
  function handleChangeTheme() {
    Theme === "night" ? ChangeTheme("cupcake") : ChangeTheme("night");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo-no-background.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YJ | Porfolio </title>
      </Head>
      <Navbar Theme={Theme} ChangeTheme={handleChangeTheme} />
      <motion.main {...(animated ? springIn : {})} data-theme={Theme} >
        {children}
      </motion.main>
      <Footer Theme={Theme} socials={socials} />
    </div>
  );
}
