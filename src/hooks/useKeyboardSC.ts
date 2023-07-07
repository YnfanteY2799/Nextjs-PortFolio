import { useCallback, useEffect, useRef } from "react";

import type { HookKeyPress } from "@/types";

export default function useKeyPress(props: HookKeyPress): void {
  // Props
  const { keys, callback, node = undefined, ctr, shft, ctrsht } = props;

  // Constants
  const callbackRef = useRef(callback);

  // Fn's
  function keyHanlder({ key, ctrlKey }: KeyboardEvent) {
    const pressingKey = keys.some((k) => key === k);
    const pressingCtr = ctr ? ctrlKey && pressingKey : pressingKey;

    if (pressingCtr) callbackRef.current.apply(callback);
  }

  // React use Hooks
  const handleKeyPress = useCallback(keyHanlder, [keys]);

  useEffect(() => {
    callbackRef.current = callback;
  }, []);

  useEffect(() => {
    const targetNode = node ?? document;
    targetNode.addEventListener("keydown", handleKeyPress);

    return () => {
      targetNode.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, node]);
}
