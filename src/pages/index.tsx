import {
  PageWrapper,
  ExperienceSection,
  AboutSection,
  HeroSection,
  TechSection,
  ProjectsSection,
  ContactSection,
  FloatingNavigation,
} from "@/components";
import { useSessionStore } from "@/store";
import { HomeSectionNavigation } from "@/utils";

import type { ReactElement } from "react";
import type { IHomeProps } from "@/types";
import type { GetStaticProps } from "next";

export default function Home(props: IHomeProps): ReactElement {
  // Props
  const { initialSocials, aboutCards, aboutText, experiences, techs, cv, projects } = props;

  // Hooks
  const { theme, setTheme } = useSessionStore();

  return (
    <PageWrapper Theme={theme} ChangeTheme={setTheme}>
      <FloatingNavigation sections={HomeSectionNavigation} />
      <HeroSection socials={initialSocials} cv={cv} />
      <AboutSection Services={aboutCards} Text={aboutText} />
      <TechSection techs={techs} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experiences} theme={theme} />
      <ContactSection />
    </PageWrapper>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  const { NEXT_PUBLIC_GITHUB_LINK = "", NEXT_PUBLIC_DRIVE_LINK = "" } = process.env;

  try {
    const data = await fetch(NEXT_PUBLIC_GITHUB_LINK);
    if (!data.ok) return { props: {} };
    else {
      return { props: { ...((await data.json()) as IHomeProps), cv: NEXT_PUBLIC_DRIVE_LINK } };
    }
  } catch (e) {
    console.error("Error loading : ", e);
    return { props: {} };
  }
};
