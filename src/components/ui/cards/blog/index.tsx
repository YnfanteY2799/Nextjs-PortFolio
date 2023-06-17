import { Eye, MessageCircle, ArrowRight } from "lucide-react";

import type { ReactElement } from "react";
import type { IBlogCardProps } from "@/types";

export default function BlogCard({}: IBlogCardProps): ReactElement {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden border-2 border-primary rounded-2xl border-opacity-60">
        <img
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src="https://dummyimage.com/722x402"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            CATEGORY
          </h2>
          <h1 className="mb-3 text-lg font-medium title-font text-primary">Shooting Stars</h1>
          <p className="mb-3 leading-relaxed text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, commodi quia. Eaque
            dolores, ab nulla architecto porro dolorum odit officiis!
          </p>
          <div className="flex flex-wrap items-center ">
            <a className="inline-flex items-center text-primary md:mb-2 lg:mb-0 hover:underline hover:cursor-pointer">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none border-r-2 text-secondary border-primary lg:ml-auto md:ml-0">
              <Eye className="w-4 h-4 mr-1" />
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-secondary">
              <MessageCircle className="w-4 h-4 mr-1" />6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
