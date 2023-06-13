import { IconSetter } from "@/components";

import type { ReactElement } from "react";
import type { IHeroSectionProps } from "@/types";

const NAME = "Yassett J. Ynfante" 

export default function HeroSection({ socials = [], cv = "" }: IHeroSectionProps): ReactElement {  
  return (
    <section className="pt-10 mx-auto pb-14 body-font hero bg-base-100" id="Hero">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-local title-font sm:text-4xl">            
            Hi, I'm {NAME}
          </h1>
          <p className="mb-8 leading-relaxed">Js FullStack Developer</p>
          <div className="flex justify-center gap-6">
            <a className="btn btn-outline btn-primary" href={cv} target="_blank">
              Get My CV !
            </a>
            <a className="btn btn-outline" href="#Contact">
              Contact Me !
            </a>
          </div>
          <div className="flex gap-6 pt-8 pl-4">
            {socials.map(({ link, icon }, idx) => (
              <a href={link} key={idx} rel="noopener noreferrer" target="_blank">
                <div className="tooltip tooltip-bottom" data-tip={icon}>
                  <IconSetter icon={icon} />
                </div>
              </a>
            ))}
          </div>
        </div>


        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            src={`dudul.svg`}
            className="border rounded-lg "
            alt="Profile Pic"
            width={"auto"}
            height={"auto"}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );

}
