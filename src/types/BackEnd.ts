export type AboutCard = {};

export type Experience = {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points: string[];
};

export type ProjectCard = {
  name: string;
  description: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  image: string;
  source_code_link: string;
};

export type data = {
  name: string;
  charge: string;
  about: string;
  aboutCards?: Array<AboutCard>;
  experiences: Array<Experience>;
  projects?: Array<ProjectCard>;
};
