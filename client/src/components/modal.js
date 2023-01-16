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

  return (
    show && (
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-3 transition-all duration-150 bg-main-900/90"
        ref={container}
      >
        <div className="duration-300 -translate-y-8 border rounded-lg opacity-0 border-main-border bg-main-800 main">
          <div className="max-w-[535px] w-full b-5 relative">
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
            <ul className="grid max-h-[600px] h-full overflow-y-scroll">
              <CommentItem />
              <LikeItem />
              <ContributionItem />
              <LikeItem />
              <CommentItem />
              <ContributionItem />
              <div className="">
                <div className="flex gap-5 p-5">
                  <button
                    className="flex-1 px-4 min-h-[38px] text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150"
                    onClick={handleClose}
                  >
                    Close Notifications
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
