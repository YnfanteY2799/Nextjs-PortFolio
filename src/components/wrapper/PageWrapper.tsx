import { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "../ui/head/Head";
import Navbar from "../ui/Navbar/Navbar";

export interface PageWrapperProps {
  children?: JSX.Element | ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps): ReactElement {
  return (
    <div className="relative z-0 bg-primary">

    </div>
  );
}
