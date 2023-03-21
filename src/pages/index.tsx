import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import {
  Hero,
  About,
  Experience,
  TechStacks,
  Works,
  Feedbacks,
  Contact,
  IntroNavbar,
} from "@/components";
import { Fetch } from "@/utils";
import type { data } from "../types/BackEnd";
import type { HomeProps, SectionType } from "@/types/ComponentProps";
import Floating from "@/components/ui/Navbar/floating/Floating";

export default function Home({
  name,
  charge,
  about,
  aboutCards,
  experiences,
  sections,
}: HomeProps): ReactElement {
  return (
    <div className="relative z-0 bg-primary">
      <Floating sections={sections} />
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <IntroNavbar sectionList={[]} />
        <Hero name={name} charge={charge} id="" />
      </div>
      <About Text={about} cardsInfo={aboutCards} />
      <Experience experiences={experiences} />
      <TechStacks />
      <Works id="Projects" />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  const { name, charge, about, experiences, aboutCards }: data = await (
    await Fetch("/basics", "GET", {})
  ).json();

  const sections: Array<SectionType> = [
    { id: "", name: "Home", img: "home" },
    { id: "About", name: "About", img: "info" },
    { id: "Exp", name: "Experience", img: "stars" },
    { id: "Projects", name: "Projects", img: "brief" },
    { id: "Contact", name: "Contact", img: "world" },
  ];

  return { props: { name, charge, about, experiences, aboutCards, sections } };
};
