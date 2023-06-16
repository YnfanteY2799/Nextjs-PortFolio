import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

import { fadeIn } from "@/utils";

import type { ReactElement } from "react";
import type { IProjectsCardProps } from "@/types";
import Tag from "./parts/Tag";

export default function Projects({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}: IProjectsCardProps): ReactElement {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-base-200 p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <Image
            src={`/projects/${image}.png`}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
            width={100}
            height={100}
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <a
              href={source_code_link}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <Github className="object-contain w-1/2 text-white h-1/2" size={50} />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-primary">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map(({ name, color }, i) => (
            <Tag key={`tag-##${i}`} cn=" text-[14px]" color={color} icon={name} >
              {name}
            </Tag>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
