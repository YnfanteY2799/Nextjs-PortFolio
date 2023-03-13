import { ReactElement, useState } from "react";

export default function ServiceCard(): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}
