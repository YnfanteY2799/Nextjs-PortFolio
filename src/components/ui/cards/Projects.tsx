import { ReactElement } from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "@/utils/utils";
import { ProjectsCardProps } from "@/types/ComponentProps";
import Image from "next/image";
import { Tag } from "@/components";

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
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="object-cover w-full h-full rounded-2xl" />
          <div className="flex absolute inset-0 justify-end m-3 card-img_hover">
            <div
              onClick={(_) => redirection(source_code_link)}
              className="flex justify-center items-center w-10 h-10 rounded-full cursor-pointer black-gradient"
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
            <Tag key={`tag-##${i}`} cn={`text-[14px] ${color}`}>
              #{name}
            </Tag>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
