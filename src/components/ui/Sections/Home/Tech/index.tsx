import { type ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader, SectionWrapper } from "@/components";
import { expDefaults, fadeIn } from "@/utils";
import TechPiece from "./parts/Pieces";

import type { ITechSectionProps, T_CarrouselDir } from "@/types";
import PlayIcon from "./parts/PlayIcon";

export default function Tech({ techs = expDefaults }: ITechSectionProps): ReactElement {
  const [index, setIndex] = useState(0 as number);
  const [direction, setDirection] = useState<T_CarrouselDir>("R");
  const [play, setPlay] = useState(true as boolean);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  function prevSlide() {
    direction !== "L" && setDirection("L");
    setIndex((prevIndex) => (prevIndex !== 0 ? prevIndex - 1 : techs.length - 1));
  }
  function nextSlide() {
    direction !== "R" && setDirection("R");
    setIndex((prevIndex) => (prevIndex !== techs.length - 1 ? prevIndex + 1 : 0));
  }

  function playSliding() {
    setPlay(!play);
  }

  function activateIntervals() {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === techs.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    setIntervalId((_) => interval);
  }

  function pauseInterval() {
    clearInterval(intervalId);
  }

  useEffect(() => {
    if (!play) activateIntervals();
    else pauseInterval();

    return () => pauseInterval();
  }, [play]);

  return (
    <SectionWrapper id="Tech">
      <SectionHeader
        Head="TechStacks"
        SubHead="These are the stacks i've used "
        MoreDetails="Tech"
      />
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full mt-4">
        <div className="flex lg:justify-end md:justify-end">
          <div className="flex w-auto h-auto border rounded-3xl ">
            <ChevronLeft size={30} onClick={prevSlide} className="hover:cursor-pointer" />
            <PlayIcon size={30} onClick={playSliding} className="hover:cursor-pointer" ok={play} />
            <ChevronRight size={30} onClick={nextSlide} className="hover:cursor-pointer" />
          </div>
        </div>
        <TechPiece {...techs[index]} key={index} dir={direction} />
      </motion.div>
    </SectionWrapper>
  );
}
