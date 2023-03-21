import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  IntroNavbar,
} from "@/components";
import { Fetch } from "@/utils";
import type { data } from "../types/BackEnd";
import type { HomeProps } from "@/types/ComponentProps";

export default function Home({
  name,
  charge,
  about,
  aboutCards,
  experiences,
}: HomeProps): ReactElement {
  return (
    <div className="relative z-0 bg-gradient">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <IntroNavbar sectionList={[]} />
        <Hero name={name} charge={charge} />
      </div>
      <About Text={about} cardsInfo={aboutCards} />
      <Experience experiences={experiences} />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name, charge, about, experiences, aboutCards }: data = await (
    await Fetch("/basics", "GET", {})
  ).json();

  return { props: { name, charge, about, experiences, aboutCards } };
};
