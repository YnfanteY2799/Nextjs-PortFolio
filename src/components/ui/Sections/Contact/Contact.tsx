import { motion } from "framer-motion";
import { sectionHeadText, sectionSubText, slideIn } from "@/utils";
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
          <p className={sectionSubText}>Lets Talk!</p>
          <h3 className={sectionHeadText}>Contact</h3>
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
