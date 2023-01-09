import React from "react";
import Image from "next/image";
import { sleep } from "../static/util";
import { useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ContributionItem } from "../components/notifications/contributionItem";
import { LikeItem } from "../components/notifications/likeItem";
import { CommentItem } from "../components/notifications/commentItem";

export default ({ show, setShow }) => {
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      if (show) {
        await sleep(1);
        container?.current?.childNodes[0]?.classList?.remove("opacity-0");
        container?.current?.childNodes[0]?.classList?.remove("-translate-y-8");
      }
    })();
  }, [show, container]);

  async function handleClose() {
    container?.current?.childNodes[0]?.classList?.add("opacity-0");
    container?.current?.childNodes[0]?.classList?.add("-translate-y-8");
    await sleep(300);
    setShow(false);
  }

  return (
    show && (
      <div
        className="fixed top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-150 z-100 bg-main-900/90"
        ref={container}
      >
        <div className="duration-300 -translate-y-8 border rounded-lg opacity-0 border-main-border bg-main-800 main">
          <div className="max-w-[550px] w-full min-w-[550px] pb-5 relative">
            <button
              className="absolute items-center justify-center -right-3.5 top-5 rounded-full border border-main-border bg-main-900 h-[28px] w-[28px] flex"
              onClick={handleClose}
            >
              <AiOutlineClose className="text-xs opacity-70" />
            </button>
            <div className="flex items-center border-b border-main-border">
              <ul className="flex h-full gap-5 px-5">
                <li className="py-5 flex text-sm gap-1.5 after:absolute after:content-[''] after:bottom-[-1px] after:h-[2px] after:block after:bg-green-900 relative after:w-full">
                  <span className="text-green-400">Notifications</span>
                  <span className="h-[20px] w-[24px] border-green-900 border bg-green-900/40 text-green-400 text-center font-semibold rounded-md tracking-tighter flex items-center justify-center">
                    3
                  </span>
                </li>
                <li className="py-5  flex text-sm gap-1.5 after:absolute after:content-[''] after:block after:bg-main-border relative after:w-full">
                  <span className=" text-white/70">Following</span>
                  <span className="h-[20px] w-[24px] border-main-border  border text-white/70 rounded-md bg-main-700 text-center font-semibold  tracking-tighter flex items-center justify-center">
                    23
                  </span>
                </li>
              </ul>
            </div>
            <ul className="grid">
              <CommentItem />
              <LikeItem />
              <ContributionItem />
              <LikeItem />
              <CommentItem />
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
