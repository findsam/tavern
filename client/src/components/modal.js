import React from "react";
import Image from "next/image";
import { sleep } from "../static/util";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContributionItem } from "../components/notifications/contributionItem";
import { LikeItem } from "../components/notifications/likeItem";
import { CommentItem } from "../components/notifications/commentItem";

export default ({ show, setShow, children }) => {
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      if (show) {
        await sleep(1);
        container?.current?.childNodes[0]?.classList?.remove("opacity-0");
        container?.current?.childNodes[0]?.classList?.remove("-translate-y-8");
        document.body.style.overflow = "hidden";
      }
    })();
  }, [show, container]);

  async function handleClose() {
    container?.current?.childNodes[0]?.classList?.add("opacity-0");
    container?.current?.childNodes[0]?.classList?.add("-translate-y-8");
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
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-3 overflow-hidden transition-all duration-150 bg-main-900/90"
        ref={container}
      >
        <div className="overflow-hidden duration-300 -translate-y-8 border rounded-lg opacity-0 border-main-border bg-main-800 max-w-[535px] w-full">
          <div className="relative b-5">{children}</div>
        </div>
      </div>
    )
  );
};
