import { ReactElement, useState } from "react";
import { PageWrapper } from "@/components";

export default function About() : ReactElement{
  const [text, setText] = useState("Ts" as string);

  return <PageWrapper>Hey!{text}</PageWrapper>;
}
