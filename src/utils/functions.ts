import type { T_Theme, T_NavItem } from "@/types";

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

export const fadeIn = (direction: string, type: any, delay: number, duration: any) => {
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

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
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

export function handleChangeTheme(Theme: T_Theme, ChangeTheme: Function) {
  Theme === "night" ? ChangeTheme("cupcake") : ChangeTheme("night");
}

export function cleanAndFilter(x: Array<T_NavItem>): Array<T_NavItem> {
  return x.map((xs) => ({ ...xs, section: false }));
}

export function validateEmailRX(str: string): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(str);
}
