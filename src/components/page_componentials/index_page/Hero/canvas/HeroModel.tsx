import { ReactElement, useState } from "react";

export interface ModelProps {
  isMobile?: boolean;
}

export default function Model({ isMobile }: ModelProps): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}
