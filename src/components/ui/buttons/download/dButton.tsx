import { ReactElement } from "react";
import { DownloadButtonProps } from "@/types/ComponentProps";

export default function DownloadButton({ className, onClick }: DownloadButtonProps): ReactElement {
  return (
    <button
      className="px-4 h-8 text-sm text-indigo-100 rounded-lg transition-colors duration-150 transparent focus:shadow-outline hover:bg-gray-800"
      onClick={onClick}
    >
      Cv
    </button>
  );
}
