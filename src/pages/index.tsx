import { ReactElement } from "react";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Home(): ReactElement {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
        <Navbar />
        {/* <Hero /> */}
      </div>

      <div className="relative z-0">
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}
