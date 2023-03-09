import { ReactElement } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Header(): ReactElement {
  const { pathname } = useRouter();

  function formatHeader(str: string): string {
    console.log("Running");
    switch (str) {
      case "/":
        return " | Portfolio";
      default:
        return ` | ${str.replace("/", "")}`;
    }
  }

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title> YJ{formatHeader(pathname)} </title>
    </Head>
  );
}
