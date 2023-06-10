import type { MouseEventHandler, ReactNode } from "react";
import type { SectionType, TSocialsType, TTheme, T_Techs } from "./index";

export interface IPageWrapperProps {
  children?: ReactNode;
  Theme?: TTheme;
  ChangeTheme: Function;
}

export interface ISectionWrapperProps {
  id?: string;
  children?: ReactNode;
}

export interface IServiceCardProps {
  title: string;
  icon: string;
  i: number;
  onClick: MouseEventHandler;
}

export interface IInitialPartProps {
  Head?: string;
  SubHead?: string;
  MoreDetails?: string;
}

export interface NavbarProps {
  Theme?: TTheme;
  ChangeTheme?: Function;
}

export interface IAboutSectionProps {
  Text?: string;
  Services?: any[];
}

export interface ExperienceCardProps {
  title?: string;
  company_name: string;
  icon: string;
  iconBg?: string;
  date?: string;
  points: string[];
  theme: TTheme;
}

export interface ExperienceSectionProps {
  experience?: Array<Omit<ExperienceCardProps, "theme">>;
  theme?: TTheme;
}

export interface IHeroSectionProps {
  socials?: any[];
  cv?: string;
}

export interface IHomeProps {
  aboutCards: Array<Omit<IServiceCardProps, "i" | "onClick">>;
  experiences: Array<Omit<ExperienceCardProps, "theme">>;
  aboutText: string;
  socials: Array<TSocialsType>;
  techs: Array<{ title: Array<string>; techs: Array<T_Techs> }>;
  cv?: string;
  projects?: Array<any>;
}

export interface ITechSectionProps {
  techs?: Array<{ title: Array<string>; techs: Array<T_Techs> }>;
}

export interface ITechPieceProps {
  title?: Array<string>;
  techs?: Array<T_Techs>;
  index?: number;
}

export interface ITechCardsProps extends Omit<IServiceCardProps, "i" | "onClick"> {
  experience?: string;
}

export interface ISetIconProps {
  icon?: string;
  size?: number;
}

export interface IGenericIconSvg {
  size?: number;
}

export interface IProjectsSectionProps {
  projects?: Array<any>;
}

export interface IFloatingMenuProps {
  sections?: Array<SectionType>;
  allDevices?: boolean;
}

export interface ITagProp {
  color?: "BLUE" | "GREEN" | "ORANGE" | "RED" | "GRAY" | "PINK";
  icon?: string;
  children?: ReactNode;
  upper?: boolean;
  cn?: string;
  name?: string;
}

export interface IProjectsCardProps {
  name: string;
  description: string;
  tags: Array<ITagProp>;
  image: string;
  source_code_link: string;
  index: number;
}
