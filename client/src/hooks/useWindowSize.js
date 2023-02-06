import { useState, useEffect } from "react";
import { getWindow, debounce } from "../static/util";

export const useWindowSize = () => {
  const window = getWindow();
  const getSize = () => ({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    const handleResizeDebounced = debounce(() => {
      setWindowSize(getSize());
    }, 500);
    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);
  return windowSize;
};
