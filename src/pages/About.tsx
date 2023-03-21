import { ReactElement } from "react";
import { shallow } from "zustand/shallow";
import { useLandingStore } from "@/store/StoreLanding";
import { PageWrapper } from "@/components";

export default function About(): ReactElement {
  const { aboutText } = useLandingStore((s) => s, shallow);
  console.log(aboutText)
  return <>{aboutText}</>;
}
