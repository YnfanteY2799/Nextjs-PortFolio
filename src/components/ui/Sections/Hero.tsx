import { IconSetter } from "@/components";

import type { ReactElement } from "react";
import type { IHeroSectionProps } from "@/types";

export default function HeroSection({ socials = [], cv = "" }: IHeroSectionProps): ReactElement {
  return (
    <div className="min-h-screen hero bg-base-100" id="Hero">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={`dudul.svg`}
          className="max-w-sm rounded-lg"
          alt="Profile Pic"
          width={"auto"}
          height={"auto"}
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex gap-6">
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
      </div>
    </div>
  );
}
