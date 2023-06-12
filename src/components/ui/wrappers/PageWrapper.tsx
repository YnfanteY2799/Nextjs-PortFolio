import Head from "next/head";
import Navbar from "../navbar/Navbar";

import type { ReactElement } from "react";
import type { IPageWrapperProps } from "@/types";

export default function PageWrapper({ children, Theme, ChangeTheme }: IPageWrapperProps): ReactElement {

  function handleChangeTheme() {
    Theme === "luxury" ? ChangeTheme("cupcake") : ChangeTheme("luxury");
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo-no-background.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YJ | Porfolio </title>
      </Head>
      <div data-theme={Theme}>
        <Navbar Theme={Theme} ChangeTheme={handleChangeTheme} />
        {children}
      </div>
    </>
  );
}
