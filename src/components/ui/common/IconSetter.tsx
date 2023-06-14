import {
  Github,
  Globe,
  Instagram,
  Linkedin,
  Wrench,
  Server,
  Twitter,
  Menu,
  BadgeInfo,
  Cpu,
  FolderGit2,
  Cake,
  Contact,
  Home,
} from "lucide-react";
import {
  DevIcon,
  MalIcon,
  JsIcon,
  HtmlIcon,
  TsIcon,
  CssIcon,
  NodeJsIcon,
  ReactIcon,
  TailwindIcon,
  ExpressIcon,
  FastifyIcon,
  RustIcon,
  TauriIcon,
  ReactNativeIcon,
  GitIcon,
  JavaIcon,
  SpringIcon,
  OracleIcon,
  NGinxIcon,
  DockerIcon,
  ElectronIcon,
  MySqlIcon,
  NextJsIcon,
  PrismaIcon,
  FlutterIcon,
  DenoIcon,
  BulmaCssIcon,
  PostgreIcon,
  NestJsIcon,
  BootstrapIcon,
  GolangIcon,
  JestIcon,
  MochaIcon,
  StoryBookIcon,
  KotlinIcon,
  DartIcon,
  UpWorkIcon,
  FreelanceIcon,
  CodewarsIcon,
  LeetCodeIcon,
} from "@/components";

import type { ReactElement } from "react";
import type { ISetIconProps } from "@/types";

export default function SetIcon({ icon, size }: ISetIconProps): ReactElement {
  switch (icon) {
    case "Github":
      return <Github size={size} />;
    case "Twitter":
      return <Twitter size={size} />;
    case "Linkedin":
      return <Linkedin size={size} />;
    case "Instagram":
      return <Instagram size={size} />;
    case "Menu":
      return <Menu size={size} />;
    case "Info":
      return <BadgeInfo size={size} />;
    case "Home":
      return <Home size={size} />;
    case "Tech":
      return <Cpu size={size} />;
    case "Projects":
      return <FolderGit2 size={size} />;
    case "Exp":
      return <Cake size={size} />;
    case "Contact":
      return <Contact size={size} />;
    case "MyAnimeList":
      return <MalIcon size={size} />;
    case "DevTo":
      return <DevIcon size={size} />;
    case "UpWork":
      return <UpWorkIcon size={size} />;
    case "Freelance":
      return <FreelanceIcon size={size} />;
    case "CodeWars":
      return <CodewarsIcon size={size} />;
    case "LeetCode":
      return <LeetCodeIcon size={size} />;
    case "Web":
      return <Globe size={size} />;
    case "FrontEnd":
      return <Globe size={size} />;
    case "Backend":
      return <Server size={size} />;
    case "Framework":
    case "Tools":
      return <Wrench size={size} />;
    case "Js":
      return <JsIcon size={size} />;
    case "HTML":
      return <HtmlIcon size={size} />;
    case "Ts":
      return <TsIcon size={size} />;
    case "CSS":
      return <CssIcon size={size} />;
    case "NodeJs":
      return <NodeJsIcon size={size} />;
    case "Express":
      return <ExpressIcon size={size} />;
    case "Fastify":
      return <FastifyIcon size={size} />;
    case "React":
      return <ReactIcon size={size} />;
    case "ReactNative":
      return <ReactNativeIcon size={size} />;
    case "Tailwind":
      return <TailwindIcon size={size} />;
    case "Rust":
      return <RustIcon size={size} />;
    case "Tauri":
      return <TauriIcon size={size} />;
    case "Git":
      return <GitIcon size={size} />;
    case "Java":
      return <JavaIcon size={size} />;
    case "Spring":
      return <SpringIcon size={size} />;
    case "Oracle":
      return <OracleIcon size={size} />;
    case "NGX":
      return <NGinxIcon size={size} />;
    case "Docker":
      return <DockerIcon size={size} />;
    case "Electron":
      return <ElectronIcon size={size} />;
    case "MySql":
      return <MySqlIcon size={size} />;
    case "NextJs":
      return <NextJsIcon size={size} />;
    case "Prisma":
      return <PrismaIcon size={size} />;
    case "Flutter":
      return <FlutterIcon size={size} />;
    case "Deno":
      return <DenoIcon size={size} />;
    case "Bulma":
    case "BulmaCss":
      return <BulmaCssIcon size={size} />;
    case "BootstrapCss":
    case "Bootstrap":
      return <BootstrapIcon size={size} />;
    case "Postgre":
      return <PostgreIcon size={size} />;
    case "NestJs":
      return <NestJsIcon size={size} />;
    case "Golang":
      return <GolangIcon size={size} />;
    case "Jest":
      return <JestIcon size={size} />;
    case "Mocha":
      return <MochaIcon size={size} />;
    case "StoryBook":
      return <StoryBookIcon size={size} />;
    case "Kotlin":
      return <KotlinIcon size={size} />;
    case "Dart":
      return <DartIcon size={size} />;
    default:
      return <></>;
  }
}
