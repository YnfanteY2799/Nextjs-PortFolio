import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  // Hook
  const { events } = useRouter();

  // State
  const [loading, setLoading] = useState<boolean>(true);

  // Fn's
  function onRouteChange(_uri: string): void {
    setLoading((_) => true);
  }

  function onRouteChangeComplete(): void {
    setLoading((_) => false);
  }

  useEffect(() => {
    events.on("routeChangeStart", onRouteChange);
    events.on("routeChangeComplete", onRouteChangeComplete);

    return (): void => {
      events.off("routeChangeStart", onRouteChange);
      events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [events]);

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
