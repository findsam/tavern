import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export const useCols = () => {
  const size = useWindowSize();
  const [cols, setCols] = useState(null);
  useEffect(() => {
    if (size.width > 1450) setCols(5);
    if (size.width < 1450) setCols(4);
    if (size.width < 1100) setCols(3);
    if (size.width < 850) setCols(2);
    if (size.width < 600) setCols(1);
  }, [size.width]);
  return cols;
};
