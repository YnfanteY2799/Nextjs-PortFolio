import { ReactElement } from "react";
import { motion } from "framer-motion";
import Tilt  from "react-parallax-tilt";
import Image from "next/image";

import { fadeIn } from "@/utils";
import { Tag } from "@/components";
import type { ProjectsCardProps } from "@/types/ComponentProps";

export default function Projects({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}: ProjectsCardProps): ReactElement {

  function redirection(str: string) {
    window.open(str, "_blank");
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image src={image} alt={name} className="object-cover w-full h-full rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(_) => redirection(source_code_link)}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <Image
                src="/icons/github.png"
                alt="ghub"
                className="object-contain w-1/2 h-1/2"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(({ name, color }, i) => (
            <Tag key={`tag-##${i}`} cn="text-[14px]" color={color} icon={name}>
              #{name}
            </Tag>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
