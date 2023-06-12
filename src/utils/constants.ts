import type { SectionType } from "@/types";

export const TextVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0,
    },
  },
};

export const sectionSubText =
  "sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider";

export const sectionHeadText =
  "font-black md:text-[60px] sm:text-[50px] text-[30px] text-5xl z-0 flex";

export const navbarOptions = [
  { title: "About", to: "About", section: true },
  { title: "Projects", to: "Projects", section: true },
  { title: "Contact", to: "Contact", section: true },
];

export const HomeSectionNavigation: Array<SectionType> = [
  { id: "Hero", img: "Home", name: "Home" },
  { id: "About", img: "Info", name: "About Me" },
  { id: "Tech", img: "Tech", name: "Tech" },
  { id: "Projects", img: "Projects", name: "Projects" },
  { id: "Exp", img: "Exp", name: "Experience" },
  { id: "Contact", img: "Contact", name: "Contact Me" },
];

export const ProjectsDefaults = [
  {
    name: "Test",
    description: "Test",
    tags: [],
    image: "Test",
    source_code_link: "Test",
    index: 0,
  },
  {
    name: "Test",
    description: "Test",
    tags: [],
    image: "Test",
    source_code_link: "Test",
    index: 1,
  },
];

export const expDefaults = [
  {
    title: ["FrontEnd", "Tools"],
    techs: [
      { icon: "HTML", title: "HTML", experience: "5+ Years" },
      { icon: "CSS", title: "CSS", experience: "5+ Years" },
      { icon: "Js", title: "Javascript", experience: "6+ Years" },
      { icon: "Ts", title: "Typescript", experience: "5+ Years" },
      { icon: "React", title: "React", experience: "5+ Years" },
      { icon: "Tailwind", title: "Tailwind", experience: "2+ Years" },
    ],
  },
  {
    title: ["Backend", "Tools"],
    techs: [
      { icon: "NodeJs", title: "NodeJs", experience: "4+ Years" },
      { icon: "Express", title: "Express", experience: "5+ Years" },
      { icon: "Fastify", title: "Fastify", experience: "2+ Years" },
      { icon: "NestJs", title: "Rust", experience: "1+ Years" },
    ],
  },
  {
    title: ["Web", "Framework"],
    techs: [
      { icon: "HTML", title: "HTML", experience: "5+ Years" },
      { icon: "CSS", title: "CSS", experience: "5+ Years" },
      { icon: "Js", title: "Javascript", experience: "6+ Years" },
      { icon: "Prisma", title: "Typescript", experience: "5+ Years" },
    ],
  },
  {
    title: ["Web", "Framework"],
    techs: [
      { icon: "HTML", title: "HTML", experience: "5+ Years" },
      { icon: "CSS", title: "CSS", experience: "5+ Years" },
      { icon: "Js", title: "Javascript", experience: "6+ Years" },
      { icon: "Docker", title: "Typescript", experience: "5+ Years" },
    ],
  },
];

export const selectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-sky-900 dark:text-sky-50";

export const nonSelectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:text-sky-50";
