import React from "react";
import { sleep } from "../static/util";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default ({ show, setShow, children }) => {
  const container = useRef(null);
  useEffect(() => {
    (async () => {
      if (show) {
        await sleep(1);
        container?.current?.childNodes[0]?.classList?.remove("opacity-0");
      }
    })();
  }, [show, container]);

  async function handleClose() {
    container?.current?.childNodes[0]?.classList?.add("opacity-0");
    await sleep(300);
    setShow(false);
  }

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    show && (
      <div
        className="absolute z-10 flex mt-2 overflow-hidden transition-all duration-150 right-5"
        ref={container}
      >
        <div className="w-full max-w-sm duration-300 border rounded-lg opacity-0 border-main-border bg-main-800">
          <div className="relative b-5">{children}</div>
        </div>
      </div>
    )
  );
};
