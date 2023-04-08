import { ReactElement } from "react";
import { HeroCanvas } from "@/components/canvas";
import type { HeroProps } from "@/types/ComponentProps";
import AnimatedDown from "../animation/Down";

export default function Hero({ name, charge, id }: HeroProps): ReactElement {
  return (
    <section className="relative mx-auto w-full h-screen" id={id}>
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-orange-600">{name} </span>
          </h1>
          <p className="mt-2 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-white-100">
            {charge}
            <br className="hidden sm:block" />
          </p>
        </div>
      </div>
      <HeroCanvas />
      <AnimatedDown />
    </section>
  );
}
