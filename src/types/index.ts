export * from "./componentProps";

export type TTheme = "luxury" | "cupcake";

export interface ISessionStore {
  theme: TTheme;
  setTheme: (s: TTheme) => void;
}

export type TSocialsType = { link: string; icon: string }

export type SectionType = {
  id: string;
  name: string;
  img: string;
};

export type T_Techs = { icon: string; title: string; experience: string };
