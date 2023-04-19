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
  PageWrapper,
  Floating,
} from "@/components";
import { Fetch } from "@/utils";
import type { data, HomeProps } from "@/types";

export default function Home({
  name,
  charge,
  about,
  aboutCards,
  experiences,
  sections,
  projects,
}: HomeProps): ReactElement {
  return (
    <PageWrapper>
      <div className="relative z-0 bg-primary">
        <Floating sections={sections} />

        <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
          <IntroNavbar />
          <Hero name={name} charge={charge} id="" />
        </div>
        <About Text={about} cardsInfo={aboutCards} />
        <Experience experiences={experiences} />
        <TechStacks />
        <Works id="Projects" projects={projects} />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </PageWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (_) => {
  const basicData: data = await (await Fetch("/basics")).json();
  return { props: basicData };
};
