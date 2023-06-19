import { AnimatePresence } from "framer-motion";
import Head from "next/head";

import localFont from "next/font/local";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

const currentFont = localFont({
  src: "../fonts/ArigatouGozaimasu.otf",
  variable: "--font-local",
  preload: true,
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo-no-background.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YJ | Porfolio </title>
      </Head>

      <AnimatePresence mode="wait">
        <main className={`${currentFont.variable}`}>
          <Component {...pageProps} key={router.asPath} />
        </main>
      </AnimatePresence>
    </>
  );
}
