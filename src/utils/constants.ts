import type { IProjectsCardProps, SectionType } from "@/types";

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

/* Un used here only due to identification needs */

export const sectionSubText =
  "sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider";

export const sectionHeadText =
  "font-black md:text-[60px] sm:text-[50px] text-[30px] text-5xl z-0 flex";

/* Un used here only due to identification needs */

export const navbarOptions = [
  { title: "About", to: "About", section: true },
  { title: "Projects", to: "Projects", section: true },
  { title: "Contact", to: "Contact", section: true },
  { title: "Blog", to: "Blog", section: false },
];

export const HomeSectionNavigation: Array<SectionType> = [
  { id: "Hero", img: "Home", name: "Home" },
  { id: "About", img: "Info", name: "About Me" },
  { id: "Tech", img: "Tech", name: "Tech" },
  { id: "Projects", img: "Projects", name: "Projects" },
  { id: "Exp", img: "Exp", name: "Experience" },
  { id: "Contact", img: "Contact", name: "Contact Me" },
];

export const ProjectsDefaults: Array<IProjectsCardProps> = [
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
  {
    name: "Test",
    description: "Test",
    image: "test",
    index: 0,
    source_code_link: "https://github.com/YnfanteY2799/Nextjs-PortFolio",
    tags: [{ name: "Tailwind", color: "GRAY" }],
  },
];

export const expDefaults = [
  {
    titles: ["FrontEnd", "Tools"],
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
    titles: ["Backend", "Tools"],
    techs: [
      { icon: "NodeJs", title: "NodeJs", experience: "4+ Years" },
      { icon: "Express", title: "Express", experience: "5+ Years" },
      { icon: "Fastify", title: "Fastify", experience: "2+ Years" },
      { icon: "NestJs", title: "Rust", experience: "1+ Years" },
    ],
  },
  {
    titles: ["Web", "Framework"],
    techs: [
      { icon: "HTML", title: "HTML", experience: "5+ Years" },
      { icon: "CSS", title: "CSS", experience: "5+ Years" },
      { icon: "Js", title: "Javascript", experience: "6+ Years" },
      { icon: "Prisma", title: "Typescript", experience: "5+ Years" },
    ],
  },
  {
    titles: ["Web", "Framework"],
    techs: [
      { icon: "HTML", title: "HTML", experience: "5+ Years" },
      { icon: "CSS", title: "CSS", experience: "5+ Years" },
      { icon: "Js", title: "Javascript", experience: "6+ Years" },
      { icon: "Docker", title: "Typescript", experience: "5+ Years" },
    ],
  },
];

export const selectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-primary";

export const nonSelectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5";

export const springIn = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
};
