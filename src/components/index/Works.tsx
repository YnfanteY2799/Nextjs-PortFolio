import { ReactElement, useState } from "react";
import { SectionWrapper } from "../wrapper";

export default function Works({ id }: { id?: string }): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return <SectionWrapper id={id}>Hey!{text}</SectionWrapper>;
}
