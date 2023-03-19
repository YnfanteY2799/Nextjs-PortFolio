import { ReactElement } from "react";
import { PageWrapper } from "@/components";
import { useLandingStore } from "@/store/StoreLanding";
import { shallow } from "zustand/shallow";

export default function About(): ReactElement {
  const { aboutText } = useLandingStore((s) => s, shallow);
  console.log(aboutText)
  return <>{aboutText}</>;
}
