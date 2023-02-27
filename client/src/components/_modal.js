import React from "react";
import Image from "next/image";
import { sleep } from "../static/util";
import { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ContributionItem } from "../components/notifications/contributionItem";
import { LikeItem } from "../components/notifications/likeItem";
import { CommentItem } from "../components/notifications/commentItem";

export default ({ show, setShow, children }) => {
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      if (show) {
        await sleep(1);
        container?.current?.classList?.remove("opacity-0");
        container?.current?.childNodes[0]?.classList?.remove(
          "opacity-0",
          "translate-x-2"
        );
        document.body.style.overflow = "hidden";
      }
    })();
  }, [show, container]);

  async function handleClose() {
    container?.current?.classList?.add("opacity-0");
    container?.current?.childNodes[0]?.classList?.add("opacity-0", "translate-x-2");
    document.body.style.overflow = "unset";
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
        className="fixed z-50 flex top-0 right-0 drop-shadow-3xl h-[100%] transition-opacity ease-[cubic-bezier(.17,.67,.83,.67)] duration-75 drop-shadow-xs bg-main-800/60 w-full opacity-0"
        ref={container}
      >
        <div className="w-full max-w-lg ml-auto [transition:transform_300ms,opacity_200ms] ease-[cubic-bezier(.17,.67,.83,.67)] translate-x-2 border-l rounded-tl-lg rounded-bl-lg opacity-0 border-main-border bg-main-800">
          <div className="relative max-h-full overflow-x-visible overflow-y-scroll">
            <button
              className="fixed z-50 flex items-center justify-center rounded-full right-5 top-5"
              onClick={handleClose}
            >
              <IoClose className="text-xl opacity-70" />
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
