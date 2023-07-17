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
  LaravelIcon,
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
  TRPCIcon,
  GraphqlIcon,
  ReactQueryIcon,
  ReduxIcon,
} from "@/components";

import type { ReactElement } from "react";
import type { ISetIconProps } from "@/types";

export default function SetIcon({ icon, size, className }: ISetIconProps): ReactElement | null {
  switch (icon) {
    case "Github":
      return <Github size={size} className={className} />;
    case "Twitter":
      return <Twitter size={size} className={className} />;
    case "Linkedin":
      return <Linkedin size={size} className={className} />;
    case "Instagram":
      return <Instagram size={size} className={className} />;
    case "Menu":
      return <Menu size={size} className={className} />;
    case "Info":
      return <BadgeInfo size={size} className={className} />;
    case "Home":
      return <Home size={size} className={className} />;
    case "Tech":
      return <Cpu size={size} className={className} />;
    case "Projects":
      return <FolderGit2 size={size} className={className} />;
    case "Exp":
      return <Cake size={size} className={className} />;
    case "Contact":
      return <Contact size={size} className={className} />;
    case "MyAnimeList":
      return <MalIcon size={size} className={className} />;
    case "DevTo":
      return <DevIcon size={size} className={className} />;
    case "UpWork":
      return <UpWorkIcon size={size} className={className} />;
    case "Freelance":
      return <FreelanceIcon size={size} className={className} />;
    case "CodeWars":
      return <CodewarsIcon size={size} className={className} />;
    case "LeetCode":
      return <LeetCodeIcon size={size} className={className} />;
    case "Web":
      return <Globe size={size} className={className} />;
    case "FrontEnd":
      return <Globe size={size} className={className} />;
    case "Backend":
      return <Server size={size} className={className} />;
    case "Framework":
    case "Tools":
      return <Wrench size={size} className={className} />;
    case "Js":
      return <JsIcon size={size} className={className} />;
    case "HTML":
      return <HtmlIcon size={size} className={className} />;
    case "Ts":
      return <TsIcon size={size} className={className} />;
    case "CSS":
      return <CssIcon size={size} className={className} />;
    case "NodeJs":
      return <NodeJsIcon size={size} className={className} />;
    case "Express":
      return <ExpressIcon size={size} className={className} />;
    case "Fastify":
      return <FastifyIcon size={size} className={className} />;
    case "React":
      return <ReactIcon size={size} className={className} />;
    case "ReactNative":
      return <ReactNativeIcon size={size} className={className} />;
    case "Tailwind":
      return <TailwindIcon size={size} className={className} />;
    case "Rust":
      return <RustIcon size={size} className={className} />;
    case "Tauri":
      return <TauriIcon size={size} className={className} />;
    case "Git":
      return <GitIcon size={size} className={className} />;
    case "Java":
      return <JavaIcon size={size} className={className} />;
    case "Spring":
      return <SpringIcon size={size} className={className} />;
    case "Oracle":
      return <OracleIcon size={size} className={className} />;
    case "NGX":
      return <NGinxIcon size={size} className={className} />;
    case "Docker":
      return <DockerIcon size={size} className={className} />;
    case "Electron":
      return <ElectronIcon size={size} className={className} />;
    case "MySql":
      return <MySqlIcon size={size} className={className} />;
    case "NextJs":
      return <NextJsIcon size={size} className={className} />;
    case "Prisma":
      return <PrismaIcon size={size} className={className} />;
    case "ReactQuery":
      return <ReactQueryIcon size={size} className={className} />;
    case "Redux":
      return <ReduxIcon size={size} className={className} />;
    case "TRPC":
    case "tRPC":
      return <TRPCIcon size={size} className={className} />;
    case "GraphQl":
    case "Graphql":
      return <GraphqlIcon size={size} className={className} />;
    case "Flutter":
      return <FlutterIcon size={size} className={className} />;
    case "Deno":
      return <DenoIcon size={size} className={className} />;
    case "Laravel":
      return <LaravelIcon size={size} className={className} />;
    case "Bulma":
    case "BulmaCss":
      return <BulmaCssIcon size={size} className={className} />;
    case "BootstrapCss":
    case "Bootstrap":
      return <BootstrapIcon size={size} className={className} />;
    case "Postgre":
      return <PostgreIcon size={size} className={className} />;
    case "NestJs":
      return <NestJsIcon size={size} className={className} />;
    case "Golang":
      return <GolangIcon size={size} className={className} />;
    case "Jest":
      return <JestIcon size={size} className={className} />;
    case "Mocha":
      return <MochaIcon size={size} className={className} />;
    case "StoryBook":
      return <StoryBookIcon size={size} className={className} />;
    case "Kotlin":
      return <KotlinIcon size={size} className={className} />;
    case "Dart":
      return <DartIcon size={size} className={className} />;
    default:
      return null;
  }
}
