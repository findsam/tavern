import { useState, useEffect } from "react";
import { getWindow } from "../static/util";

export function useWindowScroll() {
  const [isAtTop, setIsAtTop] = useState(true);
  const window = getWindow();

  function onScroll() {
    if ((getWindow()?.pageYOffset || 0) < 20) setIsAtTop(true);
    else if (isAtTop) setIsAtTop(false);
  }

  useEffect(() => {
    if (!window) return;
    setTimeout(onScroll, 0);
    getWindow()?.addEventListener("scroll", onScroll);
    return () => getWindow()?.removeEventListener("scroll", onScroll);
  }, []);

  return isAtTop;
}
