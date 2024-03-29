import type { MouseEventHandler, ReactNode } from "react";
import type {
  SectionType,
  TSocialsType,
  T_Theme,
  T_Color,
  T_NavItem,
  T_Tag,
  T_Techs,
  GenericNameValue,
} from "./index";

export interface IPageWrapperProps {
  children?: ReactNode;
  Theme?: T_Theme;
  ChangeTheme: Function;
  animated?: boolean;
  socials?: Array<TSocialsType>;
  external?: boolean;
}

export interface ISectionWrapperProps {
  id?: string;
  children?: ReactNode;
}

export interface IServiceCardProps {
  title: string;
  icon: string;
  i: number;
  click: Function;
}

export interface IBlogCardProps {}

export interface IInitialPartProps {
  Head?: string;
  SubHead?: string;
  MoreDetails?: string;
}

export interface NavbarProps {
  Theme?: T_Theme;
  ChangeTheme?: Function;
  external?: boolean;
  options?: Array<T_NavItem>;
}

export interface FooterProps extends Omit<NavbarProps, "ChangeTheme"> {}

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
  points: Array<string>;
  theme: T_Theme;
}

export interface ExperienceSectionProps {
  experience?: Array<Omit<ExperienceCardProps, "theme">>;
  theme?: T_Theme;
}

export interface IHeroSectionProps {
  socials?: Array<TSocialsType>;
  cv?: string;
}

export interface IHomeProps {
  aboutCards: Array<Omit<IServiceCardProps, "i" | "onClick">>;
  experiences: Array<Omit<ExperienceCardProps, "theme">>;
  aboutText: string;
  initialSocials: Array<TSocialsType>;
  allSocials: Array<TSocialsType>;
  techs: Array<{ title: Array<string>; techs: Array<T_Techs> }>;
  cv?: string;
  projects?: Array<any>;
}

export interface ITechPieceProps {
  titles?: Array<string>;
  techs?: Array<T_Techs>;
  index?: number;
  dir?: "R" | "L";
}

export interface ITechSectionProps {
  techs?: Array<Omit<ITechPieceProps, "index" | "dir">>;
}

export interface ITechCardsProps extends Omit<IServiceCardProps, "i" | "click"> {
  experience?: string;
}

export interface ISetIconProps {
  icon?: string;
  size?: number;
  className?: string;
}

export interface IGenericIconSvg {
  size?: number;
  className?: string;
}

export interface IProjectsSectionProps {
  projects?: Array<IProjectsCardProps>;
}

export interface IFloatingMenuProps {
  sections?: Array<SectionType>;
}

export interface ITagProp {
  color?: T_Color;
  icon?: string;
  children?: ReactNode;
  upper?: boolean;
  cn?: string;
  name?: string;
}

export interface IProjectsCardProps {
  name: string;
  description: string;
  tags: Array<T_Tag>;
  image: string;
  source_code_link: string;
  index: number;
}

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  handleClose: Function;
  tittle?: string;
  handleAction?: Function;
}

export interface IContactModalProps extends Omit<ModalProps, "children" | "title"> {
  email?: string;
}

export interface PortalProps {
  children?: ReactNode;
  wrapperId: string;
}

export interface SearchModalProps {
  isOpen?: boolean;
  theme?: T_Theme;
  handleClose: Function;
}

export interface ComboBoxProps {
  options?: GenericNameValue[];
  onSelect?: (option: GenericNameValue | null) => void;
}