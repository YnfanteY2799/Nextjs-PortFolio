import { ReactElement } from "react";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  IntroNavbar
} from "@/components";

export default function Home(): ReactElement {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <IntroNavbar />
        <Hero />
      </div>
      <About />
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
