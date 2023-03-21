import { create } from "zustand";

type resumePerk = {
  title?: string;
  icon?: string;
  index?: string;
};

type experience = {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points: string[];
};

type TechBubble = {
  name?: string;
  logo?: string;
};

type Projek = {
  name?: string;
  brief?: string;
  preview?: string;
  link?: string;
  decals?: Array<string>;
};

export type callable = {
  aboutText?: string;
  perkz?: Array<resumePerk>;
  history?: Array<experience>;
  techs?: Array<TechBubble>;
  projectsText?: string;
  projects?: Array<Projek>;
};

interface LandingState {
  aboutText?: string;
  perkz: Array<resumePerk>;
  history: Array<experience>;
  techs: Array<TechBubble>;
  projectsText?: string;
  projects?: Array<Projek>;
  getData: () => Promise<void>;
  addData: (data: callable) => void;
}

export const useLandingStore = create<LandingState>((set) => ({
  aboutText: "",
  perkz: [],
  history: [],
  techs: [],
  projectsText: "",
  projects: [],
  getData: async function () {
    const response = await fetch("/api/basics", { method: "GET" });
    console.log(`response`, response);

    set((s) => ({ ...s }));
  },
  addData: function (data: callable) {
    set((s) => ({ ...s, ...data }));
  },
}));
