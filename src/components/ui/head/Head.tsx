import { ReactElement } from "react";
import Head from "next/head";

export default function Header(): ReactElement {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/logo-no-background.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title> | Porfolio </title>
    </Head>
  );
}
