import { ReactElement, useEffect } from "react";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
} from "@/components/page_componentials";
import Navbar from "@/components/ui/Navbar/Navbar";
import { useLandingStore } from "@/store/StoreLanding";
import { shallow } from "zustand/shallow";

export default function Home(): ReactElement {
  const { history, perkz, techs, aboutText, projects, projectsText } =
    useLandingStore((s) => s, shallow);

  const { getData, addData } = useLandingStore();

  useEffect(() => {
    addData({ aboutText: "Hey" });
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
