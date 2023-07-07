import { useEffect } from "react";
import type { DispatchHookParams } from "@/types";

export default function useDispatchOnKey({ pressedKey, callback }: DispatchHookParams) {
  useEffect(() => {
    function dispatchOnKeyPress({ key }: KeyboardEvent) {
      key === pressedKey ? callback() : null;
    }
    document.body.addEventListener("keydown", dispatchOnKeyPress, { passive: true });
    return (): void => {
      document.body.removeEventListener("keydown", dispatchOnKeyPress);
    };
  }, [callback]);
}
