import { ReactNode, MouseEvent } from "react";

export type Experience = {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points: string[];
};

export interface ExpProps {
  experiences?: Array<Experience>;
}

export type SectionType = {
  id: string;
  name: string;
  img: string;
};

export interface FloatingMenuProps {
  sections?: Array<SectionType>;
}

export interface HomeProps {
  name?: string;
  charge?: string;
  about?: string;
  aboutCards?: Array<any>;
  experiences?: Array<Experience>;
  sections?: Array<SectionType>;
  projects?: Array<any>;
}

export interface SectionsProps {
  Text?: string;
  cardsInfo?: any[];
}

export interface InitialPartProps {
  Head?: string;
  SubHead?: string;
  MoreDetails?: any;
}

export interface SWProps {
  id?: string;
  children?: ReactNode;
}

export interface HeroProps {
  name?: string;
  charge?: string;
  id?: string;
}

export interface ExperienceCardProps {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points: string[];
}

export interface WorksProps {
  id?: string;
  projects?: Array<any>;
}

export interface ProjectsCardProps {
  name: string;
  description: string;
  tags: Array<TagProp>;
  image: string;
  source_code_link: string;
  index: number;
}

export interface TagProp {
  color?: "BLUE" | "GREEN" | "ORANGE" | "RED" | "GRAY" | "PINK";
  icon?: string;
  children?: ReactNode;
  upper?: boolean;
  cn?: string;
  name?: string;
}

export type MailForm = {
  name: string;
  email: string;
  message: string;
};

type changingStates = {
  default?: string;
  onGoing?: string;
  final?: string;
};

export interface DownloadButtonProps {
  className?: string;
  states?: changingStates;
  onClick?: () => void;
}

export interface NavlistProps {
  list: Array<SelectionListNode>;
  active: string;
  handleActive: Function;
  flex?: boolean;
  handleToggle?: Function;
  lastPart?: ReactNode;
}

export type SelectionListNode = { id: string; title: string };

export interface IntroNavbarProps {
  sectionList: Array<SelectionListNode>;
}

export interface BdropProps {
  children?: ReactNode;
  click?: any;
}

export interface AnimatedModalProps {
  open?: boolean;
  action?: (e: MouseEvent) => void;
}

export interface ErrorPageProps {
  code?: string;
}
