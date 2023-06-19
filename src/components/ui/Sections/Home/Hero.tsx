import { IconSetter } from "@/components";

import type { ReactElement } from "react";
import type { IHeroSectionProps } from "@/types";

export default function HeroSection({ socials = [], cv = "" }: IHeroSectionProps): ReactElement {
  return (
    <section className="pt-10 mx-auto pb-14 body-font hero bg-base-100" id="Hero">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-local title-font sm:text-4xl">
            Hi, I'm Yassett J. Ynfante
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
          <div className="flex gap-3 pt-8 lg:gap-6">
            {socials.map(({ link, icon }, idx) => (
              <div className="pb-1 tooltip tooltip-bottom" data-tip={icon} key={idx}>
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn btn-outline "
                >
                  <IconSetter icon={icon} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            src="dudul.svg"
            className="border rounded-lg "
            alt="Profile Pic"
            width="auto"
            height="auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
