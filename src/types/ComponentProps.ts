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

export interface HomeProps {
  name?: string;
  charge?: string;
  about?: string;
  aboutCards?: Array<any>;
  experiences?: Array<Experience>;
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
}
