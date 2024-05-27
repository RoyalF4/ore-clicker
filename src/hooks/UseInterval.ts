import { useRef, useEffect } from "react";

type Callback = () => void;

export default function useInterval(callback: Callback, interval: number) {
  const savedCallback = useRef<Callback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (interval) {
      const id = setInterval(() => {
        savedCallback.current?.();
      }, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
}
