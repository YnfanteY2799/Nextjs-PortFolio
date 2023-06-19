import { type ReactElement } from "react";
import { BlogsCard } from "@/components";

export default function BlogSection(): ReactElement {

  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => (
            <BlogsCard key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
