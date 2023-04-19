import { ReactElement } from "react";
import type { DownloadButtonProps } from "@/types/ComponentProps";

export default function DownloadButton({ className, onClick }: DownloadButtonProps): ReactElement {
  return (
    <button
      className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 rounded-lg outline outline-offset-2 outline-1 transparent focus:shadow-outline hover:bg-gray-800"
      onClick={onClick}
    >
      Cv
    </button>
  );
}
