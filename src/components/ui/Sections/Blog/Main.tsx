import { ReactElement, useState } from "react";
import { BlogsCard } from "../../cards";

export default function BlogSection(): ReactElement {
  const [text, setText] = useState("Ts" as string);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[1,1,1,1,1,1,1,1,1,1].map((_,idx) => (
            <BlogsCard key={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
}
