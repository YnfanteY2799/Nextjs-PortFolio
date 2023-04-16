import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ErrorPage(): ReactElement {
  const { back } = useRouter();

  function goBack() {
    back();
  }

  return (
    <div className="flex justify-center h-screen text-white bg-black">
      <h1 className="text-lg">ERROR CODE : {404} </h1>
    </div>
  );
}
