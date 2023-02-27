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
        container?.current?.childNodes[0]?.classList?.remove(
          "opacity-0",
          "translate-x-2"
        );
        document.body.style.overflow = "hidden";
      }
    })();
  }, [show, container]);

  async function handleClose() {
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
        className="fixed z-50 flex w-full max-w-[450px] top-0 transition-all duration-75 right-0 drop-shadow-3xl h-[100%] drop-shadow-2xl shadow-2xl"
        ref={container}
      >
        <div className="w-full max-w-lg duration-300 translate-x-2 border-l opacity-0 border-main-border bg-main-800">
          <div className="relative">
            <button
              className="absolute items-center justify-center right-4 top-6  h-[28px] w-[28px] flex z-50"
              onClick={handleClose}
            >
              <IoClose className="text-[1.2rem] opacity-70 " />
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
