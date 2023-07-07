export * from "./ComponentProps";

export type T_Theme = "night" | "cupcake" | "";

export interface ISessionStore {
  theme: T_Theme;
  setTheme: (s: T_Theme) => void;
}

export type TSocialsType = { link: string; icon: string };

export type SectionType = {
  id: string;
  name: string;
  img: string;
};

export type TContactForm = {
  name?: string;
  email?: string;
  message?: string;
  contactType?: "Mentorship" | "Bussiess" | "Anime" | "Freelancing" | "Other";
};

export type T_Color = "BLUE" | "GREEN" | "ORANGE" | "RED" | "GRAY" | "PINK";

export type T_Techs = { icon: string; title: string; experience: string };

export type T_Tag = {
  name?: string;
  color?: T_Color;
};

export type T_NavItem = { title: string; to: string; section: boolean };
