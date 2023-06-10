import { useState, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ISessionStore, TTheme } from "@/types";

const privateSessionStore = create(
  persist<ISessionStore>(
    (set) => ({
      theme: "luxury",
      setTheme: (s: TTheme) => set((x) => ({ ...x, theme: s })),
    }),
    { name: "sessionStore" }
  )
);

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as ISessionStore;
  const [data, setData] = useState({} as ISessionStore);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export const useSessionStore = () => useStore(privateSessionStore, (s) => s);
