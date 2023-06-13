import { motion } from "framer-motion";
import { slideIn } from "@/utils";
import { SectionWrapper } from "@/components";
import Form from "./parts/Form";
import dynamic from "next/dynamic";
import type { ReactElement } from "react";

const RotationCanvas = dynamic(() => import("./parts/RotatoryCanvas").then((x) => x.default), {
  ssr: false,
});

export default function ContactSection(): ReactElement {
  return (
    <SectionWrapper id="Contact">
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.7] bg-base-200 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-primary text-xl uppercase tracking-wider">
            Lets Talk!
          </p>
          <h3 className="font-black md:text-[60px] sm:text-[50px] text-[30px] text-5xl z-0 flex">
            Contact
          </h3>
          <Form />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] p-8"
        >
          <RotationCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
