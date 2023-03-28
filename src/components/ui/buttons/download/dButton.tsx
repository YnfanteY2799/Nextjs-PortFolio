import { ReactElement } from "react";
import { DownloadButtonProps } from "@/types/ComponentProps";
import "./dbutton.module.scss";

export default function DownloadButton({ className }: DownloadButtonProps): ReactElement {
  const buttonStates = {
    default: "Download",
    going: "Downloading",
    final: "Done",
  };

  return (
    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " + className}>
      {buttonStates.default}
    </button>
  );
}
