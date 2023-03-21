import { ReactNode } from "react";

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
  tags: Array<{
    name: string;
    color: string;
  }>;
  image: string;
  source_code_link: string;
  index: number;
}

export interface TagProp {
  color?: "BLUE" | "GREEN" | "ORANGE" | "RED" | "GRAY";
  icon?: string;
  children?: ReactNode;
  upper?: boolean;
  cn?: string;
}
