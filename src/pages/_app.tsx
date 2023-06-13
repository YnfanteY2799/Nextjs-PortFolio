// import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const currentFont = localFont({
  src: "../fonts/ArigatouGozaimasu.otf",
  variable: "--font-local",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${currentFont.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
