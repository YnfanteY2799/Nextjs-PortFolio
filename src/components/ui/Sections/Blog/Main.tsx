import { ReactElement, useState } from "react";

export default function BlogSection() : ReactElement{
  const [text, setText] = useState("Ts" as string);

  return <>Hey!{text}</>;
}
