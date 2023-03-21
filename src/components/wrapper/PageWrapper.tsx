import { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

export interface PageWrapperProps {
  children?: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps): ReactElement {
  return <div className="relative z-0 bg-primary">{children}</div>;
}
