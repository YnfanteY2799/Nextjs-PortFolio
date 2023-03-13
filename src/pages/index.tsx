import { ReactElement } from "react";
import Navbar from "@/components/ui/Navbar/Navbar";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact
} from "@/components/page_componentials";

export default function Home(): ReactElement {
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
