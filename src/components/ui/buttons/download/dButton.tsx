import { ReactElement } from "react";
import { DownloadButtonProps } from "@/types/ComponentProps";
import styles from "./dbuton.module.scss";

export default function DownloadButton({ className }: DownloadButtonProps): ReactElement {
  const buttonStates = {
    default: "Download",
    going: "Downloading",
    final: "Done",
  };

  return (
    <button className={styles.d1btn + " active" + className} onClick={() => {


    }}>
      <div>A</div>
    </button>
  );
}
