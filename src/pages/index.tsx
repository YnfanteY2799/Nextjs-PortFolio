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
import type { data } from "../types/bendProps";

export interface HomeProps {
  name?: string;
  charge?: string;
  about?: string;
}

export default function Home({ name, charge, about }: HomeProps): ReactElement {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <IntroNavbar sectionList={[]} />
        <Hero name={name} charge={charge} />
      </div>
      <About Text={about} />
      <Experience />
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
  const { name, charge, about, experiences }: data = await (
    await Fetch("/basics", "GET", {})
  ).json();

  return { props: { name, charge, about, experiences } };
};
