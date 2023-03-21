export const TextVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0,
    },
  },
};

export const sectionSubText = "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider";

export const sectionHeadText =
  "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]";

export const staggerContainer = (staggerChildren?: any, delayChildren?: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const fadeIn = (direction: string, type: any, delay: any, duration: any) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const selectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:bg-sky-900 dark:text-sky-50";

export const nonSelectedFloatingSection =
  "flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 dark:text-sky-50";

export const slideIn = (direction: string, type: any, delay: any, duration: any) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
