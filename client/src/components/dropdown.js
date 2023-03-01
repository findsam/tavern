import React from "react";
import { sleep } from "../static/util";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default ({ show, setShow, children }) => {
  const container = useRef(null);

  async function handleClose() {
    container?.current?.childNodes[0]?.classList?.add("opacity-0", "-translate-y-2");
    await sleep(300);
    setShow(false);
  }

  useEffect(() => {
    (async () => {
      if (show) {
        await sleep(1);
        container?.current?.childNodes[0]?.classList?.remove(
          "opacity-0",
          "-translate-y-2"
        );
      }
      if (!show) {
        await handleClose();
      }
    })();
  }, [show, container]);

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
    <div
      className="fixed z-50 flex w-full max-w-[252px] top-14 overflow-hidden transition-all duration-75 right-8 drop-shadow-3xl"
      ref={container}
    >
      <div className="w-full max-w-lg overflow-hidden duration-300 -translate-y-2 border rounded-lg opacity-0 border-main-border bg-main-800">
        <div className="relative overflow-hidden b-5">{children}</div>
      </div>
    </div>
  );
};
