import { ReactElement, useState } from "react";

export default function RotationCanvas() : ReactElement{
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}
