import { PlayCircle, PauseCircle } from "lucide-react";
import type { MouseEventHandler, ReactElement } from "react";

export interface PlayIconProps {
  ok?: boolean;
  size?: number;
  onClick: MouseEventHandler;
  className?: string;
}

export default function PlayIconComponent({
  ok,
  onClick,
  className,
  size,
}: PlayIconProps): ReactElement | null {
  return (
    <label className="swap" onClick={onClick}>
      {ok ? (
        <PlayCircle size={size} className={ok ? "swap-off" : "swap-on" + className} />
      ) : (
        <PauseCircle size={size} className={ok ? "swap-on" : "swap-off" + className} />
      )}
    </label>
  );
}
