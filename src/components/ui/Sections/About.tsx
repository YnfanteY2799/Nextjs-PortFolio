import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { SectionHeader, SectionWrapper, ServiceCard } from "@/components";
import { fadeIn } from "@/utils";

import type { ReactElement } from "react";
import type { IAboutSectionProps } from "@/types";

export default function AboutSection({ Text, Services = [] }: IAboutSectionProps): ReactElement {
  const { push } = useRouter();

  function onClick(title: string) {
    push(`/About#${title.replace(" ", "_")}`);
  }

  return (
    <SectionWrapper id="About">
      <SectionHeader Head="About Me" SubHead="Intro" MoreDetails="/About" />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]"
      >
        {Text}
      </motion.p>
      <div className="flex flex-wrap gap-8 mt-16">
        {Services.map((x, i) => (
          <ServiceCard {...x} key={i} click={onClick} />
        ))}
      </div>
    </SectionWrapper>
  );
}
