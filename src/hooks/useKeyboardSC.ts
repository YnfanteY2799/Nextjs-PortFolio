import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type keyPress = { keys: string[]; callback: () => void; node?: any; ctr?: boolean };

export default function useKeyPress({ keys, callback, node = null, ctr }: keyPress): void {
  // Constants
  const callbackRef = useRef(callback);

  // Fn's
  function keyHanlder({ key, ctrlKey, shiftKey }: KeyboardEvent) {
    const pressingKey = keys.some((k) => key === k);
    const pressingCtr = ctr ? ctrlKey && pressingKey : pressingKey;

    if (pressingCtr) callbackRef.current.apply(callback);
  }

  // React use Hooks
  const handleKeyPress = useCallback(keyHanlder, [keys]);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const targetNode = node ?? document;
    targetNode && targetNode.addEventListener("keydown", handleKeyPress);

    return () => {
      targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, node]);
}
