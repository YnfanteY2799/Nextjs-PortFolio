import { ReactElement } from "react";
import { DownloadButtonProps } from "@/types/ComponentProps";

export default function DownloadButton({ className }: DownloadButtonProps): ReactElement {
  const buttonStates = {
    default: "Download",
    going: "Downloading",
    final: "Done",
  };

  return (
    <button className="flex overflow-hidden relative items-center pl-6 space-x-6 h-14 bg-blue-500 rounded group">
      <span className="relative text-base text-white uppercase">Download</span>
      <div className="w-14 bg-blue-600 transition duration-300 -translate-y-7 group-hover:translate-y-7">
        <div className="flex h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto w-5 h-5 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="flex h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto w-5 h-5 fill-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
