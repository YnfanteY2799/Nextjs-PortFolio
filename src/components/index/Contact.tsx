import { ReactElement } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../wrapper";
import { sectionHeadText, sectionSubText, slideIn } from "@/utils/utils";
import { RotationCanvas } from "../canvas";
import ContactForm from "../ui/forms/ContactForm";

export default function Contact(): ReactElement {
  return (
    <SectionWrapper id="Contact">
      <div className="flex overflow-hidden flex-col-reverse gap-10 xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.7] bg-black-100 p-8 rounded-2xl"
        >
          <p className={sectionSubText}>Lets Talk!</p>
          <h3 className={sectionHeadText}>Contact.</h3>

          <ContactForm />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <RotationCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
